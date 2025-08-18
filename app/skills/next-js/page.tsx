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
          </div>

          {/* 내가 이해한 Next.js */}
          <Card className="bg-gray-800/80 backdrop-blur-sm border border-gray-600/50 shadow-2xl mb-12">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-white flex items-center gap-3">
                <Lightbulb className="w-6 h-6 text-yellow-500" />
                내가 이해한 Next.js
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-lg text-gray-300 leading-relaxed space-y-4">
                <p>
                  <span className="font-bold text-cyan-400">Next.js를 찾아보니 React 기반에서 풀스택을 커버해줄 수 있다고</span> 
                  나와있었습니다. SSR, SSG, API Routes까지 통합되어 있어서 
                  <span className="font-bold text-cyan-400">하나의 프레임워크로 전체 애플리케이션</span>을 만들 수 있다는 점이 좋았습니다.
                </p>
                <p>
                  하지만 이걸 선택한 <span className="font-bold text-cyan-400">가장 큰 이유는 서버사이드 렌더링을 지원</span>해서였습니다. 
                  챗봇 같은 걸 만들 때 <span className="font-bold text-cyan-400">초기 화면을 빠르게 띄어주고</span>, 
                  React Server Components와 Suspense/Streaming으로 <span className="font-bold text-cyan-400">실시간 응답을 매끄럽게</span> 처리할 수 있었습니다.
                </p>
                <p>
                  다만 <span className="font-bold text-cyan-400">무거운 백엔드는 따로 구축해야 합니다.</span> 
                  API Routes는 간단한 서비스에는 좋지만, 대규모 챗봇 같은 경우에는 
                  <span className="font-bold text-cyan-400">Django나 FastAPI 같은 별도 서버</span>와 연결하는 게 더 안정적이었습니다.
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
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-blue-900/20 to-cyan-900/20 rounded-xl p-6 border border-blue-600/30">
                  <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                    <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                    포트폴리오 웹사이트
                  </h3>
                  <div className="text-gray-300 space-y-3">
                    <p>
                      <span className="font-bold text-cyan-400">Next.js 15의 App Router</span>를 사용해서 
                      각 스킬 페이지와 프로젝트 페이지를 <span className="font-bold text-cyan-400">동적 라우팅</span>으로 구성했습니다.
                    </p>
                    <p>
                      <span className="font-bold text-cyan-400">TypeScript와 Tailwind CSS</span>를 완벽하게 통합하여 
                      <span className="font-bold text-blue-300">타입 안전성과 스타일링</span>을 모두 최적화했습니다.
                    </p>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-green-900/20 to-teal-900/20 rounded-xl p-6 border border-green-600/30 cursor-pointer hover:bg-gradient-to-r hover:from-green-900/30 hover:to-teal-900/30 transition-all duration-300" onClick={() => window.open('/date-recommendation', '_blank')}>
                  <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2 hover:text-green-300 transition-colors">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    데이트 코스 추천 AI 시스템 →
                  </h3>
                  <div className="text-gray-300 space-y-3">
                    <p>
                      <span className="font-bold text-cyan-400">Next.js 15</span>로 프론트엔드를 구축하여 
                      FastAPI 백엔드와 <span className="font-bold text-cyan-400">실시간 채팅 인터페이스</span>를 구현했습니다.
                    </p>
                    <p>
                      <span className="font-bold text-cyan-400">3개 마이크로서비스와 통합</span>된 복잡한 API 통신을 
                      <span className="font-bold text-blue-300">효율적으로 관리</span>하며 사용자 경험을 최적화했습니다.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Next.js로 해결할 수 있는 문제들 */}
          <Card className="bg-gray-800/80 backdrop-blur-sm border border-gray-600/50 shadow-2xl mb-12">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-white flex items-center gap-3">
                <Award className="w-6 h-6 text-blue-500" />
                Next.js로 해결할 수 있는 문제들
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-1 gap-6">
                {/* 챗봇 초기 로딩 속도 */}
                <div className="bg-gradient-to-r from-blue-900/20 to-cyan-900/20 rounded-xl p-6 border border-blue-600/30">
                  <h4 className="font-bold text-white mb-3 flex items-center gap-2">
                    <div className="text-2xl">⚡</div>
                    챗봇 초기 로딩 속도
                  </h4>
                  <div className="text-gray-300 space-y-2">
                    <div>• <span className="font-bold text-cyan-400">기존:</span> 클라이언트 렌더링으로 챗봇 화면이 늦게 뜸</div>
                    <div>• <span className="font-bold text-cyan-400">해결:</span> SSR로 초기 화면을 서버에서 빠르게 렌더링해서 즉시 표시</div>
                  </div>
                </div>
                
                {/* 실시간 스트리밍 구현의 어려움 */}
                <div className="bg-gradient-to-r from-green-900/20 to-emerald-900/20 rounded-xl p-6 border border-green-600/30">
                  <h4 className="font-bold text-white mb-3 flex items-center gap-2">
                    <div className="text-2xl">🌊</div>
                    실시간 스트리밍 구현의 어려움
                  </h4>
                  <div className="text-gray-300 space-y-2">
                    <div>• <span className="font-bold text-green-400">기존:</span> React만으로는 스트리밍 응답을 매끄럽게 처리하기 복잡</div>
                    <div>• <span className="font-bold text-green-400">해결:</span> Server Components + Suspense/Streaming으로 실시간 응답 자연스럽게 처리</div>
                  </div>
                </div>

                {/* 간단한 서비스의 과도한 설정 */}
                <div className="bg-gradient-to-r from-purple-900/20 to-pink-900/20 rounded-xl p-6 border border-purple-600/30">
                  <h4 className="font-bold text-white mb-3 flex items-center gap-2">
                    <div className="text-2xl">🛠️</div>
                    간단한 서비스의 과도한 설정
                  </h4>
                  <div className="text-gray-300 space-y-2">
                    <div>• <span className="font-bold text-purple-400">기존:</span> 간단한 서비스도 프론트엔드/백엔드 따로 구축해야 하는 번거로움</div>
                    <div>• <span className="font-bold text-purple-400">해결:</span> API Routes로 간단한 백엔드 기능은 하나의 프로젝트에서 처리 (대규모는 별도 서버 필요)</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

        </div>
      </div>
    </div>
  )
}