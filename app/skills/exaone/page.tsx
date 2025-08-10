'use client'
import { Navigation } from '@/components/navigation'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ArrowLeft, Lightbulb, Rocket, TrendingUp, Target, Award } from 'lucide-react'
import Link from 'next/link'

export default function EXAONESkillPage() {
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
              EXAONE
            </h1>
          </div>

          {/* 개인적 견해 */}
          <Card className="bg-gray-800/80 backdrop-blur-sm border border-gray-600/50 shadow-2xl mb-12">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-white flex items-center gap-3">
                <Lightbulb className="w-6 h-6 text-yellow-500" />
                내가 이해한 EXAONE
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-lg text-gray-300 leading-relaxed space-y-4">
                <p>
                  <span className="font-bold text-cyan-400">EXAONE은 한국어 AI의 새로운 가능성을 연 혁신</span>이라고 생각합니다. 
                  글로벌 모델들이 영어 중심으로 설계된 반면 
                  <span className="font-bold text-cyan-400">한국어 특화 성능</span>에서 압도적인 우위를 보여줍니다.
                </p>
                <p>
                  특히 <span className="font-bold text-cyan-400">허깅페이스에 오픈 소스로 공개되어 있고</span> 
                  <span className="font-bold text-cyan-400">로컬 환경(맥북 M1 Pro)에서도 돌아간다는 게</span> 너무 놀라웠습니다. 
                  <span className="font-bold text-cyan-400">파인튜닝을 연습해보거나 직접 해보고 싶을 때 할 수 있는 게</span> 정말 좋다고 생각합니다.
                </p>
                <p>
                  보드게임 룰 챗봇 프로젝트에서 <span className="font-bold text-cyan-400">EXAONE 파인튜닝</span>을 경험하면서, 
                  217개 보드게임의 복잡한 룰을 학습하고 
                  <span className="font-bold text-cyan-400">자연스러운 한국어로 설명</span>하는 능력에 감탄했습니다. 
                  <span className="font-bold text-cyan-400">파인튜닝해서 허깅페이스에 올린 것도</span> 좋은 경험이었습니다.
                </p>
                <p>
                  하지만 <span className="font-bold text-cyan-400">상업적 사용이 안 되는 게</span> 아쉬웠습니다. 
                  개인 프로젝트나 연구용으로는 완벽하지만, 실제 서비스에 적용하기에는 제약이 있다고 생각합니다.
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
              <div className="bg-gradient-to-r from-orange-900/20 to-red-900/20 rounded-xl p-6 border border-orange-600/30 cursor-pointer hover:bg-gradient-to-r hover:from-orange-900/30 hover:to-red-900/30 transition-all duration-300" onClick={() => window.open('/boardgame-chatbot', '_blank')}>
                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2 hover:text-orange-300 transition-colors">
                  <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                  보드게임 룰 챗봇 시스템 →
                </h3>
                <div className="text-gray-300 space-y-3">
                  <p>
                    <span className="font-bold text-cyan-400">EXAONE 파인튜닝</span>으로 217개 보드게임의 복잡한 룰을 학습하여 
                    사용자 질문에 <span className="font-bold text-cyan-400">정확하고 자연스러운 한국어</span>로 답변하는 시스템을 구축했습니다.
                  </p>
                  <p>
                    <span className="font-bold text-cyan-400">도메인 특화 파인튜닝</span>을 통해 
                    일반적인 LLM으로는 불가능한 <span className="font-bold text-blue-300">전문적인 게임 룰 해석</span>과 
                    상황별 맞춤 가이드를 제공했습니다.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>


          {/* EXAONE으로 해결할 수 있는 문제들 */}
          <Card className="bg-gray-800/80 backdrop-blur-sm border border-gray-600/50 shadow-2xl mb-12">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-white flex items-center gap-3">
                <Award className="w-6 h-6 text-blue-500" />
                EXAONE으로 해결할 수 있는 문제들
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-1 gap-6">
                {/* 한국어 특화 AI 서비스 문제 */}
                <div className="bg-gradient-to-r from-purple-900/20 to-indigo-900/20 rounded-xl p-6 border border-purple-600/30">
                  <h4 className="font-bold text-white mb-3 flex items-center gap-2">
                    <div className="text-2xl">🇰🇷</div>
                    한국어 특화 AI 서비스 구축 문제
                  </h4>
                  <div className="text-gray-300 space-y-2">
                    <div>• <span className="font-bold text-purple-400">문제:</span> 글로벌 모델들이 영어 중심으로 설계된 한계</div>
                    <div>• <span className="font-bold text-purple-400">해결:</span> 한국어 특화 성능에서 압도적인 우위를 보여줍니다</div>
                  </div>
                </div>

                {/* 도메인 특화 AI 개발 문제 */}
                <div className="bg-gradient-to-r from-green-900/20 to-emerald-900/20 rounded-xl p-6 border border-green-600/30">
                  <h4 className="font-bold text-white mb-3 flex items-center gap-2">
                    <div className="text-2xl">🎯</div>
                    도메인 특화 AI 개발 문제
                  </h4>
                  <div className="text-gray-300 space-y-2">
                    <div>• <span className="font-bold text-green-400">문제:</span> 일반적인 대화형 AI를 넘어선 전문성 확보 필요</div>
                    <div>• <span className="font-bold text-green-400">해결:</span> 파인튜닝을 통한 도메인 특화로 정확성과 전문성을 확보할 수 있습니다</div>
                  </div>
                </div>

                {/* 한국 시장 최적화 문제 */}
                <div className="bg-gradient-to-r from-blue-900/20 to-cyan-900/20 rounded-xl p-6 border border-blue-600/30">
                  <h4 className="font-bold text-white mb-3 flex items-center gap-2">
                    <div className="text-2xl">🏢</div>
                    한국 시장 최적화 서비스 문제
                  </h4>
                  <div className="text-gray-300 space-y-2">
                    <div>• <span className="font-bold text-blue-400">문제:</span> 단순한 번역을 넘어선 문화적 맥락 이해 필요</div>
                    <div>• <span className="font-bold text-blue-400">해결:</span> 자연스러운 한국어로 설명하고 문화적 맥락을 이해하는 능력을 제공합니다</div>
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