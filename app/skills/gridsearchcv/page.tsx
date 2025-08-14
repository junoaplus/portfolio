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

          {/* 개인적 견해 */}
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
                  <span className="font-bold text-cyan-400">저의 수고를 덜어준 고마운 도구</span>입니다. 
                  수작업으로 하이퍼파라미터 조정하다가 해가 지는 것을 많이 경험했는데, 
                  <span className="font-bold text-cyan-400">최적값을 찾아서 너무 편했습니다</span>.
                </p>
                <p>
                  간호사 퇴사 예측에서 <span className="font-bold text-cyan-400">여러 모델을 GridSearchCV로 튜닝</span>해서 
                  어떤 모델이 제일 좋은지 확실하게 알 수 있었습니다.
                </p>
                <p>
                  <span className="font-bold text-cyan-400">StratifiedKFold랑 같이 써서 교차검증</span>하니까 
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
                {/* 수작업 하이퍼파라미터 튜닝의 한계 */}
                <div className="bg-gradient-to-r from-blue-900/20 to-cyan-900/20 rounded-xl p-6 border border-blue-600/30">
                  <h4 className="font-bold text-white mb-3 flex items-center gap-2">
                    <div className="text-2xl">🎯</div>
                    하이퍼파라미터 수작업 튜닝으로 해가 지는 경우
                  </h4>
                  <div className="text-gray-300 space-y-2">
                    <div>• <span className="font-bold text-cyan-400">감으로 하다가 시간만 버리는 문제</span></div>
                    <div>• <span className="font-bold text-cyan-400">GridSearchCV로 자동으로 최적값 탐색</span></div>
                  </div>
                </div>
                
                {/* 여러 모델 성능 비교의 공정성 */}
                <div className="bg-gradient-to-r from-green-900/20 to-emerald-900/20 rounded-xl p-6 border border-green-600/30">
                  <h4 className="font-bold text-white mb-3 flex items-center gap-2">
                    <div className="text-2xl">⚖️</div>
                    여러 모델 중 어떤게 진짜 좋은지 모르겠는 경우
                  </h4>
                  <div className="text-gray-300 space-y-2">
                    <div>• <span className="font-bold text-cyan-400">각 모델을 최적 상태로 만들어서 공정하게 비교</span></div>
                    <div>• <span className="font-bold text-cyan-400">어떤 모델이 좋은지 명확하게 알 수 있음</span></div>
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