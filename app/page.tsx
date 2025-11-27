'use client'
import { Navigation } from '@/components/navigation'
import { TypingAnimation } from '@/components/typing-animation'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import {
  Github,
  Mail,
  ExternalLink,
  Phone,
  GraduationCap,
  Trophy,
  Cpu,
  Target,
  Lightbulb,
  TrendingUp,
  Brain,
  Zap,
  Sparkles,
  Bot,
  Users,
  ArrowRight,
  Rocket,
  Code,
  Database,
} from 'lucide-react'
import Link from 'next/link'
import { useEffect } from 'react'

export function HomePageContent() {
  // API Base URL 환경변수 설정 (Runpod Serverless)
  const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:8000'
  
  // Runpod Serverless API 호출 함수 (챗봇 페이지와 동일)
  const callRunpodAPI = async (path: string, body: any) => {
    const response = await fetch(API_BASE_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.NEXT_PUBLIC_RUNPOD_API_KEY}`
      },
      body: JSON.stringify({
        input: {
          method: 'POST',
          path: path,
          headers: { 'Content-Type': 'application/json' },
          body: body
        }
      })
    })
    
    const data = await response.json()
    
    // Runpod Serverless 응답 구조 확인
    if (data.status === 'IN_QUEUE' || data.status === 'IN_PROGRESS') {
      throw new Error('Job이 아직 처리 중입니다. 잠시 후 다시 시도해주세요.')
    }
    
    // 응답 형식에 따라 처리
    if (data.output) {
      if (typeof data.output === 'object' && !data.output.body) {
        return {
          ok: true,
          json: () => Promise.resolve(data.output)
        }
      }
      if (data.output.body) {
        return {
          ok: data.output.status_code ? data.output.status_code < 400 : true,
          json: () => Promise.resolve(data.output.body)
        }
      }
    }
    
    if (data.error) {
      throw new Error(data.error)
    }
    
    throw new Error('Runpod API 응답 형식을 알 수 없습니다')
  }

  // 홈페이지 접속 시 백엔드 서버 깨우기
  useEffect(() => {
    const warmUpServer = async () => {
      console.log('🔥 백엔드 서버 warming up 시작...')
      
      try {
        await callRunpodAPI('/api/health', {})
        console.log('✅ 백엔드 서버 미리 깨웠음!')
      } catch (error) {
        console.log('⚠️ 백엔드 서버 깨우기 실패:', error)
        // 에러가 발생해도 사용자에게는 알리지 않음 (백그라운드 작업)
      }
    }

    warmUpServer()
  }, [])

  const techStack = [
    // 1줄: 핵심 빅데이터/DB 기술 (실제 사용) - 6개
    { name: 'PySpark', level: 85, icon: '⚡', slug: 'pyspark' },
    { name: 'PostgreSQL', level: 80, icon: '🐘', slug: 'postgresql' },
    { name: 'Redis', level: 75, icon: '💾', slug: 'redis' },
    { name: 'Qdrant', level: 80, icon: '🔍', slug: 'qdrant' },
    { name: 'LangGraph', level: 75, icon: '📊', slug: 'langgraph' },
    { name: 'Vector DB', level: 85, icon: '🗃️', slug: 'vector-db' },

    // 2줄: ML 알고리즘 & 데이터 처리 (실제 사용) - 5개
    { name: 'XGBoost', level: 80, icon: '🚀', slug: 'xgboost' },
    { name: 'LightGBM', level: 80, icon: '💡', slug: 'lightgbm' },
    { name: 'agent', level: 85, icon: '🤖', slug: 'agent' },
    { name: 'pandas', level: 90, icon: '🐼', slug: 'pandas' },
    { name: 'SVM', level: 75, icon: '🎯', slug: 'svm' },

    // 3줄: AI/LLM & ML 라이브러리 (실제 사용) - 6개
    { name: 'LangChain', level: 90, icon: '🔗', slug: 'langchain' },
    { name: 'RAG', level: 85, icon: '📚', slug: 'rag' },
    { name: 'LLM', level: 85, icon: '🤖', slug: 'llm' },
    { name: 'Fine-tuning', level: 80, icon: '🔧', slug: 'fine-tuning' },
    { name: 'OpenAI', level: 85, icon: '🧠', slug: 'openai' },
    { name: 'RandomForest', level: 85, icon: '🌲', slug: 'randomforest' },
  ]

  const projects = [
    {
      id: 1, // 추가
      title: 'AI 챗봇 포트폴리오',
      description: 'LangGraph 멀티 에이전트로 구축한 인터랙티브 포트폴리오',
      image: '/placeholder.svg?height=200&width=300',
      tech: ['Next.js', 'LangGraph', 'RAG', 'OpenAI'],
      achievements: ['실시간 GitHub 연동', '벡터 검색 최적화', '95% 정확도'],
      github: '#',
      demo: '#',
      status: 'Live',
      metrics: { stars: 42, views: '2.1k', commits: 156 },
      gradient: 'from-blue-500 to-purple-600',
    },
    {
      id: 2, // 추가
      title: '데이트 코스 추천 AI',
      description: 'PySpark로 20만→9만개 데이터 정제',
      description2: 'Qdrant 벡터DB 실시간 검색 최적화', 
      description3: 'LangChain 대화형 추천 시스템 구축',
      image: '/date.jpeg',
      tech: ['PySpark', 'LangChain', 'Qdrant'],
      achievements: [
        'PySpark로 20만→9만개 데이터 정제',
        '평균 300ms 실시간 추천 응답',
        '89,321개 장소 벡터 검색 최적화',
      ],
      github: '#',
      demo: '#',
      status: 'Featured',
      metrics: { stars: 24, views: '5.3k', commits: 203 },
      gradient: 'from-green-500 to-teal-600',
    },
    {
      id: 3, // 추가
      title: '보드게임 룰 챗봇',
      description: 'Fine-tuning으로 도메인 특화 성능 향상',
      description2: '217개 게임별 RAG 시스템 구축', 
      description3: '실시간 추천 & 룰 검색 최적화',
      image: '/보드게임.png',
      tech: ['Fine-tuning', 'RAG', 'FAISS'],
      achievements: [
        'EXAONE 파인튜닝으로 83.7% 정확도 달성',
        '217개 게임별 개별 벡터DB 구축',
        'QR코드 모바일 접속 지원',
        '실시간 Q-A 데이터 자동 축적'
      ],
      github: '#',
      demo: '/boardgame-chatbot',
      status: 'Completed',
      metrics: { stars: 18, views: '1.8k', commits: 127 },
      gradient: 'from-orange-500 to-red-500',
    },
    {
      id: 4,
      title: '신문 구독자 이탈 예측',
      description: 'RandomForest로 87% F1-Score 달성',
      description2: 'Faker 데이터 증강으로 불균형 해결', 
      description3: '8가지 ML 모델 체계적 비교',
      image: '/Newspaper.png',
      tech: ['RandomForest', 'Faker', 'Streamlit'],
      achievements: [
        'RandomForest 87% F1-Score 달성',
        'Faker로 클래스 불균형 완전 해결',
        'Streamlit 실시간 예측 대시보드',
      ],
      github: 'https://github.com/hwangjunho-sknetworks/SKN11-2nd-1Team',
      demo: '/newspaper-churn',
      status: 'Completed',
      metrics: { stars: 12, views: '0.9k', commits: 89 },
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      id: 5,
      title: '간호사 퇴사 예측',
      description: 'StratifiedKFold로 불균형 대응',
      description2: '1676→822→794명 데이터 정제', 
      description3: 'LogisticRegression F1-Score 0.76',
      image: '/퇴사여부분포.png',
      tech: ['LogisticRegression', 'StratifiedKFold', 'GridSearchCV'],
      achievements: [
        'LogisticRegression F1-Score 0.76',
        '체계적 데이터 정제 파이프라인',
        '의료기관 HR 전략 제안',
      ],
      github: 'https://github.com/hwangjunho-sknetworks/ML-1Team',
      demo: '/nurse-salary',
      status: 'Completed',
      metrics: { stars: 8, views: '0.7k', commits: 67 },
      gradient: 'from-cyan-500 to-blue-500',
    },
  ]

  return (
    <div className="scroll-smooth snap-y snap-mandatory overflow-y-auto h-screen">
      {/* Navigation */}
      <Navigation />

      {/* Hero Section - 풀스크린 */}
      <section className="min-h-screen snap-start flex items-center justify-center px-4 relative overflow-hidden" style={{ background: 'linear-gradient(to bottom right, #000000, #111827, #000000)' }}>
        {/* Hero Tech Grid Pattern */}
        <div className="absolute inset-0 opacity-40" style={{
          backgroundImage: `linear-gradient(rgba(59,130,246,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(59,130,246,0.03) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}></div>
        
        {/* Hero Tech Glow Effects */}
        <div className="absolute top-24 left-24 w-96 h-96 rounded-full filter blur-3xl animate-pulse" style={{ 
          background: 'linear-gradient(to right, rgba(59, 130, 246, 0.15), rgba(99, 152, 255, 0.15))',
          animationDuration: '4s'
        }}></div>
        
        <div className="absolute bottom-32 right-32 w-80 h-80 rounded-full filter blur-3xl animate-pulse" style={{ 
          background: 'linear-gradient(to right, rgba(59, 130, 246, 0.15), rgba(37, 99, 235, 0.15))',
          animationDuration: '3s',
          animationDelay: '1s'
        }}></div>
        
        <div className="absolute top-1/2 left-32 w-64 h-64 rounded-full filter blur-2xl animate-pulse" style={{ 
          background: 'linear-gradient(to right, rgba(59, 130, 246, 0.1), rgba(96, 165, 250, 0.1))',
          animationDuration: '5s',
          animationDelay: '2s'
        }}></div>

        <div className="max-w-6xl mx-auto relative">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            {/* Profile Image */}
            <div className="flex-shrink-0 relative">
              <div className="w-64 h-80 rounded-3xl overflow-hidden bg-white shadow-2xl relative border border-gray-300">
                <img
                  src="/profile.jpg"
                  alt="황준호 프로필"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full animate-bounce shadow-lg shadow-blue-500/50"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-gradient-to-r from-gray-600 to-gray-700 rounded-full animate-bounce delay-300 shadow-lg shadow-gray-600/50"></div>
            </div>

            {/* Main Content */}
            <div className="flex-1 text-center lg:text-left">

              <h1 className="text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
                <TypingAnimation 
                  text="AI Engineer" 
                  className="text-blue-400"
                  speed={150}
                />
                <br />
                <span className="text-white">
                  황준호
                </span>
              </h1>

              <p className="text-xl lg:text-2xl text-gray-300 mb-8 leading-relaxed">
                <span className="text-blue-400 font-semibold">복잡함</span>을{' '}
                <span className="text-blue-400 font-semibold">단순함</span>으로,{' '}
                <span className="text-blue-400 font-semibold">호기심</span>을{' '}
                <span className="text-blue-400 font-semibold">실력</span>으로
                <br />
                <strong className="text-white">바꾸는 AI Engineer</strong>
              </p>

              <div className="flex flex-wrap justify-center lg:justify-start gap-3 mb-8">
                <Badge style={{ background: 'rgb(31 41 55)' }} className="text-blue-400 border border-gray-700 hover:bg-gray-700 transition-colors">
                  추천 시스템 구축
                </Badge>
                <Badge style={{ background: 'rgb(31 41 55)' }} className="text-green-400 border border-gray-700 hover:bg-gray-700 transition-colors">
                  지능형 챗봇 개발
                </Badge>
                <Badge style={{ background: 'rgb(31 41 55)' }} className="text-purple-400 border border-gray-700 hover:bg-gray-700 transition-colors">
                  RAG 시스템 구축
                </Badge>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link href="/chatbot">
                  <Button
                    size="lg"
                    className="bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl hover:shadow-blue-500/25 transition-all duration-200 transform hover:scale-105"
                  >
                    <Bot className="w-5 h-5 mr-2" />
                    제가 개발한 AI 챗봇으로 저에 대해 질문해보세요
                  </Button>
                </Link>
                <Link href="/projects">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-2 border-blue-500 text-blue-300 hover:bg-blue-900/30 hover:border-blue-400 hover:text-white px-8 py-4 text-lg rounded-xl transition-all duration-200 transform hover:scale-105"
                  >
                    프로젝트 보기
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        
        {/* AI 포트폴리오 체험 가이드 - 일자로 */}
        <div className="absolute bottom-44 left-1/2 transform -translate-x-1/2 text-center">
          <h3 className="text-xl font-bold text-blue-400 mb-6 flex items-center justify-center">
            <Bot className="w-5 h-5 mr-2" />
            AI 포트폴리오 사용 가이드
          </h3>
          <div className="flex items-center gap-6 text-sm">
            <div className="flex items-center gap-2">
              <span className="w-5 h-5 bg-blue-600 text-white rounded-full flex items-center justify-center text-xs font-semibold">1</span>
              <div className="text-left">
                <span className="text-white block">AI 채팅 시작하기</span>
                <span className="text-gray-400 text-xs">위 버튼 클릭해서 채팅방 입장</span>
              </div>
              <ArrowRight className="w-3 h-3 text-gray-400" />
            </div>
            <div className="flex items-center gap-2">
              <span className="w-5 h-5 bg-blue-600 text-white rounded-full flex items-center justify-center text-xs font-semibold">2</span>
              <div className="text-left">
                <span className="text-white block">회사 선택</span>
                <span className="text-gray-400 text-xs">귀하의 회사를 선택해주세요</span>
              </div>
              <ArrowRight className="w-3 h-3 text-gray-400" />
            </div>
            <div className="flex items-center gap-2">
              <span className="w-5 h-5 bg-blue-600 text-white rounded-full flex items-center justify-center text-xs font-semibold">3</span>
              <div className="text-left">
                <span className="text-white block">맞춤 포트폴리오 확인</span>
                <span className="text-gray-400 text-xs">회사에 맞춘 포트폴리오를 확인하세요</span>
              </div>
              <ArrowRight className="w-3 h-3 text-gray-400" />
            </div>
            <div className="flex items-center gap-2">
              <span className="w-5 h-5 bg-blue-600 text-white rounded-full flex items-center justify-center text-xs font-semibold">4</span>
              <div className="text-left">
                <span className="text-white block">자유롭게 질문</span>
                <span className="text-gray-400 text-xs">저에 대해 궁금한 점을 질문하세요</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-gray-300 animate-bounce">
          <span className="text-sm mb-2 font-medium tracking-wide">아래로 스크롤하여 프로젝트 보기</span>
          <div className="w-6 h-10 border-2 border-gray-600 rounded-full flex justify-center">
            <div className="w-1 h-2 bg-gray-300 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Wave 구분선 */}
      <div className="relative h-24 overflow-hidden" style={{ background: 'linear-gradient(to bottom right, #111827, #000000, #111827)' }}>
        <svg className="absolute bottom-0 w-full h-24" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path className="opacity-25" fill="rgba(37, 99, 235, 0.2)" d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"></path>
          <path className="opacity-50" fill="rgba(37, 99, 235, 0.3)" d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"></path>
          <path fill="rgba(37, 99, 235, 0.4)" d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"></path>
        </svg>
      </div>

      {/* Featured Projects Section - 풀스크린 */}
      <section className="min-h-screen snap-start flex items-center justify-center py-20 px-4 relative" style={{ background: 'linear-gradient(to bottom right, #111827, #000000, #111827)' }}>
        {/* Stats 패턴 오버레이 */}
        <div className="absolute inset-0 opacity-30" style={{
          background: 'radial-gradient(circle at 1px 1px, rgba(59,130,246,0.05) 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }}></div>
        <div className="max-w-full px-8 mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              주요 프로젝트
            </h2>
            <p className="text-xl text-gray-300">
              복잡한 비즈니스 문제를 AI로 해결한 실무 프로젝트
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-12">
            {/* Project 1 - AI 챗봇 포트폴리오 */}
            <Link href="/ai-chatbot-portfolio" className="block h-full group">
              <Card style={{ background: 'rgb(17 24 39)', border: '1px solid rgb(31 41 55)' }} className="h-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-3 cursor-pointer">
                <div className="relative rounded-t-2xl overflow-hidden">
                  <img
                    src="/portfoio.png"
                    alt="AI 챗봇 포트폴리오 스크린샷"
                    className="w-full h-64 object-cover"
                  />
                </div>
                <CardContent className="p-8 relative">
                  <h3 className="text-2xl font-bold text-white mb-4">
                    AI 챗봇 포트폴리오
                  </h3>
                  <div className="text-gray-300 mb-6 text-base leading-relaxed space-y-1">
                    <div><strong className="text-blue-400">Multi-Agent</strong> 시스템으로 전문 분야별 답변</div>
                    <div><strong className="text-green-400">LangGraph</strong> 조건부 라우팅 워크플로우</div>
                    <div><strong className="text-purple-400">실시간 대화형</strong> AI 포트폴리오 구축</div>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    <Badge style={{ background: 'rgb(31 41 55)' }} className="text-blue-400 text-sm px-3 py-1 border border-gray-700">Multi-Agent</Badge>
                    <Badge style={{ background: 'rgb(31 41 55)' }} className="text-green-400 text-sm px-3 py-1 border border-gray-700">LangGraph</Badge>
                    <Badge style={{ background: 'rgb(31 41 55)' }} className="text-purple-400 text-sm px-3 py-1 border border-gray-700">FastAPI</Badge>
                  </div>

                  {/* 화살표 아이콘 */}
                  <div className="absolute bottom-6 right-6">
                    <div className="w-8 h-8 bg-blue-500/20 rounded-full flex items-center justify-center group-hover:bg-blue-500/30 transition-all duration-300">
                      <ArrowRight className="w-4 h-4 text-blue-400 group-hover:text-blue-300 group-hover:translate-x-0.5 transition-all duration-300" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>

            {/* Project 2 - 데이트 코스 추천 */}
            <Link href="/date-recommendation" className="block h-full group">
              <Card style={{ background: 'rgb(17 24 39)', border: '1px solid rgb(31 41 55)' }} className="h-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-3 cursor-pointer">
                <div className="relative rounded-t-2xl overflow-hidden">
                  <img
                    src="/date.jpeg"
                    alt="데이트 코스 추천 AI 스크린샷"
                    className="w-full h-64 object-cover"
                  />
                </div>
                <CardContent className="p-8 relative">
                  <h3 className="text-2xl font-bold text-white mb-4">
                    데이트 코스 추천 AI
                  </h3>
                  <div className="text-gray-300 mb-6 text-base leading-relaxed space-y-1">
                    <div><strong className="text-green-400">PySpark</strong>로 20만→9만개 데이터 정제</div>
                    <div><strong className="text-blue-400">Qdrant 벡터DB</strong> 실시간 검색 최적화</div>
                    <div><strong className="text-purple-400">LangChain</strong> 대화형 추천 시스템 구축</div>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    <Badge style={{ background: 'rgb(31 41 55)' }} className="text-green-400 text-sm px-3 py-1 border border-gray-700">PySpark</Badge>
                    <Badge style={{ background: 'rgb(31 41 55)' }} className="text-blue-400 text-sm px-3 py-1 border border-gray-700">Qdrant</Badge>
                    <Badge style={{ background: 'rgb(31 41 55)' }} className="text-purple-400 text-sm px-3 py-1 border border-gray-700">LangChain</Badge>
                  </div>

                  {/* 화살표 아이콘 */}
                  <div className="absolute bottom-6 right-6">
                    <div className="w-8 h-8 bg-blue-500/20 rounded-full flex items-center justify-center group-hover:bg-blue-500/30 transition-all duration-300">
                      <ArrowRight className="w-4 h-4 text-blue-400 group-hover:text-blue-300 group-hover:translate-x-0.5 transition-all duration-300" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>

            {/* Project 3 - 보드게임 룰 챗봇 */}
            <Link href="/boardgame-chatbot" className="block h-full group">
              <Card style={{ background: 'rgb(17 24 39)', border: '1px solid rgb(31 41 55)' }} className="h-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-3 cursor-pointer">
                <div className="relative rounded-t-2xl overflow-hidden">
                  <img
                    src="/보드게임.png"
                    alt="보드게임 룰 챗봇 스크린샷"
                    className="w-full h-64 object-cover"
                  />
                </div>
                <CardContent className="p-8 relative">
                  <h3 className="text-2xl font-bold text-white mb-4">
                    보드게임 룰 챗봇
                  </h3>
                  <div className="text-gray-300 mb-6 text-base leading-relaxed space-y-1">
                    <div><strong className="text-green-400">Fine-tuning</strong>으로 도메인 특화 성능 향상</div>
                    <div><strong className="text-blue-400">217개 게임별 RAG 시스템</strong> 구축</div>
                    <div><strong className="text-purple-400">실시간 추천 & 룰 검색</strong> 최적화</div>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    <Badge style={{ background: 'rgb(31 41 55)' }} className="text-green-400 text-sm px-3 py-1 border border-gray-700">Fine-tuning</Badge>
                    <Badge style={{ background: 'rgb(31 41 55)' }} className="text-blue-400 text-sm px-3 py-1 border border-gray-700">RAG</Badge>
                    <Badge style={{ background: 'rgb(31 41 55)' }} className="text-purple-400 text-sm px-3 py-1 border border-gray-700">AWS EC2</Badge>
                  </div>

                  {/* 화살표 아이콘 */}
                  <div className="absolute bottom-6 right-6">
                    <div className="w-8 h-8 bg-blue-500/20 rounded-full flex items-center justify-center group-hover:bg-blue-500/30 transition-all duration-300">
                      <ArrowRight className="w-4 h-4 text-blue-400 group-hover:text-blue-300 group-hover:translate-x-0.5 transition-all duration-300" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>

          </div>

          {/* 3번째 박스 아래 모든 프로젝트 보러가기 버튼 */}
          <div className="grid lg:grid-cols-3 gap-12 mt-8">
            <div></div>
            <div></div>
            <div className="flex justify-end">
              <Link href="/projects" className="z-10 relative">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-blue-400 text-blue-400 hover:bg-blue-900/30 hover:border-blue-300 hover:text-white px-8 py-4 text-lg rounded-xl transition-all duration-200 transform hover:scale-105 cursor-pointer"
                >
                  모든 프로젝트 보기
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-gray-300 animate-bounce">
          <span className="text-sm mb-2 font-medium tracking-wide">기술 스택 보기</span>
          <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
            <div className="w-1 h-2 bg-gray-300 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Dots 구분선 */}
      <div className="relative h-16 flex items-center justify-center" style={{ background: 'linear-gradient(to bottom right, #111827, #000000, #111827)' }}>
        <div className="flex items-center gap-4">
          <div className="w-3 h-3 rounded-full animate-pulse" style={{ background: 'linear-gradient(to right, #3b82f6, #8b5cf6)', animationDelay: '0s' }}></div>
          <div className="w-3 h-3 rounded-full animate-pulse" style={{ background: 'linear-gradient(to right, #3b82f6, #8b5cf6)', animationDelay: '0.2s' }}></div>
          <div className="w-4 h-4 rounded-full animate-pulse" style={{ background: 'linear-gradient(to right, #3b82f6, #8b5cf6)', animationDelay: '0.4s' }}></div>
          <div className="w-3 h-3 rounded-full animate-pulse" style={{ background: 'linear-gradient(to right, #3b82f6, #8b5cf6)', animationDelay: '0.6s' }}></div>
          <div className="w-3 h-3 rounded-full animate-pulse" style={{ background: 'linear-gradient(to right, #3b82f6, #8b5cf6)', animationDelay: '0.8s' }}></div>
        </div>
      </div>

      {/* Tech Stack Section - 풀스크린 */}
      <section className="min-h-screen snap-start flex items-center justify-center py-20 px-4 relative" style={{ background: 'linear-gradient(to bottom right, #111827, #000000, #111827)' }}>
        {/* About 글로우 효과 */}
        <div className="absolute top-20 left-20 w-96 h-96 rounded-full filter blur-3xl" style={{ background: 'linear-gradient(to right, rgba(37, 99, 235, 0.1), rgba(147, 51, 234, 0.1))' }}></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 rounded-full filter blur-3xl" style={{ background: 'linear-gradient(to right, rgba(147, 51, 234, 0.1), rgba(236, 72, 153, 0.1))' }}></div>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">기술 스택</h2>
            <p className="text-xl text-gray-300">
              AI 전문 분야를 중심으로 한 기술 역량을 소개합니다
            </p>
          </div>

          {/* 기술 카드 그리드 - 벽돌식 지그재그 레이아웃 (전체 너비) */}
          <div className="space-y-4 w-full">
            {/* 1줄: AI/ML 핵심 (6개) */}
            <div className="grid grid-cols-6 gap-3">
              {techStack.slice(0, 6).map((tech, index) => (
                <Link key={tech.slug} href={`/skills/${tech.slug}`}>
                  <Card style={{ background: 'rgb(17 24 39)', border: '1px solid rgb(31 41 55)' }} className="h-16 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-105 cursor-pointer group relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <CardContent className="p-3 h-full flex items-center gap-3 relative z-10">
                      <div className="text-2xl group-hover:scale-110 transition-transform duration-300">
                        {tech.icon}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="text-sm font-bold text-white leading-tight truncate">
                          {tech.name}
                        </div>
                      </div>
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <ArrowRight className="w-4 h-4 text-purple-400" />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>

            {/* 2줄: AI 백엔드 + 고급 프론트 (5개) - 반칸씩 밀어서 벽돌식 */}
            <div className="grid grid-cols-12 gap-3">
              <div className="col-span-1"></div>
              {techStack.slice(6, 11).map((tech, index) => (
                <Link
                  key={tech.slug}
                  href={`/skills/${tech.slug}`}
                  className="col-span-2"
                >
                  <Card style={{ background: 'rgb(17 24 39)', border: '1px solid rgb(31 41 55)' }} className="h-16 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-105 cursor-pointer group relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <CardContent className="p-3 h-full flex items-center gap-3 relative z-10">
                      <div className="text-2xl group-hover:scale-110 transition-transform duration-300">
                        {tech.icon}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="text-sm font-bold text-white leading-tight truncate">
                          {tech.name}
                        </div>
                      </div>
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <ArrowRight className="w-4 h-4 text-blue-400" />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
              <div className="col-span-1"></div>
            </div>

            {/* 3줄: 나머지 개발 스택 (6개) - 첫번째줄과 맞춤 */}
            <div className="grid grid-cols-6 gap-3">
              {techStack.slice(11, 17).map((tech, index) => (
                <Link key={tech.slug} href={`/skills/${tech.slug}`}>
                  <Card style={{ background: 'rgb(17 24 39)', border: '1px solid rgb(31 41 55)' }} className="h-16 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-105 cursor-pointer group relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-green-500/20 to-teal-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <CardContent className="p-3 h-full flex items-center gap-3 relative z-10">
                      <div className="text-2xl group-hover:scale-110 transition-transform duration-300">
                        {tech.icon}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="text-sm font-bold text-white leading-tight truncate">
                          {tech.name}
                        </div>
                      </div>
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <ArrowRight className="w-4 h-4 text-green-400" />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>

          {/* 더 많은 기술 보기 버튼 */}
          <div className="text-center mt-12">
            <Link href="/skills">
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-blue-500 text-blue-300 hover:bg-blue-900/30 hover:border-blue-400 hover:text-white px-8 py-4 text-lg rounded-xl transition-all duration-200 transform hover:scale-105"
              >
                모든 기술 스택 보기
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-gray-300 animate-bounce">
          <span className="text-sm mb-2 font-medium tracking-wide">개발자 소개 보기</span>
          <div className="w-6 h-10 border-2 border-gray-600 rounded-full flex justify-center">
            <div className="w-1 h-2 bg-gray-300 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Default 구분선 */}
      <div className="relative h-16 flex items-center justify-center" style={{ background: 'linear-gradient(to bottom right, #111827, #000000, #111827)' }}>
        <div className="w-full max-w-72 h-px opacity-50" style={{ background: 'linear-gradient(to right, transparent, #3b82f6, transparent)' }}></div>
        <div className="absolute w-2 h-2 bg-blue-600 rounded-full animate-pulse" style={{
          animation: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite'
        }}></div>
      </div>

      {/* About Me Section - TOP 5 핵심 콘텐츠 */}
      <section className="min-h-screen snap-start flex items-center justify-center py-20 px-4 relative" style={{ background: 'linear-gradient(to bottom right, #000000, #111827, #000000)' }}>
        {/* Projects 네온 그리드 패턴 */}
        <div className="absolute inset-0 opacity-40" style={{
          background: `linear-gradient(rgba(59,130,246,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(59,130,246,0.03) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}></div>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
            <p className="text-xl text-gray-300">AI/ML 엔지니어로서의 핵심 가치관과 강점</p>
          </div>

          {/* 1. 핵심 가치관 & 개발 철학 */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-white mb-8 text-center">💡 핵심 가치관 & 개발 철학</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-gray-800/80 backdrop-blur-sm border border-gray-600/50 rounded-xl p-6">
                <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mb-4">
                  <Brain className="w-6 h-6 text-blue-400" />
                </div>
                <h4 className="text-lg font-semibold text-cyan-400 mb-3">왜 AI/ML 엔지니어가 되었나요?</h4>
                <p className="text-gray-300 text-sm leading-relaxed">임베디드부터 IoT, 컴퓨터 네트워크까지 다양하게 공부할 때 가장 큰 도움을 준 것이 GPT였습니다. AI가 미래의 핵심 기술이라 확신하고 본격적으로 공부했더니 저와 너무 잘 맞았고, 그동안 배운 모든 지식들과 시너지를 내며 더 큰 가치를 만들 수 있었습니다.</p>
              </div>
              <div className="bg-gray-800/80 backdrop-blur-sm border border-gray-600/50 rounded-xl p-6">
                <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center mb-4">
                  <Target className="w-6 h-6 text-green-400" />
                </div>
                <h4 className="text-lg font-semibold text-cyan-400 mb-3">어떤 개발자가 되고 싶나요?</h4>
                <p className="text-gray-300 text-sm leading-relaxed">요즘 기업들은 여러 명의 평범한 개발자보다 한 명의 확실한 개발자를 원합니다. AI/ML이라는 한 분야에서 깊은 전문성을 갖추면서, 다른 분야도 폭넓게 이해하는 'T자형 개발자'가 되고 싶습니다.</p>
              </div>
              <div className="bg-gray-800/80 backdrop-blur-sm border border-gray-600/50 rounded-xl p-6">
                <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center mb-4">
                  <TrendingUp className="w-6 h-6 text-purple-400" />
                </div>
                <h4 className="text-lg font-semibold text-cyan-400 mb-3">일할 때 중요하게 생각하는 것은?</h4>
                <p className="text-gray-300 text-sm leading-relaxed">새로운 도전을 두려워하지 않는 것입니다. 무엇보다 문제를 명확히 정의하고 체계적으로 해결하는 능력이 뛰어난 성과의 핵심이라고 믿습니다. 데이터를 꼼꼼하게 정제하고, 품질을 검증하는 과정이 모델 성능의 90%를 좌우한다고 생각합니다.</p>
              </div>
            </div>
          </div>


          {/* 모든 소개 보러가기 버튼 */}
          <div className="text-center relative z-20">
            <Link href="/about">
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-blue-500 text-blue-300 hover:bg-blue-900/30 hover:border-blue-400 hover:text-white px-8 py-4 text-lg rounded-xl transition-all duration-200 transform hover:scale-105 relative z-20"
              >
                모든 소개 보러가기
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-gray-300 animate-bounce">
          <span className="text-sm mb-2 font-medium tracking-wide">학력 및 경험 보기</span>
          <div className="w-6 h-10 border-2 border-gray-600 rounded-full flex justify-center">
            <div className="w-1 h-2 bg-gray-300 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Default 구분선 */}
      <div className="relative h-16 flex items-center justify-center" style={{ background: 'linear-gradient(to bottom right, #000000, #111827, #000000)' }}>
        <div className="w-full max-w-72 h-px opacity-50" style={{ background: 'linear-gradient(to right, transparent, #3b82f6, transparent)' }}></div>
        <div className="absolute w-2 h-2 bg-blue-600 rounded-full animate-pulse" style={{
          animation: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite'
        }}></div>
      </div>

      {/* Education & Activities - 간단하고 고급스럽게 */}
      <section className="min-h-screen snap-start flex items-center justify-center py-20 px-4 relative" style={{ background: 'linear-gradient(to bottom right, #111827, #000000, #111827)' }}>
        {/* Education 패턴 오버레이 */}
        <div className="absolute inset-0 opacity-30" style={{
          background: `linear-gradient(rgba(59,130,246,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(59,130,246,0.03) 1px, transparent 1px)`,
          backgroundSize: '45px 45px'
        }}></div>
        <div className="max-w-4xl mx-auto relative">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">학력 및 대외활동</h2>
            <p className="text-xl text-gray-300">교육 배경과 주요 활동</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* 학력 */}
            <div className="bg-gray-800/80 backdrop-blur-sm border border-gray-600/50 rounded-xl p-10 shadow-2xl">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center">
                  <GraduationCap className="w-7 h-7 text-blue-400" />
                </div>
                <h3 className="text-2xl font-bold text-white">학력</h3>
              </div>
              <div className="space-y-6">
                <div className="border-l-4 border-blue-500 pl-4">
                  <h4 className="font-bold text-lg text-white mb-1">한국항공대학교</h4>
                  <p className="text-blue-400 font-medium mb-2">소프트웨어학과 (4-1 휴학중)</p>
                  <p className="text-gray-400 text-sm">2022 - 현재</p>
                </div>
                <div className="border-l-4 border-green-500 pl-4">
                  <h4 className="font-bold text-lg text-white mb-1">하노이한국국제학교</h4>
                  <p className="text-green-400 font-medium mb-2">고등학교 졸업</p>
                  <p className="text-gray-400 text-sm">2018 - 2021</p>
                </div>
              </div>
            </div>

            {/* 대외활동 */}
            <div className="bg-gray-800/80 backdrop-blur-sm border border-gray-600/50 rounded-xl p-10 shadow-2xl">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center">
                  <Trophy className="w-7 h-7 text-purple-400" />
                </div>
                <h3 className="text-2xl font-bold text-white">대외활동</h3>
              </div>
              <div className="space-y-6">
                <div className="border-l-4 border-red-500 pl-4">
                  <h4 className="font-bold text-lg text-white mb-1">SK Networks Family AI Camp 11기</h4>
                  <p className="text-red-400 font-medium mb-2">AI 개발 교육</p>
                  <p className="text-gray-400 text-sm">2024.02-07</p>
                </div>
                <div className="border-l-4 border-green-500 pl-4">
                  <h4 className="font-bold text-lg text-white mb-1">부학생회장</h4>
                  <p className="text-green-400 font-medium mb-2">한국항공대학교 소프트웨어학과</p>
                  <p className="text-gray-400 text-sm">2023.12-2024.11</p>
                </div>
                <div className="border-l-4 border-blue-500 pl-4">
                  <h4 className="font-bold text-lg text-white mb-1">해커톤 운영진</h4>
                  <p className="text-blue-400 font-medium mb-2">기술 이벤트 기획 및 운영</p>
                  <p className="text-gray-400 text-sm">2023.04-05</p>
                </div>
                <div className="border-l-4 border-purple-500 pl-4">
                  <h4 className="font-bold text-lg text-white mb-1">E-commerce 사업 운영</h4>
                  <p className="text-purple-400 font-medium mb-2">온라인 플랫폼 셀러 경험</p>
                  <p className="text-gray-400 text-sm">2023.08</p>
                </div>
              </div>
            </div>
          </div>

          {/* 모든 대외활동 보기 버튼 */}
          <div className="text-center mt-12">
            <Link href="/about#activities">
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-blue-500 text-blue-300 hover:bg-blue-900/30 hover:border-blue-400 hover:text-white px-8 py-4 text-lg rounded-xl transition-all duration-200 transform hover:scale-105"
              >
                모든 대외활동 보기
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-gray-300 animate-bounce">
          <span className="text-sm mb-2 font-medium tracking-wide">연락처 보기</span>
          <div className="w-6 h-10 border-2 border-gray-600 rounded-full flex justify-center">
            <div className="w-1 h-2 bg-gray-300 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Dots 구분선 */}
      <div className="relative h-16 flex items-center justify-center" style={{ background: 'linear-gradient(to bottom right, #111827, #000000, #111827)' }}>
        <div className="flex items-center gap-4">
          <div className="w-3 h-3 rounded-full animate-pulse" style={{ background: 'linear-gradient(to right, #3b82f6, #8b5cf6)', animationDelay: '0s' }}></div>
          <div className="w-3 h-3 rounded-full animate-pulse" style={{ background: 'linear-gradient(to right, #3b82f6, #8b5cf6)', animationDelay: '0.2s' }}></div>
          <div className="w-4 h-4 rounded-full animate-pulse" style={{ background: 'linear-gradient(to right, #3b82f6, #8b5cf6)', animationDelay: '0.4s' }}></div>
          <div className="w-3 h-3 rounded-full animate-pulse" style={{ background: 'linear-gradient(to right, #3b82f6, #8b5cf6)', animationDelay: '0.6s' }}></div>
          <div className="w-3 h-3 rounded-full animate-pulse" style={{ background: 'linear-gradient(to right, #3b82f6, #8b5cf6)', animationDelay: '0.8s' }}></div>
        </div>
      </div>

      {/* Contact Section */}
      <section className="min-h-screen snap-start flex items-center justify-center px-4 relative" style={{ background: 'linear-gradient(to bottom right, #000000, #111827, #000000)' }}>
        {/* Contact 글로우 효과 */}
        <div className="absolute top-20 left-20 w-80 h-80 rounded-full filter blur-3xl" style={{ background: 'linear-gradient(to right, rgba(59, 130, 246, 0.1), rgba(37, 99, 235, 0.1))' }}></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 rounded-full filter blur-3xl" style={{ background: 'linear-gradient(to right, rgba(37, 99, 235, 0.1), rgba(59, 130, 246, 0.1))' }}></div>
        <div className="max-w-4xl mx-auto text-center relative py-20">
          <h2 className="text-4xl font-bold mb-4 text-white">연락하기</h2>
          <p className="text-xl text-gray-300 mb-16">
            언제든지 편하게 연락주세요
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            <a
              href="https://github.com/junoaplus"
              target="_blank"
              rel="noopener noreferrer"
              style={{ background: 'rgb(17 24 39)', border: '1px solid rgb(31 41 55)' }}
              className="flex flex-col items-center p-8 backdrop-blur-sm rounded-2xl hover:shadow-xl transition-all duration-300 group transform hover:-translate-y-2"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-gray-700 to-gray-800 rounded-2xl flex items-center justify-center mb-4 group-hover:from-gray-600 group-hover:to-gray-700 transition-all duration-300">
                <Github className="w-8 h-8 text-white" />
              </div>
              <div className="font-bold text-lg text-white mb-2">GitHub</div>
              <div className="text-sm text-gray-400">
                github.com/junoaplus
              </div>
            </a>

            <div
              style={{ background: 'rgb(17 24 39)', border: '1px solid rgb(31 41 55)' }}
              className="flex flex-col items-center p-8 backdrop-blur-sm rounded-2xl hover:shadow-xl transition-all duration-300 group transform hover:-translate-y-2"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center mb-4 group-hover:from-blue-500 group-hover:to-purple-500 transition-all duration-300">
                <Mail className="w-8 h-8 text-white" />
              </div>
              <div className="font-bold text-lg text-white mb-2">Email</div>
              <div className="text-sm text-gray-400 mb-3">junehoo4248@naver.com</div>
              <Button
                onClick={() => navigator.clipboard.writeText('junehoo4248@naver.com')}
                size="sm"
                className="bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 text-sm rounded-lg transition-colors"
              >
                복사하기
              </Button>
            </div>

            <div
              style={{ background: 'rgb(17 24 39)', border: '1px solid rgb(31 41 55)' }}
              className="flex flex-col items-center p-8 backdrop-blur-sm rounded-2xl hover:shadow-xl transition-all duration-300 group transform hover:-translate-y-2"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-green-600 to-teal-600 rounded-2xl flex items-center justify-center mb-4 group-hover:from-green-500 group-hover:to-teal-500 transition-all duration-300">
                <Phone className="w-8 h-8 text-white" />
              </div>
              <div className="font-bold text-lg text-white mb-2">Phone</div>
              <div className="text-sm text-gray-400 mb-3">010-2125-4247</div>
              <Button
                onClick={() => navigator.clipboard.writeText('010-2125-4247')}
                size="sm"
                className="bg-green-600 hover:bg-green-500 text-white px-4 py-2 text-sm rounded-lg transition-colors"
              >
                복사하기
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-gray-700" style={{ background: 'rgb(0 0 0)' }}>
        <div className="max-w-6xl mx-auto text-center text-gray-400">
          <p>&copy; 2025 황준호. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

export default function HomePage() {
  return <HomePageContent />
}
