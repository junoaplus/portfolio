'use client'
import { Navigation } from '@/components/navigation'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ArrowLeft, Lightbulb, Rocket, TrendingUp, Target, Award } from 'lucide-react'
import Link from 'next/link'

export default function StreamlitSkillPage() {
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
            <div className="text-6xl mb-4">🚀</div>
            <h1 className="text-4xl font-black text-white mb-4">
              Streamlit
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Python으로 빠르게 데이터 앱과 대시보드를 구축하는 웹 프레임워크
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
                Streamlit에 대한 개인적 견해
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-lg text-gray-300 leading-relaxed space-y-4">
                <p>
                  <span className="font-bold text-cyan-400">Streamlit은 데이터 과학자를 위한 혁명적 도구</span>라고 생각합니다. 
                  복잡한 웹 개발 지식 없이도 Python 스크립트만으로 
                  <span className="font-bold text-cyan-400">인터랙티브한 웹 애플리케이션</span>을 순식간에 구축할 수 있습니다.
                </p>
                <p>
                  특히 <span className="font-bold text-cyan-400">리액티브 프로그래밍과 자동 재실행</span>이 인상적이었습니다. 
                  코드 변경 시 즉시 반영되고, 사용자 입력에 따라 
                  <span className="font-bold text-cyan-400">자동으로 화면이 업데이트</span>되는 것이 놀라웠습니다.
                </p>
                <p>
                  신문 이탈 예측 프로젝트에서 <span className="font-bold text-cyan-400">머신러닝 모델의 성능 분석과 시각화</span>를 
                  Streamlit으로 구현하면서, 복잡한 데이터 분석 결과를 
                  <span className="font-bold text-cyan-400">직관적으로 전달</span>할 수 있는 강력함을 경험했습니다.
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
              <div className="bg-gradient-to-r from-purple-900/20 to-pink-900/20 rounded-xl p-6 border border-purple-600/30 cursor-pointer hover:bg-gradient-to-r hover:from-purple-900/30 hover:to-pink-900/30 transition-all duration-300" onClick={() => window.open('/newspaper-churn', '_blank')}>
                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2 hover:text-purple-300 transition-colors">
                  <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                  신문 구독자 이탈 예측 분석 →
                </h3>
                <div className="text-gray-300 space-y-3">
                  <p>
                    <span className="font-bold text-cyan-400">Streamlit 대시보드</span>로 6개 머신러닝 모델의 성능을 
                    실시간 비교 분석하고 <span className="font-bold text-cyan-400">인터랙티브한 데이터 탐색</span>을 제공했습니다.
                  </p>
                  <p>
                    <span className="font-bold text-cyan-400">동적 시각화와 모델 해석</span>을 통해 
                    비즈니스 팀이 <span className="font-bold text-blue-300">복잡한 ML 결과</span>를 직관적으로 이해하고 
                    의사결정에 활용할 수 있도록 했습니다.
                  </p>
                  <div className="bg-gray-800/50 rounded-lg p-4 mt-4">
                    <div className="text-sm text-gray-400 mb-2">핵심 Streamlit 기술들:</div>
                    <div className="flex flex-wrap gap-2">
                      <Badge className="bg-cyan-700 text-cyan-100">Interactive Dashboard</Badge>
                      <Badge className="bg-cyan-700 text-cyan-100">Real-time Visualization</Badge>
                      <Badge className="bg-cyan-700 text-cyan-100">Model Comparison</Badge>
                      <Badge className="bg-cyan-700 text-cyan-100">Data Exploration</Badge>
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
                    <div>• <span className="font-bold">대시보드 개발 90% 단축</span></div>
                    <div>• <span className="font-bold">프로토타입 제작 5분</span> 내</div>
                    <div>• <span className="font-bold">웹 개발 지식 불필요</span></div>
                  </div>
                </div>
                
                <div className="bg-gradient-to-r from-green-900/30 to-emerald-900/30 rounded-xl p-6 border border-green-600/30">
                  <h4 className="font-bold text-white mb-3 flex items-center gap-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    사용자 경험
                  </h4>
                  <div className="text-green-300 space-y-2">
                    <div>• <span className="font-bold">인터랙티브 분석</span> 100%</div>
                    <div>• <span className="font-bold">실시간 모델 비교</span></div>
                    <div>• <span className="font-bold">직관적 결과 해석</span> 95%</div>
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
                    처음엔 <span className="font-bold text-cyan-400">Jupyter 노트북에만 익숙한 상태</span>에서 
                    결과를 다른 사람에게 보여주려면 복잡한 웹 개발이 필요하다고 생각했습니다. 
                    <span className="font-bold text-blue-300">HTML, CSS, JavaScript</span>를 모두 배워야 한다고 여겼죠.
                  </p>
                  <p>
                    하지만 <span className="font-bold text-cyan-400">첫 Streamlit 앱을 만들어보면서</span> 
                    완전히 생각이 바뀌었습니다. 
                    특히 <span className="font-bold text-blue-300">st.write() 하나로 모든 것</span>이 
                    자동으로 렌더링되는 것을 보고 감탄했습니다.
                  </p>
                  <p>
                    지금은 <span className="font-bold text-cyan-400">커스텀 컴포넌트, 상태 관리, 캐싱</span> 등을 
                    활용해서 복잡한 데이터 애플리케이션도 효율적으로 구축할 수 있게 되었습니다.
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
                <h4 className="font-bold text-white mb-4">빠른 프로토타이핑으로 데이터 인사이트의 비즈니스 가치 극대화</h4>
                <div className="text-gray-300 space-y-3">
                  <p>
                    Streamlit을 통한 <span className="font-bold text-cyan-400">인터랙티브한 데이터 대시보드</span> 구축으로 
                    복잡한 ML 분석 결과를 비즈니스 팀이 직관적으로 이해할 수 있게 했습니다. 이는 단순한 시각화를 넘어선 <span className="font-bold text-cyan-400">데이터 민주화</span>입니다.
                  </p>
                  <p>
                    <span className="font-bold text-blue-300">빠른 프로토타입 개발</span>을 통해 
                    아이디어를 즉시 검증하고 스테이크홀더와 소통할 수 있게 되어, <span className="font-bold text-cyan-400">의사결정 속도</span>가 크게 향상되었습니다.
                  </p>
                  <p>
                    특히 토스와 같은 <span className="font-bold text-blue-300">데이터 중심 조직</span>에서는 
                    이런 빠른 데이터 앱 개발 능력이 <span className="font-bold text-cyan-400">비즈니스 민첩성과 데이터 활용도</span>를 
                    동시에 높이는 핵심 역량이 될 것이라고 확신합니다.
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