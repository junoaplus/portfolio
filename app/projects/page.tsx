'use client'

import { Navigation } from '@/components/navigation'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import {
  Github,
  ExternalLink,
  Users,
  Brain,
  Clock,
  Sparkles,
  ArrowRight,
} from 'lucide-react'
import Link from 'next/link'

export default function ProjectsPage() {

  const projects = [
    {
      id: 1,
      title: 'AI 챗봇 포트폴리오',
      subtitle: 'LangGraph 멀티 에이전트 시스템',
      description:
        '실시간 GitHub 데이터와 RAG 시스템을 결합한 인터랙티브 AI 포트폴리오. 사용자 질문에 대해 95% 정확도로 답변하는 멀티 에이전트 챗봇입니다.',
      image: '/placeholder.svg?height=300&width=500',
      tech: [
        'Next.js 14',
        'LangGraph',
        'RAG',
        'OpenAI',
        'Supabase',
        'TypeScript',
      ],
      category: 'AI/ML',
      status: 'Live',
      gradient: 'from-blue-500 to-purple-600',
      achievements: [
        '실시간 GitHub 데이터 연동으로 최신 정보 제공',
        '벡터 검색 최적화로 95% 정확도 달성',
        '멀티 에이전트 협업으로 복잡한 질문 처리',
        '응답 시간 1.5초 이내 최적화',
      ],
      github: 'https://github.com/your-username/ai-portfolio',
      demo: '/chatbot',
      timeline: '2024.11 - 2025.01 (3개월)',
      team: '개인 프로젝트',
    },
    {
      id: 2,
      title: '데이트 코스 추천 AI',
      subtitle: '3개 마이크로서비스로 구현한 실시간 대화형 AI 추천 엔진',
      description:
        '사용자가 AI 챗봇과 자연스럽게 대화하며 MBTI, 관계단계, 예산 등을 입력하면, 3개의 전문 마이크로서비스가 협업하여 개인맞춤형 데이트 코스를 실시간 생성하는 시스템입니다. 서울시 25개구 89,321개 검증 장소 중에서 벡터 유사도 검색과 지리공간 필터링을 통해 최적의 조합을 찾아 추천하며, 대화 맥락을 기억하여 점진적으로 더 정확한 추천을 제공합니다.',
      image: '/date.jpeg',
      tech: [
        'PySpark 3.5.0',
        'OpenAI GPT-4',
        'LangChain',
        'Qdrant Vector DB',
        'FastAPI',
        'PostgreSQL',
        'SQLAlchemy',
        'Redis',
        'NumPy',
        'Tiktoken',
        'Docker',
        'Next.js 15'
      ],
      category: 'AI/ML',
      status: 'Featured',
      gradient: 'from-green-500 to-teal-600',
      achievements: [
        'PySpark ETL로 20만→9만개 데이터 품질 정제 + 중복 제거',
        'Qdrant 벡터 검색 전 151개 세분화 카테고리 필터링',
        '서울시 25개구 89,321개 검증된 장소 DB 구축',
      ],
      github: 'https://github.com/your-username/date-course-ai',
      demo: 'https://date-course-ai.vercel.app',
      timeline: '2024.06 - 2024.07 (7주)',
      team: '5명',
    },
    {
      id: 3,
      title: "보드게임 룰 챗봇 '보비(BOVI)'",
      subtitle: 'LLM 파인튜닝 + RAG 기반 보드게임 전문 챗봇 시스템',
      description:
        '보드게임 초보자들의 게임 선택 장애와 복잡한 룰 이해를 돕기 위해 개발된 전문 AI 챗봇입니다. GPT-3.5-turbo 파인튜닝과 FAISS 벡터 DB를 활용한 RAG 시스템으로 정확한 룰 설명과 개인 취향 기반 보드게임 추천을 제공합니다.',
      image: '/보드게임.png',
      tech: ['Fine-tuning', 'RAG', 'AWS EC2'],
      category: 'AI/ML',
      status: 'Completed',
      gradient: 'from-orange-500 to-red-500',
      achievements: [
        'EXAONE 파인튜닝으로 83.7% 정확도 달성',
        '217개 게임별 개별 벡터DB 구축',
        'QR코드 모바일 접속 지원',
      ],
      github: 'https://github.com/junoaplus/SKN11-4th-3Team',
      demo: '/boardgame-chatbot',
      timeline: '2025.05.16 - 2025.06.11 (4주)',
      team: '4명',
    },
    {
      id: 4,
      title: '신문 구독자 이탈 예측',
      subtitle: '머신러닝 기반 고객 이탈 분류 모델',
      description:
        '신문사 구독자 이탈을 예측하는 머신러닝 모델입니다. 불균형 데이터 처리와 다양한 분류 알고리즘을 비교 분석하여 최적의 모델을 구축했습니다.',
      image: '/streamlit-page1.png',
      tech: ['RandomForest', 'XGBoost', 'Faker', 'Python', 'scikit-learn', 'Streamlit'],
      category: 'Traditional ML',
      status: 'Completed',
      gradient: 'from-purple-500 to-pink-600',
      achievements: [
        'RandomForest로 87.3% 정확도 달성',
        'SMOTE를 활용한 불균형 데이터 해결',
        '6가지 ML 알고리즘 성능 비교 분석',
        'Streamlit 기반 예측 웹 앱 구현',
      ],
      github: 'https://github.com/your-username/newspaper-churn',
      demo: null,
      timeline: '2024.03 - 2024.04 (4주)',
      team: '팀 프로젝트 (3명)',
    },
    {
      id: 5,
      title: '간호사 급여 예측',
      subtitle: '회귀 분석 기반 급여 예측 모델',
      description:
        '간호사의 다양한 특성을 기반으로 급여를 예측하는 회귀 모델입니다. 여러 회귀 알고리즘을 비교하고 30% 오차 이내 정답률로 실용적인 예측 성능을 달성했습니다.',
      image: '/피처벌중요도상위15개_그래프.png',
      tech: ['LogisticRegression', 'StratifiedKFold', 'GridSearchCV', 'Python', 'scikit-learn', 'pandas'],
      category: 'Traditional ML',
      status: 'Completed',
      gradient: 'from-indigo-500 to-blue-600',
      achievements: [
        '30% 오차 이내 정답률 달성',
        '4가지 회귀 알고리즘 성능 비교',
        '체계적인 EDA 및 데이터 전처리',
        '피처 중요도 분석 및 해석',
      ],
      github: 'https://github.com/your-username/nurse-salary-prediction',
      demo: null,
      timeline: '2024.02 - 2024.03 (4주)',
      team: '팀 프로젝트 (3명)',
    },
  ]


  return (
    <div className="min-h-screen snap-start flex flex-col relative overflow-hidden" style={{ background: 'linear-gradient(to bottom right, #000000, #111827, #000000)' }}>
      {/* Hero Tech Grid Pattern - 메인과 동일 */}
      <div className="absolute inset-0 opacity-40" style={{
        backgroundImage: `linear-gradient(rgba(59,130,246,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(59,130,246,0.03) 1px, transparent 1px)`,
        backgroundSize: '60px 60px'
      }}></div>
      
      {/* Hero Tech Glow Effects - 메인과 동일 */}
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
      
      <Navigation />

      <div className="pt-16">
        <section className="min-h-screen snap-start flex items-center justify-center py-20 px-4 relative">
          <div className="max-w-full px-8 mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">
                모든 프로젝트
              </h2>
              <p className="text-xl text-gray-300">
                복잡한 비즈니스 문제를 AI로 해결한 실무 프로젝트
              </p>
            </div>
            
            {/* 첫 번째 줄: AI/LLM 프로젝트 (3개) */}
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-white mb-4">
                AI/LLM Projects
              </h3>
              <p className="text-lg text-gray-300">
                대규모 언어모델과 AI 기술을 활용한 실전 프로젝트
              </p>
            </div>
            
            <div className="grid lg:grid-cols-3 gap-12 mb-16">
              {projects.filter(project => project.id <= 3).map(project => (
                <Link href={project.id === 3 ? '/boardgame-chatbot' : `/projects/${project.id}`} key={project.id} className="block h-full group">
                  <Card
                    style={{ background: 'rgb(17 24 39)', border: '1px solid rgb(31 41 55)' }}
                    className="h-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-3 cursor-pointer"
                  >
                  <div className="relative rounded-t-2xl overflow-hidden">
                    <img
                      src={project.image || '/placeholder.svg'}
                      alt={project.title}
                      className="w-full h-64 object-cover"
                    />
                    {project.id === 1 && (
                      <>
                        <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent"></div>
                        <Badge style={{ background: 'rgb(37 99 235)' }} className="absolute top-6 left-6 text-white text-sm px-3 py-1">Live Service</Badge>
                      </>
                    )}
                  </div>

                  <CardContent className="p-8 relative">
                    <h3 className="text-2xl font-bold text-white mb-4">
                      {project.title}
                    </h3>
                    
                    {project.id === 1 ? (
                      <p className="text-gray-300 mb-6 text-base leading-relaxed">
                        <strong className="text-blue-400">실시간으로 내 경험을 답변</strong>하는 지능형 포트폴리오
                      </p>
                    ) : (
                      <div className="text-gray-300 mb-6 text-base leading-relaxed space-y-1">
                        {project.id === 2 ? (
                          <>
                            <div><strong className="text-green-400">PySpark</strong>로 20만→9만개 데이터 정제</div>
                            <div><strong className="text-blue-400">Qdrant 벡터DB</strong> 실시간 검색 최적화</div>
                            <div><strong className="text-purple-400">LangChain</strong> 대화형 추천 시스템 구축</div>
                          </>
                        ) : project.id === 3 ? (
                          <>
                            <div><strong className="text-green-400">Fine-tuning</strong>으로 도메인 특화 성능 향상</div>
                            <div><strong className="text-blue-400">217개 게임별 RAG 시스템</strong> 구축</div>
                            <div><strong className="text-purple-400">실시간 추천 & 룰 검색</strong> 최적화</div>
                          </>
                        ) : (
                          <p>{project.description}</p>
                        )}
                      </div>
                    )}
                    
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.id === 1 ? (
                        <>
                          <Badge style={{ background: 'rgb(31 41 55)' }} className="text-blue-400 text-sm px-3 py-1 border border-gray-700">LangGraph</Badge>
                          <Badge style={{ background: 'rgb(31 41 55)' }} className="text-green-400 text-sm px-3 py-1 border border-gray-700">RAG</Badge>
                          <Badge style={{ background: 'rgb(31 41 55)' }} className="text-purple-400 text-sm px-3 py-1 border border-gray-700">Next.js</Badge>
                        </>
                      ) : project.id === 2 ? (
                        <>
                          <Badge style={{ background: 'rgb(31 41 55)' }} className="text-green-400 text-sm px-3 py-1 border border-gray-700">PySpark</Badge>
                          <Badge style={{ background: 'rgb(31 41 55)' }} className="text-blue-400 text-sm px-3 py-1 border border-gray-700">Qdrant</Badge>
                          <Badge style={{ background: 'rgb(31 41 55)' }} className="text-purple-400 text-sm px-3 py-1 border border-gray-700">LangChain</Badge>
                        </>
                      ) : project.id === 3 ? (
                        <>
                          <Badge style={{ background: 'rgb(31 41 55)' }} className="text-green-400 text-sm px-3 py-1 border border-gray-700">Fine-tuning</Badge>
                          <Badge style={{ background: 'rgb(31 41 55)' }} className="text-blue-400 text-sm px-3 py-1 border border-gray-700">RAG</Badge>
                          <Badge style={{ background: 'rgb(31 41 55)' }} className="text-purple-400 text-sm px-3 py-1 border border-gray-700">AWS EC2</Badge>
                        </>
                      ) : (
                        project.tech.slice(0, 3).map(tech => (
                          <Badge
                            key={tech}
                            style={{ background: 'rgb(31 41 55)' }}
                            className="text-blue-400 text-sm px-3 py-1 border border-gray-700"
                          >
                            {tech}
                          </Badge>
                        ))
                      )}
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
              ))}
            </div>

            {/* 두 번째 줄: Traditional ML 프로젝트 (2개) */}
            <div className="text-center mb-12 mt-20">
              <h3 className="text-3xl font-bold text-gray-400 mb-4">
                Traditional ML Projects
              </h3>
              <p className="text-lg text-gray-500">
                전통적인 머신러닝 기법으로 구현한 분류/회귀 모델
              </p>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
              {projects.filter(project => project.id >= 4).map(project => (
                <Link href={project.id === 4 ? '/newspaper-churn' : '/nurse-salary'} key={project.id} className="block h-full group">
                  <Card
                    style={{ background: 'rgb(17 24 39)', border: '1px solid rgb(31 41 55)' }}
                    className="h-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-3 cursor-pointer"
                  >
                    <div className="relative rounded-t-2xl overflow-hidden">
                      <img
                        src={project.image || '/placeholder.svg'}
                        alt={project.title}
                        className="w-full h-64 object-cover"
                      />
                      <Badge style={{ background: 'rgb(55 65 81)' }} className="absolute top-6 left-6 text-gray-300 text-sm px-3 py-1">{project.category}</Badge>
                    </div>

                    <CardContent className="p-8 relative">
                      <h3 className="text-2xl font-bold text-white mb-4">
                        {project.title}
                      </h3>
                      
                      <div className="text-gray-300 mb-6 text-base leading-relaxed space-y-1">
                        {project.id === 4 ? (
                          <>
                            <div><strong className="text-purple-400">RandomForest</strong>로 87.3% 정확도 달성</div>
                            <div><strong className="text-blue-400">SMOTE</strong> 불균형 데이터 해결</div>
                            <div><strong className="text-green-400">6가지 알고리즘</strong> 성능 비교</div>
                          </>
                        ) : (
                          <>
                            <div><strong className="text-indigo-400">회귀 분석</strong>으로 30% 오차 이내 달성</div>
                            <div><strong className="text-blue-400">4가지 알고리즘</strong> 성능 비교</div>
                            <div><strong className="text-green-400">체계적 EDA</strong> 및 전처리</div>
                          </>
                        )}
                      </div>
                      
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.id === 4 ? (
                          <>
                            <Badge style={{ background: 'rgb(31 41 55)' }} className="text-purple-400 text-sm px-3 py-1 border border-gray-700">RandomForest</Badge>
                            <Badge style={{ background: 'rgb(31 41 55)' }} className="text-blue-400 text-sm px-3 py-1 border border-gray-700">XGBoost</Badge>
                            <Badge style={{ background: 'rgb(31 41 55)' }} className="text-green-400 text-sm px-3 py-1 border border-gray-700">Faker</Badge>
                          </>
                        ) : (
                          <>
                            <Badge style={{ background: 'rgb(31 41 55)' }} className="text-indigo-400 text-sm px-3 py-1 border border-gray-700">LogisticRegression</Badge>
                            <Badge style={{ background: 'rgb(31 41 55)' }} className="text-blue-400 text-sm px-3 py-1 border border-gray-700">StratifiedKFold</Badge>
                            <Badge style={{ background: 'rgb(31 41 55)' }} className="text-green-400 text-sm px-3 py-1 border border-gray-700">GridSearchCV</Badge>
                          </>
                        )}
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
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
