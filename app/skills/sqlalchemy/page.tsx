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
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Python의 강력한 ORM 라이브러리로 데이터베이스 연동
            </p>
            <Badge style={{ background: 'rgb(37 99 235)' }} className="text-white text-lg px-6 py-2">
              Proficiency Level: 75%
            </Badge>
          </div>

          {/* 개인적 견해 */}
          <Card className="bg-gray-800/80 backdrop-blur-sm border border-gray-600/50 shadow-2xl mb-12">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-white flex items-center gap-3">
                <Lightbulb className="w-6 h-6 text-yellow-500" />
                SQLAlchemy에 대한 개인적 견해
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-lg text-gray-300 leading-relaxed space-y-4">
                <p>
                  <span className="font-bold text-cyan-400">SQLAlchemy는 Python ORM의 완성체</span>라고 생각합니다. 
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
              <div className="bg-gradient-to-r from-green-900/20 to-teal-900/20 rounded-xl p-6 border border-green-600/30 cursor-pointer hover:bg-gradient-to-r hover:from-green-900/30 hover:to-teal-900/30 transition-all duration-300" onClick={() => window.open('/projects/2', '_blank')}>
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
                  <div className="bg-gray-800/50 rounded-lg p-4 mt-4">
                    <div className="text-sm text-gray-400 mb-2">핵심 SQLAlchemy 기술들:</div>
                    <div className="flex flex-wrap gap-2">
                      <Badge className="bg-cyan-700 text-cyan-100">ORM Models</Badge>
                      <Badge className="bg-cyan-700 text-cyan-100">Query Optimization</Badge>
                      <Badge className="bg-cyan-700 text-cyan-100">Async Support</Badge>
                      <Badge className="bg-cyan-700 text-cyan-100">Relationships</Badge>
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
                    쿼리 성능
                  </h4>
                  <div className="text-cyan-300 space-y-2">
                    <div>• <span className="font-bold">89,321개 데이터</span> 안정적 관리</div>
                    <div>• <span className="font-bold">평균 쿼리 시간 100ms</span> 이내</div>
                    <div>• <span className="font-bold">복잡한 조인 쿼리</span> 최적화</div>
                  </div>
                </div>
                
                <div className="bg-gradient-to-r from-green-900/30 to-emerald-900/30 rounded-xl p-6 border border-green-600/30">
                  <h4 className="font-bold text-white mb-3 flex items-center gap-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    개발 효율성
                  </h4>
                  <div className="text-green-300 space-y-2">
                    <div>• <span className="font-bold">DB 스키마 자동 관리</span></div>
                    <div>• <span className="font-bold">마이그레이션 100% 자동화</span></div>
                    <div>• <span className="font-bold">타입 안전성 95%</span> 보장</div>
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
                    처음엔 <span className="font-bold text-cyan-400">원시 SQL에 익숙한 상태</span>에서 ORM의 
                    추상화 레이어가 오히려 불투명하게 느껴졌습니다. 어떤 SQL이 실행되는지 
                    <span className="font-bold text-blue-300">예측하기 어려워서</span> 불안했죠.
                  </p>
                  <p>
                    하지만 <span className="font-bold text-cyan-400">대용량 데이터베이스를 다루면서</span> 
                    SQLAlchemy의 지연 로딩과 쿼리 최적화 기능을 체험했습니다. 
                    특히 <span className="font-bold text-blue-300">복잡한 관계 설정</span>과 
                    N+1 쿼리 문제 해결에서 ORM의 진가를 깨달았습니다.
                  </p>
                  <p>
                    지금은 <span className="font-bold text-cyan-400">고급 쿼리 최적화, 커넥션 풀링, 트랜잭션 관리</span> 등을 
                    활용해서 대규모 데이터베이스도 효율적으로 관리할 수 있게 되었습니다.
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
                    SQLAlchemy를 통해 <span className="font-bold text-cyan-400">89,321개 장소 데이터</span>를 안정적으로 관리하고, 
                    복잡한 비즈니스 로직을 데이터베이스 레벨에서 효율적으로 처리할 수 있었습니다. 이는 단순한 데이터 저장을 넘어선 <span className="font-bold text-cyan-400">비즈니스 인텔리전스</span>의 구축입니다.
                  </p>
                  <p>
                    <span className="font-bold text-blue-300">자동화된 스키마 관리와 마이그레이션</span>을 통해 
                    데이터베이스 변경 작업의 위험성을 크게 줄이고, <span className="font-bold text-cyan-400">개발팀의 생산성</span>을 향상시켰습니다.
                  </p>
                  <p>
                    특히 토스와 같은 <span className="font-bold text-blue-300">데이터 중심 서비스</span>에서는 
                    이런 데이터베이스 관리 역량이 <span className="font-bold text-cyan-400">서비스 안정성과 확장성</span>의 
                    핵심 요소가 될 것이라고 확신합니다.
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