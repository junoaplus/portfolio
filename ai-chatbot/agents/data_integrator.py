"""
Data Integrator Agent - GPT 기반 완전 데이터 통합

역할:
1. Router가 선택한 N개 데이터(1~4개)를 GPT로 완전 통합
2. 토스 채용공고 + 질문 + 선택된 데이터 → 하나의 일관된 스토리
3. 문제 해결 능력 중심으로 재구성 (요즘 가장 중요한 역량)
4. 토스 6개 업무영역과 질문 완벽 매핑
5. 비즈니스 임팩트 강조한 전략적 통합
"""

import json
from typing import Dict, Any
from workflow.state import PortfolioState
from config.settings import Config
from utils.openai_client import get_openai_client

class DataIntegratorAgent:
    """GPT 기반 완전 데이터 통합 에이전트"""
    
    async def integrate(self, state: PortfolioState) -> PortfolioState:
        """Router가 선택한 N개 데이터를 GPT로 완전 통합"""
        
        print("\n🔧 Data Integrator (GPT 기반 완전 통합) 시작")
        
        # 1. 선택된 데이터 확인
        selected_data = state.extracted_data
        data_count = len(selected_data)
        
        print(f"   📊 Router 선택 데이터: {data_count}개")
        for key in selected_data.keys():
            print(f"   - {key}")
        
        # 2. GPT로 완전 통합
        if data_count > 0:
            integrated_result = await self._gpt_complete_integration(state, selected_data)
        else:
            print("   ⚠️ 선택된 데이터 없음 - 기본 처리")
            integrated_result = self._get_fallback_integration(state)
        
        # 3. State에 통합 결과 저장
        state.integrated_data = integrated_result
        
        print(f"   ✅ GPT 답변 전략 설계 완료")
        print(f"   🎯 답변 전략: {integrated_result.get('answer_strategy', 'N/A')[:50]}...")
        print(f"   🔧 답변 구조: {integrated_result.get('response_structure', 'N/A')[:50]}...")
        
        return state
    
    async def _gpt_complete_integration(self, state: PortfolioState, selected_data: Dict[str, Any]) -> Dict[str, Any]:
        """GPT로 선택된 데이터들을 완전 통합"""
        
        try:
            client = get_openai_client()
            
            # 토스 채용공고 전체 컨텍스트
            toss_context = Config.get_toss_job_context()
            
            # 선택된 데이터를 문자열로 정리
            data_summary = self._format_selected_data(selected_data)
            
            prompt = f"""
{toss_context}

면접 질문: "{state.question}"

Router가 이 질문에 필요하다고 선택한 황준호의 데이터들:
{data_summary}

GPT 임무 - 완벽한 면접 답변 전략 설계:
1. 토스 ML Engineer 채용공고와 면접 질문을 정확히 매핑 분석
2. 선택된 데이터들을 하나의 완전한 스토리로 통합
3. 문제 해결 능력을 핵심으로 강조 (요즘 가장 중요한 역량)
4. 토스가 원하는 포인트(AI/ML, 비즈니스 임팩트, 빅데이터)와 질문 의도를 완벽 연결
5. Response Generator가 바로 사용할 수 있는 완벽한 답변 전략 제공

토스 채용담당자 관점에서 분석:
- 이 질문으로 무엇을 확인하려 하는가?
- 황준호의 어떤 경험이 토스 요구사항에 가장 부합하는가?
- 문제 정의부터 해결까지 주도적 기여 어떻게 어필할까?
- 답변 구조와 흐름을 어떻게 짜야 가장 임팩트 있을까?

다음 JSON 형태로만 응답해주세요:
{{
  "answer_strategy": "이 질문에 대한 토스 맞춤 완벽한 답변 전략과 접근법",
  "response_structure": "도입부 → 경험 설명 → 성과 강조 → 토스 기여 순서의 구체적 구조",
  "key_points": ["답변에서 반드시 강조해야 할 핵심 포인트들"],
  "problem_solving_angle": "문제 해결 능력을 어떻게 부각시킬지 구체적 방법",
  "business_impact_focus": "비즈니스 임팩트를 어떻게 어필할지",
  "toss_connection": "토스 6개 업무영역과 어떻게 연결할지",
  "tone_style": "토스 문화에 맞는 답변 톤과 스타일",
  "evidence_usage": "선택된 데이터를 답변에서 어떻게 활용할지"
}}
"""

            response = await client.chat_completion_with_retry(
                messages=[
                    {"role": "system", "content": "당신은 토스 ML Engineer 면접 전략 전문가입니다. 후보자의 데이터를 분석해서 Response Generator가 바로 사용할 수 있는 완벽한 답변 전략을 설계해주세요."},
                    {"role": "user", "content": prompt}
                ],
                model="gpt-4o-mini",
                temperature=0.3,
                max_tokens=1500
            )
            
            gpt_response = response.choices[0].message.content.strip()
            print(f"   🤖 GPT 통합 분석: {gpt_response[:100]}...")
            
            # JSON 파싱
            try:
                integration_result = json.loads(gpt_response)
                
                # 원본 데이터도 포함 (Response Generator가 필요할 수 있음)
                integration_result["raw_data"] = selected_data
                
                return integration_result
                
            except json.JSONDecodeError:
                print(f"   ❌ GPT JSON 파싱 실패: {gpt_response}")
                return self._get_fallback_integration(state)
            
        except Exception as e:
            print(f"   ❌ GPT 통합 실패: {str(e)}")
            return self._get_fallback_integration(state)
    
    def _format_selected_data(self, selected_data: Dict[str, Any]) -> str:
        """선택된 데이터를 GPT가 이해하기 쉽게 포맷팅"""
        
        formatted = ""
        
        for data_type, data_content in selected_data.items():
            if not data_content:
                continue
                
            formatted += f"\n=== {data_type} ===\n"
            
            if isinstance(data_content, dict):
                # dict 형태의 데이터 처리
                for key, value in data_content.items():
                    if isinstance(value, (str, int, float)):
                        formatted += f"{key}: {value}\n"
                    elif isinstance(value, list):
                        formatted += f"{key}: {', '.join(map(str, value))}\n"
                    elif isinstance(value, dict):
                        formatted += f"{key}:\n"
                        for sub_key, sub_value in value.items():
                            formatted += f"  - {sub_key}: {sub_value}\n"
                    else:
                        formatted += f"{key}: {str(value)}\n"
            else:
                formatted += f"내용: {str(data_content)}\n"
        
        return formatted if formatted else "선택된 데이터를 파싱할 수 없습니다."
    
    def _get_fallback_integration(self, state: PortfolioState) -> Dict[str, Any]:
        """GPT 통합 실패시 기본 통합 데이터"""
        
        return {
            "answer_strategy": f"'{state.question}' 질문에 대한 토스 맞춤 답변 전략: 황준호의 경험과 역량을 토스 요구사항에 맞춰 종합 제시",
            "response_structure": "도입부(질문 이해) → 구체적 경험 설명 → 성과와 임팩트 강조 → 토스에서의 기여 방안",
            "key_points": ["문제 해결 경험", "기술적 깊이", "비즈니스 임팩트", "토스 적합성"],
            "problem_solving_angle": "복잡한 문제를 정의하고 체계적으로 해결한 주도적 경험 부각",
            "business_impact_focus": "실제 서비스 성능 개선과 사용자 경험 향상에 집중",
            "toss_connection": "AI/ML 영역의 LLM/RAG 기술과 추천시스템 경험으로 토스 요구사항에 직접 부합",
            "tone_style": "구체적이고 자신감 있는 톤, 숫자와 성과 중심의 팩트 기반 설명",
            "evidence_usage": "선택된 프로젝트와 기술 데이터를 구체적 사례와 성과 지표로 활용",
            "raw_data": state.extracted_data
        }


async def data_integrator_agent(state: PortfolioState) -> PortfolioState:
    """GPT 기반 완전 데이터 통합 에이전트 실행"""
    
    integrator = DataIntegratorAgent()
    return await integrator.integrate(state)