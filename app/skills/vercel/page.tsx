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
          </div>

          {/* 내가 이해한 Vercel */}
          <Card className="bg-gray-800/80 backdrop-blur-sm border border-gray-600/50 shadow-2xl mb-12">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-white flex items-center gap-3">
                <Lightbulb className="w-6 h-6 text-yellow-500" />
                내가 이해한 Vercel
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-lg text-gray-300 leading-relaxed space-y-4">
                <p>
                  <span className="font-bold text-cyan-400">처음에는 배포 환경을 어떻게 할지 고민이 많았습니다.</span> 
                  AWS나 다른 클라우드 서비스들을 알아보다가 <span className="font-bold text-cyan-400">Vercel이 가격도 저렴하고 
                  GitHub 자동 배포</span>를 지원한다는 것을 알게 되었습니다.
                </p>
                <p>
                  사용해보니 정말 <span className="font-bold text-cyan-400">빠르게 배포하기 편리했습니다.</span> 
                  GitHub에 푸시하면 자동으로 빌드되고 배포되는 과정이 몇 분 안에 끝나서 
                  <span className="font-bold text-cyan-400">개발 속도가 엄청 빨라졌습니다.</span>
                </p>
                <p>
                  찾아보니까 <span className="font-bold text-cyan-400">Edge Network와 글로벌 CDN</span> 같은 장점들이 있어서 
                  성능도 좋고, 특히 <span className="font-bold text-cyan-400">Next.js와 완벽하게 호환</span>된다는 점이 
                  정말 좋았습니다.
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
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-blue-900/20 to-cyan-900/20 rounded-xl p-6 border border-blue-600/30">
                  <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                    <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                    포트폴리오 웹사이트
                  </h3>
                  <div className="text-gray-300 space-y-3">
                    <p>
                      <span className="font-bold text-cyan-400">Next.js 15로 개발한 포트폴리오</span>를 Vercel로 배포하여 
                      <span className="font-bold text-cyan-400">자동 배포 파이프라인</span>을 구축했습니다.
                    </p>
                    <p>
                      <span className="font-bold text-cyan-400">GitHub 연동</span>으로 main 브랜치에 푸시하면 자동으로 배포되고, 
                      <span className="font-bold text-blue-300">프리뷰 URL</span>로 변경사항을 미리 확인할 수 있습니다.
                    </p>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-green-900/20 to-teal-900/20 rounded-xl p-6 border border-green-600/30 cursor-pointer hover:bg-gradient-to-r hover:from-green-900/30 hover:to-teal-900/30 transition-all duration-300" onClick={() => window.open('/date-recommendation', '_blank')}>
                  <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2 hover:text-green-300 transition-colors">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    데이트 코스 추천 AI 시스템 →
                  </h3>
                  <div className="text-gray-300 space-y-3">
                    <p>
                      <span className="font-bold text-cyan-400">Next.js 15로 개발한 프론트엔드</span>를 Vercel에 배포하여 
                      <span className="font-bold text-cyan-400">실시간 채팅 인터페이스</span>를 구현했습니다.
                    </p>
                    <p>
                      <span className="font-bold text-cyan-400">3개 마이크로서비스와 통합</span>된 UI를 
                      <span className="font-bold text-blue-300">자동 배포 파이프라인</span>으로 운영하여 
                      지속적인 기능 개선이 가능했습니다.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Vercel로 해결할 수 있는 문제들 */}
          <Card className="bg-gray-800/80 backdrop-blur-sm border border-gray-600/50 shadow-2xl mb-12">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-white flex items-center gap-3">
                <Award className="w-6 h-6 text-blue-500" />
                Vercel로 해결할 수 있는 문제들
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-1 gap-6">
                {/* 배포 환경 선택의 고민 */}
                <div className="bg-gradient-to-r from-blue-900/20 to-cyan-900/20 rounded-xl p-6 border border-blue-600/30">
                  <h4 className="font-bold text-white mb-3 flex items-center gap-2">
                    <div className="text-2xl">🤔</div>
                    배포 환경 선택의 고민
                  </h4>
                  <div className="text-gray-300 space-y-2">
                    <div>• <span className="font-bold text-cyan-400">기존:</span> AWS, GCP 등 복잡한 설정과 높은 비용으로 부담</div>
                    <div>• <span className="font-bold text-cyan-400">해결:</span> 저렴한 가격과 간단한 설정으로 즉시 배포 가능</div>
                  </div>
                </div>
                
                {/* 수동 배포의 번거로움 */}
                <div className="bg-gradient-to-r from-green-900/20 to-emerald-900/20 rounded-xl p-6 border border-green-600/30">
                  <h4 className="font-bold text-white mb-3 flex items-center gap-2">
                    <div className="text-2xl">🔧</div>
                    수동 배포의 번거로움
                  </h4>
                  <div className="text-gray-300 space-y-2">
                    <div>• <span className="font-bold text-green-400">기존:</span> 코드 변경할 때마다 수동으로 빌드하고 배포해야 함</div>
                    <div>• <span className="font-bold text-green-400">해결:</span> GitHub에 푸시하면 자동으로 빌드되고 몇 분 내 배포 완료</div>
                  </div>
                </div>

                {/* 개발 속도 저하 */}
                <div className="bg-gradient-to-r from-purple-900/20 to-pink-900/20 rounded-xl p-6 border border-purple-600/30">
                  <h4 className="font-bold text-white mb-3 flex items-center gap-2">
                    <div className="text-2xl">⚡</div>
                    개발 속도 저하
                  </h4>
                  <div className="text-gray-300 space-y-2">
                    <div>• <span className="font-bold text-purple-400">기존:</span> 배포 과정이 복잡해서 개발에 집중하기 어려움</div>
                    <div>• <span className="font-bold text-purple-400">해결:</span> 배포는 자동화되어 개발에만 집중할 수 있어 속도 향상</div>
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