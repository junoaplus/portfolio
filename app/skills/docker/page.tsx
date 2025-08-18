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
          </div>

          {/* 내가 이해한 Docker */}
          <Card className="bg-gray-800/80 backdrop-blur-sm border border-gray-600/50 shadow-2xl mb-12">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-white flex items-center gap-3">
                <Lightbulb className="w-6 h-6 text-yellow-500" />
                내가 이해한 Docker
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-lg text-gray-300 leading-relaxed space-y-4">
                <p>
                  <span className="font-bold text-cyan-400">Docker는 로컬에서 개발하고 배포할 때 개발자 편리성을 엄청 높여주는 기술입니다.</span> 
                  내 로컬 환경(가상환경으로 만들었던)을 그대로 옮겨주니까 
                  <span className="font-bold text-cyan-400">진짜 편했습니다.</span>
                </p>
                <p>
                  "내 컴퓨터에서는 잘 되는데"라는 문제를 완전히 해결해줬습니다. 
                  특히 <span className="font-bold text-cyan-400">Python 가상환경이나 의존성 설치 문제</span>에서 
                  완전히 자유로워졌습니다.
                </p>
                <p>
                  다만 <span className="font-bold text-cyan-400">Docker로 업로드할 때는 프로젝트를 완성하고 하는 게 좋습니다.</span> 
                  계속 바뀌고 있는 개발 환경이라면 오히려 Docker가 좀 힘들 수 있습니다. 
                  이미지 빌드하고 컨테이너 재시작하는 게 번거로우니까요.
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
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Docker로 해결할 수 있는 문제들 */}
          <Card className="bg-gray-800/80 backdrop-blur-sm border border-gray-600/50 shadow-2xl mb-12">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-white flex items-center gap-3">
                <Award className="w-6 h-6 text-blue-500" />
                Docker로 해결할 수 있는 문제들
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-1 gap-6">
                {/* 가상환경 의존성 문제 */}
                <div className="bg-gradient-to-r from-blue-900/20 to-cyan-900/20 rounded-xl p-6 border border-blue-600/30">
                  <h4 className="font-bold text-white mb-3 flex items-center gap-2">
                    <div className="text-2xl">🐍</div>
                    Python 가상환경 의존성 문제
                  </h4>
                  <div className="text-gray-300 space-y-2">
                    <div>• <span className="font-bold text-cyan-400">기존:</span> 로컬 가상환경 설정하고 배포할 때 또 다시 설정 반복</div>
                    <div>• <span className="font-bold text-cyan-400">해결:</span> 컨테이너로 로컬 환경을 그대로 패키징해서 이동</div>
                  </div>
                </div>
                
                {/* "내 컴퓨터에서는 잘 되는데" 문제 */}
                <div className="bg-gradient-to-r from-green-900/20 to-emerald-900/20 rounded-xl p-6 border border-green-600/30">
                  <h4 className="font-bold text-white mb-3 flex items-center gap-2">
                    <div className="text-2xl">💻</div>
                    "내 컴퓨터에서는 잘 되는데" 문제
                  </h4>
                  <div className="text-gray-300 space-y-2">
                    <div>• <span className="font-bold text-green-400">기존:</span> 로컬에서 잘 되던 코드가 서버에서 안 돌아가는 문제</div>
                    <div>• <span className="font-bold text-green-400">해결:</span> 동일한 환경을 보장해서 어디서든 똑같이 실행</div>
                  </div>
                </div>

                {/* 개발 중 환경 관리 복잡성 */}
                <div className="bg-gradient-to-r from-purple-900/20 to-pink-900/20 rounded-xl p-6 border border-purple-600/30">
                  <h4 className="font-bold text-white mb-3 flex items-center gap-2">
                    <div className="text-2xl">⚠️</div>
                    완성된 프로젝트에 적합 (주의사항)
                  </h4>
                  <div className="text-gray-300 space-y-2">
                    <div>• <span className="font-bold text-purple-400">기존:</span> 계속 변경되는 개발 중 프로젝트에 Docker 적용시 번거로움</div>
                    <div>• <span className="font-bold text-purple-400">해결:</span> 프로젝트 완성 후 최종 배포 단계에서 사용하는 것이 효율적</div>
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