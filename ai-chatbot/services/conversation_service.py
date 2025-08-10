"""
완벽한 대화 관리 서비스

기능:
1. 세션별 대화 맥락 완벽 유지
2. 질문-답변 구조화 저장
3. 대화 검색 및 분석
4. AI 워크플로우와 완벽 연동
5. 대화 품질 분석 및 메트릭스
"""

import json
import uuid
import asyncio
from typing import Dict, Any, List, Optional, Tuple
from dataclasses import dataclass, field
from datetime import datetime, timedelta
from enum import Enum

from services.session_manager import session_manager, ConversationMessage
from workflow.simple_graph import run_simple_workflow

class MessageType(Enum):
    USER = "user"
    ASSISTANT = "assistant" 
    SYSTEM = "system"
    ERROR = "error"

class ConversationStatus(Enum):
    ACTIVE = "active"
    COMPLETED = "completed"
    ERROR = "error"
    TIMEOUT = "timeout"

@dataclass
class ConversationContext:
    """대화 맥락 정보"""
    session_id: str
    company_context: str
    total_exchanges: int = 0
    last_intent: Optional[str] = None
    topics_discussed: List[str] = field(default_factory=list)
    user_preferences: Dict[str, Any] = field(default_factory=dict)
    conversation_flow: List[str] = field(default_factory=list)

@dataclass
class ConversationExchange:
    """완전한 질문-답변 쌍"""
    exchange_id: str
    session_id: str
    user_question: str
    ai_response: str
    timestamp: datetime
    processing_time: float
    metadata: Dict[str, Any] = field(default_factory=dict)
    status: ConversationStatus = ConversationStatus.ACTIVE

class ConversationService:
    """
    완벽한 대화 관리 서비스
    
    특징:
    - 세션별 대화 맥락 완벽 추적
    - AI 워크플로우와 완전 통합
    - 실시간 대화 분석
    - 사용자 의도 추적
    - 성능 모니터링
    """
    
    def __init__(self):
        # 대화 맥락 저장소
        self._contexts: Dict[str, ConversationContext] = {}
        self._exchanges: Dict[str, List[ConversationExchange]] = {}
        
        # 통계
        self._stats = {
            "total_conversations": 0,
            "total_exchanges": 0,
            "average_response_time": 0.0,
            "success_rate": 0.0,
            "active_conversations": 0
        }
        
        print("💬 ConversationService 초기화 완료")
    
    async def start_conversation(
        self, 
        session_id: str,
        company_context: str = "general"
    ) -> bool:
        """대화 시작"""
        
        # 세션 유효성 확인
        session = await session_manager.get_session(session_id)
        if not session:
            print(f"❌ 유효하지 않은 세션: {session_id}")
            return False
        
        # 대화 맥락 초기화
        context = ConversationContext(
            session_id=session_id,
            company_context=company_context
        )
        
        self._contexts[session_id] = context
        self._exchanges[session_id] = []
        
        # 통계 업데이트
        self._stats["total_conversations"] += 1
        self._stats["active_conversations"] = len(self._contexts)
        
        print(f"🎯 대화 시작: {session_id}")
        print(f"   회사 컨텍스트: {company_context}")
        
        return True
    
    async def process_user_message(
        self,
        session_id: str,
        user_question: str
    ) -> Dict[str, Any]:
        """사용자 메시지 처리 (완전한 AI 워크플로우 실행)"""
        
        # 대화 맥락 확인
        if session_id not in self._contexts:
            # 대화가 시작되지 않았으면 자동 시작
            session = await session_manager.get_session(session_id)
            if not session:
                return {
                    "success": False,
                    "error": "Invalid session",
                    "message": "세션을 찾을 수 없습니다."
                }
            
            await self.start_conversation(session_id, session.company_context)
        
        context = self._contexts[session_id]
        start_time = datetime.now()
        
        try:
            # 1. 사용자 메시지 저장
            await session_manager.add_message(
                session_id=session_id,
                message_type=MessageType.USER.value,
                content=user_question,
                metadata={"intent_analysis_pending": True}
            )
            
            # 2. 대화 기록 가져오기
            conversation_history = await self._build_conversation_history(session_id)
            
            # 3. AI 워크플로우 실행
            print(f"\n🤖 AI 워크플로우 실행: {session_id}")
            print(f"   질문: {user_question}")
            print(f"   회사: {context.company_context}")
            print(f"   기존 대화: {len(conversation_history)}개")
            
            workflow_result = await run_simple_workflow(
                question=user_question,
                company_context=context.company_context,
                conversation_history=conversation_history,
                is_initial=False
            )
            
            # 4. 처리 시간 계산
            processing_time = (datetime.now() - start_time).total_seconds()
            
            # 5. AI 응답 저장
            if workflow_result["success"]:
                await session_manager.add_message(
                    session_id=session_id,
                    message_type=MessageType.ASSISTANT.value,
                    content=workflow_result["answer"],
                    metadata={
                        "processing_time": processing_time,
                        "extractors_used": workflow_result["metadata"].get("extractors_used", []),
                        "quality_score": workflow_result["metadata"].get("quality_score", 0),
                        "key_points": workflow_result["metadata"].get("key_points", [])
                    }
                )
                
                # 6. 대화 Exchange 기록
                exchange = ConversationExchange(
                    exchange_id=str(uuid.uuid4()),
                    session_id=session_id,
                    user_question=user_question,
                    ai_response=workflow_result["answer"],
                    timestamp=start_time,
                    processing_time=processing_time,
                    metadata=workflow_result["metadata"],
                    status=ConversationStatus.COMPLETED
                )
                
                self._exchanges[session_id].append(exchange)
                
                # 7. 대화 맥락 업데이트
                await self._update_conversation_context(session_id, user_question, workflow_result)
                
                # 8. 통계 업데이트
                self._update_stats(processing_time, True)
                
                print(f"✅ 대화 처리 완료: {processing_time:.2f}초")
                
                return {
                    "success": True,
                    "answer": workflow_result["answer"],
                    "links": workflow_result.get("links", {}),
                    "metadata": {
                        **workflow_result["metadata"],
                        "session_id": session_id,
                        "exchange_id": exchange.exchange_id,
                        "conversation_context": {
                            "total_exchanges": context.total_exchanges,
                            "topics_discussed": context.topics_discussed[-3:],  # 최근 3개 토픽
                        }
                    }
                }
            else:
                # AI 워크플로우 실패
                await session_manager.add_message(
                    session_id=session_id,
                    message_type=MessageType.ERROR.value,
                    content=f"워크플로우 실패: {workflow_result.get('error', 'Unknown error')}",
                    metadata={"processing_time": processing_time}
                )
                
                self._update_stats(processing_time, False)
                
                return {
                    "success": False,
                    "error": workflow_result.get("error", "AI 처리 실패"),
                    "message": "죄송합니다. 답변 생성 중 오류가 발생했습니다.",
                    "metadata": {"session_id": session_id}
                }
                
        except Exception as e:
            print(f"❌ 대화 처리 오류: {str(e)}")
            processing_time = (datetime.now() - start_time).total_seconds()
            
            await session_manager.add_message(
                session_id=session_id,
                message_type=MessageType.ERROR.value,
                content=f"처리 오류: {str(e)}",
                metadata={"processing_time": processing_time}
            )
            
            self._update_stats(processing_time, False)
            
            return {
                "success": False,
                "error": str(e),
                "message": "죄송합니다. 시스템 오류가 발생했습니다.",
                "metadata": {"session_id": session_id}
            }
    
    async def get_conversation_summary(self, session_id: str) -> Optional[Dict[str, Any]]:
        """대화 요약 정보"""
        
        if session_id not in self._contexts:
            return None
        
        context = self._contexts[session_id]
        exchanges = self._exchanges.get(session_id, [])
        
        # 최근 대화 기록
        recent_history = await session_manager.get_conversation_history(session_id, limit=10)
        
        return {
            "session_id": session_id,
            "company_context": context.company_context,
            "total_exchanges": context.total_exchanges,
            "topics_discussed": context.topics_discussed,
            "last_intent": context.last_intent,
            "recent_exchanges": len(exchanges),
            "conversation_flow": context.conversation_flow[-5:],  # 최근 5개 플로우
            "recent_history": recent_history,
            "average_response_time": sum(ex.processing_time for ex in exchanges) / max(len(exchanges), 1)
        }
    
    async def _build_conversation_history(self, session_id: str) -> List[Dict[str, Any]]:
        """AI 워크플로우용 대화 기록 구성"""
        
        # 최근 10개 메시지만 사용 (컨텍스트 길이 관리)
        messages = await session_manager.get_conversation_history(session_id, limit=10)
        
        # OpenAI 형식으로 변환
        history = []
        for msg in messages:
            if msg["role"] in ["user", "assistant"]:
                history.append({
                    "role": msg["role"],
                    "content": msg["content"]
                })
        
        return history
    
    async def add_message(
        self,
        session_id: str,
        role: str,
        content: str,
        metadata: Optional[Dict[str, Any]] = None
    ):
        """대화에 메시지 추가"""
        await session_manager.add_message(
            session_id=session_id,
            message_type=role,
            content=content,
            metadata=metadata or {}
        )
    
    async def _update_conversation_context(
        self, 
        session_id: str, 
        user_question: str,
        workflow_result: Dict[str, Any]
    ):
        """대화 맥락 업데이트"""
        
        context = self._contexts[session_id]
        
        # 교환 횟수 증가
        context.total_exchanges += 1
        
        # 의도 업데이트
        if "intent" in workflow_result.get("metadata", {}):
            context.last_intent = workflow_result["metadata"]["intent"]
        
        # 토픽 추출 및 추가
        topics = self._extract_topics(user_question, workflow_result)
        for topic in topics:
            if topic not in context.topics_discussed:
                context.topics_discussed.append(topic)
        
        # 대화 플로우 추가
        context.conversation_flow.append(f"Q: {user_question[:50]}...")
        
        # 최대 길이 관리
        if len(context.topics_discussed) > 20:
            context.topics_discussed = context.topics_discussed[-20:]
        
        if len(context.conversation_flow) > 50:
            context.conversation_flow = context.conversation_flow[-50:]
    
    def _extract_topics(self, question: str, result: Dict[str, Any]) -> List[str]:
        """질문과 답변에서 토픽 추출"""
        
        topics = []
        
        # 키워드 기반 토픽 추출
        keywords_map = {
            "프로젝트": "project_experience",
            "기술": "tech_stack", 
            "스킬": "skills",
            "경험": "experience",
            "협업": "teamwork",
            "문제": "problem_solving",
            "도전": "challenges",
            "성장": "growth",
            "목표": "goals",
            "동기": "motivation"
        }
        
        question_lower = question.lower()
        for keyword, topic in keywords_map.items():
            if keyword in question_lower:
                topics.append(topic)
        
        # 사용된 extractor에서 토픽 추출
        extractors = result.get("metadata", {}).get("extractors_used", [])
        for extractor in extractors:
            if extractor == "skill":
                topics.append("technical_skills")
            elif extractor == "project":
                topics.append("project_portfolio")
            elif extractor == "about_me":
                topics.append("personal_background")
            elif extractor == "cover_letter":
                topics.append("career_motivation")
        
        return list(set(topics))  # 중복 제거
    
    def _update_stats(self, processing_time: float, success: bool):
        """통계 업데이트"""
        
        self._stats["total_exchanges"] += 1
        
        # 평균 응답 시간 업데이트
        current_avg = self._stats["average_response_time"]
        total = self._stats["total_exchanges"]
        self._stats["average_response_time"] = ((current_avg * (total - 1)) + processing_time) / total
        
        # 성공률 업데이트 (간단한 계산)
        if success:
            current_success_rate = self._stats["success_rate"]
            self._stats["success_rate"] = ((current_success_rate * (total - 1)) + 1.0) / total
        else:
            current_success_rate = self._stats["success_rate"]
            self._stats["success_rate"] = (current_success_rate * (total - 1)) / total
    
    def get_service_stats(self) -> Dict[str, Any]:
        """서비스 통계 조회"""
        
        self._stats["active_conversations"] = len(self._contexts)
        return self._stats.copy()


# 글로벌 대화 서비스 인스턴스
conversation_service = ConversationService()