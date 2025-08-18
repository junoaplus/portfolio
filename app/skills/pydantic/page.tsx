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
          </div>

          {/* 내가 이해한 Pydantic */}
          <Card className="bg-gray-800/80 backdrop-blur-sm border border-gray-600/50 shadow-2xl mb-12">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-white flex items-center gap-3">
                <Lightbulb className="w-6 h-6 text-yellow-500" />
                내가 이해한 Pydantic
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-lg text-gray-300 leading-relaxed space-y-4">
                <p>
                  <span className="font-bold text-cyan-400">Pydantic은 Python에 타입 안전성을 가져다주는 혁신입니다.</span> 
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
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Pydantic으로 해결할 수 있는 문제들 */}
          <Card className="bg-gray-800/80 backdrop-blur-sm border border-gray-600/50 shadow-2xl mb-12">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-white flex items-center gap-3">
                <Award className="w-6 h-6 text-blue-500" />
                Pydantic으로 해결할 수 있는 문제들
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-1 gap-6">
                {/* 수동 데이터 검증 번거로움 */}
                <div className="bg-gradient-to-r from-blue-900/20 to-cyan-900/20 rounded-xl p-6 border border-blue-600/30">
                  <h4 className="font-bold text-white mb-3 flex items-center gap-2">
                    <div className="text-2xl">🔍</div>
                    수동 데이터 검증 번거로움
                  </h4>
                  <div className="text-gray-300 space-y-2">
                    <div>• <span className="font-bold text-cyan-400">기존:</span> if문으로 일일이 데이터 타입과 값 검증해야 함</div>
                    <div>• <span className="font-bold text-cyan-400">해결:</span> 모델 정의만으로 자동 검증과 타입 안전성 보장</div>
                  </div>
                </div>
                
                {/* API 문서화 자동화 */}
                <div className="bg-gradient-to-r from-green-900/20 to-emerald-900/20 rounded-xl p-6 border border-green-600/30">
                  <h4 className="font-bold text-white mb-3 flex items-center gap-2">
                    <div className="text-2xl">📚</div>
                    API 문서화 자동화 문제
                  </h4>
                  <div className="text-gray-300 space-y-2">
                    <div>• <span className="font-bold text-green-400">기존:</span> API 스키마와 문서를 수동으로 작성하고 동기화</div>
                    <div>• <span className="font-bold text-green-400">해결:</span> FastAPI와 연동해서 Swagger 문서 자동 생성</div>
                  </div>
                </div>

                {/* 런타임 오류 위험성 */}
                <div className="bg-gradient-to-r from-purple-900/20 to-pink-900/20 rounded-xl p-6 border border-purple-600/30">
                  <h4 className="font-bold text-white mb-3 flex items-center gap-2">
                    <div className="text-2xl">💥</div>
                    런타임 오류 위험성
                  </h4>
                  <div className="text-gray-300 space-y-2">
                    <div>• <span className="font-bold text-purple-400">기존:</span> 잘못된 데이터 타입으로 런타임에서 예기치 못한 오류</div>
                    <div>• <span className="font-bold text-purple-400">해결:</span> 요청 시점에 데이터 검증으로 런타임 오류 90% 감소</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

        </div>
      </div>
    </div>
  )
}