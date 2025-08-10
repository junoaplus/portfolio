"""
Enhanced Router Agent - GPT 기반 질문 분석 및 Extractor 선택

역할:
1. GPT로 질문 의도 완벽 분석
2. 토스 채용공고 기준으로 필요한 Extractor 선택  
3. 선택 이유와 함께 state.selected_extractors 설정
"""

import json
from typing import Dict, Any, List
from workflow.state import PortfolioState
from config.settings import Config
from utils.openai_client import get_openai_client

class EnhancedRouterAgent:
    """GPT 기반 완전 자율 라우터 에이전트"""
    
    async def analyze_and_route(self, state: PortfolioState) -> PortfolioState:
        """GPT로 질문 분석하고 필요한 Extractor 선택"""
        
        print("\n🧭 Enhanced Router Agent 시작")
        print(f"   질문: {state.question}")
        print(f"   회사: {state.company_context}")
        
        # GPT로 질문 분석하고 Extractor 선택
        routing_result = await self._gpt_analyze_and_select(state)
        
        # 결과를 state에 설정
        state.selected_extractors = routing_result.get("selected_extractors", [])
        state.intent = routing_result.get("intent", "general")
        state.intent_confidence = routing_result.get("confidence", 0.8)
        state.selection_reason = routing_result.get("reason", "")
        
        print(f"   GPT 선택 결과: {state.selected_extractors}")
        print(f"   선택 이유: {state.selection_reason}")
        
        return state
    
    async def _gpt_analyze_and_select(self, state: PortfolioState) -> Dict[str, Any]:
        """GPT로 질문 분석 및 Extractor 선택"""
        
        try:
            client = get_openai_client()
            
            # 토스 채용공고 전체 컨텍스트 가져오기
            toss_context = Config.get_company_context(state.company_context)
            
            prompt = f"""
{toss_context}

위 토스 ML Engineer 채용 정보를 모두 숙지하고, 다음 면접 질문을 분석해주세요:

질문: "{state.question}"

황준호의 데이터 영역 4개:
1. project: 4개 프로젝트 (보드게임 챗봇=LLM/RAG, 데이트 추천=추천시스템, 신문 이탈예측=ML, 간호사 급여예측=회귀)
2. skill: 기술스택 (LangChain, RAG, Vector DB, PyTorch, Spark, PostgreSQL, FastAPI, Next.js 등)
3. about_me: 개인적 특성 (성격, 협업, 성장, 리더십, 책임감, 가치관)
4. cover_letter: 지원 동기 (토스 지원 이유, 목표, 기여 방안, 포부)

토스가 가장 중요하게 보는 것들:
- AI 영역 ⭐⭐⭐: LLM, RAG, 멀티모달 (최고 우선순위)
- 추천 시스템: 사용자-콘텐츠 연결 최적화
- 비즈니스 임팩트: 단순 모델링이 아닌 실제 결과
- 빅데이터 처리: Hadoop, Spark, 대용량 데이터
- 주도적 기여: 본인이 직접 기여한 구체적 부분

토스 채용담당자 관점에서 이 질문에 가장 적절하게 답변하기 위해 필요한 데이터 영역들을 선택해주세요.

선택 기준:
- 질문의 핵심 의도 파악
- 토스 요구사항과의 연관성
- 황준호의 강점 영역 고려
- 면접 답변의 완성도

다음 JSON 형태로만 응답해주세요:
{{
  "selected_extractors": ["영역1", "영역2", ...],
  "intent": "질문의 핵심 의도",
  "confidence": 0.95,
  "reason": "토스 요구사항을 고려한 구체적 선택 이유"
}}

예시:
- "LLM 경험이 있나요?" → ["project", "skill"] (보드게임 챗봇 프로젝트 + LLM 기술스택)
- "왜 토스에 지원했나요?" → ["cover_letter"] (지원 동기가 핵심)
- "어려운 상황을 극복한 경험은?" → ["project", "about_me"] (프로젝트 경험 + 개인 성장)
"""

            response = await client.chat_completion_with_retry(
                messages=[
                    {"role": "system", "content": "당신은 토스 ML Engineer 채용담당자입니다. 질문을 정확히 분석해서 필요한 데이터 영역을 선택해주세요."},
                    {"role": "user", "content": prompt}
                ],
                model="gpt-4o-mini",
                temperature=0.3,
                max_tokens=400
            )
            
            gpt_response = response.choices[0].message.content.strip()
            print(f"   GPT 응답: {gpt_response}")
            
            # JSON 파싱
            try:
                result = json.loads(gpt_response)
                
                # 유효한 extractor만 필터링
                valid_extractors = ["project", "skill", "about_me", "cover_letter"]
                selected = result.get("selected_extractors", [])
                filtered_selected = [ext for ext in selected if ext in valid_extractors]
                
                return {
                    "selected_extractors": filtered_selected,
                    "intent": result.get("intent", "general"),
                    "confidence": result.get("confidence", 0.8),
                    "reason": result.get("reason", "GPT 분석 결과")
                }
                
            except json.JSONDecodeError:
                print(f"   ❌ GPT JSON 파싱 실패: {gpt_response}")
                # 파싱 실패시 보수적 기본값
                return {
                    "selected_extractors": ["project", "skill"],
                    "intent": "general",
                    "confidence": 0.5,
                    "reason": "JSON 파싱 실패로 기본 선택"
                }
            
        except Exception as e:
            print(f"   ❌ GPT 호출 실패: {str(e)}")
            # GPT 호출 실패시 보수적 기본값
            return {
                "selected_extractors": ["project", "skill"],
                "intent": "general", 
                "confidence": 0.3,
                "reason": f"GPT 호출 실패로 기본 선택: {str(e)}"
            }


async def enhanced_router_agent(state: PortfolioState) -> PortfolioState:
    """Enhanced Router Agent 실행 함수"""
    router = EnhancedRouterAgent()
    return await router.analyze_and_route(state)