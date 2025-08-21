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
import os
from typing import Dict, Any, List
from workflow.state import ChatState
from config.settings import Config
from utils.openai_client import get_openai_client
from utils.json_parser import parse_json_response

class PersonalAgent:
    """개인 관련 질문 전문 에이전트 (motivation + experience 통합)"""
    
    def __init__(self):
        self.personal_data_path = Config.PERSONAL_DATA_PATH
        
    async def process(self, state: ChatState) -> ChatState:
        """개인 관련 질문 처리 (자소서 + About Me 데이터 통합)"""
        
        print(f"\n👤 Personal Agent 시작")
        print(f"   질문: {state.question}")
        print(f"   회사: {state.company_context}")
        
        try:
            # 1단계: GPT로 필요한 섹션 선택 (메타데이터만 제공)
            selected_sections = await self._select_personal_sections(state)
            print(f"   선택된 섹션: {selected_sections}")
            
            # 2단계: 자소서 데이터 조회
            cover_letter_data = Config.get_cover_letter_data(state.company_context)
            print(f"   📄 자소서 데이터 로드: {len(cover_letter_data)}자")
            
            # 3단계: About Me 파일 읽기
            about_me_data = await self._read_about_me_file()
            print(f"   📄 About Me 파일 읽기: {len(about_me_data)}자")
            
            # 4단계: 선택된 섹션들의 내용 추출
            combined_data = self._extract_selected_content(cover_letter_data, about_me_data, selected_sections)
            print(f"   📄 추출된 데이터: {len(combined_data)}자")
            
            # 5단계: GPT로 개인 관련 답변 생성
            answer = await self._generate_personal_answer(state, combined_data)
            
            # 6단계: 관련 링크 생성
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
    
    async def _read_about_me_file(self) -> str:
        """About Me MD 파일 읽기"""
        
        try:
            about_me_path = os.path.join(self.personal_data_path, "about-me.md")
            
            if os.path.exists(about_me_path):
                with open(about_me_path, 'r', encoding='utf-8') as f:
                    content = f.read()
                    return content
            else:
                print(f"   ❌ about-me.md 파일 없음: {about_me_path}")
                return ""
                
        except Exception as e:
            print(f"   ❌ about-me.md 읽기 실패: {str(e)}")
            return ""
    
    def _get_personal_sections_metadata(self, company_context: str) -> str:
        """자소서 + About Me 섹션들의 제목과 간단한 설명만 반환"""
        
        metadata = ""
        
        # 자소서 섹션들 (회사별로 다름)
        if company_context == "toss":
            metadata += """
=== 자소서 섹션들 ===
- 지원동기: AI 기술 열정과 토스 분석, E-commerce 경험
- 핵심기술: LLM/RAG, ML 모델링, 백엔드, 데이터 엔지니어링, 프론트엔드 5가지
- 토스목표: 1-4년차 단계별 성장 계획
- 차별화포인트: LLM/RAG 강점, E-commerce 경험, T자형 개발자, 체계적 접근
"""
        elif company_context == "game_n":
            metadata += """
=== 자소서 섹션들 ===
- 지원동기: 게임과 AI의 융합에 대한 철학, Game N 가치관 매칭
- 핵심기술: 개인화 추천, 실시간 AI, 사용자 행동 분석, 크로스 플랫폼, LLM/RAG
- Game N 목표: 1-3년차 게임 AI 발전 계획
- 차별화포인트: 게임과 AI 이해, 사용자 중심 설계, 창의적 문제 해결
"""
        elif company_context == "ably":
            metadata += """
=== 자소서 섹션들 ===
- 지원동기: 패션 테크와 생성형 AI 관심, One Team 문화 공감
- 핵심기술: 생성형 AI 백엔드, Computer Vision, 클라우드 MLOps, 대용량 데이터, LLM/RAG
- 에이블리 목표: 1-3년차 Virtual Try-On 및 AI 플랫폼 구축 계획
- 차별화포인트: 생성형 AI 실제 적용, 패션-AI 융합 이해, 빠른 기술 적용
"""
        elif company_context == "nuua":
            metadata += """
=== 자소서 섹션들 ===
- 지원동기: 당연해야 할 것들에 도전 철학 공감, AI 그랜드 챌린지 인상
- 핵심기술: AI 에이전트 설계, 비정형 데이터 구조화, 업무 자동화, 대규모 처리, 문제 해결
- 누아 목표: 1-4년차 여행 산업 자동화 혁신 계획
- 차별화포인트: AI 에이전트 구축 경험, 비정형 데이터 전문성, 끈기와 성실함, 실무 문제 이해
"""
        elif company_context == "lbox":
            metadata += """
=== 자소서 섹션들 ===
- 지원동기: 법을 사람들에게 가깝게 미션 공감, 법률 AI 서비스 의미
- 핵심기술: LLM/RAG 시스템, 검색 모델 최적화, LLM 파인튜닝, ML 파이프라인, 시스템 아키텍처
- 엘박스 목표: 1-3년차 법률 AI 플랫폼 고도화 계획
- 차별화포인트: 전문 도메인 RAG 경험, 전체 ML 파이프라인 이해, 사용자 중심적 사고
"""
        elif company_context == "estsoft":
            metadata += """
=== 자소서 섹션들 ===
- 지원동기: 실용주의 인공지능 철학 공감, 알툴즈 알약 브랜드 가치 인식
- 핵심기술: LLM 모델 개발, 자연어 처리, 프로토타입 개발, 클라우드 환경, 최적화 경험
- 이스트소프트 목표: 1-3년차 AI 서비스 핵심 개발자 성장 계획
- 차별화포인트: 실제 LLM 서비스 구축, 실용주의적 접근, 빠른 프로토타입 개발
"""
        else:
            metadata += """
=== 자소서 섹션들 ===
- 지원동기: AI 기술에 대한 열정과 회사 분석
- 핵심기술: LLM/RAG, ML 모델링, 백엔드, 데이터 엔지니어링, 프론트엔드
- 차별화포인트: 기술적 강점과 독특한 경험들
"""
        
        metadata += """
=== About Me 섹션들 ===
- 핵심 가치관 & 개발 철학: 왜 AI 엔지니어가 되었나, 어떤 개발자 되고 싶나, 일할 때 중요한 것
- 핵심 강점: 문제 해결 능력, 기술 적응력, 팀 커뮤니케이션, 긍정적 마인드
- 프로젝트 경험과 배운 점: 데이트 코스 프로젝트의 어려움/성취/실패 경험
- 팀워크 & 협업: 기술 리드, 병합 담당, 갈등 중재자 역할 경험
- 문제 해결 프로세스: 4단계 체계적 문제 해결 방법론
- 업무 스타일: 하루 시작/진행/마무리 패턴
- 대외활동 상세: SK Networks AI Camp, 부학생회장, 해커톤 운영진, E-commerce, 과대표
- 연락처 정보: GitHub, Email, Phone
- 학력 및 배경: 한국항공대 소프트웨어학과, 하노이한국국제학교
- 성격의 장단점: 호기심/끈기/긍정성 vs 성급함/감정적 반응과 개선 과정
"""
        
        return metadata

    async def _select_personal_sections(self, state: ChatState) -> Dict[str, List[str]]:
        """GPT가 필요한 섹션들의 제목만 선택"""
        
        try:
            client = get_openai_client()
            company_context = Config.get_company_context(state.company_context)
            
            # 섹션 메타데이터 가져오기
            sections_metadata = self._get_personal_sections_metadata(state.company_context)
            
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

=== 사용 가능한 섹션들 ===
{sections_metadata}

질문에 답변하기 위해 필요한 섹션들의 정확한 제목만 선택해주세요.

: 전이 제목 임

JSON으로만 응답하세요:
{{
    "selected_cover_letter_sections": ["세션제목1", "세션제목2"],
    "selected_about_me_sections": ["세션제목1", "세션제목2", "세션제목3"],
    "reasoning": "선택 이유"
}}

갯수에 맞도록 프로젝트 명을 써서 보내주면 됨
"""
            
            response = await client.chat_completion_with_retry(
                messages=[
                    {"role": "system", "content": "당신은 개인 데이터 섹션 선택 전문가입니다. 정확한 섹션 제목만 선택하세요."},
                    {"role": "user", "content": prompt}
                ],
                model="gpt-4o-mini",
                temperature=0.3,
                max_tokens=500
            )
            
            result_text = response.choices[0].message.content.strip()
            print(f"   🤖 섹션 선택 GPT 응답: {result_text}")
            
            # JSON 파싱
            if result_text.startswith("```json"):
                result_text = result_text[7:]
            if result_text.startswith("```"):
                result_text = result_text[3:]
            if result_text.endswith("```"):
                result_text = result_text[:-3]
            result_text = result_text.strip()
            
            selection = parse_json_response(result_text)
            
            return selection
            
        except Exception as e:
            print(f"   ❌ 섹션 선택 오류: {str(e)}")
            # 폴백: 모든 섹션 선택
            return {
                "selected_cover_letter_sections": ["지원동기", "핵심기술", "차별화포인트"],
                "selected_about_me_sections": ["핵심 가치관 & 개발 철학", "핵심 강점"]
            }
    
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
3. 자소서의 회사 맞춤 내용과 About Me의 개인 경험을 자연스럽게 조합
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
    
    def _extract_selected_content(self, cover_letter: str, about_me: str, selected_sections: Dict) -> str:
        """선택된 섹션들의 전체 내용 추출"""
        
        combined_data = ""
        
        # 자소서 섹션 추출
        if selected_sections.get('selected_cover_letter_sections'):
            combined_data += "=== 자소서 관련 내용 ===\n"
            for section_title in selected_sections['selected_cover_letter_sections']:
                section_content = self._extract_cover_letter_section(cover_letter, section_title)
                if section_content:
                    combined_data += f"\n--- {section_title} ---\n{section_content}\n"
            combined_data += "\n"
        
        # About Me 섹션 추출
        if selected_sections.get('selected_about_me_sections'):
            combined_data += "=== About Me 관련 내용 ===\n"
            for section_title in selected_sections['selected_about_me_sections']:
                section_content = self._extract_about_me_section(about_me, section_title)
                if section_content:
                    combined_data += f"\n--- {section_title} ---\n{section_content}\n"
        
        return combined_data

    def _extract_cover_letter_section(self, cover_letter: str, section_title: str) -> str:
        """자소서에서 특정 섹션 추출"""
        
        import re
        
        if section_title == "지원동기":
            pattern = r"💡 지원동기:(.*?)(?=🛠️|$)"
        elif section_title == "핵심기술":
            pattern = r"🛠️ 핵심기술:(.*?)(?=🎯|$)"
        elif section_title == "토스목표":
            pattern = r"🎯 토스목표:(.*?)(?=💪|$)"
        elif section_title == "Game N 목표":
            pattern = r"🎯 Game N 목표:(.*?)(?=💪|$)"
        elif section_title == "에이블리 목표":
            pattern = r"🎯 에이블리 목표:(.*?)(?=💪|$)"
        elif section_title == "누아 목표":
            pattern = r"🎯 누아 목표:(.*?)(?=💪|$)"
        elif section_title == "엘박스 목표":
            pattern = r"🎯 엘박스 목표:(.*?)(?=💪|$)"
        elif section_title == "이스트소프트 목표":
            pattern = r"🎯 이스트소프트 목표:(.*?)(?=💪|$)"
        elif section_title == "차별화포인트":
            pattern = r"💪 차별화포인트:(.*?)$"
        else:
            return ""
        
        match = re.search(pattern, cover_letter, re.DOTALL)
        if match:
            return match.group(1).strip()
        return ""

    def _extract_about_me_section(self, about_me: str, section_title: str) -> str:
        """About Me에서 특정 섹션 추출"""
        
        import re
        
        # ## 섹션 제목으로 시작해서 다음 ## 까지 추출
        escaped_title = re.escape(section_title)
        pattern = rf"## {escaped_title}(.*?)(?=## |$)"
        
        match = re.search(pattern, about_me, re.DOTALL)
        if match:
            return match.group(1).strip()
        return ""
    
    def _generate_personal_links(self, question: str, about_me: str) -> Dict[str, str]:
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