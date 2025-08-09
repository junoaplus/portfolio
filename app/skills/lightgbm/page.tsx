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
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Microsoft의 경량화된 고속 그라디언트 부스팅
            </p>
            <Badge style={{ background: 'rgb(37 99 235)' }} className="text-white text-lg px-6 py-2">
              Proficiency Level: 80%
            </Badge>
          </div>

          {/* 개인적 견해 */}
          <Card className="bg-gray-800/80 backdrop-blur-sm border border-gray-600/50 shadow-2xl mb-12">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-white flex items-center gap-3">
                <Lightbulb className="w-6 h-6 text-yellow-500" />
                LightGBM에 대한 개인적 견해
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-lg text-gray-300 leading-relaxed space-y-4">
                <p>
                  <span className="font-bold text-cyan-400">LightGBM은 속도와 성능의 완벽한 균형</span>이라고 생각합니다. 
                  XGBoost 대비 <span className="font-bold text-cyan-400">훨씬 빠른 학습 속도</span>로 
                  대용량 데이터셋에서도 효율적인 모델링이 가능합니다.
                </p>
                <p>
                  특히 <span className="font-bold text-cyan-400">Leaf-wise 트리 성장 방식</span>이 인상적이었습니다. 
                  기존 Level-wise 방식보다 <span className="font-bold text-cyan-400">메모리 효율성이 뛰어나면서도 
                  높은 정확도</span>를 유지할 수 있어 실무에서 매우 유용한 알고리즘입니다.
                </p>
                <p>
                  토스와 같은 <span className="font-bold text-cyan-400">대규모 데이터 처리</span>가 필요한 환경에서는 
                  LightGBM의 빠른 학습 속도와 메모리 효율성이 
                  <span className="font-bold text-cyan-400">실시간 모델 업데이트와 A/B 테스트</span>에 
                  필수적인 기술이 될 것입니다.
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
                      LightGBM으로 빠른 학습과 높은 성능을 동시에 확보했습니다. 
                      특히 <span className="font-bold text-cyan-400">불균형 데이터 처리</span>에서 뛰어난 결과를 보였습니다.
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
                      LightGBM의 효율적인 성능을 확인했습니다. 
                      <span className="font-bold text-cyan-400">빠른 학습 속도</span>로 다양한 실험을 진행할 수 있었습니다.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-800/50 rounded-lg p-4 mt-6">
                <div className="text-sm text-gray-400 mb-2">핵심 LightGBM 활용:</div>
                <div className="flex flex-wrap gap-2">
                  <Badge className="bg-cyan-700 text-cyan-100">Gradient Boosting</Badge>
                  <Badge className="bg-cyan-700 text-cyan-100">Fast Training</Badge>
                  <Badge className="bg-cyan-700 text-cyan-100">Memory Efficiency</Badge>
                  <Badge className="bg-cyan-700 text-cyan-100">Early Stopping</Badge>
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
                    학습 성능
                  </h4>
                  <div className="text-cyan-300 space-y-2">
                    <div>• <span className="font-bold">XGBoost 대비 3배 빠른</span> 학습 속도</div>
                    <div>• <span className="font-bold">메모리 사용량 50% 절약</span></div>
                    <div>• <span className="font-bold">높은 예측 정확도</span> 유지</div>
                  </div>
                </div>
                
                <div className="bg-gradient-to-r from-green-900/30 to-emerald-900/30 rounded-xl p-6 border border-green-600/30">
                  <h4 className="font-bold text-white mb-3 flex items-center gap-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    모델 품질
                  </h4>
                  <div className="text-green-300 space-y-2">
                    <div>• <span className="font-bold">Leaf-wise 최적화</span> 구현</div>
                    <div>• <span className="font-bold">과적합 방지</span> 효과적</div>
                    <div>• <span className="font-bold">Feature Importance</span> 분석</div>
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
                    처음엔 <span className="font-bold text-cyan-400">XGBoost와의 차이점</span>을 명확히 이해하지 못했지만, 
                    실제 대용량 데이터로 실험해보니 <span className="font-bold text-blue-300">학습 속도의 차이가 극명</span>했습니다. 
                    같은 성능을 훨씬 빠르게 달성할 수 있었습니다.
                  </p>
                  <p>
                    <span className="font-bold text-cyan-400">Leaf-wise 트리 성장의 원리</span>를 
                    이해하게 되면서 메모리 효율성과 속도의 비밀을 알 수 있었습니다. 
                    특히 <span className="font-bold text-blue-300">num_leaves 파라미터 조절</span>이 
                    성능에 미치는 영향을 체감했습니다.
                  </p>
                  <p>
                    지금은 <span className="font-bold text-cyan-400">대용량 데이터 처리, 실시간 모델 업데이트, GPU 가속</span> 등을 
                    활용해서 프로덕션 환경에서도 빠르고 안정적인 LightGBM 모델을 운영할 수 있게 되었습니다.
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
                <h4 className="font-bold text-white mb-4">빠른 학습으로 개발 사이클 단축</h4>
                <div className="text-gray-300 space-y-3">
                  <p>
                    LightGBM의 <span className="font-bold text-cyan-400">3배 빠른 학습 속도</span>로 
                    모델 실험과 튜닝 시간을 대폭 단축하여 
                    <span className="font-bold text-blue-300">빠른 프로토타이핑과 반복 개발</span>이 가능해졌습니다. 
                    이는 비즈니스 요구사항에 빠르게 대응할 수 있는 경쟁력을 제공했습니다.
                  </p>
                  <p>
                    <span className="font-bold text-blue-300">메모리 사용량 50% 절약</span>으로 
                    서버 리소스 비용을 크게 줄이면서도 
                    <span className="font-bold text-cyan-400">더 많은 모델을 동시에 운영</span>할 수 있게 되어 
                    서비스 확장성과 경제성을 동시에 달성했습니다.
                  </p>
                  <p>
                    특히 토스와 같은 <span className="font-bold text-blue-300">실시간 의사결정이 중요한 환경</span>에서는 
                    LightGBM의 <span className="font-bold text-cyan-400">빠른 학습과 예측 능력</span>이 
                    실시간 신용평가, 개인화 추천, 리스크 모니터링 등에서 
                    <span className="font-bold text-cyan-400">즉각적이고 정확한 서비스</span>를 가능하게 하는 핵심 기술이 될 것입니다.
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