'use client'
import { Navigation } from '@/components/navigation'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ArrowLeft, Lightbulb, Rocket, TrendingUp, Target, Award } from 'lucide-react'
import Link from 'next/link'

export default function SQLAlchemySkillPage() {
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
            <div className="text-6xl mb-4">🗄️</div>
            <h1 className="text-4xl font-black text-white mb-4">
              SQLAlchemy
            </h1>
          </div>

          {/* 내가 이해한 SQLAlchemy */}
          <Card className="bg-gray-800/80 backdrop-blur-sm border border-gray-600/50 shadow-2xl mb-12">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-white flex items-center gap-3">
                <Lightbulb className="w-6 h-6 text-yellow-500" />
                내가 이해한 SQLAlchemy
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-lg text-gray-300 leading-relaxed space-y-4">
                <p>
                  <span className="font-bold text-cyan-400">SQLAlchemy는 Python ORM의 완성체입니다.</span> 
                  단순한 객체-관계 매핑을 넘어서 복잡한 쿼리 최적화와 데이터베이스 스키마 관리까지 
                  <span className="font-bold text-cyan-400">엔터프라이즈급 데이터베이스 솔루션</span>을 제공합니다.
                </p>
                <p>
                  특히 <span className="font-bold text-cyan-400">Core와 ORM의 이중 구조</span>가 인상적이었습니다. 
                  간단한 작업은 ORM으로, 복잡한 쿼리는 Core로 처리할 수 있어 
                  <span className="font-bold text-cyan-400">성능과 생산성을 모두 확보</span>할 수 있습니다.
                </p>
                <p>
                  데이트 코스 추천 AI 프로젝트에서 <span className="font-bold text-cyan-400">PostgreSQL과의 완벽한 통합</span>을 경험하며, 
                  복잡한 지리공간 데이터 쿼리와 대용량 데이터 처리에서도 
                  <span className="font-bold text-cyan-400">안정적인 성능</span>을 보여주었습니다.
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
                    <span className="font-bold text-cyan-400">SQLAlchemy ORM</span>을 활용하여 89,321개 장소 데이터와 
                    사용자 정보를 <span className="font-bold text-cyan-400">효율적으로 관리</span>하는 데이터베이스 시스템을 구축했습니다.
                  </p>
                  <p>
                    <span className="font-bold text-cyan-400">복잡한 지리공간 쿼리</span>와 카테고리 필터링을 최적화하여 
                    <span className="font-bold text-blue-300">평균 100ms 이내</span>의 데이터 조회 성능을 달성하고, 
                    FastAPI와의 완벽한 비동기 통합을 구현했습니다.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* SQLAlchemy로 해결할 수 있는 문제들 */}
          <Card className="bg-gray-800/80 backdrop-blur-sm border border-gray-600/50 shadow-2xl mb-12">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-white flex items-center gap-3">
                <Award className="w-6 h-6 text-blue-500" />
                SQLAlchemy로 해결할 수 있는 문제들
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-1 gap-6">
                {/* 원시 SQL 관리 복잡성 */}
                <div className="bg-gradient-to-r from-blue-900/20 to-cyan-900/20 rounded-xl p-6 border border-blue-600/30">
                  <h4 className="font-bold text-white mb-3 flex items-center gap-2">
                    <div className="text-2xl">📝</div>
                    원시 SQL 관리 복잡성
                  </h4>
                  <div className="text-gray-300 space-y-2">
                    <div>• <span className="font-bold text-cyan-400">기존:</span> 복잡한 SQL 쿼리 직접 작성하고 유지보수 어려움</div>
                    <div>• <span className="font-bold text-cyan-400">해결:</span> ORM으로 Python 객체 방식으로 쿼리 작성, 가독성 향상</div>
                  </div>
                </div>
                
                {/* DB 스키마 변경 위험성 */}
                <div className="bg-gradient-to-r from-green-900/20 to-emerald-900/20 rounded-xl p-6 border border-green-600/30">
                  <h4 className="font-bold text-white mb-3 flex items-center gap-2">
                    <div className="text-2xl">⚠️</div>
                    DB 스키마 변경 위험성
                  </h4>
                  <div className="text-gray-300 space-y-2">
                    <div>• <span className="font-bold text-green-400">기존:</span> 스키마 변경 시 수동으로 처리해서 실수 위험 높음</div>
                    <div>• <span className="font-bold text-green-400">해결:</span> Alembic 마이그레이션으로 안전하고 자동화된 스키마 관리</div>
                  </div>
                </div>

                {/* N+1 쿼리 성능 문제 */}
                <div className="bg-gradient-to-r from-purple-900/20 to-pink-900/20 rounded-xl p-6 border border-purple-600/30">
                  <h4 className="font-bold text-white mb-3 flex items-center gap-2">
                    <div className="text-2xl">🔄</div>
                    N+1 쿼리 성능 문제
                  </h4>
                  <div className="text-gray-300 space-y-2">
                    <div>• <span className="font-bold text-purple-400">기존:</span> 관계 데이터 조회 시 불필요한 반복 쿼리로 성능 저하</div>
                    <div>• <span className="font-bold text-purple-400">해결:</span> Eager Loading과 지연 로딩으로 쿼리 최적화</div>
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