"""
About Me Extractor Agent - GPT 기반 개인적 특성 데이터 분석

역할:
1. About Me 페이지 전체 내용을 API로 받아오기
2. GPT로 토스 채용공고 + 질문 + About Me 전체 내용 분석
3. 질문에 적합한 개인적 특성 데이터만 선별하여 제공
"""

import json
import httpx
from typing import Dict, Any
from workflow.state import PortfolioState
from config.settings import Config
from utils.openai_client import get_openai_client

class AboutMeExtractorAgent:
    """GPT 기반 개인적 특성 데이터 분석 에이전트"""
    
    def __init__(self):
        self.base_url = Config.PORTFOLIO_BASE_URL
        self.timeout = httpx.Timeout(30.0)
    
    async def extract(self, state: PortfolioState) -> Dict[str, Any]:
        """개인적 특성 데이터 수집 및 GPT 분석"""
        
        print("\n🙋‍♂️ About Me Extractor 시작")
        print(f"   질문: {state.question}")
        print(f"   회사: {state.company_context}")
        
        # 1단계: About Me 페이지 전체 내용 받아오기
        about_me_full_content = await self._fetch_about_me_full_content()
        print(f"   📄 About Me 전체 내용 수집 완료")
        
        # 2단계: GPT로 토스 맞춤 개인적 특성 분석
        if about_me_full_content:
            gpt_analysis = await self._gpt_analyze_about_me(state, about_me_full_content)
        else:
            print("   ⚠️ About Me 데이터 수집 실패")
            raise Exception("About Me 페이지 데이터를 가져올 수 없습니다")
        
        print(f"   ✅ About Me 분석 완료")
        
        return gpt_analysis
    
    async def _fetch_about_me_full_content(self) -> Dict[str, Any]:
        """About Me 페이지 전체 내용 받아오기"""
        
        try:
            # Next.js API 호출
            async with httpx.AsyncClient(timeout=self.timeout) as client:
                response = await client.get(f"{self.base_url}/api/about")
                response.raise_for_status()
                full_content = response.json()
                
            print(f"   📁 About Me 전체 내용: {len(str(full_content))}자")
            return full_content
            
        except Exception as e:
            print(f"   ❌ About Me 전체 내용 가져오기 실패: {str(e)}")
            return {}
    
    async def _gpt_analyze_about_me(self, state: PortfolioState, about_me_content: Dict[str, Any]) -> Dict[str, Any]:
        """GPT로 토스 맞춤 개인적 특성 분석"""
        
        try:
            client = get_openai_client()
            
            # 토스 채용공고 전체 컨텍스트
            toss_context = Config.get_company_context(state.company_context)
            
            # About Me 내용을 문자열로 정리
            about_me_summary = self._format_about_me_for_gpt(about_me_content)
            
            prompt = f"""
{toss_context}

위 토스 ML Engineer 채용 정보를 숙지하고, 다음 면접 질문에 대해 황준호의 개인적 특성을 분석해주세요:

질문: "{state.question}"

황준호의 About Me 페이지 전체 내용:
{about_me_summary}

토스가 가장 중요하게 보는 개인적 특성들:
- 빠른 학습과 적응력: 새로운 문제에 빠르게 몰입하고 필요 역량을 스스로 학습
- 문제 해결 주도성: 문제를 정의하고 기술적으로 접근하는 방식 자체를 설계
- 팀 협업과 소통: 다양한 사업부와 팀에서 효과적으로 협업
- 지속적 성장 마인드: 비즈니스 임팩트를 내기 위한 지속적 개선
- 책임감과 완성도: 맡은 역할을 끝까지 완수하는 신뢰성

분석 요청:
1. 이 질문에 답하기 위해 가장 적합한 개인적 특성 내용 선별
2. 토스 요구사항에 맞는 황준호의 강점과 경험 추출
3. 면접 답변에 활용할 수 있는 구체적 사례와 경험
4. 토스 ML Engineer 직무에 어필할 수 있는 개인적 특성

다음 JSON 형태로만 응답해주세요:
{{
  "selected_content": "질문에 가장 적합한 개인적 특성 내용",
  "analysis": "토스 관점에서 이 내용이 질문에 적합한 이유",
  "strengths": ["핵심 강점1", "핵심 강점2", "핵심 강점3"],
  "toss_appeal": "토스 ML Engineer 직무에 어필할 수 있는 개인적 특성",
  "specific_examples": "구체적 사례나 경험"
}}
"""

            response = await client.chat_completion_with_retry(
                messages=[
                    {"role": "system", "content": "당신은 토스 ML Engineer 채용담당자입니다. 후보자의 개인적 특성을 토스 요구사항에 맞춰 정확히 분석해주세요."},
                    {"role": "user", "content": prompt}
                ],
                model="gpt-4o-mini",
                temperature=0.3,
                max_tokens=1000
            )
            
            gpt_response = response.choices[0].message.content.strip()
            print(f"   🤖 GPT 분석: {gpt_response[:100]}...")
            
            # JSON 파싱
            try:
                analysis = json.loads(gpt_response)
                return analysis
                
            except json.JSONDecodeError:
                print(f"   ❌ GPT JSON 파싱 실패: {gpt_response}")
                raise Exception("GPT 응답 파싱에 실패했습니다")
            
        except Exception as e:
            print(f"   ❌ GPT 분석 실패: {str(e)}")
            raise
    
    def _format_about_me_for_gpt(self, about_me_content: Dict[str, Any]) -> str:
        """About Me 내용을 GPT가 이해하기 쉽게 포맷팅"""
        
        if not about_me_content:
            return "About Me 데이터를 가져오지 못했습니다."
        
        formatted = ""
        
        # 모든 필드를 순회하면서 포맷팅
        for key, value in about_me_content.items():
            if isinstance(value, dict):
                formatted += f"\n=== {key} ===\n"
                for sub_key, sub_value in value.items():
                    formatted += f"{sub_key}: {sub_value}\n"
            elif isinstance(value, list):
                formatted += f"\n=== {key} ===\n"
                for item in value:
                    formatted += f"- {item}\n"
            else:
                formatted += f"\n{key}: {value}\n"
        
        return formatted if formatted else "About Me 내용을 파싱할 수 없습니다."


async def about_me_extractor_agent(state: PortfolioState) -> Dict[str, Any]:
    """About Me Extractor Agent 실행 함수"""
    extractor = AboutMeExtractorAgent()
    return await extractor.extract(state)