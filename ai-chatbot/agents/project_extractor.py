"""
Project Extractor Agent - GPT 기반 프로젝트 데이터 분석

역할:
1. 4개 프로젝트 전체 데이터 수집 (실제 Next.js API 연동)
2. GPT로 토스 요구사항 기준 프로젝트 분석
3. 질문과 가장 관련있는 프로젝트 선별 및 강점 추출
4. Data Integrator가 사용할 완전한 분석 데이터 제공
"""

import asyncio
import json
from typing import Dict, Any, List
from workflow.state import PortfolioState
from config.settings import Config
from services.portfolio_client import portfolio_client
from utils.openai_client import get_openai_client

class ProjectExtractorAgent:
    """GPT 기반 프로젝트 데이터 분석 에이전트"""
    
    async def extract(self, state: PortfolioState) -> Dict[str, Any]:
        """프로젝트 데이터 수집 및 GPT 분석"""
        
        print("\n📦 Project Extractor 시작")
        print(f"   질문: {state.question}")
        print(f"   회사: {state.company_context}")
        
        # 1. 4개 프로젝트 모두 병렬로 실제 데이터 수집
        all_projects_data = await self._collect_all_projects()
        
        # 2. GPT로 토스 맞춤 프로젝트 분석
        if all_projects_data:
            gpt_analysis = await self._gpt_analyze_projects(state, all_projects_data)
        else:
            print("   ⚠️ 프로젝트 데이터 수집 실패 - 기본 분석으로 진행")
            gpt_analysis = self._get_fallback_analysis()
        
        print(f"   ✅ 분석 완료: {len(gpt_analysis.get('selected_projects', []))}개 프로젝트 선별")
        
        return gpt_analysis
    
    async def _collect_all_projects(self) -> Dict[str, Any]:
        """4개 프로젝트 모두 병렬로 실제 데이터 수집"""
        
        print("   🔄 4개 프로젝트 병렬 수집 중...")
        
        # 4개 프로젝트 병렬 수집 태스크 생성
        tasks = []
        for project in Config.COMPLETE_PROJECTS:
            task = portfolio_client.get_portfolio_data(project)
            tasks.append((project, task))
        
        # 병렬 실행
        collected_projects = {}
        if tasks:
            results = await asyncio.gather(
                *[task for _, task in tasks], 
                return_exceptions=True
            )
            
            # 결과 처리
            for i, (project, _) in enumerate(tasks):
                if not isinstance(results[i], Exception):
                    collected_projects[project] = results[i]
                    print(f"   ✅ {project} 수집 성공")
                else:
                    print(f"   ❌ {project} 수집 실패: {results[i]}")
                    collected_projects[project] = {}  # 빈 데이터로 처리
        
        print(f"   📊 총 {len(collected_projects)}개 프로젝트 수집 완료")
        return collected_projects
    
    async def _gpt_analyze_projects(self, state: PortfolioState, all_projects: Dict[str, Any]) -> Dict[str, Any]:
        """GPT로 토스 맞춤 프로젝트 분석"""
        
        try:
            client = get_openai_client()
            
            # 토스 채용공고 전체 컨텍스트
            toss_context = Config.get_company_context(state.company_context)
            
            # 프로젝트 데이터를 문자열로 정리
            projects_summary = self._format_projects_for_gpt(all_projects)
            
            prompt = f"""
{toss_context}

위 토스 ML Engineer 채용 정보를 숙지하고, 다음 면접 질문에 대해 황준호의 프로젝트들을 분석해주세요:

질문: "{state.question}"

황준호의 4개 프로젝트 전체 데이터:
{projects_summary}

토스가 가장 중요하게 보는 것들:
- AI 영역 ⭐⭐⭐: LLM, RAG, 멀티모달
- 추천 시스템: 사용자-콘텐츠 연결 최적화  
- 비즈니스 임팩트: 단순 모델링이 아닌 실제 결과
- 빅데이터 처리: Hadoop, Spark, 대용량 데이터
- 주도적 기여: 본인이 직접 기여한 구체적 부분

분석 요청:
1. 이 질문에 답하기 위해 가장 적합한 프로젝트 1-2개 선별
2. 토스 요구사항에 맞는 각 프로젝트의 핵심 강점 추출
3. 면접 답변에 어필할 수 있는 구체적 성과와 기술적 깊이
4. 토스 6개 업무 영역 중 어디에 가장 적합한지 매칭

다음 JSON 형태로만 응답해주세요:
{{
  "selected_projects": ["프로젝트명1", "프로젝트명2"],
  "analysis": "토스 관점에서 이 프로젝트들이 질문에 적합한 이유",
  "strengths": ["핵심 강점1", "핵심 강점2", "핵심 강점3"],
  "toss_domain_match": "토스 6개 영역 중 가장 적합한 영역",
  "business_impact": "비즈니스 임팩트를 어필할 수 있는 구체적 성과",
  "technical_depth": "기술적 깊이를 보여줄 수 있는 부분"
}}
"""

            response = await client.chat_completion_with_retry(
                messages=[
                    {"role": "system", "content": "당신은 토스 ML Engineer 채용담당자입니다. 후보자의 프로젝트를 토스 요구사항에 맞춰 정확히 분석해주세요."},
                    {"role": "user", "content": prompt}
                ],
                model="gpt-4o-mini",
                temperature=0.3,
                max_tokens=800
            )
            
            gpt_response = response.choices[0].message.content.strip()
            print(f"   🤖 GPT 분석: {gpt_response[:100]}...")
            
            # JSON 파싱 및 실제 프로젝트 데이터 추가
            try:
                analysis = json.loads(gpt_response)
                
                # 선별된 프로젝트의 실제 데이터 추가
                selected_projects = analysis.get("selected_projects", [])
                projects_detail = {}
                for project in selected_projects:
                    if project in all_projects:
                        projects_detail[project] = all_projects[project]
                
                analysis["projects_detail"] = projects_detail
                return analysis
                
            except json.JSONDecodeError:
                print(f"   ❌ GPT JSON 파싱 실패: {gpt_response}")
                return self._get_fallback_analysis()
            
        except Exception as e:
            print(f"   ❌ GPT 분석 실패: {str(e)}")
            return self._get_fallback_analysis()
    
    def _format_projects_for_gpt(self, projects: Dict[str, Any]) -> str:
        """프로젝트 데이터를 GPT가 이해하기 쉽게 포맷팅"""
        
        formatted = ""
        for project_name, project_data in projects.items():
            if not project_data:
                continue
                
            formatted += f"\n=== {project_name} ===\n"
            
            # 주요 필드들 추출 (실제 데이터 구조에 따라 조정 필요)
            title = project_data.get("title", project_name)
            description = project_data.get("description", "")
            tech = project_data.get("tech", [])
            achievements = project_data.get("achievements", [])
            
            formatted += f"제목: {title}\n"
            formatted += f"설명: {description}\n"
            formatted += f"기술스택: {', '.join(tech) if tech else '정보 없음'}\n"
            formatted += f"성과: {', '.join(achievements) if achievements else '정보 없음'}\n"
        
        return formatted if formatted else "프로젝트 데이터를 가져오지 못했습니다."
    
    def _get_fallback_analysis(self) -> Dict[str, Any]:
        """GPT 분석 실패시 기본 분석 데이터"""
        
        return {
            "selected_projects": ["boardgame-chatbot", "date-recommendation"],
            "analysis": "LLM/RAG 기술과 추천시스템 경험이 토스 요구사항에 부합",
            "strengths": ["LLM/RAG 실무 경험", "추천시스템 구현", "실제 서비스 적용"],
            "toss_domain_match": "AI",
            "business_impact": "사용자 경험 개선 및 성능 최적화",
            "technical_depth": "LangChain, Vector DB, 대용량 데이터 처리",
            "projects_detail": {}
        }


async def project_extractor_agent(state: PortfolioState) -> Dict[str, Any]:
    """Project Extractor Agent 실행 함수"""
    extractor = ProjectExtractorAgent()
    return await extractor.extract(state)