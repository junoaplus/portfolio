'use client'
import { Navigation } from '@/components/navigation'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ArrowLeft, Lightbulb, Rocket, TrendingUp, Target, Award } from 'lucide-react'
import Link from 'next/link'

export default function MatplotlibSkillPage() {
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
            <div className="text-6xl mb-4">📊</div>
            <h1 className="text-4xl font-black text-white mb-4">
              matplotlib
            </h1>
          </div>

          {/* 내가 이해한 matplotlib */}
          <Card className="bg-gray-800/80 backdrop-blur-sm border border-gray-600/50 shadow-2xl mb-12">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-white flex items-center gap-3">
                <Lightbulb className="w-6 h-6 text-yellow-500" />
                내가 이해한 matplotlib
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-lg text-gray-300 leading-relaxed space-y-4">
                <p>
                  <span className="font-bold text-cyan-400">matplotlib은 복잡하지만 그만큼 강력한 도구입니다.</span> 
                  처음엔 seaborn이 더 예쁘고 쉬워서 matplotlib을 왜 써야 하나 싶었지만, 
                  <span className="font-bold text-cyan-400">세밀한 커스터마이징이 필요할 때 진가를 발휘</span>합니다.
                </p>
                <p>
                  특히 <span className="font-bold text-cyan-400">머신러닝 모델 성능 시각화에서</span> matplotlib의 필요성을 체감했습니다. 
                  ROC 커브나 혼동 행렬을 정확히 원하는 스타일로 만들려면 
                  <span className="font-bold text-cyan-400">결국 matplotlib을 사용해야</span> 했습니다.
                </p>
                <p>
                  <span className="font-bold text-cyan-400">발표나 보고서용 고품질 차트</span>를 만들 때도 matplotlib이 최적입니다. 
                  seaborn은 탐색적 분석용이고, 완성도 높은 결과물은 
                  <span className="font-bold text-cyan-400">matplotlib으로 정교하게 제작해야</span> 합니다.
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
                      <span className="font-bold text-cyan-400">RandomForest가 87% F1-Score로 최고 성능을 보인 걸</span> 
                      matplotlib으로 만든 ROC 커브와 혼동행렬로 한눈에 보여줄 수 있었어요. 
                      <span className="font-bold text-cyan-400">8가지 모델을 비교하는 차트</span>도 깔끔하게 정리했습니다.
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
                      <span className="font-bold text-cyan-400">LogisticRegression이 F1-Score 0.76으로 최고 성능을 낸 걸</span> 
                      matplotlib 박스플롯과 피쳐 중요도 그래프로 명확하게 설명했어요. 
                      <span className="font-bold text-cyan-400">나이, 월급, 출퇴근거리가 핵심 요인</span>이라는 걸 시각적으로 보여줬습니다.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* matplotlib으로 해결할 수 있는 문제들 */}
          <Card className="bg-gray-800/80 backdrop-blur-sm border border-gray-600/50 shadow-2xl mb-12">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-white flex items-center gap-3">
                <Award className="w-6 h-6 text-blue-500" />
                matplotlib으로 해결할 수 있는 문제들
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-1 gap-6">
                {/* seaborn 한계 */}
                <div className="bg-gradient-to-r from-blue-900/20 to-cyan-900/20 rounded-xl p-6 border border-blue-600/30">
                  <h4 className="font-bold text-white mb-3 flex items-center gap-2">
                    <div className="text-2xl">🎨</div>
                    seaborn 커스터마이징 한계
                  </h4>
                  <div className="text-gray-300 space-y-2">
                    <div>• <span className="font-bold text-cyan-400">기존:</span> seaborn으로는 세밀한 커스터마이징이 불가능</div>
                    <div>• <span className="font-bold text-cyan-400">해결:</span> 축, 범례, 색상까지 완전 제어해서 발표용 고품질 차트 제작</div>
                  </div>
                </div>
                
                {/* 복잡한 ML 시각화 */}
                <div className="bg-gradient-to-r from-green-900/20 to-emerald-900/20 rounded-xl p-6 border border-green-600/30">
                  <h4 className="font-bold text-white mb-3 flex items-center gap-2">
                    <div className="text-2xl">📊</div>
                    복잡한 ML 시각화 문제
                  </h4>
                  <div className="text-gray-300 space-y-2">
                    <div>• <span className="font-bold text-green-400">기존:</span> ROC 커브, 혼동행렬 같은 복잡한 그래프 구현이 어려움</div>
                    <div>• <span className="font-bold text-green-400">해결:</span> 다중 subplot으로 복합 분석 그래프를 정교하게 구현</div>
                  </div>
                </div>

                {/* 논문급 퀄리티 */}
                <div className="bg-gradient-to-r from-purple-900/20 to-pink-900/20 rounded-xl p-6 border border-purple-600/30">
                  <h4 className="font-bold text-white mb-3 flex items-center gap-2">
                    <div className="text-2xl">🏆</div>
                    최종 결과물 퀄리티 문제
                  </h4>
                  <div className="text-gray-300 space-y-2">
                    <div>• <span className="font-bold text-purple-400">기존:</span> 탐색용 그래프로는 부족하고 논문이나 보고서급 완성도 필요</div>
                    <div>• <span className="font-bold text-purple-400">해결:</span> seaborn으로 안되는 건 matplotlib으로 정교하게 완성</div>
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