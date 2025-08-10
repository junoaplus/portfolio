'use client'
import { Navigation } from '@/components/navigation'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ArrowLeft, Lightbulb, Rocket, TrendingUp, Target, Award } from 'lucide-react'
import Link from 'next/link'

export default function GeoPySkillPage() {
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
            <div className="text-6xl mb-4">🌍</div>
            <h1 className="text-4xl font-black text-white mb-4">
              GeoPy
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Python 지리공간 라이브러리로 정확한 위치 기반 서비스 구현
            </p>
            <Badge style={{ background: 'rgb(37 99 235)' }} className="text-white text-lg px-6 py-2">
              Proficiency Level: 80%
            </Badge>
          </div>

          {/* 개인적 견해 */}
          <Card className="bg-gray-800/80 backdrop-blur-sm border border-gray-600/50 shadow-2xl mb-12">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-white flex items-center gap-3">
                <Lightbulb className="w-6 h-6 text-yellow-500" />
                GeoPy에 대한 개인적 견해
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-lg text-gray-300 leading-relaxed space-y-4">
                <p>
                  <span className="font-bold text-cyan-400">GeoPy는 위치 기반 서비스의 필수 도구</span>라고 생각합니다. 
                  복잡한 지리공간 계산을 간단한 API로 제공하여 
                  <span className="font-bold text-cyan-400">위치 기반 비즈니스 로직 구현을 크게 단순화</span>해주는 핵심 라이브러리입니다.
                </p>
                <p>
                  특히 <span className="font-bold text-cyan-400">다양한 거리 측정 알고리즘과 지오코딩</span>이 인상적이었습니다. 
                  Haversine, Vincenty 공식부터 다양한 지도 서비스 API 통합까지 
                  <span className="font-bold text-cyan-400">지리공간 처리의 모든 요구사항</span>을 충족합니다.
                </p>
                <p>
                  데이트 코스 추천 AI 프로젝트에서 <span className="font-bold text-cyan-400">89,321개 장소 간 정확한 거리 계산</span>과 
                  사용자 위치 기반 필터링을 GeoPy로 구현하면서, 
                  <span className="font-bold text-cyan-400">정교한 위치 기반 추천 시스템</span>의 핵심을 경험했습니다.
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
                    <span className="font-bold text-cyan-400">GeoPy 거리 계산 엔진</span>으로 89,321개 장소 간의 
                    정확한 거리를 계산하여 <span className="font-bold text-cyan-400">최적 데이트 코스</span>를 생성했습니다.
                  </p>
                  <p>
                    <span className="font-bold text-cyan-400">Haversine 공식과 지오코딩</span>을 활용한 
                    실시간 위치 기반 필터링으로 사용자로부터 <span className="font-bold text-blue-300">2km 이내 장소만 추천</span>하는 
                    정교한 개인화 시스템을 구현했습니다.
                  </p>
                  <div className="bg-gray-800/50 rounded-lg p-4 mt-4">
                    <div className="text-sm text-gray-400 mb-2">핵심 GeoPy 기술들:</div>
                    <div className="flex flex-wrap gap-2">
                      <Badge className="bg-cyan-700 text-cyan-100">Distance Calculation</Badge>
                      <Badge className="bg-cyan-700 text-cyan-100">Geocoding</Badge>
                      <Badge className="bg-cyan-700 text-cyan-100">Haversine Formula</Badge>
                      <Badge className="bg-cyan-700 text-cyan-100">Location Filtering</Badge>
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
                    계산 정확도
                  </h4>
                  <div className="text-cyan-300 space-y-2">
                    <div>• <span className="font-bold">89,321개 장소</span> 정확한 거리</div>
                    <div>• <span className="font-bold">거리 오차 5m</span> 이내</div>
                    <div>• <span className="font-bold">지오코딩 성공률 98%</span></div>
                  </div>
                </div>
                
                <div className="bg-gradient-to-r from-green-900/30 to-emerald-900/30 rounded-xl p-6 border border-green-600/30">
                  <h4 className="font-bold text-white mb-3 flex items-center gap-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    사용자 경험
                  </h4>
                  <div className="text-green-300 space-y-2">
                    <div>• <span className="font-bold">추천 정확도 85%</span> 달성</div>
                    <div>• <span className="font-bold">위치 기반 필터링</span> 완벽 구현</div>
                    <div>• <span className="font-bold">실시간 거리 계산</span> 최적화</div>
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
                    처음엔 <span className="font-bold text-cyan-400">단순한 유클리드 거리 계산</span>으로 충분하다고 생각했습니다. 
                    지구가 평면이 아니라는 것은 알고 있었지만 
                    <span className="font-bold text-blue-300">실제로는 큰 차이가 없을 거라고</span> 착각했죠.
                  </p>
                  <p>
                    하지만 <span className="font-bold text-cyan-400">실제 위치 데이터로 테스트하면서</span> 
                    지구 곡면을 고려한 거리 계산의 중요성을 깨달았습니다. 
                    특히 <span className="font-bold text-blue-300">서울과 같은 넓은 지역</span>에서는 
                    오차가 수백 미터까지 벌어지는 것을 확인했습니다.
                  </p>
                  <p>
                    지금은 <span className="font-bold text-cyan-400">다양한 거리 공식, 좌표계 변환, 지오펜싱</span> 등을 
                    활용해서 정교한 위치 기반 서비스도 구현할 수 있게 되었습니다.
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
                <h4 className="font-bold text-white mb-4">정확한 지리공간 처리로 위치 기반 서비스 품질 극대화</h4>
                <div className="text-gray-300 space-y-3">
                  <p>
                    GeoPy의 <span className="font-bold text-cyan-400">정밀한 거리 계산과 지오코딩</span>을 통해 
                    사용자에게 정확한 위치 기반 추천을 제공하여 서비스 신뢰도를 크게 향상시켰습니다. 이는 단순한 기술 구현을 넘어선 <span className="font-bold text-cyan-400">사용자 만족도</span>의 핵심입니다.
                  </p>
                  <p>
                    <span className="font-bold text-blue-300">효율적인 지리공간 알고리즘</span>을 통해 
                    대용량 위치 데이터를 실시간으로 처리할 수 있게 되어, <span className="font-bold text-cyan-400">서비스 응답성</span>과 확장성을 동시에 확보했습니다.
                  </p>
                  <p>
                    특히 토스와 같은 <span className="font-bold text-blue-300">O2O 서비스</span>에서는 
                    이런 정확한 위치 기반 기술이 <span className="font-bold text-cyan-400">비즈니스 핵심 가치와 사용자 경험</span>을 
                    결정하는 핵심 역량이 될 것이라고 확신합니다.
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