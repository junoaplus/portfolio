'use client'
import { Navigation } from '@/components/navigation'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ArrowLeft, Lightbulb, Rocket, TrendingUp, Target, Award } from 'lucide-react'
import Link from 'next/link'

export default function ReactSkillPage() {
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
            <div className="text-6xl mb-4">⚛️</div>
            <h1 className="text-4xl font-black text-white mb-4">
              React
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              컴포넌트 기반 사용자 인터페이스 라이브러리
            </p>
            <Badge style={{ background: 'rgb(37 99 235)' }} className="text-white text-lg px-6 py-2">
              Proficiency Level: 95%
            </Badge>
          </div>

          {/* 개인적 견해 */}
          <Card className="bg-gray-800/80 backdrop-blur-sm border border-gray-600/50 shadow-2xl mb-12">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-white flex items-center gap-3">
                <Lightbulb className="w-6 h-6 text-yellow-500" />
                React에 대한 개인적 견해
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-lg text-gray-300 leading-relaxed space-y-4">
                <p>
                  <span className="font-bold text-cyan-400">React는 프론트엔드 개발의 게임 체인저</span>라고 생각합니다. 
                  컴포넌트 기반 아키텍처와 선언적 프로그래밍 패러다임을 통해 
                  <span className="font-bold text-cyan-400">복잡한 UI를 직관적으로 구조화</span>할 수 있게 해줍니다.
                </p>
                <p>
                  특히 <span className="font-bold text-cyan-400">Virtual DOM과 재조정 알고리즘</span>이 인상적이었습니다. 
                  상태 변화에 따른 효율적인 렌더링 최적화가 
                  <span className="font-bold text-cyan-400">대규모 애플리케이션의 성능</span>을 크게 향상시킵니다.
                </p>
                <p>
                  AI 챗봇 포트폴리오 프로젝트에서 <span className="font-bold text-cyan-400">복잡한 상태 관리와 실시간 UI 업데이트</span>를 
                  React로 구현하면서, Hooks의 강력함과 함수형 컴포넌트의 우아함을 경험했습니다. 
                  <span className="font-bold text-cyan-400">재사용성과 유지보수성</span>의 완벽한 균형을 제공합니다.
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
              <div className="space-y-4">
                <div className="bg-gradient-to-r from-blue-900/20 to-cyan-900/20 rounded-xl p-6 border border-blue-600/30 cursor-pointer hover:bg-gradient-to-r hover:from-blue-900/30 hover:to-cyan-900/30 transition-all duration-300" onClick={() => window.open('/projects/1', '_blank')}>
                  <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2 hover:text-blue-300 transition-colors">
                    <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                    AI 챗봇 포트폴리오 →
                  </h3>
                  <div className="text-gray-300 space-y-3">
                    <p>
                      <span className="font-bold text-cyan-400">React Hooks와 Context API</span>를 활용하여 
                      복잡한 AI 에이전트 상태를 효율적으로 관리하고 <span className="font-bold text-cyan-400">실시간 스트리밍 UI</span>를 구현했습니다.
                    </p>
                    <div className="bg-gray-800/50 rounded-lg p-4 mt-4">
                      <div className="text-sm text-gray-400 mb-2">핵심 React 기술들:</div>
                      <div className="flex flex-wrap gap-2">
                        <Badge className="bg-cyan-700 text-cyan-100">Custom Hooks</Badge>
                        <Badge className="bg-cyan-700 text-cyan-100">Context API</Badge>
                        <Badge className="bg-cyan-700 text-cyan-100">Streaming UI</Badge>
                        <Badge className="bg-cyan-700 text-cyan-100">Suspense</Badge>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-green-900/20 to-teal-900/20 rounded-xl p-6 border border-green-600/30 cursor-pointer hover:bg-gradient-to-r hover:from-green-900/30 hover:to-teal-900/30 transition-all duration-300" onClick={() => window.open('/date-recommendation', '_blank')}>
                  <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2 hover:text-green-300 transition-colors">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    데이트 코스 추천 AI →
                  </h3>
                  <div className="text-gray-300 space-y-3">
                    <p>
                      <span className="font-bold text-cyan-400">React 컴포넌트 기반</span>으로 대화형 추천 인터페이스를 구축하여 
                      사용자와 AI 간의 자연스러운 상호작용을 구현했습니다.
                    </p>
                    <div className="bg-gray-800/50 rounded-lg p-4 mt-4">
                      <div className="text-sm text-gray-400 mb-2">사용 기술:</div>
                      <div className="flex flex-wrap gap-2">
                        <Badge className="bg-green-700 text-green-100">Interactive UI</Badge>
                        <Badge className="bg-green-700 text-green-100">State Management</Badge>
                        <Badge className="bg-green-700 text-green-100">API Integration</Badge>
                      </div>
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
                    개발 생산성
                  </h4>
                  <div className="text-cyan-300 space-y-2">
                    <div>• <span className="font-bold">컴포넌트 재사용률 90%</span></div>
                    <div>• <span className="font-bold">개발 시간 50% 단축</span></div>
                    <div>• <span className="font-bold">코드 유지보수성 95%</span> 향상</div>
                  </div>
                </div>
                
                <div className="bg-gradient-to-r from-green-900/30 to-emerald-900/30 rounded-xl p-6 border border-green-600/30">
                  <h4 className="font-bold text-white mb-3 flex items-center gap-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    성능 최적화
                  </h4>
                  <div className="text-green-300 space-y-2">
                    <div>• <span className="font-bold">렌더링 성능 80% 향상</span></div>
                    <div>• <span className="font-bold">메모리 사용량 40% 감소</span></div>
                    <div>• <span className="font-bold">사용자 경험 95점</span> 달성</div>
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
                    처음엔 <span className="font-bold text-cyan-400">jQuery와 Vanilla JS에 익숙한 상태</span>에서 React의 
                    컴포넌트 기반 사고가 낯설었습니다. JSX 문법과 상태 관리 개념이 
                    <span className="font-bold text-blue-300">기존 방식과 너무 달라서</span> 혼란스러웠죠.
                  </p>
                  <p>
                    하지만 <span className="font-bold text-cyan-400">복잡한 AI 인터페이스를 구축하면서</span> 
                    React의 선언적 프로그래밍과 단방향 데이터 플로우의 장점을 체감했습니다. 
                    특히 <span className="font-bold text-blue-300">상태 변화에 따른 자동 UI 업데이트</span>가 
                    개발 생산성을 혁신적으로 향상시켰습니다.
                  </p>
                  <p>
                    지금은 <span className="font-bold text-cyan-400">고급 패턴, 성능 최적화, 커스텀 훅</span> 등을 
                    활용해서 확장성과 재사용성을 모두 갖춘 대규모 애플리케이션을 구축할 수 있게 되었습니다.
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
                <h4 className="font-bold text-white mb-4">사용자 중심의 인터랙티브 경험 구축</h4>
                <div className="text-gray-300 space-y-3">
                  <p>
                    React를 통해 <span className="font-bold text-cyan-400">직관적이고 반응성 높은 사용자 인터페이스</span>를 구축하여 
                    사용자 참여도와 만족도를 크게 향상시켰습니다. 이는 단순한 기능 구현을 넘어선 <span className="font-bold text-cyan-400">사용자 경험의 혁신</span>입니다.
                  </p>
                  <p>
                    <span className="font-bold text-blue-300">컴포넌트 기반 개발</span>을 통해 
                    개발팀의 협업 효율성이 크게 향상되었고, <span className="font-bold text-cyan-400">유지보수 비용</span>도 현저히 감소했습니다.
                  </p>
                  <p>
                    특히 토스와 같은 <span className="font-bold text-blue-300">사용자 중심 서비스</span>에서는 
                    이런 React의 강점이 <span className="font-bold text-cyan-400">비즈니스 성공과 사용자 만족</span>을 
                    동시에 달성하는 핵심 역량이 될 것이라고 확신합니다.
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