'use client'
import { Navigation } from '@/components/navigation'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Github, ExternalLink, Calendar, Users, Star, TrendingUp, Zap, ArrowLeft, CheckCircle, Award, Target, Lightbulb, Database } from 'lucide-react'
import Link from 'next/link'

const project = {
  id: 1,
  title: "AI 챗봇 포트폴리오",
  description: "LangGraph 멀티 에이전트로 구축한 인터랙티브 포트폴리오",
  longDescription: "눈에 띄는 차별화된 포트폴리오를 만들고 싶었습니다. AI 엔지니어로 지원하는 만큼, AI 엔지니어라면 자신을 대변할 수 있는 챗봇 정도는 만들 수 있어야 한다고 생각했습니다. 그래서 나를 대변할 수 있는 지능형 챗봇과 나를 어필할 수 있는 웹사이트를 결합하여, 실력을 직접 보여주면서 동시에 효과적으로 어필할 수 있는 인터랙티브 포트폴리오를 구축했습니다. LangGraph 멀티 에이전트 시스템을 통해 방문자의 질문 유형에 따라 기술 전문, 프로젝트 전문, 개인 경험 에이전트가 협업하여 정확하고 맞춤형 답변을 실시간으로 제공합니다.",
  image: "/placeholder.svg?height=400&width=600",
  tech: ["LangGraph", "Multi-Agent", "Next.js 14", "TypeScript", "FastAPI", "OpenAI GPT-4", "Tailwind CSS", "shadcn/ui"],
  category: "AI/ML",
  status: "Live",
  date: "2025.08.05 - 2025.08.20",
  github: "#",
  demo: "#",
  challenges: [
    "에이전트 라우팅 후 통합 응답 지연: 기술, 프로젝트, 어바웃미 등 각 에이전트에서 정보 수집 후 통합하여 답변 생성하는 과정에서 시간 소요",
    "프론트엔드 API 데이터 활용 한계: API로 프론트 표시 데이터를 가져와 답변에 사용하려 했으나 간결한 요약 형태로 부족",
    "벡터 DB 청킹 전략 불명확: 다양한 질문 유형에 효과적인 청킹 기준 설정의 어려움",
    "회사별 채용 요구사항 차이: 하나의 챗봇으로 모든 기업 맞춤형 어필 한계"
  ],
  solutions: [
    "에이전트 전면 개편으로 의도 파악 후 해당 의도에 적합한 에이전트로 직접 라우팅하여 정해진 데이터로만 답변 생성해 시간 단축",
    "상세한 MD 파일로 완전히 분리된 챗봇 전용 데이터셋 구축하여 API 요청 없이 풍부한 답변 콘텐츠 확보",
    "벡터 DB 청킹 대신 전체 컨텍스트를 GPT에 전달하는 방식 선택하여 API 비용이 증가하더라도 답변 정확도와 일관성 확보",
    "회사별 채용공고 분석을 통해 강조해야 할 기술과 경험을 다르게 구성한 맞춤형 데이터셋으로 타겟팅된 포지셔닝 전략 구현"
  ],
  achievements: [
    "멀티 에이전트 시스템 구축: 질문 유형별 전문 에이전트 설계",
    "LangGraph 조건부 라우팅: 질문 의도 파악 후 적절한 에이전트 분배",
    "MD 파일 기반 데이터셋: 상세한 답변을 위한 전용 콘텐츠 구축",
    "회사별 맞춤형 어필: 채용 요구사항에 맞는 데이터셋 구성",
    "Next.js + FastAPI 구조: 프론트엔드와 백엔드 분리 아키텍처",
    "실시간 대화형 인터페이스: 자연스러운 질의응답 경험 제공"
  ]
}

export default function AIChatbotPortfolioProject() {
  return (
    <div className="min-h-screen relative overflow-hidden" style={{ background: 'linear-gradient(to bottom right, #000000, #111827, #000000)' }}>
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
      
      <div className="pt-24 px-4 py-16">
        <div className="max-w-7xl mx-auto">
          {/* Back Button */}
          <Link href="/">
            <Button variant="outline" className="bg-gray-800/70 backdrop-blur-sm border-gray-600/50 text-white hover:bg-gray-700/90 mb-8 rounded-xl shadow-lg">
              <ArrowLeft className="w-4 h-4 mr-2" />
              메인으로 돌아가기
            </Button>
          </Link>

          {/* Project Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-black text-white mb-4">
              {project.title}
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Description - 사진보다 먼저 */}
          <Card className="bg-gray-800/80 backdrop-blur-sm border border-gray-600/50 shadow-2xl mb-12">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-white flex items-center gap-3">
                <Lightbulb className="w-6 h-6 text-indigo-600" />
                프로젝트 개요
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg text-gray-300 leading-relaxed mb-8">
                <span className="font-bold text-gray-200">눈에 띄는 차별화된 포트폴리오</span>를 만들고 싶었습니다. AI 엔지니어로 지원하는 만큼, <span className="font-bold text-gray-200">AI 엔지니어라면 자신을 대변할 수 있는 챗봇 정도는 만들 수 있어야 한다</span>고 생각했습니다. 그래서 나를 대변할 수 있는 <span className="font-bold text-gray-200">지능형 챗봇과 나를 어필할 수 있는 웹사이트</span>를 결합하여, <span className="font-bold text-gray-200">실력을 직접 보여주면서 동시에 효과적으로 어필</span>할 수 있는 인터랙티브 포트폴리오를 구축했습니다. <span className="font-bold text-gray-200">LangGraph 멀티 에이전트 시스템</span>을 통해 방문자의 질문 유형에 따라 기술 전문, 프로젝트 전문, 개인 경험 에이전트가 협업하여 정확하고 맞춤형 답변을 실시간으로 제공합니다.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-gray-700 to-gray-600 rounded-xl p-6 border border-gray-500">
                  <h4 className="font-bold text-white mb-3 flex items-center gap-2">
                    <Users className="w-5 h-5 text-cyan-400" />
                    팀 구성
                  </h4>
                  <p className="text-gray-300">개인 프로젝트<br/>풀스택 개발 (기획, 설계, 개발, 배포)</p>
                </div>
                
                <div className="bg-gradient-to-br from-gray-700 to-gray-600 rounded-xl p-6 border border-gray-500">
                  <h4 className="font-bold text-white mb-3 flex items-center gap-2">
                    <Calendar className="w-5 h-5 text-cyan-400" />
                    개발 기간
                  </h4>
                  <p className="text-gray-300">2025.08.05 - 2025.08.20<br/>(약 2주)</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* 담당 역할 */}
          <Card className="bg-gray-800/80 backdrop-blur-sm border border-gray-600/50 shadow-2xl mb-12">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-white flex items-center gap-3">
                <Star className="w-6 h-6 text-indigo-600" />
                담당 역할 (풀스택 개발)
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="bg-gradient-to-br from-gray-700 to-gray-600 rounded-xl p-6 border border-gray-500">
                <div className="text-gray-300 space-y-2 text-lg">
                  <div>• <span className="text-cyan-400 font-bold">프로젝트 기획</span> 및 요구사항 정의</div>
                  <div>• <span className="text-cyan-400 font-bold">시스템 아키텍처</span> 설계</div>
                  <div>• <span className="text-cyan-400 font-bold">Next.js 14 프론트엔드</span> 개발</div>
                  <div>• <span className="text-cyan-400 font-bold">FastAPI 백엔드</span> 구축</div>
                  <div>• <span className="text-cyan-400 font-bold">LangGraph 멀티 에이전트</span> 시스템 구현</div>
                  <div>• <span className="text-cyan-400 font-bold">RAG 파이프라인</span> 구축</div>
                  <div>• <span className="text-cyan-400 font-bold">벡터 데이터베이스</span> 설계 및 최적화</div>
                  <div>• <span className="text-cyan-400 font-bold">UI/UX 디자인</span> 및 반응형 구현</div>
                  <div>• <span className="text-cyan-400 font-bold">프로덕션 배포</span> 및 운영</div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Challenges & Solutions - 핵심 섹션 강조 */}
          <div className="mb-14 bg-gradient-to-br from-gray-800/50 via-gray-700/30 to-gray-600/20 rounded-2xl p-8 border border-gray-600/50">
            <div className="text-center mb-8">
              <h3 className="text-2xl lg:text-3xl font-bold text-white flex items-center justify-center gap-3 mb-3">
                <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center">
                  <Zap className="w-5 h-5 text-white" />
                </div>
                주요 발생 이슈 및 해결방안
              </h3>
              <p className="text-base lg:text-lg text-gray-300 font-medium">실제 개발 과정에서 마주한 문제들과 해결 과정</p>
            </div>
          
            <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-6">
              {project.challenges.map((challenge, index) => (
                <Card key={index} className="bg-gray-700/90 backdrop-blur-sm border border-gray-500 shadow-xl hover:shadow-2xl transition-all duration-300">
                <CardContent className="p-5">
                    {/* 문제 */}
                    <div className="mb-4 h-28">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                          <span className="text-red-700 font-bold text-sm">{index + 1}</span>
                        </div>
                        <span className="font-bold text-white text-base">발생 이슈</span>
                      </div>
                      <p className="text-gray-200 ml-8 text-sm leading-relaxed">
                        <span style={{color: '#dc2626', fontWeight: 'bold'}}>{challenge.split(':')[0]}:</span>
                        <span className="text-gray-200">
                          {challenge.split(':').slice(1).join(':')}
                        </span>
                      </p>
                    </div>
                    
                    {/* 해결방안 */}
                    <div className="border-t border-gray-200 pt-4">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                          <CheckCircle className="w-3 h-3 text-green-700" />
                        </div>
                        <span className="font-bold text-white text-base">해결방안</span>
                      </div>
                      <p className="text-gray-200 ml-8 text-sm leading-relaxed">
                        {index === 0 && (
                          <>
                            <span style={{color: '#06b6d4', fontWeight: 'bold'}}>에이전트 전면 개편</span>으로 의도 파악 후 <span style={{color: '#06b6d4', fontWeight: 'bold'}}>해당 의도에 적합한 에이전트로 직접 라우팅</span>하여 <span style={{color: '#06b6d4', fontWeight: 'bold'}}>정해진 데이터로만 답변 생성</span>해 시간 단축
                          </>
                        )}
                        {index === 1 && (
                          <>
                            <span style={{color: '#06b6d4', fontWeight: 'bold'}}>상세한 MD 파일로 완전히 분리된 챗봇 전용 데이터셋</span> 구축하여 <span style={{color: '#06b6d4', fontWeight: 'bold'}}>API 요청 없이</span> <span style={{color: '#06b6d4', fontWeight: 'bold'}}>풍부한 답변 콘텐츠 확보</span>
                          </>
                        )}
                        {index === 2 && (
                          <>
                            <span style={{color: '#06b6d4', fontWeight: 'bold'}}>벡터 DB 청킹 대신 전체 컨텍스트를 GPT에 전달</span>하는 방식 선택하여 <span style={{color: '#06b6d4', fontWeight: 'bold'}}>API 비용이 증가하더라도 답변 정확도와 일관성 확보</span>
                          </>
                        )}
                        {index === 3 && (
                          <>
                            <span style={{color: '#06b6d4', fontWeight: 'bold'}}>회사별 채용공고 분석</span>을 통해 강조해야 할 기술과 경험을 다르게 구성한 <span style={{color: '#06b6d4', fontWeight: 'bold'}}>맞춤형 데이터셋으로 타겟팅된 포지셔닝 전략 구현</span>
                          </>
                        )}
                      </p>
                    </div>
                  </CardContent>
                </Card>
                ))}
            </div>
          </div>

          {/* Tech Stack */}
          <Card className="bg-gray-800/80 backdrop-blur-sm border border-gray-600/50 shadow-2xl mb-12">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-white flex items-center gap-3">
                <Zap className="w-6 h-6 text-indigo-600" />
                기술 스택
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-3">
                {project.tech.map((tech) => (
                  <Badge key={tech} className="bg-gradient-to-r from-gray-700 to-gray-600 text-gray-200 border border-gray-500 px-4 py-2 text-sm font-medium shadow-sm">
                    {tech}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Achievements */}
          <Card className="bg-gray-800/80 backdrop-blur-sm border border-gray-600/50 shadow-2xl mb-12">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-white flex items-center gap-3">
                <Award className="w-6 h-6 text-indigo-600" />
                핵심 성취
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-4">
                {project.achievements.map((achievement, index) => (
                  <div key={index} className="flex items-center gap-3 p-4 bg-gradient-to-r from-emerald-900/30 to-teal-900/30 rounded-xl border border-emerald-600/30">
                    <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                    <span className="text-gray-200 font-medium">{achievement}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Project Retrospective */}
          <Card className="bg-gray-800/80 backdrop-blur-sm border border-gray-600/50 shadow-2xl mb-12">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-white flex items-center gap-3">
                <TrendingUp className="w-6 h-6 text-indigo-600" />
                프로젝트 회고
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-gray-700/50 to-gray-600/50 rounded-xl p-6 border border-gray-500">
                  <h4 className="font-bold text-white mb-3 flex items-center gap-2">
                    <Database className="w-4 h-4 text-cyan-400" />
                    LangGraph 멀티 에이전트 학습 곡선
                  </h4>
                  <p className="text-gray-300 leading-relaxed">
                    <span style={{color: '#06b6d4', fontWeight: 'bold'}}>LangGraph는 기존 LangChain과는 완전히 다른 패러다임</span>이었습니다. 
                    <span style={{color: '#06b6d4', fontWeight: 'bold'}}>조건부 라우팅과 상태 관리</span>를 이해하는 데 시간이 오래 걸렸고, 
                    각 에이전트가 독립적으로 작동하면서도 상호 연결되는 구조를 설계하는 것이 생각보다 복잡했습니다.
                  </p>
                </div>
                
                <div className="bg-gradient-to-r from-gray-700/50 to-gray-600/50 rounded-xl p-6 border border-gray-500/50">
                  <h4 className="font-bold text-white mb-3 flex items-center gap-2">
                    <Target className="w-4 h-4 text-green-600" />
                    데이터 구조화의 중요성
                  </h4>
                  <p className="text-gray-300 leading-relaxed">
                    <span style={{color: '#16a34a', fontWeight: 'bold'}}>프론트엔드 표시용 데이터와 챗봇용 데이터를 분리</span>해야 한다는 것을 깨달았습니다. 
                    처음에는 하나의 데이터로 두 가지 용도를 충족시키려 했지만, 
                    <span style={{color: '#16a34a', fontWeight: 'bold'}}>각각의 목적에 맞는 별도의 데이터셋</span>을 구축하니 답변 품질이 크게 향상되었습니다.
                  </p>
                </div>
                
                <div className="bg-gradient-to-r from-gray-700/50 to-gray-600/50 rounded-xl p-6 border border-gray-500/50">
                  <h4 className="font-bold text-white mb-3 flex items-center gap-2">
                    <Award className="w-4 h-4 text-purple-600" />
                    AI 포트폴리오의 차별화 효과
                  </h4>
                  <p className="text-gray-300 leading-relaxed">
                    <span style={{color: '#a855f7', fontWeight: 'bold'}}>단순한 정적 포트폴리오가 아닌 인터랙티브 AI 경험</span>을 제공함으로써 
                    실제 기술 역량을 직접 보여줄 수 있었습니다. 
                    <span style={{color: '#a855f7', fontWeight: 'bold'}}>채용담당자가 직접 질문하고 실시간 답변을 받는 경험</span>은 
                    기존 포트폴리오와는 완전히 다른 임팩트를 만들어낼 것이라 확신합니다.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

        </div>
      </div>
    </div>
  )
}