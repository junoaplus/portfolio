'use client'
import { Navigation } from '@/components/navigation'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ArrowLeft, Lightbulb, Rocket, TrendingUp, Target, Award } from 'lucide-react'
import Link from 'next/link'

export default function MatplotlibSkillPage() {
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
            <div className="text-6xl mb-4">📊</div>
            <h1 className="text-4xl font-black text-white mb-4">
              matplotlib
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Python 데이터 시각화의 표준 라이브러리로 강력한 차트와 그래프 생성
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
                matplotlib에 대한 개인적 견해
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-lg text-gray-300 leading-relaxed space-y-4">
                <p>
                  <span className="font-bold text-cyan-400">matplotlib은 Python 데이터 시각화의 부동의 1위</span>라고 생각합니다. 
                  복잡하고 상세한 설정이 가능해서 
                  <span className="font-bold text-cyan-400">publication-quality 차트</span>부터 간단한 탐색적 분석까지 모든 요구사항을 충족합니다.
                </p>
                <p>
                  특히 <span className="font-bold text-cyan-400">pyplot과 객체 지향 API의 이중 구조</span>가 인상적이었습니다. 
                  빠른 프로토타이핑에는 pyplot을, 복잡한 커스터마이징에는 
                  <span className="font-bold text-cyan-400">객체 지향 방식</span>을 사용할 수 있는 유연성이 뛰어납니다.
                </p>
                <p>
                  신문 이탈 예측과 간호사 퇴사 예측 프로젝트에서 <span className="font-bold text-cyan-400">머신러닝 모델 성능 시각화</span>와 
                  복잡한 데이터 분포 분석을 matplotlib으로 구현하면서, 
                  <span className="font-bold text-cyan-400">데이터 스토리텔링의 핵심 도구</span>임을 깨달았습니다.
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
                <div className="bg-gradient-to-r from-purple-900/20 to-pink-900/20 rounded-xl p-6 border border-purple-600/30 cursor-pointer hover:bg-gradient-to-r hover:from-purple-900/30 hover:to-pink-900/30 transition-all duration-300" onClick={() => window.open('/newspaper-churn', '_blank')}>
                  <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2 hover:text-purple-300 transition-colors">
                    <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                    신문 구독자 이탈 예측 분석 →
                  </h3>
                  <div className="text-gray-300 space-y-3">
                    <p>
                      <span className="font-bold text-cyan-400">matplotlib 시각화</span>로 6개 머신러닝 모델의 성능을 
                      다각도로 분석하고 <span className="font-bold text-cyan-400">ROC 커브, 혼동행렬, 피쳐 중요도</span>를 시각화했습니다.
                    </p>
                    <p>
                      <span className="font-bold text-cyan-400">복잡한 데이터 분포</span>와 모델 성능 지표를 
                      <span className="font-bold text-blue-300">직관적인 차트</span>로 변환하여 
                      비즈니스 인사이트 도출을 최적화했습니다.
                    </p>
                  </div>
                </div>
                
                <div className="bg-gradient-to-r from-indigo-900/20 to-blue-900/20 rounded-xl p-6 border border-indigo-600/30 cursor-pointer hover:bg-gradient-to-r hover:from-indigo-900/30 hover:to-blue-900/30 transition-all duration-300" onClick={() => window.open('/nurse-salary', '_blank')}>
                  <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2 hover:text-indigo-300 transition-colors">
                    <div className="w-3 h-3 bg-indigo-500 rounded-full"></div>
                    간호사 퇴사 예측 분석 →
                  </h3>
                  <div className="text-gray-300 space-y-3">
                    <p>
                      <span className="font-bold text-cyan-400">matplotlib 고급 시각화</span>로 5개 머신러닝 알고리즘의 
                      교차 검증 결과와 <span className="font-bold text-cyan-400">하이퍼파라미터 튜닝 과정</span>을 시각화했습니다.
                    </p>
                    <p>
                      <span className="font-bold text-cyan-400">상관관계 히트맵과 분포 그래프</span>를 통해 
                      간호사 퇴사 요인을 <span className="font-bold text-blue-300">데이터 중심으로 분석</span>했습니다.
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-gray-800/50 rounded-lg p-4 mt-6">
                <div className="text-sm text-gray-400 mb-2">핵심 matplotlib 기술들:</div>
                <div className="flex flex-wrap gap-2">
                  <Badge className="bg-cyan-700 text-cyan-100">ROC Curves</Badge>
                  <Badge className="bg-cyan-700 text-cyan-100">Confusion Matrix</Badge>
                  <Badge className="bg-cyan-700 text-cyan-100">Distribution Plots</Badge>
                  <Badge className="bg-cyan-700 text-cyan-100">Heatmaps</Badge>
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
                    시각화 품질
                  </h4>
                  <div className="text-cyan-300 space-y-2">
                    <div>• <span className="font-bold">Publication-quality</span> 차트</div>
                    <div>• <span className="font-bold">커스터마이징 100%</span> 자유도</div>
                    <div>• <span className="font-bold">복잡한 다중 차트</span> 구현</div>
                  </div>
                </div>
                
                <div className="bg-gradient-to-r from-green-900/30 to-emerald-900/30 rounded-xl p-6 border border-green-600/30">
                  <h4 className="font-bold text-white mb-3 flex items-center gap-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    분석 효과성
                  </h4>
                  <div className="text-green-300 space-y-2">
                    <div>• <span className="font-bold">인사이트 발굴 80%</span> 증가</div>
                    <div>• <span className="font-bold">모델 해석력 95%</span> 향상</div>
                    <div>• <span className="font-bold">의사결정 지원 90%</span></div>
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
                    처음엔 <span className="font-bold text-cyan-400">기본 선 그래프와 막대 차트</span>만 그릴 줄 알았습니다. 
                    matplotlib이 복잡하다고 소문나서 
                    <span className="font-bold text-blue-300">seaborn만 쓰면 된다고</span> 생각했죠.
                  </p>
                  <p>
                    하지만 <span className="font-bold text-cyan-400">복잡한 머신러닝 결과를 시각화하면서</span> 
                    matplotlib의 진가를 깨달았습니다. 
                    특히 <span className="font-bold text-blue-300">subplot과 figure 객체</span>를 이해하고 나니 
                    원하는 모든 시각화가 가능해졌습니다.
                  </p>
                  <p>
                    지금은 <span className="font-bold text-cyan-400">3D 플롯, 애니메이션, 인터랙티브 차트</span> 등을 
                    활용해서 복잡한 데이터도 효과적으로 시각화할 수 있게 되었습니다.
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
                <h4 className="font-bold text-white mb-4">고품질 데이터 시각화로 의사결정의 정확성과 설득력 강화</h4>
                <div className="text-gray-300 space-y-3">
                  <p>
                    matplotlib의 <span className="font-bold text-cyan-400">정밀한 시각화 기능</span>을 통해 
                    복잡한 머신러닝 분석 결과를 직관적이고 설득력 있게 전달할 수 있었습니다. 이는 단순한 그래프 생성을 넘어선 <span className="font-bold text-cyan-400">데이터 스토리텔링</span>의 완성입니다.
                  </p>
                  <p>
                    <span className="font-bold text-blue-300">Publication-quality 차트</span>를 통해 
                    연구 결과와 비즈니스 보고서의 전문성을 크게 높이고, <span className="font-bold text-cyan-400">신뢰성 있는 의사결정</span>을 지원했습니다.
                  </p>
                  <p>
                    특히 토스와 같은 <span className="font-bold text-blue-300">데이터 기반 조직</span>에서는 
                    이런 고품질 시각화 능력이 <span className="font-bold text-cyan-400">분석 결과의 임팩트와 의사결정의 품질</span>을 
                    동시에 보장하는 핵심 역량이 될 것이라고 확신합니다.
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