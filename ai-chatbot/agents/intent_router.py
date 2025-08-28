"""
Intent Router Agent - 질문 의도 파악 전문

역할:
1. 사용자 질문의 의도를 5가지 카테고리로 분류
2. 가장 적합한 전문 Agent 선택
3. 신뢰도 점수와 함께 라우팅 결정

카테고리:
- technical: 기술 스택, 프레임워크, 도구 관련
- project: 특정 프로젝트 상세 설명
- problem_solving: 문제 해결, 최적화, 창의적 해결
- personal: 지원동기, 강점, 가치관, 팀워크, 리더십, 성장, 목표
- inappropriate: 채용 무관 또는 부적절한 질문
"""

import json
from typing import Dict, Any, Literal
from workflow.state import ChatState
from config.settings import Config
from utils.openai_client import get_openai_client
from utils.json_parser import parse_json_response

class IntentRouter:
    """질문 의도 파악 및 라우팅 전문 에이전트"""
    
    def __init__(self):
        # 회사별 컨텍스트 (확장 가능)
        self.company_contexts = {
            "nuua": {
                "position": "AI 에이전트 개발자",
                "company": "누아",
                "focus": "AI 에이전트, 여행사 업무 자동화, 비정형 데이터 구조화, 항공권 유통",
                "culture": "당연해야 할 것들에 도전, 기술로 여행 산업 혁신"
            },
            "lbox": {
                "position": "Machine Learning Engineer",
                "company": "엘박스",
                "focus": "LLM/RAG 시스템, 법률 AI, 검색 모델 최적화, ML 파이프라인",
                "culture": "법을 사람들에게 더 가깝게, 국내 1위 리걸테크"
            },
            "estsoft": {
                "position": "LLM Engineer",
                "company": "이스트소프트",
                "focus": "LLM 모델 개발, Perso SaaS, Alan AI, OpenLLM 파인튜닝, Azure 클라우드",
                "culture": "실용주의 인공지능으로 일상에 편리함을 더하다, 30년 SW 전문기업"
            },
            "liner": {
                "position": "ML Engineer(Agent)",
                "company": "라이너",
                "focus": "AI Search, Research Agent, 검색 에이전트 시스템, 정보 탐색 혁신",
                "culture": "세상에서 가장 신뢰할 수 있는 AI, 정보 탐색의 어려움 해결, 글로벌 임팩트"
            }
            # 추후 kakao, naver, coupang 등 추가 가능
        }
    
    async def classify_intent(self, state: ChatState) -> ChatState:
        """
        질문의 의도를 파악하고 적절한 Agent 선택 (대화 맥락 고려)
        
        Returns:
            - intent: technical/project/problem_solving/experience/motivation
            - confidence: 0.0 ~ 1.0
            - reasoning: 선택 이유
        """
        
        print(f"\n🎯 Intent Router 시작")
        print(f"   질문: {state.question}")
        print(f"   회사: {state.company_context}")
        print(f"   대화 히스토리: {len(state.conversation_history)}개")
        
        try:
            # 회사 정보 가져오기
            company = self.company_contexts.get(
                state.company_context, 
                {"position": "개발자", "company": "회사", "focus": "", "culture": ""}
            )
            
            # GPT 클라이언트
            client = get_openai_client()
            
            # 대화 히스토리 포맷팅 (최근 2개)
            history_context = ""
            previous_intent = None
            if state.conversation_history:
                recent = state.conversation_history[-2:]
                for msg in recent:
                    role = "면접관" if msg['role'] == 'user' else "지원자"
                    history_context += f"{role}: {msg['content'][:200]}...\n"
                
                # 이전 메타데이터에서 intent 추출 시도
                if len(state.conversation_history) > 0:
                    last_msg = state.conversation_history[-1]
                    if isinstance(last_msg, dict) and 'metadata' in last_msg:
                        previous_intent = last_msg.get('metadata', {}).get('intent')
            
            # 프롬프트 생성
            prompt = f"""
{company['company']}의 {company['position']} 채용 면접 상황입니다.
회사 핵심 관심사: {company['focus']}
회사 문화: {company['culture']}

=== 이전 대화 맥락 ===
{history_context if history_context else "첫 번째 질문입니다."}
{f"이전 질문 의도: {previous_intent}" if previous_intent else ""}

=== 현재 질문 ===
"{state.question}"

중요: 이전 대화와 연결된 후속 질문인지 파악하세요.
- 같은 프로젝트의 다른 측면을 묻는다면 → 이전과 같은 의도
- 완전히 새로운 주제라면 → 새로운 의도 분류

채용 담당자의 다음 질문이 무엇을 알고 싶어하는지 파악하세요:

이 질문의 진짜 의도를 다음 5가지 카테고리 중 하나로 분류하세요:

1. technical - 기술적 역량, 프로그래밍 능력, 도구/프레임워크 숙련도를 확인하려는 의도
2. project - 구체적인 프로젝트 경험, 구현 내용, 결과물을 알고 싶어하는 의도  
3. problem_solving - 문제 해결 과정, 사고력, 창의성, 최적화 능력을 보려는 의도
4. personal - 지원동기, 강점, 가치관, 팀워크, 리더십, 성장, 목표, 개인 경험, 성격 등 을 파악하려는 의도(자소서, 나의소개등)
5. inappropriate - 채용 면접과 무관하거나 부적절한 내용 (욕설, 비속어, 의미없는 텍스트, 채용과 관련없는 일상 질문 등)

오타나 줄임말이 있어도 문맥으로 이해하고, 표면적 단어가 아닌 진짜 의도를 파악하세요.

JSON 형식으로만 응답하세요:
{{
    "intent": "위 5개 중 하나",
    "confidence": 0.0-1.0 사이 숫자,
    "reasoning": "이렇게 판단한 이유 한 문장"
}}"""

            # GPT 호출
            response = await client.chat_completion_with_retry(
                messages=[
                    {"role": "system", "content": "당신은 채용 면접 질문의 의도를 정확히 파악하는 전문가입니다."},
                    {"role": "user", "content": prompt}
                ],
                model="gpt-4o-mini",
                temperature=0.3,  # 일관성 우선
                max_tokens=200
            )
            
            # 응답 파싱
            result_text = response.choices[0].message.content.strip()
            print(f"   GPT 응답: {result_text}")
            
            # 마크다운 코드블록 제거
            if result_text.startswith("```json"):
                result_text = result_text[7:]  # ```json 제거
            if result_text.endswith("```"):
                result_text = result_text[:-3]  # ``` 제거
            result_text = result_text.strip()
            
            # JSON 파싱
            result = parse_json_response(result_text)
            
            # 유효성 검증
            valid_intents = ["technical", "project", "problem_solving", "personal", "inappropriate"]
            if result.get("intent") not in valid_intents:
                raise ValueError(f"Invalid intent: {result.get('intent')}")
            
            # State 업데이트
            state.intent = result["intent"]
            # confidence 값 0~1 범위로 보정
            state.intent_confidence = max(0.0, min(1.0, float(result.get("confidence", 0.8))))
            # reasoning 기본값 보장
            state.intent_reasoning = result.get("reasoning", "GPT가 판단 근거 미제공")
            
            print(f"   ✅ 의도 분류: {state.intent} (신뢰도: {state.intent_confidence:.2f})")
            print(f"   📝 이유: {state.intent_reasoning}")
            
        except json.JSONDecodeError as e:
            print(f"   ❌ JSON 파싱 실패: {e}")
            # 파싱 실패시 project로 폴백 (가장 범용적)
            state.intent = "project"
            state.intent_confidence = 0.5
            state.intent_reasoning = "의도 파악 실패, 프로젝트 관련 질문으로 처리"
            
        except Exception as e:
            print(f"   ❌ 의도 분류 오류: {e}")
            # 기타 오류시 project로 폴백
            state.intent = "project"
            state.intent_confidence = 0.3
            state.intent_reasoning = f"오류 발생: {str(e)[:50]}"
        
        return state

async def intent_router_agent(state: ChatState) -> ChatState:
    """Intent Router 실행 함수"""
    router = IntentRouter()
    return await router.classify_intent(state)