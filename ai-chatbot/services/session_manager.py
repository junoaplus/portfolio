"""
완벽한 세션 관리 시스템

기능:
1. 다중 사용자 세션 분리 관리
2. 세션별 회사 컨텍스트 유지
3. 세션 생명주기 관리 (생성/업데이트/만료)
4. 메모리 효율적 저장소 (LRU 캐시)
5. 동시성 안전 처리 (thread-safe)
"""

import uuid
import time
import asyncio
import threading
from typing import Dict, Any, Optional, List
from dataclasses import dataclass, field
from datetime import datetime, timedelta
from collections import OrderedDict

@dataclass
class SessionMetadata:
    """세션 메타데이터"""
    session_id: str
    company_context: str
    created_at: datetime
    last_activity: datetime
    total_interactions: int = 0
    is_active: bool = True
    client_info: Dict[str, Any] = field(default_factory=dict)

@dataclass 
class ConversationMessage:
    """대화 메시지"""
    message_id: str
    session_id: str
    type: str  # 'user' | 'assistant' | 'system'
    content: str
    timestamp: datetime
    metadata: Dict[str, Any] = field(default_factory=dict)

class SessionManager:
    """
    완벽한 세션 관리자
    
    특징:
    - Thread-safe 다중 사용자 지원
    - LRU 기반 메모리 관리
    - 자동 세션 만료 처리
    - 실시간 세션 통계
    """
    
    def __init__(self, max_sessions: int = 1000, session_timeout_hours: int = 24):
        self.max_sessions = max_sessions
        self.session_timeout = timedelta(hours=session_timeout_hours)
        
        # Thread-safe 저장소
        self._sessions: OrderedDict[str, SessionMetadata] = OrderedDict()
        self._conversations: Dict[str, List[ConversationMessage]] = {}
        self._lock = threading.RLock()
        
        # 통계
        self._stats = {
            "total_sessions_created": 0,
            "total_messages": 0,
            "active_sessions": 0,
            "expired_sessions_cleaned": 0
        }
        
        print("🚀 SessionManager 초기화 완료")
        print(f"   최대 세션: {max_sessions}")
        print(f"   세션 타임아웃: {session_timeout_hours}시간")
    
    async def create_session(
        self, 
        company_context: str = "general",
        client_info: Optional[Dict[str, Any]] = None
    ) -> str:
        """새 세션 생성"""
        
        with self._lock:
            # 세션 ID 생성
            session_id = str(uuid.uuid4())
            
            # 세션 메타데이터 생성
            metadata = SessionMetadata(
                session_id=session_id,
                company_context=company_context,
                created_at=datetime.now(),
                last_activity=datetime.now(),
                client_info=client_info or {}
            )
            
            # 저장소에 추가
            self._sessions[session_id] = metadata
            self._conversations[session_id] = []
            
            # LRU 관리
            if len(self._sessions) > self.max_sessions:
                # 가장 오래된 세션 제거
                oldest_session_id = next(iter(self._sessions))
                await self._remove_session(oldest_session_id)
            
            # 통계 업데이트
            self._stats["total_sessions_created"] += 1
            self._stats["active_sessions"] = len(self._sessions)
            
            print(f"✅ 새 세션 생성: {session_id}")
            print(f"   회사 컨텍스트: {company_context}")
            print(f"   활성 세션 수: {self._stats['active_sessions']}")
            
            return session_id
    
    async def get_session(self, session_id: str) -> Optional[SessionMetadata]:
        """세션 조회"""
        
        with self._lock:
            if session_id not in self._sessions:
                return None
            
            session = self._sessions[session_id]
            
            # 만료 확인
            if self._is_session_expired(session):
                await self._remove_session(session_id)
                return None
            
            # 마지막 활동 시간 업데이트
            session.last_activity = datetime.now()
            
            # LRU 순서 업데이트 (최근 사용을 뒤로)
            self._sessions.move_to_end(session_id)
            
            return session
    
    async def update_session_activity(self, session_id: str) -> bool:
        """세션 활동 업데이트"""
        
        session = await self.get_session(session_id)
        if not session:
            return False
        
        with self._lock:
            session.last_activity = datetime.now()
            session.total_interactions += 1
            
        return True
    
    async def add_message(
        self, 
        session_id: str, 
        message_type: str, 
        content: str,
        metadata: Optional[Dict[str, Any]] = None
    ) -> Optional[str]:
        """세션에 메시지 추가"""
        
        # 세션 유효성 확인
        session = await self.get_session(session_id)
        if not session:
            print(f"❌ 유효하지 않은 세션: {session_id}")
            return None
        
        with self._lock:
            # 메시지 생성
            message = ConversationMessage(
                message_id=str(uuid.uuid4()),
                session_id=session_id,
                type=message_type,
                content=content,
                timestamp=datetime.now(),
                metadata=metadata or {}
            )
            
            # 대화 기록에 추가
            self._conversations[session_id].append(message)
            
            # 세션 활동 업데이트
            await self.update_session_activity(session_id)
            
            # 통계 업데이트
            self._stats["total_messages"] += 1
            
            print(f"💬 메시지 추가: {session_id}")
            print(f"   타입: {message_type}")
            print(f"   길이: {len(content)}자")
            
            return message.message_id
    
    async def get_conversation_history(
        self, 
        session_id: str,
        limit: Optional[int] = None
    ) -> List[Dict[str, Any]]:
        """세션의 대화 기록 조회"""
        
        session = await self.get_session(session_id)
        if not session:
            return []
        
        with self._lock:
            messages = self._conversations.get(session_id, [])
            
            # 최신 메시지부터 limit만큼
            if limit:
                messages = messages[-limit:]
            
            # 딕셔너리 형태로 변환
            return [
                {
                    "role": "user" if msg.type == "user" else "assistant",
                    "content": msg.content,
                    "timestamp": msg.timestamp.isoformat(),
                    "metadata": msg.metadata
                }
                for msg in messages
            ]
    
    async def get_session_info(self, session_id: str) -> Optional[Dict[str, Any]]:
        """세션 상세 정보 조회"""
        
        session = await self.get_session(session_id)
        if not session:
            return None
        
        with self._lock:
            conversation_count = len(self._conversations.get(session_id, []))
            
            return {
                "session_id": session.session_id,
                "company_context": session.company_context,
                "created_at": session.created_at.isoformat(),
                "last_activity": session.last_activity.isoformat(),
                "total_interactions": session.total_interactions,
                "conversation_count": conversation_count,
                "is_active": session.is_active,
                "client_info": session.client_info
            }
    
    async def cleanup_expired_sessions(self) -> int:
        """만료된 세션 정리"""
        
        expired_count = 0
        expired_sessions = []
        
        with self._lock:
            for session_id, session in list(self._sessions.items()):
                if self._is_session_expired(session):
                    expired_sessions.append(session_id)
        
        # 만료된 세션 제거
        for session_id in expired_sessions:
            await self._remove_session(session_id)
            expired_count += 1
        
        if expired_count > 0:
            print(f"🧹 만료 세션 정리: {expired_count}개")
            self._stats["expired_sessions_cleaned"] += expired_count
        
        return expired_count
    
    def get_stats(self) -> Dict[str, Any]:
        """세션 통계 조회"""
        
        with self._lock:
            self._stats["active_sessions"] = len(self._sessions)
            return self._stats.copy()
    
    def _is_session_expired(self, session: SessionMetadata) -> bool:
        """세션 만료 확인"""
        return datetime.now() - session.last_activity > self.session_timeout
    
    async def _remove_session(self, session_id: str) -> None:
        """세션 제거 (내부 메서드)"""
        
        if session_id in self._sessions:
            del self._sessions[session_id]
        
        if session_id in self._conversations:
            del self._conversations[session_id]
        
        print(f"🗑️ 세션 제거: {session_id}")


# 글로벌 세션 매니저 인스턴스
session_manager = SessionManager(
    max_sessions=1000,  # 최대 1000개 세션
    session_timeout_hours=24  # 24시간 후 만료
)


async def cleanup_task():
    """정기적 세션 정리 태스크"""
    while True:
        try:
            await session_manager.cleanup_expired_sessions()
            await asyncio.sleep(3600)  # 1시간마다 정리
        except Exception as e:
            print(f"❌ 세션 정리 오류: {str(e)}")
            await asyncio.sleep(600)  # 오류시 10분 후 재시도


# 백그라운드 정리 태스크 시작
def start_cleanup_task():
    """정리 태스크 시작"""
    loop = asyncio.new_event_loop()
    asyncio.set_event_loop(loop)
    loop.run_until_complete(cleanup_task())


# 애플리케이션 시작시 정리 태스크 시작
import threading
cleanup_thread = threading.Thread(target=start_cleanup_task, daemon=True)
cleanup_thread.start()