'use client'
import { Navigation } from '@/components/navigation'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ArrowLeft, Lightbulb, Rocket, TrendingUp, Target, Award } from 'lucide-react'
import Link from 'next/link'

export default function RedisSkillPage() {
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
            <div className="text-6xl mb-4">💾</div>
            <h1 className="text-4xl font-black text-white mb-4">
              Redis
            </h1>
          </div>

          {/* 내가 이해한 Redis */}
          <Card className="bg-gray-800/80 backdrop-blur-sm border border-gray-600/50 shadow-2xl mb-12">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-white flex items-center gap-3">
                <Lightbulb className="w-6 h-6 text-yellow-500" />
                내가 이해한 Redis
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-lg text-gray-300 leading-relaxed space-y-4">
                <p>
                  <span className="font-bold text-cyan-400">Redis를 처음 접한 건 리뷰를 따로 관리해서 순위를 보여주는 기능 때문이었습니다.</span> 
                  리뷰 데이터와 장소 데이터를 조인해서 순위를 계산하다 보니 
                  <span className="font-bold text-cyan-400">쿼리 시간이 너무 느려지는 문제</span>가 발생했습니다.
                </p>
                <p>
                  어떻게 해결해야 할지 찾아보다가 <span className="font-bold text-cyan-400">Redis를 알게 되었습니다.</span> 
                  복잡한 조인 결과를 미리 계산해서 Redis에 저장하고, 
                  <span className="font-bold text-cyan-400">10분에 한 번씩 업데이트</span>해주면서 
                  최신성도 유지하고 사용자 편리성도 챙길 수 있었습니다.
                </p>
                <p>
                  결과적으로 <span className="font-bold text-cyan-400">응답 시간을 2초에서 200ms로 대폭 단축</span>했고, 
                  사용자들이 실시간으로 순위를 확인할 수 있게 되었습니다. 
                  <span className="font-bold text-cyan-400">Redis는 복잡한 쿼리 성능 문제의 해결사</span>입니다.
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
                    <span className="font-bold text-cyan-400">대용량 장소 데이터 캐싱 시스템</span>으로 Redis를 활용했습니다. 
                    89,321개 장소 정보를 <span className="font-bold text-cyan-400">10분 주기로 자동 갱신</span>하여 
                    실시간 응답 속도를 확보하고 <span className="font-bold text-cyan-400">데이터베이스 부하를 90% 감소</span>시켰습니다.
                  </p>
                  <p>
                    특히 <span className="font-bold text-cyan-400">동시 접속자 확장성 문제</span>를 Redis로 해결했습니다. 
                    복잡한 JOIN 쿼리 결과를 캐싱하여 <span className="font-bold text-cyan-400">평균 응답 시간을 2초에서 200ms로 단축</span>했고, 
                    다중 사용자가 동시에 접속해도 안정적인 성능을 보장했습니다.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Redis로 해결할 수 있는 문제들 */}
          <Card className="bg-gray-800/80 backdrop-blur-sm border border-gray-600/50 shadow-2xl mb-12">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-white flex items-center gap-3">
                <Award className="w-6 h-6 text-blue-500" />
                Redis로 해결할 수 있는 문제들
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-1 gap-6">
                {/* 복잡한 조인 쿼리 성능 문제 */}
                <div className="bg-gradient-to-r from-blue-900/20 to-cyan-900/20 rounded-xl p-6 border border-blue-600/30">
                  <h4 className="font-bold text-white mb-3 flex items-center gap-2">
                    <div className="text-2xl">🔗</div>
                    복잡한 조인 쿼리 성능 문제
                  </h4>
                  <div className="text-gray-300 space-y-2">
                    <div>• <span className="font-bold text-cyan-400">기존:</span> 리뷰와 장소 데이터 조인으로 순위 계산 시간 2초 이상</div>
                    <div>• <span className="font-bold text-cyan-400">해결:</span> 계산 결과를 Redis에 캐싱해서 200ms로 단축</div>
                  </div>
                </div>
                
                {/* 데이터베이스 부하 문제 */}
                <div className="bg-gradient-to-r from-green-900/20 to-emerald-900/20 rounded-xl p-6 border border-green-600/30">
                  <h4 className="font-bold text-white mb-3 flex items-center gap-2">
                    <div className="text-2xl">💥</div>
                    데이터베이스 부하 문제
                  </h4>
                  <div className="text-gray-300 space-y-2">
                    <div>• <span className="font-bold text-green-400">기존:</span> 동일한 쿼리 반복 실행으로 DB 서버 과부하</div>
                    <div>• <span className="font-bold text-green-400">해결:</span> 쿼리 결과 캐싱으로 DB 부하 90% 감소</div>
                  </div>
                </div>

                {/* 실시간성과 최신성 양립 문제 */}
                <div className="bg-gradient-to-r from-purple-900/20 to-pink-900/20 rounded-xl p-6 border border-purple-600/30">
                  <h4 className="font-bold text-white mb-3 flex items-center gap-2">
                    <div className="text-2xl">⏰</div>
                    실시간성과 최신성 양립 문제
                  </h4>
                  <div className="text-gray-300 space-y-2">
                    <div>• <span className="font-bold text-purple-400">기존:</span> 실시간 순위는 빨라야 하지만 최신 데이터도 반영해야 함</div>
                    <div>• <span className="font-bold text-purple-400">해결:</span> TTL 10분으로 설정해서 실시간성과 최신성을 동시에 확보</div>
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