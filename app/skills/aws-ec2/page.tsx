'use client'
import { Navigation } from '@/components/navigation'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ArrowLeft, Lightbulb, Rocket, TrendingUp, Target, Award } from 'lucide-react'
import Link from 'next/link'

export default function AWSEC2SkillPage() {
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
            <div className="text-6xl mb-4">☁️</div>
            <h1 className="text-4xl font-black text-white mb-4">
              AWS EC2
            </h1>
          </div>

          {/* 내가 이해한 AWS EC2 */}
          <Card className="bg-gray-800/80 backdrop-blur-sm border border-gray-600/50 shadow-2xl mb-12">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-white flex items-center gap-3">
                <Lightbulb className="w-6 h-6 text-yellow-500" />
                내가 이해한 AWS EC2
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-lg text-gray-300 leading-relaxed space-y-4">
                <p>
                  <span className="font-bold text-cyan-400">AWS EC2의 가장 큰 장점은 원하는 컴퓨터 사양을 선택해서 비용을 최적화할 수 있다는 점입니다.</span> 
                  CPU, 메모리, 스토리지를 프로젝트 요구사항에 맞게 선택할 수 있어서 
                  <span className="font-bold text-cyan-400">필요한 만큼만 비용을 지불</span>할 수 있습니다.
                </p>
                <p>
                  특히 <span className="font-bold text-cyan-400">로컬 터미널과 SSH로 연결해서 원격 조작이 가능한 점이 편리했습니다.</span> 
                  마치 로컬 환경처럼 서버를 관리할 수 있어서 
                  <span className="font-bold text-cyan-400">개발과 운영의 효율성</span>이 크게 향상되었습니다.
                </p>
                <p>
                  다만 <span className="font-bold text-cyan-400">RDS와 함께 사용할 때는 비용 관리에 주의가 필요합니다.</span> 
                  인스턴스와 데이터베이스를 별도로 운영하면 비용이 증가하므로 
                  <span className="font-bold text-cyan-400">예산 계획을 사전에 수립하는 것이 중요합니다.</span>
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
                    <span className="font-bold text-cyan-400">AWS EC2 Ubuntu 인스턴스</span>에 Django + Nginx + Gunicorn으로 
                    웹서버를 구축하고, FastAPI로 AI 백엔드를 배포하여 <span className="font-bold text-cyan-400">217개 게임의 RAG 시스템</span>을 운영했습니다.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* AWS EC2로 해결할 수 있는 문제들 */}
          <Card className="bg-gray-800/80 backdrop-blur-sm border border-gray-600/50 shadow-2xl mb-12">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-white flex items-center gap-3">
                <Award className="w-6 h-6 text-blue-500" />
                AWS EC2로 해결할 수 있는 문제들
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-1 gap-6">
                {/* 서버 사양 선택의 유연성 */}
                <div className="bg-gradient-to-r from-blue-900/20 to-cyan-900/20 rounded-xl p-6 border border-blue-600/30">
                  <h4 className="font-bold text-white mb-3 flex items-center gap-2">
                    <div className="text-2xl">⚙️</div>
                    서버 사양 선택의 유연성
                  </h4>
                  <div className="text-gray-300 space-y-2">
                    <div>• <span className="font-bold text-cyan-400">기존:</span> 고정된 서버 사양으로 오버스펙이나 언더스펙 문제 발생</div>
                    <div>• <span className="font-bold text-cyan-400">해결:</span> 프로젝트에 맞는 인스턴스 타입 선택으로 비용 최적화</div>
                  </div>
                </div>
                
                {/* 원격 서버 관리 어려움 */}
                <div className="bg-gradient-to-r from-green-900/20 to-emerald-900/20 rounded-xl p-6 border border-green-600/30">
                  <h4 className="font-bold text-white mb-3 flex items-center gap-2">
                    <div className="text-2xl">💻</div>
                    원격 서버 관리 어려움
                  </h4>
                  <div className="text-gray-300 space-y-2">
                    <div>• <span className="font-bold text-green-400">기존:</span> 물리 서버는 직접 방문해야 하는 경우가 많음</div>
                    <div>• <span className="font-bold text-green-400">해결:</span> SSH로 어디서든 터미널로 서버 관리 가능</div>
                  </div>
                </div>

                {/* 클라우드 비용 관리 */}
                <div className="bg-gradient-to-r from-purple-900/20 to-pink-900/20 rounded-xl p-6 border border-purple-600/30">
                  <h4 className="font-bold text-white mb-3 flex items-center gap-2">
                    <div className="text-2xl">💰</div>
                    클라우드 비용 관리 (주의사항)
                  </h4>
                  <div className="text-gray-300 space-y-2">
                    <div>• <span className="font-bold text-purple-400">기존:</span> RDS와 EC2 함께 사용시 예상치 못한 비용 발생</div>
                    <div>• <span className="font-bold text-purple-400">해결:</span> 사전 비용 계산과 모니터링으로 예산 통제</div>
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