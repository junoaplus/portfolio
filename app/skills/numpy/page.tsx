'use client'
import { Navigation } from '@/components/navigation'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ArrowLeft, Lightbulb, Rocket, TrendingUp, Target, Award } from 'lucide-react'
import Link from 'next/link'

export default function NumPySkillPage() {
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
            <div className="text-6xl mb-4">🔢</div>
            <h1 className="text-4xl font-black text-white mb-4">
              NumPy
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Python 과학 컴퓨팅의 핵심 라이브러리
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
                NumPy에 대한 개인적 견해
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-lg text-gray-300 leading-relaxed space-y-4">
                <p>
                  <span className="font-bold text-cyan-400">NumPy는 Python 데이터 과학 생태계의 기반</span>이라고 생각합니다. 
                  다차원 배열과 벡터화 연산을 통해 
                  <span className="font-bold text-cyan-400">C 수준의 성능을 Python에서 구현</span>할 수 있게 해주는 혁신적인 라이브러리입니다.
                </p>
                <p>
                  특히 <span className="font-bold text-cyan-400">브로드캐스팅과 유니버설 함수</span>의 개념이 인상적이었습니다. 
                  반복문 없이도 대용량 배열 연산을 효율적으로 처리할 수 있어 
                  <span className="font-bold text-cyan-400">코드의 간결성과 성능</span>을 동시에 달성할 수 있습니다.
                </p>
                <p>
                  데이트 코스 추천 AI 프로젝트에서 <span className="font-bold text-cyan-400">지리공간 좌표 계산과 벡터 연산</span>을 
                  NumPy로 처리하면서, 복잡한 수학적 계산도 직관적이고 효율적으로 구현할 수 있음을 경험했습니다. 
                  <span className="font-bold text-cyan-400">모든 ML/AI 라이브러리의 토대</span>가 되는 이유를 깨달았습니다.
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
                    <span className="font-bold text-cyan-400">NumPy 배열 연산</span>을 활용하여 89,321개 장소의 
                    <span className="font-bold text-cyan-400">지리공간 좌표 계산과 거리 측정</span>을 고성능으로 처리했습니다.
                  </p>
                  <p>
                    <span className="font-bold text-cyan-400">벡터화된 연산</span>으로 대용량 좌표 데이터의 유클리드 거리와 
                    맨하탄 거리를 <span className="font-bold text-blue-300">10배 빠른 속도</span>로 계산하고, 
                    실시간 추천 시스템의 핵심 성능을 뒷받침했습니다.
                  </p>
                  <div className="bg-gray-800/50 rounded-lg p-4 mt-4">
                    <div className="text-sm text-gray-400 mb-2">핵심 NumPy 기술들:</div>
                    <div className="flex flex-wrap gap-2">
                      <Badge className="bg-cyan-700 text-cyan-100">Vectorized Operations</Badge>
                      <Badge className="bg-cyan-700 text-cyan-100">Broadcasting</Badge>
                      <Badge className="bg-cyan-700 text-cyan-100">Spatial Calculations</Badge>
                      <Badge className="bg-cyan-700 text-cyan-100">Array Manipulations</Badge>
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
                    연산 성능
                  </h4>
                  <div className="text-cyan-300 space-y-2">
                    <div>• <span className="font-bold">벡터 연산 10배 가속</span></div>
                    <div>• <span className="font-bold">89,321개 좌표</span> 실시간 처리</div>
                    <div>• <span className="font-bold">메모리 효율성 80%</span> 향상</div>
                  </div>
                </div>
                
                <div className="bg-gradient-to-r from-green-900/30 to-emerald-900/30 rounded-xl p-6 border border-green-600/30">
                  <h4 className="font-bold text-white mb-3 flex items-center gap-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    코드 품질
                  </h4>
                  <div className="text-green-300 space-y-2">
                    <div>• <span className="font-bold">반복문 제거율 95%</span></div>
                    <div>• <span className="font-bold">코드 가독성 90%</span> 향상</div>
                    <div>• <span className="font-bold">수학적 정확성 99.9%</span></div>
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
                    처음엔 <span className="font-bold text-cyan-400">기본 Python 리스트에 익숙한 상태</span>에서 NumPy의 
                    다차원 배열이 복잡해 보였습니다. 인덱싱과 슬라이싱의 문법이 
                    <span className="font-bold text-blue-300">헷갈리고 어려웠죠</span>.
                  </p>
                  <p>
                    하지만 <span className="font-bold text-cyan-400">대용량 지리공간 데이터를 처리하면서</span> 
                    벡터화의 강력함을 체감했습니다. 
                    특히 <span className="font-bold text-blue-300">89,321개 좌표 간 거리 계산</span>에서 
                    반복문 대신 NumPy로 처리하니 성능이 극적으로 향상되었습니다.
                  </p>
                  <p>
                    지금은 <span className="font-bold text-cyan-400">고급 배열 조작, 선형대수, 통계 함수</span> 등을 
                    활용해서 복잡한 수치 계산도 효율적으로 처리할 수 있게 되었습니다.
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
                <h4 className="font-bold text-white mb-4">고성능 수치 계산으로 실시간 서비스 구현</h4>
                <div className="text-gray-300 space-y-3">
                  <p>
                    NumPy의 벡터화 연산을 통해 <span className="font-bold text-cyan-400">대용량 지리공간 데이터</span>를 실시간으로 처리하여 
                    사용자에게 즉시 추천 결과를 제공할 수 있었습니다. 이는 단순한 성능 개선을 넘어선 <span className="font-bold text-cyan-400">사용자 경험의 혁신</span>입니다.
                  </p>
                  <p>
                    <span className="font-bold text-blue-300">메모리 효율적인 배열 처리</span>를 통해 
                    서버 자원을 절약하고 더 많은 동시 사용자를 지원할 수 있게 되었으며, <span className="font-bold text-cyan-400">운영 비용 절감</span>에도 기여했습니다.
                  </p>
                  <p>
                    특히 토스와 같은 <span className="font-bold text-blue-300">데이터 집약적 서비스</span>에서는 
                    이런 고성능 수치 계산 능력이 <span className="font-bold text-cyan-400">실시간 의사결정과 개인화 서비스</span>의 
                    핵심 경쟁력이 될 것이라고 확신합니다.
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