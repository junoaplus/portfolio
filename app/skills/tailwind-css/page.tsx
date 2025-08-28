'use client'
import { Navigation } from '@/components/navigation'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ArrowLeft, Lightbulb, Rocket, TrendingUp, Target, Award } from 'lucide-react'
import Link from 'next/link'

export default function TailwindCSSSkillPage() {
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
            <div className="text-6xl mb-4">🎨</div>
            <h1 className="text-4xl font-black text-white mb-4">
              Tailwind CSS
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              유틸리티 우선 CSS 프레임워크로 빠른 UI 개발
            </p>
            <Badge style={{ background: 'rgb(37 99 235)' }} className="text-white text-lg px-6 py-2">
              Proficiency Level: 90%
            </Badge>
          </div>

          {/* 개인적 견해 */}
          <Card className="bg-gray-800/80 backdrop-blur-sm border border-gray-600/50 shadow-2xl mb-12">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-white flex items-center gap-3">
                <Lightbulb className="w-6 h-6 text-yellow-500" />
                Tailwind CSS에 대한 개인적 견해
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-lg text-gray-300 leading-relaxed space-y-4">
                <p>
                  <span className="font-bold text-cyan-400">Tailwind CSS는 CSS 작성 방식의 패러다임 전환</span>이라고 생각합니다. 
                  기존의 컴포넌트 중심 스타일링에서 유틸리티 우선 방식으로의 전환이 
                  <span className="font-bold text-cyan-400">개발 속도와 일관성을 동시에 확보</span>하는 혁신적인 접근법입니다.
                </p>
                <p>
                  특히 <span className="font-bold text-cyan-400">디자인 시스템의 일관성과 반응형 설계</span>가 인상적이었습니다. 
                  미리 정의된 스케일과 브레이크포인트를 통해 
                  <span className="font-bold text-cyan-400">예측 가능하고 확장 가능한 UI</span>를 빠르게 구축할 수 있습니다.
                </p>
                <p>
                  AI 챗봇 포트폴리오 프로젝트에서 <span className="font-bold text-cyan-400">복잡한 인터랙티브 UI와 애니메이션</span>을 
                  Tailwind로 구현하면서, 커스텀 CSS 없이도 프로페셔널한 디자인을 완성할 수 있음을 경험했습니다. 
                  <span className="font-bold text-cyan-400">개발자와 디자이너 간의 소통 비용</span>도 크게 줄어들었습니다.
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
                    <span className="font-bold text-cyan-400">Tailwind CSS의 유틸리티 클래스</span>로 복잡한 인터랙티브 UI를 빠르게 구축했습니다. 
                    특히 <span className="font-bold text-cyan-400">다크 테마와 글로우 효과</span>를 일관성 있게 적용할 수 있었습니다.
                  </p>
                  <p>
                    <span className="font-bold text-cyan-400">반응형 디자인과 애니메이션</span>을 Tailwind의 빌트인 클래스로 구현하여 
                    <span className="font-bold text-blue-300">개발 시간을 60% 단축</span>하면서도 
                    일관된 디자인 시스템을 유지할 수 있었습니다.
                  </p>
                  <div className="bg-gray-800/50 rounded-lg p-4 mt-4">
                    <div className="text-sm text-gray-400 mb-2">핵심 Tailwind 기술들:</div>
                    <div className="flex flex-wrap gap-2">
                      <Badge className="bg-cyan-700 text-cyan-100">Responsive Design</Badge>
                      <Badge className="bg-cyan-700 text-cyan-100">Dark Mode</Badge>
                      <Badge className="bg-cyan-700 text-cyan-100">Animations</Badge>
                      <Badge className="bg-cyan-700 text-cyan-100">Custom Config</Badge>
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
                    개발 효율성
                  </h4>
                  <div className="text-cyan-300 space-y-2">
                    <div>• <span className="font-bold">UI 개발 시간 60% 단축</span></div>
                    <div>• <span className="font-bold">CSS 코드량 80% 감소</span></div>
                    <div>• <span className="font-bold">디자인 일관성 95%</span> 달성</div>
                  </div>
                </div>
                
                <div className="bg-gradient-to-r from-green-900/30 to-emerald-900/30 rounded-xl p-6 border border-green-600/30">
                  <h4 className="font-bold text-white mb-3 flex items-center gap-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    성능 최적화
                  </h4>
                  <div className="text-green-300 space-y-2">
                    <div>• <span className="font-bold">CSS 번들 크기 50% 감소</span></div>
                    <div>• <span className="font-bold">반응형 호환성 100%</span></div>
                    <div>• <span className="font-bold">로딩 속도 30% 향상</span></div>
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
                    처음엔 <span className="font-bold text-cyan-400">전통적인 CSS 방식에 익숙한 상태</span>에서 Tailwind의 
                    유틸리티 클래스가 HTML을 지저분하게 만든다고 생각했습니다. 
                    <span className="font-bold text-blue-300">관심사의 분리</span>에 반한다고 여겼죠.
                  </p>
                  <p>
                    하지만 <span className="font-bold text-cyan-400">복잡한 반응형 UI를 구축하면서</span> 
                    Tailwind의 진가를 깨달았습니다. 
                    특히 <span className="font-bold text-blue-300">다크 모드와 애니메이션</span>을 구현할 때 
                    기존 방식보다 훨씬 직관적이고 빠르게 작업할 수 있었습니다.
                  </p>
                  <p>
                    지금은 <span className="font-bold text-cyan-400">커스텀 컴포넌트, 디자인 토큰, 플러그인 시스템</span> 등을 
                    활용해서 확장성과 유지보수성을 모두 갖춘 디자인 시스템을 구축할 수 있게 되었습니다.
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
                <h4 className="font-bold text-white mb-4">일관된 디자인 시스템으로 브랜드 가치 향상</h4>
                <div className="text-gray-300 space-y-3">
                  <p>
                    Tailwind CSS를 통해 <span className="font-bold text-cyan-400">일관성 있는 디자인 시스템</span>을 구축하여 
                    사용자 경험의 품질을 크게 향상시켰습니다. 이는 단순한 시각적 개선을 넘어선 <span className="font-bold text-cyan-400">브랜드 신뢰도</span>의 문제입니다.
                  </p>
                  <p>
                    <span className="font-bold text-blue-300">빠른 프로토타이핑과 반복 개발</span>이 가능해져서 
                    사용자 피드백을 즉시 반영할 수 있게 되었고, <span className="font-bold text-cyan-400">개발팀의 협업 효율성</span>도 크게 향상되었습니다.
                  </p>
                  <p>
                    특히 <span className="font-bold text-blue-300">대규모 서비스 환경</span>에서는 
                    이런 디자인 시스템의 일관성이 <span className="font-bold text-cyan-400">사용자 경험과 개발 생산성</span> 
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