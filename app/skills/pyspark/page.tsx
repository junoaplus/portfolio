'use client'
import { Navigation } from '@/components/navigation'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ArrowLeft, Lightbulb, Rocket, TrendingUp, Target, Award } from 'lucide-react'
import Link from 'next/link'

export default function PySparkSkillPage() {
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
              PySpark
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              대규모 데이터 처리를 위한 분산 컴퓨팅 엔진
            </p>
            <Badge style={{ background: 'rgb(37 99 235)' }} className="text-white text-lg px-6 py-2">
              Proficiency Level: 85%
            </Badge>
          </div>

          {/* 개인적 견해 */}
          <Card className="bg-gray-800/80 backdrop-blur-sm border border-gray-600/50 shadow-2xl mb-12">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-white flex items-center gap-3">
                <Lightbulb className="w-6 h-6 text-yellow-500" />
                PySpark에 대한 개인적 견해
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-lg text-gray-300 leading-relaxed space-y-4">
                <p>
                  <span className="font-bold text-cyan-400">PySpark는 빅데이터 처리의 게임 체인저</span>라고 생각합니다. 
                  pandas로는 처리하기 어려운 대용량 데이터를 분산 환경에서 효율적으로 다룰 수 있어, 
                  <span className="font-bold text-cyan-400">실제 프로덕션 환경에서의 데이터 엔지니어링</span>에 필수적인 기술입니다.
                </p>
                <p>
                  특히 <span className="font-bold text-cyan-400">Lazy Evaluation과 분산 처리</span>의 개념이 인상적이었습니다. 
                  작업을 미리 계획하고 최적화하여 실행하는 방식이 단순히 빠른 처리를 넘어서 
                  <span className="font-bold text-cyan-400">스마트한 데이터 처리</span>를 가능하게 한다고 느꼈습니다.
                </p>
                <p>
                  토스 같은 <span className="font-bold text-cyan-400">대규모 금융 서비스</span>에서는 수백만 건의 거래 데이터를 
                  실시간으로 분석해야 하는데, PySpark의 분산 처리 능력이야말로 
                  <span className="font-bold text-cyan-400">비즈니스 크리티컬한 데이터 파이프라인</span>을 구축하는 핵심이라고 생각합니다.
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
                    <span className="font-bold text-cyan-400">20만개 → 9만개 데이터 정제</span>를 PySpark로 수행했습니다. 
                    서울시 전체 POI 데이터에서 중복 제거, 좌표 정규화, 카테고리 표준화 작업을 
                    <span className="font-bold text-cyan-400">분산 처리</span>로 효율적으로 처리했습니다.
                  </p>
                  <p>
                    특히 <span className="font-bold text-cyan-400">지리공간 데이터 클러스터링</span>과 
                    <span className="font-bold text-cyan-400">텍스트 전처리 파이프라인</span>을 구축하여 
                    단일 머신으로는 수 시간 걸릴 작업을 <span className="font-bold text-cyan-400">30분 내로 단축</span>했습니다.
                  </p>
                  <div className="bg-gray-800/50 rounded-lg p-4 mt-4">
                    <div className="text-sm text-gray-400 mb-2">핵심 PySpark 작업들:</div>
                    <div className="flex flex-wrap gap-2">
                      <Badge className="bg-cyan-700 text-cyan-100">DataFrame API</Badge>
                      <Badge className="bg-cyan-700 text-cyan-100">Window Functions</Badge>
                      <Badge className="bg-cyan-700 text-cyan-100">UDF (User Defined Functions)</Badge>
                      <Badge className="bg-cyan-700 text-cyan-100">Spark SQL</Badge>
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
                    데이터 처리 성능
                  </h4>
                  <div className="text-cyan-300 space-y-2">
                    <div>• <span className="font-bold">20만 → 9만개</span> 데이터 정제 완료</div>
                    <div>• <span className="font-bold">처리 시간 85% 단축</span> (4시간 → 30분)</div>
                    <div>• <span className="font-bold">메모리 사용량 60% 최적화</span></div>
                  </div>
                </div>
                
                <div className="bg-gradient-to-r from-green-900/30 to-emerald-900/30 rounded-xl p-6 border border-green-600/30">
                  <h4 className="font-bold text-white mb-3 flex items-center gap-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    데이터 품질 향상
                  </h4>
                  <div className="text-green-300 space-y-2">
                    <div>• <span className="font-bold">중복 데이터 98% 제거</span></div>
                    <div>• <span className="font-bold">좌표 정확도 99.7%</span> 달성</div>
                    <div>• <span className="font-bold">카테고리 표준화 100%</span> 완료</div>
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
                    처음엔 <span className="font-bold text-cyan-400">pandas에 익숙한 상태</span>에서 PySpark의 
                    Lazy Evaluation 개념이 낯설었습니다. action을 호출해야 실제 연산이 수행된다는 점에서 
                    <span className="font-bold text-blue-300">디버깅의 어려움</span>을 겪었죠.
                  </p>
                  <p>
                    하지만 <span className="font-bold text-cyan-400">DataFrame API와 Spark SQL</span>을 
                    병행하면서 점차 분산 컴퓨팅의 매력을 깨달았습니다. 
                    특히 <span className="font-bold text-blue-300">대용량 지리공간 데이터</span>를 처리하면서 
                    단일 머신의 한계를 뛰어넘는 성능을 체감할 수 있었습니다.
                  </p>
                  <p>
                    지금은 <span className="font-bold text-cyan-400">UDF 최적화, 파티셔닝 전략, 캐싱 전략</span> 등을 
                    활용해서 실제 프로덕션 레벨의 데이터 파이프라인을 구축할 수 있게 되었습니다.
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
                <h4 className="font-bold text-white mb-4">데이트 코스 추천 서비스의 핵심 인프라 구축</h4>
                <div className="text-gray-300 space-y-3">
                  <p>
                    PySpark를 통한 대규모 데이터 정제로 <span className="font-bold text-cyan-400">89,321개 고품질 장소 데이터베이스</span>를 
                    구축했습니다. 이는 사용자들이 신뢰할 수 있는 데이트 코스 추천의 기반이 되었습니다.
                  </p>
                  <p>
                    <span className="font-bold text-blue-300">데이터 처리 시간 85% 단축</span>을 통해 
                    개발 사이클을 크게 향상시켰고, 실시간에 가까운 데이터 업데이트가 가능해져 
                    <span className="font-bold text-cyan-400">사용자 경험이 크게 개선</span>되었습니다.
                  </p>
                  <p>
                    특히 토스와 같은 <span className="font-bold text-blue-300">대규모 서비스 환경</span>에서는 
                    이런 빅데이터 처리 능력이 <span className="font-bold text-cyan-400">수백만 사용자의 실시간 요청</span>을 
                    안정적으로 처리하는 핵심 역량이 될 것이라고 확신합니다.
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