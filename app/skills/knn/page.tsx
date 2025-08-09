'use client'
import { Navigation } from '@/components/navigation'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ArrowLeft, Lightbulb, Rocket, TrendingUp, Target, Award } from 'lucide-react'
import Link from 'next/link'

export default function KNNSkillPage() {
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
              KNN
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              K-Nearest Neighbors algorithm for classification and regression
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
                KNN에 대한 개인적 견해
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-lg text-gray-300 leading-relaxed space-y-4">
                <p>
                  <span className="font-bold text-cyan-400">KNN은 직관적이면서도 강력한 ML의 시작점</span>이라고 생각합니다. 
                  "유유상종"이라는 간단한 원리로 복잡한 패턴을 찾아내며 
                  <span className="font-bold text-cyan-400">비모수적 방법의 아름다움</span>을 보여주는 알고리즘입니다.
                </p>
                <p>
                  특히 <span className="font-bold text-cyan-400">lazy learning의 특성</span>이 인상적이었습니다. 
                  훈련 단계에서는 데이터만 저장하고 실제 예측 시에 계산하는 방식이 
                  <span className="font-bold text-cyan-400">메모리 기반 학습</span>의 본질을 잘 보여줍니다.
                </p>
                <p>
                  신문 이탈 예측 프로젝트에서 <span className="font-bold text-cyan-400">KNN을 벤치마크 모델</span>로 사용하면서, 
                  단순함 속에 숨겨진 강력함을 경험했습니다. 특히 <span className="font-bold text-cyan-400">지역적 패턴 학습</span>에서 
                  복잡한 모델들과 경쟁할 수 있는 성능을 보여주었습니다.
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
                    <span className="font-bold text-cyan-400">KNN 분류 알고리즘</span>으로 구독자 이탈 패턴을 학습하고 
                    다른 머신러닝 모델들과의 <span className="font-bold text-cyan-400">성능 비교 분석</span>을 수행했습니다.
                  </p>
                  <p>
                    <span className="font-bold text-cyan-400">거리 기반 유사도 측정</span>을 통해 
                    유사한 특성을 가진 고객 그룹을 발견하고 <span className="font-bold text-blue-300">지역적 패턴 인사이트</span>를 
                    도출하여 비즈니스 전략 수립에 기여했습니다.
                  </p>
                  <div className="bg-gray-800/50 rounded-lg p-4 mt-4">
                    <div className="text-sm text-gray-400 mb-2">핵심 KNN 기술들:</div>
                    <div className="flex flex-wrap gap-2">
                      <Badge className="bg-cyan-700 text-cyan-100">Distance Metrics</Badge>
                      <Badge className="bg-cyan-700 text-cyan-100">K-value Tuning</Badge>
                      <Badge className="bg-cyan-700 text-cyan-100">Local Patterns</Badge>
                      <Badge className="bg-cyan-700 text-cyan-100">Lazy Learning</Badge>
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
                    <div>• <span className="font-bold">경쟁력 있는 예측 정확도</span></div>
                    <div>• <span className="font-bold">지역적 패턴 학습</span> 우수</div>
                    <div>• <span className="font-bold">비선형 관계</span> 효과적 처리</div>
                  </div>
                </div>
                
                <div className="bg-gradient-to-r from-green-900/30 to-emerald-900/30 rounded-xl p-6 border border-green-600/30">
                  <h4 className="font-bold text-white mb-3 flex items-center gap-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    인사이트 발굴
                  </h4>
                  <div className="text-green-300 space-y-2">
                    <div>• <span className="font-bold">유사 고객 그룹</span> 식별</div>
                    <div>• <span className="font-bold">이해하기 쉬운</span> 예측 근거</div>
                    <div>• <span className="font-bold">벤치마크 모델</span> 역할</div>
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
                    처음엔 <span className="font-bold text-cyan-400">너무 단순해서 실용성이 없을 거라고</span> 생각했습니다. 
                    복잡한 딥러닝 모델들이 각광받는 시대에 
                    <span className="font-bold text-blue-300">이런 고전적 방법</span>이 무슨 의미가 있을까 싶었죠.
                  </p>
                  <p>
                    하지만 <span className="font-bold text-cyan-400">실제 데이터에 적용해보면서</span> 
                    생각이 완전히 바뀌었습니다. 
                    특히 <span className="font-bold text-blue-300">해석 가능성과 지역적 패턴 학습</span>에서 
                    복잡한 모델들이 놓치는 부분을 잘 포착하는 것을 경험했습니다.
                  </p>
                  <p>
                    지금은 <span className="font-bold text-cyan-400">가중치 KNN, 차원 축소와의 결합, 앙상블 기법</span> 등을 
                    활용해서 KNN의 한계를 보완하면서 강점을 극대화할 수 있게 되었습니다.
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
                <h4 className="font-bold text-white mb-4">직관적인 ML 모델로 해석가능한 예측 시스템 구축</h4>
                <div className="text-gray-300 space-y-3">
                  <p>
                    KNN의 <span className="font-bold text-cyan-400">직관적인 예측 메커니즘</span>을 통해 
                    비즈니스 팀이 쉽게 이해하고 신뢰할 수 있는 예측 모델을 제공했습니다. 이는 단순한 알고리즘 적용을 넘어선 <span className="font-bold text-cyan-400">비즈니스 커뮤니케이션</span>의 향상입니다.
                  </p>
                  <p>
                    <span className="font-bold text-blue-300">유사 고객 그룹 발견</span>을 통해 
                    타겟 마케팅과 고객 세분화 전략을 더 정교하게 수립할 수 있게 되어, <span className="font-bold text-cyan-400">마케팅 효율성</span>이 크게 향상되었습니다.
                  </p>
                  <p>
                    특히 토스와 같은 <span className="font-bold text-blue-300">고객 중심 서비스</span>에서는 
                    이런 해석 가능한 ML 접근법이 <span className="font-bold text-cyan-400">개인화 서비스와 고객 이해</span>의 
                    핵심 도구가 될 것이라고 확신합니다.
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