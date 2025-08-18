'use client'
import { Navigation } from '@/components/navigation'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ArrowLeft, Lightbulb, Rocket, TrendingUp, Target, Award } from 'lucide-react'
import Link from 'next/link'

export default function StratifiedKFoldSkillPage() {
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
            <div className="text-6xl mb-4">🔄</div>
            <h1 className="text-4xl font-black text-white mb-4">
              StratifiedKFold
            </h1>
          </div>

          {/* 내가 이해한 StratifiedKFold */}
          <Card className="bg-gray-800/80 backdrop-blur-sm border border-gray-600/50 shadow-2xl mb-12">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-white flex items-center gap-3">
                <Lightbulb className="w-6 h-6 text-yellow-500" />
                내가 이해한 StratifiedKFold
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-lg text-gray-300 leading-relaxed space-y-4">
                <p>
                  <span className="font-bold text-cyan-400">StratifiedKFold는 모델 성능을 제대로 평가할 때 쓰는 도구입니다.</span> 
                  처음에는 train_test_split만 써서 한 번만 나누어서 평가했는데, 
                  <span className="font-bold text-cyan-400">운에 따라 결과가 달라지는 문제</span>가 있었습니다.
                </p>
                <p>
                  간호사 퇴사 예측 프로젝트에서 여러 모델을 비교할 때 
                  <span className="font-bold text-cyan-400">StratifiedKFold를 써서 5번 나누어서 평가</span>했습니다. 
                  그랬더니 각 모델의 진짜 성능을 알 수 있었습니다.
                </p>
                <p>
                  특히 <span className="font-bold text-cyan-400">불균형 데이터에서 클래스 비율을 맞춰주는 기능</span>이 좋았습니다. 
                  LogisticRegression이 F1-Score 0.76으로 가장 좋다는 걸 확실하게 알 수 있었습니다.
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
              <div className="bg-gradient-to-r from-indigo-900/20 to-blue-900/20 rounded-xl p-6 border border-indigo-600/30 cursor-pointer hover:bg-gradient-to-r hover:from-indigo-900/30 hover:to-blue-900/30 transition-all duration-300" onClick={() => window.open('/nurse-salary', '_blank')}>
                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2 hover:text-indigo-300 transition-colors">
                  <div className="w-3 h-3 bg-indigo-500 rounded-full"></div>
                  간호사 퇴사 예측 분석 →
                </h3>
                <div className="text-gray-300 space-y-3">
                  <p>
                    <span className="font-bold text-cyan-400">5개 ML 모델을 StratifiedKFold로 비교</span>해서 
                    LogisticRegression이 F1-Score 0.76으로 가장 좋다는 걸 확실하게 알 수 있었습니다.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* StratifiedKFold로 해결할 수 있는 문제들 */}
          <Card className="bg-gray-800/80 backdrop-blur-sm border border-gray-600/50 shadow-2xl mb-12">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-white flex items-center gap-3">
                <Award className="w-6 h-6 text-blue-500" />
                StratifiedKFold로 해결할 수 있는 문제들
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-1 gap-6">
                {/* 모델 평가 신뢰성 문제 */}
                <div className="bg-gradient-to-r from-blue-900/20 to-cyan-900/20 rounded-xl p-6 border border-blue-600/30">
                  <h4 className="font-bold text-white mb-3 flex items-center gap-2">
                    <div className="text-2xl">🎲</div>
                    모델 평가 신뢰성 문제
                  </h4>
                  <div className="text-gray-300 space-y-2">
                    <div>• <span className="font-bold text-cyan-400">기존:</span> train_test_split 한 번만 써서 운에 따라 성능이 달라짐</div>
                    <div>• <span className="font-bold text-cyan-400">해결:</span> 5번 교차검증으로 안정적이고 신뢰할 수 있는 성능 측정</div>
                  </div>
                </div>
                
                {/* 불균형 데이터 평가 */}
                <div className="bg-gradient-to-r from-green-900/20 to-emerald-900/20 rounded-xl p-6 border border-green-600/30">
                  <h4 className="font-bold text-white mb-3 flex items-center gap-2">
                    <div className="text-2xl">⚖️</div>
                    불균형 데이터 평가 문제
                  </h4>
                  <div className="text-gray-300 space-y-2">
                    <div>• <span className="font-bold text-green-400">기존:</span> 일반 KFold는 클래스 비율이 안 맞아서 편향된 평가</div>
                    <div>• <span className="font-bold text-green-400">해결:</span> 각 폴드마다 클래스 비율을 유지해서 공정한 비교</div>
                  </div>
                </div>

                {/* 모델 선택 고민 */}
                <div className="bg-gradient-to-r from-purple-900/20 to-pink-900/20 rounded-xl p-6 border border-purple-600/30">
                  <h4 className="font-bold text-white mb-3 flex items-center gap-2">
                    <div className="text-2xl">🔍</div>
                    모델 선택 고민
                  </h4>
                  <div className="text-gray-300 space-y-2">
                    <div>• <span className="font-bold text-purple-400">기존:</span> 여러 모델 중 어떤 게 제일 좋은지 확신이 안 섬</div>
                    <div>• <span className="font-bold text-purple-400">해결:</span> 체계적 비교로 LogisticRegression이 F1-Score 0.76으로 최고 확정</div>
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