'use client'
import { Navigation } from '@/components/navigation'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ArrowLeft, Lightbulb, Rocket, TrendingUp, Target, Award } from 'lucide-react'
import Link from 'next/link'

export default function ReactSkillPage() {
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
            <div className="text-6xl mb-4">⚛️</div>
            <h1 className="text-4xl font-black text-white mb-4">
              React
            </h1>
          </div>

          {/* 내가 이해한 React */}
          <Card className="bg-gray-800/80 backdrop-blur-sm border border-gray-600/50 shadow-2xl mb-12">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-white flex items-center gap-3">
                <Lightbulb className="w-6 h-6 text-yellow-500" />
                내가 이해한 React
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-lg text-gray-300 leading-relaxed space-y-4">
                <p>
                  <span className="font-bold text-cyan-400">챗봇을 만들 때 화면에 새로 추가되거나 할 때마다 상태가 바뀔 때 화면에 업데이트되는 기술</span>에 대해 배우다가 
                  이 기술을 알게 되었습니다. 기존에는 DOM을 직접 조작해야 했는데 
                  <span className="font-bold text-cyan-400">React는 상태만 바꾸면 자동으로 화면이 업데이트</span>되는 점이 정말 좋았습니다.
                </p>
                <p>
                  그리고 <span className="font-bold text-cyan-400">컴포넌트 재사용을 할 수 있다는 장점</span>이 있어서 좋았습니다. 
                  한 번 만든 컴포넌트를 여러 곳에서 쓸 수 있어서 
                  <span className="font-bold text-cyan-400">개발 효율성이 엄청 올라갔습니다.</span>
                </p>
                <p>
                  다만 <span className="font-bold text-cyan-400">Next.js는 React의 단점들을 보완</span>해서 더 좋았습니다. 
                  React 단독으로는 SEO나 초기 로딩 속도에 한계가 있었는데, 
                  <span className="font-bold text-cyan-400">Next.js가 이런 부분들을 해결</span>해주니까 더 완성도 높은 서비스를 만들 수 있었어요.
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
                      <span className="font-bold text-cyan-400">React 컴포넌트 기반</span>으로 각 페이지와 
                      UI 요소들을 <span className="font-bold text-cyan-400">재사용 가능한 모듈</span>로 설계했습니다.
                    </p>
                    <p>
                      <span className="font-bold text-cyan-400">함수형 컴포넌트와 Hooks</span>를 활용하여 
                      <span className="font-bold text-blue-300">상태 관리와 사이드 이펙트</span>를 효율적으로 처리했습니다.
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
                      <span className="font-bold text-cyan-400">React 컴포넌트 기반</span>으로 대화형 추천 인터페이스를 구축하여 
                      사용자와 AI 간의 <span className="font-bold text-cyan-400">자연스러운 상호작용</span>을 구현했습니다.
                    </p>
                    <p>
                      <span className="font-bold text-cyan-400">useState와 useEffect</span>를 활용해 
                      <span className="font-bold text-blue-300">실시간 채팅 상태 관리</span>와 API 통신을 처리했습니다.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* React로 해결할 수 있는 문제들 */}
          <Card className="bg-gray-800/80 backdrop-blur-sm border border-gray-600/50 shadow-2xl mb-12">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-white flex items-center gap-3">
                <Award className="w-6 h-6 text-blue-500" />
                React로 해결할 수 있는 문제들
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-1 gap-6">
                {/* 챗봇 화면 업데이트의 어려움 */}
                <div className="bg-gradient-to-r from-blue-900/20 to-cyan-900/20 rounded-xl p-6 border border-blue-600/30">
                  <h4 className="font-bold text-white mb-3 flex items-center gap-2">
                    <div className="text-2xl">💬</div>
                    챗봇 화면 업데이트의 어려움
                  </h4>
                  <div className="text-gray-300 space-y-2">
                    <div>• <span className="font-bold text-cyan-400">기존:</span> 채팅 메시지가 추가될 때마다 DOM을 직접 조작해야 하는 번거로움</div>
                    <div>• <span className="font-bold text-cyan-400">해결:</span> 상태만 바꾸면 화면이 자동으로 업데이트되어 즉시 반영</div>
                  </div>
                </div>
                
                {/* 반복적인 UI 개발 */}
                <div className="bg-gradient-to-r from-green-900/20 to-emerald-900/20 rounded-xl p-6 border border-green-600/30">
                  <h4 className="font-bold text-white mb-3 flex items-center gap-2">
                    <div className="text-2xl">🔄</div>
                    반복적인 UI 개발
                  </h4>
                  <div className="text-gray-300 space-y-2">
                    <div>• <span className="font-bold text-green-400">기존:</span> 버튼, 카드 같은 UI 요소를 매번 새로 만들어야 하는 비효율</div>
                    <div>• <span className="font-bold text-green-400">해결:</span> 컴포넌트로 한 번 만들어두면 여러 곳에서 재사용 가능</div>
                  </div>
                </div>

                {/* 단독 사용의 한계 */}
                <div className="bg-gradient-to-r from-purple-900/20 to-pink-900/20 rounded-xl p-6 border border-purple-600/30">
                  <h4 className="font-bold text-white mb-3 flex items-center gap-2">
                    <div className="text-2xl">⚠️</div>
                    React 단독 사용의 한계
                  </h4>
                  <div className="text-gray-300 space-y-2">
                    <div>• <span className="font-bold text-purple-400">기존:</span> SEO나 초기 로딩 속도에서 아쉬운 부분이 있음</div>
                    <div>• <span className="font-bold text-purple-400">해결:</span> Next.js 같은 프레임워크와 함께 사용하면 이런 단점들 보완 가능</div>
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