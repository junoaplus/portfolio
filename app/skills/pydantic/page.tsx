'use client'
import { Navigation } from '@/components/navigation'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ArrowLeft, Lightbulb, Rocket, TrendingUp, Target, Award } from 'lucide-react'
import Link from 'next/link'

export default function PydanticSkillPage() {
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
            <div className="text-6xl mb-4">✅</div>
            <h1 className="text-4xl font-black text-white mb-4">
              Pydantic
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Python 데이터 검증과 설정 관리를 위한 타입 안전 라이브러리
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
                Pydantic에 대한 개인적 견해
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-lg text-gray-300 leading-relaxed space-y-4">
                <p>
                  <span className="font-bold text-cyan-400">Pydantic은 Python에 타입 안전성을 가져다주는 혁신</span>이라고 생각합니다. 
                  런타임에서의 데이터 검증과 직렬화를 자동화하면서 
                  <span className="font-bold text-cyan-400">개발자 경험을 크게 향상</span>시키는 핵심 라이브러리입니다.
                </p>
                <p>
                  특히 <span className="font-bold text-cyan-400">FastAPI와의 완벽한 통합</span>이 인상적이었습니다. 
                  모델 정의만으로 API 문서가 자동 생성되고, 
                  <span className="font-bold text-cyan-400">입력 검증과 직렬화가 자동</span>으로 처리되는 것이 놀라웠습니다.
                </p>
                <p>
                  데이트 코스 추천 AI 프로젝트에서 <span className="font-bold text-cyan-400">복잡한 API 스키마와 설정 관리</span>를 
                  Pydantic으로 구현하면서, 런타임 오류를 크게 줄이고 
                  <span className="font-bold text-cyan-400">코드의 안정성</span>을 확보할 수 있었습니다.
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
              <div className="bg-gradient-to-r from-green-900/20 to-teal-900/20 rounded-xl p-6 border border-green-600/30 cursor-pointer hover:bg-gradient-to-r hover:from-green-900/30 hover:to-teal-900/30 transition-all duration-300" onClick={() => window.open('/date-recommendation', '_blank')}>
                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2 hover:text-green-300 transition-colors">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  데이트 코스 추천 AI 시스템 →
                </h3>
                <div className="text-gray-300 space-y-3">
                  <p>
                    <span className="font-bold text-cyan-400">Pydantic 모델</span>을 활용하여 복잡한 API 요청/응답 스키마와 
                    89,321개 장소 데이터의 <span className="font-bold text-cyan-400">타입 안전성</span>을 보장했습니다.
                  </p>
                  <p>
                    <span className="font-bold text-cyan-400">자동 데이터 검증</span>으로 잘못된 입력을 사전에 차단하고, 
                    <span className="font-bold text-blue-300">API 문서 자동 생성</span>을 통해 
                    프론트엔드 팀과의 협업 효율성을 크게 향상시켰습니다.
                  </p>
                  <div className="bg-gray-800/50 rounded-lg p-4 mt-4">
                    <div className="text-sm text-gray-400 mb-2">핵심 Pydantic 기술들:</div>
                    <div className="flex flex-wrap gap-2">
                      <Badge className="bg-cyan-700 text-cyan-100">Data Validation</Badge>
                      <Badge className="bg-cyan-700 text-cyan-100">Type Safety</Badge>
                      <Badge className="bg-cyan-700 text-cyan-100">Schema Generation</Badge>
                      <Badge className="bg-cyan-700 text-cyan-100">Configuration Management</Badge>
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
                    코드 안정성
                  </h4>
                  <div className="text-cyan-300 space-y-2">
                    <div>• <span className="font-bold">런타임 오류 90% 감소</span></div>
                    <div>• <span className="font-bold">타입 안전성 99%</span> 보장</div>
                    <div>• <span className="font-bold">API 스키마 100% 자동화</span></div>
                  </div>
                </div>
                
                <div className="bg-gradient-to-r from-green-900/30 to-emerald-900/30 rounded-xl p-6 border border-green-600/30">
                  <h4 className="font-bold text-white mb-3 flex items-center gap-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    개발 효율성
                  </h4>
                  <div className="text-green-300 space-y-2">
                    <div>• <span className="font-bold">API 문서 자동 생성</span></div>
                    <div>• <span className="font-bold">데이터 검증 80%</span> 자동화</div>
                    <div>• <span className="font-bold">개발 생산성 60%</span> 향상</div>
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
                    처음엔 <span className="font-bold text-cyan-400">수동 데이터 검증에 익숙한 상태</span>에서 Pydantic의 
                    자동 검증이 복잡해 보였습니다. 매번 if문으로 체크하는 것이 
                    <span className="font-bold text-blue-300">더 직관적</span>이라고 생각했죠.
                  </p>
                  <p>
                    하지만 <span className="font-bold text-cyan-400">복잡한 API 스키마를 다루면서</span> 
                    Pydantic의 강력함을 체감했습니다. 
                    특히 <span className="font-bold text-blue-300">중첩된 모델과 복잡한 검증 규칙</span>에서 
                    수동 검증의 한계를 확실히 느꼈습니다.
                  </p>
                  <p>
                    지금은 <span className="font-bold text-cyan-400">커스텀 밸리데이터, 시리얼라이저, 설정 관리</span> 등을 
                    활용해서 엔터프라이즈급 API도 안전하고 효율적으로 구축할 수 있게 되었습니다.
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
                <h4 className="font-bold text-white mb-4">타입 안전성으로 서비스 품질과 개발 생산성 동시 확보</h4>
                <div className="text-gray-300 space-y-3">
                  <p>
                    Pydantic의 <span className="font-bold text-cyan-400">자동 데이터 검증과 타입 안전성</span>을 통해 
                    런타임 오류를 90% 감소시키고 서비스 안정성을 크게 향상시켰습니다. 이는 단순한 오류 방지를 넘어선 <span className="font-bold text-cyan-400">사용자 신뢰성</span>의 확보입니다.
                  </p>
                  <p>
                    <span className="font-bold text-blue-300">API 문서 자동 생성</span>과 스키마 기반 개발을 통해 
                    팀 간 협업 효율성이 향상되고, <span className="font-bold text-cyan-400">개발 속도</span>가 크게 빨라졌습니다.
                  </p>
                  <p>
                    특히 토스와 같은 <span className="font-bold text-blue-300">대규모 API 서비스</span>에서는 
                    이런 타입 안전성과 자동 검증이 <span className="font-bold text-cyan-400">서비스 품질과 개발 생산성</span>을 
                    동시에 보장하는 핵심 기술이 될 것이라고 확신합니다.
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