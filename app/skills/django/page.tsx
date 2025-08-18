'use client'
import { Navigation } from '@/components/navigation'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ArrowLeft, Lightbulb, Rocket, TrendingUp, Target, Award } from 'lucide-react'
import Link from 'next/link'

export default function DjangoSkillPage() {
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
            <div className="text-6xl mb-4">🟢</div>
            <h1 className="text-4xl font-black text-white mb-4">
              Django
            </h1>
          </div>

          {/* 내가 이해한 Django */}
          <Card className="bg-gray-800/80 backdrop-blur-sm border border-gray-600/50 shadow-2xl mb-12">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-white flex items-center gap-3">
                <Lightbulb className="w-6 h-6 text-yellow-500" />
                내가 이해한 Django
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-lg text-gray-300 leading-relaxed space-y-4">
                <p>
                  <span className="font-bold text-cyan-400">Django는 빠른 개발이 필요할 때 최고의 선택입니다.</span> 
                  처음엔 FastAPI에 비해 무겁다고 생각했지만, 
                  <span className="font-bold text-cyan-400">기본 제공되는 기능들이 초기 개발 속도를 빠르게</span> 만들어줍니다.
                </p>
                <p>
                  특히 <span className="font-bold text-cyan-400">Django ORM과 migration 시스템이 정말 편리합니다.</span> 
                  SQL 작성 없이 파이썬으로 모든 걸 처리하고, 
                  <span className="font-bold text-cyan-400">데이터베이스 스키마 변경도 자동화</span>되어서 
                  팀 프로젝트에서 충돌 걱정 없이 개발할 수 있었습니다.
                </p>
                <p>
                  다만 <span className="font-bold text-cyan-400">프로젝트가 커지면서 Django의 경직된 구조가 발목을 잡기 시작합니다.</span> 
                  MTV 패턴을 벗어나기 어렵고, 커스터마이징하려면 Django way를 따라야 해서 
                  <span className="font-bold text-cyan-400">복잡한 비즈니스 로직을 구현할 때는 FastAPI가 더 유연</span>했습니다.
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
                    <span className="font-bold text-cyan-400">Django로 웹 인터페이스 전체를 구축했습니다.</span> 
                    사용자 세션 관리, URL 라우팅, 템플릿 렌더링까지 Django의 MTV 패턴으로 체계적으로 구현했고, 
                    <span className="font-bold text-cyan-400">FastAPI와 하이브리드 구조</span>로 AI 추론은 빠르게 처리했습니다.
                  </p>
                  <p>
                    <span className="font-bold text-cyan-400">PostgreSQL과 Django ORM으로 모든 QA 데이터를 자동 저장했습니다.</span> 
                    사용자가 질문할 때마다 생성되는 질문-답변 쌍을 자동으로 DB에 저장해서 
                    <span className="font-bold text-cyan-400">향후 파인튜닝용 고품질 데이터를 축적</span>하는 시스템을 구축했습니다.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Django로 해결할 수 있는 문제들 */}
          <Card className="bg-gray-800/80 backdrop-blur-sm border border-gray-600/50 shadow-2xl mb-12">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-white flex items-center gap-3">
                <Award className="w-6 h-6 text-blue-500" />
                Django로 해결할 수 있는 문제들
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-1 gap-6">
                {/* 백오피스 개발 시간 문제 */}
                <div className="bg-gradient-to-r from-blue-900/20 to-cyan-900/20 rounded-xl p-6 border border-blue-600/30">
                  <h4 className="font-bold text-white mb-3 flex items-center gap-2">
                    <div className="text-2xl">🚀</div>
                    백오피스 개발 시간 문제
                  </h4>
                  <div className="text-gray-300 space-y-2">
                    <div>• <span className="font-bold text-cyan-400">기존:</span> 관리자 페이지와 인증 시스템을 직접 개발해야 함</div>
                    <div>• <span className="font-bold text-cyan-400">해결:</span> Admin 페이지와 인증/권한 시스템이 기본 제공되어 즉시 구축</div>
                  </div>
                </div>

                {/* 데이터베이스 관리 복잡함 */}
                <div className="bg-gradient-to-r from-green-900/20 to-emerald-900/20 rounded-xl p-6 border border-green-600/30">
                  <h4 className="font-bold text-white mb-3 flex items-center gap-2">
                    <div className="text-2xl">💡</div>
                    데이터베이스 관리 복잡함
                  </h4>
                  <div className="text-gray-300 space-y-2">
                    <div>• <span className="font-bold text-green-400">기존:</span> SQL 작성과 DB 버전 관리가 복잡하고 어려움</div>
                    <div>• <span className="font-bold text-green-400">해결:</span> ORM으로 파이썬 코드만으로 처리하고 Migration으로 자동화</div>
                  </div>
                </div>

                {/* 대규모 확장 한계 */}
                <div className="bg-gradient-to-r from-purple-900/20 to-pink-900/20 rounded-xl p-6 border border-purple-600/30">
                  <h4 className="font-bold text-white mb-3 flex items-center gap-2">
                    <div className="text-2xl">🎯</div>
                    프로젝트 규모별 적합성
                  </h4>
                  <div className="text-gray-300 space-y-2">
                    <div>• <span className="font-bold text-purple-400">적합:</span> 스타트업 MVP나 중간 규모 서비스에 완벽</div>
                    <div>• <span className="font-bold text-purple-400">한계:</span> 너무 커지면 경직된 구조로 마이크로서비스 분리 필요</div>
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