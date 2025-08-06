# 🤖 AI Engineer Portfolio

> **AI로 혁신하는 풀스택 엔지니어의 포트폴리오**  
> 프론트엔드, 백엔드, AI를 아우르는 종합 개발자 경험을 선보입니다.

## 🎯 프로젝트 개요

이 프로젝트는 **최신 AI 기술**을 활용한 **인터랙티브 포트폴리오**입니다.

- **Next.js 풀스택** 아키텍처
- **LangGraph 기반 멀티 에이전트** AI 챗봇
- **RAG (Retrieval Augmented Generation)** 시스템
- **실시간 질의응답** 기능

## 🛠️ 기술 스택

### Frontend

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS** + **shadcn/ui**
- **Framer Motion** (애니메이션)
- **React Hook Form**

### Backend

- **Next.js API Routes**
- **Supabase** (PostgreSQL + pgvector)
- **OpenAI API** (GPT-4)
- **LangGraph** (에이전트 오케스트레이션)

### AI/ML

- **LangGraph** (멀티 에이전트 시스템)
- **RAG Pipeline** (벡터 검색 + 생성)
- **OpenAI Embeddings**
- **Vector Database** (pgvector)

### 배포 & 인프라

- **Vercel** (프론트엔드 + API)
- **Supabase** (데이터베이스)
- **Vercel Edge Functions**

## 📋 개발 체크리스트

### Phase 1: 기본 구조 설정

- [x] Next.js + TypeScript 프로젝트 초기화
- [x] Tailwind CSS + shadcn/ui 설정
- [x] 기본 폴더 구조 생성
- [x] ESLint & Prettier 설정
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

## 📁 프로젝트 구조

```
portfolio/
├── app/                    # Next.js App Router
│   ├── api/               # API Routes
│   ├── chat/              # 챗봇 페이지
│   ├── projects/          # 프로젝트 페이지
│   └── page.tsx           # 메인 페이지
├── components/            # 재사용 컴포넌트
├── lib/                   # 유틸리티 함수
├── data/                  # 정적 데이터
├── public/                # 정적 파일
└── styles/                # 스타일 파일
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
