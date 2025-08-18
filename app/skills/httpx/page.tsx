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
          </div>

          {/* 내가 이해한 HTTPX */}
          <Card className="bg-gray-800/80 backdrop-blur-sm border border-gray-600/50 shadow-2xl mb-12">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-white flex items-center gap-3">
                <Lightbulb className="w-6 h-6 text-yellow-500" />
                내가 이해한 HTTPX
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-lg text-gray-300 leading-relaxed space-y-4">
                <p>
                  <span className="font-bold text-cyan-400">HTTPX는 requests의 완벽한 진화형입니다.</span> 
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
                </div>
              </div>
            </CardContent>
          </Card>

          {/* HTTPX으로 해결할 수 있는 문제들 */}
          <Card className="bg-gray-800/80 backdrop-blur-sm border border-gray-600/50 shadow-2xl mb-12">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-white flex items-center gap-3">
                <Award className="w-6 h-6 text-blue-500" />
                HTTPX으로 해결할 수 있는 문제들
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-1 gap-6">
                {/* requests 라이브러리 한계 */}
                <div className="bg-gradient-to-r from-blue-900/20 to-cyan-900/20 rounded-xl p-6 border border-blue-600/30">
                  <h4 className="font-bold text-white mb-3 flex items-center gap-2">
                    <div className="text-2xl">🔄</div>
                    requests 라이브러리 한계
                  </h4>
                  <div className="text-gray-300 space-y-2">
                    <div>• <span className="font-bold text-cyan-400">기존:</span> 동기 처리만 지원해서 API 호출시 대기 시간 발생</div>
                    <div>• <span className="font-bold text-cyan-400">해결:</span> 동기/비동기 모두 지원으로 병렬 처리와 성능 최적화</div>
                  </div>
                </div>
                
                {/* HTTP/1.1 성능 제약 */}
                <div className="bg-gradient-to-r from-green-900/20 to-emerald-900/20 rounded-xl p-6 border border-green-600/30">
                  <h4 className="font-bold text-white mb-3 flex items-center gap-2">
                    <div className="text-2xl">🚀</div>
                    HTTP/1.1 성능 제약
                  </h4>
                  <div className="text-gray-300 space-y-2">
                    <div>• <span className="font-bold text-green-400">기존:</span> 연결당 하나의 요청만 처리하여 네트워크 효율 낮음</div>
                    <div>• <span className="font-bold text-green-400">해결:</span> HTTP/2 지원으로 다중 스트림과 헤더 압축 활용</div>
                  </div>
                </div>

                {/* Connection Pool 관리 복잡성 */}
                <div className="bg-gradient-to-r from-purple-900/20 to-pink-900/20 rounded-xl p-6 border border-purple-600/30">
                  <h4 className="font-bold text-white mb-3 flex items-center gap-2">
                    <div className="text-2xl">⚡</div>
                    Connection Pool 관리 복잡성
                  </h4>
                  <div className="text-gray-300 space-y-2">
                    <div>• <span className="font-bold text-purple-400">기존:</span> 연결 재사용을 수동으로 관리해야 하는 번거로움</div>
                    <div>• <span className="font-bold text-purple-400">해결:</span> 내장 Connection Pool로 자동 연결 관리와 성능 향상</div>
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