'use client'
import { Navigation } from '@/components/navigation'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ArrowLeft, Lightbulb, Rocket, TrendingUp, Target, Award } from 'lucide-react'
import Link from 'next/link'

export default function DockerSkillPage() {
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
            <div className="text-6xl mb-4">🐳</div>
            <h1 className="text-4xl font-black text-white mb-4">
              Docker
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              컨테이너화 기술로 일관된 배포 환경 구축
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
                Docker에 대한 개인적 견해
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-lg text-gray-300 leading-relaxed space-y-4">
                <p>
                  <span className="font-bold text-cyan-400">Docker는 개발과 배포의 패러다임을 바꾼 혁신</span>이라고 생각합니다. 
                  "내 컴퓨터에서는 잘 되는데"라는 말을 역사 속으로 보내며 
                  <span className="font-bold text-cyan-400">일관된 환경에서의 안정적인 배포</span>를 가능하게 했습니다.
                </p>
                <p>
                  특히 <span className="font-bold text-cyan-400">이미지 레이어링과 캐싱 시스템</span>이 인상적이었습니다. 
                  변경된 부분만 재빌드하는 효율성과 
                  <span className="font-bold text-cyan-400">마이크로서비스 아키텍처</span>와의 완벽한 궁합이 놀라웠습니다.
                </p>
                <p>
                  데이트 코스 추천 AI 프로젝트에서 <span className="font-bold text-cyan-400">3개 마이크로서비스를 Docker로 컨테이너화</span>하면서, 
                  개발 환경과 프로덕션 환경의 일치성을 확보하고 
                  <span className="font-bold text-cyan-400">배포 복잡성을 크게 단순화</span>할 수 있었습니다.
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
                    <span className="font-bold text-cyan-400">Docker Compose</span>를 활용하여 3개 마이크로서비스(메인, 플레이스, AI 엔진)와 
                    PostgreSQL, Redis를 <span className="font-bold text-cyan-400">통합 오케스트레이션</span>으로 관리했습니다.
                  </p>
                  <p>
                    <span className="font-bold text-cyan-400">멀티 스테이지 빌드</span>를 구현하여 프로덕션 이미지 크기를 60% 줄이고, 
                    <span className="font-bold text-blue-300">개발-테스트-운영 환경의 완전한 일치</span>를 달성하여 
                    배포 관련 이슈를 90% 이상 제거했습니다.
                  </p>
                  <div className="bg-gray-800/50 rounded-lg p-4 mt-4">
                    <div className="text-sm text-gray-400 mb-2">핵심 Docker 기술들:</div>
                    <div className="flex flex-wrap gap-2">
                      <Badge className="bg-cyan-700 text-cyan-100">Multi-stage Build</Badge>
                      <Badge className="bg-cyan-700 text-cyan-100">Docker Compose</Badge>
                      <Badge className="bg-cyan-700 text-cyan-100">Microservices</Badge>
                      <Badge className="bg-cyan-700 text-cyan-100">Volume Management</Badge>
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
                    배포 효율성
                  </h4>
                  <div className="text-cyan-300 space-y-2">
                    <div>• <span className="font-bold">배포 시간 80% 단축</span></div>
                    <div>• <span className="font-bold">환경 일치성 100%</span> 달성</div>
                    <div>• <span className="font-bold">배포 실패율 90%</span> 감소</div>
                  </div>
                </div>
                
                <div className="bg-gradient-to-r from-green-900/30 to-emerald-900/30 rounded-xl p-6 border border-green-600/30">
                  <h4 className="font-bold text-white mb-3 flex items-center gap-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    자원 최적화
                  </h4>
                  <div className="text-green-300 space-y-2">
                    <div>• <span className="font-bold">이미지 크기 60% 감소</span></div>
                    <div>• <span className="font-bold">메모리 사용량 40% 최적화</span></div>
                    <div>• <span className="font-bold">서버 자원 효율성 70%</span> 향상</div>
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
                    처음엔 <span className="font-bold text-cyan-400">가상머신에 익숙한 상태</span>에서 컨테이너의 
                    경량성이 의심스러웠습니다. 어떻게 이렇게 빠르게 실행되는지 
                    <span className="font-bold text-blue-300">이해하기 어려웠죠</span>.
                  </p>
                  <p>
                    하지만 <span className="font-bold text-cyan-400">복잡한 마이크로서비스 아키텍처를 구축하면서</span> 
                    Docker의 진가를 깨달았습니다. 
                    특히 <span className="font-bold text-blue-300">서비스 간 격리와 스케일링</span>에서 
                    컨테이너화의 장점을 확실히 체감할 수 있었습니다.
                  </p>
                  <p>
                    지금은 <span className="font-bold text-cyan-400">도커 네트워킹, 볼륨 관리, 시크릿 관리</span> 등을 
                    활용하여 프로덕션 레벨의 컨테이너 오케스트레이션을 구축할 수 있게 되었습니다.
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
                <h4 className="font-bold text-white mb-4">안정적인 컨테이너화로 서비스 신뢰성 향상</h4>
                <div className="text-gray-300 space-y-3">
                  <p>
                    Docker를 통한 <span className="font-bold text-cyan-400">일관된 배포 환경</span>을 구축하여 
                    "내 컴퓨터에서는 잘 되는데" 문제를 완전히 해결했습니다. 이는 단순한 기술적 개선을 넘어선 <span className="font-bold text-cyan-400">비즈니스 신뢰성</span>의 확보입니다.
                  </p>
                  <p>
                    <span className="font-bold text-blue-300">마이크로서비스 아키텍처</span>의 안정적인 운영을 통해 
                    각 서비스의 독립적인 확장과 업데이트가 가능해져서, <span className="font-bold text-cyan-400">비즈니스 민첩성</span>이 크게 향상되었습니다.
                  </p>
                  <p>
                    특히 토스와 같은 <span className="font-bold text-blue-300">대규모 서비스 환경</span>에서는 
                    이런 컨테이너 기술이 <span className="font-bold text-cyan-400">안정적인 서비스 운영과 빠른 기능 배포</span>의 
                    핵심 인프라가 될 것이라고 확신합니다.
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