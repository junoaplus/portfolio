"""
Final Response Generator - 전략 기반 완벽한 면접 답변 생성

역할:
1. Data Integrator가 설계한 답변 전략을 받아 실행
2. 토스 채용공고 + 전략 + 원본 데이터 → 완벽한 면접 답변 생성
3. 토스 문화에 맞는 자연스러운 대화체 답변
4. 구체적 성과와 숫자 포함, 비즈니스 임팩트 강조
"""

import json
from typing import Dict, Any
from workflow.state import PortfolioState
from config.settings import Config
from utils.openai_client import get_openai_client

class FinalResponseGenerator:
    """전략 기반 완벽한 면접 답변 생성 에이전트"""
    
    async def generate(self, state: PortfolioState) -> PortfolioState:
        """Data Integrator 전략을 받아 완벽한 토스 면접 답변 생성"""
        
        print("\n💬 Final Response Generator (전략 기반 답변 생성) 시작")
        
        # 1. Data Integrator 전략 확인
        strategy = state.integrated_data
        if not strategy:
            print("   ⚠️ Data Integrator 전략 없음 - 기본 답변 생성")
            final_answer = self._generate_fallback_answer(state)
        else:
            print(f"   📋 답변 전략: {strategy.get('answer_strategy', 'N/A')[:50]}...")
            
            # 2. 전략 기반 완벽한 답변 생성
            final_answer = await self._generate_strategic_answer(state, strategy)
        
        # 3. State에 최종 답변 저장
        state.response = final_answer
        
        # 4. 추천 링크 생성 (기존 로직 유지)
        links = self._generate_links(state, strategy.get('raw_data', {}))
        state.recommended_links = links
        
        # 5. 품질 평가
        quality_score = self._evaluate_response_quality(final_answer, state)
        state.response_quality_score = quality_score
        
        print(f"   ✅ 완벽한 면접 답변 생성 완료")
        print(f"   📝 답변 길이: {len(final_answer)}자")
        print(f"   🔗 추천 링크: {len(links)}개")
        print(f"   📊 품질 점수: {quality_score:.2f}")
        
        return state
    
    async def _generate_strategic_answer(self, state: PortfolioState, strategy: Dict[str, Any]) -> str:
        """Data Integrator 전략을 기반으로 완벽한 답변 생성"""
        
        try:
            client = get_openai_client()
            
            # 토스 채용공고 전체 컨텍스트
            toss_context = Config.get_toss_job_context()
            
            # 전략 데이터 포맷팅
            strategy_summary = self._format_strategy_for_gpt(strategy)
            
            # 원본 데이터 포맷팅
            raw_data_summary = self._format_raw_data(strategy.get('raw_data', {}))
            
            prompt = f"""
{toss_context}

면접 질문: "{state.question}"

Data Integrator가 설계한 완벽한 답변 전략:
{strategy_summary}

활용할 황준호의 원본 데이터:
{raw_data_summary}

GPT 임무 - 완벽한 토스 면접 답변 생성:
1. 위 전략을 정확히 따라 자연스러운 면접 답변 생성
2. 토스 채용담당자가 듣고 싶어하는 내용으로 구성
3. 문제 해결 능력을 핵심으로 강조
4. 구체적 숫자, 성과, 기술적 깊이 포함
5. 토스 문화에 맞는 자신감 있고 구체적인 톤

답변 요구사항:
- 길이: 150-250단어 (면접 답변 적정 길이)
- 구조: {strategy.get('response_structure', '도입 → 경험 → 성과 → 기여')}
- 톤: {strategy.get('tone_style', '구체적이고 자신감 있는 톤')}
- 핵심 포인트: {', '.join(strategy.get('key_points', []))}
- 비즈니스 임팩트: {strategy.get('business_impact_focus', '')}

토스 면접관에게 하는 자연스러운 대화체로 답변해주세요.
"안녕하세요" 같은 인사말은 제외하고 질문에 대한 답변만 생성해주세요.
"""

            response = await client.chat_completion_with_retry(
                messages=[
                    {"role": "system", "content": "당신은 토스 ML Engineer 면접을 위한 완벽한 답변 생성 전문가입니다. Data Integrator의 전략을 정확히 따라 토스 면접관이 원하는 답변을 생성해주세요."},
                    {"role": "user", "content": prompt}
                ],
                model="gpt-4o-mini",
                temperature=0.7,
                max_tokens=1200
            )
            
            generated_answer = response.choices[0].message.content.strip()
            print(f"   🤖 GPT 답변 생성: {generated_answer[:80]}...")
            
            return generated_answer
            
        except Exception as e:
            print(f"   ❌ 전략 기반 답변 생성 실패: {str(e)}")
            return self._generate_fallback_answer(state)
    
    def _format_strategy_for_gpt(self, strategy: Dict[str, Any]) -> str:
        """전략 데이터를 GPT가 이해하기 쉽게 포맷팅"""
        
        formatted = ""
        
        # 핵심 전략 필드들만 선별
        key_fields = [
            'answer_strategy', 'response_structure', 'key_points',
            'problem_solving_angle', 'business_impact_focus', 
            'toss_connection', 'tone_style', 'evidence_usage'
        ]
        
        for field in key_fields:
            if field in strategy:
                value = strategy[field]
                if isinstance(value, list):
                    formatted += f"{field}: {', '.join(value)}\n"
                else:
                    formatted += f"{field}: {value}\n"
        
        return formatted if formatted else "전략 데이터를 파싱할 수 없습니다."
    
    def _format_raw_data(self, raw_data: Dict[str, Any]) -> str:
        """원본 데이터를 요약 포맷팅"""
        
        if not raw_data:
            return "원본 데이터 없음"
        
        formatted = ""
        for data_type, data_content in raw_data.items():
            if data_content:
                formatted += f"\n=== {data_type} ===\n"
                if isinstance(data_content, dict):
                    # 핵심 필드만 요약
                    for key, value in data_content.items():
                        if isinstance(value, (str, int, float)) and len(str(value)) < 100:
                            formatted += f"- {key}: {value}\n"
                else:
                    formatted += f"- 내용: {str(data_content)[:100]}\n"
        
        return formatted if formatted else "원본 데이터를 파싱할 수 없습니다."
    
    def _generate_fallback_answer(self, state: PortfolioState) -> str:
        """전략 없이 기본 답변 생성"""
        
        return f"""죄송합니다. '{state.question}' 질문에 대한 상세한 답변을 준비하는 중 문제가 발생했습니다. 

제가 토스 ML Engineer 직무에 지원한 이유는 AI/ML 기술로 실제 비즈니스 임팩트를 내고 싶기 때문입니다. 특히 LLM/RAG 기술과 추천시스템 경험을 바탕으로 토스의 다양한 AI 프로젝트에 기여하고 싶습니다.

구체적인 경험과 성과에 대해서는 별도로 상세히 말씀드릴 수 있습니다."""
    
    def _generate_links(self, state: PortfolioState, raw_data: Dict[str, Any]) -> Dict[str, str]:
        """관련 포트폴리오 링크 생성"""
        
        links = {}
        
        if not raw_data:
            return links
        
        # 프로젝트 링크
        for key in raw_data.keys():
            if "project_data" in key:
                # project_data에서 프로젝트명 추출
                if isinstance(raw_data[key], dict):
                    for project_key in raw_data[key].keys():
                        if project_key in Config.COMPLETE_PROJECTS:
                            links[f"{project_key} 프로젝트"] = f"/projects/{project_key}"
        
        # 스킬 링크 (최대 3개)
        skill_count = 0
        for key in raw_data.keys():
            if "skill_data" in key and skill_count < 3:
                if isinstance(raw_data[key], dict):
                    for skill_key in raw_data[key].keys():
                        if skill_key in Config.COMPLETE_LLM_SKILLS and skill_count < 3:
                            links[f"{skill_key} 스킬"] = f"/skills/{skill_key}"
                            skill_count += 1
        
        return links
    
    def _evaluate_response_quality(self, answer: str, state: PortfolioState) -> float:
        """답변 품질 평가"""
        
        score = 0.5  # 기본 점수
        
        # 길이 체크 (적정 범위: 150-300자)
        length = len(answer)
        if 150 <= length <= 300:
            score += 0.2
        elif 100 <= length < 150 or 300 < length <= 400:
            score += 0.1
        
        # 토스 관련 언급
        toss_keywords = ["토스", "toss", "비즈니스", "임팩트", "서비스"]
        toss_mentions = sum(1 for keyword in toss_keywords if keyword in answer.lower())
        score += min(toss_mentions * 0.05, 0.15)
        
        # 구체적 내용 (숫자, 성과 지표)
        concrete_keywords = ["프로젝트", "%", "개선", "구현", "경험", "성과"]
        concrete_mentions = sum(1 for keyword in concrete_keywords if keyword in answer)
        score += min(concrete_mentions * 0.05, 0.15)
        
        return min(score, 1.0)


async def final_response_generator_agent(state: PortfolioState) -> PortfolioState:
    """전략 기반 완벽한 면접 답변 생성 에이전트 실행"""
    
    generator = FinalResponseGenerator()
    return await generator.generate(state)