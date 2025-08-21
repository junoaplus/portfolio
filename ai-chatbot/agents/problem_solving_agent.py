"""
Problem Solving Agent - 문제 해결 과정 전문

역할:
1. "구현 중 어려움과 문제 해결" 섹션 기반 답변
2. 문제 정의 → 해결 과정 → 성과 구체적 설명
3. 성능 최적화 수치와 기술적 깊이 강조

처리하는 질문 예시:
- "33초를 3.4초로 줄인 방법이 뭔가요?"
- "클래스 불균형은 어떻게 해결했나요?"
- "가장 어려웠던 기술적 챌린지는?"
- "성능 최적화 경험이 있나요?"
"""

import json
import os
import re
from typing import Dict, Any, List
from workflow.state import ChatState
from config.settings import Config
from utils.openai_client import get_openai_client
from utils.json_parser import parse_json_response

class ProblemSolvingAgent:
    """문제 해결 과정 전문 에이전트"""
    
    def __init__(self):
        # 프로젝트 기본 정보만 (키워드 매핑 없음)
        self.projects = ["ai-chatbot-portfolio", "date-recommendation", "boardgame-chatbot", "newspaper-churn", "nurse-salary"]
        self.project_titles = {
            "ai-chatbot-portfolio": "AI 챗봇 포트폴리오",
            "date-recommendation": "데이트 코스 AI 추천 시스템",
            "boardgame-chatbot": "보드게임 RAG 챗봇",
            "newspaper-churn": "신문 이탈 예측 ML", 
            "nurse-salary": "간호사 퇴사 예측 ML"
        }
    
    async def process(self, state: ChatState) -> ChatState:
        """문제 해결 관련 질문 처리"""
        
        print(f"\n🔧 Problem Solving Agent 시작")
        print(f"   질문: {state.question}")
        print(f"   회사: {state.company_context}")
        
        try:
            # 1단계: GPT로 문제해결 질문 분석
            analysis = await self._analyze_problem_question(state.question)
            print(f"   질문 분석: {analysis.get('question_type', 'N/A')}")
            
            # 2단계: 모든 프로젝트 MD 파일의 문제해결 섹션 읽기
            all_problem_sections = await self._read_all_problem_sections()
            
            # 3단계: GPT로 질문과 가장 관련있는 프로젝트 1-2개 선택
            selected_projects = await self._select_relevant_problems(state.question, all_problem_sections)
            print(f"   선택된 프로젝트: {selected_projects}")
            
            # 4단계: 선택된 프로젝트의 문제해결 내용만 추출
            relevant_sections = {p: all_problem_sections[p] for p in selected_projects if p in all_problem_sections}
            
            # 5단계: GPT로 문제해결 답변 생성
            answer = await self._generate_problem_answer(state, relevant_sections)
            
            # 6단계: 선택된 프로젝트 링크 생성
            project_links = self._generate_project_links(selected_projects)
            
            # 7단계: State 업데이트
            state.response = answer
            state.recommended_links = project_links
            state.response_quality_score = 0.9
            
            print(f"   ✅ Problem Solving Agent 완료")
            print(f"   📝 답변 길이: {len(answer)}자")
            print(f"   🔗 추천 링크: {len(project_links)}개")
            
        except Exception as e:
            print(f"   ❌ Problem Solving Agent 오류: {str(e)}")
            # 폴백 처리
            state.response = "죄송합니다. 문제 해결 사례를 가져오는 중 오류가 발생했습니다."
            state.recommended_links = {}
            state.response_quality_score = 0.3
        
        return state
    
    async def _analyze_problem_question(self, question: str) -> Dict[str, Any]:
        """GPT로 문제해결 질문 분석"""
        
        try:
            client = get_openai_client()
            
            prompt = f"""
다음은 문제 해결 관련 면접 질문입니다.

질문: "{question}"

이 질문의 핵심을 분석하세요:
- 어떤 종류의 문제 해결을 묻고 있는가?
- 기술적 깊이는 어느 정도를 원하는가?
- 구체적 사례를 원하는가?

JSON 응답:
{{
    "question_type": "문제해결 유형",
    "technical_depth": "원하는 기술적 깊이", 
    "specific_case": "구체적 사례 필요 여부"
}}
"""
            
            response = await client.chat_completion_with_retry(
                messages=[
                    {"role": "system", "content": "당신은 문제 해결 질문 분석 전문가입니다."},
                    {"role": "user", "content": prompt}
                ],
                model="gpt-4o-mini",
                temperature=0.3,
                max_tokens=400
            )
            
            result_text = response.choices[0].message.content.strip()
            print(f"   🤖 질문 분석 GPT 응답: {result_text}")
            
            result = parse_json_response(result_text)
            return result
            
        except Exception as e:
            print(f"   ❌ 질문 분석 오류: {str(e)}")
            return {"question_type": "일반 문제해결", "technical_depth": "중간", "specific_case": "필요"}
    
    async def _read_all_problem_sections(self) -> Dict[str, str]:
        """모든 프로젝트 MD 파일의 문제해결 섹션 읽기"""
        
        all_sections = {}
        
        for project in self.projects:
            try:
                file_path = os.path.join(Config.PROJECT_DATA_PATH, f"{project}.md")
                
                if os.path.exists(file_path):
                    with open(file_path, 'r', encoding='utf-8') as f:
                        content = f.read()
                    
                    # 정규식으로 "## 구현 중 어려움과 문제 해결" 섹션 추출
                    pattern = r'## 구현 중 어려움과 문제 해결(.*?)(?=\n## |\n# |$)'
                    match = re.search(pattern, content, re.DOTALL)
                    
                    if match:
                        all_sections[project] = match.group(1).strip()
                        print(f"   📄 {project} 문제해결 섹션 추출 성공 ({len(match.group(1))}자)")
                    else:
                        all_sections[project] = ""
                        print(f"   ⚠️ {project} 문제해결 섹션 없음")
                else:
                    print(f"   ❌ {project}.md 파일 없음")
                    all_sections[project] = ""
                    
            except Exception as e:
                print(f"   ❌ {project} 파일 읽기 실패: {str(e)}")
                all_sections[project] = ""
        
        return all_sections
    
    async def _select_relevant_problems(self, question: str, all_sections: Dict[str, str]) -> List[str]:
        """GPT로 질문과 가장 관련있는 프로젝트 1-2개 선택"""
        
        try:
            client = get_openai_client()
            
            # 모든 프로젝트의 문제해결 내용을 GPT에게 전체 제공
            sections_content = ""
            for project, content in all_sections.items():
                if content:
                    # 전체 내용 제공 (품질 높은 답변을 위해)
                    sections_content += f"\n=== {project} ===\n{content}\n"
            
            prompt = f"""
면접 질문: "{question}"

4개 프로젝트의 문제 해결 사례:
{sections_content}

이 질문에 답변하기 위해 가장 적합한 프로젝트를 1-2개 선택하세요.
질문과 가장 유사한 문제 해결 경험을 가진 프로젝트를 선택하세요.

JSON 응답:
{{
    "selected_projects": ["프로젝트명1", "프로젝트명2"],
    "reasoning": "선택 이유"
}}
"""
            
            response = await client.chat_completion_with_retry(
                messages=[
                    {"role": "system", "content": "당신은 문제 해결 사례 매칭 전문가입니다."},
                    {"role": "user", "content": prompt}
                ],
                model="gpt-4o-mini",
                temperature=0.3,
                max_tokens=500
            )
            
            result_text = response.choices[0].message.content.strip()
            print(f"   🤖 프로젝트 선택 GPT 응답: {result_text}")
            
            result = parse_json_response(result_text)
            selected = result.get("selected_projects", [])
            
            # 유효한 프로젝트만 필터링
            valid_projects = [p for p in selected if p in self.projects]
            
            if not valid_projects:
                # 선택 실패시 성능 최적화가 돋보이는 date-recommendation 선택
                valid_projects = ["date-recommendation"]
                print("   ⚠️ 프로젝트 선택 실패, date-recommendation으로 폴백")
            
            return valid_projects
            
        except Exception as e:
            print(f"   ❌ 프로젝트 선택 오류: {str(e)}")
            return ["date-recommendation"]
    
    async def _generate_problem_answer(self, state: ChatState, relevant_sections: Dict[str, str]) -> str:
        """GPT로 문제해결 답변 생성"""
        
        try:
            client = get_openai_client()
            company_context = Config.get_company_context(state.company_context)
            
            # 선택된 프로젝트의 문제해결 섹션 전체 제공
            problem_content = ""
            for project, content in relevant_sections.items():
                if content:
                    problem_content += f"\n=== {project} 프로젝트 문제해결 ===\n{content}\n"
            
            prompt = f"""
{company_context}

면접 질문: "{state.question}"

관련 문제 해결 사례:
{problem_content}

🚨 매우 중요한 규칙:
1. 제공된 프로젝트 데이터에만 기반하여 답변하세요
2. 없는 경험이나 프로젝트를 절대 지어내지 마세요
3. 제공된 프로젝트 내용에 없는 기술이나 구현 방법 창작 금지

답변 요구사항:
1. 구체적 문제 상황 먼저 설명 (실제 프로젝트 기반만)
2. 문제 원인 분석과 접근 방법
3. 실제 해결 방법과 구현 과정 (HOW 중심)
4. 회사 요구사항과 문제해결 능력 연결
5. 150-200단어

문제 정의 → 해결 과정 → 성과 순서로 면접관에게 하는 자연스러운 대화체로 답변하세요.
제공된 실제 데이터만 사용하고, 창작하지 마세요.
"""
            
            response = await client.chat_completion_with_retry(
                messages=[
                    {"role": "system", "content": "당신은 제공된 데이터에만 기반하여 문제 해결 과정을 정확하게 설명하는 전문가입니다."},
                    {"role": "user", "content": prompt}
                ],
                model="gpt-4o-mini",
                temperature=0.3,  # 🔥 0.7 → 0.3으로 낮춤 (거짓말 방지)
                max_tokens=1500
            )
            
            answer = response.choices[0].message.content.strip()
            print(f"   🤖 답변 생성: {answer[:100]}...")
            
            return answer
            
        except Exception as e:
            print(f"   ❌ 답변 생성 오류: {str(e)}")
            return f"죄송합니다. '{state.question}' 질문에 대한 문제 해결 답변 생성 중 오류가 발생했습니다."
    
    def _generate_project_links(self, selected_projects: List[str]) -> Dict[str, str]:
        """선택된 프로젝트들의 링크 생성"""
        
        links = {}
        
        for project in selected_projects:
            if project in self.project_titles:
                title = self.project_titles[project]
                links[f"📦 {title}"] = f"/{project}"
                print(f"   🔗 링크 생성: {title} -> /{project}")
        
        return links

async def problem_solving_agent(state: ChatState) -> ChatState:
    """Problem Solving Agent 실행 함수"""
    agent = ProblemSolvingAgent()
    return await agent.process(state)