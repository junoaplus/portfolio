'use client'
import { Navigation } from '@/components/navigation'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ArrowLeft, Lightbulb, Rocket, TrendingUp, Target, Award } from 'lucide-react'
import Link from 'next/link'

export default function StandardScalerSkillPage() {
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
            <div className="text-6xl mb-4">📏</div>
            <h1 className="text-4xl font-black text-white mb-4">
              StandardScaler
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Feature scaling and normalization for optimal ML model performance
            </p>
            <Badge style={{ background: 'rgb(37 99 235)' }} className="text-white text-lg px-6 py-2">
              Proficiency Level: 90%
            </Badge>
          </div>

          {/* 개인적 견해 */}
          <Card className="bg-gray-800/80 backdrop-blur-sm border border-gray-600/50 shadow-2xl mb-12">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-white flex items-center gap-3">
                <Lightbulb className="w-6 h-6 text-yellow-500" />
                StandardScaler에 대한 개인적 견해
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-lg text-gray-300 leading-relaxed space-y-4">
                <p>
                  <span className="font-bold text-cyan-400">StandardScaler는 ML의 숨겨진 영웅</span>이라고 생각합니다. 
                  눈에 띄지 않지만 모든 피쳐를 동등한 기준으로 만들어 
                  <span className="font-bold text-cyan-400">알고리즘의 공정한 학습</span>을 가능하게 합니다.
                </p>
                <p>
                  특히 <span className="font-bold text-cyan-400">거리 기반 알고리즘</span>에서의 중요성이 인상적이었습니다. 
                  나이(0-100)와 연봉(0-100,000,000)처럼 스케일이 다른 피쳐들이 
                  <span className="font-bold text-cyan-400">공평하게 기여</span>할 수 있게 해줍니다.
                </p>
                <p>
                  간호사 퇴사 예측 프로젝트에서 <span className="font-bold text-cyan-400">다양한 수치형 변수들을 정규화</span>하면서, 
                  스케일링 전후의 모델 성능 차이를 직접 경험했습니다. 
                  <span className="font-bold text-cyan-400">데이터 전처리의 핵심</span>임을 깨달았습니다.
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
                    <span className="font-bold text-cyan-400">StandardScaler 정규화</span>로 연령, 급여, 근무시간 등 
                    서로 다른 스케일의 수치형 변수들을 <span className="font-bold text-cyan-400">동일한 기준으로 변환</span>했습니다.
                  </p>
                  <p>
                    <span className="font-bold text-cyan-400">평균 0, 표준편차 1</span>로 정규화하여 
                    모든 ML 알고리즘이 <span className="font-bold text-blue-300">공정하게 모든 피쳐를 활용</span>할 수 있도록 하고 
                    모델 성능을 크게 향상시켰습니다.
                  </p>
                  <div className="bg-gray-800/50 rounded-lg p-4 mt-4">
                    <div className="text-sm text-gray-400 mb-2">핵심 StandardScaler 기술들:</div>
                    <div className="flex flex-wrap gap-2">
                      <Badge className="bg-cyan-700 text-cyan-100">Z-score Normalization</Badge>
                      <Badge className="bg-cyan-700 text-cyan-100">Feature Scaling</Badge>
                      <Badge className="bg-cyan-700 text-cyan-100">Mean Centering</Badge>
                      <Badge className="bg-cyan-700 text-cyan-100">Variance Scaling</Badge>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* 핵심 성과/결과 */}
          <Card className="bg-gray-800/80 backdrop-blur-sm border border-gray-600/50 shadow-2xl mb-12">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-white flex items-center gap-3">
                <TrendingUp className="w-6 h-6 text-green-500" />
                핵심 성과 & 결과
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gradient-to-r from-blue-900/30 to-cyan-900/30 rounded-xl p-6 border border-blue-600/30">
                  <h4 className="font-bold text-white mb-3 flex items-center gap-2">
                    <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                    모델 성능
                  </h4>
                  <div className="text-cyan-300 space-y-2">
                    <div>• <span className="font-bold">수렴 속도 50%</span> 향상</div>
                    <div>• <span className="font-bold">예측 정확도 20%</span> 개선</div>
                    <div>• <span className="font-bold">그래디언트 폭발</span> 방지</div>
                  </div>
                </div>
                
                <div className="bg-gradient-to-r from-green-900/30 to-emerald-900/30 rounded-xl p-6 border border-green-600/30">
                  <h4 className="font-bold text-white mb-3 flex items-center gap-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    알고리즘 안정성
                  </h4>
                  <div className="text-green-300 space-y-2">
                    <div>• <span className="font-bold">모든 피쳐</span> 공평한 기여</div>
                    <div>• <span className="font-bold\">수치적 안정성</span> 확보</div>
                    <div>• <span className="font-bold">최적화 경로</span> 개선</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* 학습/경험 스토리 */}
          <Card className="bg-gray-800/80 backdrop-blur-sm border border-gray-600/50 shadow-2xl mb-12">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-white flex items-center gap-3">
                <Target className="w-6 h-6 text-blue-500" />
                학습 & 경험 스토리
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="bg-gradient-to-r from-blue-900/20 to-cyan-900/20 rounded-xl p-6 border border-blue-600/30">
                <div className="text-lg text-gray-300 leading-relaxed space-y-4">
                  <p>
                    처음엔 <span className="font-bold text-cyan-400">원시 데이터를 그대로 써도 될 거라고</span> 생각했습니다. 
                    "알고리즘이 알아서 학습하겠지" 하는 
                    <span className="font-bold text-blue-300">순진한 생각</span>이었죠.
                  </p>
                  <p>
                    하지만 <span className="font-bold text-cyan-400">연봉 변수가 모델을 지배하는 현상</span>을 보면서 
                    스케일링의 중요성을 깨달았습니다. 
                    특히 <span className="font-bold text-blue-300">거리 기반 알고리즘</span>에서 
                    큰 값의 피쳐가 작은 값의 피쳐를 압도하는 것을 보고 충격받았습니다.
                  </p>
                  <p>
                    지금은 <span className="font-bold text-cyan-400">MinMaxScaler, RobustScaler, Normalizer</span> 등 
                    다양한 스케일링 기법들을 데이터 특성에 맞게 선택할 수 있게 되었습니다.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* 비즈니스 임팩트 */}
          <Card className="bg-gray-800/80 backdrop-blur-sm border border-gray-600/50 shadow-2xl mb-12">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-white flex items-center gap-3">
                <Award className="w-6 h-6 text-blue-500" />
                비즈니스 임팩트
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="bg-gradient-to-r from-blue-900/20 to-cyan-900/20 rounded-xl p-6 border border-blue-600/30">
                <h4 className="font-bold text-white mb-4">적절한 피쳐 스케일링으로 ML 모델의 성능과 안정성 극대화</h4>
                <div className="text-gray-300 space-y-3">
                  <p>
                    StandardScaler의 <span className="font-bold text-cyan-400">정확한 피쳐 정규화</span>를 통해 
                    모든 변수가 공정하게 기여할 수 있게 하여 모델의 예측 성능과 안정성을 크게 향상시켰습니다. 이는 단순한 전처리를 넘어선 <span className="font-bold text-cyan-400">모델 품질 보장</span>입니다.
                  </p>
                  <p>
                    <span className="font-bold text-blue-300">빠른 수렴과 안정적인 학습</span>을 통해 
                    개발 시간을 단축하고 모델의 신뢰성을 높여, <span className="font-bold text-cyan-400">프로젝트 성공률</span>을 크게 향상시켰습니다.
                  </p>
                  <p>
                    특히 토스와 같은 <span className="font-bold text-blue-300">정밀한 ML 시스템</span>이 필요한 조직에서는 
                    이런 기초적이지만 중요한 전처리 기술이 <span className="font-bold text-cyan-400">AI/ML 성능과 운영 안정성</span>의 
                    핵심 기반이 될 것이라고 확신합니다.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

        </div>
      </div>
    </div>
  )
}