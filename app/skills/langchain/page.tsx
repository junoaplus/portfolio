'use client'
import { Navigation } from '@/components/navigation'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ArrowLeft, Lightbulb, Rocket, TrendingUp, Target, Award } from 'lucide-react'
import Link from 'next/link'

export default function LangChainSkillPage() {
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
            <div className="text-6xl mb-4">🔗</div>
            <h1 className="text-4xl font-black text-white mb-4">
              LangChain
            </h1>
          </div>

          {/* 내가 이해한 랭체인 */}
          <Card className="bg-gray-800/80 backdrop-blur-sm border border-gray-600/50 shadow-2xl mb-12">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-white flex items-center gap-3">
                <Lightbulb className="w-6 h-6 text-yellow-500" />
                내가 이해한 LangChain
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-lg text-gray-300 leading-relaxed space-y-4">
                <p>
                  <span className="font-bold text-cyan-400">랭체인은 대화의 맥락을 이어나가는 부분에서 편의성을 높여주었습니다.</span> 
                  특히 여기서 핵심은 <span className="font-bold text-cyan-400">기능에 따라서 메모리 전략을 잘 정리해야 한다</span>는 점이에요.
                </p>
                <p>
                  예를 들어 <span className="font-bold text-cyan-400">분위기나 느낌을 수집하는 곳에서는 요약 저장이 좋고</span>, 
                  <span className="font-bold text-cyan-400">모든 정보를 수집해야 되는 민감한 정보들은 그 자체를 모두 가지는게 좋아요.</span> 
                  물론 상황에 따라서는 하이브리드 방식으로 둘을 적절히 조합하거나, 
                  비용이 들더라도 퀄리티를 위해 모든 내용을 기억하도록 설정하는 것도 괜찮다고 생각합니다.
                </p>
                <p>
                  결국 랭체인의 진짜 강점은 <span className="font-bold text-cyan-400">상황에 맞는 메모리 관리 전략을 유연하게 선택할 수 있다</span>는 거예요. 
                  단순히 프레임워크를 쓰는게 아니라, 비즈니스 요구사항에 따라 
                  <span className="font-bold text-cyan-400">효율성과 품질 사이의 균형을 조절할 수 있는</span> 도구라고 이해하고 있습니다.
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
                <div className="bg-gradient-to-r from-blue-900/20 to-cyan-900/20 rounded-xl p-6 border border-blue-600/30 cursor-pointer hover:bg-gradient-to-r hover:from-blue-900/30 hover:to-cyan-900/30 transition-all duration-300" onClick={() => window.open('/date-recommendation', '_blank')}>
                  <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2 hover:text-blue-300 transition-colors">
                    <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                    데이트 코스 추천 AI 시스템 →
                  </h3>
                  <div className="text-gray-300 space-y-3">
                    <p>
                      <span className="font-bold text-cyan-400">분위기를 이어가는 부분이라서 요약해서 저장하는 방식</span>을 사용했습니다. 
                      사용자의 선호도나 대화 톤 같은 전반적인 느낌만 기억하면 되니까 
                      <span className="font-bold text-cyan-400">효율적인 메모리 관리</span>가 가능했어요.
                    </p>
                  </div>
                </div>
                
                <div className="bg-gradient-to-r from-green-900/20 to-teal-900/20 rounded-xl p-6 border border-green-600/30 cursor-pointer hover:bg-gradient-to-r hover:from-green-900/30 hover:to-teal-900/30 transition-all duration-300" onClick={() => window.open('/boardgame-chatbot', '_blank')}>
                  <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2 hover:text-green-300 transition-colors">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    보드게임 룰 챗봇 'BOVI' →
                  </h3>
                  <div className="text-gray-300 space-y-3">
                    <p>
                      <span className="font-bold text-cyan-400">게임 룰적인 질문이라서 최근 질문은 남겨두고 위쪽은 요약하는 하이브리드 전략</span>을 사용했습니다. 
                      정확한 룰 설명이 중요한 부분은 원문 그대로 유지하면서도 
                      <span className="font-bold text-cyan-400">메모리 효율성을 챙길 수 있었어요.</span>
                    </p>
                  </div>
                </div>
              </div>
              
            </CardContent>
          </Card>



          {/* 랭체인으로 해결할 수 있는 문제들 */}
          <Card className="bg-gray-800/80 backdrop-blur-sm border border-gray-600/50 shadow-2xl mb-12">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-white flex items-center gap-3">
                <Award className="w-6 h-6 text-blue-500" />
                랭체인으로 해결할 수 있는 문제들
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-1 gap-6">
                {/* 개발 기간 단축 */}
                <div className="bg-gradient-to-r from-blue-900/20 to-cyan-900/20 rounded-xl p-6 border border-blue-600/30">
                  <h4 className="font-bold text-white mb-3 flex items-center gap-2">
                    <div className="text-2xl">🚀</div>
                    개발 기간 단축
                  </h4>
                  <div className="text-gray-300 space-y-2">
                    <div>• <span className="font-bold text-cyan-400">반복되는 LLM 호출 로직을 체인으로 재사용</span></div>
                    <div>• <span className="font-bold text-cyan-400">복잡한 AI 파이프라인을 모듈화해서 빠른 개발</span></div>
                  </div>
                </div>

                {/* 상황에 맞는 메모리 전략 */}
                <div className="bg-gradient-to-r from-green-900/20 to-emerald-900/20 rounded-xl p-6 border border-green-600/30">
                  <h4 className="font-bold text-white mb-3 flex items-center gap-2">
                    <div className="text-2xl">💡</div>
                    상황에 맞는 메모리 전략 선택
                  </h4>
                  <div className="text-gray-300 space-y-2">
                    <div>• <span className="font-bold text-green-400">퀄리티 우선:</span> 모든 대화 저장 (비용 높음, 품질 최고)</div>
                    <div>• <span className="font-bold text-green-400">비용 우선:</span> 요약 저장 (비용 낮음, 효율적)</div>
                    <div>• <span className="font-bold text-green-400">균형:</span> 하이브리드 전략 (퀄리티와 비용의 중간)</div>
                  </div>
                </div>

                {/* 비즈니스 요구사항 최적화 */}
                <div className="bg-gradient-to-r from-purple-900/20 to-pink-900/20 rounded-xl p-6 border border-purple-600/30">
                  <h4 className="font-bold text-white mb-3 flex items-center gap-2">
                    <div className="text-2xl">🎯</div>
                    비즈니스 요구사항에 맞는 최적화
                  </h4>
                  <div className="text-gray-300 space-y-2">
                    <div>• <span className="font-bold text-purple-400">프로젝트 특성에 따라 전략을 유연하게 선택</span></div>
                    <div>• <span className="font-bold text-purple-400">상황별로 다른 메모리 관리 방식 적용 가능</span></div>
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