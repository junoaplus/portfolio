# 🎨 v0.dev 프롬프트 모음집

> **AI 엔지니어 포트폴리오** 전체 페이지를 v0.dev로 생성하기 위한 상세 프롬프트들

---

## 📄 1. 메인 페이지 (랜딩 페이지)

```
Create a modern AI engineer portfolio landing page using Next.js 14, TypeScript, and Tailwind CSS. The design should be sleek, professional, and showcase cutting-edge AI expertise.

**Page Structure:**

1. **Hero Section**
   - Large typography: "AI Engineer 황준호" with gradient text effect (blue to green)
   - Subtitle: "AI로 혁신하는 풀스택 엔지니어 - 코드와 데이터로 미래를 만듭니다"
   - Professional headshot image (placeholder) with subtle glow effect
   - Primary CTA button: "AI 챗봇과 대화하기" (prominent, animated hover)
   - Secondary CTA: "프로젝트 둘러보기"
   - Floating tech icons: React, Python, OpenAI, LangGraph logos with subtle animation

2. **Featured Projects Section**
   - Title: "주요 프로젝트"
   - 3 project cards in a grid layout:
     * AI 챗봇 포트폴리오 (this project) - with "Live Demo" badge
     * 데이트 코스 추천 AI 서비스 - with GitHub stars count
     * 보드게임 룰 챗봇 - with "LangGraph" tech badge
   - Each card: project image, title, brief description, tech stack badges, demo/github links

3. **Tech Stack Visualization**
   - Title: "기술 스택"
   - Interactive grid of technology logos with hover effects:
     * Frontend: Next.js, React, TypeScript, Tailwind CSS
     * Backend: Python, FastAPI, Node.js
     * AI/ML: LangGraph, OpenAI, RAG, Vector DB
     * Database: PostgreSQL, Supabase, Redis
     * DevOps: Docker, Vercel, AWS
   - Each logo should be clickable with subtle animation
   - Show proficiency level (1-5 stars) on hover

4. **Quick Stats Section**
   - 4 animated counters in a row:
     * "50+" GitHub 커밋
     * "8+" 완성 프로젝트
     * "15+" 사용 기술
     * "2년+" 개발 경험
   - Each with an icon and smooth counting animation

5. **Contact Section**
   - Title: "연락하기"
   - Contact form with: Name, Email, Message fields
   - Social links: GitHub, LinkedIn, Email icons
   - "이력서 다운로드" button
   - Background: subtle gradient or pattern

**Design Requirements:**
- Dark theme with modern glassmorphism effects
- Smooth scroll animations (use Framer Motion concepts)
- Mobile-responsive design
- Professional color scheme: dark blues, teals, with accent colors
- Typography: Clean, modern font (Inter or similar)
- Micro-interactions on hover states
- Loading states for interactive elements

**Technical Requirements:**
- Next.js 14 App Router structure
- TypeScript for all components
- Tailwind CSS for styling
- Responsive design (mobile-first)
- Semantic HTML structure
- Accessibility considerations (ARIA labels, keyboard navigation)
- Performance optimized (lazy loading for images)
```

---

## 🤖 2. AI 챗봇 페이지

```
Create an advanced AI chatbot interface page for an AI engineer portfolio using Next.js 14, TypeScript, and Tailwind CSS. This should look like a professional AI assistant with modern UI/UX.

**Page Structure:**

1. **Header Section**
   - Page title: "AI 어시스턴트와 대화하기"
   - Subtitle: "저에 대한 모든 것을 질문해보세요. LangGraph 멀티 에이전트가 답변드립니다."
   - Status indicator: "AI 에이전트 온라인" with green dot animation
   - Technical info pill: "Powered by LangGraph + RAG"

2. **Chat Interface**
   - Full-height chat container with glassmorphism background
   - Message bubbles:
     * User messages: right-aligned, blue gradient background
     * AI messages: left-aligned, gray background with AI avatar
     * Typing indicator with 3 animated dots
     * Message timestamps
     * Source citation links for AI responses (small links below messages)
   - Message input area:
     * Large text input with placeholder: "황준호에 대해 궁금한 것을 물어보세요..."
     * Send button with arrow icon
     * Voice input button (mic icon)
     * Character counter

3. **Quick Question Suggestions**
   - Floating suggestion pills above input:
     * "어떤 AI 프로젝트를 했나요?"
     * "기술 스택이 궁금해요"
     * "왜 AI 엔지니어가 되고 싶나요?"
     * "협업 경험을 알려주세요"
     * "가장 도전적이었던 프로젝트는?"
   - Pills should be clickable and animate when selected

4. **Sidebar (Desktop) / Bottom Sheet (Mobile)**
   - Chat features:
     * "대화 내보내기" button
     * "새 대화 시작" button
     * "피드백 남기기" (thumbs up/down for messages)
   - Technical Details:
     * "시스템 아키텍처" collapsible section showing LangGraph flow
     * "데이터 소스" showing GitHub, 이력서, 프로젝트 문서
     * Response time indicator
     * Token usage indicator (optional)

5. **Empty State (When no messages)**
   - Welcome message: "안녕하세요! 황준호의 AI 어시스턴트입니다."
   - Feature highlights:
     * "실시간 GitHub 데이터 연동"
     * "프로젝트 상세 정보 제공"
     * "기술적 질문 전문 답변"
     * "개인 경험 및 동기 공유"
   - Sample questions as clickable cards

**Design Requirements:**
- Modern chat app aesthetic (Discord, ChatGPT inspired)
- Dark theme with subtle gradients
- Smooth message animations (slide in from bottom)
- Real-time typing indicators
- Message loading states
- Auto-scroll to latest message
- Mobile-optimized (full-screen chat on mobile)
- Glassmorphism effects for containers

**Interactive Elements:**
- Hover effects on all clickable elements
- Smooth transitions between states
- Message reactions (like/dislike)
- Copy message button on hover
- Scroll to top button for long conversations
- Loading spinners for AI responses

**Technical Requirements:**
- WebSocket-ready structure (placeholders for real-time)
- State management for chat history
- Responsive design
- Keyboard shortcuts (Enter to send, Escape to clear)
- Accessibility features (screen reader support)
- Performance optimized (virtualized scrolling for long chats)
```

---

## 📁 3. 프로젝트 상세 페이지

```
Create a comprehensive project showcase page for an AI engineer portfolio using Next.js 14, TypeScript, and Tailwind CSS. This should highlight technical projects with detailed information and visual appeal.

**Page Structure:**

1. **Hero Section**
   - Large project title with gradient text
   - Project subtitle/tagline
   - Status badges: "Live Demo", "Open Source", "Featured"
   - Key metrics: GitHub stars, live users, tech stack count
   - Primary CTA: "View Live Demo"
   - Secondary CTA: "View Code"
   - Project hero image/GIF with subtle animation border

2. **Project Grid Layout**
   - Filter tabs at top:
     * "All Projects"
     * "AI/ML Projects"
     * "Full-Stack Web"
     * "Backend APIs"
   - Project cards in responsive grid (3 columns desktop, 1 mobile):
     * Project thumbnail (hover effect reveals GIF/video)
     * Project title and brief description
     * Tech stack badges (React, Python, AI, etc.)
     * GitHub link with star count
     * Live demo link (if available)
     * "Featured" badge for highlighted projects

3. **Individual Project Detailed View** (expandable or separate route)
   - **Overview Section:**
     * Problem statement and solution approach
     * Key achievements and impact metrics
     * Development timeline
     * Team size and role

   - **Technical Architecture:**
     * System architecture diagram (placeholder for diagram)
     * Technology decisions and justifications
     * Database schema overview
     * API design patterns

   - **Demo Section:**
     * Embedded video demo or interactive showcase
     * Step-by-step user flow
     * Before/after comparisons
     * Performance metrics

   - **Code Highlights:**
     * Syntax-highlighted code snippets
     * Key algorithms or unique implementations
     * API endpoint examples
     * Database query optimizations

   - **Challenges & Solutions:**
     * Technical challenges faced
     * Creative solutions implemented
     * Lessons learned
     * Future improvements planned

4. **Featured Projects (Specific Examples):**

   **AI 챗봇 포트폴리오:**
   - Hero image: Chat interface screenshot
   - Description: "LangGraph 기반 멀티 에이전트 시스템으로 구축한 인터랙티브 포트폴리오"
   - Tech: Next.js, LangGraph, RAG, OpenAI, Supabase
   - Highlights: "실시간 GitHub 데이터 연동", "벡터 검색 최적화"

   **데이트 코스 추천 AI:**
   - Hero image: Map interface with route visualization
   - Description: "서울시 25개 구 데이터를 활용한 AI 기반 데이트 코스 추천 서비스"
   - Tech: FastAPI, React, AI Agents, PostgreSQL
   - Highlights: "100만+ 장소 데이터", "실시간 길찾기 연동"

   **보드게임 룰 챗봇:**
   - Hero image: Chat interface with game rules
   - Description: "복잡한 보드게임 룰을 쉽게 설명해주는 AI 어시스턴트"
   - Tech: Django, RAG, Vector DB, Fine-tuning
   - Highlights: "게임별 전문 지식", "규칙 검색 최적화"

5. **Call-to-Action Section**
   - "더 많은 프로젝트가 궁금하신가요?"
   - GitHub 프로필 링크
   - "AI 챗봇에게 프로젝트 질문하기" 버튼
   - 연락처 정보

**Design Requirements:**
- Clean, portfolio-style layout
- Card-based design with hover animations
- Consistent spacing and typography
- Image lazy loading and optimization
- Smooth transitions between sections
- Professional color scheme

**Interactive Elements:**
- Project filtering with smooth animations
- Image/video lightbox modals
- Expandable sections for detailed info
- Code syntax highlighting
- Social sharing buttons
- Back-to-top navigation

**Technical Requirements:**
- Dynamic routing for individual projects (/projects/[slug])
- SEO optimized (meta tags, structured data)
- Image optimization
- Performance monitoring
- Mobile-responsive design
- Loading states for all content
```

---

## 🛠️ 4. 기술 스택 상세 페이지

```
Create an interactive technology skills showcase page for an AI engineer portfolio using Next.js 14, TypeScript, and Tailwind CSS. This should visualize technical expertise in an engaging, interactive way.

**Page Structure:**

1. **Hero Section**
   - Title: "기술 스택 & 전문 분야"
   - Subtitle: "프론트엔드부터 AI까지, 다양한 기술로 문제를 해결합니다"
   - Interactive skill summary:
     * Total technologies: 25+
     * Years of experience: 2+
     * Specialization areas: 4 (Frontend, Backend, AI/ML, DevOps)

2. **Interactive Skills Map**
   - **Visual Layout Options:**
     * Option A: Hexagonal honeycomb layout
     * Option B: Circular/radar chart style
     * Option C: Card-based category grid

   - **Categories with Visual Hierarchy:**

     **Frontend Development** (Primary category)
     - Next.js (Expert - 5/5 stars) - "현재 프로젝트의 핵심 프레임워크"
     - React (Expert - 5/5 stars) - "3년+ 경험, 복잡한 상태 관리 능숙"
     - TypeScript (Advanced - 4/5 stars) - "타입 안전성으로 대규모 프로젝트 구축"
     - Tailwind CSS (Advanced - 4/5 stars) - "빠른 프로토타이핑과 일관된 디자인"

     **Backend Development** (Primary category)
     - Python (Expert - 5/5 stars) - "AI/ML 프로젝트의 주력 언어"
     - FastAPI (Advanced - 4/5 stars) - "고성능 API 개발"
     - Node.js (Intermediate - 3/5 stars) - "JavaScript 풀스택 개발"
     - PostgreSQL (Advanced - 4/5 stars) - "복잡한 쿼리 최적화 경험"

     **AI/ML Expertise** (Specialty category)
     - LangGraph (Advanced - 4/5 stars) - "멀티 에이전트 시스템 구축"
     - RAG Systems (Advanced - 4/5 stars) - "벡터 검색 최적화"
     - OpenAI APIs (Advanced - 4/5 stars) - "프롬프트 엔지니어링"
     - Vector Databases (Intermediate - 3/5 stars) - "임베딩과 유사도 검색"

     **DevOps & Tools** (Supporting category)
     - Docker (Intermediate - 3/5 stars) - "컨테이너화 배포"
     - Vercel (Advanced - 4/5 stars) - "서버리스 배포 최적화"
     - Git/GitHub (Expert - 5/5 stars) - "협업과 버전 관리"

3. **Skill Detail Cards** (On hover/click)
   - **For each technology, show:**
     * Proficiency level with visual progress bar
     * Years of experience
     * Related projects (clickable links)
     * Specific achievements or certifications
     * Learning timeline
     * Next learning goals

   - **Example for Next.js:**
     * "Expert Level (5/5)"
     * "2년+ 실무 경험"
     * "관련 프로젝트: AI 포트폴리오, 데이트 코스 서비스"
     * "App Router, SSR/SSG, API Routes 전문"
     * "성능 최적화: Lighthouse 90+ 점수 달성"

4. **Learning Journey Timeline**
   - Interactive timeline showing skill acquisition:
     * 2022: "프로그래밍 시작 - Python, HTML/CSS"
     * 2023: "웹 개발 진입 - React, JavaScript"
     * 2024: "AI 특화 - LangGraph, RAG 시스템"
     * 2025: "전문성 심화 - 현재 학습 중인 기술들"

5. **Project-Technology Matrix**
   - Table/grid showing which technologies were used in which projects:
     * Rows: Projects (AI 포트폴리오, 데이트 코스 AI, etc.)
     * Columns: Technologies (React, Python, AI, etc.)
     * Checkmarks or icons where technology was used
     * Click to see project details

6. **Certifications & Learning**
   - **Completed Courses:**
     * "SK Networks AI 캠프 11기"
     * "LangChain/LangGraph 전문 과정"
     * "PostgreSQL 성능 최적화"

   - **Currently Learning:**
     * "Advanced Prompt Engineering"
     * "Vector Database Optimization"
     * "Production AI Systems"

7. **Technology Radar** (Advanced visualization)
   - Four quadrants: Adopt, Trial, Assess, Hold
   - Technologies positioned by adoption stage and interest level
   - Interactive dots that show details on hover

**Design Requirements:**
- Interactive and engaging visual elements
- Smooth hover animations and transitions
- Progress bars and skill meters
- Color-coded categories (blue for frontend, green for backend, purple for AI)
- Responsive design for all screen sizes
- Clean, modern aesthetic

**Interactive Features:**
- Technology filtering and search
- Skill level comparisons
- Project correlation highlighting
- Learning path recommendations
- Export skills summary (PDF)
- Share specific technology expertise

**Technical Requirements:**
- Dynamic skill data (easily updatable)
- SEO optimization for skill keywords
- Performance optimized animations
- Accessibility for screen readers
- Mobile touch interactions
- Loading states for interactive elements
```

---

## 📞 5. 연락처/소개 페이지

```
Create a comprehensive "About Me" and contact page for an AI engineer portfolio using Next.js 14, TypeScript, and Tailwind CSS. This should tell a compelling personal story while providing easy contact options.

**Page Structure:**

1. **Hero Section - Personal Story**
   - Large, engaging headline: "AI로 세상을 바꾸고 싶은 개발자"
   - Personal photo with professional styling
   - Brief elevator pitch: "안녕하세요! 프론트엔드부터 AI까지, 기술의 경계를 넘나드는 개발자 황준호입니다."
   - Key personality traits as animated badges: "문제 해결자", "빠른 학습자", "협업 전문가"

2. **My Journey Section**
   - **Timeline Layout:**
     * **2022**: "개발의 시작" - 프로그래밍 첫 발걸음
     * **2023**: "웹 개발 입문" - React와 JavaScript 생태계
     * **2024**: "AI 분야 진출" - 머신러닝과 LangChain 학습
     * **2025**: "AI 엔지니어로 성장" - LangGraph와 RAG 시스템 전문화

   - **Each timeline item includes:**
     * Year badge with animated appearance
     * Key milestone description
     * Technologies learned
     * Major projects completed
     * Personal growth insights

3. **Why AI Engineering?**
   - Section title: "왜 AI 엔지니어가 되고 싶었나요?"
   - Personal motivation story:
     * "기술로 사람들의 일상을 더 편리하게 만들고 싶다는 꿈"
     * "복잡한 문제를 AI로 해결하는 과정에서 느끼는 성취감"
     * "사용자와 AI가 자연스럽게 소통하는 인터페이스 구축에 대한 열정"
   - Future vision: "5년 후 모습과 목표"

4. **Skills & Interests**
   - **Technical Interests:**
     * "멀티 에이전트 시스템 설계"
     * "사용자 친화적 AI 인터페이스"
     * "성능 최적화와 확장성"

   - **Personal Interests:**
     * "새로운 기술 트렌드 탐구"
     * "오픈소스 프로젝트 기여"
     * "개발 커뮤니티 활동"

   - **Soft Skills:**
     * "팀 커뮤니케이션"
     * "문제 해결 능력"
     * "빠른 적응력"

5. **Contact Options**
   - **Primary Contact Methods:**
     * Email: professional email with copy button
     * LinkedIn: profile link with preview
     * GitHub: profile with recent activity showcase

   - **Contact Form:**
     * Name, Email, Subject, Message fields
     * Purpose dropdown: "프로젝트 협업", "취업 제안", "기술 문의", "기타"
     * Send button with loading state
     * Success/error message handling

   - **Alternative Contact:**
     * "AI 챗봇에게 질문하기" - link to chatbot page
     * "이력서 다운로드" button
     * "프로젝트 둘러보기" link

6. **Availability & Preferences**
   - Current status: "새로운 기회를 찾고 있습니다" or "프로젝트 진행 중"
   - Preferred collaboration types:
     * "풀타임 포지션"
     * "프리랜스 프로젝트"
     * "오픈소스 기여"
     * "멘토링 & 교육"

   - Location: "서울, 원격 근무 가능"
   - Response time: "24시간 내 답변"

7. **Testimonials/Recommendations** (Optional)
   - Placeholder for future recommendations
   - Quote cards with:
     * Recommender name and position
     * Company/organization
     * Relationship context
     * Recommendation text
     * Professional photos

8. **Fun Facts & Personal Touch**
   - "About Me Beyond Code" section:
     * Hobbies and interests
     * Favorite development tools
     * Preferred working style
     * Coffee vs tea preference (fun personal detail)
     * Favorite programming quote or motto

**Design Requirements:**
- Warm, approachable design with professional tone
- Personal photos and visual storytelling
- Smooth scroll animations for timeline
- Card-based layouts for easy scanning
- Consistent typography hierarchy
- Subtle background patterns or gradients

**Interactive Elements:**
- Animated timeline progression
- Hover effects on contact options
- Form validation and feedback
- Copy-to-clipboard functionality
- Social media preview cards
- Smooth page transitions

**Contact Form Features:**
- Real-time form validation
- Spam protection (honeypot or captcha)
- Auto-response email template
- Success confirmation with next steps
- Error handling for failed submissions
- Mobile-optimized input fields

**Technical Requirements:**
- SEO optimized for personal branding
- Schema markup for contact information
- Form submission handling (API route)
- Email integration (nodemailer or service)
- Analytics tracking for contact attempts
- Accessibility compliance
- Mobile-first responsive design
```

---

## 🎯 사용 순서 가이드

### 1단계: 메인 페이지부터 시작

위의 **"메인 페이지"** 프롬프트를 v0.dev에 복붙 → 기본 구조 생성

### 2단계: 개별 페이지 순서대로

1. AI 챗봇 페이지
2. 프로젝트 상세 페이지
3. 기술 스택 페이지
4. 연락처/소개 페이지

### 3단계: 통합 및 최적화

각 페이지가 완성되면 Next.js 프로젝트로 통합하고 라우팅 연결

---

## 💡 v0.dev 사용 팁

1. **프롬프트 분할**: 한 번에 너무 많은 요구사항 넣지 말고, 페이지별로 나누어서 요청
2. **반복 개선**: 첫 결과물을 보고 "이 부분을 더 모던하게" 같은 추가 요청
3. **컴포넌트 분리**: 큰 페이지를 여러 컴포넌트로 나누어 달라고 요청
4. **반응형 확인**: "모바일에서도 잘 보이도록 수정해줘" 추가 요청

복붙해서 사용하면 될 거야! 어떤 페이지부터 만들어볼까?
