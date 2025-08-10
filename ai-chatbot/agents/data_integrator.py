"""
Data Integrator Agent - 4개 Extractor 데이터 통합 및 정제

역할:
1. 4개 Extractor의 데이터 통합
2. 중복 제거 및 정제
3. 질문과 관련된 데이터 우선순위화
4. 회사별 맞춤 데이터 강조
"""

from typing import Dict, Any, List
from workflow.state import PortfolioState
from config.settings import Config

class DataIntegratorAgent:
    """데이터 통합 및 정제 에이전트"""
    
    async def integrate(self, state: PortfolioState) -> PortfolioState:
        """4개 Extractor 데이터 통합"""
        
        print("\n🔧 Data Integrator 시작")
        
        # 1. 모든 데이터 수집
        all_data = state.extracted_data
        
        # 2. 데이터 정제 및 구조화
        integrated = self._structure_data(all_data, state)
        
        # 3. 우선순위화
        prioritized = self._prioritize_data(integrated, state)
        
        # 4. 회사별 맞춤 강조
        if state.company_context == "toss":
            enhanced = self._enhance_for_toss(prioritized)
        else:
            enhanced = prioritized
        
        # 5. State에 저장
        state.integrated_data = enhanced
        
        # 6. 핵심 포인트 추출
        state.key_points = self._extract_key_points(enhanced, state)
        
        print(f"   통합 데이터 소스: {len(all_data)}개")
        print(f"   핵심 포인트: {len(state.key_points)}개")
        
        return state
    
    def _structure_data(self, data: Dict, state: PortfolioState) -> Dict[str, Any]:
        """데이터 구조화"""
        
        structured = {
            "skills": {},
            "projects": {},
            "personal": {},
            "motivation": {}
        }
        
        for key, value in data.items():
            if "skill_data" in key and isinstance(value, dict):
                structured["skills"].update(value)
            elif "project_data" in key and isinstance(value, dict):
                structured["projects"].update(value)
            elif "about_me_data" in key and isinstance(value, dict):
                structured["personal"].update(value)
            elif "cover_letter_data" in key and isinstance(value, dict):
                structured["motivation"].update(value)
        
        return structured
    
    def _prioritize_data(self, data: Dict, state: PortfolioState) -> Dict[str, Any]:
        """질문 관련성에 따른 우선순위화"""
        
        prioritized = data.copy()
        question_lower = state.question.lower()
        
        # 질문에 직접 언급된 항목에 우선순위 표시
        for category, items in data.items():
            if isinstance(items, dict):
                for item_key, item_value in items.items():
                    if isinstance(item_value, dict):
                        # 관련성 점수 계산
                        relevance = 0
                        item_str = str(item_value).lower()
                        
                        # 질문 키워드 매칭
                        keywords = question_lower.split()
                        matches = sum(1 for kw in keywords if kw in item_str)
                        relevance = min(matches * 0.2, 1.0)
                        
                        if "relevance_score" not in item_value:
                            item_value["relevance_score"] = relevance
        
        return prioritized
    
    def _enhance_for_toss(self, data: Dict) -> Dict[str, Any]:
        """토스 맞춤 데이터 강조"""
        
        enhanced = data.copy()
        
        # 토스 관련 스킬 강조
        toss_skills = ["sql", "pytorch", "tensorflow", "spark", "hadoop", "rag", "langchain"]
        if "skills" in enhanced:
            for skill in toss_skills:
                for key in enhanced["skills"]:
                    if skill in key.lower():
                        enhanced["skills"][key]["toss_relevant"] = True
        
        # 토스 선호 프로젝트 강조
        toss_projects = ["date-recommendation", "newspaper-churn"]
        if "projects" in enhanced:
            for proj in toss_projects:
                for key in enhanced["projects"]:
                    if proj in key:
                        enhanced["projects"][key]["toss_preferred"] = True
        
        return enhanced
    
    def _extract_key_points(self, data: Dict, state: PortfolioState) -> List[str]:
        """핵심 포인트 추출"""
        
        key_points = []
        
        # 프로젝트 핵심
        if "projects" in data:
            for key, value in data["projects"].items():
                if isinstance(value, dict):
                    if value.get("toss_preferred") or value.get("importance_score", 0) > 0.7:
                        name = value.get("name", key)
                        key_points.append(f"프로젝트: {name}")
        
        # 스킬 핵심
        if "skills" in data:
            for key, value in data["skills"].items():
                if isinstance(value, dict):
                    if value.get("toss_relevant") or value.get("relevance_score", 0) > 0.7:
                        name = value.get("name", key)
                        key_points.append(f"기술: {name}")
        
        # 동기 핵심
        if "motivation" in data and data["motivation"]:
            if state.company_context == "toss":
                key_points.append("토스 ML Engineer 지원 동기 명확")
        
        return key_points[:5]  # 상위 5개만


async def data_integrator_agent(state: PortfolioState) -> PortfolioState:
    """데이터 통합 에이전트 실행"""
    
    integrator = DataIntegratorAgent()
    return await integrator.integrate(state)