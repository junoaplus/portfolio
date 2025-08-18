# 🤖 포트폴리오 AI 챗봇

면접관이 질문하면 포트폴리오에서 정확한 정보를 찾아 간결한 팩트 중심 답변과 관련 페이지 링크를 제공하는 LangGraph 멀티 에이전트 챗봇

## 🎯 주요 특징

- ⚡ **실시간 API 기반**: 벡터DB 없이 포트폴리오 API에서 실시간 데이터 수집
- 🧠 **메타데이터 보완**: 페이지에 없는 정보는 숨겨진 메타데이터로 보완
- 📝 **간결한 답변**: 50-80단어 팩트 중심, 장황한 설명 금지
- 🔗 **스마트 라우팅**: 질문 의도에 따라 최적 페이지 결정

## 🏗 시스템 아키텍처

```
질문 입력 → Router Agent → Data Extractor → Connection Finder → Response Generator → 답변 출력
```

### 워크플로우 상세

1. **Router Agent**: 질문 의도 분석 및 라우팅 전략 결정
2. **Data Extractor**: API + 메타데이터에서 실시간 정보 수집
3. **Connection Finder**: 추가 연결점 탐색 및 보완 정보 수집
4. **Response Generator**: 간결한 면접 답변 + 추천 링크 생성

## 🚀 빠른 시작

### 1. 환경 설정

```bash
# 가상환경 생성
python -m venv venv
source venv/bin/activate  # Windows: venv\Scripts\activate

# 의존성 설치
pip install -r requirements.txt
```

### 2. 환경변수 설정

```bash
# .env 파일 생성
cp .env.example .env

# .env 파일 편집
OPENAI_API_KEY=sk-your-openai-key
PORTFOLIO_BASE_URL=https://your-portfolio.vercel.app
```

### 3. 포트폴리오 API 엔드포인트 구현

챗봇이 작동하려면 포트폴리오 사이트에 다음 API들이 필요합니다:

```typescript
// 필수 API 엔드포인트
/api/content/skills/langchain
/api/content/skills/rag  
/api/content/skills/vector-db
/api/content/skills/openai
/api/content/skills/fine-tuning
/api/content/boardgame-chatbot
/api/content/date-recommendation
/api/content/newspaper-churn
/api/content/nurse-salary
```

### 4. 서버 실행

```bash
# 개발 서버 실행
uvicorn api.main:app --reload --host 0.0.0.0 --port 8000

# 서버 확인
curl http://localhost:8000/health
```

### 5. 테스트

```bash
# API 테스트
curl -X POST http://localhost:8000/chat \
  -H "Content-Type: application/json" \
  -d '{"question": "LangChain 경험이 있나요?"}'
```

## 📊 현재 지원 범위 (MVP)

### ✅ 작동하는 질문들
- "LangChain 경험이 있나요?"
- "RAG 시스템을 어떻게 구현했나요?"
- "Fine-tuning 해본 적 있나요?"
- "Vector DB 사용 경험은?"
- "보드게임 챗봇 프로젝트에 대해 설명해주세요"
- "가장 어려웠던 프로젝트는?"

### ❌ 아직 지원 안되는 질문들
- "Python 경험이 몇 년인가요?" (메타데이터로 보완 예정)
- "React 할 줄 아나요?" (스킬 페이지 미완성)
- "본인 성격은 어떤가요?" (About 페이지 미완성)

## 🛠 확장 계획

### Phase 1: 기본 스킬 메타데이터 (진행중)
```python
# config/metadata.py에 추가
"basic_skills": {
    "python": {"level": "고급 (3년+)", "projects": [...]}
}
```

### Phase 2: 개인 질문 답변 (계획)
```python
"personal_questions": {
    "motivation": "복잡한 문제를 AI로 단순하게...",
    "strength": "빠른 학습력과 문제해결능력"
}
```

### Phase 3: 완성된 스킬 페이지 추가 (계획)
- ML 스킬들 (scikit-learn, pandas, numpy 등)
- 웹 개발 스킬들 (React, TypeScript, Next.js 등)

## 🧪 테스트 방법

### 단위 테스트
```bash
pytest tests/test_agents.py -v
```

### 통합 테스트  
```bash
pytest tests/test_integration.py -v
```

### 수동 테스트
```python
# 개별 에이전트 테스트
from workflow.state import PortfolioState
from agents.router_agent import router_agent

state = PortfolioState(question="LangChain 경험이 있나요?")
result = await router_agent(state)
print(result.intent, result.target_pages)
```

## 📈 성능 지표

- **응답 속도**: ~1.4초 목표 (현재 ~2.1초)
- **정확도**: 완성된 부분 95%+ 목표  
- **커버리지**: MVP 70-80% (향후 90%+)

## 🐛 문제 해결

### 일반적인 문제들

**Q: "데이터가 없습니다" 에러**
A: 포트폴리오 API 엔드포인트가 구현되었는지 확인

**Q: OpenAI API 에러**  
A: .env 파일의 OPENAI_API_KEY 확인

**Q: 응답이 너무 길다**
A: response_generator.py의 프롬프트에서 단어 수 제한 강화

### 디버깅

```bash
# 디버그 정보 확인
curl -X POST http://localhost:8000/chat \
  -H "Content-Type: application/json" \
  -d '{"question": "test"}' | jq '.debug_info'
```

## 🔧 개발 가이드

### 새 에이전트 추가
1. `agents/` 폴더에 파일 생성
2. `workflow/graph.py`에 노드 추가
3. `workflow/state.py`에 필요한 상태 필드 추가

### 메타데이터 추가
`config/metadata.py`의 `HIDDEN_METADATA`에 새 정보 추가

### API 엔드포인트 추가
포트폴리오 사이트의 `/api/content/` 경로에 새 API 구현

## 📞 지원

문제 발생시:
1. GitHub Issues 등록
2. 디버그 정보 포함하여 문의
3. 로그 파일과 함께 상황 설명

---

**이 문서와 코드 구조를 따라하면 어디서든 동일한 성능의 포트폴리오 AI 챗봇을 구현할 수 있습니다! 🚀**