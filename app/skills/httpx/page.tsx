'use client'
import { Navigation } from '@/components/navigation'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ArrowLeft, Lightbulb, Rocket, TrendingUp, Target, Award } from 'lucide-react'
import Link from 'next/link'

export default function HTTPXSkillPage() {
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
            <div className="text-6xl mb-4">🌐</div>
            <h1 className="text-4xl font-black text-white mb-4">
              HTTPX
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              차세대 Python HTTP 클라이언트로 동기/비동기 완벽 지원
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
                HTTPX에 대한 개인적 견해
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-lg text-gray-300 leading-relaxed space-y-4">
                <p>
                  <span className="font-bold text-cyan-400">HTTPX는 requests의 완벽한 진화형</span>이라고 생각합니다. 
                  친숙한 API를 유지하면서도 HTTP/2, 비동기 처리, 스트리밍까지 지원하여 
                  <span className="font-bold text-cyan-400">현대적 웹 통신의 모든 요구사항</span>을 충족합니다.
                </p>
                <p>
                  특히 <span className="font-bold text-cyan-400">동기와 비동기 API의 일관성</span>이 인상적이었습니다. 
                  같은 코드 패턴으로 동기/비동기 모두 지원하여 
                  <span className="font-bold text-cyan-400">학습 곡선을 최소화</span>하면서도 강력한 기능을 제공합니다.
                </p>
                <p>
                  데이트 코스 추천 AI 프로젝트에서 <span className="font-bold text-cyan-400">외부 API 통합과 마이크로서비스 간 통신</span>을 
                  HTTPX로 구현하면서, 복잡한 비동기 HTTP 처리도 
                  <span className="font-bold text-cyan-400">직관적이고 안정적</span>으로 처리할 수 있었습니다.
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
                    <span className="font-bold text-cyan-400">HTTPX 비동기 클라이언트</span>로 카카오맵 API, OpenAI API 등 
                    외부 서비스와의 <span className="font-bold text-cyan-400">고성능 통합</span>을 구현했습니다.
                  </p>
                  <p>
                    <span className="font-bold text-cyan-400">Connection Pooling과 Keep-Alive</span> 최적화로 
                    89,321개 장소 데이터 수집과 AI 추론 요청을 <span className="font-bold text-blue-300">30% 빠른 속도</span>로 처리하고, 
                    마이크로서비스 간 안정적인 통신을 구축했습니다.
                  </p>
                  <div className="bg-gray-800/50 rounded-lg p-4 mt-4">
                    <div className="text-sm text-gray-400 mb-2">핵심 HTTPX 기술들:</div>
                    <div className="flex flex-wrap gap-2">
                      <Badge className="bg-cyan-700 text-cyan-100">Async HTTP Client</Badge>
                      <Badge className="bg-cyan-700 text-cyan-100">Connection Pooling</Badge>
                      <Badge className="bg-cyan-700 text-cyan-100">HTTP/2 Support</Badge>
                      <Badge className="bg-cyan-700 text-cyan-100">Streaming</Badge>
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
                    통신 성능
                  </h4>
                  <div className="text-cyan-300 space-y-2">
                    <div>• <span className="font-bold">API 호출 속도 30% 향상</span></div>
                    <div>• <span className="font-bold">Connection Pool</span> 최적화</div>
                    <div>• <span className="font-bold">HTTP/2 지원</span>으로 성능 개선</div>
                  </div>
                </div>
                
                <div className="bg-gradient-to-r from-green-900/30 to-emerald-900/30 rounded-xl p-6 border border-green-600/30">
                  <h4 className="font-bold text-white mb-3 flex items-center gap-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    개발 효율성
                  </h4>
                  <div className="text-green-300 space-y-2">
                    <div>• <span className="font-bold">동기/비동기 API 통일</span></div>
                    <div>• <span className="font-bold">에러 핸들링 95%</span> 개선</div>
                    <div>• <span className="font-bold">코드 재사용성 80%</span> 향상</div>
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
                    처음엔 <span className="font-bold text-cyan-400">requests 라이브러리에 익숙한 상태</span>에서 굳이 
                    새로운 HTTP 클라이언트가 필요할까 의문이었습니다. 기존 requests로도 
                    <span className="font-bold text-blue-300">충분히 잘 동작</span>한다고 생각했죠.
                  </p>
                  <p>
                    하지만 <span className="font-bold text-cyan-400">대용량 API 통합 프로젝트를 진행하면서</span> 
                    비동기 처리의 필요성을 절감했습니다. 
                    특히 <span className="font-bold text-blue-300">여러 외부 API를 동시에 호출</span>할 때 
                    HTTPX의 성능 차이를 확실히 체감할 수 있었습니다.
                  </p>
                  <p>
                    지금은 <span className="font-bold text-cyan-400">HTTP/2 지원, 스트리밍, 고급 인증</span> 등을 
                    활용해서 복잡한 API 통합도 효율적으로 구현할 수 있게 되었습니다.
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
                <h4 className="font-bold text-white mb-4">현대적 HTTP 통신으로 서비스 통합과 성능 최적화</h4>
                <div className="text-gray-300 space-y-3">
                  <p>
                    HTTPX의 <span className="font-bold text-cyan-400">고성능 비동기 HTTP 처리</span>를 통해 
                    다양한 외부 서비스와의 통합을 빠르고 안정적으로 구현할 수 있었습니다. 이는 단순한 API 호출을 넘어선 <span className="font-bold text-cyan-400">서비스 생태계</span>의 구축입니다.
                  </p>
                  <p>
                    <span className="font-bold text-blue-300">Connection Pooling과 HTTP/2 지원</span>으로 
                    네트워크 자원을 효율적으로 사용하여, <span className="font-bold text-cyan-400">인프라 비용 절감</span>과 사용자 경험 개선을 동시에 달성했습니다.
                  </p>
                  <p>
                    특히 토스와 같은 <span className="font-bold text-blue-300">API 중심 서비스</span>에서는 
                    이런 고성능 HTTP 클라이언트가 <span className="font-bold text-cyan-400">서비스 안정성과 확장성</span>의 
                    핵심 기술이 될 것이라고 확신합니다.
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