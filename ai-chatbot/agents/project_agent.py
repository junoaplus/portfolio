"""
Project Agent - 프로젝트 상세 설명 전문

역할:
1. 4개 프로젝트 중 질문과 가장 관련있는 프로젝트 선택
2. MD 파일 기반 구체적 문제 해결 과정 설명
3. 회사 요구사항과 매칭하여 답변 생성

프로젝트 종류:
- ai-chatbot-portfolio: LangGraph 멀티 에이전트 (인터랙티브 포트폴리오)
- date-recommendation: LLM+추천시스템 (대화형 AI 챗봇)
- boardgame-chatbot: RAG+파인튜닝 (실시간 대화형 챗봇)
- newspaper-churn: 머신러닝 이탈예측 (Streamlit 대시보드)
- nurse-salary: 머신러닝 퇴사예측 (분석 리포트)
"""

import json
import os
from typing import Dict, Any, List
from workflow.state import ChatState
from config.settings import Config
from utils.openai_client import get_openai_client
from utils.json_parser import parse_json_response

class ProjectAgent:
    """프로젝트 상세 설명 전문 에이전트"""
    
    def __init__(self):
        self.project_metadata = {
            "date-recommendation": {
                "category": "LLM+추천시스템",
                "type": "풀스택 서비스",
                "tech_domain": ["LLM", "RAG", "추천시스템", "벡터DB", "빅데이터"],
                "interface": "대화형 AI 챗봇",
                "key_feature": "151개 카테고리 → 거리 → 벡터 3단계 필터링",
                "performance": "33초→3.4초 (90% 개선)",
                "scale": "89,321개 장소 DB",
                "title": "데이트 코스 AI 추천 시스템",
                "url": "/date-recommendation"
            },
            "boardgame-chatbot": {
                "category": "RAG+파인튜닝",
                "type": "AI 챗봇 서비스",
                "tech_domain": ["RAG", "파인튜닝", "벡터DB", "NLP"],
                "interface": "실시간 대화형 챗봇",
                "key_feature": "217개 게임별 독립 FAISS DB + EXAONE 파인튜닝",
                "performance": "QA 자동수집 시스템",
                "scale": "217개 게임 커버",
                "title": "보드게임 RAG 챗봇",
                "url": "/boardgame-chatbot"
            },
            "newspaper-churn": {
                "category": "머신러닝",
                "type": "예측 모델",
                "tech_domain": ["ML", "분류", "불균형처리"],
                "interface": "Streamlit 대시보드",
                "key_feature": "SMOTE로 4.7:1→1:1 클래스 균형",
                "performance": "87% F1-Score, 0.94 ROC AUC",
                "scale": "15,855명 데이터",
                "title": "신문 이탈 예측 ML",
                "url": "/newspaper-churn"
            },
            "nurse-salary": {
                "category": "머신러닝",
                "type": "예측 모델",
                "tech_domain": ["ML", "회귀", "도메인지식"],
                "interface": "분석 리포트",
                "key_feature": "55세 이상 은퇴자 분리 도메인 지식",
                "performance": "93% 정확도, 0.76 F1-Score",
                "scale": "794명 간호사 데이터",
                "title": "간호사 퇴사 예측 ML",
                "url": "/nurse-salary"
            },
            "ai-chatbot-portfolio": {
                "category": "LangGraph 멀티 에이전트",
                "type": "풀스택 서비스",
                "tech_domain": ["LangGraph", "Agent", "FastAPI", "Next.js"],
                "interface": "인터랙티브 포트폴리오",
                "key_feature": "질문 유형별 전문 에이전트 조건부 라우팅",
                "performance": "실시간 대화형 AI 경험",
                "scale": "멀티 에이전트 협업 시스템",
                "title": "AI 챗봇 포트폴리오",
                "url": "/ai-chatbot-portfolio"
            }
        }
    
    async def process(self, state: ChatState) -> ChatState:
        """프로젝트 관련 질문 처리"""
        
        print(f"\n📦 Project Agent 시작")
        print(f"   질문: {state.question}")
        print(f"   회사: {state.company_context}")
        
        try:
            # 1. GPT로 관련 프로젝트 선택
            selected_projects = await self._select_projects(state)
            print(f"   선택된 프로젝트: {selected_projects}")
            
            # 2. 선택된 프로젝트 MD 파일 읽기
            md_contents = await self._read_project_files(selected_projects)
            
            # 3. GPT로 답변 생성
            answer = await self._generate_answer(state, selected_projects, md_contents)
            
            # 4. 답변에서 실제 사용된 프로젝트 추출 후 링크 생성
            clean_answer, links = self._generate_links_from_answer(answer)
            
            # 5. State 업데이트 (정제된 답변 사용)
            state.response = clean_answer
            state.recommended_links = links
            state.response_quality_score = 0.9
            
            print(f"   ✅ Project Agent 완료")
            print(f"   📝 답변 길이: {len(answer)}자")
            print(f"   🔗 추천 링크: {len(links)}개")
            
        except Exception as e:
            print(f"   ❌ Project Agent 오류: {str(e)}")
            # 폴백 처리
            state.response = "죄송합니다. 프로젝트 정보를 가져오는 중 오류가 발생했습니다."
            state.recommended_links = {}
            state.response_quality_score = 0.3
        
        return state
    
    async def _select_projects(self, state: ChatState) -> List[str]:
        """GPT로 질문과 관련있는 프로젝트 선택 (대화 맥락 고려)"""
        
        try:
            client = get_openai_client()
            company_context = Config.get_company_context(state.company_context)
            
            # 4개 프로젝트 메타데이터 포맷팅
            projects_info = self._format_projects_metadata()
            
            # 대화 히스토리 포맷팅 (최근 4개)
            history_text = ""
            if state.conversation_history:
                recent_history = state.conversation_history[-4:]
                for msg in recent_history:
                    role = "질문" if msg['role'] == 'user' else "답변"
                    history_text += f"{role}: {msg['content'][:200]}...\n\n"
            
            prompt = f"""
{company_context}

=== 이전 대화 맥락 ===
{history_text if history_text else "첫 번째 질문입니다."}

=== 현재 질문 ===
"{state.question}"

황준호의 4개 프로젝트 정보:
{projects_info}

매우 중요한 규칙:
1. 질문에서 특정 프로젝트를 직접 언급했다면 반드시 그 프로젝트만을 선택하세요.
2. 이전 대화에서 특정 프로젝트를 논의 중이었고, 현재 질문이 "그 프로젝트에서", "거기서", "그럼" 등으로 이어진다면 같은 프로젝트만을 선택하세요.
3. 질문이 특정 기술(파인튜닝, SMOTE 등)을 언급하고 이전에 프로젝트를 논의했다면, 그 프로젝트의 맥락에서 답변하세요.

프로젝트명 매핑:
- "포트폴리오" 언급 → ai-chatbot-portfolio
- "보드게임" 언급 → boardgame-chatbot
- "데이트" 언급 → date-recommendation  
- "신문" 또는 "이탈" 언급 → newspaper-churn
- "간호사" 또는 "퇴사" 언급 → nurse-salary

이 질문에 답변하기 위해 가장 적합한 프로젝트를 의도의 개수에 맞도록(1~5개 사이) 선택하세요.

JSON 형식으로만 응답:
{{
    "selected_projects": ["프로젝트명1", "프로젝트명2", "프로젝트명3", "프로젝트명4"],
    "reasoning": "선택한 이유를 구체적으로 설명"
}}
갯수에 맞도록 프로젝트 명을 써서 보내주면 됨
"""

            response = await client.chat_completion_with_retry(
                messages=[
                    {"role": "system", "content": "당신은 채용 면접에서 지원자의 프로젝트 경험을 분석하는 전문가입니다."},
                    {"role": "user", "content": prompt}
                ],
                model="gpt-4o-mini",
                temperature=0.3,
                max_tokens=500
            )
            
            result_text = response.choices[0].message.content.strip()
            print(f"   🤖 프로젝트 선택 GPT 응답: {result_text}")
            
            # JSON 파싱
            result = parse_json_response(result_text)
            selected = result.get("selected_projects", [])
            
            # 유효한 프로젝트만 필터링
            valid_projects = [p for p in selected if p in self.project_metadata.keys()]
            
            if not valid_projects:
                # 선택 실패시 가장 완성도 높은 date-recommendation 선택
                valid_projects = ["date-recommendation"]
                print("   ⚠️ 프로젝트 선택 실패, date-recommendation으로 폴백")
            
            return valid_projects
            
        except Exception as e:
            print(f"   ❌ 프로젝트 선택 오류: {str(e)}")
            # 오류시 기본 프로젝트 선택
            return ["date-recommendation"]
    
    def _format_projects_metadata(self) -> str:
        """4개 프로젝트 메타데이터를 GPT가 이해하기 쉽게 포맷팅"""
        
        formatted = ""
        for project_key, metadata in self.project_metadata.items():
            formatted += f"""
=== {project_key} ===
분류: {metadata['category']}
유형: {metadata['type']} ({metadata['interface']})
핵심 기술: {', '.join(metadata['tech_domain'])}
핵심 특징: {metadata['key_feature']}
성과: {metadata['performance']}
규모: {metadata['scale']}
"""
        
        return formatted
    
    async def _read_project_files(self, selected_projects: List[str]) -> Dict[str, str]:
        """선택된 프로젝트들의 MD 파일 읽기"""
        
        md_contents = {}
        
        for project in selected_projects:
            try:
                file_path = os.path.join(Config.PROJECT_DATA_PATH, f"{project}.md")
                
                if os.path.exists(file_path):
                    with open(file_path, 'r', encoding='utf-8') as f:
                        content = f.read()
                        md_contents[project] = content
                        print(f"   📄 {project}.md 읽기 성공 ({len(content)}자)")
                else:
                    print(f"   ❌ {project}.md 파일 없음: {file_path}")
                    md_contents[project] = ""
                    
            except Exception as e:
                print(f"   ❌ {project}.md 읽기 실패: {str(e)}")
                md_contents[project] = ""
        
        return md_contents
    
    async def _generate_answer(self, state: ChatState, selected_projects: List[str], md_contents: Dict[str, str]) -> str:
        """GPT로 프로젝트 기반 답변 생성 (대화 맥락 고려)"""
        
        try:
            client = get_openai_client()
            company_context = Config.get_company_context(state.company_context)
            
            # MD 파일 내용 포맷팅
            projects_content = ""
            for project, content in md_contents.items():
                if content:
                    projects_content += f"\n=== {project} 프로젝트 ===\n{content}\n"
            
            # 대화 히스토리 포맷팅 (최근 2개)
            history_context = ""
            if state.conversation_history:
                recent = state.conversation_history[-2:]
                for msg in recent:
                    role = "질문" if msg['role'] == 'user' else "답변"
                    history_context += f"{role}: {msg['content'][:300]}...\n\n"
            
            prompt = f"""
{company_context}

=== 이전 대화 ===
{history_context if history_context else "첫 번째 질문입니다."}

=== 현재 질문 ===
"{state.question}"

황준호의 선택된 프로젝트 전체 내용:
{projects_content}

중요: 이전 대화의 맥락을 이어서 답변하세요. 같은 프로젝트를 계속 논의 중이라면 일관성 있게 답변하세요.

답변 생성 요구사항:
1. 프로젝트 유형과 특성 명시 (LLM/추천/ML, 대화형/실시간 등)
2. "## 구현 중 어려움과 문제 해결" 섹션을 최우선으로 활용
3. 문제 정의 → 원인 분석 → 해결 방법 → 결과 순서로 설명
4. 구체적 구현 방법 (HOW) 강조 (벡터 필터링, 인메모리 처리, SMOTE 등)
5. 회사 요구사항과 연결하여 어필
6. 150-200단어
7. 답변 마지막에 반드시 "관련 프로젝트: [프로젝트명]" 형식으로 추가하세요

특히 데이트 추천 프로젝트의 경우 "151개 카테고리 필터링 → 거리 필터링 → 벡터 검색" 3단계 전략을 강조하세요.

면접관에게 하는 자연스러운 대화체로 답변하되, 기술적 깊이와 문제 해결 능력을 중점적으로 어필하세요.

중요: 답변 마지막 줄에 정확히 다음 형식으로 추가하세요:
관련 프로젝트: [date-recommendation]
또는 
관련 프로젝트: [date-recommendation, boardgame-chatbot]

대괄호와 프로젝트명을 정확히 포함해야 합니다.
"""

            response = await client.chat_completion_with_retry(
                messages=[
                    {"role": "system", "content": "당신은 채용 면접에서 지원자의 프로젝트 경험을 효과적으로 설명하는 전문가입니다."},
                    {"role": "user", "content": prompt}
                ],
                model="gpt-4o-mini",
                temperature=0.7,
                max_tokens=1500
            )
            
            answer = response.choices[0].message.content.strip()
            print(f"   🤖 답변 생성: {answer[:100]}...")
            
            return answer
            
        except Exception as e:
            print(f"   ❌ 답변 생성 오류: {str(e)}")
            return f"죄송합니다. '{state.question}' 질문에 대한 답변 생성 중 오류가 발생했습니다."
    
    def _generate_links_from_answer(self, answer: str) -> tuple[str, Dict[str, str]]:
        """답변에서 '관련 프로젝트: [...]' 추출해서 해당 프로젝트만 링크 생성"""
        
        import re
        
        # "관련 프로젝트: [프로젝트명1, 프로젝트명2]" 패턴 찾기
        pattern = r"관련 프로젝트: \[([^\]]+)\]"
        match = re.search(pattern, answer)
        
        links = {}
        clean_answer = answer
        
        if match:
            # 프로젝트명들 추출
            projects_text = match.group(1)
            used_projects = [p.strip() for p in projects_text.split(',')]
            
            # 해당 부분 답변에서 제거 (사용자에게는 보이지 않게)
            clean_answer = re.sub(pattern, '', answer).strip()
            
            # ⭐ 이모지도 제거 (GPT가 잘못 포함시킬 수 있음)
            clean_answer = clean_answer.replace('⭐', '').strip()
            
            # 추출된 프로젝트들만 링크 생성
            for project in used_projects:
                if project in self.project_metadata:
                    metadata = self.project_metadata[project]
                    links[metadata["title"]] = metadata["url"]
                    print(f"   🔗 링크 생성: {project} -> {metadata['title']}")
            
            print(f"   📊 답변에서 추출된 프로젝트: {used_projects}")
            
        else:
            # 패턴 매칭 실패시 폴백 - 빈 링크
            # ⭐ 이모지는 제거
            clean_answer = clean_answer.replace('⭐', '').strip()
            print("   ⚠️ '관련 프로젝트: [...]' 패턴을 찾을 수 없음")
        
        return clean_answer, links

    def _generate_links(self, selected_projects: List[str]) -> Dict[str, str]:
        """기존 메서드 (호환성 유지)"""
        
        links = {}
        
        for project in selected_projects:
            if project in self.project_metadata:
                metadata = self.project_metadata[project]
                links[metadata["title"]] = metadata["url"]
        
        return links

async def project_agent(state: ChatState) -> ChatState:
    """Project Agent 실행 함수"""
    agent = ProjectAgent()
    return await agent.process(state)