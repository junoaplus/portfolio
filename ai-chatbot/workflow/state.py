"""
LangGraph State 정의 - 에이전틱 워크플로우
- 에이전트 간 동적 소통 및 협상 지원
- Agent 간 재요청 및 반복 개선 메커니즘
- 맥락 인식 및 적응적 대응 구조
"""

from typing import Dict, List, Optional, Any, Literal, Union
from pydantic import BaseModel
from enum import Enum
import time

class AgentType(Enum):
    ROUTER = "router"
    DATA_EXTRACTOR = "data_extractor"
    CONNECTION_FINDER = "connection_finder"
    RESPONSE_GENERATOR = "response_generator"

class RequestPriority(Enum):
    LOW = 1
    MEDIUM = 2
    HIGH = 3
    CRITICAL = 4

class RequestType(Enum):
    CLARIFICATION = "clarification"     # 명확화 요청
    DATA_REFINEMENT = "data_refinement" # 데이터 정제 요청
    CONTEXT_ANALYSIS = "context_analysis" # 맥락 분석 요청
    QUALITY_CHECK = "quality_check"     # 품질 검토 요청
    STRATEGY_CHANGE = "strategy_change" # 전략 변경 요청

class AgentRequest(BaseModel):
    """Agent 간 동적 요청 구조"""
    from_agent: AgentType
    to_agent: AgentType
    request_type: RequestType
    priority: RequestPriority
    message: str
    context: Dict[str, Any] = {}
    created_at: float = 0.0
    
    def __init__(self, **data):
        if 'created_at' not in data:
            data['created_at'] = time.time()
        super().__init__(**data)

class AgentResponse(BaseModel):
    """Agent의 요청 응답"""
    request_id: Optional[str] = None
    success: bool = True
    data: Dict[str, Any] = {}
    message: str = ""
    next_action: Optional[str] = None

class WorkflowDecision(BaseModel):
    """워크플로우 의사결정"""
    next_agent: Optional[AgentType] = None
    should_loop: bool = False
    loop_reason: str = ""
    confidence: float = 1.0
    alternative_paths: List[AgentType] = []

class PortfolioState(BaseModel):
    # === 기본 입력 ===
    question: str = ""
    company_context: str = "general"      # 회사별 맞춤 컨텍스트
    conversation_history: List[Dict] = []
    
    # === Agent 간 동적 소통 ===
    agent_requests: List[AgentRequest] = []    # Agent 간 요청 큐
    agent_responses: List[AgentResponse] = []  # Agent 응답 히스토리
    current_agent: Optional[AgentType] = None
    workflow_decisions: List[WorkflowDecision] = []
    
    # === 진화하는 상태 ===
    intent: Optional[str] = None
    intent_confidence: float = 0.0
    context_analysis: Dict[str, Any] = {}     # 맥락 분석 결과
    strategy: Dict[str, Any] = {}             # 현재 전략
    
    # === 데이터 수집 ===
    target_pages: List[str] = []
    extracted_data: Dict[str, Any] = {}
    data_quality_score: float = 0.0          # 데이터 품질 점수
    
    # === 연결 및 추론 ===
    connections: Dict[str, Any] = {}          # 발견된 연결들
    reasoning_chain: List[str] = []           # 추론 과정
    cross_references: List[str] = []          # 교차 참조
    
    # === 답변 생성 및 개선 ===
    response_drafts: List[str] = []           # 답변 초안들
    response: str = ""
    response_quality: Dict[str, float] = {}   # 답변 품질 평가
    improvement_suggestions: List[str] = []
    
    # === Simple Workflow 추가 필드 ===
    selected_extractors: List[str] = []       # Router가 선택한 extractor들
    selection_reason: str = ""                # Router의 선택 이유 (디버깅 및 분석용)
    final_answer: str = ""                    # 최종 답변
    recommended_links: Dict[str, str] = {}    # 추천 링크
    response_quality_score: float = 0.0       # 응답 품질 점수
    integrated_data: Dict[str, Any] = {}      # 통합된 데이터
    key_points: List[str] = []                # 핵심 포인트
    initial_appeal: str = ""                  # 토스 초기 어필 메시지
    
    # === 메타데이터 ===
    iteration_count: int = 0                  # 반복 횟수
    processing_time: float = 0.0
    quality_metrics: Dict[str, float] = {}
    debug_trace: List[Dict] = []              # 상세 디버그 추적
    
    # === 동적 플래그 ===
    needs_clarification: bool = False
    needs_more_data: bool = False
    needs_better_connection: bool = False
    needs_response_improvement: bool = False
    
    class Config:
        arbitrary_types_allowed = True
        
    def add_agent_request(self, request: AgentRequest):
        """Agent 요청 추가"""
        self.agent_requests.append(request)
    
    def get_pending_requests(self, for_agent: AgentType) -> List[AgentRequest]:
        """특정 Agent에 대한 대기 중인 요청들"""
        return [req for req in self.agent_requests 
                if req.to_agent == for_agent and req not in [resp.request_id for resp in self.agent_responses]]
    
    def should_continue_workflow(self) -> bool:
        """워크플로우 계속 진행 여부"""
        return (self.needs_clarification or 
                self.needs_more_data or 
                self.needs_better_connection or 
                self.needs_response_improvement or
                len(self.agent_requests) > len(self.agent_responses))
    
    def get_next_agent(self) -> Optional[AgentType]:
        """다음 실행할 Agent 결정"""
        if self.workflow_decisions:
            return self.workflow_decisions[-1].next_agent
        return None