'use client'
import { Navigation } from '@/components/navigation'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ArrowLeft, Lightbulb, Rocket, TrendingUp, Target, Award } from 'lucide-react'
import Link from 'next/link'

export default function ScikitLearnSkillPage() {
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
            <div className="text-6xl mb-4">⚙️</div>
            <h1 className="text-4xl font-black text-white mb-4">
              scikit-learn
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Python 머신러닝의 표준 라이브러리
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
                scikit-learn에 대한 개인적 견해
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-lg text-gray-300 leading-relaxed space-y-4">
                <p>
                  <span className="font-bold text-cyan-400">scikit-learn은 머신러닝의 민주화를 이룬 혁신</span>이라고 생각합니다. 
                  복잡한 알고리즘들을 <span className="font-bold text-cyan-400">일관되고 직관적인 API</span>로 제공하여 
                  누구나 쉽게 고품질의 머신러닝 모델을 구축할 수 있게 만들었습니다.
                </p>
                <p>
                  특히 <span className="font-bold text-cyan-400">fit, predict, transform의 통일된 인터페이스</span>가 
                  놀라웠습니다. 수백 가지 알고리즘이 모두 같은 방식으로 동작하여 
                  <span className="font-bold text-cyan-400">학습과 실험의 효율성</span>을 극대화할 수 있고 
                  코드의 재사용성과 유지보수성이 뛰어납니다.
                </p>
                <p>
                  토스와 같은 <span className="font-bold text-cyan-400">데이터 중심의 비즈니스 환경</span>에서는 
                  고객 세그멘테이션, 사기 탐지, 신용 평가에서 scikit-learn의 
                  <span className="font-bold text-cyan-400">안정적이고 검증된 알고리즘들</span>이 
                  신뢰할 수 있는 의사결정을 지원하는 핵심 도구가 될 것입니다.
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
                      <span className="font-bold text-cyan-400">8가지 scikit-learn 알고리즘 종합 비교</span>를 수행했습니다. 
                      RandomForest, SVM, Logistic Regression 등을 체계적으로 평가하여 
                      <span className="font-bold text-cyan-400">최적의 이탈 예측 모델</span>을 선정하고 
                      비즈니스 인사이트를 도출했습니다.
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
                      <span className="font-bold text-cyan-400">5가지 분류 알고리즘 성능 비교</span>에서 
                      scikit-learn의 강력한 전처리 도구들을 활용했습니다. 
                      <span className="font-bold text-cyan-400">StandardScaler, LabelEncoder, train_test_split</span> 등으로 
                      체계적인 데이터 파이프라인을 구축했습니다.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-800/50 rounded-lg p-4 mt-6">
                <div className="text-sm text-gray-400 mb-2">핵심 scikit-learn 활용:</div>
                <div className="flex flex-wrap gap-2">
                  <Badge className="bg-cyan-700 text-cyan-100">Model Selection</Badge>
                  <Badge className="bg-cyan-700 text-cyan-100">Cross Validation</Badge>
                  <Badge className="bg-cyan-700 text-cyan-100">Pipeline</Badge>
                  <Badge className="bg-cyan-700 text-cyan-100">Preprocessing</Badge>
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
                    <div>• <span className="font-bold">8개 알고리즘</span> 체계적 비교</div>
                    <div>• <span className="font-bold">최적 모델</span> 선정 완료</div>
                    <div>• <span className="font-bold">안정적인 예측</span> 성능</div>
                  </div>
                </div>
                
                <div className="bg-gradient-to-r from-green-900/30 to-emerald-900/30 rounded-xl p-6 border border-green-600/30">
                  <h4 className="font-bold text-white mb-3 flex items-center gap-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    개발 효율성
                  </h4>
                  <div className="text-green-300 space-y-2">
                    <div>• <span className="font-bold">통일된 API</span> 활용</div>
                    <div>• <span className="font-bold">빠른 프로토타이핑</span></div>
                    <div>• <span className="font-bold">검증된 알고리즘</span> 사용</div>
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
                    처음엔 <span className="font-bold text-cyan-400">각 알고리즘의 세부 구현</span>에만 집중했지만, 
                    scikit-learn을 통해 <span className="font-bold text-blue-300">통일된 워크플로우의 중요성</span>을 
                    깨달았습니다. fit-predict 패턴이 얼마나 강력한지 실감했습니다.
                  </p>
                  <p>
                    <span className="font-bold text-cyan-400">Pipeline과 GridSearchCV</span>를 활용하면서 
                    전처리부터 모델 선택까지 체계적으로 관리할 수 있다는 것을 배웠습니다. 
                    특히 <span className="font-bold text-blue-300">Cross-Validation과 Model Selection</span>의 
                    과학적 접근법이 매우 인상적이었습니다.
                  </p>
                  <p>
                    지금은 <span className="font-bold text-cyan-400">Feature Engineering, Ensemble Methods, 
                    Custom Transformers</span> 등을 활용해서 
                    프로덕션 환경에서도 견고하고 확장 가능한 머신러닝 파이프라인을 구축할 수 있게 되었습니다.
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
                <h4 className="font-bold text-white mb-4">검증된 알고리즘으로 신뢰할 수 있는 의사결정</h4>
                <div className="text-gray-300 space-y-3">
                  <p>
                    scikit-learn의 <span className="font-bold text-cyan-400">검증된 알고리즘들</span>을 활용하여 
                    고객 이탈과 직원 퇴사를 체계적으로 예측함으로써 
                    <span className="font-bold text-blue-300">데이터 기반의 신뢰할 수 있는 의사결정</span>을 
                    가능하게 하여 비즈니스 리스크를 크게 감소시켰습니다.
                  </p>
                  <p>
                    <span className="font-bold text-blue-300">통일된 API와 빠른 프로토타이핑</span>으로 
                    다양한 머신러닝 실험을 효율적으로 수행하여 
                    <span className="font-bold text-cyan-400">최적의 솔루션을 빠르게 발견</span>하고 
                    시장 변화에 민첩하게 대응할 수 있는 경쟁력을 확보했습니다.
                  </p>
                  <p>
                    특히 토스와 같은 <span className="font-bold text-blue-300">데이터 중심의 핀테크 서비스</span>에서는 
                    scikit-learn이 <span className="font-bold text-cyan-400">고객 세그멘테이션, 신용평가, 사기탐지</span> 등에서 
                    안정적이고 해석 가능한 머신러닝 모델을 제공하여 
                    <span className="font-bold text-cyan-400">규제 준수와 비즈니스 성과</span>를 동시에 달성하는 
                    핵심 기술 기반이 될 것입니다.
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