"""
About Me Extractor Agent - 개인적 특성 및 경험 데이터 수집

역할:
1. 성격, 책임감, 개인적 특성 관련 정보 수집
2. 어려움 극복 경험, 성장 스토리 추출
3. 협업 경험, 리더십 경험 분석
4. 개인적 동기, 가치관 정보 제공
"""

import asyncio
from typing import Dict, Any, List
from workflow.state import PortfolioState
from config.settings import Config
from utils.openai_client import get_openai_client

class AboutMeExtractorAgent:
    """개인적 특성 및 경험 데이터 수집 에이전트"""
    
    async def extract(self, state: PortfolioState) -> Dict[str, Any]:
        """개인적 특성 관련 데이터 수집"""
        
        print("\n🙋‍♂️ About Me Extractor 시작")
        print(f"   질문: {state.question}")
        
        # GPT로 개인적 특성 데이터 생성
        about_me_data = await self._generate_about_me_data(state)
        
        return about_me_data
    
    async def _generate_about_me_data(self, state: PortfolioState) -> Dict[str, Any]:
        """GPT를 사용하여 개인적 특성 데이터 생성"""
        
        try:
            client = get_openai_client()
            company_context = Config.get_company_context(state.company_context)
            
            prompt = f"""
{company_context}

위 채용 정보를 바탕으로, 다음 질문에 대한 개인적 특성 및 경험 데이터를 제공해주세요:

질문: {state.question}

황준호의 개인적 배경 정보:
- AI/ML 엔지니어 지망생
- 4개 주요 프로젝트 완성 (보드게임 챗봇, 데이트 추천, 신문 이탈예측, 간호사 급여예측)
- LLM/RAG 기술에 특히 강점
- 팀 프로젝트 경험 다수
- 지속적 학습 및 성장 추구

다음 카테고리별로 관련 정보를 JSON 형태로 제공해주세요:
{{
  "personality": "성격 및 개인적 특성",
  "responsibility": "책임감 있게 일한 경험",  
  "growth": "어려움을 극복하고 성장한 경험",
  "teamwork": "협업 및 소통 능력",
  "leadership": "리더십 발휘 경험",
  "motivation": "개인적 동기 및 열정",
  "values": "중요하게 생각하는 가치관",
  "learning": "지속적 학습 태도"
}}

각 항목은 구체적이고 면접에서 활용할 수 있는 형태로 작성해주세요.
질문과 관련 없는 항목은 null로 설정해주세요.
"""

            response = await client.chat_completion_with_retry(
                messages=[
                    {"role": "system", "content": "당신은 면접 준비를 도와주는 전문 컨설턴트입니다."},
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
                about_data = json.loads(content)
            except:
                # JSON 파싱 실패시 기본 데이터
                about_data = {
                    "personality": "호기심이 많고 꾸준히 학습하며 문제 해결을 좋아하는 성격",
                    "responsibility": "프로젝트에서 맡은 역할을 끝까지 완수하는 책임감",
                    "growth": "새로운 기술 습득을 통한 지속적 성장 추구",
                    "teamwork": "팀원들과 적극적으로 소통하며 협업하는 능력",
                    "leadership": "프로젝트를 주도하며 팀을 이끄는 경험",
                    "motivation": "AI 기술로 사회에 기여하고자 하는 열정",
                    "values": "기술을 통한 문제 해결과 지속적 학습",
                    "learning": "새로운 도전을 두려워하지 않는 학습 태도"
                }
            
            print(f"   ✅ About Me 데이터 생성 완료")
            return about_data
            
        except Exception as e:
            print(f"   ❌ About Me 데이터 생성 실패: {str(e)}")
            return {
                "personality": "문제 해결을 좋아하는 개발자",
                "responsibility": "맡은 일은 끝까지 완수",
                "growth": "지속적인 학습과 성장",
                "teamwork": "원활한 소통과 협업",
                "leadership": "프로젝트 리딩 경험",
                "motivation": "기술로 세상을 바꾸고 싶은 열정",
                "values": "정직과 끈기",
                "learning": "평생 학습자 마인드"
            }


async def about_me_extractor_agent(state: PortfolioState) -> Dict[str, Any]:
    """개인적 특성 및 경험 데이터 수집"""
    extractor = AboutMeExtractorAgent()
    return await extractor.extract(state)