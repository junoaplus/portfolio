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
          </div>

          {/* 내가 이해한 PySpark */}
          <Card className="bg-gray-800/80 backdrop-blur-sm border border-gray-600/50 shadow-2xl mb-12">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-white flex items-center gap-3">
                <Lightbulb className="w-6 h-6 text-yellow-500" />
                내가 이해한 PySpark
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-lg text-gray-300 leading-relaxed space-y-4">
                <p>
                  <span className="font-bold text-cyan-400">PySpark의 가장 큰 강점은 병렬 처리를 효과적으로 한다</span>는 것입니다. 
                  <span className="font-bold text-cyan-400">여러 코어에서 동시에 작업을 처리해서 속도를 극대화</span>할 수 있는 점이 
                  pandas와 비교했을 때 압도적인 장점이라고 생각합니다.
                </p>
                <p>
                  특히 <span className="font-bold text-cyan-400">분산 환경에서 메모리를 나눠서 사용</span>하기 때문에 
                  단일 머신에서는 불가능한 대용량 데이터도 처리할 수 있습니다. 
                  <span className="font-bold text-cyan-400">Lazy Evaluation으로 연산을 최적화</span>해서 실행하는 것도 효율성을 높여줍니다.
                </p>
                <p>
                  실제로 20만개 데이터를 9만개로 정제하는 작업에서 
                  <span className="font-bold text-cyan-400">병렬 처리로 단일 머신보다 훨씬 빠르게 처리</span>했습니다. 
                  이런 병렬 처리 능력이 실제 비즈니스에서 PySpark의 진짜 가치라고 생각합니다.
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
                    <span className="font-bold text-cyan-400">20만개 → 9만개 데이터 정제</span>를 PySpark로 수행했습니다. 
                    서울시 전체 POI 데이터에서 중복 제거, 좌표 정규화, 카테고리 표준화 작업을 
                    <span className="font-bold text-cyan-400">분산 처리</span>로 효율적으로 처리했습니다.
                  </p>
                  <p>
                    특히 <span className="font-bold text-cyan-400">지리공간 데이터 클러스터링</span>과 
                    <span className="font-bold text-cyan-400">텍스트 전처리 파이프라인</span>을 구축하여 
                    단일 머신으로는 수 시간 걸릴 작업을 <span className="font-bold text-cyan-400">30분 내로 단축</span>했습니다.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* PySpark로 해결할 수 있는 문제들 */}
          <Card className="bg-gray-800/80 backdrop-blur-sm border border-gray-600/50 shadow-2xl mb-12">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-white flex items-center gap-3">
                <Award className="w-6 h-6 text-blue-500" />
                PySpark로 해결할 수 있는 문제들
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-1 gap-6">
                {/* 메모리 한계 문제 */}
                <div className="bg-gradient-to-r from-red-900/20 to-pink-900/20 rounded-xl p-6 border border-red-600/30">
                  <h4 className="font-bold text-white mb-3 flex items-center gap-2">
                    <div className="text-2xl">💾</div>
                    pandas 메모리 한계 문제
                  </h4>
                  <div className="text-gray-300 space-y-2">
                    <div>• <span className="font-bold text-red-400">문제:</span> 대용량 데이터에서 pandas 메모리 오류 발생</div>
                    <div>• <span className="font-bold text-red-400">해결:</span> 분산 처리로 메모리 한계 없이 데이터 처리</div>
                  </div>
                </div>

                {/* 처리 시간 문제 */}
                <div className="bg-gradient-to-r from-blue-900/20 to-cyan-900/20 rounded-xl p-6 border border-blue-600/30">
                  <h4 className="font-bold text-white mb-3 flex items-center gap-2">
                    <div className="text-2xl">⚡</div>
                    대용량 데이터 처리 시간 문제
                  </h4>
                  <div className="text-gray-300 space-y-2">
                    <div>• <span className="font-bold text-blue-400">문제:</span> 단일 머신에서 오래 걸리는 대용량 데이터 처리</div>
                    <div>• <span className="font-bold text-blue-400">해결:</span> Lazy Evaluation과 병렬 처리로 처리 시간 대폭 단축</div>
                  </div>
                </div>

                {/* 데이터 정제 복잡성 문제 */}
                <div className="bg-gradient-to-r from-green-900/20 to-emerald-900/20 rounded-xl p-6 border border-green-600/30">
                  <h4 className="font-bold text-white mb-3 flex items-center gap-2">
                    <div className="text-2xl">🔧</div>
                    복잡한 데이터 정제 파이프라인
                  </h4>
                  <div className="text-gray-300 space-y-2">
                    <div>• <span className="font-bold text-green-400">문제:</span> 중복제거, 정규화, 변환 등 복잡한 전처리 작업</div>
                    <div>• <span className="font-bold text-green-400">해결:</span> DataFrame API와 Spark SQL로 효율적인 파이프라인 구축</div>
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