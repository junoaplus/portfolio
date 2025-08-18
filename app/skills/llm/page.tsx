'use client'
import { Navigation } from '@/components/navigation'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ArrowLeft, Lightbulb, Rocket, TrendingUp, Target, Award } from 'lucide-react'
import Link from 'next/link'

export default function LLMSkillPage() {
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
            <div className="text-6xl mb-4">🧠</div>
            <h1 className="text-4xl font-black text-white mb-4">
              LLM
            </h1>
          </div>

          {/* 내가 이해한 LLM */}
          <Card className="bg-gray-800/80 backdrop-blur-sm border border-gray-600/50 shadow-2xl mb-12">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-white flex items-center gap-3">
                <Lightbulb className="w-6 h-6 text-yellow-500" />
                내가 이해한 LLM
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-lg text-gray-300 leading-relaxed space-y-4">
                <p>
                  <span className="font-bold text-cyan-400">LLM은 AI 시장의 판도를 완전히 바꿔놓았다고 생각합니다.</span> 
                  그동안은 ML을 이용해서 직접 코드를 짜고 구현을 해야 했다면, 
                  <span className="font-bold text-cyan-400">이제는 LLM을 관리 감독하고 일을 시키면 알아서 코드를 다 짜 줍니다.</span> 
                  그리고 사용자와 챗봇을 만들 때도 LLM을 활용하면 됩니다.
                </p>
                <p>
                  하지만 <span className="font-bold text-cyan-400">너무 최신 기술만 따라가면 안 된다고 생각합니다.</span> 
                  로우레벨에서 해결할 수 있는 건 해결하고 간단하게 넘어가야 된다고 생각합니다. 
                  <span className="font-bold text-cyan-400">토큰을 쓰는 데 돈이 들 수도 있고, 블랙박스의 영역이기 때문에 어떤 결과가 나올지도 모릅니다.</span>
                </p>
                <p>
                  그래서 <span className="font-bold text-cyan-400">에러 처리를 잘해야 된다고 생각합니다.</span> 
                  특히 할루시네이션 대비가 중요합니다. 
                  <span className="font-bold text-cyan-400">벡터 DB로 최신 정보를 보완하거나, 특정 분야의 정보를 학습시키고 싶다면 파인튜닝과 벡터 DB를 활용</span>하는 것이 좋은 전략이라고 생각합니다.
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
                <div className="bg-gradient-to-r from-green-900/20 to-teal-900/20 rounded-xl p-6 border border-green-600/30 cursor-pointer hover:bg-gradient-to-r hover:from-green-900/30 hover:to-teal-900/30 transition-all duration-300" onClick={() => window.open('/date-recommendation', '_blank')}>
                  <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2 hover:text-green-300 transition-colors">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    데이트 코스 추천 AI 시스템 →
                  </h3>
                  <div className="text-gray-300 space-y-3">
                    <p>
                      <span className="font-bold text-cyan-400">대화형 LLM 기반 추천 엔진</span>을 구현하여 
                      사용자의 선호도, 예산, 위치를 종합 분석하고 
                      <span className="font-bold text-cyan-400">개인맞춤형 데이트 코스</span>를 자연스러운 대화로 
                      추천하는 지능형 서비스를 개발했습니다.
                    </p>
                  </div>
                </div>
                
                <div className="bg-gradient-to-r from-blue-900/20 to-cyan-900/20 rounded-xl p-6 border border-blue-600/30 cursor-pointer hover:bg-gradient-to-r hover:from-blue-900/30 hover:to-cyan-900/30 transition-all duration-300" onClick={() => window.open('/boardgame-chatbot', '_blank')}>
                  <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2 hover:text-blue-300 transition-colors">
                    <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                    보드게임 룰 챗봇 'BOVI' →
                  </h3>
                  <div className="text-gray-300 space-y-3">
                    <p>
                      <span className="font-bold text-cyan-400">GPT와 벡터 DB를 활용해서 구축하고, EXAONE 모델 파인튜닝한 것도 구축했습니다.</span> 
                      <span className="font-bold text-cyan-400">2가지를 다 구축</span>해서 
                      복잡한 보드게임 룰을 사용자가 이해하기 쉽게 설명하는 시스템을 만들었습니다.
                    </p>
                  </div>
                </div>
              </div>
              
            </CardContent>
          </Card>



          {/* LLM으로 해결할 수 있는 문제들 */}
          <Card className="bg-gray-800/80 backdrop-blur-sm border border-gray-600/50 shadow-2xl mb-12">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-white flex items-center gap-3">
                <Award className="w-6 h-6 text-blue-500" />
                LLM으로 해결할 수 있는 문제들
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-1 gap-6">
                {/* 개발 생산성 혁신 */}
                <div className="bg-gradient-to-r from-purple-900/20 to-indigo-900/20 rounded-xl p-6 border border-purple-600/30">
                  <h4 className="font-bold text-white mb-3 flex items-center gap-2">
                    <div className="text-2xl">⚡</div>
                    개발 생산성 혁신
                  </h4>
                  <div className="text-gray-300 space-y-2">
                    <div>• <span className="font-bold text-purple-400">기존:</span> ML로 직접 코드를 짜고 구현해야 하는 복잡한 과정</div>
                    <div>• <span className="font-bold text-purple-400">해결:</span> LLM을 관리 감독하면 알아서 코드를 다 짜 줍니다</div>
                  </div>
                </div>

                {/* 비용과 예측가능성 문제 */}
                <div className="bg-gradient-to-r from-orange-900/20 to-red-900/20 rounded-xl p-6 border border-orange-600/30">
                  <h4 className="font-bold text-white mb-3 flex items-center gap-2">
                    <div className="text-2xl">💰</div>
                    비용과 예측가능성 문제
                  </h4>
                  <div className="text-gray-300 space-y-2">
                    <div>• <span className="font-bold text-orange-400">주의:</span> 토큰 사용 비용과 블랙박스의 예측 불가능한 결과입니다</div>
                    <div>• <span className="font-bold text-orange-400">해결:</span> 로우레벨 해결 가능한 건 간단하게 처리하고, 에러 처리를 철저히 합니다</div>
                  </div>
                </div>

                {/* 정보 정확성 문제 */}
                <div className="bg-gradient-to-r from-green-900/20 to-teal-900/20 rounded-xl p-6 border border-green-600/30">
                  <h4 className="font-bold text-white mb-3 flex items-center gap-2">
                    <div className="text-2xl">🎯</div>
                    정보 정확성과 할루시네이션 문제
                  </h4>
                  <div className="text-gray-300 space-y-2">
                    <div>• <span className="font-bold text-green-400">문제:</span> 할루시네이션으로 인한 부정확한 정보 생성입니다</div>
                    <div>• <span className="font-bold text-green-400">해결:</span> 벡터 DB로 최신 정보를 보완하고, 파인튜닝으로 특정 분야 정확도를 향상시킵니다</div>
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