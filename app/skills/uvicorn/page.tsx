'use client'
import { Navigation } from '@/components/navigation'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ArrowLeft, Lightbulb, Rocket, TrendingUp, Target, Award } from 'lucide-react'
import Link from 'next/link'

export default function UvicornSkillPage() {
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
            <div className="text-6xl mb-4">🦄</div>
            <h1 className="text-4xl font-black text-white mb-4">
              Uvicorn
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              초고속 ASGI 서버로 Python 웹 애플리케이션의 성능 극대화
            </p>
            <Badge style={{ background: 'rgb(37 99 235)' }} className="text-white text-lg px-6 py-2">
              Proficiency Level: 70%
            </Badge>
          </div>

          {/* 개인적 견해 */}
          <Card className="bg-gray-800/80 backdrop-blur-sm border border-gray-600/50 shadow-2xl mb-12">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-white flex items-center gap-3">
                <Lightbulb className="w-6 h-6 text-yellow-500" />
                Uvicorn에 대한 개인적 견해
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-lg text-gray-300 leading-relaxed space-y-4">
                <p>
                  <span className="font-bold text-cyan-400">Uvicorn은 Python 웹 성능의 새로운 기준</span>이라고 생각합니다. 
                  기존 WSGI 서버의 한계를 뛰어넘어 
                  <span className="font-bold text-cyan-400">비동기 처리의 진정한 잠재력</span>을 발휘할 수 있게 해주는 혁신적인 서버입니다.
                </p>
                <p>
                  특히 <span className="font-bold text-cyan-400">uvloop과의 통합</span>이 인상적이었습니다. 
                  C 수준의 성능을 Python에서 구현하면서도 
                  <span className="font-bold text-cyan-400">개발자 친화적인 인터페이스</span>를 제공하는 것이 놀라웠습니다.
                </p>
                <p>
                  데이트 코스 추천 AI 프로젝트에서 <span className="font-bold text-cyan-400">FastAPI와 Uvicorn의 완벽한 조합</span>을 경험하며, 
                  대용량 동시 요청 처리와 실시간 API 응답에서 
                  <span className="font-bold text-cyan-400">기존 서버 대비 3배 이상의 성능</span>을 확인할 수 있었습니다.
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
                <div className="bg-gradient-to-r from-green-900/20 to-teal-900/20 rounded-xl p-6 border border-green-600/30 cursor-pointer hover:bg-gradient-to-r hover:from-green-900/30 hover:to-teal-900/30 transition-all duration-300" onClick={() => window.open('/date-recommendation', '_blank')}>
                  <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2 hover:text-green-300 transition-colors">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    데이트 코스 추천 AI 시스템 →
                  </h3>
                  <div className="text-gray-300 space-y-3">
                    <p>
                      <span className="font-bold text-cyan-400">Uvicorn ASGI 서버</span>로 FastAPI 애플리케이션을 고성능으로 실행하여 
                      89,321개 장소 데이터의 <span className="font-bold text-cyan-400">실시간 검색과 추천</span>을 처리했습니다.
                    </p>
                    <p>
                      <span className="font-bold text-cyan-400">비동기 요청 처리</span>로 동시 접속자 1000명 이상을 안정적으로 지원하고, 
                      <span className="font-bold text-blue-300">평균 응답시간 50ms 이내</span>의 초고속 API 서비스를 구현했습니다.
                    </p>
                    <div className="bg-gray-800/50 rounded-lg p-4 mt-4">
                      <div className="text-sm text-gray-400 mb-2">핵심 Uvicorn 기술들:</div>
                      <div className="flex flex-wrap gap-2">
                        <Badge className="bg-cyan-700 text-cyan-100">ASGI Server</Badge>
                        <Badge className="bg-cyan-700 text-cyan-100">Async Processing</Badge>
                        <Badge className="bg-cyan-700 text-cyan-100">High Concurrency</Badge>
                        <Badge className="bg-cyan-700 text-cyan-100">uvloop Integration</Badge>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gradient-to-r from-orange-900/20 to-red-900/20 rounded-xl p-6 border border-orange-600/30 cursor-pointer hover:bg-gradient-to-r hover:from-orange-900/30 hover:to-red-900/30 transition-all duration-300" onClick={() => window.open('/boardgame-chatbot', '_blank')}>
                  <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2 hover:text-orange-300 transition-colors">
                    <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                    보드게임 룰 챗봇 시스템 →
                  </h3>
                  <div className="text-gray-300 space-y-3">
                    <p>
                      <span className="font-bold text-cyan-400">Uvicorn으로 FastAPI 기반 AI 추론 서버</span>를 운영하여 
                      217개 게임의 복잡한 룰 질의응답을 <span className="font-bold text-cyan-400">실시간 처리</span>했습니다.
                    </p>
                    <p>
                      <span className="font-bold text-cyan-400">비동기 AI 모델 추론</span>과 데이터베이스 연동을 통해 
                      <span className="font-bold text-blue-300">다중 사용자 동시 채팅</span>을 안정적으로 지원했습니다.
                    </p>
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
                    서버 성능
                  </h4>
                  <div className="text-cyan-300 space-y-2">
                    <div>• <span className="font-bold">동시 접속 1000명+</span> 지원</div>
                    <div>• <span className="font-bold">응답시간 50ms</span> 이내</div>
                    <div>• <span className="font-bold">처리량 3배</span> 향상</div>
                  </div>
                </div>
                
                <div className="bg-gradient-to-r from-green-900/30 to-emerald-900/30 rounded-xl p-6 border border-green-600/30">
                  <h4 className="font-bold text-white mb-3 flex items-center gap-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    자원 효율성
                  </h4>
                  <div className="text-green-300 space-y-2">
                    <div>• <span className="font-bold">메모리 사용량 60% 최적화</span></div>
                    <div>• <span className="font-bold">CPU 효율성 80%</span> 향상</div>
                    <div>• <span className="font-bold">서버 안정성 99.9%</span></div>
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
                    처음엔 <span className="font-bold text-cyan-400">기존 Django의 동기 서버에 익숙한 상태</span>에서 ASGI와 
                    비동기 처리가 복잡해 보였습니다. 왜 굳이 복잡하게 
                    <span className="font-bold text-blue-300">비동기를 써야 하는지</span> 의문이었죠.
                  </p>
                  <p>
                    하지만 <span className="font-bold text-cyan-400">대용량 트래픽을 처리하면서</span> 
                    Uvicorn의 성능을 직접 체험했습니다. 
                    특히 <span className="font-bold text-blue-300">동시 요청 처리 성능</span>에서 
                    기존 서버와의 차이를 확실히 느꼈습니다.
                  </p>
                  <p>
                    지금은 <span className="font-bold text-cyan-400">워커 프로세스 관리, 로그 설정, SSL 지원</span> 등을 
                    활용해서 프로덕션 환경의 고성능 서버도 안정적으로 운영할 수 있게 되었습니다.
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
                <h4 className="font-bold text-white mb-4">초고속 서버 성능으로 사용자 경험과 운영 비용 동시 최적화</h4>
                <div className="text-gray-300 space-y-3">
                  <p>
                    Uvicorn의 <span className="font-bold text-cyan-400">초고속 비동기 처리</span>를 통해 
                    사용자에게 즉시 응답하는 서비스를 제공하여 사용자 만족도를 크게 향상시켰습니다. 이는 단순한 기술적 개선을 넘어선 <span className="font-bold text-cyan-400">비즈니스 경쟁력</span>의 확보입니다.
                  </p>
                  <p>
                    <span className="font-bold text-blue-300">높은 동시성 처리</span>로 적은 서버 자원으로도 
                    많은 사용자를 지원할 수 있게 되어, <span className="font-bold text-cyan-400">인프라 비용</span>을 크게 절감했습니다.
                  </p>
                  <p>
                    특히 토스와 같은 <span className="font-bold text-blue-300">실시간 서비스</span>에서는 
                    이런 고성능 서버 기술이 <span className="font-bold text-cyan-400">사용자 경험과 시스템 안정성</span>을 
                    동시에 보장하는 핵심 인프라가 될 것이라고 확신합니다.
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