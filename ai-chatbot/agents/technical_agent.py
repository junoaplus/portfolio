"""
Technical Agent - 기술 스택 전문 답변

역할:
1. 기술 스택, 아키텍처, 구현 방식 등 기술적 질문에 대한 전문 답변
2. 마크다운 파일을 활용한 기술별 상세 정보 조회
3. 해당 기술을 사용한 프로젝트와 연결하여 실무 경험 어필

기술 종류:
- LLM: LangChain, RAG, 벡터DB, 파인튜닝 등
- ML: 머신러닝 알고리즘, 데이터사이언스 등  
- Backend: FastAPI, Django, PostgreSQL 등
- Infra: Docker, AWS, 배포 관련
- Frontend: React, Next.js, TypeScript 등
"""

import json
import os
from pathlib import Path
from typing import Dict, Any, List
from workflow.state import ChatState
from config.settings import Config
from utils.openai_client import get_openai_client
from utils.json_parser import parse_json_response

class TechnicalAgent:
    """기술 스택 전문 에이전트"""
    
    def __init__(self):
        self.categories = ['llm', 'ml', 'backend', 'infra', 'frontend']
        self.skills_data_path = Path(__file__).parent.parent / "data" / "skills"
    
    async def process(self, state: ChatState) -> ChatState:
        """기술 관련 질문 처리"""
        
        print(f"\n🔧 Technical Agent 시작")
        print(f"   질문: {state.question}")
        print(f"   회사: {state.company_context}")
        
        try:
            # 1단계: GPT로 기술 질문 분석 및 카테고리 분류
            company_context = Config.get_company_context(state.company_context)
            category = await self._analyze_tech_category(state.question, company_context)
            print(f"   분류된 카테고리: {category}")
            
            # 2단계: 해당 카테고리의 기술 목록 조회
            available_skills = await self._get_skills_by_category(category)
            print(f"   사용 가능한 기술: {len(available_skills)}개")
            
            # 3단계: GPT로 관련 기술 1-2개 선택
            selected_skills = await self._select_relevant_skills(state.question, available_skills, company_context)
            print(f"   선택된 기술: {selected_skills}")
            
            # 4단계: 선택된 기술들의 상세 정보 조회
            skill_details = await self._get_skill_details(selected_skills)
            
            # 5단계: GPT로 기술적 답변 생성
            answer = await self._generate_tech_answer(state, skill_details)
            
            # 6단계: 기술 페이지 링크 + 프로젝트 링크 생성
            links = self._generate_tech_links(selected_skills, skill_details)
            
            # 7단계: State 업데이트
            state.response = answer
            state.recommended_links = links
            state.response_quality_score = 0.9
            
            print(f"   ✅ Technical Agent 완료")
            print(f"   📝 답변 길이: {len(answer)}자")
            print(f"   🔗 추천 링크: {len(links)}개")
            
        except Exception as e:
            print(f"   ❌ Technical Agent 오류: {str(e)}")
            # 폴백 처리
            state.response = "죄송합니다. 기술 정보를 가져오는 중 오류가 발생했습니다."
            state.recommended_links = {}
            state.response_quality_score = 0.3
        
        return state
    
    async def _analyze_tech_category(self, question: str, company_context: str) -> str:
        """GPT로 기술 질문을 분석해서 카테고리 분류"""
        
        try:
            client = get_openai_client()
            
            prompt = f"""
질문: "{question}"

이 질문이 어떤 기술 분야에 대해 묻는지 판단하세요.

- llm: 언어모델, 자연어처리, 벡터DB(Qdrant, Faiss), RAG, 임베딩, LangChain, LangGraph 관련
- ml: 머신러닝 알고리즘(XGBoost, LightGBM), 모델 성능, 데이터 분석, 통계 관련  
- backend: 웹서버(FastAPI, Django), API, 관계형DB(PostgreSQL) 관련
- infra: 배포, 클라우드, Docker, AWS, 시스템 운영 관련
- frontend: 웹 UI, React, Next.js, 사용자 인터페이스 관련

중요: 벡터 데이터베이스(Qdrant, Faiss, Pinecone 등)는 반드시 llm 카테고리입니다.

질문의 핵심 주제를 파악하여 올바른 카테고리를 선택하세요.

JSON:
{{
    "category": "카테고리명",
    "reasoning": "판단 근거"
}}
"""
            
            response = await client.chat_completion_with_retry(
                messages=[
                    {"role": "system", "content": "당신은 기술 분류 전문가입니다."},
                    {"role": "user", "content": prompt}
                ],
                model="gpt-4o-mini",
                temperature=0.3,
                max_tokens=300
            )
            
            result_text = response.choices[0].message.content.strip()
            print(f"   🤖 카테고리 분석 GPT 응답: {result_text}")
            
            # 마크다운 코드블록 제거
            if result_text.startswith("```json"):
                result_text = result_text[7:]  # ```json 제거
            if result_text.endswith("```"):
                result_text = result_text[:-3]  # ``` 제거
            result_text = result_text.strip()
            
            result = parse_json_response(result_text)
            category = result.get("category", "backend")
            
            # 유효한 카테고리인지 확인
            if category not in self.categories:
                category = "backend"
                print("   ⚠️ 잘못된 카테고리, backend로 폴백")
            
            return category
            
        except Exception as e:
            print(f"   ❌ 카테고리 분석 오류: {str(e)}")
            return "backend"  # 기본값
    
    def _load_categories_config(self) -> Dict[str, List[str]]:
        """categories.json 파일 로드"""
        try:
            categories_file = self.skills_data_path / "categories.json"
            with open(categories_file, 'r', encoding='utf-8') as f:
                return json.load(f)
        except Exception as e:
            print(f"   ❌ categories.json 로드 오류: {str(e)}")
            return {}
    
    async def _get_skills_by_category(self, category: str) -> List[str]:
        """카테고리별 기술 목록 조회"""
        
        try:
            categories = self._load_categories_config()
            skills = categories.get(category, [])
            print(f"   📋 {category} 카테고리 기술: {skills}")
            return skills
        except Exception as e:
            print(f"   ❌ 카테고리 조회 오류: {str(e)}")
            return []
    
    async def _select_relevant_skills(self, question: str, available_skills: List[str], company_context: str) -> List[str]:
        """GPT로 질문과 관련있는 기술 1-2개 선택"""
        
        try:
            client = get_openai_client()
            skills_text = ", ".join(available_skills)
            
            prompt = f"""
{company_context}

질문: "{question}"
사용 가능한 기술들: {skills_text}

기술 선택 규칙:
1. **질문에서 기술명을 직접 언급했다면 반드시 그 기술을 선택하세요**
2. 기술명이 직접 언급되지 않았다면, 질문의 핵심 주제와 가장 관련 깊은 기술을 선택하세요
3. 가능한 1-2개 기술만 선택하세요

JSON 응답:
{{
    "selected_skills": ["기술1", "기술2"],
    "reasoning": "선택 이유"
}}
"""
            
            response = await client.chat_completion_with_retry(
                messages=[
                    {"role": "system", "content": "당신은 기술 매칭 전문가입니다."},
                    {"role": "user", "content": prompt}
                ],
                model="gpt-4o-mini",
                temperature=0.3,
                max_tokens=500
            )
            
            result_text = response.choices[0].message.content.strip()
            print(f"   🤖 기술 선택 GPT 응답: {result_text}")
            
            # 마크다운 코드블록 제거
            if result_text.startswith("```json"):
                result_text = result_text[7:]  # ```json 제거
            if result_text.endswith("```"):
                result_text = result_text[:-3]  # ``` 제거
            result_text = result_text.strip()
            
            result = parse_json_response(result_text)
            selected = result.get("selected_skills", [])
            
            # 유효한 기술만 필터링
            valid_skills = [s for s in selected if s in available_skills]
            
            if not valid_skills:
                # 선택 실패시 스마트 폴백
                valid_skills = self._smart_fallback(question, available_skills)
                print(f"   ⚠️ 기술 선택 실패, 스마트 폴백: {valid_skills}")
            
            return valid_skills
            
        except Exception as e:
            print(f"   ❌ 기술 선택 오류: {str(e)}")
            # 오류시 스마트 폴백
            return self._smart_fallback(question, available_skills)
    
    def _parse_markdown_content(self, content: str) -> Dict[str, Any]:
        """마크다운 내용 파싱"""
        lines = content.split('\n')
        
        # frontmatter 파싱
        frontmatter = {}
        if lines[0] == '---':
            i = 1
            while i < len(lines) and lines[i] != '---':
                if ':' in lines[i]:
                    key, value = lines[i].split(':', 1)
                    frontmatter[key.strip()] = value.strip().strip('"')
                i += 1
            content_start = i + 1
        else:
            content_start = 0
        
        # 섹션별 내용 파싱
        understanding = ""
        projects = []
        problems = []
        
        current_section = None
        current_project = None
        current_problem = None
        
        for i in range(content_start, len(lines)):
            line = lines[i].strip()
            
            if line.startswith('# 내가 이해한'):
                current_section = 'understanding'
                continue
            elif line.startswith('# 프로젝트 활용 사례'):
                current_section = 'projects'
                continue
            elif line.startswith(f"# {frontmatter.get('title', '')}로 해결할 수 있는 문제들"):
                current_section = 'problems'
                continue
            elif line.startswith('## '):
                if current_section == 'projects':
                    if current_project:
                        projects.append(current_project)
                    title = line[3:].strip()
                    current_project = {'title': title + ' →', 'description': ''}
                elif current_section == 'problems':
                    if current_problem:
                        problems.append(current_problem)
                    title = line[3:].strip()
                    current_problem = {'title': title, 'descriptions': []}
                continue
            elif line.startswith('- **'):
                if current_section == 'problems' and current_problem:
                    # "- **기존:** 내용" 형태 파싱
                    if ':**' in line:
                        label_end = line.find(':**')
                        label = line[4:label_end]
                        content = line[label_end+3:].strip()
                        current_problem['descriptions'].append({'label': label, 'content': content})
                continue
            
            # 내용 추가
            if current_section == 'understanding' and line and not line.startswith('#'):
                understanding += line + ' '
            elif current_section == 'projects' and current_project and line and not line.startswith('#') and not line.startswith('##'):
                current_project['description'] += line + ' '
        
        # 마지막 항목들 추가
        if current_project:
            projects.append(current_project)
        if current_problem:
            problems.append(current_problem)
        
        return {
            'title': frontmatter.get('title', ''),
            'icon': frontmatter.get('icon', ''),
            'category': frontmatter.get('category', ''),
            'slug': frontmatter.get('slug', ''),
            'understanding': understanding.strip(),
            'projects': projects,
            'problems': problems
        }
    
    def _read_skill_markdown(self, category: str, skill_slug: str) -> Dict[str, Any]:
        """마크다운 파일에서 기술 상세 정보 읽기"""
        try:
            md_file = self.skills_data_path / category / f"{skill_slug}.md"
            with open(md_file, 'r', encoding='utf-8') as f:
                content = f.read()
            return self._parse_markdown_content(content)
        except Exception as e:
            print(f"   ❌ {skill_slug} 마크다운 파일 읽기 오류: {str(e)}")
            return {}
    
    async def _get_skill_details(self, skill_slugs: List[str]) -> Dict[str, Any]:
        """선택된 기술들의 상세 정보 조회"""
        
        skill_details = {}
        categories = self._load_categories_config()
        
        # 각 기술이 어느 카테고리에 속하는지 찾기
        skill_to_category = {}
        for category, skills in categories.items():
            for skill in skills:
                skill_to_category[skill] = category
        
        for slug in skill_slugs:
            try:
                category = skill_to_category.get(slug)
                if category:
                    data = self._read_skill_markdown(category, slug)
                    if data:
                        skill_details[slug] = data
                        print(f"   📄 {slug} 상세정보 조회 성공")
                    else:
                        print(f"   ❌ {slug} 마크다운 파일 파싱 실패")
                else:
                    print(f"   ❌ {slug} 카테고리를 찾을 수 없음")
            except Exception as e:
                print(f"   ❌ {slug} 조회 오류: {str(e)}")
                continue
        
        return skill_details
    
    async def _generate_tech_answer(self, state: ChatState, skill_details: Dict[str, Any]) -> str:
        """GPT로 기술적 답변 생성 (대화 맥락 고려)"""
        
        try:
            client = get_openai_client()
            company_context = Config.get_company_context(state.company_context)
            
            # 기술 상세 정보 포맷팅
            formatted_content = ""
            for skill_slug, detail in skill_details.items():
                formatted_content += f"\n=== {detail['title']} ===\n"
                formatted_content += f"내 이해: {detail['understanding']}\n\n"
                
                if detail['projects']:
                    formatted_content += "프로젝트 활용 사례:\n"
                    for project in detail['projects']:
                        formatted_content += f"- {project['title']}: {project['description']}\n"
                    formatted_content += "\n"
                
                if detail['problems']:
                    formatted_content += "해결 가능한 문제들:\n"
                    for problem in detail['problems']:
                        formatted_content += f"- {problem['title']}\n"
                        for desc in problem['descriptions']:
                            formatted_content += f"  · {desc['label']}: {desc['content']}\n"
                    formatted_content += "\n"
            
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

관련 기술 상세 정보:
{formatted_content}

중요: 이전 대화에서 언급된 프로젝트나 기술과 연결하여 답변하세요.

답변 구성:
1. 해당 기술에 대한 나의 이해와 견해
2. 실제 프로젝트에서 어떻게 사용했는지 구체적 사례  
3. 그 기술로 해결한 문제와 성과
4. 회사 요구사항과 연결

기술적 깊이와 실무 경험을 균형있게 설명하세요.
150-200단어로 면접관에게 하는 자연스러운 대화체로 답변하세요.
"""
            
            response = await client.chat_completion_with_retry(
                messages=[
                    {"role": "system", "content": "당신은 기술 면접에서 지원자의 기술 경험을 효과적으로 설명하는 전문가입니다."},
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
            return f"죄송합니다. '{state.question}' 질문에 대한 기술적 답변 생성 중 오류가 발생했습니다."
    
    def _generate_tech_links(self, selected_skills: List[str], skill_details: Dict[str, Any]) -> Dict[str, str]:
        """기술 페이지 링크 + 프로젝트 링크 생성"""
        
        links = {}
        
        # 기술 페이지 링크 추가
        for skill in selected_skills:
            if skill in skill_details:
                title = skill_details[skill]['title']
                icon = skill_details[skill]['icon']
                links[f"{icon} {title} 기술 상세"] = f"/skills/{skill}"
        
        # 프로젝트 링크 추가 (중복 제거)
        project_links = {}
        for detail in skill_details.values():
            if detail['projects']:
                for project in detail['projects']:
                    title = project['title'].replace(' →', '')
                    if '데이트 코스' in title:
                        project_links[f"📦 {title}"] = "/date-recommendation"
                    elif '보드게임' in title:
                        project_links[f"📦 {title}"] = "/boardgame-chatbot"
                    elif '신문' in title:
                        project_links[f"📦 {title}"] = "/newspaper-churn"
                    elif '간호사' in title:
                        project_links[f"📦 {title}"] = "/nurse-salary"
                    elif 'AI 챗봇' in title or '포트폴리오' in title:
                        project_links[f"📦 {title}"] = "/ai-chatbot-portfolio"
        
        links.update(project_links)
        return links
    
    def _smart_fallback(self, question: str, available_skills: List[str]) -> List[str]:
        """질문 분석해서 적절한 기술 추측"""
        if not available_skills:
            return []
            
        question_lower = question.lower()
        
        # 질문에서 기술명 직접 추출
        for skill in available_skills:
            if skill.lower() in question_lower:
                return [skill]
        
        # 관련 용어로 추측
        ml_hints = ['auc', 'accuracy', 'model', 'algorithm', 'feature', 'prediction', 'xgboost', 'lightgbm', 'smote']
        llm_hints = ['language', 'vector', 'embedding', 'chat', 'generation', 'langchain', 'rag']
        backend_hints = ['api', 'server', 'database', 'endpoint', 'fastapi', 'django']
        
        if any(hint in question_lower for hint in ml_hints):
            ml_skills = ['xgboost', 'lightgbm', 'smote', 'scikit-learn', 'pandas']
            for skill in ml_skills:
                if skill in available_skills:
                    return [skill]
        
        if any(hint in question_lower for hint in llm_hints):
            llm_skills = ['langchain', 'rag', 'vector-db', 'faiss']
            for skill in llm_skills:
                if skill in available_skills:
                    return [skill]
        
        if any(hint in question_lower for hint in backend_hints):
            backend_skills = ['fastapi', 'django', 'postgresql']
            for skill in backend_skills:
                if skill in available_skills:
                    return [skill]
        
        # 기본: 첫 번째 기술
        return [available_skills[0]]

async def technical_agent(state: ChatState) -> ChatState:
    """Technical Agent 실행 함수"""
    agent = TechnicalAgent()
    return await agent.process(state)