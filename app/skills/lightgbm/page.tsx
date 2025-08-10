'use client'
import { Navigation } from '@/components/navigation'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ArrowLeft, Lightbulb, Rocket, TrendingUp, Target, Award } from 'lucide-react'
import Link from 'next/link'

export default function LightGBMSkillPage() {
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
            <div className="text-6xl mb-4">💡</div>
            <h1 className="text-4xl font-black text-white mb-4">
              LightGBM
            </h1>
          </div>

          {/* 내가 이해한 LightGBM */}
          <Card className="bg-gray-800/80 backdrop-blur-sm border border-gray-600/50 shadow-2xl mb-12">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-white flex items-center gap-3">
                <Lightbulb className="w-6 h-6 text-yellow-500" />
                내가 이해한 LightGBM
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-lg text-gray-300 leading-relaxed space-y-4">
                <p>
                  <span className="font-bold text-cyan-400">LightGBM은 XGBoost를 업그레이드한 알고리즘</span>입니다. 
                  XGBoost와 동일하게 <span className="font-bold text-cyan-400">학습을 순차적으로 진행하면서 앞의 학습의 오차를 줄여나가는 방식</span>을 사용합니다.
                </p>
                <p>
                  업그레이드한 방식은 <span className="font-bold text-cyan-400">XGBoost는 모든 걸 확장하지만 LightGBM은 가장 큰 손실만 먼저 확장해 나간다</span>는 것입니다. 
                  이래서 <span className="font-bold text-cyan-400">더 빠르고 메모리를 적게 사용</span>합니다.
                </p>
                <p>
                  <span className="font-bold text-cyan-400">분류, 회귀, 랭킹</span>에서 XGBoost와 동일하게 사용할 수 있지만 
                  더 빠른 성능을 제공합니다.
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
                      <span className="font-bold text-cyan-400">XGBoost보다 빠른 학습 속도</span>로 
                      구독자 이탈을 예측했습니다. 
                      <span className="font-bold text-cyan-400">분류 문제</span>에서 XGBoost와 비슷한 성능을 더 빠르게 달성했습니다.
                    </p>
                  </div>
                </div>
                
                <div className="bg-gradient-to-r from-green-900/20 to-teal-900/20 rounded-xl p-6 border border-green-600/30 cursor-pointer hover:bg-gradient-to-r hover:from-green-900/30 hover:to-teal-900/30 transition-all duration-300" onClick={() => window.open('/nurse-salary', '_blank')}>
                  <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2 hover:text-green-300 transition-colors">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    미국 간호사 퇴사 예측 →
                  </h3>
                  <div className="text-gray-300 space-y-3">
                    <p>
                      <span className="font-bold text-cyan-400">회귀 문제</span>로 간호사 퇴사 요인을 분석했습니다. 
                      <span className="font-bold text-cyan-400">XGBoost보다 적은 메모리 사용량</span>으로 
                      동일한 성능을 더 효율적으로 달성했습니다.
                    </p>
                  </div>
                </div>
              </div>
              
            </CardContent>
          </Card>

          {/* LightGBM로 해결할 수 있는 문제들 */}
          <Card className="bg-gray-800/80 backdrop-blur-sm border border-gray-600/50 shadow-2xl mb-12">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-white flex items-center gap-3">
                <Award className="w-6 h-6 text-blue-500" />
                LightGBM로 해결할 수 있는 문제들
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-1 gap-6">
                {/* XGBoost 속도 문제 */}
                <div className="bg-gradient-to-r from-blue-900/20 to-cyan-900/20 rounded-xl p-6 border border-blue-600/30">
                  <h4 className="font-bold text-white mb-3 flex items-center gap-2">
                    <div className="text-2xl">⚡</div>
                    XGBoost 대용량 데이터 속도 문제
                  </h4>
                  <div className="text-gray-300 space-y-2">
                    <div>• <span className="font-bold text-blue-400">문제:</span> XGBoost가 대규모 데이터에서 학습 속도 느림</div>
                    <div>• <span className="font-bold text-blue-400">해결:</span> XGBoost보다 훨씬 빠른 학습 속도 제공</div>
                  </div>
                </div>

                {/* 메모리 효율성 문제 */}
                <div className="bg-gradient-to-r from-green-900/20 to-emerald-900/20 rounded-xl p-6 border border-green-600/30">
                  <h4 className="font-bold text-white mb-3 flex items-center gap-2">
                    <div className="text-2xl">💾</div>
                    메모리 효율성 문제
                  </h4>
                  <div className="text-gray-300 space-y-2">
                    <div>• <span className="font-bold text-green-400">문제:</span> 대용량 데이터 처리 시 높은 메모리 사용량</div>
                    <div>• <span className="font-bold text-green-400">해결:</span> XGBoost보다 적은 메모리로 동일한 성능</div>
                  </div>
                </div>

                {/* 실시간 학습 요구사항 */}
                <div className="bg-gradient-to-r from-purple-900/20 to-pink-900/20 rounded-xl p-6 border border-purple-600/30">
                  <h4 className="font-bold text-white mb-3 flex items-center gap-2">
                    <div className="text-2xl">🚀</div>
                    실시간 모델 업데이트 요구사항
                  </h4>
                  <div className="text-gray-300 space-y-2">
                    <div>• <span className="font-bold text-purple-400">문제:</span> 빠른 모델 재학습이 필요한 환경</div>
                    <div>• <span className="font-bold text-purple-400">해결:</span> 빠른 학습으로 실시간 모델 업데이트 가능</div>
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