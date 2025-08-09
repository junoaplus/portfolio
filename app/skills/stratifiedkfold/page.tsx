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
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Balanced cross-validation for reliable model performance evaluation
            </p>
            <Badge style={{ background: 'rgb(37 99 235)' }} className="text-white text-lg px-6 py-2">
              Proficiency Level: 85%
            </Badge>
          </div>

          {/* 개인적 견해 */}
          <Card className="bg-gray-800/80 backdrop-blur-sm border border-gray-600/50 shadow-2xl mb-12">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-white flex items-center gap-3">
                <Lightbulb className="w-6 h-6 text-yellow-500" />
                StratifiedKFold에 대한 개인적 견해
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-lg text-gray-300 leading-relaxed space-y-4">
                <p>
                  <span className="font-bold text-cyan-400">StratifiedKFold는 신뢰할 수 있는 모델 평가의 핵심</span>이라고 생각합니다. 
                  단순한 K-Fold와 달리 클래스 비율을 유지하여 
                  <span className="font-bold text-cyan-400">편향되지 않은 성능 평가</span>를 가능하게 합니다.
                </p>
                <p>
                  특히 <span className="font-bold text-cyan-400">불균형 데이터셋에서의 위력</span>이 인상적이었습니다. 
                  각 폴드마다 클래스 분포를 동일하게 유지하여 
                  <span className="font-bold text-cyan-400">일관되고 신뢰할 수 있는</span> 검증 결과를 제공합니다.
                </p>
                <p>
                  간호사 퇴사 예측 프로젝트에서 <span className="font-bold text-cyan-400">StratifiedKFold 교차 검증</span>을 사용하면서, 
                  각 폴드에서 안정적인 성능 측정이 가능함을 경험했습니다. 
                  <span className="font-bold text-cyan-400">과학적 모델 검증의 표준</span>임을 깨달았습니다.
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
                    <span className="font-bold text-cyan-400">StratifiedKFold 교차 검증</span>으로 5개 ML 모델의 성능을 
                    클래스 비율을 유지하면서 <span className="font-bold text-cyan-400">신뢰성 있게 평가</span>했습니다.
                  </p>
                  <p>
                    <span className="font-bold text-cyan-400">각 폴드별 일관된 성능</span>을 통해 
                    모델의 <span className="font-bold text-blue-300">일반화 능력</span>을 정확히 측정하고 
                    과적합 여부를 체계적으로 진단했습니다.
                  </p>
                  <div className="bg-gray-800/50 rounded-lg p-4 mt-4">
                    <div className="text-sm text-gray-400 mb-2">핵심 StratifiedKFold 기술들:</div>
                    <div className="flex flex-wrap gap-2">
                      <Badge className="bg-cyan-700 text-cyan-100">Cross Validation</Badge>
                      <Badge className="bg-cyan-700 text-cyan-100">Class Balance</Badge>
                      <Badge className="bg-cyan-700 text-cyan-100">Performance Evaluation</Badge>
                      <Badge className="bg-cyan-700 text-cyan-100">Overfitting Detection</Badge>
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
                    검증 신뢰성
                  </h4>
                  <div className="text-cyan-300 space-y-2">
                    <div>• <span className="font-bold">클래스 비율</span> 완벽 유지</div>
                    <div>• <span className="font-bold">편향 없는 평가</span> 달성</div>
                    <div>• <span className="font-bold">재현 가능한 결과</span></div>
                  </div>
                </div>
                
                <div className="bg-gradient-to-r from-green-900/30 to-emerald-900/30 rounded-xl p-6 border border-green-600/30">
                  <h4 className="font-bold text-white mb-3 flex items-center gap-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    모델 선택
                  </h4>
                  <div className="text-green-300 space-y-2">
                    <div>• <span className="font-bold">객관적 성능 비교</span></div>
                    <div>• <span className="font-bold">과적합 방지 95%</span> 효과</div>
                    <div>• <span className="font-bold">최적 모델</span> 정확한 선정</div>
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
                    처음엔 <span className="font-bold text-cyan-400">단순한 train_test_split만</span> 사용했습니다. 
                    "한 번만 나누면 되지 뭐" 하는 
                    <span className="font-bold text-blue-300">안일한 생각</span>이었죠.
                  </p>
                  <p>
                    하지만 <span className="font-bold text-cyan-400">운 좋은 분할과 운 나쁜 분할</span>의 차이를 경험하면서 
                    교차 검증의 중요성을 깨달았습니다. 
                    특히 <span className="font-bold text-blue-300">불균형 데이터</span>에서 
                    일반 K-Fold로는 신뢰할 수 없는 결과가 나오는 것을 보고 충격받았습니다.
                  </p>
                  <p>
                    지금은 <span className="font-bold text-cyan-400">GroupKFold, TimeSeriesSplit, RepeatedStratifiedKFold</span> 등 
                    데이터 특성에 맞는 다양한 검증 전략을 구사할 수 있게 되었습니다.
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
                <h4 className="font-bold text-white mb-4">과학적 모델 검증으로 AI/ML 시스템의 신뢰성 확보</h4>
                <div className="text-gray-300 space-y-3">
                  <p>
                    StratifiedKFold의 <span className="font-bold text-cyan-400">체계적이고 편향 없는 검증</span>을 통해 
                    모델의 진정한 성능을 정확히 측정하여 비즈니스에서 신뢰할 수 있는 AI 시스템을 구축할 수 있었습니다. 이는 단순한 검증을 넘어선 <span className="font-bold text-cyan-400">품질 보증</span>입니다.
                  </p>
                  <p>
                    <span className="font-bold text-blue-300">과적합 방지와 일반화 성능 확보</span>를 통해 
                    실제 운영 환경에서도 안정적으로 작동하는 모델을 보장하여, <span className="font-bold text-cyan-400">비즈니스 리스크</span>를 크게 감소시켰습니다.
                  </p>
                  <p>
                    특히 토스와 같은 <span className="font-bold text-blue-300">미션 크리티컬 시스템</span>에서는 
                    이런 엄격한 모델 검증이 <span className="font-bold text-cyan-400">서비스 안정성과 고객 신뢰</span>의 
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