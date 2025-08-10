"""
Cover Letter Extractor Agent - 자기소개서 및 지원 동기 데이터 수집

역할:
1. 지원 동기, 포부, 목표 관련 정보 수집
2. 회사에 대한 관심도 및 이해도 분석
3. 장기 커리어 계획 및 비전 제공
4. 토스 특화 지원 이유 및 기여 방안

처리하는 질문 유형:
- "왜 토스에 지원하셨나요?"
- "토스에서 어떤 기여를 하고 싶나요?" 
- "5년 후 커리어 목표는?"
- "이 직무를 선택한 이유는?"
- "우리 회사에 대해 아는 것이 있나요?"
- "앞으로 어떤 개발자가 되고 싶나요?"

TODO: 자소서 내용 준비 완료 후 GPT 기반 구현
"""

import asyncio
from typing import Dict, Any, List
from workflow.state import PortfolioState
from config.settings import Config
from utils.openai_client import get_openai_client

class CoverLetterExtractorAgent:
    """자기소개서 및 지원 동기 데이터 수집 에이전트"""
    
    async def extract(self, state: PortfolioState) -> Dict[str, Any]:
        """자기소개서 관련 데이터 수집"""
        
        print("\n📝 Cover Letter Extractor 시작")
        print(f"   질문: {state.question}")
        
        # TODO: 자소서 내용 준비 완료 후 GPT 기반 구현
        # 현재는 기본 구조만 제공
        
        cover_letter_data = await self._generate_cover_letter_data(state)
        
        return cover_letter_data
    
    async def _generate_cover_letter_data(self, state: PortfolioState) -> Dict[str, Any]:
        """GPT를 사용하여 자기소개서 데이터 생성"""
        
        try:
            client = get_openai_client()
            toss_context = Config.get_toss_job_context()
            
            # TODO: 완전한 자소서 내용으로 교체 예정
            prompt = f"""
{toss_context}

위 토스 채용 정보를 바탕으로, 다음 질문에 대한 지원 동기 및 자기소개서 데이터를 제공해주세요:

질문: {state.question}

황준호의 지원 배경 (임시 - 추후 완전한 자소서로 교체):
- AI/ML 엔지니어로 토스에서 비즈니스 임팩트를 내고 싶음
- LLM/RAG 기술로 토스의 AI 영역에 기여 희망
- 슈퍼 앱 운영에 ML 기술로 임팩트 기여 목표

다음 카테고리별로 관련 정보를 JSON 형태로 제공해주세요:
{{
  "motivation": "토스 지원 동기",
  "company_interest": "토스에 대한 관심과 이해",
  "career_goals": "장기 커리어 목표와 비전", 
  "contribution": "토스에서 기여할 수 있는 부분",
  "passion": "이 직무/분야에 대한 열정",
  "future_vision": "5년 후 모습과 성장 계획"
}}

각 항목은 토스 ML Engineer 면접에 적합한 형태로 작성해주세요.
질문과 관련 없는 항목은 null로 설정해주세요.
"""

            response = await client.chat_completion_with_retry(
                messages=[
                    {"role": "system", "content": "당신은 토스 ML Engineer 면접을 위한 자기소개서 전문 컨설턴트입니다."},
                    {"role": "user", "content": prompt}
                ],
                model="gpt-4o-mini",
                temperature=0.7,
                max_tokens=1500
            )
            
            content = response.choices[0].message.content
            
            # JSON 파싱 시도
            try:
                import json
                cover_data = json.loads(content)
            except:
                # JSON 파싱 실패시 기본 데이터 (임시)
                cover_data = {
                    "motivation": "토스의 ML 기술로 비즈니스 임팩트를 내고 싶어 지원했습니다",
                    "company_interest": "토스의 슈퍼 앱과 AI 기술 활용에 큰 관심이 있습니다",
                    "career_goals": "ML Engineer로서 실제 서비스에 임팩트를 내는 개발자가 되고 싶습니다",
                    "contribution": "LLM/RAG 기술로 토스의 AI 영역 발전에 기여하겠습니다",
                    "passion": "AI 기술로 사용자 경험을 개선하는 것에 열정이 있습니다",
                    "future_vision": "5년 후에는 토스의 핵심 AI 시스템을 설계하는 시니어 엔지니어가 되고 싶습니다"
                }
            
            print(f"   ✅ Cover Letter 데이터 생성 완료")
            return cover_data
            
        except Exception as e:
            print(f"   ❌ Cover Letter 데이터 생성 실패: {str(e)}")
            return {
                "motivation": "토스에서 ML 기술로 성장하고 기여하고 싶어 지원했습니다",
                "company_interest": "토스의 혁신적인 금융 서비스에 관심이 많습니다", 
                "career_goals": "비즈니스 임팩트를 내는 ML 엔지니어가 되는 것이 목표입니다",
                "contribution": "AI/ML 기술로 토스 서비스 발전에 기여하겠습니다",
                "passion": "기술로 사람들의 삶을 개선하는 데 열정이 있습니다",
                "future_vision": "토스의 AI 기술 리더로 성장하고 싶습니다"
            }


async def cover_letter_extractor_agent(state: PortfolioState) -> Dict[str, Any]:
    """자기소개서 및 지원 동기 데이터 수집"""
    extractor = CoverLetterExtractorAgent()
    return await extractor.extract(state)