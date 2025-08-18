'use client'
import { Navigation } from '@/components/navigation'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ArrowLeft, Lightbulb, Rocket, TrendingUp, Target, Award } from 'lucide-react'
import Link from 'next/link'

export default function TypeScriptSkillPage() {
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
            <div className="text-6xl mb-4">📘</div>
            <h1 className="text-4xl font-black text-white mb-4">
              TypeScript
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              타입 안전성으로 대규모 JavaScript 애플리케이션을 구축
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
                TypeScript에 대한 개인적 견해
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-lg text-gray-300 leading-relaxed space-y-4">
                <p>
                  <span className="font-bold text-cyan-400">TypeScript는 JavaScript 개발의 안전망</span>이라고 생각합니다. 
                  동적 타입 언어의 자유로움과 정적 타입 언어의 안전성을 모두 갖춘 
                  <span className="font-bold text-cyan-400">개발자 경험의 혁신</span>입니다.
                </p>
                <p>
                  특히 <span className="font-bold text-cyan-400">컴파일 타임 에러 검출과 IntelliSense</span>의 강력함이 인상적이었습니다. 
                  런타임에서 발견될 수 있는 버그들을 개발 단계에서 미리 잡아내고, 
                  <span className="font-bold text-cyan-400">IDE의 자동완성과 리팩토링</span> 기능이 개발 생산성을 크게 향상시킵니다.
                </p>
                <p>
                  AI 챗봇 포트폴리오 프로젝트에서 <span className="font-bold text-cyan-400">복잡한 에이전트 시스템의 타입 안전성</span>을 경험하며, 
                  대규모 프로젝트에서 TypeScript 없이는 유지보수가 불가능하다고 확신하게 되었습니다. 
                  <span className="font-bold text-cyan-400">코드의 문서화 효과</span>까지 겸비한 완벽한 도구입니다.
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
              <div className="bg-gradient-to-r from-blue-900/20 to-cyan-900/20 rounded-xl p-6 border border-blue-600/30 cursor-pointer hover:bg-gradient-to-r hover:from-blue-900/30 hover:to-cyan-900/30 transition-all duration-300" onClick={() => window.open('/projects/1', '_blank')}>
                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2 hover:text-blue-300 transition-colors">
                  <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                  AI 챗봇 포트폴리오 시스템 →
                </h3>
                <div className="text-gray-300 space-y-3">
                  <p>
                    <span className="font-bold text-cyan-400">TypeScript의 강력한 타입 시스템</span>으로 LangGraph 멀티 에이전트의 
                    복잡한 상태 관리와 메시지 플로우를 <span className="font-bold text-cyan-400">타입 안전하게 구현</span>했습니다.
                  </p>
                  <p>
                    특히 <span className="font-bold text-cyan-400">제네릭과 유니온 타입</span>을 활용하여 
                    에이전트 간 통신 프로토콜을 정의하고, <span className="font-bold text-blue-300">컴파일 타임에 모든 타입 에러를 검출</span>하여 
                    런타임 안정성을 크게 향상시켰습니다.
                  </p>
                  <div className="bg-gray-800/50 rounded-lg p-4 mt-4">
                    <div className="text-sm text-gray-400 mb-2">핵심 TypeScript 기술들:</div>
                    <div className="flex flex-wrap gap-2">
                      <Badge className="bg-cyan-700 text-cyan-100">Advanced Types</Badge>
                      <Badge className="bg-cyan-700 text-cyan-100">Generics</Badge>
                      <Badge className="bg-cyan-700 text-cyan-100">Union Types</Badge>
                      <Badge className="bg-cyan-700 text-cyan-100">Type Guards</Badge>
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
                    타입 안전성 향상
                  </h4>
                  <div className="text-cyan-300 space-y-2">
                    <div>• <span className="font-bold">런타임 에러 90% 감소</span></div>
                    <div>• <span className="font-bold">컴파일 타임 검증 100%</span></div>
                    <div>• <span className="font-bold">타입 추론 정확도 95%</span> 달성</div>
                  </div>
                </div>
                
                <div className="bg-gradient-to-r from-green-900/30 to-emerald-900/30 rounded-xl p-6 border border-green-600/30">
                  <h4 className="font-bold text-white mb-3 flex items-center gap-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    개발 생산성
                  </h4>
                  <div className="text-green-300 space-y-2">
                    <div>• <span className="font-bold">자동완성 정확도 95%</span></div>
                    <div>• <span className="font-bold">리팩토링 시간 70% 단축</span></div>
                    <div>• <span className="font-bold">코드 리뷰 시간 50% 절약</span></div>
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
                    처음엔 <span className="font-bold text-cyan-400">JavaScript의 자유로움에 익숙한 상태</span>에서 TypeScript의 
                    엄격한 타입 검사가 오히려 불편했습니다. any 타입을 남발하며 
                    <span className="font-bold text-blue-300">TypeScript의 진정한 가치</span>를 놓쳤죠.
                  </p>
                  <p>
                    하지만 <span className="font-bold text-cyan-400">복잡한 AI 에이전트 시스템을 구축하면서</span> 
                    타입 안전성의 중요성을 깨달았습니다. 
                    특히 <span className="font-bold text-blue-300">멀티 에이전트 간의 메시지 타입</span>을 정의하면서 
                    컴파일 타임에 모든 호환성 이슈를 잡아낼 수 있었습니다.
                  </p>
                  <p>
                    지금은 <span className="font-bold text-cyan-400">고급 타입 시스템, 조건부 타입, 매핑된 타입</span> 등을 
                    활용해서 런타임 안전성과 개발 생산성을 모두 잡는 견고한 시스템을 구축할 수 있게 되었습니다.
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
                <h4 className="font-bold text-white mb-4">대규모 AI 시스템의 안정성 확보</h4>
                <div className="text-gray-300 space-y-3">
                  <p>
                    TypeScript의 타입 시스템을 통해 <span className="font-bold text-cyan-400">복잡한 AI 에이전트 워크플로우</span>를 
                    안전하게 관리할 수 있었습니다. 이는 단순한 개발 편의성을 넘어선 <span className="font-bold text-cyan-400">시스템 신뢰성</span>의 문제입니다.
                  </p>
                  <p>
                    <span className="font-bold text-blue-300">컴파일 타임 검증</span>을 통해 프로덕션 배포 전 모든 타입 에러를 사전 차단하고, 
                    <span className="font-bold text-cyan-400">개발팀의 협업 효율성</span>을 크게 향상시켰습니다.
                  </p>
                  <p>
                    특히 토스와 같은 <span className="font-bold text-blue-300">미션 크리티컬한 서비스</span>에서는 
                    이런 타입 안전성이 <span className="font-bold text-cyan-400">서비스 안정성과 개발자 생산성</span> 
                    모두를 보장하는 핵심 역량이 될 것이라고 확신합니다.
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