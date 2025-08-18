'use client'
import { Navigation } from '@/components/navigation'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ArrowLeft, Lightbulb, Rocket, TrendingUp, Target, Award } from 'lucide-react'
import Link from 'next/link'

export default function NginxSkillPage() {
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
            <div className="text-6xl mb-4">⚡</div>
            <h1 className="text-4xl font-black text-white mb-4">
              Nginx
            </h1>
          </div>

          {/* 내가 이해한 Nginx */}
          <Card className="bg-gray-800/80 backdrop-blur-sm border border-gray-600/50 shadow-2xl mb-12">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-white flex items-center gap-3">
                <Lightbulb className="w-6 h-6 text-yellow-500" />
                내가 이해한 Nginx
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-lg text-gray-300 leading-relaxed space-y-4">
                <p>
                  <span className="font-bold text-cyan-400">Nginx는 현대 웹 인프라의 필수 요소입니다.</span> 
                  단순한 웹 서버를 넘어서 로드 밸런서, 리버스 프록시, SSL 터미네이터까지 
                  <span className="font-bold text-cyan-400">올인원 솔루션</span>을 제공합니다.
                </p>
                <p>
                  특히 <span className="font-bold text-cyan-400">이벤트 기반 아키텍처</span>가 인상적이었습니다. 
                  적은 메모리로 수많은 동시 연결을 처리하는 효율성과 
                  <span className="font-bold text-cyan-400">C10K 문제 해결</span>에서의 혁신성이 뛰어납니다.
                </p>
                <p>
                  보드게임 룰 챗봇 프로젝트에서 <span className="font-bold text-cyan-400">Nginx를 리버스 프록시</span>로 활용하여 
                  Django와 FastAPI 서비스를 통합하고, SSL 인증서와 정적 파일 서빙을 최적화하면서 
                  <span className="font-bold text-cyan-400">안정적인 프로덕션 환경</span>을 구축할 수 있었습니다.
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
              <div className="bg-gradient-to-r from-orange-900/20 to-red-900/20 rounded-xl p-6 border border-orange-600/30 cursor-pointer hover:bg-gradient-to-r hover:from-orange-900/30 hover:to-red-900/30 transition-all duration-300" onClick={() => window.open('/boardgame-chatbot', '_blank')}>
                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2 hover:text-orange-300 transition-colors">
                  <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                  보드게임 룰 챗봇 시스템 →
                </h3>
                <div className="text-gray-300 space-y-3">
                  <p>
                    <span className="font-bold text-cyan-400">Nginx 리버스 프록시</span>로 Django 웹 서버와 FastAPI AI 엔진을 
                    통합하여 <span className="font-bold text-cyan-400">단일 엔드포인트</span>로 서비스했습니다.
                  </p>
                  <p>
                    <span className="font-bold text-cyan-400">Gunicorn과 연동</span>하여 Django 애플리케이션을 안정적으로 서빙하고, 
                    <span className="font-bold text-blue-300">정적 파일 처리 최적화</span>로 
                    서버 부하를 크게 줄였습니다.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Nginx로 해결할 수 있는 문제들 */}
          <Card className="bg-gray-800/80 backdrop-blur-sm border border-gray-600/50 shadow-2xl mb-12">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-white flex items-center gap-3">
                <Award className="w-6 h-6 text-blue-500" />
                Nginx로 해결할 수 있는 문제들
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-1 gap-6">
                {/* 개발 서버의 프로덕션 한계 */}
                <div className="bg-gradient-to-r from-blue-900/20 to-cyan-900/20 rounded-xl p-6 border border-blue-600/30">
                  <h4 className="font-bold text-white mb-3 flex items-center gap-2">
                    <div className="text-2xl">🚫</div>
                    개발 서버의 프로덕션 한계
                  </h4>
                  <div className="text-gray-300 space-y-2">
                    <div>• <span className="font-bold text-cyan-400">기존:</span> Django/FastAPI 내장 서버는 프로덕션에서 성능 부족</div>
                    <div>• <span className="font-bold text-cyan-400">해결:</span> Nginx로 리버스 프록시 구성하여 안정적인 서비스 운영</div>
                  </div>
                </div>
                
                {/* 정적 파일 서빙 비효율 */}
                <div className="bg-gradient-to-r from-green-900/20 to-emerald-900/20 rounded-xl p-6 border border-green-600/30">
                  <h4 className="font-bold text-white mb-3 flex items-center gap-2">
                    <div className="text-2xl">📁</div>
                    정적 파일 서빙 비효율
                  </h4>
                  <div className="text-gray-300 space-y-2">
                    <div>• <span className="font-bold text-green-400">기존:</span> 애플리케이션 서버가 정적 파일까지 처리하여 자원 낭비</div>
                    <div>• <span className="font-bold text-green-400">해결:</span> Nginx가 정적 파일 직접 서빙하여 성능 최적화</div>
                  </div>
                </div>

                {/* 멀티 서비스 통합 복잡성 */}
                <div className="bg-gradient-to-r from-purple-900/20 to-pink-900/20 rounded-xl p-6 border border-purple-600/30">
                  <h4 className="font-bold text-white mb-3 flex items-center gap-2">
                    <div className="text-2xl">🔀</div>
                    멀티 서비스 통합 복잡성
                  </h4>
                  <div className="text-gray-300 space-y-2">
                    <div>• <span className="font-bold text-purple-400">기존:</span> Django와 FastAPI 등 여러 서비스를 각각 관리하기 복잡</div>
                    <div>• <span className="font-bold text-purple-400">해결:</span> 단일 엔드포인트로 통합하여 관리 단순화</div>
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