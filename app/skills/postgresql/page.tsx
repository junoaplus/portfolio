'use client'
import { Navigation } from '@/components/navigation'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ArrowLeft, Lightbulb, Rocket, TrendingUp, Target, Award } from 'lucide-react'
import Link from 'next/link'

export default function PostgreSQLSkillPage() {
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
            <div className="text-6xl mb-4">🐘</div>
            <h1 className="text-4xl font-black text-white mb-4">
              PostgreSQL
            </h1>
          </div>

          {/* 내가 이해한 PostgreSQL */}
          <Card className="bg-gray-800/80 backdrop-blur-sm border border-gray-600/50 shadow-2xl mb-12">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-white flex items-center gap-3">
                <Lightbulb className="w-6 h-6 text-yellow-500" />
                내가 이해한 PostgreSQL
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-lg text-gray-300 leading-relaxed space-y-4">
                <p>
                  <span className="font-bold text-cyan-400">PostgreSQL을 선택한 이유는 JSON 처리 성능입니다.</span> 
                  내장 JSONB 타입으로 별도 파싱 없이 JSON 데이터를 직접 처리할 수 있어서 
                  <span className="font-bold text-cyan-400">JSON 읽기/쓰기 비용이 현저히 낮습니다</span>.
                </p>
                <p>
                  특히 <span className="font-bold text-cyan-400">ACID 속성의 완벽한 지원과 복잡한 쿼리 최적화</span>가 인상적이었습니다. 
                  대용량 데이터를 다룰 때도 안정적인 성능을 보여주며, 
                  <span className="font-bold text-cyan-400">확장성과 안정성을 동시에 확보</span>할 수 있어 
                  프로덕션 환경에 안심하고 사용할 수 있습니다.
                </p>
                <p>
                  <span className="font-bold text-cyan-400">SQLAlchemy ORM과 함께 사용하면서 진가를 깨달았습니다.</span> 
                  복잡한 쿼리 최적화와 인덱스 전략을 배우면서 
                  <span className="font-bold text-cyan-400">대용량 데이터 처리 성능을 크게 향상</span>시킬 수 있었습니다.
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
              <div className="bg-gradient-to-r from-blue-900/20 to-cyan-900/20 rounded-xl p-6 border border-blue-600/30 cursor-pointer hover:bg-gradient-to-r hover:from-blue-900/30 hover:to-cyan-900/30 transition-all duration-300" onClick={() => window.open('/date-recommendation', '_blank')}>
                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2 hover:text-blue-300 transition-colors">
                  <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                  데이트 코스 추천 AI 시스템 →
                </h3>
                <div className="text-gray-300 space-y-3">
                  <p>
                    <span className="font-bold text-cyan-400">89,321개 장소 데이터의 메인 저장소</span>로 PostgreSQL을 활용했습니다. 
                    PySpark로 정제된 고품질 데이터를 안정적으로 저장하고, 
                    <span className="font-bold text-cyan-400">복잡한 지리공간 쿼리와 JOIN 연산</span>을 효율적으로 처리했습니다.
                  </p>
                  <p>
                    특히 <span className="font-bold text-cyan-400">트랜잭션 일관성이 중요한 사용자 리뷰 시스템</span>에서 
                    PostgreSQL의 ACID 속성이 빛을 발했습니다. 
                    <span className="font-bold text-cyan-400">동시 접속자의 리뷰 생성/수정 작업</span>도 데이터 무결성을 보장하며 처리했습니다.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* PostgreSQL로 해결할 수 있는 문제들 */}
          <Card className="bg-gray-800/80 backdrop-blur-sm border border-gray-600/50 shadow-2xl mb-12">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-white flex items-center gap-3">
                <Award className="w-6 h-6 text-blue-500" />
                PostgreSQL로 해결할 수 있는 문제들
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-1 gap-6">
                {/* 데이터 무결성 문제 */}
                <div className="bg-gradient-to-r from-blue-900/20 to-cyan-900/20 rounded-xl p-6 border border-blue-600/30">
                  <h4 className="font-bold text-white mb-3 flex items-center gap-2">
                    <div className="text-2xl">🔒</div>
                    데이터 무결성 문제
                  </h4>
                  <div className="text-gray-300 space-y-2">
                    <div>• <span className="font-bold text-cyan-400">기존:</span> 동시 접속 시 데이터 일관성이 깨지고 트랜잭션 오류 발생</div>
                    <div>• <span className="font-bold text-cyan-400">해결:</span> ACID 속성으로 트랜잭션 무결성 100% 보장</div>
                  </div>
                </div>
                
                {/* 복잡한 쿼리 성능 문제 */}
                <div className="bg-gradient-to-r from-green-900/20 to-emerald-900/20 rounded-xl p-6 border border-green-600/30">
                  <h4 className="font-bold text-white mb-3 flex items-center gap-2">
                    <div className="text-2xl">⚡</div>
                    복잡한 쿼리 성능 문제
                  </h4>
                  <div className="text-gray-300 space-y-2">
                    <div>• <span className="font-bold text-green-400">기존:</span> 대용량 데이터에서 JOIN과 집계 쿼리가 너무 느림</div>
                    <div>• <span className="font-bold text-green-400">해결:</span> 강력한 쿼리 옵티마이저로 복잡한 쿼리도 빠르게 처리</div>
                  </div>
                </div>

                {/* 데이터베이스 확장성 한계 */}
                <div className="bg-gradient-to-r from-purple-900/20 to-pink-900/20 rounded-xl p-6 border border-purple-600/30">
                  <h4 className="font-bold text-white mb-3 flex items-center gap-2">
                    <div className="text-2xl">📈</div>
                    데이터베이스 확장성 한계
                  </h4>
                  <div className="text-gray-300 space-y-2">
                    <div>• <span className="font-bold text-purple-400">기존:</span> MySQL에서 JSON 처리 시 파싱 비용과 성능 저하</div>
                    <div>• <span className="font-bold text-purple-400">해결:</span> JSONB 타입으로 직접 처리해서 JSON 읽기/쓰기 비용 최소화</div>
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