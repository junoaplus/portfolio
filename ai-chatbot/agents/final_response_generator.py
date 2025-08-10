"""
Final Response Generator - 최종 답변 생성

역할:
1. 모든 Extractor 데이터 통합
2. 회사별 맞춤 톤으로 답변 생성
3. 구조화된 응답 생성
4. 추천 링크 포함
"""

from typing import Dict, Any, List
from workflow.state import PortfolioState
from config.settings import Config
from utils.openai_client import get_openai_client

class FinalResponseGenerator:
    """최종 응답 생성 에이전트"""
    
    async def generate(self, state: PortfolioState) -> PortfolioState:
        """최종 답변 생성"""
        
        print("\n💬 Final Response Generator 시작")
        
        # 1. 데이터 통합
        integrated_data = self._integrate_all_data(state)
        
        # 2. 답변 생성
        answer = await self._generate_answer(state, integrated_data)
        state.final_answer = answer
        
        # 3. 추천 링크 생성
        links = self._generate_links(state, integrated_data)
        state.recommended_links = links
        
        # 4. 품질 평가
        quality_score = self._evaluate_response_quality(answer, state)
        state.response_quality_score = quality_score
        
        print(f"   답변 길이: {len(answer)}자")
        print(f"   추천 링크: {len(links)}개")
        print(f"   품질 점수: {quality_score:.2f}")
        
        return state
    
    def _integrate_all_data(self, state: PortfolioState) -> Dict[str, Any]:
        """모든 데이터 통합"""
        
        integrated = {}
        
        # 각 Extractor 데이터 통합
        for key, value in state.extracted_data.items():
            if isinstance(value, dict):
                for sub_key, sub_value in value.items():
                    integrated[sub_key] = sub_value
        
        return integrated
    
    async def _generate_answer(self, state: PortfolioState, data: Dict) -> str:
        """AI 답변 생성"""
        
        # 회사별 톤 설정
        tone = "professional"
        if state.company_context != "general":
            company_config = Config.get_company_strategy(state.company_context)
            tone = company_config.get("response_tone", "professional")
        
        # 데이터 요약
        data_summary = self._summarize_data(data)
        
        # 프롬프트 생성
        prompt = f"""
        질문: {state.question}
        회사: {state.company_context}
        의도: {state.intent}
        톤: {tone}
        
        수집된 데이터:
        {data_summary}
        
        위 데이터를 바탕으로 면접 질문에 대한 답변을 생성해주세요.
        
        요구사항:
        1. 구체적인 프로젝트와 기술 경험 언급
        2. {state.company_context} 맞춤 답변 (회사 특성 고려)
        3. 한국어로 자연스럽게 작성
        4. 2-3 문단으로 구성
        5. 실제 성과와 수치 포함
        """
        
        try:
            client = get_openai_client()
            response = await client.chat_completion_with_retry(
                messages=[
                    {"role": "system", "content": "당신은 면접 준비를 돕는 AI 코치입니다."},
                    {"role": "user", "content": prompt}
                ],
                temperature=0.7,
                max_tokens=1000
            )
            
            return response.choices[0].message.content
            
        except Exception as e:
            print(f"❌ 답변 생성 실패: {str(e)}")
            return self._generate_fallback_answer(state, data)
    
    def _summarize_data(self, data: Dict) -> str:
        """데이터 요약"""
        
        summary = []
        
        # 프로젝트 정보
        projects = [k for k in data.keys() if k.startswith("project_")]
        if projects:
            summary.append(f"프로젝트: {len(projects)}개")
            for proj in projects[:2]:
                if isinstance(data[proj], dict):
                    name = data[proj].get("name", proj)
                    summary.append(f"  - {name}")
        
        # 스킬 정보
        skills = [k for k in data.keys() if k.startswith("skill_")]
        if skills:
            summary.append(f"기술 스택: {len(skills)}개")
            for skill in skills[:3]:
                if isinstance(data[skill], dict):
                    name = data[skill].get("name", skill)
                    level = data[skill].get("proficiency", "")
                    summary.append(f"  - {name}: {level}%")
        
        # About Me
        if "about_me" in data:
            summary.append("개인 정보: 포함")
        
        # Cover Letter
        if "cover_letter" in data:
            summary.append("자기소개서: 포함")
        
        return "\n".join(summary)
    
    def _generate_fallback_answer(self, state: PortfolioState, data: Dict) -> str:
        """폴백 답변 생성"""
        
        answer_parts = []
        
        # 기본 인사
        answer_parts.append(f"안녕하세요. {state.question}에 대해 답변드리겠습니다.")
        
        # 프로젝트 언급
        projects = [k for k in data.keys() if k.startswith("project_")]
        if projects:
            answer_parts.append(f"저는 {len(projects)}개의 관련 프로젝트 경험이 있습니다.")
        
        # 스킬 언급
        skills = [k for k in data.keys() if k.startswith("skill_")]
        if skills:
            answer_parts.append(f"관련 기술로는 {len(skills)}가지를 보유하고 있습니다.")
        
        # 회사별 맞춤
        if state.company_context == "toss":
            answer_parts.append("토스의 ML Engineer 직무에 필요한 검색 인프라와 대용량 데이터 처리 경험을 보유하고 있습니다.")
        
        return " ".join(answer_parts)
    
    def _generate_links(self, state: PortfolioState, data: Dict) -> Dict[str, str]:
        """추천 링크 생성"""
        
        links = {}
        
        # 프로젝트 링크
        for key in data.keys():
            if key.startswith("project_"):
                project_name = key.replace("project_", "")
                links[project_name] = f"/projects/{project_name}"
        
        # 스킬 링크
        for key in data.keys():
            if key.startswith("skill_") and len(links) < 5:
                skill_name = key.replace("skill_", "")
                links[skill_name] = f"/skills/{skill_name}"
        
        return links
    
    def _evaluate_response_quality(self, answer: str, state: PortfolioState) -> float:
        """응답 품질 평가"""
        
        score = 0.5
        
        # 길이 체크
        if len(answer) > 200:
            score += 0.2
        
        # 회사 언급
        if state.company_context != "general":
            if state.company_context in answer:
                score += 0.1
        
        # 구체적 내용
        concrete_keywords = ["프로젝트", "개발", "구현", "%", "명", "개"]
        matches = sum(1 for kw in concrete_keywords if kw in answer)
        score += min(matches * 0.05, 0.2)
        
        return min(score, 1.0)


async def final_response_generator_agent(state: PortfolioState) -> PortfolioState:
    """최종 응답 생성 에이전트 실행"""
    
    generator = FinalResponseGenerator()
    return await generator.generate(state)