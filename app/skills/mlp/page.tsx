'use client'
import { Navigation } from '@/components/navigation'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ArrowLeft, Lightbulb, Rocket, TrendingUp, Target, Award } from 'lucide-react'
import Link from 'next/link'

export default function MLPSkillPage() {
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
            <div className="text-6xl mb-4">🧠</div>
            <h1 className="text-4xl font-black text-white mb-4">
              MLP
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Multi-Layer Perceptron neural network for complex pattern recognition
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
                MLP에 대한 개인적 견해
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-lg text-gray-300 leading-relaxed space-y-4">
                <p>
                  <span className="font-bold text-cyan-400">MLP는 딥러닝의 기초이자 핵심</span>이라고 생각합니다. 
                  단순한 퍼셉트론에서 시작해서 다층 구조를 통해 
                  <span className="font-bold text-cyan-400">비선형 문제도 해결</span>할 수 있는 강력한 알고리즘입니다.
                </p>
                <p>
                  특히 <span className="font-bold text-cyan-400">역전파와 경사하강법의 조합</span>이 인상적이었습니다. 
                  복잡한 가중치 업데이트 과정이 자동으로 이루어지면서 
                  <span className="font-bold text-cyan-400">함수 근사의 범용성</span>을 보여주는 것이 놀라웠습니다.
                </p>
                <p>
                  신문 이탈 예측 프로젝트에서 <span className="font-bold text-cyan-400">MLP를 다른 ML 모델들과 비교</span>하면서, 
                  선형 모델로 포착하기 어려운 복잡한 패턴을 학습하는 능력과 
                  <span className="font-bold text-cyan-400">신경망의 표현력</span>을 직접 경험했습니다.
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
                    <span className="font-bold text-cyan-400">MLP 신경망</span>으로 고객 이탈 패턴의 복잡한 비선형 관계를 학습하여 
                    기존 선형 모델보다 <span className="font-bold text-cyan-400">예측 성능을 크게 향상</span>시켰습니다.
                  </p>
                  <p>
                    <span className="font-bold text-cyan-400">다층 히든 레이어와 활성화 함수</span>를 통해 
                    고객 행동의 미묘한 패턴을 포착하고 <span className="font-bold text-blue-300">복잡한 피쳐 상호작용</span>을 
                    효과적으로 모델링했습니다.
                  </p>
                  <div className="bg-gray-800/50 rounded-lg p-4 mt-4">
                    <div className="text-sm text-gray-400 mb-2">핵심 MLP 기술들:</div>
                    <div className="flex flex-wrap gap-2">
                      <Badge className="bg-cyan-700 text-cyan-100">Multi-layer Architecture</Badge>
                      <Badge className="bg-cyan-700 text-cyan-100">Backpropagation</Badge>
                      <Badge className="bg-cyan-700 text-cyan-100">Activation Functions</Badge>
                      <Badge className="bg-cyan-700 text-cyan-100">Gradient Descent</Badge>
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
                    <div>• <span className="font-bold">비선형 패턴 학습</span> 우수</div>
                    <div>• <span className="font-bold">복잡한 관계</span> 효과적 모델링</div>
                    <div>• <span className="font-bold">선형 모델 대비 20%</span> 성능 향상</div>
                  </div>
                </div>
                
                <div className="bg-gradient-to-r from-green-900/30 to-emerald-900/30 rounded-xl p-6 border border-green-600/30">
                  <h4 className="font-bold text-white mb-3 flex items-center gap-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    기술적 이해
                  </h4>
                  <div className="text-green-300 space-y-2">
                    <div>• <span className="font-bold">딥러닝 기초</span> 완벽 이해</div>
                    <div>• <span className="font-bold">신경망 구조</span> 설계 능력</div>
                    <div>• <span className="font-bold">하이퍼파라미터 튜닝</span></div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* 학습/경험 스토리 */}
          <Card className="bg-gray-800/80 backdrop-blur-sm border border-gray-600/50 shadow-2xl mb-12">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-white flex items-center gap-3">
                <Target className="w-6 h-6 text-blue-5000" />
                학습 & 경험 스토리
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="bg-gradient-to-r from-blue-900/20 to-cyan-900/20 rounded-xl p-6 border border-blue-600/30">
                <div className="text-lg text-gray-300 leading-relaxed space-y-4">
                  <p>
                    처음엔 <span className="font-bold text-cyan-400">선형 모델만으로 충분하다고</span> 생각했습니다. 
                    로지스틱 회귀나 SVM만 있으면 
                    <span className="font-bold text-blue-300">복잡한 신경망은 오버엔지니어링</span>이라고 여겼죠.
                  </p>
                  <p>
                    하지만 <span className="font-bold text-cyan-400">복잡한 데이터 패턴을 다루면서</span> 
                    MLP의 필요성을 깨달았습니다. 
                    특히 <span className="font-bold text-blue-300">피쳐 간 비선형 상호작용</span>을 
                    자동으로 학습하는 능력에 감탄했습니다.
                  </p>
                  <p>
                    지금은 <span className="font-bold text-cyan-400">정규화, 드롭아웃, 배치 정규화</span> 등을 
                    활용해서 안정적이고 성능 좋은 신경망을 설계할 수 있게 되었습니다.
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
                <h4 className="font-bold text-white mb-4">신경망 기술로 복잡한 비즈니스 패턴 모델링</h4>
                <div className="text-gray-300 space-y-3">
                  <p>
                    MLP의 <span className="font-bold text-cyan-400">비선형 패턴 학습 능력</span>을 통해 
                    기존 통계 모델로는 포착하기 어려운 고객 행동의 복잡한 관계를 발견할 수 있었습니다. 이는 단순한 알고리즘 적용을 넘어선 <span className="font-bold text-cyan-400">비즈니스 인사이트</span>의 혁신입니다.
                  </p>
                  <p>
                    <span className="font-bold text-blue-300">딥러닝 기초 기술</span>의 습득을 통해 
                    더 고도화된 AI 모델 개발의 기반을 마련하고, <span className="font-bold text-cyan-400">기술 역량</span>을 크게 확장했습니다.
                  </p>
                  <p>
                    특히 토스와 같은 <span className="font-bold text-blue-300">AI 기반 금융 서비스</span>에서는 
                    이런 신경망 기술이 <span className="font-bold text-cyan-400">개인화 서비스와 리스크 모델링</span>의 
                    핵심 엔진이 될 것이라고 확신합니다.
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