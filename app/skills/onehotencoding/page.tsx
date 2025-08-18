'use client'
import { Navigation } from '@/components/navigation'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ArrowLeft, Lightbulb, Rocket, TrendingUp, Target, Award } from 'lucide-react'
import Link from 'next/link'

export default function OneHotEncodingSkillPage() {
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
              OneHotEncoding
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Categorical data transformation for ML model compatibility
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
                OneHotEncoding에 대한 개인적 견해
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-lg text-gray-300 leading-relaxed space-y-4">
                <p>
                  <span className="font-bold text-cyan-400">OneHotEncoding은 ML의 기본 중의 기본</span>이라고 생각합니다. 
                  범주형 데이터를 수치형으로 변환하면서도 
                  <span className="font-bold text-cyan-400">순서 관계를 강요하지 않는</span> 우아한 해결책입니다.
                </p>
                <p>
                  특히 <span className="font-bold text-cyan-400">희소 행렬의 메모리 효율성</span>이 인상적이었습니다. 
                  수천 개의 범주가 있어도 실제로는 대부분이 0이기 때문에 
                  <span className="font-bold text-cyan-400">효율적인 저장과 연산</span>이 가능합니다.
                </p>
                <p>
                  간호사 퇴사 예측 프로젝트에서 <span className="font-bold text-cyan-400">다양한 범주형 변수들을 처리</span>하면서, 
                  올바른 인코딩이 모델 성능에 미치는 영향을 직접 경험했습니다. 
                  <span className="font-bold text-cyan-400">데이터 전처리의 핵심</span>임을 깨달았습니다.
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
              <div className="bg-gradient-to-r from-indigo-900/20 to-blue-900/20 rounded-xl p-6 border border-indigo-600/30 cursor-pointer hover:bg-gradient-to-r hover:from-indigo-900/30 hover:to-blue-900/30 transition-all duration-300" onClick={() => window.open('/nurse-salary', '_blank')}>
                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2 hover:text-indigo-300 transition-colors">
                  <div className="w-3 h-3 bg-indigo-500 rounded-full"></div>
                  간호사 퇴사 예측 분석 →
                </h3>
                <div className="text-gray-300 space-y-3">
                  <p>
                    <span className="font-bold text-cyan-400">OneHotEncoding 변환</span>으로 부서, 직급, 근무형태 등 
                    다양한 범주형 변수를 <span className="font-bold text-cyan-400">ML 모델이 이해할 수 있는 형태</span>로 전처리했습니다.
                  </p>
                  <p>
                    <span className="font-bold text-cyan-400">범주 간 순서 관계를 제거</span>하여 
                    모델이 올바른 패턴을 학습하도록 하고 <span className="font-bold text-blue-300">예측 성능을 크게 향상</span>시켰습니다.
                  </p>
                  <div className="bg-gray-800/50 rounded-lg p-4 mt-4">
                    <div className="text-sm text-gray-400 mb-2">핵심 OneHotEncoding 기술들:</div>
                    <div className="flex flex-wrap gap-2">
                      <Badge className="bg-cyan-700 text-cyan-100">Categorical Encoding</Badge>
                      <Badge className="bg-cyan-700 text-cyan-100">Sparse Matrix</Badge>
                      <Badge className="bg-cyan-700 text-cyan-100">Data Preprocessing</Badge>
                      <Badge className="bg-cyan-700 text-cyan-100">Feature Engineering</Badge>
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
                    데이터 품질
                  </h4>
                  <div className="text-cyan-300 space-y-2">
                    <div>• <span className="font-bold">범주형 데이터</span> 완벽 변환</div>
                    <div>• <span className="font-bold">순서 관계 제거</span> 성공</div>
                    <div>• <span className="font-bold">희소성 활용</span> 메모리 최적화</div>
                  </div>
                </div>
                
                <div className="bg-gradient-to-r from-green-900/30 to-emerald-900/30 rounded-xl p-6 border border-green-600/30">
                  <h4 className="font-bold text-white mb-3 flex items-center gap-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    모델 성능
                  </h4>
                  <div className="text-green-300 space-y-2">
                    <div>• <span className="font-bold">예측 정확도 15%</span> 향상</div>
                    <div>• <span className="font-bold">모델 수렴</span> 안정화</div>
                    <div>• <span className="font-bold">과적합 방지</span> 효과</div>
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
                    처음엔 <span className="font-bold text-cyan-400">범주형 데이터를 숫자로 바꾸면 된다고</span> 생각했습니다. 
                    "A=1, B=2, C=3" 식으로 단순하게 매핑하면 
                    <span className="font-bold text-blue-300\">문제없을 거라고</span> 착각했죠.
                  </p>
                  <p>
                    하지만 <span className="font-bold text-cyan-400">모델이 잘못된 순서 관계를 학습</span>하는 문제를 겪으면서 
                    OneHotEncoding의 중요성을 깨달았습니다. 
                    특히 <span className="font-bold text-blue-300\">"사과 > 바나나 > 오렌지"</span> 같은 
                    의미 없는 관계를 모델이 학습하는 것을 보고 충격을 받았습니다.
                  </p>
                  <p>
                    지금은 <span className="font-bold text-cyan-400">Target Encoding, Binary Encoding, Hashing</span> 등 
                    다양한 인코딩 기법들을 상황에 맞게 선택할 수 있게 되었습니다.
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
                <h4 className="font-bold text-white mb-4">올바른 데이터 전처리로 ML 모델의 신뢰성과 정확성 확보</h4>
                <div className="text-gray-300 space-y-3">
                  <p>
                    OneHotEncoding의 <span className="font-bold text-cyan-400">정확한 범주형 데이터 처리</span>를 통해 
                    모델이 데이터의 진정한 패턴을 학습할 수 있게 하여 예측 품질을 크게 향상시켰습니다. 이는 단순한 기술 적용을 넘어선 <span className="font-bold text-cyan-400">데이터 과학의 기본기</span> 확립입니다.
                  </p>
                  <p>
                    <span className="font-bold text-blue-300">올바른 전처리 방법론</span>의 적용으로 
                    모델의 안정성과 일반화 성능이 향상되어, <span className="font-bold text-cyan-400">비즈니스 의사결정의 신뢰성</span>을 높였습니다.
                  </p>
                  <p>
                    특히 토스와 같은 <span className="font-bold text-blue-300">데이터 기반 서비스</span>에서는 
                    이런 기초적이지만 중요한 전처리 기술이 <span className="font-bold text-cyan-400">AI/ML 시스템의 품질과 안정성</span>을 
                    좌우하는 핵심 요소가 될 것이라고 확신합니다.
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