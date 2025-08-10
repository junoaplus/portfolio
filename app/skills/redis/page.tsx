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
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              고성능 인메모리 데이터 구조 저장소
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
                Redis에 대한 개인적 견해
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-lg text-gray-300 leading-relaxed space-y-4">
                <p>
                  <span className="font-bold text-cyan-400">Redis는 현대 웹 애플리케이션의 성능 가속기</span>라고 생각합니다. 
                  단순한 캐시를 넘어서 세션 저장소, 메시지 브로커, 실시간 리더보드까지 
                  <span className="font-bold text-cyan-400">다양한 용도로 활용할 수 있는 멀티툴</span>입니다.
                </p>
                <p>
                  특히 <span className="font-bold text-cyan-400">마이크로초 단위의 응답 시간과 초당 수백만 연산</span>이 인상적이었습니다. 
                  데이터베이스 부하를 급격히 줄여주면서도 사용자에게는 
                  <span className="font-bold text-cyan-400">즉각적인 반응성</span>을 제공할 수 있어 
                  사용자 경험이 극적으로 개선됩니다.
                </p>
                <p>
                  토스와 같은 <span className="font-bold text-cyan-400">대규모 금융 서비스</span>에서는 실시간 거래 데이터, 
                  사용자 세션 관리, API 속도 제한 등에 Redis가 필수적입니다. 
                  <span className="font-bold text-cyan-400">고가용성 클러스터링과 지속성 보장</span>으로 
                  미션 크리티컬한 서비스에서도 안심하고 사용할 수 있는 인프라입니다.
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
                  <div className="bg-gray-800/50 rounded-lg p-4 mt-4">
                    <div className="text-sm text-gray-400 mb-2">핵심 Redis 활용:</div>
                    <div className="flex flex-wrap gap-2">
                      <Badge className="bg-cyan-700 text-cyan-100">Data Caching</Badge>
                      <Badge className="bg-cyan-700 text-cyan-100">Session Management</Badge>
                      <Badge className="bg-cyan-700 text-cyan-100">Query Result Cache</Badge>
                      <Badge className="bg-cyan-700 text-cyan-100">TTL Management</Badge>
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
                    성능 최적화
                  </h4>
                  <div className="text-cyan-300 space-y-2">
                    <div>• <span className="font-bold">응답 시간 90% 단축</span> (2초 → 200ms)</div>
                    <div>• <span className="font-bold">DB 부하 90% 감소</span></div>
                    <div>• <span className="font-bold">동시 접속자 10배 확장</span></div>
                  </div>
                </div>
                
                <div className="bg-gradient-to-r from-green-900/30 to-emerald-900/30 rounded-xl p-6 border border-green-600/30">
                  <h4 className="font-bold text-white mb-3 flex items-center gap-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    캐시 효율성
                  </h4>
                  <div className="text-green-300 space-y-2">
                    <div>• <span className="font-bold">캐시 히트율 95%</span> 달성</div>
                    <div>• <span className="font-bold">TTL 기반 자동 갱신</span></div>
                    <div>• <span className="font-bold">메모리 사용량 최적화</span></div>
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
                    처음엔 <span className="font-bold text-cyan-400">단순 캐시 용도</span>로만 생각했던 Redis가 
                    실제로는 <span className="font-bold text-blue-300">다양한 데이터 구조와 고급 기능</span>을 제공한다는 걸 
                    프로젝트를 통해 깨달았습니다.
                  </p>
                  <p>
                    <span className="font-bold text-cyan-400">TTL 설정과 메모리 관리 전략</span>을 
                    체계적으로 학습하면서 캐시 무효화 문제를 해결할 수 있었습니다. 
                    특히 <span className="font-bold text-blue-300">대용량 데이터의 효율적인 캐싱 패턴</span>을 
                    실험하며 최적의 성능을 찾아가는 과정이 흥미로웠습니다.
                  </p>
                  <p>
                    지금은 <span className="font-bold text-cyan-400">Redis 클러스터링, 지속성 설정, 모니터링</span> 등을 
                    활용해서 프로덕션 환경에서도 안정적이고 고성능인 캐시 시스템을 설계할 수 있게 되었습니다.
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
                <h4 className="font-bold text-white mb-4">초고속 응답으로 사용자 경험 혁신</h4>
                <div className="text-gray-300 space-y-3">
                  <p>
                    Redis 캐싱 시스템으로 <span className="font-bold text-cyan-400">응답 시간을 90% 단축</span>하여 
                    사용자들이 데이트 코스 추천을 거의 실시간으로 받을 수 있게 되었습니다. 
                    이는 사용자 만족도와 서비스 이탈률에 직접적인 긍정적 영향을 미쳤습니다.
                  </p>
                  <p>
                    <span className="font-bold text-blue-300">데이터베이스 부하 90% 감소</span>로 
                    서버 비용을 대폭 절감하면서도 <span className="font-bold text-cyan-400">더 많은 동시 사용자를 처리</span>할 수 있게 되어 
                    서비스 확장성과 경제성을 동시에 확보했습니다.
                  </p>
                  <p>
                    특히 토스와 같은 <span className="font-bold text-blue-300">대규모 핀테크 서비스</span>에서는 
                    Redis의 <span className="font-bold text-cyan-400">초고속 처리 능력</span>이 
                    실시간 거래 승인, 사기 탐지, 개인화 추천 등에서 
                    <span className="font-bold text-cyan-400">경쟁 우위의 핵심 인프라</span>가 될 것입니다.
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