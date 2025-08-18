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
          </div>

          {/* 내가 이해한 Uvicorn */}
          <Card className="bg-gray-800/80 backdrop-blur-sm border border-gray-600/50 shadow-2xl mb-12">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-white flex items-center gap-3">
                <Lightbulb className="w-6 h-6 text-yellow-500" />
                내가 이해한 Uvicorn
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-lg text-gray-300 leading-relaxed space-y-4">
                <p>
                  <span className="font-bold text-cyan-400">Uvicorn은 Python 웹 성능의 새로운 기준입니다.</span> 
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
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Uvicorn으로 해결할 수 있는 문제들 */}
          <Card className="bg-gray-800/80 backdrop-blur-sm border border-gray-600/50 shadow-2xl mb-12">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-white flex items-center gap-3">
                <Award className="w-6 h-6 text-blue-500" />
                Uvicorn으로 해결할 수 있는 문제들
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-1 gap-6">
                {/* WSGI 서버 성능 한계 */}
                <div className="bg-gradient-to-r from-blue-900/20 to-cyan-900/20 rounded-xl p-6 border border-blue-600/30">
                  <h4 className="font-bold text-white mb-3 flex items-center gap-2">
                    <div className="text-2xl">🐌</div>
                    WSGI 서버 성능 한계
                  </h4>
                  <div className="text-gray-300 space-y-2">
                    <div>• <span className="font-bold text-cyan-400">기존:</span> Django 동기 서버로 동시 요청 처리 성능 부족</div>
                    <div>• <span className="font-bold text-cyan-400">해결:</span> ASGI 비동기 처리로 동시 접속자 1000명+ 지원</div>
                  </div>
                </div>
                
                {/* 서버 자원 비효율 */}
                <div className="bg-gradient-to-r from-green-900/20 to-emerald-900/20 rounded-xl p-6 border border-green-600/30">
                  <h4 className="font-bold text-white mb-3 flex items-center gap-2">
                    <div className="text-2xl">💰</div>
                    서버 자원 비효율 문제
                  </h4>
                  <div className="text-gray-300 space-y-2">
                    <div>• <span className="font-bold text-green-400">기존:</span> 많은 서버 자원으로도 제한된 동시성 처리</div>
                    <div>• <span className="font-bold text-green-400">해결:</span> 적은 자원으로 고성능 처리해서 인프라 비용 절감</div>
                  </div>
                </div>

                {/* API 응답 속도 문제 */}
                <div className="bg-gradient-to-r from-purple-900/20 to-pink-900/20 rounded-xl p-6 border border-purple-600/30">
                  <h4 className="font-bold text-white mb-3 flex items-center gap-2">
                    <div className="text-2xl">⚡</div>
                    API 응답 속도 문제
                  </h4>
                  <div className="text-gray-300 space-y-2">
                    <div>• <span className="font-bold text-purple-400">기존:</span> 동기 처리로 요청 대기 시간이 길어짐</div>
                    <div>• <span className="font-bold text-purple-400">해결:</span> 비동기 처리로 평균 응답시간 50ms 이내 달성</div>
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