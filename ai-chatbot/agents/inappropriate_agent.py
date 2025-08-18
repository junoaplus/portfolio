"""
Inappropriate Agent - 부적절한 질문 차단

역할:
1. 채용 면접과 무관한 질문에 대한 안내 메시지 제공
2. 욕설, 비속어, 의미없는 텍스트 차단
3. 적절한 질문 예시 제공으로 사용자 가이드
"""

from workflow.state import ChatState

class InappropriateAgent:
    """부적절한 질문 처리 전문 에이전트"""
    
    def __init__(self):
        self.blocked_messages = [
            "죄송합니다. 채용 관련 질문만 답변드릴 수 있습니다.",
            "면접과 관련된 질문을 부탁드립니다.",
            "기술, 프로젝트, 경험에 대해 궁금한 점을 물어보세요.",
        ]
        
        self.suggested_questions = {
            "🔧 기술 스택 보기": "/skills",
            "📦 프로젝트 보기": "/projects", 
            "👤 개인 소개 보기": "/about"
        }
    
    def process(self, state: ChatState) -> ChatState:
        """부적절한 질문에 대한 안내 메시지 제공"""
        
        print(f"\n🚫 Inappropriate Agent 시작")
        print(f"   차단된 질문: {state.question}")
        
        # 안내 메시지 설정
        state.response = """죄송합니다. 채용 관련 질문만 답변드릴 수 있습니다.

다음과 같은 질문을 해주세요:
- 기술 스택이나 프레임워크에 대한 질문
- 프로젝트 경험과 구현 과정
- 문제 해결 경험과 성과
- 지원 동기나 강점, 성장 스토리

궁금한 점이 있으시면 언제든지 물어보세요! 😊"""
        
        # 추천 링크 제공
        state.recommended_links = self.suggested_questions
        state.response_quality_score = 0.1  # 낮은 점수로 설정
        
        print(f"   ✅ 차단 완료 - 안내 메시지 제공")
        
        return state

def inappropriate_agent(state: ChatState) -> ChatState:
    """Inappropriate Agent 실행 함수"""
    agent = InappropriateAgent()
    return agent.process(state)