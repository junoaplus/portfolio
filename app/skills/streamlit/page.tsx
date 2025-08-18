'use client'
import { Navigation } from '@/components/navigation'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ArrowLeft, Lightbulb, Rocket, TrendingUp, Target, Award } from 'lucide-react'
import Link from 'next/link'

export default function StreamlitSkillPage() {
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
            <div className="text-6xl mb-4">🚀</div>
            <h1 className="text-4xl font-black text-white mb-4">
              Streamlit
            </h1>
          </div>

          {/* 개인적 견해 */}
          <Card className="bg-gray-800/80 backdrop-blur-sm border border-gray-600/50 shadow-2xl mb-12">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-white flex items-center gap-3">
                <Lightbulb className="w-6 h-6 text-yellow-500" />
내가 이해한 Streamlit
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-lg text-gray-300 leading-relaxed space-y-4">
                <p>
                  <span className="font-bold text-cyan-400">Streamlit을 처음 접한 것은 머신러닝을 배우면서 프로젝트를 할 때였습니다.</span> 
                  처음에는 머신러닝 기술에 집중하고 
                  <span className="font-bold text-cyan-400">프론트는 빠르게 띄어주고 싶었습니다.</span>
                </p>
                <p>
                  그럴 때 <span className="font-bold text-cyan-400">가장 간단한 게 Streamlit이어서</span> 이걸 써봤습니다. 
                  정말 Python 코드 몇 줄만으로 웹 인터페이스가 만들어지는 게 신기했어요. 
                  <span className="font-bold text-cyan-400">HTML, CSS, JavaScript 몰라도</span> 바로 결과를 보여줄 수 있었습니다.
                </p>
                <p>
                  다만 <span className="font-bold text-cyan-400">단점도 있었습니다.</span> 
                  디자인 커스터마이징이 제한적이고, 복잡한 인터랙션은 구현하기 어려웠어요. 
                  그래서 <span className="font-bold text-cyan-400">간단한 프로토타입이나 데이터 분석 결과 공유용</span>으로는 최고지만, 
                  완성도 높은 서비스에는 한계가 있다고 느껴습니다.
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
              <div className="bg-gradient-to-r from-purple-900/20 to-pink-900/20 rounded-xl p-6 border border-purple-600/30 cursor-pointer hover:bg-gradient-to-r hover:from-purple-900/30 hover:to-pink-900/30 transition-all duration-300" onClick={() => window.open('/newspaper-churn', '_blank')}>
                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2 hover:text-purple-300 transition-colors">
                  <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                  신문 구독자 이탈 예측 분석 →
                </h3>
                <div className="text-gray-300 space-y-3">
                  <p>
                    <span className="font-bold text-cyan-400">Streamlit 대시보드</span>로 6개 머신러닝 모델의 성능을 
                    실시간 비교 분석하고 <span className="font-bold text-cyan-400">인터랙티브한 데이터 탐색</span>을 제공했습니다.
                  </p>
                  <p>
                    <span className="font-bold text-cyan-400">동적 시각화와 모델 해석</span>을 통해 
                    비즈니스 팀이 <span className="font-bold text-blue-300">복잡한 ML 결과</span>를 직관적으로 이해하고 
                    의사결정에 활용할 수 있도록 했습니다.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Streamlit로 해결할 수 있는 문제들 */}
          <Card className="bg-gray-800/80 backdrop-blur-sm border border-gray-600/50 shadow-2xl mb-12">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-white flex items-center gap-3">
                <Award className="w-6 h-6 text-blue-500" />
                Streamlit로 해결할 수 있는 문제들
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-1 gap-6">
                {/* 머신러닝에 집중하고 싶은데 프론트 작업 부담 */}
                <div className="bg-gradient-to-r from-blue-900/20 to-cyan-900/20 rounded-xl p-6 border border-blue-600/30">
                  <h4 className="font-bold text-white mb-3 flex items-center gap-2">
                    <div className="text-2xl">🤖</div>
                    머신러닝에 집중하고 싶은데 프론트 작업 부담
                  </h4>
                  <div className="text-gray-300 space-y-2">
                    <div>• <span className="font-bold text-cyan-400">기존:</span> ML 모델 개발에 집중하고 싶은데 결과 보여주려면 웹 개발까지 해야 함</div>
                    <div>• <span className="font-bold text-cyan-400">해결:</span> Python 코드 몇 줄로 바로 웹 인터페이스 생성해서 빠르게 결과 확인</div>
                  </div>
                </div>
                
                {/* 빠른 프로토타입 필요 */}
                <div className="bg-gradient-to-r from-green-900/20 to-emerald-900/20 rounded-xl p-6 border border-green-600/30">
                  <h4 className="font-bold text-white mb-3 flex items-center gap-2">
                    <div className="text-2xl">⚡</div>
                    빠른 프로토타입 필요
                  </h4>
                  <div className="text-gray-300 space-y-2">
                    <div>• <span className="font-bold text-green-400">기존:</span> 간단한 데이터 분석 결과도 보여주려면 시간이 오래 걸림</div>
                    <div>• <span className="font-bold text-green-400">해결:</span> 5분 내로 대시보드 만들어서 즉시 결과 공유 가능</div>
                  </div>
                </div>

                {/* 완성도 높은 서비스의 한계 (단점) */}
                <div className="bg-gradient-to-r from-purple-900/20 to-pink-900/20 rounded-xl p-6 border border-purple-600/30">
                  <h4 className="font-bold text-white mb-3 flex items-center gap-2">
                    <div className="text-2xl">⚠️</div>
                    완성도 높은 서비스에는 한계
                  </h4>
                  <div className="text-gray-300 space-y-2">
                    <div>• <span className="font-bold text-purple-400">기존:</span> 디자인 커스터마이징이나 복잡한 인터랙션 구현 어려움</div>
                    <div>• <span className="font-bold text-purple-400">해결:</span> 프로토타입용으로만 사용하고, 실제 서비스는 React 등으로 별도 개발</div>
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