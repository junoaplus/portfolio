'use client'
import { Navigation } from '@/components/navigation'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ArrowLeft, Lightbulb, Rocket, TrendingUp, Target, Award } from 'lucide-react'
import Link from 'next/link'

export default function AgentSkillPage() {
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
            <div className="text-6xl mb-4">🤵</div>
            <h1 className="text-4xl font-black text-white mb-4">
              Agent
            </h1>
          </div>

          {/* 내가 이해한 에이전트 */}
          <Card className="bg-gray-800/80 backdrop-blur-sm border border-gray-600/50 shadow-2xl mb-12">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-white flex items-center gap-3">
                <Lightbulb className="w-6 h-6 text-yellow-500" />
                내가 이해한 Agent
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-lg text-gray-300 leading-relaxed space-y-4">
                <p>
                  <span className="font-bold text-cyan-400">Agent는 코드로 처리하던 분기와 에러 처리를 프롬프트로 바꿔주는 기술</span>입니다. 
                  예전에는 "이런 경우 어디로, 저런 경우 어디로, 이런 경우 어떻게 처리" 같은 걸 일일히 코딩해야 했습니다.
                </p>
                <p>
                  이제는 <span className="font-bold text-cyan-400">첫 번째 Agent가 질문을 분석해서 기술 전문 Agent로 넘기면 그 Agent가 기술 관련 답변을 생성</span>합니다. 
                  <span className="font-bold text-cyan-400">예측할 수 없는 수백가지 예외 상황을 각 전문 Agent가 자동으로 처리</span>합니다.
                </p>
                <p>
                  다만 <span className="font-bold text-cyan-400">LLM의 한계로 인해 라우팅 판단이 아직 완벽하지 않아서</span> 
                  <span className="font-bold text-cyan-400">LangGraph나 2중 검증 Agent 같은 안전장치</span>를 걸어야 하고, 
                  <span className="font-bold text-cyan-400">블랙박스 특성상 충분한 테스트가 필요</span>합니다.
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
                <div className="bg-gradient-to-r from-blue-900/20 to-cyan-900/20 rounded-xl p-6 border border-blue-600/30 cursor-pointer hover:bg-gradient-to-r hover:from-blue-900/30 hover:to-cyan-900/30 transition-all duration-300" onClick={() => window.open('/ai-chatbot-portfolio', '_blank')}>
                  <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2 hover:text-blue-300 transition-colors">
                    <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                    AI 챗봇 포트폴리오 →
                  </h3>
                  <div className="text-gray-300 space-y-3">
                    <p>
                      <span className="font-bold text-cyan-400">기술, 프로젝트, 개인 경험 에이전트로 분업</span>했습니다. 
                      질문 유형을 파악한 후 해당 전문 에이전트로 라우팅하여 
                      <span className="font-bold text-cyan-400">각 분야에서 전문적인 답변</span>을 제공합니다.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* 에이전트로 해결할 수 있는 문제들 */}
          <Card className="bg-gray-800/80 backdrop-blur-sm border border-gray-600/50 shadow-2xl mb-12">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-white flex items-center gap-3">
                <Award className="w-6 h-6 text-blue-500" />
                Agent로 해결할 수 있는 문제들
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-1 gap-6">
                {/* 복잡한 분기 처리의 어려움 */}
                <div className="bg-gradient-to-r from-blue-900/20 to-cyan-900/20 rounded-xl p-6 border border-blue-600/30">
                  <h4 className="font-bold text-white mb-3 flex items-center gap-2">
                    <div className="text-2xl">🔀</div>
                    복잡한 분기 처리의 어려움
                  </h4>
                  <div className="text-gray-300 space-y-2">
                    <div>• <span className="font-bold text-cyan-400">기존: "이런 경우 어디로, 저런 경우 어디로" 일일히 코딩</span></div>
                    <div>• <span className="font-bold text-cyan-400">해결: 프롬프트로 AI가 자동 판단하여 적절한 에이전트로 라우팅</span></div>
                  </div>
                </div>

                {/* 예외 상황 처리의 복잡성 */}
                <div className="bg-gradient-to-r from-green-900/20 to-emerald-900/20 rounded-xl p-6 border border-green-600/30">
                  <h4 className="font-bold text-white mb-3 flex items-center gap-2">
                    <div className="text-2xl">⚠️</div>
                    예외 상황 처리의 복잡성
                  </h4>
                  <div className="text-gray-300 space-y-2">
                    <div>• <span className="font-bold text-green-400">기존: 예측할 수 없는 수백가지 예외 상황을 모두 코딩</span></div>
                    <div>• <span className="font-bold text-green-400">해결: AI가 프롬프트 기반으로 예외 상황을 자동 처리</span></div>
                  </div>
                </div>

                {/* 신뢰성과 안정성 확보 */}
                <div className="bg-gradient-to-r from-purple-900/20 to-pink-900/20 rounded-xl p-6 border border-purple-600/30">
                  <h4 className="font-bold text-white mb-3 flex items-center gap-2">
                    <div className="text-2xl">🛡️</div>
                    신뢰성과 안정성 확보
                  </h4>
                  <div className="text-gray-300 space-y-2">
                    <div>• <span className="font-bold text-purple-400">한계: LLM 판단이 완벽하지 않은 블랙박스 영역</span></div>
                    <div>• <span className="font-bold text-purple-400">대응: LangGraph, 2중 검증 에이전트, 충분한 테스트로 안정성 확보</span></div>
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