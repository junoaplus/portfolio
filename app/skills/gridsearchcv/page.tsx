'use client'
import { Navigation } from '@/components/navigation'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ArrowLeft, Lightbulb, Rocket, TrendingUp, Target, Award } from 'lucide-react'
import Link from 'next/link'

export default function GridSearchCVSkillPage() {
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
            <div className="text-6xl mb-4">🔍</div>
            <h1 className="text-4xl font-black text-white mb-4">
              GridSearchCV
            </h1>
          </div>

          {/* 내가 이해한 GridSearchCV */}
          <Card className="bg-gray-800/80 backdrop-blur-sm border border-gray-600/50 shadow-2xl mb-12">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-white flex items-center gap-3">
                <Lightbulb className="w-6 h-6 text-yellow-500" />
                내가 이해한 GridSearchCV
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-lg text-gray-300 leading-relaxed space-y-4">
                <p>
                  <span className="font-bold text-cyan-400">GridSearchCV는 저의 수고를 덜어준 고마운 도구입니다.</span> 
                  수작업으로 하이퍼파라미터 조정하다가 해가 지는 것을 많이 경험했는데, 
                  <span className="font-bold text-cyan-400">최적값을 자동으로 찾아서 너무 편했습니다</span>.
                </p>
                <p>
                  간호사 퇴사 예측에서 <span className="font-bold text-cyan-400">여러 모델을 GridSearchCV로 튜닝</span>해서 
                  어떤 모델이 제일 좋은지 확실하게 알 수 있었습니다.
                </p>
                <p>
                  <span className="font-bold text-cyan-400">StratifiedKFold와 함께 사용해서 교차검증</span>하니까 
                  더 신뢰할 만한 결과가 나왔습니다.
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
                    <span className="font-bold text-cyan-400">여러 모델을 GridSearchCV로 튜닝</span>해서 
                    어떤 모델이 가장 좋은지 확실하게 알 수 있었습니다.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* GridSearchCV로 해결할 수 있는 문제들 */}
          <Card className="bg-gray-800/80 backdrop-blur-sm border border-gray-600/50 shadow-2xl mb-12">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-white flex items-center gap-3">
                <Award className="w-6 h-6 text-blue-500" />
                GridSearchCV로 해결할 수 있는 문제들
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-1 gap-6">
                {/* 하이퍼파라미터 튜닝 비효율 */}
                <div className="bg-gradient-to-r from-blue-900/20 to-cyan-900/20 rounded-xl p-6 border border-blue-600/30">
                  <h4 className="font-bold text-white mb-3 flex items-center gap-2">
                    <div className="text-2xl">🎯</div>
                    하이퍼파라미터 튜닝 비효율
                  </h4>
                  <div className="text-gray-300 space-y-2">
                    <div>• <span className="font-bold text-cyan-400">기존:</span> 감으로 하이퍼파라미터 조정하다가 시간만 버림</div>
                    <div>• <span className="font-bold text-cyan-400">해결:</span> 모든 조합을 체계적으로 테스트해서 최적값 자동 탐색</div>
                  </div>
                </div>
                
                {/* 모델 비교 공정성 문제 */}
                <div className="bg-gradient-to-r from-green-900/20 to-emerald-900/20 rounded-xl p-6 border border-green-600/30">
                  <h4 className="font-bold text-white mb-3 flex items-center gap-2">
                    <div className="text-2xl">⚖️</div>
                    모델 비교 공정성 문제
                  </h4>
                  <div className="text-gray-300 space-y-2">
                    <div>• <span className="font-bold text-green-400">기존:</span> 각 모델이 최적화 안 된 상태로 비교해서 부정확함</div>
                    <div>• <span className="font-bold text-green-400">해결:</span> 모든 모델을 최적 상태로 튜닝해서 공정하게 비교</div>
                  </div>
                </div>

                {/* 성능 개선 한계 */}
                <div className="bg-gradient-to-r from-purple-900/20 to-pink-900/20 rounded-xl p-6 border border-purple-600/30">
                  <h4 className="font-bold text-white mb-3 flex items-center gap-2">
                    <div className="text-2xl">📈</div>
                    성능 개선 한계
                  </h4>
                  <div className="text-gray-300 space-y-2">
                    <div>• <span className="font-bold text-purple-400">기존:</span> 기본 파라미터로만 써서 모델의 진짜 잠재력을 못 끌어냄</div>
                    <div>• <span className="font-bold text-purple-400">해결:</span> 파라미터 조합으로 성능을 극한까지 끌어올림</div>
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