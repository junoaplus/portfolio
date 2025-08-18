'use client'
import { Navigation } from '@/components/navigation'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ArrowLeft, Lightbulb, Rocket, TrendingUp, Target, Award } from 'lucide-react'
import Link from 'next/link'

export default function FakerSkillPage() {
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
            <div className="text-6xl mb-4">🎭</div>
            <h1 className="text-4xl font-black text-white mb-4">
              Faker
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Python library for generating realistic fake data for testing and development
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
                Faker에 대한 개인적 견해
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-lg text-gray-300 leading-relaxed space-y-4">
                <p>
                  <span className="font-bold text-cyan-400">Faker는 데이터 과학자의 든든한 조력자</span>라고 생각합니다. 
                  실제 데이터가 없거나 민감한 정보를 다룰 때 
                  <span className="font-bold text-cyan-400">현실적인 가짜 데이터</span>를 생성해주는 마법 같은 라이브러리입니다.
                </p>
                <p>
                  특히 <span className="font-bold text-cyan-400">다양한 locale 지원</span>이 인상적이었습니다. 
                  한국어 이름, 주소, 전화번호까지 생성할 수 있어 
                  <span className="font-bold text-cyan-400">현지화된 테스트 데이터</span> 구축이 가능합니다.
                </p>
                <p>
                  신문 이탈 예측 프로젝트에서 <span className="font-bold text-cyan-400">Faker로 합성 고객 데이터를 생성</span>하여 
                  모델 테스트와 데이터 증강을 수행하면서, 
                  <span className="font-bold text-cyan-400">안전하고 효과적인 개발 환경</span>을 구축할 수 있었습니다.
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
                    <span className="font-bold text-cyan-400">Faker 라이브러리</span>로 현실적인 고객 정보를 생성하여 
                    민감한 실제 데이터 없이도 <span className="font-bold text-cyan-400">안전한 모델 개발 환경</span>을 구축했습니다.
                  </p>
                  <p>
                    <span className="font-bold text-cyan-400">다양한 고객 패턴의 합성 데이터</span>를 생성하여 
                    데이터 부족 문제를 해결하고 <span className="font-bold text-blue-300">모델의 강건성</span>을 
                    크게 향상시켰습니다.
                  </p>
                  <div className="bg-gray-800/50 rounded-lg p-4 mt-4">
                    <div className="text-sm text-gray-400 mb-2">핵심 Faker 기술들:</div>
                    <div className="flex flex-wrap gap-2">
                      <Badge className="bg-cyan-700 text-cyan-100">Synthetic Data</Badge>
                      <Badge className="bg-cyan-700 text-cyan-100">Localization</Badge>
                      <Badge className="bg-cyan-700 text-cyan-100">Data Augmentation</Badge>
                      <Badge className="bg-cyan-700 text-cyan-100">Privacy Protection</Badge>
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
                    개발 효율성
                  </h4>
                  <div className="text-cyan-300 space-y-2">
                    <div>• <span className="font-bold">테스트 데이터 생성</span> 자동화</div>
                    <div>• <span className="font-bold">개발 속도 60%</span> 향상</div>
                    <div>• <span className="font-bold">데이터 의존성</span> 제거</div>
                  </div>
                </div>
                
                <div className="bg-gradient-to-r from-green-900/30 to-emerald-900/30 rounded-xl p-6 border border-green-600/30">
                  <h4 className="font-bold text-white mb-3 flex items-center gap-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    데이터 품질
                  </h4>
                  <div className="text-green-300 space-y-2">
                    <div>• <span className="font-bold">현실적 패턴</span> 완벽 구현</div>
                    <div>• <span className="font-bold">개인정보 보호 100%</span></div>
                    <div>• <span className="font-bold">다양성 확보</span> 극대화</div>
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
                    처음엔 <span className="font-bold text-cyan-400">하드코딩된 더미 데이터</span>를 만들었습니다. 
                    "홍길동, 김철수, 박영희" 같은 뻔한 이름들로 
                    <span className="font-bold text-blue-300">성의 없는 테스트</span>를 했죠.
                  </p>
                  <p>
                    하지만 <span className="font-bold text-cyan-400">실제 데이터의 복잡성을 테스트해야 할 때</span> 
                    한계를 느꼈습니다. 
                    특히 <span className="font-bold text-blue-300">개인정보 보호 이슈</span>가 있는 프로젝트에서 
                    Faker의 필요성을 절실히 깨달았습니다.
                  </p>
                  <p>
                    지금은 <span className="font-bold text-cyan-400">커스텀 프로바이더, 시드 설정, 관계형 데이터</span> 생성까지 
                    Faker를 활용해서 완전한 가상 데이터셋을 구축할 수 있게 되었습니다.
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
                <h4 className="font-bold text-white mb-4">안전한 개발 환경으로 개인정보 보호와 개발 효율성 동시 확보</h4>
                <div className="text-gray-300 space-y-3">
                  <p>
                    Faker를 통한 <span className="font-bold text-cyan-400">현실적인 가짜 데이터 생성</span>으로 
                    민감한 개인정보를 노출하지 않으면서도 효과적인 개발과 테스트를 수행할 수 있었습니다. 이는 단순한 도구 활용을 넘어선 <span className="font-bold text-cyan-400">컴플라이언스</span>의 확보입니다.
                  </p>
                  <p>
                    <span className="font-bold text-blue-300">신속한 프로토타이핑과 테스트</span>를 통해 
                    실제 데이터 확보를 기다리지 않고도 개발을 진행할 수 있게 되어, <span className="font-bold text-cyan-400">프로젝트 일정</span>을 크게 단축시켰습니다.
                  </p>
                  <p>
                    특히 토스와 같은 <span className="font-bold text-blue-300">개인정보 집약적 서비스</span>에서는 
                    이런 안전한 개발 환경 구축 기술이 <span className="font-bold text-cyan-400">데이터 보안과 개발 생산성</span>을 
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