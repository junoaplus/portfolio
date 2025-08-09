'use client'
import { Navigation } from '@/components/navigation'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ArrowLeft, Lightbulb, Rocket, TrendingUp, Target, Award } from 'lucide-react'
import Link from 'next/link'

export default function PandasSkillPage() {
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
            <div className="text-6xl mb-4">🐼</div>
            <h1 className="text-4xl font-black text-white mb-4">
              pandas
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Python 데이터 분석의 필수 라이브러리
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
                pandas에 대한 개인적 견해
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-lg text-gray-300 leading-relaxed space-y-4">
                <p>
                  <span className="font-bold text-cyan-400">pandas는 데이터 분석의 만능 도구</span>라고 생각합니다. 
                  SQL의 직관적인 데이터 조작과 Excel의 편리함을 Python에서 구현한 
                  <span className="font-bold text-cyan-400">데이터 사이언티스트의 필수 무기</span>입니다.
                </p>
                <p>
                  특히 <span className="font-bold text-cyan-400">DataFrame과 Series의 강력한 기능</span>이 인상적이었습니다. 
                  복잡한 데이터 정제, 변환, 집계 작업을 몇 줄의 코드로 해결할 수 있어 
                  <span className="font-bold text-cyan-400">데이터 분석 생산성을 극대화</span>할 수 있습니다.
                </p>
                <p>
                  토스와 같은 <span className="font-bold text-cyan-400">대규모 데이터 기반 서비스</span>에서는 
                  고객 행동 분석, 거래 패턴 탐지, 비즈니스 지표 계산에 pandas가 필수적입니다. 
                  <span className="font-bold text-cyan-400">빠른 프로토타이핑과 실시간 데이터 처리</span>로 
                  데이터 기반 의사결정을 지원하는 핵심 도구입니다.
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
                <div className="bg-gradient-to-r from-blue-900/20 to-cyan-900/20 rounded-xl p-6 border border-blue-600/30 cursor-pointer hover:bg-gradient-to-r hover:from-blue-900/30 hover:to-cyan-900/30 transition-all duration-300" onClick={() => window.open('/newspaper-churn', '_blank')}>
                  <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2 hover:text-blue-300 transition-colors">
                    <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                    신문 구독자 이탈 예측 →
                  </h3>
                  <div className="text-gray-300 space-y-3">
                    <p>
                      <span className="font-bold text-cyan-400">복잡한 데이터 전처리와 EDA</span>에서 pandas를 핵심적으로 활용했습니다. 
                      범위형 데이터($30,000-$39,999) 변환, 결측값 처리, 
                      <span className="font-bold text-cyan-400">카테고리별 이탈 비율 분석</span> 등을 효율적으로 수행했습니다.
                    </p>
                  </div>
                </div>
                
                <div className="bg-gradient-to-r from-green-900/20 to-teal-900/20 rounded-xl p-6 border border-green-600/30 cursor-pointer hover:bg-gradient-to-r hover:from-green-900/30 hover:to-teal-900/30 transition-all duration-300" onClick={() => window.open('/nurse-salary', '_blank')}>
                  <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2 hover:text-green-300 transition-colors">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    미국 간호사 퇴사 예측 →
                  </h3>
                  <div className="text-gray-300 space-y-3">
                    <p>
                      <span className="font-bold text-cyan-400">1676명→822명→794명 체계적 데이터 정제</span>에서 
                      pandas의 강력한 필터링과 집계 기능을 활용했습니다. 
                      <span className="font-bold text-cyan-400">변수 간 상관관계 분석</span>과 시각화를 통해 인사이트를 도출했습니다.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-800/50 rounded-lg p-4 mt-6">
                <div className="text-sm text-gray-400 mb-2">핵심 pandas 활용:</div>
                <div className="flex flex-wrap gap-2">
                  <Badge className="bg-cyan-700 text-cyan-100">Data Cleaning</Badge>
                  <Badge className="bg-cyan-700 text-cyan-100">EDA</Badge>
                  <Badge className="bg-cyan-700 text-cyan-100">GroupBy Aggregation</Badge>
                  <Badge className="bg-cyan-700 text-cyan-100">Data Transformation</Badge>
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
                    데이터 처리 효율
                  </h4>
                  <div className="text-cyan-300 space-y-2">
                    <div>• <span className="font-bold">복잡한 전처리 작업</span> 자동화</div>
                    <div>• <span className="font-bold">처리 시간 80% 단축</span></div>
                    <div>• <span className="font-bold">데이터 품질 95% 향상</span></div>
                  </div>
                </div>
                
                <div className="bg-gradient-to-r from-green-900/30 to-emerald-900/30 rounded-xl p-6 border border-green-600/30">
                  <h4 className="font-bold text-white mb-3 flex items-center gap-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    분석 인사이트
                  </h4>
                  <div className="text-green-300 space-y-2">
                    <div>• <span className="font-bold">핵심 패턴</span> 발견</div>
                    <div>• <span className="font-bold">상관관계 분석</span> 완료</div>
                    <div>• <span className="font-bold">비즈니스 인사이트</span> 도출</div>
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
                    처음엔 <span className="font-bold text-cyan-400">Excel과 비슷한 단순 데이터 처리 도구</span>라고 생각했지만, 
                    실제로는 <span className="font-bold text-blue-300">프로그래밍의 힘을 활용한 강력한 분석 엔진</span>이었습니다. 
                    반복 작업의 자동화와 복잡한 데이터 조작이 가능했습니다.
                  </p>
                  <p>
                    <span className="font-bold text-cyan-400">vectorization의 개념</span>을 이해하게 되면서 
                    반복문 대신 벡터화된 연산을 사용하여 <span className="font-bold text-blue-300">성능을 크게 향상</span>시킬 수 있었습니다. 
                    특히 <span className="font-bold text-blue-300">apply, groupby, pivot_table</span> 등의 고급 기능들이 매우 유용했습니다.
                  </p>
                  <p>
                    지금은 <span className="font-bold text-cyan-400">대용량 데이터 처리, 메모리 최적화, 
                    다른 라이브러리와의 연동</span> 등을 활용해서 
                    프로덕션 환경에서도 효율적이고 안정적인 데이터 파이프라인을 구축할 수 있게 되었습니다.
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
                <h4 className="font-bold text-white mb-4">데이터 분석 생산성 극대화</h4>
                <div className="text-gray-300 space-y-3">
                  <p>
                    pandas의 <span className="font-bold text-cyan-400">강력한 데이터 처리 기능</span>으로 
                    복잡한 전처리 작업을 자동화하여 <span className="font-bold text-blue-300">분석 시간을 80% 단축</span>했습니다. 
                    이는 더 많은 가설 검증과 깊이 있는 분석을 가능하게 하여 
                    비즈니스 인사이트 도출 속도를 크게 향상시켰습니다.
                  </p>
                  <p>
                    <span className="font-bold text-blue-300">체계적인 데이터 정제와 EDA</span>를 통해 
                    숨겨진 패턴과 핵심 인사이트를 발견하고 
                    <span className="font-bold text-cyan-400">데이터 기반 의사결정의 정확성</span>을 크게 높일 수 있었습니다. 
                    이는 전략 수립과 리스크 관리에 직접적인 도움이 되었습니다.
                  </p>
                  <p>
                    특히 토스와 같은 <span className="font-bold text-blue-300">데이터 중심의 핀테크 서비스</span>에서는 
                    pandas가 <span className="font-bold text-cyan-400">고객 행동 분석, 거래 패턴 탐지, A/B 테스트 분석</span> 등에서 
                    빠르고 정확한 데이터 처리를 통해 
                    <span className="font-bold text-cyan-400">실시간 비즈니스 최적화</span>를 가능하게 하는 
                    핵심 도구가 될 것입니다.
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