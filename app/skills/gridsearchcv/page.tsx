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
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Automated hyperparameter tuning for optimal ML model performance
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
                GridSearchCV에 대한 개인적 견해
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-lg text-gray-300 leading-relaxed space-y-4">
                <p>
                  <span className="font-bold text-cyan-400">GridSearchCV는 ML 모델 최적화의 필수 도구</span>라고 생각합니다. 
                  수작업으로 하이퍼파라미터를 조정하는 번거로움에서 벗어나 
                  <span className="font-bold text-cyan-400">체계적이고 과학적인 최적화</span>를 가능하게 합니다.
                </p>
                <p>
                  특히 <span className="font-bold text-cyan-400">교차 검증과의 완벽한 결합</span>이 인상적이었습니다. 
                  단순히 최적 파라미터를 찾는 것을 넘어서 
                  <span className="font-bold text-cyan-400">일반화 성능까지 보장</span>하는 것이 뛰어납니다.
                </p>
                <p>
                  간호사 퇴사 예측 프로젝트에서 <span className="font-bold text-cyan-400">5개 ML 알고리즘의 하이퍼파라미터를 동시에 튜닝</span>하면서, 
                  각 모델의 잠재력을 최대한 끌어내고 
                  <span className="font-bold text-cyan-400">공정한 성능 비교</span>를 할 수 있었습니다.
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
                    <span className="font-bold text-cyan-400">GridSearchCV 자동 튜닝</span>으로 LogisticRegression, RandomForest, XGBoost, 
                    LightGBM, SVM 등 <span className="font-bold text-cyan-400">5개 모델의 최적 파라미터</span>를 체계적으로 탐색했습니다.
                  </p>
                  <p>
                    <span className="font-bold text-cyan-400">StratifiedKFold 교차 검증</span>과 결합하여 
                    각 모델의 <span className="font-bold text-blue-300">진정한 성능을 평가</span>하고 
                    최적의 예측 모델을 선정했습니다.
                  </p>
                  <div className="bg-gray-800/50 rounded-lg p-4 mt-4">
                    <div className="text-sm text-gray-400 mb-2">핵심 GridSearchCV 기술들:</div>
                    <div className="flex flex-wrap gap-2">
                      <Badge className="bg-cyan-700 text-cyan-100">Hyperparameter Tuning</Badge>
                      <Badge className="bg-cyan-700 text-cyan-100">Cross Validation</Badge>
                      <Badge className="bg-cyan-700 text-cyan-100">Model Optimization</Badge>
                      <Badge className="bg-cyan-700 text-cyan-100">Performance Comparison</Badge>
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
                    모델 최적화
                  </h4>
                  <div className="text-cyan-300 space-y-2">
                    <div>• <span className="font-bold">5개 모델</span> 동시 최적화</div>
                    <div>• <span className="font-bold">성능 향상 평균 25%</span></div>
                    <div>• <span className="font-bold">일반화 성능</span> 확실한 검증</div>
                  </div>
                </div>
                
                <div className="bg-gradient-to-r from-green-900/30 to-emerald-900/30 rounded-xl p-6 border border-green-600/30">
                  <h4 className="font-bold text-white mb-3 flex items-center gap-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    개발 효율성
                  </h4>
                  <div className="text-green-300 space-y-2">
                    <div>• <span className="font-bold">튜닝 시간 80%</span> 단축</div>
                    <div>• <span className="font-bold">체계적 탐색</span> 완전 자동화</div>
                    <div>• <span className="font-bold">객관적 모델 비교</span></div>
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
                    처음엔 <span className="font-bold text-cyan-400">하이퍼파라미터를 감으로 조정</span>했습니다. 
                    몇 번 시도해보다가 어느 정도 괜찮으면 
                    <span className="font-bold text-blue-300">그냥 넘어가자</span> 식이었죠.
                  </p>
                  <p>
                    하지만 <span className="font-bold text-cyan-400">체계적인 모델 비교가 필요한 프로젝트</span>를 진행하면서 
                    GridSearchCV의 필요성을 깨달았습니다. 
                    특히 <span className="font-bold text-blue-300\">공정한 성능 평가</span>를 위해서는 
                    모든 모델을 동일한 조건에서 최적화해야 했습니다.
                  </p>
                  <p>
                    지금은 <span className="font-bold text-cyan-400">RandomizedSearch, Bayesian Optimization, Optuna</span> 등 
                    고급 최적화 기법들도 상황에 맞게 활용할 수 있게 되었습니다.
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
                <h4 className="font-bold text-white mb-4">체계적 모델 최적화로 예측 성능과 신뢰성 극대화</h4>
                <div className="text-gray-300 space-y-3">
                  <p>
                    GridSearchCV의 <span className="font-bold text-cyan-400">체계적인 하이퍼파라미터 탐색</span>을 통해 
                    모든 모델의 잠재력을 최대한 발휘시켜 비즈니스에서 요구하는 예측 성능을 달성할 수 있었습니다. 이는 단순한 기술 적용을 넘어선 <span className="font-bold text-cyan-400">비즈니스 가치 최대화</span>입니다.
                  </p>
                  <p>
                    <span className="font-bold text-blue-300">교차 검증을 통한 신뢰성 확보</span>로 
                    모델이 실제 환경에서도 안정적으로 작동할 것이라는 확신을 제공하여, <span className="font-bold text-cyan-400">의사결정의 신뢰도</span>를 크게 향상시켰습니다.
                  </p>
                  <p>
                    특히 토스와 같은 <span className="font-bold text-blue-300">데이터 기반 의사결정</span> 조직에서는 
                    이런 과학적인 모델 최적화 방법론이 <span className="font-bold text-cyan-400">AI/ML 시스템의 품질과 신뢰성</span>을 
                    보장하는 핵심 역량이 될 것이라고 확신합니다.
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