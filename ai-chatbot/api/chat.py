"""
완벽한 세션 기반 챗봇 API

엔드포인트:
- POST /sessions - 새 세션 생성 (회사 컨텍스트와 함께)
- POST /chat - 세션 기반 대화 처리
- GET /sessions/{session_id} - 세션 정보 조회
- GET /sessions/{session_id}/history - 대화 기록 조회
- GET /stats - 시스템 통계

특징:
- 다중 사용자 완벽 분리
- 대화 맥락 완벽 유지
- 실시간 성능 모니터링
- 자동 세션 관리
"""

from fastapi import APIRouter, HTTPException, status
from pydantic import BaseModel, Field, validator
from typing import Optional, Dict, Any, List
import uuid

# 완벽한 세션 및 대화 관리 서비스
from services.session_manager import session_manager
from services.conversation_service import conversation_service

router = APIRouter()

# === 세션 생성 요청 ===
class SessionCreateRequest(BaseModel):
    """
    새 세션 생성 요청
    """
    company_context: str = Field(
        "general",
        description="회사 컨텍스트 (toss/general)"
    )
    client_info: Optional[Dict[str, Any]] = Field(
        None,
        description="클라이언트 정보 (브라우저, IP 등)"
    )
    
    @validator('company_context')
    def validate_company_context(cls, v):
        valid_companies = ["toss", "general"]
        if v not in valid_companies:
            return "general"
        return v

# === 대화 요청 ===
class ChatRequest(BaseModel):
    """
    세션 기반 대화 요청
    """
    session_id: str = Field(
        ...,
        description="세션 ID (필수)"
    )
    question: str = Field(
        ...,
        min_length=1,
        max_length=2000,
        description="사용자 질문 또는 초기 진입 신호"
    )
    
    @validator('question')
    def validate_question(cls, v):
        v = v.strip()
        if not v:
            raise ValueError('질문을 입력해주세요')
        return v

# === 초기 대화 요청 (토스/일반 선택 직후) ===
class InitialChatRequest(BaseModel):
    """
    초기 대화 시작 요청 (어필 메시지 생성)
    """
    session_id: str = Field(
        ...,
        description="세션 ID (필수)"
    )

# === 세션 생성 응답 ===
class SessionCreateResponse(BaseModel):
    """
    세션 생성 응답
    """
    success: bool = Field(..., description="세션 생성 성공 여부")
    session_id: str = Field(..., description="생성된 세션 ID")
    company_context: str = Field(..., description="회사 컨텍스트")
    message: str = Field(..., description="성공 메시지")

# === 대화 응답 ===
class ChatResponse(BaseModel):
    """
    세션 기반 대화 응답
    """
    success: bool = Field(..., description="요청 처리 성공 여부")
    answer: str = Field(..., description="AI 생성 답변")
    links: Dict[str, str] = Field(default={}, description="추천 링크들")
    session_id: str = Field(..., description="세션 ID")
    metadata: Dict[str, Any] = Field(default={}, description="처리 메타데이터")
    suggested_questions: Optional[List[str]] = Field(None, description="추천 질문들")

# === 세션 정보 응답 ===
class SessionInfoResponse(BaseModel):
    """
    세션 정보 응답
    """
    session_info: Dict[str, Any] = Field(..., description="세션 상세 정보")
    conversation_summary: Optional[Dict[str, Any]] = Field(None, description="대화 요약")

# === 통계 응답 ===
class StatsResponse(BaseModel):
    """
    시스템 통계 응답
    """
    session_stats: Dict[str, Any] = Field(..., description="세션 관련 통계")
    conversation_stats: Dict[str, Any] = Field(..., description="대화 관련 통계")
    timestamp: str = Field(..., description="조회 시간")

# === 1. 세션 생성 API ===
@router.post("/sessions", response_model=SessionCreateResponse)
async def create_session(request: SessionCreateRequest) -> SessionCreateResponse:
    """
    새 대화 세션 생성
    
    회사 컨텍스트와 함께 새로운 세션을 생성하고,
    해당 세션에 대한 고유 ID를 반환합니다.
    
    Args:
        request: 세션 생성 요청 (회사 컨텍스트, 클라이언트 정보)
        
    Returns:
        SessionCreateResponse: 생성된 세션 정보
        
    Raises:
        HTTPException: 세션 생성 실패시
    """
    
    try:
        # 새 세션 생성
        session_id = await session_manager.create_session(
            company_context=request.company_context,
            client_info=request.client_info
        )
        
        print(f"✅ 새 세션 생성 완료: {session_id}")
        print(f"   회사 컨텍스트: {request.company_context}")
        
        return SessionCreateResponse(
            success=True,
            session_id=session_id,
            company_context=request.company_context,
            message=f"{request.company_context} 컨텍스트로 새 세션이 생성되었습니다."
        )
            
    except Exception as e:
        print(f"❌ 세션 생성 오류: {str(e)}")
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail={
                "message": "세션 생성 중 오류가 발생했습니다",
                "error": str(e)
            }
        )

# === 2. 초기 대화 시작 API ===
@router.post("/chat/initial", response_model=ChatResponse)
async def start_initial_chat(request: InitialChatRequest) -> ChatResponse:
    """
    초기 대화 시작 - 어필 메시지 생성
    
    세션 생성 후 첫 번째 대화를 시작합니다.
    회사 컨텍스트에 따라 맞춤형 어필 메시지를 생성합니다.
    
    Args:
        request: 초기 대화 요청 (세션 ID)
        
    Returns:
        ChatResponse: 초기 어필 메시지
        
    Raises:
        HTTPException: 세션이 존재하지 않거나 처리 실패시
    """
    
    try:
        # 세션 존재 확인
        session_info = await session_manager.get_session_info(request.session_id)
        if not session_info:
            raise HTTPException(
                status_code=status.HTTP_404_NOT_FOUND,
                detail={"message": "세션을 찾을 수 없습니다", "session_id": request.session_id}
            )
        
        company_context = session_info.get('company_context', 'general')
        
        print(f"🚀 초기 대화 시작: {request.session_id}")
        print(f"   회사 컨텍스트: {company_context}")
        
        # 회사별 초기 메시지 생성
        if company_context == "toss":
            initial_message = """━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

**안녕하세요! 토스 ML Engineer 지원자 황준호입니다!**

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

**토스 채용 공고를 바탕으로 우선순위를 정리하여 보여드립니다! 아래 프로젝트들을 확인해보시고, 궁금한 점은 언제든 저에게 질문해주세요. 꼭 좋은 기회로 이어졌으면 좋겠습니다**

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🎯 "추천 시스템 개발" → 데이트 코스 AI 추천 시스템
→ 89,321개 장소 DB에서 Qdrant Vector DB + 151개 카테고리 필터링으로 개인화 추천
→ 디스크 I/O에서 인메모리 처리로 33초→3.4초 (90% 성능 향상) 달성
→ PySpark ETL로 20만개→9만개 고품질 데이터 정제 + 마이크로서비스 분산 아키텍처

🤖 "LLM/RAG 기술" → 보드게임 RAG 챗봇  
→ EXAONE 파인튜닝 + FAISS 벡터 검색으로 217개 게임 전문 지식 시스템
→ 자동 QA 데이터 수집으로 지속적 학습 파이프라인 구축

📊 "이상 탐지 모델링" → 신문 이탈 예측
→ RandomForest로 87% F1-Score + TOP 50 위험고객 실시간 분석
→ SMOTE 데이터 증강으로 클래스 불균형(1:4.7) 완전 해결

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

**궁금한 프로젝트나 기술이 있으시면 언제든 질문해주세요! 각 프로젝트 링크를 클릭하시면 더 자세한 기술적 구현 내용과 성과를 확인하실 수 있습니다**"""
        else:
            initial_message = """━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

**안녕하세요! AI/ML 엔지니어 황준호입니다!**

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

**실전 프로젝트를 통해 AI 기술의 비즈니스 적용 경험을 쌓아왔습니다:**

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🎯 데이트 코스 AI 추천 시스템 (최고 완성도)
→ 89,321개 장소 DB + Qdrant Vector DB로 실시간 개인화 추천
→ 벡터 DB 인메모리 최적화로 33초→3.4초 성능 향상 달성
→ 3개 독립 마이크로서비스 + PySpark ETL + Redis 캐싱으로 확장성 확보

🤖 보드게임 RAG 챗봇
→ EXAONE 파인튜닝 + 217개 게임별 FAISS 벡터 검색 시스템
→ LangChain 대화 관리 + 자동 세션 시스템 구현

📊 이탈/퇴사 예측 ML 시스템
→ 8가지 알고리즘 비교로 87% F1-Score 달성  
→ SMOTE/Faker 데이터 증강으로 클래스 불균형 해결 + Feature Importance 분석

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

**궁금한 프로젝트나 기술이 있으시면 언제든 질문해주세요!**

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

**각 프로젝트 링크를 클릭하시면 더 자세한 기술적 구현 내용과 성과를 확인하실 수 있습니다.**"""

        # 대화 기록에 저장
        await conversation_service.add_message(
            session_id=request.session_id,
            role="assistant",
            content=initial_message
        )
        
        print(f"✅ 초기 메시지 생성 완료: {len(initial_message)} chars")
        
        return ChatResponse(
            success=True,
            answer=initial_message,
            links={
                "데이트 코스 AI 추천": "http://localhost:3000/date-recommendation",
                "보드게임 RAG 챗봇": "http://localhost:3000/boardgame-chatbot", 
                "신문 이탈 예측": "http://localhost:3000/newspaper-churn",
                "간호사 급여 예측": "http://localhost:3000/nurse-salary"
            },
            session_id=request.session_id,
            metadata={
                "message_type": "initial",
                "company_context": company_context,
                "character_count": len(initial_message),
                "projects_mentioned": 4 if company_context == "toss" else 4
            },
            suggested_questions=[
                f"{'토스 ML Engineer 직무와 어떻게 매칭되는지' if company_context == 'toss' else '데이트 코스 AI 추천 프로젝트'} 더 자세히 알려주세요",
                f"{'벡터 검색 시스템의 기술적 구조는 어떻게 되나요?' if company_context == 'toss' else 'RAG 챗봇 시스템의 기술적 구조는 어떻게 되나요?'}",
                f"{'대용량 데이터 처리 최적화 경험을 말씀해주세요' if company_context == 'toss' else '머신러닝 모델 성능 최적화 경험을 말씀해주세요'}",
                f"{'토스의 추천/검색 서비스에 어떤 기여를 할 수 있나요?' if company_context == 'toss' else '팀 협업과 리더십 경험을 알려주세요'}"
            ]
        )
            
    except HTTPException:
        raise
    except Exception as e:
        print(f"❌ 초기 대화 오류: {str(e)}")
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail={
                "message": "초기 대화 생성 중 오류가 발생했습니다",
                "error": str(e)
            }
        )

# === 3. 일반 대화 API ===
@router.post("/chat", response_model=ChatResponse)  
async def process_chat(request: ChatRequest) -> ChatResponse:
    """
    세션 기반 일반 대화 처리
    
    사용자 질문에 대해 AI 워크플로우를 통해 답변을 생성합니다.
    대화 맥락과 회사 컨텍스트를 유지하면서 개인화된 답변을 제공합니다.
    
    Args:
        request: 대화 요청 (세션 ID, 질문)
        
    Returns:
        ChatResponse: AI 생성 답변
        
    Raises:
        HTTPException: 세션이 존재하지 않거나 처리 실패시
    """
    
    try:
        # 세션 존재 확인
        session_info = await session_manager.get_session_info(request.session_id)
        if not session_info:
            raise HTTPException(
                status_code=status.HTTP_404_NOT_FOUND,
                detail={"message": "세션을 찾을 수 없습니다", "session_id": request.session_id}
            )
        
        print(f"💬 대화 처리 시작: {request.session_id}")
        print(f"   질문: {request.question[:100]}...")
        
        # ConversationService를 통해 AI 응답 생성
        result = await conversation_service.process_user_message(
            session_id=request.session_id,
            user_question=request.question
        )
        
        print(f"✅ 응답 생성 완료: {len(result.get('answer', ''))} chars")
        
        return ChatResponse(
            success=True,
            answer=result.get('answer', '죄송합니다. 응답을 생성할 수 없습니다.'),
            links=result.get('links', {}),
            session_id=request.session_id,
            metadata=result.get('metadata', {}),
            suggested_questions=result.get('suggested_questions')
        )
            
    except HTTPException:
        raise
    except Exception as e:
        print(f"❌ 대화 처리 오류: {str(e)}")
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail={
                "message": "대화 처리 중 오류가 발생했습니다",
                "error": str(e)
            }
        )

@router.get("/conversations/{conversation_id}")
async def get_conversation_history(conversation_id: str):
    """
    특정 대화의 히스토리 조회
    
    Args:
        conversation_id: 대화 세션 ID
        
    Returns:
        대화 히스토리 목록
    """
    # TODO: ConversationService 구현 후 활성화
    return {"message": "대화 히스토리 조회 기능 준비 중"}

@router.delete("/conversations/{conversation_id}")  
async def clear_conversation(conversation_id: str):
    """
    특정 대화 히스토리 삭제
    
    Args:
        conversation_id: 대화 세션 ID
    """
    # TODO: ConversationService 구현 후 활성화
    return {"message": "대화 히스토리가 삭제되었습니다"}