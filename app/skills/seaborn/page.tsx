'use client'
import { Navigation } from '@/components/navigation'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ArrowLeft, Lightbulb, Rocket, TrendingUp, Target, Award } from 'lucide-react'
import Link from 'next/link'

export default function SeabornSkillPage() {
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
            <div className="text-6xl mb-4">🎨</div>
            <h1 className="text-4xl font-black text-white mb-4">
              Seaborn
            </h1>
          </div>

          {/* 내가 이해한 seaborn */}
          <Card className="bg-gray-800/80 backdrop-blur-sm border border-gray-600/50 shadow-2xl mb-12">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-white flex items-center gap-3">
                <Lightbulb className="w-6 h-6 text-yellow-500" />
                내가 이해한 seaborn
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-lg text-gray-300 leading-relaxed space-y-4">
                <p>
                  <span className="font-bold text-cyan-400">seaborn은 matplotlib의 예쁜 버전입니다.</span> 
                  matplotlib이 너무 복잡하고 만들어지는 그래프가 예쁘지 않아서 스트레스받았는데, 
                  <span className="font-bold text-cyan-400">한 줄만 써도 예쁘고 통계적인 그래프</span>를 만들어줍니다.
                </p>
                <p>
                  특히 <span className="font-bold text-cyan-400">EDA할 때 정말 편리합니다.</span> 
                  pairplot 하나만 써도 전체 변수들의 관계를 한번에 볼 수 있고, 
                  <span className="font-bold text-cyan-400">heatmap으로 상관계수도 예쁘게</span> 보여줍니다.
                </p>
                <p>
                  하지만 세밀한 커스터마이징은 한계가 있어서, 
                  <span className="font-bold text-cyan-400">완성된 결과물을 만들 때는 matplotlib과 함께 사용하는 것이 최적</span>입니다. 
                  seaborn으로 빠르게 탐색하고, matplotlib으로 정리하는 방식입니다.
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
                <div className="bg-gradient-to-r from-purple-900/20 to-pink-900/20 rounded-xl p-6 border border-purple-600/30 cursor-pointer hover:bg-gradient-to-r hover:from-purple-900/30 hover:to-pink-900/30 transition-all duration-300" onClick={() => window.open('/newspaper-churn', '_blank')}>
                  <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2 hover:text-purple-300 transition-colors">
                    <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                    신문 구독자 이탈 예측 분석 →
                  </h3>
                  <div className="text-gray-300 space-y-3">
                    <p>
                      <span className="font-bold text-cyan-400">초기 EDA 단계에서 seaborn pairplot으로 전체 변수 관계를 한번에 파악</span>했고, 
                      heatmap으로 상관계수를 예쁜 색상으로 시각화했습니다. 
                      <span className="font-bold text-cyan-400">특히 구독 기간과 연령의 강한 상관관계</span>를 발견했습니다.
                    </p>
                  </div>
                </div>
                
                <div className="bg-gradient-to-r from-indigo-900/20 to-blue-900/20 rounded-xl p-6 border border-indigo-600/30 cursor-pointer hover:bg-gradient-to-r hover:from-indigo-900/30 hover:to-blue-900/30 transition-all duration-300" onClick={() => window.open('/nurse-salary', '_blank')}>
                  <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2 hover:text-indigo-300 transition-colors">
                    <div className="w-3 h-3 bg-indigo-500 rounded-full"></div>
                    간호사 퇴사 예측 분석 →
                  </h3>
                  <div className="text-gray-300 space-y-3">
                    <p>
                      <span className="font-bold text-cyan-400">boxplot으로 나이대별 월급 분포를 비교해서 연령대가 높을수록 퇴사율이 높다는 걸 발견</span>했고, 
                      violinplot으로 출퇴근 거리와 퇴사 의향의 관계도 시각화했습니다. 
                      <span className="font-bold text-cyan-400">결과적으로 LogisticRegression이 최고 성능</span>을 내다는 걸 예측할 수 있었습니다.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* seaborn으로 해결할 수 있는 문제들 */}
          <Card className="bg-gray-800/80 backdrop-blur-sm border border-gray-600/50 shadow-2xl mb-12">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-white flex items-center gap-3">
                <Award className="w-6 h-6 text-blue-500" />
                seaborn으로 해결할 수 있는 문제들
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-1 gap-6">
                {/* matplotlib 복잡함 */}
                <div className="bg-gradient-to-r from-blue-900/20 to-cyan-900/20 rounded-xl p-6 border border-blue-600/30">
                  <h4 className="font-bold text-white mb-3 flex items-center gap-2">
                    <div className="text-2xl">🚀</div>
                    matplotlib 복잡함
                  </h4>
                  <div className="text-gray-300 space-y-2">
                    <div>• <span className="font-bold text-cyan-400">기존:</span> matplotlib 코드가 너무 복잡하고 어려움</div>
                    <div>• <span className="font-bold text-cyan-400">해결:</span> 한 줄만 써도 예쁘고 통계적인 그래프 생성</div>
                  </div>
                </div>

                {/* EDA 시간 문제 */}
                <div className="bg-gradient-to-r from-green-900/20 to-emerald-900/20 rounded-xl p-6 border border-green-600/30">
                  <h4 className="font-bold text-white mb-3 flex items-center gap-2">
                    <div className="text-2xl">💡</div>
                    EDA 시간 문제
                  </h4>
                  <div className="text-gray-300 space-y-2">
                    <div>• <span className="font-bold text-green-400">기존:</span> 변수 관계 파악하는데 시간이 너무 오래 걸림</div>
                    <div>• <span className="font-bold text-green-400">해결:</span> pairplot 하나로 전체 변수 관계를 5초만에 파악</div>
                  </div>
                </div>

                {/* 그래프 퀄리티 문제 */}
                <div className="bg-gradient-to-r from-purple-900/20 to-pink-900/20 rounded-xl p-6 border border-purple-600/30">
                  <h4 className="font-bold text-white mb-3 flex items-center gap-2">
                    <div className="text-2xl">🎯</div>
                    그래프 퀄리티 문제
                  </h4>
                  <div className="text-gray-300 space-y-2">
                    <div>• <span className="font-bold text-purple-400">기존:</span> matplotlib 기본 그래프가 못생겨서 발표용으로 부적합</div>
                    <div>• <span className="font-bold text-purple-400">해결:</span> 예쁜 색상과 스타일이 기본 제공되어 바로 사용 가능</div>
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