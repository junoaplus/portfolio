'use client'
import { Navigation } from '@/components/navigation'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ArrowLeft, Lightbulb, Rocket, TrendingUp, Target, Award } from 'lucide-react'
import Link from 'next/link'

export default function XGBoostSkillPage() {
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
            <div className="text-6xl mb-4">🚀</div>
            <h1 className="text-4xl font-black text-white mb-4">
              XGBoost
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              극한 그라디언트 부스팅 알고리즘
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
                XGBoost에 대한 개인적 견해
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-lg text-gray-300 leading-relaxed space-y-4">
                <p>
                  <span className="font-bold text-cyan-400">XGBoost는 머신러닝계의 스위스 아미 나이프</span>라고 생각합니다. 
                  회귀, 분류, 랭킹 문제를 모두 해결할 수 있으면서도 
                  <span className="font-bold text-cyan-400">뛰어난 성능과 해석 가능성</span>을 동시에 제공합니다.
                </p>
                <p>
                  특히 <span className="font-bold text-cyan-400">그라디언트 부스팅의 강력함과 정규화의 균형</span>이 인상적이었습니다. 
                  약한 학습기들을 순차적으로 결합하여 강한 모델을 만드는 과정에서 
                  <span className="font-bold text-cyan-400">과적합을 방지하면서도 높은 정확도</span>를 달성할 수 있었습니다.
                </p>
                <p>
                  토스와 같은 <span className="font-bold text-cyan-400">금융 서비스</span>에서는 신용평가, 사기탐지, 
                  리스크 모델링에 XGBoost가 필수적입니다. 
                  <span className="font-bold text-cyan-400">Feature Importance로 모델의 의사결정 과정을 설명</span>할 수 있어 
                  규제 요구사항을 만족하면서도 높은 예측 성능을 보장하는 핵심 도구입니다.
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
                      XGBoost를 활용하여 구독자 이탈 패턴을 예측했습니다. 
                      <span className="font-bold text-cyan-400">불균형 데이터 처리</span>와 함께 안정적인 성능을 확인했습니다.
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
                      XGBoost로 간호사 퇴사 요인을 분석했습니다. 
                      <span className="font-bold text-cyan-400">Feature Importance 분석</span>을 통해 핵심 변수들을 식별했습니다.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-800/50 rounded-lg p-4 mt-6">
                <div className="text-sm text-gray-400 mb-2">핵심 XGBoost 활용:</div>
                <div className="flex flex-wrap gap-2">
                  <Badge className="bg-cyan-700 text-cyan-100">Gradient Boosting</Badge>
                  <Badge className="bg-cyan-700 text-cyan-100">Feature Importance</Badge>
                  <Badge className="bg-cyan-700 text-cyan-100">GridSearchCV</Badge>
                  <Badge className="bg-cyan-700 text-cyan-100">Cross Validation</Badge>
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
                    <div>• <span className="font-bold">높은 예측 정확도</span> 달성</div>
                    <div>• <span className="font-bold">안정적인 교차검증</span> 성능</div>
                    <div>• <span className="font-bold">불균형 데이터</span> 효과적 처리</div>
                  </div>
                </div>
                
                <div className="bg-gradient-to-r from-green-900/30 to-emerald-900/30 rounded-xl p-6 border border-green-600/30">
                  <h4 className="font-bold text-white mb-3 flex items-center gap-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    해석 가능성
                  </h4>
                  <div className="text-green-300 space-y-2">
                    <div>• <span className="font-bold">Feature Importance</span> 분석</div>
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
                    처음엔 <span className="font-bold text-cyan-400">복잡한 하이퍼파라미터들</span>에 압도되었지만, 
                    <span className="font-bold text-blue-300">GridSearchCV와 교차검증</span>을 통해 
                    체계적으로 최적화하는 방법을 터득했습니다.
                  </p>
                  <p>
                    <span className="font-bold text-cyan-400">부스팅의 원리와 정규화의 중요성</span>을 
                    이해하게 되면서 과적합을 방지하면서도 높은 성능을 얻을 수 있었습니다. 
                    특히 <span className="font-bold text-blue-300">early_stopping 기능</span>이 매우 유용했습니다.
                  </p>
                  <p>
                    지금은 <span className="font-bold text-cyan-400">다양한 평가 지표, 클래스 불균형 처리, Feature Engineering</span> 등을 
                    활용해서 실무에 바로 적용할 수 있는 고성능 XGBoost 모델을 개발할 수 있게 되었습니다.
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
                <h4 className="font-bold text-white mb-4">정확한 예측으로 비즈니스 리스크 최소화</h4>
                <div className="text-gray-300 space-y-3">
                  <p>
                    XGBoost의 <span className="font-bold text-cyan-400">높은 예측 정확도</span>로 
                    고객 이탈, 퇴사 위험 등을 사전에 식별하여 
                    <span className="font-bold text-blue-300">선제적 대응 전략을 수립</span>할 수 있게 되었습니다. 
                    이는 고객 유지비용과 채용비용을 크게 절감하는 효과를 가져왔습니다.
                  </p>
                  <p>
                    <span className="font-bold text-blue-300">Feature Importance 분석</span>을 통해 
                    핵심 영향 요인들을 명확히 파악하고 
                    <span className="font-bold text-cyan-400">데이터 기반의 구체적인 개선책</span>을 제안할 수 있어 
                    경영진의 의사결정을 강력하게 지원했습니다.
                  </p>
                  <p>
                    특히 토스와 같은 <span className="font-bold text-blue-300">금융 플랫폼</span>에서는 
                    XGBoost가 <span className="font-bold text-cyan-400">신용 리스크, 사기 탐지, 고객 세그멘테이션</span> 등에서 
                    정확하고 해석 가능한 예측을 제공하여 
                    <span className="font-bold text-cyan-400">안전하고 수익성 높은 서비스 운영</span>의 핵심 도구가 될 것입니다.
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