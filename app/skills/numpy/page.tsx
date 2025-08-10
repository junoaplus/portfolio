'use client'
import { Navigation } from '@/components/navigation'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ArrowLeft, Lightbulb, Rocket, TrendingUp, Target, Award } from 'lucide-react'
import Link from 'next/link'

export default function NumPySkillPage() {
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
            <div className="text-6xl mb-4">🔢</div>
            <h1 className="text-4xl font-black text-white mb-4">
              NumPy
            </h1>
          </div>

          {/* 내가 이해한 NumPy */}
          <Card className="bg-gray-800/80 backdrop-blur-sm border border-gray-600/50 shadow-2xl mb-12">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-white flex items-center gap-3">
                <Lightbulb className="w-6 h-6 text-yellow-500" />
                내가 이해한 NumPy
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-lg text-gray-300 leading-relaxed space-y-4">
                <p>
                  <span className="font-bold text-cyan-400">배열과 행렬 계산을 빠르게 할 수 있게 해주는 파이썬 라이브러리</span>입니다.
                </p>
                <p>
                  <span className="font-bold text-cyan-400">수학 계산, 통계, 선형대수</span> 등 과학 계산에 필요한 기능들을 제공하고, 
                  특히 pandas나 scikit-learn 같은 다른 라이브러리들의 
                  <span className="font-bold text-cyan-400">기반이 되는 핵심 라이브러리입니다.</span>
                </p>
                <p>
                  장점은 <span className="font-bold text-cyan-400">C로 구현되어서 파이썬 리스트보다 훨씬 빠르다</span>는 것이고, 
                  단점은 <span className="font-bold text-cyan-400">직접 사용하기보다는 다른 라이브러리 내부에서 쓰인다</span>는 것입니다.
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
                      <span className="font-bold text-cyan-400">pandas와 scikit-learn 뒤에서 수치 계산</span>을 
                      담당했습니다. 
                      <span className="font-bold text-cyan-400">배열 연산과 통계 계산</span>의 기반 역할을 했습니다.
                    </p>
                  </div>
                </div>
                
              </div>
              
            </CardContent>
          </Card>

          {/* NumPy로 해결할 수 있는 문제들 */}
          <Card className="bg-gray-800/80 backdrop-blur-sm border border-gray-600/50 shadow-2xl mb-12">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-white flex items-center gap-3">
                <Award className="w-6 h-6 text-blue-500" />
                NumPy로 해결할 수 있는 문제들
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-1 gap-6">
                {/* 느린 파이썬 계산 */}
                <div className="bg-gradient-to-r from-blue-900/20 to-cyan-900/20 rounded-xl p-6 border border-blue-600/30">
                  <h4 className="font-bold text-white mb-3 flex items-center gap-2">
                    <div className="text-2xl">⚡</div>
                    느린 파이썬 계산 속도
                  </h4>
                  <div className="text-gray-300 space-y-2">
                    <div>• <span className="font-bold text-blue-400">문제:</span> 파이썬 리스트로 큰 데이터 계산하면 너무 느린 경우</div>
                    <div>• <span className="font-bold text-blue-400">해결:</span> C로 구현된 배열 연산으로 빠른 수치 계산</div>
                  </div>
                </div>

                {/* 과학 계산과 선형대수 */}
                <div className="bg-gradient-to-r from-green-900/20 to-emerald-900/20 rounded-xl p-6 border border-green-600/30">
                  <h4 className="font-bold text-white mb-3 flex items-center gap-2">
                    <div className="text-2xl">🔬</div>
                    과학 계산과 선형대수
                  </h4>
                  <div className="text-gray-300 space-y-2">
                    <div>• <span className="font-bold text-green-400">문제:</span> 복잡한 수학 계산과 행렬 연산이 필요한 경우</div>
                    <div>• <span className="font-bold text-green-400">해결:</span> 벡터화 연산과 수학 함수로 효율적인 계산</div>
                  </div>
                </div>

                {/* 직접 사용 빈도 */}
                <div className="bg-gradient-to-r from-red-900/20 to-pink-900/20 rounded-xl p-6 border border-red-600/30">
                  <h4 className="font-bold text-white mb-3 flex items-center gap-2">
                    <div className="text-2xl">📚</div>
                    직접 사용 빈도 낮음
                  </h4>
                  <div className="text-gray-300 space-y-2">
                    <div>• <span className="font-bold text-red-400">특징:</span> 다른 라이브러리들의 기반으로 간접적으로 사용</div>
                    <div>• <span className="font-bold text-red-400">고려사항:</span> pandas, scikit-learn 등이 NumPy 기반으로 동작</div>
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