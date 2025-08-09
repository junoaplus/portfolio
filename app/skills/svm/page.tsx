'use client'
import { Navigation } from '@/components/navigation'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ArrowLeft, Lightbulb, Rocket, TrendingUp, Target, Award } from 'lucide-react'
import Link from 'next/link'

export default function SVMSkillPage() {
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
            <div className="text-6xl mb-4">🎯</div>
            <h1 className="text-4xl font-black text-white mb-4">
              SVM
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              서포트 벡터 머신 - 강력한 분류 알고리즘
            </p>
            <Badge style={{ background: 'rgb(37 99 235)' }} className="text-white text-lg px-6 py-2">
              Proficiency Level: 75%
            </Badge>
          </div>

          {/* 개인적 견해 */}
          <Card className="bg-gray-800/80 backdrop-blur-sm border border-gray-600/50 shadow-2xl mb-12">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-white flex items-center gap-3">
                <Lightbulb className="w-6 h-6 text-yellow-500" />
                SVM에 대한 개인적 견해
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-lg text-gray-300 leading-relaxed space-y-4">
                <p>
                  <span className="font-bold text-cyan-400">SVM은 수학적 우아함과 실용성을 겸비한 알고리즘</span>이라고 생각합니다. 
                  마진 최대화라는 명확한 목표로 <span className="font-bold text-cyan-400">최적의 결정 경계</span>를 찾아내는 
                  과정이 매우 직관적이면서도 강력합니다.
                </p>
                <p>
                  특히 <span className="font-bold text-cyan-400">커널 트릭의 놀라운 능력</span>이 인상적이었습니다. 
                  선형 분리가 불가능한 데이터를 고차원으로 매핑하여 
                  <span className="font-bold text-cyan-400">복잡한 패턴도 정확히 분류</span>할 수 있게 해주는 
                  수학적 아름다움을 갖고 있습니다.
                </p>
                <p>
                  토스와 같은 <span className="font-bold text-cyan-400">금융 서비스</span>에서는 사기 탐지, 
                  신용 평가, 이상 거래 탐지에 SVM의 정확한 분류 능력이 필수적입니다. 
                  <span className="font-bold text-cyan-400">소수의 서포트 벡터로 효율적인 예측</span>이 가능해 
                  실시간 의사결정 시스템에 최적화된 알고리즘입니다.
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
                      <span className="font-bold text-cyan-400">8가지 머신러닝 알고리즘 비교 분석</span>에서 
                      SVM으로 안정적인 분류 성능을 확인했습니다. 
                      <span className="font-bold text-cyan-400">RBF 커널을 활용한 비선형 분류</span>로 
                      복잡한 구독자 이탈 패턴을 효과적으로 학습했습니다.
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
                      <span className="font-bold text-cyan-400">5가지 분류 모델 비교</span>에서 
                      SVM의 정확한 분류 경계 설정 능력을 확인했습니다. 
                      <span className="font-bold text-cyan-400">Cost-Sensitive Learning</span>으로 
                      불균형 데이터에서도 안정적인 성능을 발휘했습니다.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-800/50 rounded-lg p-4 mt-6">
                <div className="text-sm text-gray-400 mb-2">핵심 SVM 활용:</div>
                <div className="flex flex-wrap gap-2">
                  <Badge className="bg-cyan-700 text-cyan-100">RBF Kernel</Badge>
                  <Badge className="bg-cyan-700 text-cyan-100">Support Vectors</Badge>
                  <Badge className="bg-cyan-700 text-cyan-100">Margin Maximization</Badge>
                  <Badge className="bg-cyan-700 text-cyan-100">Class Imbalance</Badge>
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
                    분류 성능
                  </h4>
                  <div className="text-cyan-300 space-y-2">
                    <div>• <span className="font-bold">정확한 결정 경계</span> 설정</div>
                    <div>• <span className="font-bold">안정적인 예측 성능</span></div>
                    <div>• <span className="font-bold">과적합 방지</span> 효과</div>
                  </div>
                </div>
                
                <div className="bg-gradient-to-r from-green-900/30 to-emerald-900/30 rounded-xl p-6 border border-green-600/30">
                  <h4 className="font-bold text-white mb-3 flex items-center gap-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    커널 최적화
                  </h4>
                  <div className="text-green-300 space-y-2">
                    <div>• <span className="font-bold">RBF 커널</span> 효과적 활용</div>
                    <div>• <span className="font-bold">비선형 분류</span> 구현</div>
                    <div>• <span className="font-bold">하이퍼파라미터 최적화</span></div>
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
                    처음엔 <span className="font-bold text-cyan-400">수학적 개념이 복잡</span>해 보였지만, 
                    <span className="font-bold text-blue-300">마진 최대화라는 직관적인 목표</span>를 이해하니 
                    SVM의 동작 원리가 명확해졌습니다.
                  </p>
                  <p>
                    <span className="font-bold text-cyan-400">커널 함수의 선택</span>이 성능에 미치는 영향을 
                    실험하면서 데이터의 특성에 맞는 커널을 선택하는 것이 중요함을 깨달았습니다. 
                    특히 <span className="font-bold text-blue-300">C와 gamma 파라미터 튜닝</span>이 
                    과적합과 성능의 균형을 맞추는 핵심이었습니다.
                  </p>
                  <p>
                    지금은 <span className="font-bold text-cyan-400">다양한 커널, 불균형 데이터 처리, 
                    대용량 데이터 최적화</span> 등을 활용해서 
                    실무에서도 효과적인 SVM 분류 모델을 구축할 수 있게 되었습니다.
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
                <h4 className="font-bold text-white mb-4">정확한 분류로 리스크 관리 최적화</h4>
                <div className="text-gray-300 space-y-3">
                  <p>
                    SVM의 <span className="font-bold text-cyan-400">정확한 결정 경계 설정</span>으로 
                    고객 이탈과 직원 퇴사를 명확히 구분하여 
                    <span className="font-bold text-blue-300">정밀한 타겟팅과 맞춤형 대응</span>이 가능해졌습니다. 
                    이는 마케팅 비용 효율성과 인사 관리 전략의 정확성을 크게 향상시켰습니다.
                  </p>
                  <p>
                    <span className="font-bold text-blue-300">커널 트릭을 활용한 비선형 분류</span>로 
                    기존 선형 모델로는 찾을 수 없던 복잡한 패턴을 발견하고 
                    <span className="font-bold text-cyan-400">예측 정확도를 크게 개선</span>할 수 있어 
                    의사결정의 신뢰성을 높였습니다.
                  </p>
                  <p>
                    특히 토스와 같은 <span className="font-bold text-blue-300">금융 플랫폼</span>에서는 
                    SVM이 <span className="font-bold text-cyan-400">사기 탐지, 신용 평가, 이상 거래 탐지</span> 등에서 
                    높은 정확도와 낮은 오탐률을 제공하여 
                    <span className="font-bold text-cyan-400">금융 리스크를 최소화</span>하면서도 
                    고객 경험을 보호하는 핵심 도구가 될 것입니다.
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