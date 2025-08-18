'use client'
import { Navigation } from '@/components/navigation'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ArrowLeft, Lightbulb, Rocket, TrendingUp, Target, Award } from 'lucide-react'
import Link from 'next/link'

export default function SMOTESkillPage() {
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
            <div className="text-6xl mb-4">⚖️</div>
            <h1 className="text-4xl font-black text-white mb-4">
              SMOTE
            </h1>
          </div>

          {/* 내가 이해한 SMOTE */}
          <Card className="bg-gray-800/80 backdrop-blur-sm border border-gray-600/50 shadow-2xl mb-12">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-white flex items-center gap-3">
                <Lightbulb className="w-6 h-6 text-yellow-500" />
                내가 이해한 SMOTE
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-lg text-gray-300 leading-relaxed space-y-4">
                <p>
                  <span className="font-bold text-cyan-400">SMOTE는 불균형 데이터의 구세주입니다.</span> 
                  신문사 이탈 예측 프로젝트에서 <span className="font-bold text-cyan-400">정확도는 높지만 리콜과 F1이 형편없었던</span> 상황을 겪었습니다.
                </p>
                <p>
                  문제는 <span className="font-bold text-cyan-400">데이터 불균형이 너무 심해서 소수 클래스를 제대로 학습하지 못하는 것</span>이었습니다. 
                  어떤 모델을 써도 비슷한 결과가 나왔습니다.
                </p>
                <p>
                  <span className="font-bold text-cyan-400">SMOTE로 소수 클래스 데이터를 인위적으로 생성해서 균형을 맞춰주니</span> 
                  리콜과 F1 스코어가 85% 이상으로 크게 향상되었습니다. 
                  불균형 데이터 문제에서는 정말 효과적인 도구입니다.
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
                    <span className="font-bold text-cyan-400">심각한 데이터 불균형으로 소수 클래스 예측 성능이 형편없던 문제</span>를 
                    SMOTE로 해결했습니다. 소수 클래스 데이터를 인위적으로 생성해서 
                    <span className="font-bold text-cyan-400">리콜과 F1 스코어를 85% 이상으로 개선</span>했습니다.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* SMOTE로 해결할 수 있는 문제들 */}
          <Card className="bg-gray-800/80 backdrop-blur-sm border border-gray-600/50 shadow-2xl mb-12">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-white flex items-center gap-3">
                <Award className="w-6 h-6 text-blue-500" />
                SMOTE로 해결할 수 있는 문제들
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-1 gap-6">
                {/* 데이터 불균형 문제 */}
                <div className="bg-gradient-to-r from-blue-900/20 to-cyan-900/20 rounded-xl p-6 border border-blue-600/30">
                  <h4 className="font-bold text-white mb-3 flex items-center gap-2">
                    <div className="text-2xl">⚖️</div>
                    데이터 불균형 문제
                  </h4>
                  <div className="text-gray-300 space-y-2">
                    <div>• <span className="font-bold text-cyan-400">기존:</span> 소수 클래스 데이터가 너무 적어서 예측 성능 저하</div>
                    <div>• <span className="font-bold text-cyan-400">해결:</span> 소수 클래스 데이터를 인위적으로 생성해서 균형 맞춤</div>
                  </div>
                </div>
                
                {/* 모델 성능 만족 불가 */}
                <div className="bg-gradient-to-r from-green-900/20 to-emerald-900/20 rounded-xl p-6 border border-green-600/30">
                  <h4 className="font-bold text-white mb-3 flex items-center gap-2">
                    <div className="text-2xl">📈</div>
                    모델 성능 만족 불가
                  </h4>
                  <div className="text-gray-300 space-y-2">
                    <div>• <span className="font-bold text-green-400">기존:</span> 정확도는 높지만 리콜과 F1 스코어가 형편없음</div>
                    <div>• <span className="font-bold text-green-400">해결:</span> SMOTE 적용으로 리콜과 F1 값을 85% 이상으로 개선</div>
                  </div>
                </div>

                {/* 비증랬의 완벽주의 */}
                <div className="bg-gradient-to-r from-purple-900/20 to-pink-900/20 rounded-xl p-6 border border-purple-600/30">
                  <h4 className="font-bold text-white mb-3 flex items-center gap-2">
                    <div className="text-2xl">🎯</div>
                    비증랬의 완벽주의
                  </h4>
                  <div className="text-gray-300 space-y-2">
                    <div>• <span className="font-bold text-purple-400">전체:</span> 이탈 고객을 놓치면 비증이 오히려 손해</div>
                    <div>• <span className="font-bold text-purple-400">해결:</span> 소수 클래스 탐지 능력 향상으로 비증 목표 달성</div>
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