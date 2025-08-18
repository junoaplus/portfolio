"""
Simplified Chat State - 의도 기반 단순 구조

핵심:
- 질문 의도 중심 상태 관리
- 불필요한 필드 제거
- 명확한 데이터 흐름
"""

from typing import Dict, List, Optional, Any, Literal
from pydantic import BaseModel
from datetime import datetime

class ChatState(BaseModel):
    """단순화된 채팅 상태"""
    
    # === 기본 입력 ===
    question: str = ""
    company_context: str = "general"
    conversation_history: List[Dict] = []
    session_id: Optional[str] = None
    
    # === 의도 분석 ===
    intent: Optional[Literal[
        "technical",
        "project", 
        "problem_solving",
        "personal",
        "inappropriate"
    ]] = None
    intent_confidence: float = 0.0
    intent_reasoning: str = ""
    
    # === 답변 생성 ===
    response: str = ""
    response_quality_score: float = 0.0
    recommended_links: Dict[str, str] = {}
    
    # === 메타데이터 ===
    processing_time: float = 0.0
    error: Optional[str] = None
    
    class Config:
        arbitrary_types_allowed = True