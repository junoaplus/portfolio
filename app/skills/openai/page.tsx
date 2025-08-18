'use client'
import { Navigation } from '@/components/navigation'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ArrowLeft, Lightbulb, Rocket, TrendingUp, Target, Award } from 'lucide-react'
import Link from 'next/link'

export default function OpenAISkillPage() {
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
            <div className="text-6xl mb-4">🤖</div>
            <h1 className="text-4xl font-black text-white mb-4">
              OpenAI
            </h1>
          </div>

          {/* 내가 이해한 OpenAI */}
          <Card className="bg-gray-800/80 backdrop-blur-sm border border-gray-600/50 shadow-2xl mb-12">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-white flex items-center gap-3">
                <Lightbulb className="w-6 h-6 text-yellow-500" />
                내가 이해한 OpenAI
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-lg text-gray-300 leading-relaxed space-y-4">
                <p>
                  <span className="font-bold text-cyan-400">GPT가 나오면서 대중들에게 LLM 시대를 연 선구자라고 생각합니다.</span> 
                  ChatGPT의 등장으로 일반인들도 AI를 쉽게 접할 수 있게 되었고, 
                  이것이 전 세계 AI 혁신의 출발점이 되었다고 생각합니다.
                </p>
                <p>
                  <span className="font-bold text-cyan-400">가장 가성비 좋고 챗봇을 만들 때 정말 많이 애용합니다.</span> 
                  API 호출도 간단하고 성능도 뛰어나서, 실제 서비스에 적용하기에 가장 실용적인 선택이라고 생각합니다. 
                  특히 대화형 서비스를 구축할 때는 OpenAI만한 게 없다고 봅니다.
                </p>
                <p>
                  하지만 <span className="font-bold text-cyan-400">코드적 측면에서 볼 때 코드를 짤 때는 Claude Code를 사용합니다.</span> 
                  OpenAI는 대화와 챗봇에는 최고지만, 개발 작업에서는 Claude가 더 정확하고 세밀한 코딩 지원을 해준다고 생각합니다.
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
                      <span className="font-bold text-cyan-400">OpenAI API 기반 대화형 추천 시스템</span>을 구축하여 
                      사용자의 선호도, 예산, 위치 정보를 종합 분석하고 
                      <span className="font-bold text-cyan-400">개인맞춤형 데이트 코스를 자연스럽게 추천</span>하는 
                      지능형 플래너를 개발했습니다.
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
                      <span className="font-bold text-cyan-400">OpenAI GPT-4를 핵심 언어 엔진</span>으로 활용하여 
                      복잡한 보드게임 룰을 사용자 친화적으로 설명하는 챗봇을 개발했습니다. 
                      <span className="font-bold text-cyan-400">자연스러운 대화와 정확한 정보 제공</span>으로 
                      게임 룰 학습 경험을 혁신했습니다.
                    </p>
                  </div>
                </div>
              </div>
              
            </CardContent>
          </Card>



          {/* OpenAI로 해결할 수 있는 문제들 */}
          <Card className="bg-gray-800/80 backdrop-blur-sm border border-gray-600/50 shadow-2xl mb-12">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-white flex items-center gap-3">
                <Award className="w-6 h-6 text-blue-500" />
                OpenAI로 해결할 수 있는 문제들
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-1 gap-6">
                {/* LLM 대중화 및 접근성 */}
                <div className="bg-gradient-to-r from-purple-900/20 to-indigo-900/20 rounded-xl p-6 border border-purple-600/30">
                  <h4 className="font-bold text-white mb-3 flex items-center gap-2">
                    <div className="text-2xl">🌍</div>
                    LLM 대중화와 AI 민주화
                  </h4>
                  <div className="text-gray-300 space-y-2">
                    <div>• <span className="font-bold text-purple-400">기여:</span> GPT가 나오면서 대중들에게 LLM 시대를 연 선구자입니다</div>
                    <div>• <span className="font-bold text-purple-400">영향:</span> ChatGPT로 일반인들도 AI를 쉽게 접할 수 있게 되었습니다</div>
                  </div>
                </div>

                {/* 챗봇 개발과 가성비 */}
                <div className="bg-gradient-to-r from-green-900/20 to-emerald-900/20 rounded-xl p-6 border border-green-600/30">
                  <h4 className="font-bold text-white mb-3 flex items-center gap-2">
                    <div className="text-2xl">🤖</div>
                    챗봇 개발과 비용 효율성
                  </h4>
                  <div className="text-gray-300 space-y-2">
                    <div>• <span className="font-bold text-green-400">장점:</span> 가장 가성비 좋고 챗봇을 만들 때 정말 많이 애용합니다</div>
                    <div>• <span className="font-bold text-green-400">실용성:</span> API 호출도 간단하고 성능도 뛰어나서 실제 서비스에 적용하기 최적입니다</div>
                  </div>
                </div>

                {/* 영역별 특성화 */}
                <div className="bg-gradient-to-r from-blue-900/20 to-cyan-900/20 rounded-xl p-6 border border-blue-600/30">
                  <h4 className="font-bold text-white mb-3 flex items-center gap-2">
                    <div className="text-2xl">🎯</div>
                    영역별 AI 활용 구분
                  </h4>
                  <div className="text-gray-300 space-y-2">
                    <div>• <span className="font-bold text-blue-400">대화/챗봇:</span> OpenAI만한 게 없다고 봅니다</div>
                    <div>• <span className="font-bold text-blue-400">코드 작업:</span> 코드적 측면에서는 Claude Code를 사용합니다</div>
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