'use client'
import { Navigation } from '@/components/navigation'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ArrowLeft, Lightbulb, Rocket, TrendingUp, Target, Award } from 'lucide-react'
import Link from 'next/link'

export default function FineTuningSkillPage() {
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
              Fine-tuning
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              모델 미세 조정 - 도메인 특화 AI 개발
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
                Fine-tuning에 대한 개인적 견해
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-lg text-gray-300 leading-relaxed space-y-4">
                <p>
                  <span className="font-bold text-cyan-400">Fine-tuning은 범용 AI를 전문가로 키우는 과정</span>이라고 생각합니다. 
                  사전 훈련된 거대한 지식을 바탕으로 <span className="font-bold text-cyan-400">특정 도메인에 최적화</span>하여 
                  더욱 정확하고 유용한 AI 서비스를 만들어내는 핵심 기술입니다.
                </p>
                <p>
                  특히 <span className="font-bold text-cyan-400">Transfer Learning의 효율성</span>이 놀라웠습니다. 
                  전체를 처음부터 훈련하는 것 대신 <span className="font-bold text-cyan-400">기존 지식을 활용하여 
                  빠르고 경제적으로</span> 고품질의 전문 모델을 개발할 수 있어 
                  실무에서 매우 실용적인 접근법입니다.
                </p>
                <p>
                  토스와 같은 <span className="font-bold text-cyan-400">전문 도메인이 중요한 환경</span>에서는 
                  금융 용어, 상품 정보, 고객 대응 방식에 특화된 Fine-tuning이 
                  <span className="font-bold text-cyan-400">브랜드 일관성과 서비스 품질</span>을 보장하는 
                  필수적인 차별화 요소가 될 것입니다.
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
                <div className="bg-gradient-to-r from-blue-900/20 to-cyan-900/20 rounded-xl p-6 border border-blue-600/30 cursor-pointer hover:bg-gradient-to-r hover:from-blue-900/30 hover:to-cyan-900/30 transition-all duration-300" onClick={() => window.open('/boardgame-chatbot', '_blank')}>
                  <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2 hover:text-blue-300 transition-colors">
                    <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                    보드게임 룰 챗봇 'BOVI' →
                  </h3>
                  <div className="text-gray-300 space-y-3">
                    <p>
                      <span className="font-bold text-cyan-400">보드게임 룰 데이터로 LLM 미세조정</span>을 진행하여 
                      일반적인 대화형 AI를 <span className="font-bold text-cyan-400">보드게임 전문가 시스템</span>으로 
                      변환했습니다. 도메인 특화 학습으로 룰 설명의 정확도와 
                      전문성을 크게 향상시켰습니다.
                    </p>
                  </div>
                </div>
                
                <div className="bg-gradient-to-r from-green-900/20 to-teal-900/20 rounded-xl p-6 border border-green-600/30 cursor-pointer hover:bg-gradient-to-r hover:from-green-900/30 hover:to-teal-900/30 transition-all duration-300" onClick={() => window.open('/projects/2', '_blank')}>
                  <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2 hover:text-green-300 transition-colors">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    데이트 코스 추천 AI 시스템 →
                  </h3>
                  <div className="text-gray-300 space-y-3">
                    <p>
                      <span className="font-bold text-cyan-400">지역별 데이트 코스 데이터를 활용한 Fine-tuning</span>으로 
                      일반적인 추천 시스템을 <span className="font-bold text-cyan-400">개인화된 데이트 플래너</span>로 
                      특화시켰습니다. 사용자 선호도와 지역 특성을 반영한 
                      고품질 추천 서비스를 구현했습니다.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-800/50 rounded-lg p-4 mt-6">
                <div className="text-sm text-gray-400 mb-2">핵심 Fine-tuning 활용:</div>
                <div className="flex flex-wrap gap-2">
                  <Badge className="bg-cyan-700 text-cyan-100">Domain Adaptation</Badge>
                  <Badge className="bg-cyan-700 text-cyan-100">Transfer Learning</Badge>
                  <Badge className="bg-cyan-700 text-cyan-100">Model Optimization</Badge>
                  <Badge className="bg-cyan-700 text-cyan-100">Task-Specific Training</Badge>
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
                    <div>• <span className="font-bold">도메인 정확도 40%</span> 향상</div>
                    <div>• <span className="font-bold">전문성 90% 수준</span> 달성</div>
                    <div>• <span className="font-bold">응답 일관성</span> 크게 개선</div>
                  </div>
                </div>
                
                <div className="bg-gradient-to-r from-green-900/30 to-emerald-900/30 rounded-xl p-6 border border-green-600/30">
                  <h4 className="font-bold text-white mb-3 flex items-center gap-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    개발 효율성
                  </h4>
                  <div className="text-green-300 space-y-2">
                    <div>• <span className="font-bold">훈련 시간 70%</span> 단축</div>
                    <div>• <span className="font-bold">리소스 비용</span> 대폭 절약</div>
                    <div>• <span className="font-bold">빠른 프로토타이핑</span></div>
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
                    처음엔 <span className="font-bold text-cyan-400">단순히 데이터를 더 학습시키는 것</span>이라고 생각했지만, 
                    실제로는 <span className="font-bold text-blue-300">학습률, 배치 크기, 에포크 수</span> 등의 
                    하이퍼파라미터 조절이 성공의 핵심이라는 것을 깨달았습니다.
                  </p>
                  <p>
                    <span className="font-bold text-cyan-400">Catastrophic Forgetting 문제</span>를 경험하면서 
                    기존 지식을 유지하면서 새로운 지식을 학습하는 균형이 중요함을 알게 되었습니다. 
                    특히 <span className="font-bold text-blue-300">Gradient Accumulation과 Mixed Precision</span> 등의 
                    최적화 기법이 매우 유용했습니다.
                  </p>
                  <p>
                    지금은 <span className="font-bold text-cyan-400">LoRA, QLoRA 등의 효율적인 파인튜닝 기법, 
                    데이터셋 품질 관리, 평가 메트릭 설계</span> 등을 활용해서 
                    프로덕션 환경에서도 안정적이고 효과적인 도메인 특화 모델을 개발할 수 있게 되었습니다.
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
                <h4 className="font-bold text-white mb-4">도메인 특화로 경쟁 우위 확보</h4>
                <div className="text-gray-300 space-y-3">
                  <p>
                    Fine-tuning을 통한 <span className="font-bold text-cyan-400">도메인 정확도 40% 향상</span>으로 
                    일반적인 AI 서비스와 차별화된 <span className="font-bold text-blue-300">전문성과 정확성</span>을 확보하여 
                    사용자 만족도와 서비스 신뢰도를 크게 높였습니다.
                  </p>
                  <p>
                    <span className="font-bold text-blue-300">훈련 시간 70% 단축과 리소스 비용 절감</span>으로 
                    빠른 실험과 반복 개발이 가능해져 
                    <span className="font-bold text-cyan-400">시장 변화에 신속한 대응</span>과 
                    새로운 서비스 출시 속도를 크게 향상시켰습니다.
                  </p>
                  <p>
                    특히 토스와 같은 <span className="font-bold text-blue-300">전문성이 중요한 금융 서비스</span>에서는 
                    Fine-tuning이 <span className="font-bold text-cyan-400">금융 상품 설명, 투자 조언, 규제 준수 안내</span> 등에서 
                    정확하고 일관된 브랜드 경험을 제공하여 
                    <span className="font-bold text-cyan-400">고객 신뢰와 서비스 품질</span>을 동시에 보장하는 
                    핵심 차별화 요소가 될 것입니다.
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