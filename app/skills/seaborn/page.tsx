'use client'
import { Navigation } from '@/components/navigation'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ArrowLeft, Lightbulb, Rocket, TrendingUp, Target, Award } from 'lucide-react'
import Link from 'next/link'

export default function SeabornSkillPage() {
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
              Seaborn
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Statistical data visualization library for beautiful and informative plots
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
                Seaborn에 대한 개인적 견해
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-lg text-gray-300 leading-relaxed space-y-4">
                <p>
                  <span className="font-bold text-cyan-400">Seaborn은 matplotlib의 완벽한 상위 호환</span>이라고 생각합니다. 
                  통계적 시각화에 특화되어 복잡한 데이터 관계를 
                  <span className="font-bold text-cyan-400">한 줄의 코드로 아름답게 표현</span>할 수 있는 놀라운 라이브러리입니다.
                </p>
                <p>
                  특히 <span className="font-bold text-cyan-400">built-in 통계 기능과 테마 시스템</span>이 인상적이었습니다. 
                  상관관계, 분포, 회귀선까지 자동으로 계산해서 표시하고 
                  <span className="font-bold text-cyan-400">일관된 스타일</span>을 제공하는 것이 뛰어납니다.
                </p>
                <p>
                  신문 이탈 예측과 간호사 퇴사 예측 프로젝트에서 <span className="font-bold text-cyan-400">탐색적 데이터 분석과 피쳐 관계 분석</span>을 
                  Seaborn으로 구현하면서, 데이터 패턴을 빠르고 직관적으로 파악할 수 있는 
                  <span className="font-bold text-cyan-400">EDA의 핵심 도구</span>임을 경험했습니다.
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
                <div className="bg-gradient-to-r from-purple-900/20 to-pink-900/20 rounded-xl p-6 border border-purple-600/30 cursor-pointer hover:bg-gradient-to-r hover:from-purple-900/30 hover:to-pink-900/30 transition-all duration-300" onClick={() => window.open('/newspaper-churn', '_blank')}>
                  <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2 hover:text-purple-300 transition-colors">
                    <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                    신문 구독자 이탈 예측 분석 →
                  </h3>
                  <div className="text-gray-300 space-y-3">
                    <p>
                      <span className="font-bold text-cyan-400">Seaborn 통계 시각화</span>로 구독자 이탈 패턴을 
                      다각도로 분석하고 <span className="font-bold text-cyan-400">상관관계 매트릭스와 분포 차트</span>를 생성했습니다.
                    </p>
                    <p>
                      <span className="font-bold text-cyan-400">Pairplot과 heatmap</span>을 활용하여 
                      <span className="font-bold text-blue-300">피쳐 간 복잡한 관계</span>를 한눈에 파악하고 
                      모델링 전략 수립에 활용했습니다.
                    </p>
                  </div>
                </div>
                
                <div className="bg-gradient-to-r from-indigo-900/20 to-blue-900/20 rounded-xl p-6 border border-indigo-600/30 cursor-pointer hover:bg-gradient-to-r hover:from-indigo-900/30 hover:to-blue-900/30 transition-all duration-300" onClick={() => window.open('/nurse-salary', '_blank')}>
                  <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2 hover:text-indigo-300 transition-colors">
                    <div className="w-3 h-3 bg-indigo-500 rounded-full"></div>
                    간호사 퇴사 예측 분석 →
                  </h3>
                  <div className="text-gray-300 space-y-3">
                    <p>
                      <span className="font-bold text-cyan-400">Seaborn 고급 플롯</span>으로 간호사 근무 조건과 
                      퇴사율 간의 관계를 <span className="font-bold text-cyan-400">통계적으로 분석</span>했습니다.
                    </p>
                    <p>
                      <span className="font-bold text-cyan-400">Violin plot과 box plot</span>을 통해 
                      그룹별 분포 차이를 <span className="font-bold text-blue-300">시각적으로 비교</span>하고 
                      유의미한 패턴을 발굴했습니다.
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-gray-800/50 rounded-lg p-4 mt-6">
                <div className="text-sm text-gray-400 mb-2">핵심 Seaborn 기술들:</div>
                <div className="flex flex-wrap gap-2">
                  <Badge className="bg-cyan-700 text-cyan-100">Pairplot</Badge>
                  <Badge className="bg-cyan-700 text-cyan-100">Heatmap</Badge>
                  <Badge className="bg-cyan-700 text-cyan-100">Violin Plot</Badge>
                  <Badge className="bg-cyan-700 text-cyan-100">Statistical Plots</Badge>
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
                    EDA 효율성
                  </h4>
                  <div className="text-cyan-300 space-y-2">
                    <div>• <span className="font-bold">탐색 시간 80% 단축</span></div>
                    <div>• <span className="font-bold">패턴 발견 90%</span> 향상</div>
                    <div>• <span className="font-bold">통계적 인사이트</span> 자동 생성</div>
                  </div>
                </div>
                
                <div className="bg-gradient-to-r from-green-900/30 to-emerald-900/30 rounded-xl p-6 border border-green-600/30">
                  <h4 className="font-bold text-white mb-3 flex items-center gap-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    시각화 품질
                  </h4>
                  <div className="text-green-300 space-y-2">
                    <div>• <span className="font-bold">아름다운 기본 테마</span></div>
                    <div>• <span className="font-bold">통계 정보 자동 표시</span></div>
                    <div>• <span className="font-bold">코드 간결성 95%</span> 향상</div>
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
                    처음엔 <span className="font-bold text-cyan-400">matplotlib으로 모든 차트</span>를 직접 만들려고 했습니다. 
                    상관관계 히트맵 하나 만드는데도 
                    <span className="font-bold text-blue-300">수십 줄의 코드</span>가 필요했죠.
                  </p>
                  <p>
                    하지만 <span className="font-bold text-cyan-400">Seaborn의 sns.heatmap()을 사용하면서</span> 
                    완전히 생각이 바뀌었습니다. 
                    특히 <span className="font-bold text-blue-300">pairplot으로 모든 변수 관계</span>를 
                    한 번에 볼 수 있다는 것이 놀라웠습니다.
                  </p>
                  <p>
                    지금은 <span className="font-bold text-cyan-400">FacetGrid, 커스텀 팔레트, 통계적 추정</span> 등을 
                    활용해서 복잡한 다차원 데이터도 효과적으로 탐색할 수 있게 되었습니다.
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
                <h4 className="font-bold text-white mb-4">효율적인 통계 시각화로 데이터 인사이트 발굴 가속화</h4>
                <div className="text-gray-300 space-y-3">
                  <p>
                    Seaborn의 <span className="font-bold text-cyan-400">통계적 시각화 기능</span>을 통해 
                    복잡한 데이터 패턴을 빠르게 발견하고 가설을 검증할 수 있게 되었습니다. 이는 단순한 차트 생성을 넘어선 <span className="font-bold text-cyan-400">데이터 탐험의 혁신</span>입니다.
                  </p>
                  <p>
                    <span className="font-bold text-blue-300">간결한 코드로 고품질 시각화</span>를 생성하여 
                    데이터 분석 생산성이 크게 향상되고, <span className="font-bold text-cyan-400">의사결정 속도</span>를 획기적으로 개선했습니다.
                  </p>
                  <p>
                    특히 토스와 같은 <span className="font-bold text-blue-300">데이터 기반 의사결정</span> 조직에서는 
                    이런 효율적인 EDA 능력이 <span className="font-bold text-cyan-400">비즈니스 인사이트 발굴과 전략 수립</span>의 
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