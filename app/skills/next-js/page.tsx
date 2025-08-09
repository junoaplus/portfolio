'use client'
import { Navigation } from '@/components/navigation'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ArrowLeft, Lightbulb, Rocket, TrendingUp, Target, Award } from 'lucide-react'
import Link from 'next/link'

export default function NextJSSkillPage() {
  return (
    <div className="min-h-screen relative overflow-hidden" style={{ background: 'linear-gradient(to bottom right, #000000, #111827, #000000)' }}>
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

          {/* Skill Header */}
          <div className="text-center mb-12">
            <div className="text-6xl mb-4">🔺</div>
            <h1 className="text-4xl font-black text-white mb-4">
              Next.js 15
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              풀스택 React 프레임워크의 최신 진화
            </p>
            <Badge style={{ background: 'rgb(37 99 235)' }} className="text-white text-lg px-6 py-2">
              Proficiency Level: 90%
            </Badge>
          </div>

          {/* 개인적 견해 */}
          <Card className="bg-gray-800/80 backdrop-blur-sm border border-gray-600/50 shadow-2xl mb-12">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-white flex items-center gap-3">
                <Lightbulb className="w-6 h-6 text-yellow-500" />
                Next.js에 대한 개인적 견해
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-lg text-gray-300 leading-relaxed space-y-4">
                <p>
                  <span className="font-bold text-cyan-400">Next.js는 모던 웹 개발의 완성체</span>라고 생각합니다. 
                  React의 강력함에 SSR, SSG, API Routes까지 통합하여 
                  <span className="font-bold text-cyan-400">풀스택 애플리케이션을 하나의 프레임워크로 완성</span>할 수 있는 것이 혁신적입니다.
                </p>
                <p>
                  특히 <span className="font-bold text-cyan-400">App Router와 Server Components</span>의 등장이 인상적이었습니다. 
                  클라이언트와 서버의 경계를 자연스럽게 넘나들며 
                  <span className="font-bold text-cyan-400">성능 최적화와 개발 생산성</span>을 동시에 잡을 수 있게 해줍니다.
                </p>
                <p>
                  AI 챗봇 포트폴리오 프로젝트에서 <span className="font-bold text-cyan-400">Vercel과의 완벽한 통합</span>을 경험하며, 
                  배포부터 모니터링까지의 전체 워크플로우가 얼마나 매끄러운지 깨달았습니다. 
                  <span className="font-bold text-cyan-400">개발자 경험의 새로운 기준</span>을 제시한다고 생각합니다.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* 프로젝트 활용 사례 */}
          <Card className="bg-gray-800/80 backdrop-blur-sm border border-gray-600/50 shadow-2xl mb-12">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-white flex items-center gap-3">
                <Rocket className="w-6 h-6 text-blue-500" />
                프로젝트 활용 사례
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="bg-gradient-to-r from-blue-900/20 to-cyan-900/20 rounded-xl p-6 border border-blue-600/30 cursor-pointer hover:bg-gradient-to-r hover:from-blue-900/30 hover:to-cyan-900/30 transition-all duration-300" onClick={() => window.open('/projects/1', '_blank')}>
                  <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2 hover:text-blue-300 transition-colors">
                    <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                    AI 챗봇 포트폴리오 →
                  </h3>
                  <div className="text-gray-300 space-y-3">
                    <p>
                      <span className="font-bold text-cyan-400">Next.js 15의 App Router와 Server Actions</span>를 활용하여 LangGraph 멀티 에이전트 시스템과 완벽하게 통합된 
                      <span className="font-bold text-cyan-400">인터랙티브 포트폴리오</span>를 구축했습니다.
                    </p>
                    <div className="bg-gray-800/50 rounded-lg p-4 mt-4">
                      <div className="text-sm text-gray-400 mb-2">핵심 Next.js 기술들:</div>
                      <div className="flex flex-wrap gap-2">
                        <Badge className="bg-cyan-700 text-cyan-100">App Router</Badge>
                        <Badge className="bg-cyan-700 text-cyan-100">Server Actions</Badge>
                        <Badge className="bg-cyan-700 text-cyan-100">Streaming UI</Badge>
                        <Badge className="bg-cyan-700 text-cyan-100">API Routes</Badge>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-green-900/20 to-teal-900/20 rounded-xl p-6 border border-green-600/30 cursor-pointer hover:bg-gradient-to-r hover:from-green-900/30 hover:to-teal-900/30 transition-all duration-300" onClick={() => window.open('/projects/2', '_blank')}>
                  <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2 hover:text-green-300 transition-colors">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    데이트 코스 추천 AI →
                  </h3>
                  <div className="text-gray-300 space-y-3">
                    <p>
                      <span className="font-bold text-cyan-400">Next.js 15</span>를 활용해 FastAPI 백엔드와 실시간 통신하는 
                      대화형 추천 시스템의 프론트엔드를 구축했습니다.
                    </p>
                    <div className="bg-gray-800/50 rounded-lg p-4 mt-4">
                      <div className="text-sm text-gray-400 mb-2">사용 기술:</div>
                      <div className="flex flex-wrap gap-2">
                        <Badge className="bg-green-700 text-green-100">Next.js 15</Badge>
                        <Badge className="bg-green-700 text-green-100">API 통신</Badge>
                        <Badge className="bg-green-700 text-green-100">실시간 UI</Badge>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* 핵심 성과/결과 */}
          <Card className="bg-gray-800/80 backdrop-blur-sm border border-gray-600/50 shadow-2xl mb-12">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-white flex items-center gap-3">
                <TrendingUp className="w-6 h-6 text-green-500" />
                핵심 성과 & 결과
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gradient-to-r from-blue-900/30 to-cyan-900/30 rounded-xl p-6 border border-blue-600/30">
                  <h4 className="font-bold text-white mb-3 flex items-center gap-2">
                    <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                    성능 최적화
                  </h4>
                  <div className="text-cyan-300 space-y-2">
                    <div>• <span className="font-bold">Lighthouse 95+ 점수</span> 달성</div>
                    <div>• <span className="font-bold">초기 로딩 속도 40% 향상</span></div>
                    <div>• <span className="font-bold">번들 크기 30% 최적화</span></div>
                  </div>
                </div>
                
                <div className="bg-gradient-to-r from-green-900/30 to-emerald-900/30 rounded-xl p-6 border border-green-600/30">
                  <h4 className="font-bold text-white mb-3 flex items-center gap-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    개발 생산성
                  </h4>
                  <div className="text-green-300 space-y-2">
                    <div>• <span className="font-bold">개발 시간 50% 단축</span></div>
                    <div>• <span className="font-bold">자동 배포 파이프라인</span> 구축</div>
                    <div>• <span className="font-bold">타입 안전성 100%</span> 보장</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* 학습/경험 스토리 */}
          <Card className="bg-gray-800/80 backdrop-blur-sm border border-gray-600/50 shadow-2xl mb-12">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-white flex items-center gap-3">
                <Target className="w-6 h-6 text-blue-500" />
                학습 & 경험 스토리
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="bg-gradient-to-r from-blue-900/20 to-cyan-900/20 rounded-xl p-6 border border-blue-600/30">
                <div className="text-lg text-gray-300 leading-relaxed space-y-4">
                  <p>
                    처음엔 <span className="font-bold text-cyan-400">Pages Router에 익숙한 상태</span>에서 App Router의 
                    Server Components 개념이 낯설었습니다. 클라이언트와 서버 컴포넌트를 구분하는 것이 
                    <span className="font-bold text-blue-300">초기에는 혼란</span>스러웠죠.
                  </p>
                  <p>
                    하지만 <span className="font-bold text-cyan-400">실제 프로젝트를 진행하면서</span> 
                    Server Actions와 Streaming UI의 강력함을 체감했습니다. 
                    특히 <span className="font-bold text-blue-300">AI 챗봇과의 실시간 통신</span>에서 
                    기존 방식으로는 불가능했던 매끄러운 UX를 구현할 수 있었습니다.
                  </p>
                  <p>
                    지금은 <span className="font-bold text-cyan-400">풀스택 아키텍처 설계, 성능 최적화, 배포 전략</span> 등을 
                    체계적으로 적용해서 프로덕션 레벨의 웹 애플리케이션을 구축할 수 있게 되었습니다.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* 비즈니스 임팩트 */}
          <Card className="bg-gray-800/80 backdrop-blur-sm border border-gray-600/50 shadow-2xl mb-12">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-white flex items-center gap-3">
                <Award className="w-6 h-6 text-blue-500" />
                비즈니스 임팩트
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="bg-gradient-to-r from-blue-900/20 to-cyan-900/20 rounded-xl p-6 border border-blue-600/30">
                <h4 className="font-bold text-white mb-4">AI 기반 인터랙티브 포트폴리오의 혁신</h4>
                <div className="text-gray-300 space-y-3">
                  <p>
                    Next.js의 최신 기술을 통해 <span className="font-bold text-cyan-400">AI 에이전트와 실시간 소통</span>하는 
                    포트폴리오를 구현했습니다. 이는 단순한 정적 페이지를 넘어선 <span className="font-bold text-cyan-400">인터랙티브 경험</span>을 제공합니다.
                  </p>
                  <p>
                    <span className="font-bold text-blue-300">성능 최적화와 SEO</span>를 동시에 달성하여 
                    사용자 경험과 검색 엔진 최적화 모두에서 우수한 결과를 얻었고, 
                    <span className="font-bold text-cyan-400">개발 생산성이 크게 향상</span>되었습니다.
                  </p>
                  <p>
                    특히 토스와 같은 <span className="font-bold text-blue-300">대규모 서비스 환경</span>에서는 
                    이런 풀스택 개발 능력이 <span className="font-bold text-cyan-400">빠른 프로덕트 개발과 안정적인 서비스</span> 
                    운영의 핵심 역량이 될 것이라고 확신합니다.
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