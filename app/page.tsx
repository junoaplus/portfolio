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

export default function HomePage() {
  const techStack = [
    // 1줄: 토스 핵심 빅데이터/DB 기술 (실제 사용) - 6개
    { name: 'PySpark', level: 85, icon: '⚡', slug: 'pyspark' },
    { name: 'PostgreSQL', level: 80, icon: '🐘', slug: 'postgresql' },
    { name: 'Redis', level: 75, icon: '💾', slug: 'redis' },
    { name: 'Qdrant', level: 80, icon: '🔍', slug: 'qdrant' },
    { name: 'FAISS', level: 75, icon: '🎯', slug: 'faiss' },
    { name: 'Vector DB', level: 85, icon: '🗃️', slug: 'vector-db' },

    // 2줄: ML 알고리즘 & 데이터 처리 (실제 사용) - 5개
    { name: 'XGBoost', level: 80, icon: '🚀', slug: 'xgboost' },
    { name: 'LightGBM', level: 80, icon: '💡', slug: 'lightgbm' },
    { name: 'RandomForest', level: 85, icon: '🌲', slug: 'randomforest' },
    { name: 'pandas', level: 90, icon: '🐼', slug: 'pandas' },
    { name: 'SVM', level: 75, icon: '🎯', slug: 'svm' },

    // 3줄: AI/LLM & ML 라이브러리 (실제 사용) - 6개
    { name: 'LangChain', level: 90, icon: '🔗', slug: 'langchain' },
    { name: 'RAG', level: 85, icon: '📚', slug: 'rag' },
    { name: 'LLM', level: 85, icon: '🤖', slug: 'llm' },
    { name: 'Fine-tuning', level: 80, icon: '🔧', slug: 'fine-tuning' },
    { name: 'OpenAI', level: 85, icon: '🧠', slug: 'openai' },
    { name: 'scikit-learn', level: 85, icon: '🔬', slug: 'scikit-learn' },
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
            <Link href="/projects/1" className="block h-full">
              <Card style={{ background: 'rgb(17 24 39)', border: '1px solid rgb(31 41 55)' }} className="h-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-3 cursor-pointer">
                <div className="relative rounded-t-2xl overflow-hidden">
                  <img
                    src="/placeholder.svg?height=320&width=500"
                    alt="AI 챗봇 포트폴리오 스크린샷"
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent"></div>
                  <Badge style={{ background: 'rgb(37 99 235)' }} className="absolute top-6 left-6 text-white text-sm px-3 py-1">Live Service</Badge>
                </div>
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-white mb-4">
                    AI 챗봇 포트폴리오
                  </h3>
                  <p className="text-gray-300 mb-6 text-base leading-relaxed">
                    <strong className="text-blue-400">실시간으로 내 경험을 답변</strong>하는 지능형 포트폴리오
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    <Badge style={{ background: 'rgb(31 41 55)' }} className="text-blue-400 text-sm px-3 py-1 border border-gray-700">LangGraph</Badge>
                    <Badge style={{ background: 'rgb(31 41 55)' }} className="text-green-400 text-sm px-3 py-1 border border-gray-700">RAG</Badge>
                    <Badge style={{ background: 'rgb(31 41 55)' }} className="text-purple-400 text-sm px-3 py-1 border border-gray-700">Next.js</Badge>
                  </div>

                </CardContent>
              </Card>
            </Link>

            {/* Project 2 - 데이트 코스 추천 */}
            <Link href="/projects/2" className="block h-full group">
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
                className="border-2 border-purple-500 text-purple-300 hover:bg-purple-900/30 hover:border-purple-400 hover:text-white px-8 py-4 text-lg rounded-xl transition-all duration-200 transform hover:scale-105"
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

      {/* About Me Section - 풀스크린 */}
      <section className="min-h-screen snap-start flex items-center justify-center py-20 px-4 relative" style={{ background: 'linear-gradient(to bottom right, #000000, #111827, #000000)' }}>
        {/* Projects 네온 그리드 패턴 */}
        <div className="absolute inset-0 opacity-40" style={{
          background: `linear-gradient(rgba(59,130,246,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(59,130,246,0.03) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}></div>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-16">About Me</h2>

          <div className="grid md:grid-cols-3 gap-8">
            {/* 문제 해결 능력 */}
            <div className="flex flex-col items-center p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2" style={{ background: 'rgb(17 24 39)', border: '1px solid rgb(31 41 55)' }}>
              <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6" style={{ background: 'rgb(37 99 235)' }}>
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">문제 해결</h3>
              <p className="text-gray-300 leading-relaxed">
                복잡한 비즈니스 문제를 <strong className="text-blue-400">AI로 단순하게</strong> 해결합니다
              </p>
            </div>

            {/* 빠른 학습 능력 */}
            <div className="flex flex-col items-center p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2" style={{ background: 'rgb(17 24 39)', border: '1px solid rgb(31 41 55)' }}>
              <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6" style={{ background: 'rgb(5 150 105)' }}>
                <Brain className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">빠른 학습</h3>
              <p className="text-gray-300 leading-relaxed">
                새로운 기술의 <strong className="text-green-400">본질을 파악</strong>하고 실무에 빠르게 적용합니다
              </p>
            </div>

            {/* 실무 중심 */}
            <div className="flex flex-col items-center p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2" style={{ background: 'rgb(17 24 39)', border: '1px solid rgb(31 41 55)' }}>
              <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6" style={{ background: 'rgb(147 51 234)' }}>
                <Rocket className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">실무 중심</h3>
              <p className="text-gray-300 leading-relaxed">
                이론이 아닌 <strong className="text-purple-400">실제 동작하는 서비스</strong>를 만듭니다
              </p>
            </div>
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

      {/* Education & Activities - 박스 크기 맞추기 */}
      <section className="min-h-screen snap-start py-20 px-4 relative" style={{ background: 'linear-gradient(to bottom right, #111827, #000000, #111827)' }}>
        {/* Education 패턴 오버레이 */}
        <div className="absolute inset-0 opacity-30" style={{
          background: `linear-gradient(rgba(59,130,246,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(59,130,246,0.03) 1px, transparent 1px)`,
          backgroundSize: '45px 45px'
        }}></div>
        <div className="max-w-6xl mx-auto relative">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              학력 & 경험
            </h2>
            <p className="text-xl text-gray-300">
              교육 배경과 리더십 경험을 소개합니다
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Education - 높이 맞추기 */}
            <div className="flex flex-col h-full">
              <h3 className="text-2xl font-bold mb-8 flex items-center gap-3 text-white">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                  <GraduationCap className="w-5 h-5 text-white" />
                </div>
                학력
              </h3>
              <div className="space-y-6 flex-1">
                <Card style={{ background: 'rgb(17 24 39)', border: '1px solid rgb(31 41 55)' }} className="shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 relative overflow-hidden">
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-400 to-purple-500"></div>
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-purple-100 rounded-xl flex items-center justify-center flex-shrink-0">
                        <GraduationCap className="w-6 h-6 text-blue-600" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-bold text-lg text-white mb-1">
                          한국항공대학교
                        </h4>
                        <p className="text-blue-600 mb-2 font-medium">
                          소프트웨어학과 (4-1 휴학)
                        </p>
                        <p className="text-gray-400 text-sm mb-3">
                          2022 - 현재
                        </p>
                        <p className="text-gray-300 text-sm">
                          AI와 소프트웨어 개발의 기초를 다지며, 실무 프로젝트를
                          통해 실력을 키워가고 있습니다.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card style={{ background: 'rgb(17 24 39)', border: '1px solid rgb(31 41 55)' }} className="shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 relative overflow-hidden">
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-green-400 to-teal-500"></div>
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-green-100 to-teal-100 rounded-xl flex items-center justify-center flex-shrink-0">
                        <GraduationCap className="w-6 h-6 text-green-600" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-bold text-lg text-white mb-1">
                          하노이한국국제학교
                        </h4>
                        <p className="text-green-600 mb-2 font-medium">
                          고등학교 졸업
                        </p>
                        <p className="text-gray-400 text-sm mb-3">
                          2018 - 2021
                        </p>
                        <p className="text-gray-300 text-sm">
                          국제적인 환경에서 다양한 문화를 경험하며 글로벌
                          마인드를 기를 수 있었습니다.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Activities - 높이 맞추기 */}
            <div className="flex flex-col h-full">
              <h3 className="text-2xl font-bold mb-8 flex items-center gap-3 text-white">
                <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg flex items-center justify-center">
                  <Trophy className="w-5 h-5 text-white" />
                </div>
                대외활동 & 리더십
              </h3>
              <div className="space-y-6 flex-1">
                <Card style={{ background: 'rgb(17 24 39)', border: '1px solid rgb(31 41 55)' }} className="shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 relative overflow-hidden">
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-purple-400 to-pink-500"></div>
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-purple-100 to-pink-100 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Brain className="w-6 h-6 text-purple-600" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-bold text-lg text-white mb-1">
                          SK Networks Family AI Camp 11기
                        </h4>
                        <p className="text-purple-600 mb-2 font-medium">
                          AI 개발 교육 프로그램
                        </p>
                        <p className="text-gray-400 text-sm mb-3">2025</p>
                        <p className="text-gray-300 text-sm">
                          LangChain, RAG 시스템 등 실무 AI 기술을 학습하며 최신
                          AI 트렌드를 익혔습니다.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card style={{ background: 'rgb(17 24 39)', border: '1px solid rgb(31 41 55)' }} className="shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 relative overflow-hidden">
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-orange-400 to-red-500"></div>
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-orange-100 to-red-100 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Trophy className="w-6 h-6 text-orange-600" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-bold text-lg text-white mb-1">
                          부학생회장
                        </h4>
                        <p className="text-orange-600 mb-2 font-medium">
                          한국항공대학교 학생회
                        </p>
                        <p className="text-gray-400 text-sm mb-3">2024</p>
                        <p className="text-gray-300 text-sm">
                          학교 전체 학생 대표로 활동하며 리더십과 소통 능력을
                          기를 수 있었습니다.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card style={{ background: 'rgb(17 24 39)', border: '1px solid rgb(31 41 55)' }} className="shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 relative overflow-hidden">
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-400 to-cyan-500"></div>
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Users className="w-6 h-6 text-blue-600" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-bold text-lg text-white mb-1">
                          소프트웨어학과 과대표
                        </h4>
                        <p className="text-blue-600 mb-2 font-medium">
                          한국항공대학교
                        </p>
                        <p className="text-gray-400 text-sm mb-3">2023</p>
                        <p className="text-gray-300 text-sm">
                          학과 행사 기획과 학생들 간의 소통 창구 역할을
                          담당했습니다.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
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

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <a
              href="https://github.com/your-username"
              style={{ background: 'rgb(17 24 39)', border: '1px solid rgb(31 41 55)' }}
              className="flex flex-col items-center p-8 backdrop-blur-sm rounded-2xl hover:shadow-xl transition-all duration-300 group transform hover:-translate-y-2"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-gray-700 to-gray-800 rounded-2xl flex items-center justify-center mb-4 group-hover:from-gray-600 group-hover:to-gray-700 transition-all duration-300">
                <Github className="w-8 h-8 text-white" />
              </div>
              <div className="font-bold text-lg text-white mb-2">GitHub</div>
              <div className="text-sm text-gray-400">
                github.com/your-username
              </div>
            </a>

            <a
              href="mailto:your-email@gmail.com"
              style={{ background: 'rgb(17 24 39)', border: '1px solid rgb(31 41 55)' }}
              className="flex flex-col items-center p-8 backdrop-blur-sm rounded-2xl hover:shadow-xl transition-all duration-300 group transform hover:-translate-y-2"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center mb-4 group-hover:from-blue-500 group-hover:to-purple-500 transition-all duration-300">
                <Mail className="w-8 h-8 text-white" />
              </div>
              <div className="font-bold text-lg text-white mb-2">Email</div>
              <div className="text-sm text-gray-400">your-email@gmail.com</div>
            </a>

            <a
              href="tel:+82-10-1234-5678"
              style={{ background: 'rgb(17 24 39)', border: '1px solid rgb(31 41 55)' }}
              className="flex flex-col items-center p-8 backdrop-blur-sm rounded-2xl hover:shadow-xl transition-all duration-300 group transform hover:-translate-y-2"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-green-600 to-teal-600 rounded-2xl flex items-center justify-center mb-4 group-hover:from-green-500 group-hover:to-teal-500 transition-all duration-300">
                <Phone className="w-8 h-8 text-white" />
              </div>
              <div className="font-bold text-lg text-white mb-2">Phone</div>
              <div className="text-sm text-gray-400">010-1234-5678</div>
            </a>
          </div>

          <div>
            <Button
              variant="outline"
              size="lg"
              className="border-2 border-blue-500 text-blue-300 hover:bg-blue-900/30 hover:border-blue-400 hover:text-white px-8 py-4 text-lg rounded-xl transition-all duration-200 transform hover:scale-105"
            >
              이력서 다운로드
            </Button>
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
