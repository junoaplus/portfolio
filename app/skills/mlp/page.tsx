'use client'
import { Navigation } from '@/components/navigation'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ArrowLeft, Lightbulb, Rocket, TrendingUp, Target, Award } from 'lucide-react'
import Link from 'next/link'

export default function MLPSkillPage() {
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
              MLP
            </h1>
          </div>

          {/* 내가 이해한 MLP */}
          <Card className="bg-gray-800/80 backdrop-blur-sm border border-gray-600/50 shadow-2xl mb-12">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-white flex items-center gap-3">
                <Lightbulb className="w-6 h-6 text-yellow-500" />
                내가 이해한 MLP
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-lg text-gray-300 leading-relaxed space-y-4">
                <p>
                  <span className="font-bold text-cyan-400">여러 층의 뉴런들이 연결되어 있어서 복잡한 패턴을 학습</span>하는 
                  알고리즘입니다.
                </p>
                <p>
                  <span className="font-bold text-cyan-400">분류와 회귀 문제</span>에서 모두 사용할 수 있고, 
                  특히 비선형 관계를 잘 찾아내서 
                  <span className="font-bold text-cyan-400">복잡한 문제를 해결할 수 있습니다.</span>
                </p>
                <p>
                  장점은 <span className="font-bold text-cyan-400">복잡한 비선형 패턴을 학습할 수 있다</span>는 것이고, 
                  단점은 <span className="font-bold text-cyan-400">많은 데이터와 시간이 필요하고 결과를 해석하기 어렵다</span>는 것입니다.
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
                <div className="bg-gradient-to-r from-blue-900/20 to-cyan-900/20 rounded-xl p-6 border border-blue-600/30 cursor-pointer hover:bg-gradient-to-r hover:from-blue-900/30 hover:to-cyan-900/30 transition-all duration-300" onClick={() => window.open('/newspaper-churn', '_blank')}>
                  <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2 hover:text-blue-300 transition-colors">
                    <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                    신문 구독자 이탈 예측 →
                  </h3>
                  <div className="text-gray-300 space-y-3">
                    <p>
                      <span className="font-bold text-cyan-400">여러 층의 뉴런으로 복잡한 패턴</span>을 
                      학습해서 구독자 이탈을 예측했습니다. 
                      <span className="font-bold text-cyan-400">분류 문제</span>에서 비선형 관계를 잘 찾아냈습니다.
                    </p>
                  </div>
                </div>
                
              </div>
              
            </CardContent>
          </Card>

          {/* MLP로 해결할 수 있는 문제들 */}
          <Card className="bg-gray-800/80 backdrop-blur-sm border border-gray-600/50 shadow-2xl mb-12">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-white flex items-center gap-3">
                <Award className="w-6 h-6 text-blue-500" />
                MLP로 해결할 수 있는 문제들
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-1 gap-6">
                {/* 복잡한 비선형 문제 */}
                <div className="bg-gradient-to-r from-blue-900/20 to-cyan-900/20 rounded-xl p-6 border border-blue-600/30">
                  <h4 className="font-bold text-white mb-3 flex items-center gap-2">
                    <div className="text-2xl">🧠</div>
                    복잡한 비선형 문제
                  </h4>
                  <div className="text-gray-300 space-y-2">
                    <div>• <span className="font-bold text-blue-400">문제:</span> 선형으로는 해결할 수 없는 복잡한 패턴</div>
                    <div>• <span className="font-bold text-blue-400">해결:</span> 여러 층으로 비선형 관계 학습</div>
                  </div>
                </div>

                {/* 고차원 데이터 문제 */}
                <div className="bg-gradient-to-r from-green-900/20 to-emerald-900/20 rounded-xl p-6 border border-green-600/30">
                  <h4 className="font-bold text-white mb-3 flex items-center gap-2">
                    <div className="text-2xl">📊</div>
                    고차원 데이터 문제
                  </h4>
                  <div className="text-gray-300 space-y-2">
                    <div>• <span className="font-bold text-green-400">문제:</span> 변수가 많은 복잡한 데이터</div>
                    <div>• <span className="font-bold text-green-400">해결:</span> 뉴런들이 특징을 자동으로 추출해서 학습</div>
                  </div>
                </div>

                {/* 해석성과 학습시간 한계 */}
                <div className="bg-gradient-to-r from-red-900/20 to-pink-900/20 rounded-xl p-6 border border-red-600/30">
                  <h4 className="font-bold text-white mb-3 flex items-center gap-2">
                    <div className="text-2xl">⚠️</div>
                    해석성과 학습시간 한계
                  </h4>
                  <div className="text-gray-300 space-y-2">
                    <div>• <span className="font-bold text-red-400">한계:</span> 블랙박스라서 결과를 해석하기 어려움</div>
                    <div>• <span className="font-bold text-red-400">고려사항:</span> 많은 데이터와 긴 학습 시간 필요</div>
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