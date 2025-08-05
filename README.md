# 🤖 AI Engineer Portfolio

> **AI로 혁신하는 풀스택 엔지니어의 포트폴리오**  
> 프론트엔드, 백엔드, AI를 아우르는 종합 개발자 경험을 선보입니다.

## 🎯 프로젝트 개요

이 프로젝트는 **최신 AI 기술**을 활용한 **인터랙티브 포트폴리오**입니다.
- **Next.js 풀스택** 아키텍처
- **LangGraph 기반 멀티 에이전트** AI 챗봇
- **RAG (Retrieval Augmented Generation)** 시스템
- **실시간 질의응답** 기능

## 🛠️ 기술 스택 및 선택 이유

### Frontend
- **Next.js 14 (App Router)** 
  - *선택 이유*: 포트폴리오는 SEO가 중요한데, Next.js의 SSR/SSG로 검색 엔진 최적화와 초기 로딩 속도를 동시에 해결. App Router는 복잡한 라우팅 구조(메인/챗봇/프로젝트 상세)를 더 직관적으로 관리할 수 있음.
- **TypeScript**
  - *선택 이유*: AI 시스템은 복잡한 데이터 구조를 다루므로 타입 안정성이 필수. 특히 LangGraph의 상태 관리와 에이전트 간 데이터 전달에서 런타임 에러를 방지하기 위함.
- **Tailwind CSS + shadcn/ui**
  - *선택 이유*: 포트폴리오는 빠른 프로토타이핑이 중요하면서도 일관된 디자인 시스템이 필요. shadcn/ui는 접근성과 사용성이 검증된 컴포넌트를 제공하여 개발 속도와 품질을 동시에 확보.
- **Framer Motion**
  - *선택 이유*: 기술적 역량을 시각적으로 어필하려면 미묘한 인터랙션이 중요. CSS 애니메이션보다 복잡한 시퀀싱과 제스처 기반 애니메이션을 선언적으로 구현 가능.

### Backend Architecture
- **Next.js API Routes (풀스택 접근)**
  - *선택 이유*: 포트폴리오 특성상 트래픽이 예측 가능하고 AI API 호출이 주요 로직. 별도 백엔드 서버 운영비용과 복잡성을 피하면서도 서버리스의 확장성을 활용. 개발자 1인 프로젝트에서 DevOps 부담을 최소화.
- **Supabase (PostgreSQL + pgvector)**
  - *선택 이유*: 벡터 검색을 위해 Pinecone 같은 전용 서비스도 고려했지만, 관계형 데이터(프로젝트 메타데이터)와 벡터 데이터를 함께 관리해야 하는 상황. pgvector로 단일 데이터베이스에서 SQL과 벡터 검색을 모두 처리하여 데이터 일관성과 쿼리 성능을 최적화.

### AI/ML Architecture  
- **LangGraph (멀티 에이전트 오케스트레이션)**
  - *선택 이유*: 단순 RAG보다 더 지능적인 대화 경험을 원했음. 질문 유형에 따라 다른 전문성을 보여주려면 에이전트 분할이 필요. LangChain Expression Language보다 복잡한 조건부 플로우와 상태 관리에 적합하며, 향후 에이전트 추가/수정이 용이.
- **OpenAI GPT-4 + Embeddings**
  - *선택 이유*: Claude나 Gemini도 고려했지만, OpenAI가 개발자 생태계에서 가장 안정적이고 문서화가 잘 되어 있음. 특히 Function Calling과 JSON 모드는 구조화된 응답 생성에 필수적. Embeddings API는 한국어 처리 성능이 검증됨.
- **RAG Pipeline (Custom Implementation)**  
  - *선택 이유*: LlamaIndex나 기성 RAG 솔루션 대신 직접 구현한 이유는 포트폴리오 데이터 특성에 맞는 세밀한 컨트롤이 필요했기 때문. GitHub 커밋, 프로젝트 문서, 개인 경험 등 이질적인 데이터 소스를 하나의 파이프라인으로 처리하려면 커스텀 청킹과 메타데이터 전략이 필수.

### 배포 & 인프라
- **Vercel (Frontend + Edge Functions)**
  - *선택 이유*: Next.js의 제작사 플랫폼으로 최적화된 성능 보장. Edge Functions으로 AI API 호출 시 지연시간 최소화. GitHub Actions 대신 Vercel의 Git 통합으로 배포 파이프라인 단순화.
- **Serverless Architecture**
  - *선택 이유*: 포트폴리오는 간헐적 트래픽 패턴. 상시 서버 운영비용을 피하고 사용량 기반 과금으로 비용 효율성 극대화. 또한 글로벌 CDN으로 어디서든 빠른 접근 보장.

## 📋 개발 체크리스트

### Phase 1: 기본 구조 설정
- [ ] Next.js + TypeScript 프로젝트 초기화
- [ ] Tailwind CSS + shadcn/ui 설정
- [ ] 기본 폴더 구조 생성
- [ ] ESLint & Prettier 설정
- [ ] Vercel 배포 환경 구축
- [ ] 환경변수 설정 (.env.local, .env.example)

### Phase 2: 메인 페이지 개발
- [ ] Hero Section 구현
  - [ ] 타이핑 애니메이션 효과
  - [ ] 프로필 이미지/영상
  - [ ] CTA 버튼 (AI 챗봇 연결)
- [ ] Featured Projects 섹션
  - [ ] 프로젝트 카드 컴포넌트
  - [ ] 라이브 데모 링크
  - [ ] GitHub 연동
- [ ] Tech Stack 시각화
  - [ ] 기술 로고 그리드
  - [ ] 인터랙티브 애니메이션
  - [ ] 클릭 시 관련 프로젝트 필터링
- [ ] Contact & About 섹션
  - [ ] 연락처 정보
  - [ ] 소셜 미디어 링크
  - [ ] 이력서 다운로드

### Phase 3: AI 챗봇 시스템
- [ ] 데이터 수집 및 전처리
  - [ ] 개인 이력서 텍스트 추출
  - [ ] GitHub API 연동 (repos, commits, issues)
  - [ ] 프로젝트 README 수집
  - [ ] 기술 경험 데이터 정리
  - [ ] 텍스트 청킹 (chunk_size: 1000, overlap: 200)
- [ ] 벡터 데이터베이스 구축
  - [ ] Supabase pgvector 설정
  - [ ] OpenAI Embeddings 생성
  - [ ] 벡터 저장 및 인덱싱
  - [ ] 검색 성능 최적화
- [ ] LangGraph 멀티 에이전트 구현
  - [ ] 질문 분류 에이전트 (classifier)
  - [ ] 기술 전문 에이전트 (tech_agent)
  - [ ] 프로젝트 전문 에이전트 (project_agent)
  - [ ] 개인경험 전문 에이전트 (personal_agent)
  - [ ] RAG 검색 에이전트 (rag_retriever)
  - [ ] 에이전트 간 라우팅 로직
- [ ] 챗봇 UI 개발
  - [ ] 실시간 채팅 인터페이스
  - [ ] 타이핑 효과 애니메이션
  - [ ] 추천 질문 시스템
  - [ ] 소스 인용 기능
  - [ ] 대화 히스토리 관리
  - [ ] 모바일 최적화

### Phase 4: 상세 페이지 개발
- [ ] 프로젝트 상세 페이지 (/projects/[slug])
  - [ ] 동적 라우팅 구현
  - [ ] 프로젝트 메타데이터
  - [ ] 데모 영상/GIF
  - [ ] 기술 스택 표시
  - [ ] GitHub 연동
- [ ] 기술스택 상세 페이지 (/skills)
  - [ ] 기술별 숙련도 표시
  - [ ] 관련 프로젝트 연결
  - [ ] 학습 경험 타임라인
- [ ] About 페이지 (/about)
  - [ ] 개발자 스토리
  - [ ] 경력 타임라인
  - [ ] 교육 배경
  - [ ] 목표와 비전

### Phase 5: 성능 최적화 & 배포
- [ ] 성능 최적화
  - [ ] 이미지 최적화 (next/image)
  - [ ] 코드 스플리팅
  - [ ] API 응답 캐싱
  - [ ] 벡터 검색 최적화
  - [ ] Lighthouse 점수 90+ 달성
- [ ] SEO 최적화
  - [ ] 메타 태그 설정
  - [ ] Open Graph 설정
  - [ ] 구조화된 데이터 (JSON-LD)
  - [ ] sitemap.xml
  - [ ] robots.txt
- [ ] 에러 핸들링 & 로딩 상태
  - [ ] 전역 에러 바운더리
  - [ ] API 에러 처리
  - [ ] 로딩 스켈레톤 UI
  - [ ] 네트워크 에러 복구
- [ ] 모바일 최적화
  - [ ] 반응형 디자인 검증
  - [ ] 터치 인터페이스 최적화
  - [ ] 모바일 성능 최적화
- [ ] 배포 및 모니터링
  - [ ] 프로덕션 환경 배포
  - [ ] 커스텀 도메인 연결
  - [ ] Vercel Analytics 설정
  - [ ] 에러 모니터링 (Sentry)
  - [ ] 성능 모니터링

### Phase 6: 콘텐츠 & 마케팅
- [ ] 콘텐츠 제작
  - [ ] 프로젝트 스크린샷/영상
  - [ ] 기술 블로그 글 작성
  - [ ] 데모 영상 제작
- [ ] 포트폴리오 홍보
  - [ ] LinkedIn 포스팅
  - [ ] GitHub README 업데이트
  - [ ] 개발 커뮤니티 공유
- [ ] 피드백 수집 및 개선
  - [ ] 사용자 피드백 수집
  - [ ] 성능 모니터링 분석
  - [ ] 지속적인 개선

## 🚀 시작하기

### 개발 환경 설정
```bash
# 저장소 클론
git clone https://github.com/junoaplus/portfolio.git
cd portfolio

# 의존성 설치
npm install

# 환경변수 설정
cp .env.example .env.local
# .env.local 파일을 편집하여 API 키 설정

# 개발 서버 실행
npm run dev
```

### 환경변수 설정
```bash
# .env.local
NEXT_PUBLIC_SITE_URL=http://localhost:3000
OPENAI_API_KEY=your_openai_api_key
SUPABASE_URL=your_supabase_url
SUPABASE_ANON_KEY=your_supabase_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_supabase_service_role_key
```

## 🌳 브랜치 전략

### 주요 브랜치
- **`main`** - 프로덕션 릴리스 브랜치 (배포용)
- **`develop`** - 개발 통합 브랜치 (피처 브랜치들이 여기로 merge)

### 기능별 피처 브랜치
- **`feature/project-setup`** - 프로젝트 초기 설정 (package.json, 기본 구조)
- **`feature/nextjs-foundation`** - Next.js 앱 기본 틀 구성
- **`feature/ui-design-system`** - Tailwind + shadcn/ui 디자인 시스템
- **`feature/main-page-hero`** - 메인 페이지 Hero 섹션
- **`feature/tech-stack-visualization`** - 기술 스택 인터랙티브 시각화
- **`feature/projects-showcase`** - 프로젝트 쇼케이스 섹션 
- **`feature/data-pipeline`** - 개인 데이터 수집/전처리 파이프라인
- **`feature/vector-database`** - Supabase pgvector 설정 및 임베딩
- **`feature/langgraph-agents`** - LangGraph 멀티 에이전트 시스템
- **`feature/chatbot-ui`** - 챗봇 사용자 인터페이스
- **`feature/rag-system`** - RAG 검색 및 응답 생성 로직
- **`feature/performance-optimization`** - 성능 최적화 및 SEO

### 워크플로우
1. `develop`에서 피처 브랜치 생성
2. 기능 완성 후 `develop`으로 PR
3. 통합 테스트 후 `main`으로 릴리스

## 📁 프로젝트 구조
```
portfolio/
├── app/                    # Next.js App Router
│   ├── api/               # API Routes (AI 챗봇, 데이터)
│   ├── chat/              # AI 챗봇 페이지
│   ├── projects/          # 프로젝트 상세 페이지
│   │   └── [slug]/        # 동적 라우팅
│   ├── skills/            # 기술스택 상세 페이지
│   └── page.tsx           # 메인 페이지 (원페이지 스타일)
├── components/            # 재사용 컴포넌트
│   ├── ui/               # shadcn/ui 컴포넌트들
│   ├── chat/             # 챗봇 관련 컴포넌트
│   ├── projects/         # 프로젝트 쇼케이스 컴포넌트
│   └── animations/       # Framer Motion 애니메이션
├── lib/                   # 유틸리티 함수
│   ├── ai/               # AI/RAG 관련 로직
│   ├── data/             # 데이터 처리 함수
│   └── utils.ts          # 공통 유틸리티
├── data/                  # 정적 데이터 (프로젝트 정보 등)
├── public/                # 정적 파일 (이미지, 아이콘)
└── styles/                # 글로벌 스타일
```

## 🎨 디자인 시스템

### 컬러 팔레트
- **Primary**: AI/기술 관련 색상 (파란색 계열)
- **Secondary**: 포인트 색상 (그린/오렌지)
- **Neutral**: 텍스트 및 배경 (그레이 계열)

### 타이포그래피
- **Headings**: Inter (모던하고 깔끔한 느낌)
- **Body**: Inter (가독성 최적화)
- **Code**: JetBrains Mono (코드 블록용)

## 📊 예상 성과

### 기술적 성과
- **성능**: Lighthouse 90+ 점수
- **접근성**: WCAG 2.1 AA 준수
- **SEO**: 구글 검색 최적화

### 비즈니스 성과
- **차별화**: AI 챗봇으로 인터랙티브한 경험
- **어필도**: 최신 기술 스택 활용
- **실용성**: 실제 질문-답변 가능

## 🤝 기여하기

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 라이선스

이 프로젝트는 MIT 라이선스 하에 있습니다. 자세한 내용은 `LICENSE` 파일을 참조하세요.

## 📞 연락처

**황준호** - AI Engineer
- 📧 Email: [your-email@example.com]
- 💼 LinkedIn: [your-linkedin]
- 🐙 GitHub: [@junoaplus](https://github.com/junoaplus)

---

> **"AI로 세상을 바꾸는 풀스택 엔지니어, 코드와 데이터로 미래를 만듭니다."**