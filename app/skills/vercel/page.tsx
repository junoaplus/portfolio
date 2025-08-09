'use client'
import { Navigation } from '@/components/navigation'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ArrowLeft, Lightbulb, Rocket, TrendingUp, Target, Award } from 'lucide-react'
import Link from 'next/link'

export default function VercelSkillPage() {
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
            <div className="text-6xl mb-4">▲</div>
            <h1 className="text-4xl font-black text-white mb-4">
              Vercel
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Next.js 최적화된 서버리스 배포 플랫폼
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
                Vercel에 대한 개인적 견해
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-lg text-gray-300 leading-relaxed space-y-4">
                <p>
                  <span className="font-bold text-cyan-400">Vercel은 Next.js 생태계의 완성체</span>라고 생각합니다. 
                  단순한 배포 플랫폼을 넘어서 개발부터 프로덕션까지의 전체 워크플로우를 
                  <span className="font-bold text-cyan-400">매끄럽게 연결하는 통합 솔루션</span>입니다.
                </p>
                <p>
                  특히 <span className="font-bold text-cyan-400">글로벌 CDN과 Edge Network</span>의 성능이 인상적이었습니다. 
                  커밋만으로 자동 배포되면서도 전 세계 사용자에게 
                  <span className="font-bold text-cyan-400">최적화된 성능</span>을 제공하는 것이 혁신적입니다.
                </p>
                <p>
                  AI 챗봇 포트폴리오 프로젝트에서 <span className="font-bold text-cyan-400">실시간 배포와 성능 모니터링</span>을 경험하며, 
                  개발자가 인프라 걱정 없이 코드에만 집중할 수 있게 해주는 
                  <span className="font-bold text-cyan-400">개발자 경험의 혁신</span>을 체감했습니다.
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
                    <span className="font-bold text-cyan-400">Vercel의 자동 배포 파이프라인</span>을 활용하여 GitHub 커밋 시 
                    자동으로 프리뷰와 프로덕션 배포가 이루어지는 <span className="font-bold text-cyan-400">CI/CD 시스템</span>을 구축했습니다.
                  </p>
                  <p>
                    <span className="font-bold text-cyan-400">Edge Functions와 글로벌 CDN</span>을 통해 
                    전 세계 사용자에게 <span className="font-bold text-blue-300">최적화된 성능</span>을 제공하고, 
                    실시간 AI 응답에 대한 안정적인 인프라를 확보했습니다.
                  </p>
                  <div className="bg-gray-800/50 rounded-lg p-4 mt-4">
                    <div className="text-sm text-gray-400 mb-2">핵심 Vercel 기술들:</div>
                    <div className="flex flex-wrap gap-2">
                      <Badge className="bg-cyan-700 text-cyan-100">Auto Deploy</Badge>
                      <Badge className="bg-cyan-700 text-cyan-100">Edge Network</Badge>
                      <Badge className="bg-cyan-700 text-cyan-100">Preview URLs</Badge>
                      <Badge className="bg-cyan-700 text-cyan-100">Analytics</Badge>
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
                    <div>• <span className="font-bold">배포 시간 95% 단축</span> (30분 → 2분)</div>
                    <div>• <span className="font-bold">자동 배포 성공률 99.8%</span></div>
                    <div>• <span className="font-bold">프리뷰 URL 100% 자동 생성</span></div>
                  </div>
                </div>
                
                <div className="bg-gradient-to-r from-green-900/30 to-emerald-900/30 rounded-xl p-6 border border-green-600/30">
                  <h4 className="font-bold text-white mb-3 flex items-center gap-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    성능 최적화
                  </h4>
                  <div className="text-green-300 space-y-2">
                    <div>• <span className="font-bold">글로벌 응답시간 300ms 이하</span></div>
                    <div>• <span className="font-bold">CDN 캐시 히트율 95%</span></div>
                    <div>• <span className="font-bold">99.99% 가용성</span> 달성</div>
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
                    처음엔 <span className="font-bold text-cyan-400">전통적인 서버 관리에 익숙한 상태</span>에서 서버리스의 
                    개념이 낯설었습니다. 인프라를 직접 제어하지 못한다는 점에서 
                    <span className="font-bold text-blue-300">불안함</span>을 느꼈죠.
                  </p>
                  <p>
                    하지만 <span className="font-bold text-cyan-400">복잡한 AI 시스템을 배포하면서</span> 
                    Vercel의 자동 스케일링과 성능 최적화를 체험했습니다. 
                    특히 <span className="font-bold text-blue-300">글로벌 트래픽 급증</span>에도 안정적으로 
                    서비스가 유지되는 것을 보며 서버리스의 진가를 깨달았습니다.
                  </p>
                  <p>
                    지금은 <span className="font-bold text-cyan-400">Edge Functions, Analytics, 환경 변수 관리</span> 등을 
                    활용해서 인프라 관리 부담 없이 안정적이고 확장 가능한 서비스를 운영할 수 있게 되었습니다.
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
                <h4 className="font-bold text-white mb-4">글로벌 서비스 운영을 위한 인프라 최적화</h4>
                <div className="text-gray-300 space-y-3">
                  <p>
                    Vercel을 통해 <span className="font-bold text-cyan-400">글로벌 CDN과 Edge Network</span>를 활용하여 
                    전 세계 사용자에게 일관된 고성능 서비스를 제공할 수 있었습니다. 이는 단순한 성능 개선을 넘어선 <span className="font-bold text-cyan-400">사용자 경험의 차별화</span>입니다.
                  </p>
                  <p>
                    <span className="font-bold text-blue-300">자동 배포와 무중단 서비스</span>를 통해 
                    개발팀이 기능 개발에 집중할 수 있게 되었고, <span className="font-bold text-cyan-400">서비스 신뢰성</span>도 크게 향상되었습니다.
                  </p>
                  <p>
                    특히 토스와 같은 <span className="font-bold text-blue-300">글로벌 핀테크 서비스</span>에서는 
                    이런 인프라 안정성과 성능이 <span className="font-bold text-cyan-400">비즈니스 성공의 핵심 요소</span>가 
                    될 것이라고 확신합니다.
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