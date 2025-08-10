'use client'
import { Navigation } from '@/components/navigation'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ArrowLeft, Lightbulb, Rocket, TrendingUp, Target, Award } from 'lucide-react'
import Link from 'next/link'

export default function FastAPISkillPage() {
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
              FastAPI
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              고성능 Python 웹 프레임워크로 현대적인 API 개발
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
                FastAPI에 대한 개인적 견해
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-lg text-gray-300 leading-relaxed space-y-4">
                <p>
                  <span className="font-bold text-cyan-400">FastAPI는 Python 웹 프레임워크의 새로운 패러다임</span>이라고 생각합니다. 
                  Django의 완성도와 Flask의 유연성을 결합하면서도 
                  <span className="font-bold text-cyan-400">타입 힌트 기반의 현대적 개발 경험</span>을 제공합니다.
                </p>
                <p>
                  특히 <span className="font-bold text-cyan-400">자동 API 문서화와 타입 검증</span>이 인상적이었습니다. 
                  코드만 작성하면 Swagger UI와 ReDoc이 자동 생성되고, 
                  <span className="font-bold text-cyan-400">런타임 타입 검증</span>까지 제공하는 것이 혁신적입니다.
                </p>
                <p>
                  데이트 코스 추천 AI 프로젝트에서 <span className="font-bold text-cyan-400">3개 마이크로서비스의 백엔드 API</span>를 
                  FastAPI로 구축하면서, 비동기 처리와 데이터베이스 연동의 매끄러움을 경험했습니다. 
                  <span className="font-bold text-cyan-400">개발 속도와 성능을 모두 잡는</span> 완벽한 도구입니다.
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
              <div className="space-y-4">
                <div className="bg-gradient-to-r from-green-900/20 to-teal-900/20 rounded-xl p-6 border border-green-600/30 cursor-pointer hover:bg-gradient-to-r hover:from-green-900/30 hover:to-teal-900/30 transition-all duration-300" onClick={() => window.open('/date-recommendation', '_blank')}>
                  <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2 hover:text-green-300 transition-colors">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    데이트 코스 추천 AI 시스템 →
                  </h3>
                  <div className="text-gray-300 space-y-3">
                    <p>
                      <span className="font-bold text-cyan-400">FastAPI로 3개 마이크로서비스</span>를 구축하여 
                      메인 서비스, 플레이스 관리, AI 추천 엔진을 독립적으로 운영하는 
                      <span className="font-bold text-cyan-400">확장 가능한 아키텍처</span>를 구현했습니다.
                    </p>
                    <p>
                      <span className="font-bold text-cyan-400">비동기 처리와 SQLAlchemy ORM</span>을 활용하여 
                      <span className="font-bold text-blue-300">평균 300ms 응답시간</span>을 달성하면서도 
                      복잡한 데이터 처리와 AI 모델 연동을 안정적으로 구현했습니다.
                    </p>
                    <div className="bg-gray-800/50 rounded-lg p-4 mt-4">
                      <div className="text-sm text-gray-400 mb-2">핵심 FastAPI 기술들:</div>
                      <div className="flex flex-wrap gap-2">
                        <Badge className="bg-cyan-700 text-cyan-100">Async/Await</Badge>
                        <Badge className="bg-cyan-700 text-cyan-100">Pydantic Models</Badge>
                        <Badge className="bg-cyan-700 text-cyan-100">Auto Documentation</Badge>
                        <Badge className="bg-cyan-700 text-cyan-100">Microservices</Badge>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-orange-900/20 to-red-900/20 rounded-xl p-6 border border-orange-600/30 cursor-pointer hover:bg-gradient-to-r hover:from-orange-900/30 hover:to-red-900/30 transition-all duration-300" onClick={() => window.open('/boardgame-chatbot', '_blank')}>
                  <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2 hover:text-orange-300 transition-colors">
                    <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                    보드게임 룰 챗봇 →
                  </h3>
                  <div className="text-gray-300 space-y-3">
                    <p>
                      <span className="font-bold text-cyan-400">FastAPI와 Django 하이브리드</span> 구조로 
                      AI 추론 서비스는 FastAPI로, 웹 서비스는 Django로 분리하여 
                      각 영역의 최적화를 달성했습니다.
                    </p>
                    <div className="bg-gray-800/50 rounded-lg p-4 mt-4">
                      <div className="text-sm text-gray-400 mb-2">사용 기술:</div>
                      <div className="flex flex-wrap gap-2">
                        <Badge className="bg-orange-700 text-orange-100">AI API Server</Badge>
                        <Badge className="bg-orange-700 text-orange-100">Model Integration</Badge>
                        <Badge className="bg-orange-700 text-orange-100">High Performance</Badge>
                      </div>
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
                    API 성능
                  </h4>
                  <div className="text-cyan-300 space-y-2">
                    <div>• <span className="font-bold">평균 응답시간 300ms</span> 달성</div>
                    <div>• <span className="font-bold">동시 처리 1000+ RPS</span></div>
                    <div>• <span className="font-bold">에러율 0.1% 이하</span> 유지</div>
                  </div>
                </div>
                
                <div className="bg-gradient-to-r from-green-900/30 to-emerald-900/30 rounded-xl p-6 border border-green-600/30">
                  <h4 className="font-bold text-white mb-3 flex items-center gap-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    개발 효율성
                  </h4>
                  <div className="text-green-300 space-y-2">
                    <div>• <span className="font-bold">API 개발 시간 60% 단축</span></div>
                    <div>• <span className="font-bold">자동 문서화 100%</span></div>
                    <div>• <span className="font-bold">타입 안전성 95%</span> 보장</div>
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
                    처음엔 <span className="font-bold text-cyan-400">Django에 익숙한 상태</span>에서 FastAPI의 
                    타입 힌트 중심 개발이 낯설었습니다. 왜 모든 것을 타입으로 정의해야 하는지 
                    <span className="font-bold text-blue-300">불편함</span>을 느꼈죠.
                  </p>
                  <p>
                    하지만 <span className="font-bold text-cyan-400">복잡한 AI API 서비스를 구축하면서</span> 
                    자동 검증과 문서화의 강력함을 체감했습니다. 
                    특히 <span className="font-bold text-blue-300">프론트엔드 팀과의 협업</span>에서 
                    API 스펙 변경 시 자동으로 반영되는 문서가 큰 도움이 되었습니다.
                  </p>
                  <p>
                    지금은 <span className="font-bold text-cyan-400">의존성 주입, 미들웨어, 백그라운드 작업</span> 등을 
                    활용해서 확장성과 유지보수성을 모두 갖춘 마이크로서비스를 구축할 수 있게 되었습니다.
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
                <h4 className="font-bold text-white mb-4">고성능 마이크로서비스로 확장 가능한 아키텍처 구축</h4>
                <div className="text-gray-300 space-y-3">
                  <p>
                    FastAPI를 통해 <span className="font-bold text-cyan-400">3개 독립 마이크로서비스</span>를 구축하여 
                    각 서비스의 독립적인 확장과 배포가 가능한 시스템을 완성했습니다. 이는 단순한 기술 구현을 넘어선 <span className="font-bold text-cyan-400">비즈니스 민첩성</span>의 확보입니다.
                  </p>
                  <p>
                    <span className="font-bold text-blue-300">자동 API 문서화와 타입 안전성</span>을 통해 
                    개발팀 간의 협업 효율성이 크게 향상되었고, <span className="font-bold text-cyan-400">개발 및 유지보수 비용</span>을 현저히 절감했습니다.
                  </p>
                  <p>
                    특히 토스와 같은 <span className="font-bold text-blue-300">대규모 API 서비스</span>에서는 
                    이런 FastAPI의 성능과 개발 효율성이 <span className="font-bold text-cyan-400">빠른 기능 출시와 안정적 서비스 운영</span>의 
                    핵심 역량이 될 것이라고 확신합니다.
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