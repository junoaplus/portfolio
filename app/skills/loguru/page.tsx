'use client'
import { Navigation } from '@/components/navigation'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ArrowLeft, Lightbulb, Rocket, TrendingUp, Target, Award } from 'lucide-react'
import Link from 'next/link'

export default function LoguruSkillPage() {
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
            <div className="text-6xl mb-4">📋</div>
            <h1 className="text-4xl font-black text-white mb-4">
              Loguru
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Python의 차세대 로깅 라이브러리로 직관적이고 강력한 로그 관리
            </p>
            <Badge style={{ background: 'rgb(37 99 235)' }} className="text-white text-lg px-6 py-2">
              Proficiency Level: 70%
            </Badge>
          </div>

          {/* 개인적 견해 */}
          <Card className="bg-gray-800/80 backdrop-blur-sm border border-gray-600/50 shadow-2xl mb-12">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-white flex items-center gap-3">
                <Lightbulb className="w-6 h-6 text-yellow-500" />
                Loguru에 대한 개인적 견해
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-lg text-gray-300 leading-relaxed space-y-4">
                <p>
                  <span className="font-bold text-cyan-400">Loguru는 Python 로깅의 패러다임을 바꾼 혁신</span>이라고 생각합니다. 
                  기존 logging 모듈의 복잡한 설정을 버리고 
                  <span className="font-bold text-cyan-400">직관적이면서도 강력한 로깅 경험</span>을 제공합니다.
                </p>
                <p>
                  특히 <span className="font-bold text-cyan-400">자동 로테이션과 컬러풀한 출력</span>이 인상적이었습니다. 
                  복잡한 설정 없이도 프로덕션 레벨의 로그 관리가 가능하고 
                  <span className="font-bold text-cyan-400">개발 중에도 로그를 쉽게 추적</span>할 수 있습니다.
                </p>
                <p>
                  데이트 코스 추천 AI 프로젝트에서 <span className="font-bold text-cyan-400">마이크로서비스의 복잡한 로그 추적</span>을 
                  Loguru로 구현하면서, 디버깅과 모니터링이 
                  <span className="font-bold text-cyan-400">훨씬 효율적</span>으로 변화했음을 경험했습니다.
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
                    <span className="font-bold text-cyan-400">Loguru 구조화된 로깅</span>으로 3개 마이크로서비스의 
                    복잡한 요청 흐름과 <span className="font-bold text-cyan-400">89,321개 데이터 처리 과정</span>을 효과적으로 추적했습니다.
                  </p>
                  <p>
                    <span className="font-bold text-cyan-400">자동 로그 로테이션과 레벨별 필터링</span>으로 
                    프로덕션 환경에서 <span className="font-bold text-blue-300">효율적인 로그 관리</span>를 구현하고, 
                    실시간 디버깅과 성능 모니터링을 최적화했습니다.
                  </p>
                  <div className="bg-gray-800/50 rounded-lg p-4 mt-4">
                    <div className="text-sm text-gray-400 mb-2">핵심 Loguru 기술들:</div>
                    <div className="flex flex-wrap gap-2">
                      <Badge className="bg-cyan-700 text-cyan-100">Structured Logging</Badge>
                      <Badge className="bg-cyan-700 text-cyan-100">Auto Rotation</Badge>
                      <Badge className="bg-cyan-700 text-cyan-100">Colored Output</Badge>
                      <Badge className="bg-cyan-700 text-cyan-100">Context Tracking</Badge>
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
                    디버깅 효율성
                  </h4>
                  <div className="text-cyan-300 space-y-2">
                    <div>• <span className="font-bold">디버깅 시간 70% 단축</span></div>
                    <div>• <span className="font-bold">로그 추적 가능성 95%</span> 개선</div>
                    <div>• <span className="font-bold">에러 원인 파악 80%</span> 빨라짐</div>
                  </div>
                </div>
                
                <div className="bg-gradient-to-r from-green-900/30 to-emerald-900/30 rounded-xl p-6 border border-green-600/30">
                  <h4 className="font-bold text-white mb-3 flex items-center gap-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    운영 효율성
                  </h4>
                  <div className="text-green-300 space-y-2">
                    <div>• <span className="font-bold">로그 관리 자동화 100%</span></div>
                    <div>• <span className="font-bold">모니터링 설정 간소화</span></div>
                    <div>• <span className="font-bold">성능 분석 정확도 90%</span> 향상</div>
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
                    처음엔 <span className="font-bold text-cyan-400">기본 print 문에 익숙한 상태</span>에서 로깅이 
                    복잡하고 번거로워 보였습니다. 특히 Python logging 모듈의 
                    <span className="font-bold text-blue-300">복잡한 설정들</span>이 부담스러웠죠.
                  </p>
                  <p>
                    하지만 <span className="font-bold text-cyan-400">프로덕션 환경에서 디버깅을 경험하면서</span> 
                    체계적인 로깅의 중요성을 깨달았습니다. 
                    특히 <span className="font-bold text-blue-300">마이크로서비스 환경</span>에서는 
                    로그 없이는 문제 추적이 거의 불가능했습니다.
                  </p>
                  <p>
                    지금은 <span className="font-bold text-cyan-400">컨텍스트 바인딩, 필터링, 커스텀 포매터</span> 등을 
                    활용해서 대규모 시스템의 로그도 효율적으로 관리할 수 있게 되었습니다.
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
                <h4 className="font-bold text-white mb-4">체계적 로그 관리로 서비스 안정성과 운영 효율성 확보</h4>
                <div className="text-gray-300 space-y-3">
                  <p>
                    Loguru의 <span className="font-bold text-cyan-400">직관적이고 강력한 로깅 시스템</span>을 통해 
                    복잡한 마이크로서비스 환경에서도 문제를 빠르게 진단하고 해결할 수 있게 되었습니다. 이는 단순한 디버깅을 넘어선 <span className="font-bold text-cyan-400">서비스 안정성</span>의 확보입니다.
                  </p>
                  <p>
                    <span className="font-bold text-blue-300">자동화된 로그 관리와 구조화된 추적</span>을 통해 
                    운영팀의 작업 효율성이 크게 향상되고, <span className="font-bold text-cyan-400">장애 대응 시간</span>을 현저히 단축할 수 있었습니다.
                  </p>
                  <p>
                    특히 토스와 같은 <span className="font-bold text-blue-300">미션 크리티컬 서비스</span>에서는 
                    이런 체계적인 로그 관리가 <span className="font-bold text-cyan-400">서비스 신뢰성과 운영 효율성</span>을 
                    동시에 보장하는 핵심 인프라가 될 것이라고 확신합니다.
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