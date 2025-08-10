"""
Skill Extractor Agent - GPT 기반 기술 스택 분석

역할:
1. GPT로 질문 분석하여 필요한 기술 카테고리 선택 (LLM/ML/Backend/Infra/Frontend)
2. 선택된 카테고리의 모든 기술 목록 가져오기
3. GPT로 질문에 적합한 기술들 선별
4. 선별된 기술들의 상세 내용 수집 및 제공
"""

import json
import httpx
from typing import Dict, Any, List
from workflow.state import PortfolioState
from config.settings import Config
from utils.openai_client import get_openai_client

class SkillExtractorAgent:
    """GPT 기반 기술 스택 분석 에이전트"""
    
    def __init__(self):
        self.base_url = Config.PORTFOLIO_BASE_URL
        self.timeout = httpx.Timeout(30.0)
    
    async def extract(self, state: PortfolioState) -> Dict[str, Any]:
        """기술 스택 데이터 수집 및 GPT 분석"""
        
        print("\n🔧 Skill Extractor 시작")
        print(f"   질문: {state.question}")
        print(f"   회사: {state.company_context}")
        
        # 1단계: GPT로 필요한 기술 카테고리 선택
        selected_categories = await self._gpt_select_categories(state)
        print(f"   📂 선택된 카테고리: {selected_categories}")
        
        # 2단계: 선택된 카테고리의 모든 기술 목록 가져오기
        all_skills = await self._fetch_skills_by_categories(selected_categories)
        print(f"   📋 수집된 기술들: {len(all_skills)}개")
        
        # 3단계: GPT로 질문에 적합한 기술들 선별
        selected_skills = await self._gpt_select_skills(state, all_skills)
        print(f"   🎯 선별된 기술들: {selected_skills}")
        
        # 4단계: 선별된 기술들의 상세 내용 가져오기
        skills_detail = await self._fetch_skills_detail(selected_skills)
        
        print(f"   ✅ Skill 분석 완료: {len(selected_skills)}개 기술 선별")
        
        return {
            "selected_categories": selected_categories,
            "selected_skills": selected_skills,
            "skills_detail": skills_detail,
            "analysis": f"토스 요구사항에 맞는 {len(selected_skills)}개 기술 스택 선별"
        }
    
    async def _gpt_select_categories(self, state: PortfolioState) -> List[str]:
        """1단계: GPT로 필요한 기술 카테고리 선택"""
        
        try:
            client = get_openai_client()
            toss_context = Config.get_company_context(state.company_context)
            
            prompt = f"""
{toss_context}

위 토스 ML Engineer 채용 정보를 숙지하고, 다음 면접 질문을 분석해주세요:

질문: "{state.question}"

황준호의 기술 카테고리 5개:
1. llm: LangChain, RAG, Vector DB, OpenAI, Fine-tuning 등 LLM 관련 기술
2. ml: PyTorch, TensorFlow, XGBoost, LightGBM 등 머신러닝 프레임워크
3. backend: FastAPI, PostgreSQL, Redis, Docker 등 백엔드 기술
4. infra: Kubernetes, AWS, Terraform 등 인프라 기술
5. frontend: Next.js, React, TypeScript 등 프론트엔드 기술

토스가 중요시하는 기술:
- AI 영역 ⭐⭐⭐: LLM, RAG 기술 (llm 카테고리)
- ML 라이브러리: PyTorch, TensorFlow (ml 카테고리)
- 빅데이터: Spark, Hadoop (infra 카테고리)
- 서비스 배포: Kubernetes (infra 카테고리)

이 질문에 답하기 위해 필요한 기술 카테고리들을 선택해주세요.

JSON 형태로만 응답:
{{"categories": ["카테고리1", "카테고리2"], "reason": "선택 이유"}}
"""

            response = await client.chat_completion_with_retry(
                messages=[
                    {"role": "system", "content": "당신은 토스 ML Engineer 채용담당자입니다."},
                    {"role": "user", "content": prompt}
                ],
                model="gpt-4o-mini",
                temperature=0.3,
                max_tokens=200
            )
            
            result = json.loads(response.choices[0].message.content.strip())
            categories = result.get("categories", ["llm", "ml"])
            
            # 유효한 카테고리만 필터링 (llm, ml, backend, infra, frontend)
            valid_categories = ["llm", "ml", "backend", "infra", "frontend"]
            filtered = [cat for cat in categories if cat in valid_categories]
            return filtered if filtered else ["llm", "ml"]
            
        except Exception as e:
            print(f"   ❌ 카테고리 선택 실패: {str(e)}")
            return ["llm", "ml"]  # 기본값
    
    async def _fetch_skills_by_categories(self, categories: List[str]) -> List[str]:
        """2단계: 선택된 카테고리의 모든 기술 목록 가져오기"""
        
        all_skills = []
        
        for category in categories:
            try:
                # 실제 API 호출
                async with httpx.AsyncClient(timeout=self.timeout) as client:
                    response = await client.get(f"{self.base_url}/api/skills/category/{category}")
                    response.raise_for_status()
                    skills = response.json()
                    
                all_skills.extend(skills)
                print(f"   📁 {category}: {len(skills)}개 기술")
                
            except Exception as e:
                print(f"   ❌ {category} 기술 목록 가져오기 실패: {str(e)}")
        
        return all_skills
    
    async def _gpt_select_skills(self, state: PortfolioState, all_skills: List[str]) -> List[str]:
        """3단계: GPT로 질문에 적합한 기술들 선별"""
        
        try:
            client = get_openai_client()
            toss_context = Config.get_company_context(state.company_context)
            
            prompt = f"""
{toss_context}

위 토스 ML Engineer 채용 정보를 숙지하고, 다음 면접 질문을 분석해주세요:

질문: "{state.question}"

사용 가능한 기술 목록:
{', '.join(all_skills)}

토스가 특히 중요시하는 기술들:
- LLM/RAG 관련: langchain, rag, vector-db
- ML 프레임워크: pytorch, tensorflow
- 빅데이터: spark, hadoop
- 배포/인프라: kubernetes, docker

이 질문에 답하기 위해 가장 적합한 기술 3-5개를 선택해주세요.

JSON 형태로만 응답:
{{"selected_skills": ["기술1", "기술2", "기술3"], "reason": "토스 요구사항 기준 선택 이유"}}
"""

            response = await client.chat_completion_with_retry(
                messages=[
                    {"role": "system", "content": "당신은 토스 ML Engineer 채용담당자입니다."},
                    {"role": "user", "content": prompt}
                ],
                model="gpt-4o-mini",
                temperature=0.3,
                max_tokens=300
            )
            
            result = json.loads(response.choices[0].message.content.strip())
            selected = result.get("selected_skills", [])
            
            # 유효한 기술만 필터링
            valid_skills = [skill for skill in selected if skill in all_skills]
            return valid_skills[:5]  # 최대 5개
            
        except Exception as e:
            print(f"   ❌ 기술 선별 실패: {str(e)}")
            # 기본값: 각 카테고리에서 첫 번째 기술
            return all_skills[:3] if all_skills else []
    
    async def _fetch_skills_detail(self, skills: List[str]) -> Dict[str, Any]:
        """4단계: 선별된 기술들의 상세 내용 가져오기"""
        
        skills_detail = {}
        
        for skill in skills:
            try:
                # 실제 API 호출
                async with httpx.AsyncClient(timeout=self.timeout) as client:
                    response = await client.get(f"{self.base_url}/api/skills/detail/{skill}")
                    response.raise_for_status()
                    detail = response.json()
                    
                skills_detail[skill] = detail
                print(f"   📖 {skill} 상세 정보 수집")
                
            except Exception as e:
                print(f"   ❌ {skill} 상세 정보 가져오기 실패: {str(e)}")
                skills_detail[skill] = {"title": skill, "error": str(e)}
        
        return skills_detail


async def skill_extractor_agent(state: PortfolioState) -> Dict[str, Any]:
    """Skill Extractor Agent 실행 함수"""
    extractor = SkillExtractorAgent()
    return await extractor.extract(state)