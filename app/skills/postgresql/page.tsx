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
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              강력하고 확장 가능한 오픈소스 관계형 데이터베이스
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
                PostgreSQL에 대한 개인적 견해
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-lg text-gray-300 leading-relaxed space-y-4">
                <p>
                  <span className="font-bold text-cyan-400">PostgreSQL은 데이터베이스의 스위스 아미 나이프</span>라고 생각합니다. 
                  단순한 관계형 데이터베이스를 넘어서 JSON, 벡터, 지리공간 데이터까지 처리할 수 있는 
                  <span className="font-bold text-cyan-400">멀티모달 데이터베이스</span>입니다.
                </p>
                <p>
                  특히 <span className="font-bold text-cyan-400">ACID 속성의 완벽한 지원과 복잡한 쿼리 최적화</span>가 인상적이었습니다. 
                  대용량 데이터를 다룰 때도 안정적인 성능을 보여주며, 
                  <span className="font-bold text-cyan-400">확장성과 안정성을 동시에 확보</span>할 수 있어 
                  프로덕션 환경에 안심하고 사용할 수 있습니다.
                </p>
                <p>
                  토스와 같은 <span className="font-bold text-cyan-400">금융 서비스</span>에서는 데이터 일관성과 트랜잭션 무결성이 
                  생명입니다. PostgreSQL의 <span className="font-bold text-cyan-400">강력한 트랜잭션 처리 능력</span>과 
                  <span className="font-bold text-cyan-400">동시성 제어 메커니즘</span>이 수백만 건의 거래를 안전하게 처리하는 
                  핵심 기반이 될 것이라고 확신합니다.
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
              <div className="bg-gradient-to-r from-blue-900/20 to-cyan-900/20 rounded-xl p-6 border border-blue-600/30 cursor-pointer hover:bg-gradient-to-r hover:from-blue-900/30 hover:to-cyan-900/30 transition-all duration-300" onClick={() => window.open('/projects/2', '_blank')}>
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
                  <div className="bg-gray-800/50 rounded-lg p-4 mt-4">
                    <div className="text-sm text-gray-400 mb-2">핵심 PostgreSQL 활용:</div>
                    <div className="flex flex-wrap gap-2">
                      <Badge className="bg-cyan-700 text-cyan-100">SQLAlchemy ORM</Badge>
                      <Badge className="bg-cyan-700 text-cyan-100">Complex Joins</Badge>
                      <Badge className="bg-cyan-700 text-cyan-100">Transaction Management</Badge>
                      <Badge className="bg-cyan-700 text-cyan-100">Index Optimization</Badge>
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
                    데이터 관리 성능
                  </h4>
                  <div className="text-cyan-300 space-y-2">
                    <div>• <span className="font-bold">89,321개 장소 데이터</span> 안정적 저장</div>
                    <div>• <span className="font-bold">복잡한 JOIN 쿼리</span> 최적화 완료</div>
                    <div>• <span className="font-bold">평균 응답 시간 200ms</span> 달성</div>
                  </div>
                </div>
                
                <div className="bg-gradient-to-r from-green-900/30 to-emerald-900/30 rounded-xl p-6 border border-green-600/30">
                  <h4 className="font-bold text-white mb-3 flex items-center gap-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    트랜잭션 안정성
                  </h4>
                  <div className="text-green-300 space-y-2">
                    <div>• <span className="font-bold">ACID 속성 100% 보장</span></div>
                    <div>• <span className="font-bold">동시성 제어</span> 완벽 구현</div>
                    <div>• <span className="font-bold">데이터 무결성 0% 오류율</span></div>
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
                    처음엔 <span className="font-bold text-cyan-400">MySQL에 익숙한 상태</span>에서 PostgreSQL로 전환하면서 
                    차이점을 이해하는데 시간이 걸렸습니다. 특히 <span className="font-bold text-blue-300">데이터 타입과 함수들의 미묘한 차이</span>에서 
                    시행착오를 겪었죠.
                  </p>
                  <p>
                    하지만 <span className="font-bold text-cyan-400">SQLAlchemy ORM과 함께 사용</span>하면서 
                    PostgreSQL의 진가를 깨달았습니다. 
                    특히 <span className="font-bold text-blue-300">복잡한 쿼리 최적화와 인덱스 전략</span>을 배우면서 
                    대용량 데이터 처리 성능을 크게 향상시킬 수 있었습니다.
                  </p>
                  <p>
                    지금은 <span className="font-bold text-cyan-400">트랜잭션 설계, 동시성 제어, 백업 전략</span> 등을 
                    체계적으로 활용해서 실제 프로덕션 환경에서도 안정적인 데이터베이스 시스템을 구축할 수 있게 되었습니다.
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
                <h4 className="font-bold text-white mb-4">안정적인 데이터 관리로 서비스 신뢰성 확보</h4>
                <div className="text-gray-300 space-y-3">
                  <p>
                    PostgreSQL의 견고한 <span className="font-bold text-cyan-400">ACID 트랜잭션 처리</span>로 
                    사용자 데이터와 장소 정보의 <span className="font-bold text-blue-300">일관성을 완벽하게 보장</span>했습니다. 
                    이는 사용자들이 신뢰할 수 있는 데이트 코스 추천 서비스의 기반이 되었습니다.
                  </p>
                  <p>
                    <span className="font-bold text-blue-300">복잡한 쿼리 최적화</span>를 통해 
                    대용량 데이터에서도 <span className="font-bold text-cyan-400">빠른 응답 속도</span>를 확보했고, 
                    이는 실시간 추천 시스템의 사용자 경험을 크게 개선했습니다.
                  </p>
                  <p>
                    특히 토스와 같은 <span className="font-bold text-blue-300">대규모 금융 서비스</span>에서는 
                    PostgreSQL의 <span className="font-bold text-cyan-400">동시성 제어와 데이터 무결성</span>이 
                    <span className="font-bold text-cyan-400">수백만 사용자의 거래 데이터</span>를 
                    안전하고 효율적으로 처리하는 핵심 기반이 될 것입니다.
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