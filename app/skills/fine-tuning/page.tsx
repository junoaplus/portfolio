'use client'
import { Navigation } from '@/components/navigation'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ArrowLeft, Lightbulb, Rocket, TrendingUp, Target, Award } from 'lucide-react'
import Link from 'next/link'

export default function FineTuningSkillPage() {
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
            <div className="text-6xl mb-4">🎯</div>
            <h1 className="text-4xl font-black text-white mb-4">
              Fine-tuning
            </h1>
          </div>

          {/* 내가 이해한 Fine-tuning */}
          <Card className="bg-gray-800/80 backdrop-blur-sm border border-gray-600/50 shadow-2xl mb-12">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-white flex items-center gap-3">
                <Lightbulb className="w-6 h-6 text-yellow-500" />
                내가 이해한 Fine-tuning
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-lg text-gray-300 leading-relaxed space-y-4">
                <p>
                  <span className="font-bold text-cyan-400">파인튜닝은 개발자들이 LLM에 다가갈 수 있도록 도와준 첫번째 기술이라고 생각합니다.</span> 
                  하이퍼파라미터 조정을 통해 여러번의 실험을 하다 보면 원하는 결과가 나오고, 
                  <span className="font-bold text-cyan-400">내가 원하는 대로 입맛대로 바꿀 수 있기 때문입니다.</span> 
                  여러 서비스로 확장해 나아가는데 도움을 줬다고 생각합니다.
                </p>
                <p>
                  하지만 <span className="font-bold text-cyan-400">비용이 비싸고 시간이 오래 걸리고, 데이터가 정말 많이 필요합니다.</span> 
                  그리고 <span className="font-bold text-cyan-400">데이터 품질에 따라 성능이 너무 좌우되어서</span> 
                  요즘은 벡터 DB를 더 많이 사용하는 추세인 것 같습니다.
                </p>
                <p>
                  결국 파인튜닝은 <span className="font-bold text-cyan-400">LLM 커스터마이징의 시작점이었지만, 현실적인 제약들로 인해 RAG 같은 더 효율적인 방법들이 주목받고 있다</span>고 생각합니다.
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
                <div className="bg-gradient-to-r from-blue-900/20 to-cyan-900/20 rounded-xl p-6 border border-blue-600/30 cursor-pointer hover:bg-gradient-to-r hover:from-blue-900/30 hover:to-cyan-900/30 transition-all duration-300" onClick={() => window.open('/boardgame-chatbot', '_blank')}>
                  <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2 hover:text-blue-300 transition-colors">
                    <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                    보드게임 룰 챗봇 'BOVI' →
                  </h3>
                  <div className="text-gray-300 space-y-3">
                    <p>
                      <span className="font-bold text-cyan-400">미세 조정과 데이터 수 조정 등</span>을 통해 
                      일반적인 대화형 AI를 <span className="font-bold text-cyan-400">보드게임 전문가 시스템</span>으로 
                      변환했습니다. 도메인 특화 학습으로 룰 설명의 정확도와 
                      전문성을 크게 향상시켰습니다.
                    </p>
                  </div>
                </div>
              </div>
              
            </CardContent>
          </Card>



          {/* Fine-tuning으로 해결할 수 있는 문제들 */}
          <Card className="bg-gray-800/80 backdrop-blur-sm border border-gray-600/50 shadow-2xl mb-12">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-white flex items-center gap-3">
                <Award className="w-6 h-6 text-blue-500" />
                Fine-tuning으로 해결할 수 있는 문제들
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-1 gap-6">
                {/* LLM 접근성 문제 */}
                <div className="bg-gradient-to-r from-blue-900/20 to-indigo-900/20 rounded-xl p-6 border border-blue-600/30">
                  <h4 className="font-bold text-white mb-3 flex items-center gap-2">
                    <div className="text-2xl">🚀</div>
                    LLM 접근성과 커스터마이징 문제
                  </h4>
                  <div className="text-gray-300 space-y-2">
                    <div>• <span className="font-bold text-blue-400">기존:</span> 개발자들이 LLM을 다루기 어려웠던 상황</div>
                    <div>• <span className="font-bold text-blue-400">해결:</span> 하이퍼파라미터 조정으로 원하는 결과를 얻고 입맛대로 바꿀 수 있습니다</div>
                  </div>
                </div>

                {/* 전문 데이터 학습 문제 */}
                <div className="bg-gradient-to-r from-green-900/20 to-emerald-900/20 rounded-xl p-6 border border-green-600/30">
                  <h4 className="font-bold text-white mb-3 flex items-center gap-2">
                    <div className="text-2xl">🎯</div>
                    전문 데이터 학습 문제
                  </h4>
                  <div className="text-gray-300 space-y-2">
                    <div>• <span className="font-bold text-green-400">문제:</span> 최신 데이터나 잘 알지 못하는 전문 데이터 처리 한계</div>
                    <div>• <span className="font-bold text-green-400">해결:</span> 학습을 통해서 더 수준 높은 서비스 제공이 가능합니다</div>
                    <div>• <span className="font-bold text-green-400">현실:</span> 비용과 시간이 많이 들어서 요즘은 벡터 DB를 더 많이 사용하는 추세입니다</div>
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