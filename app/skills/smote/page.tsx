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

          {/* 개인적 견해 */}
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
                  <span className="font-bold text-cyan-400">SMOTE는 불균형 데이터를 가지고 있을 때 좋은 도구</span>입니다. 
                  신문사 이탈 예측 프로젝트를 하던 중 <span className="font-bold text-cyan-400">심각한 데이터 불균형</span>이 있었습니다.
                </p>
                <p>
                  어떤 모델을 써서 해봐도 결과가 좋지 않았습니다. 
                  <span className="font-bold text-cyan-400">정확도는 높지만 리콜 값과 F1 스코어가 낮은 문제</span>가 발생하였습니다. 
                  이탈 고객을 제대로 찾지 못하는 상황이었습니다.
                </p>
                <p>
                  그래서 <span className="font-bold text-cyan-400">SMOTE를 사용하여 다시 학습을 시켰더니 
                  리콜 값과 F1 값이 85% 이상으로 상승</span>하였습니다. 
                  불균형 데이터 문제를 해결하는데 정말 효과적인 방법이라고 생각합니다.
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
                    <span className="font-bold text-cyan-400">정확도는 높지만 리콜과 F1 스코어가 낮았던 문제</span>를 
                    SMOTE로 해결했습니다. <span className="font-bold text-cyan-400">85% 이상 성능 향상</span>을 달성했습니다.
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
                {/* 정확도는 높지만 리콜/F1이 낮은 문제 */}
                <div className="bg-gradient-to-r from-blue-900/20 to-cyan-900/20 rounded-xl p-6 border border-blue-600/30">
                  <h4 className="font-bold text-white mb-3 flex items-center gap-2">
                    <div className="text-2xl">⚖️</div>
                    정확도는 높지만 리콜/F1이 낮은 문제
                  </h4>
                  <div className="text-gray-300 space-y-2">
                    <div>• <span className="font-bold text-cyan-400">이탈 고객을 제대로 찾지 못하는 상황</span></div>
                    <div>• <span className="font-bold text-cyan-400">SMOTE로 불균형 데이터 해결 후 85% 이상 성능 향상</span></div>
                  </div>
                </div>
                
                {/* 데이터 불균형으로 인한 모델 성능 저하 */}
                <div className="bg-gradient-to-r from-green-900/20 to-emerald-900/20 rounded-xl p-6 border border-green-600/30">
                  <h4 className="font-bold text-white mb-3 flex items-center gap-2">
                    <div className="text-2xl">📈</div>
                    어떤 모델을 써도 결과가 좋지 않은 경우
                  </h4>
                  <div className="text-gray-300 space-y-2">
                    <div>• <span className="font-bold text-cyan-400">심각한 데이터 불균형으로 인한 성능 저하</span></div>
                    <div>• <span className="font-bold text-cyan-400">SMOTE 적용으로 리콜과 F1 값 대폭 개선</span></div>
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