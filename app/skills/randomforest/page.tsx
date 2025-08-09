'use client'
import { Navigation } from '@/components/navigation'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ArrowLeft, Lightbulb, Rocket, TrendingUp, Target, Award } from 'lucide-react'
import Link from 'next/link'

export default function RandomForestSkillPage() {
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
            <div className="text-6xl mb-4">🌲</div>
            <h1 className="text-4xl font-black text-white mb-4">
              RandomForest
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              강력한 앙상블 학습 알고리즘
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
                RandomForest에 대한 개인적 견해
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-lg text-gray-300 leading-relaxed space-y-4">
                <p>
                  <span className="font-bold text-cyan-400">RandomForest는 머신러닝의 민주주의</span>라고 생각합니다. 
                  수많은 의사결정 트리들이 투표를 통해 최종 결론을 내리는 방식으로 
                  <span className="font-bold text-cyan-400">안정적이고 신뢰할 수 있는 예측</span>을 제공합니다.
                </p>
                <p>
                  특히 <span className="font-bold text-cyan-400">과적합에 강하면서도 해석 가능성</span>을 유지한다는 점이 인상적이었습니다. 
                  Feature Importance로 어떤 변수가 중요한지 명확히 파악할 수 있어 
                  <span className="font-bold text-cyan-400">비즈니스 인사이트 도출</span>에 매우 유용합니다.
                </p>
                <p>
                  토스와 같은 <span className="font-bold text-cyan-400">금융 서비스</span>에서는 신용평가, 사기탐지, 
                  고객 세그멘테이션에 RandomForest의 안정적인 성능이 필수적입니다. 
                  <span className="font-bold text-cyan-400">높은 정확도와 설명 가능성</span>을 동시에 확보하여 
                  규제 요구사항을 만족하는 핵심 알고리즘입니다.
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
                      <span className="font-bold text-cyan-400">RandomForest 모델로 87% F1-Score 달성</span>하여 
                      8가지 알고리즘 중 최고 성능을 기록했습니다. 
                      <span className="font-bold text-cyan-400">불균형 데이터 처리</span>와 <span className="font-bold text-cyan-400">Feature Importance 분석</span>에서 
                      탁월한 성과를 보였습니다.
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
                      RandomForest의 안정적인 성능을 확인했습니다. 
                      <span className="font-bold text-cyan-400">나이, 월급, 출퇴근거리</span>가 핵심 퇴사 요인임을 Feature Importance로 입증했습니다.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-800/50 rounded-lg p-4 mt-6">
                <div className="text-sm text-gray-400 mb-2">핵심 RandomForest 활용:</div>
                <div className="flex flex-wrap gap-2">
                  <Badge className="bg-cyan-700 text-cyan-100">Ensemble Learning</Badge>
                  <Badge className="bg-cyan-700 text-cyan-100">Feature Importance</Badge>
                  <Badge className="bg-cyan-700 text-cyan-100">Overfitting Prevention</Badge>
                  <Badge className="bg-cyan-700 text-cyan-100">Bootstrap Sampling</Badge>
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
                    <div>• <span className="font-bold">87% F1-Score</span> 최고 성능</div>
                    <div>• <span className="font-bold">균형잡힌 예측</span> 달성</div>
                    <div>• <span className="font-bold">안정적인 교차검증</span> 결과</div>
                  </div>
                </div>
                
                <div className="bg-gradient-to-r from-green-900/30 to-emerald-900/30 rounded-xl p-6 border border-green-600/30">
                  <h4 className="font-bold text-white mb-3 flex items-center gap-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    해석 가능성
                  </h4>
                  <div className="text-green-300 space-y-2">
                    <div>• <span className="font-bold">Feature Importance</span> 명확한 분석</div>
                    <div>• <span className="font-bold">핵심 변수</span> 식별 완료</div>
                    <div>• <span className="font-bold">비즈니스 인사이트</span> 도출</div>
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
                    처음엔 <span className="font-bold text-cyan-400">단순히 트리를 여러 개 만드는 것</span>이라고 생각했지만, 
                    실제로는 <span className="font-bold text-blue-300">Bootstrap Sampling과 Random Feature Selection</span>의 
                    정교한 조합이라는 걸 깨달았습니다.
                  </p>
                  <p>
                    <span className="font-bold text-cyan-400">n_estimators와 max_depth 파라미터</span>가 
                    성능과 과적합에 미치는 영향을 실험하면서 
                    앙상블 학습의 원리를 깊이 이해할 수 있었습니다. 
                    특히 <span className="font-bold text-blue-300">OOB(Out-of-Bag) Score</span>를 활용한 검증 방식이 매우 유용했습니다.
                  </p>
                  <p>
                    지금은 <span className="font-bold text-cyan-400">하이퍼파라미터 튜닝, 클래스 불균형 처리, 
                    Feature Engineering</span> 등을 활용해서 
                    실무에 바로 적용할 수 있는 고성능 RandomForest 모델을 개발할 수 있게 되었습니다.
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
                <h4 className="font-bold text-white mb-4">안정적인 예측으로 비즈니스 리스크 최소화</h4>
                <div className="text-gray-300 space-y-3">
                  <p>
                    RandomForest의 <span className="font-bold text-cyan-400">87% F1-Score 최고 성능</span>으로 
                    고객 이탈과 직원 퇴사를 정확히 예측하여 
                    <span className="font-bold text-blue-300">선제적 대응 전략 수립</span>이 가능해졌습니다. 
                    이는 고객 유지비용과 채용비용을 크게 절감하는 효과를 가져왔습니다.
                  </p>
                  <p>
                    <span className="font-bold text-blue-300">Feature Importance 분석</span>을 통해 
                    Weekly Fee, HH Income, Reward Program 등 핵심 영향 요인들을 명확히 파악하고 
                    <span className="font-bold text-cyan-400">데이터 기반의 구체적인 개선책</span>을 제안할 수 있어 
                    경영진의 의사결정을 강력하게 지원했습니다.
                  </p>
                  <p>
                    특히 토스와 같은 <span className="font-bold text-blue-300">금융 플랫폼</span>에서는 
                    RandomForest가 <span className="font-bold text-cyan-400">신용평가, 사기탐지, 고객 세그멘테이션</span> 등에서 
                    높은 정확도와 설명 가능성을 제공하여 
                    <span className="font-bold text-cyan-400">규제 준수와 비즈니스 성과</span>를 동시에 달성하는 
                    핵심 도구가 될 것입니다.
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