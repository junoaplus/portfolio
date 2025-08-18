"""
Personal Agent - 개인 관련 질문 전문 (motivation + experience 통합)

역할:
1. 지원동기, 강점, 가치관, 성장과정 답변
2. 개인 경험, 팀워크, 리더십 답변  
3. 목표, 포부, 성장계획 답변
4. 자소서 + About Me 데이터 통합 활용

처리하는 질문 예시:
- "왜 우리 회사에 지원했나요?"
- "당신의 강점은 무엇인가요?"
- "팀워크 경험을 말해주세요"
- "5년 후 커리어 목표는?"
- "가치관은 무엇인가요?"
- "성장 과정에서 어려웠던 점은?"

데이터 소스:
- Config 자소서 데이터 (7개 섹션)
- About Me API 데이터 (7개 섹션)
"""

import json
import httpx
from typing import Dict, Any
from workflow.state import ChatState
from config.settings import Config
from utils.openai_client import get_openai_client
from utils.json_parser import parse_json_response

class PersonalAgent:
    """개인 관련 질문 전문 에이전트 (motivation + experience 통합)"""
    
    def __init__(self):
        self.about_api_base = f"{Config.PORTFOLIO_BASE_URL}/api/about"
        
    async def process(self, state: ChatState) -> ChatState:
        """개인 관련 질문 처리 (자소서 + About Me 데이터 통합)"""
        
        print(f"\n👤 Personal Agent 시작")
        print(f"   질문: {state.question}")
        print(f"   회사: {state.company_context}")
        
        try:
            # 1단계: 자소서 데이터 조회
            cover_letter_data = Config.get_cover_letter_data(state.company_context)
            print(f"   📄 자소서 데이터 로드: {len(cover_letter_data)}자")
            
            # 2단계: About Me 데이터 조회
            about_me_data = await self._get_about_me_data()
            print(f"   📄 About Me 데이터 조회: {len(str(about_me_data))}자")
            
            # 3단계: 질문 분석 후 적절한 데이터 조합
            combined_data = await self._combine_personal_data(
                state.question, cover_letter_data, about_me_data
            )
            
            # 4단계: GPT로 개인 관련 답변 생성
            answer = await self._generate_personal_answer(state, combined_data)
            
            # 5단계: 관련 링크 생성
            links = self._generate_personal_links(state.question, about_me_data)
            
            # 6단계: State 업데이트
            state.response = answer
            state.recommended_links = links
            state.response_quality_score = 0.95  # 실제 데이터 기반이므로 높은 점수
            
            print(f"   ✅ Personal Agent 완료")
            print(f"   📝 답변 길이: {len(answer)}자")
            print(f"   🔗 추천 링크: {len(links)}개")
            
        except Exception as e:
            print(f"   ❌ Personal Agent 오류: {str(e)}")
            # 폴백 처리
            state.response = "죄송합니다. 개인 정보를 가져오는 중 오류가 발생했습니다."
            state.recommended_links = {}
            state.response_quality_score = 0.3
        
        return state
    
    async def _get_about_me_data(self) -> Dict[str, Any]:
        """About Me API에서 개인 데이터 조회"""
        
        try:
            async with httpx.AsyncClient() as client:
                response = await client.get(self.about_api_base)
                if response.status_code == 200:
                    data = response.json()
                    return data
                else:
                    print(f"   ❌ About Me API 조회 실패: {response.status_code}")
                    return {}
        except Exception as e:
            print(f"   ❌ About Me API 오류: {str(e)}")
            return {}
    
    async def _combine_personal_data(self, question: str, cover_letter: str, about_me: Dict) -> str:
        """질문에 따라 자소서와 About Me 데이터를 선택적으로 조합"""
        
        try:
            client = get_openai_client()
            
            # About Me 데이터를 텍스트로 변환
            about_me_text = self._format_about_me_data(about_me)
            
            prompt = f"""
다음 개인 관련 질문에 답변하기 위해 필요한 데이터를 선택하세요.

질문: "{question}"

=== 자소서 데이터 (회사 맞춤) ===
{cover_letter}

=== About Me 데이터 (개인 경험/가치관) ===
{about_me_text}

이 질문에 답변하기 위해 어떤 데이터가 필요한지 분석하고, 필요한 부분만 추출하여 조합하세요.

JSON으로만 응답하세요:
{{
    "question_type": "질문 유형 (지원동기/강점/팀워크/성장/가치관/목표 중 하나)",
    "primary_source": "주요 데이터 소스 (자소서/About Me/둘다 중 하나)",
    "cover_letter_sections": ["필요한 자소서 섹션들"],
    "about_me_sections": ["필요한 About Me 섹션들"],
    "reasoning": "선택 이유"
}}
"""
            
            response = await client.chat_completion_with_retry(
                messages=[
                    {"role": "system", "content": "당신은 개인 데이터 분석 전문가입니다."},
                    {"role": "user", "content": prompt}
                ],
                model="gpt-4o-mini",
                temperature=0.3,
                max_tokens=500
            )
            
            result_text = response.choices[0].message.content.strip()
            print(f"   🤖 데이터 조합 분석: {result_text}")
            
            # JSON 파싱 (마크다운 코드블록 제거)
            if result_text.startswith("```json"):
                result_text = result_text[7:]
            if result_text.startswith("```"):
                result_text = result_text[3:]
            if result_text.endswith("```"):
                result_text = result_text[:-3]
            result_text = result_text.strip()
            
            analysis = parse_json_response(result_text)
            
            # 분석 결과에 따라 데이터 조합
            combined_data = self._extract_relevant_sections(
                cover_letter, about_me, analysis
            )
            
            return combined_data
            
        except Exception as e:
            print(f"   ❌ 데이터 조합 오류: {str(e)}")
            # 폴백: 모든 데이터 포함
            about_me_text = self._format_about_me_data(about_me)
            return f"""
=== 자소서 데이터 ===
{cover_letter}

=== About Me 데이터 ===
{about_me_text}
"""
    
    def _format_about_me_data(self, about_me: Dict) -> str:
        """About Me 딕셔너리를 텍스트로 변환"""
        
        formatted_text = ""
        
        # 핵심 가치관
        if 'coreValues' in about_me:
            formatted_text += "💡 핵심 가치관:\n"
            for item in about_me['coreValues'].get('items', []):
                formatted_text += f"Q: {item.get('question', '')}\n"
                formatted_text += f"A: {item.get('answer', '')}\n\n"
        
        # 강점
        if 'strengths' in about_me:
            formatted_text += "💪 강점:\n"
            for item in about_me['strengths'].get('items', []):
                formatted_text += f"- {item.get('name', '')}: {item.get('description', '')}\n"
            formatted_text += "\n"
        
        # 성장 스토리
        if 'growthStories' in about_me:
            formatted_text += "💡 성장 스토리:\n"
            for item in about_me['growthStories'].get('items', []):
                formatted_text += f"- {item.get('title', '')}: {item.get('description', '')}\n"
            formatted_text += "\n"
        
        # 팀워크
        if 'teamwork' in about_me:
            formatted_text += "🤝 팀워크:\n"
            for item in about_me['teamwork'].get('items', []):
                formatted_text += f"- {item.get('role', '')}: {item.get('description', '')}\n"
            formatted_text += "\n"
        
        # 활동
        if 'activities' in about_me:
            formatted_text += "🏃 대외 활동:\n"
            for item in about_me['activities'].get('items', []):
                if item.get('name'):
                    formatted_text += f"- {item.get('name', '')} ({item.get('period', '')})\n"
            formatted_text += "\n"
        
        return formatted_text
    
    def _extract_relevant_sections(self, cover_letter: str, about_me: Dict, analysis: Dict) -> str:
        """분석 결과에 따라 필요한 섹션만 추출"""
        
        combined_data = ""
        
        # 자소서 섹션 추출
        if analysis.get('cover_letter_sections'):
            combined_data += "=== 자소서 관련 내용 ===\n"
            # 간단히 전체 자소서 포함 (섹션별 파싱은 복잡함)
            combined_data += cover_letter + "\n\n"
        
        # About Me 섹션 추출
        if analysis.get('about_me_sections'):
            combined_data += "=== 개인 경험 및 가치관 ===\n"
            about_me_text = self._format_about_me_data(about_me)
            combined_data += about_me_text + "\n"
        
        return combined_data
    
    async def _generate_personal_answer(self, state: ChatState, combined_data: str) -> str:
        """GPT로 개인 관련 답변 생성"""
        
        try:
            client = get_openai_client()
            company_context = Config.get_company_context(state.company_context)
            
            # 대화 히스토리 포맷팅 (최근 2개)
            history_context = ""
            if state.conversation_history:
                recent = state.conversation_history[-2:]
                for msg in recent:
                    role = "질문" if msg['role'] == 'user' else "답변"
                    history_context += f"{role}: {msg['content'][:200]}...\n\n"
            
            prompt = f"""
{company_context}

=== 이전 대화 ===
{history_context if history_context else "첫 번째 질문입니다."}

=== 현재 질문 ===
"{state.question}"

=== 참고 데이터 ===
{combined_data}

매우 중요한 규칙:
1. 제공된 데이터에만 기반하여 답변하세요
2. 없는 직장 경험이나 프로젝트 지어내기 절대 금지
3. 자소서의 토스 맞춤 내용과 About Me의 개인 경험을 자연스럽게 조합
4. 개인적 동기/가치관 → 구체적 경험 사례 → 회사와의 연결점 순서로 구성
5. 150-250단어로 답변

면접관에게 하는 자연스러운 대화체로 답변하되, 진정성 있는 개인 경험과 회사 적합성을 균형있게 어필하세요.
"""

            response = await client.chat_completion_with_retry(
                messages=[
                    {"role": "system", "content": "당신은 채용 면접에서 개인적 경험과 동기를 효과적으로 설명하는 전문가입니다."},
                    {"role": "user", "content": prompt}
                ],
                model="gpt-4o",  # 정확도 최우선
                temperature=0.5,
                max_tokens=1500
            )
            
            answer = response.choices[0].message.content.strip()
            print(f"   🤖 답변 생성: {answer[:100]}...")
            
            return answer
            
        except Exception as e:
            print(f"   ❌ 답변 생성 오류: {str(e)}")
            return f"죄송합니다. '{state.question}' 질문에 대한 답변 생성 중 오류가 발생했습니다."
    
    def _generate_personal_links(self, question: str, about_me: Dict) -> Dict[str, str]:
        """개인 관련 링크 생성"""
        
        links = {}
        
        # 강점이나 경험 관련 질문이면 About Me 페이지 링크
        personal_keywords = ["강점", "경험", "가치관", "성장", "팀워크", "리더십", "활동"]
        if any(keyword in question for keyword in personal_keywords):
            links["👤 About Me - 개인 소개"] = "/about"
        
        # 프로젝트 관련 내용이 포함된 경우 프로젝트 링크
        if "프로젝트" in question or "개발" in question:
            links["📦 AI 챗봇 포트폴리오"] = "/ai-chatbot-portfolio"
            links["📦 데이트 코스 AI 추천 시스템"] = "/date-recommendation"
            links["📦 보드게임 RAG 챗봇"] = "/boardgame-chatbot"
        
        return links

async def personal_agent(state: ChatState) -> ChatState:
    """Personal Agent 실행 함수"""
    agent = PersonalAgent()
    return await agent.process(state)