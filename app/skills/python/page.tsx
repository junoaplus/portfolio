'use client'
import { Navigation } from '@/components/navigation'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ArrowLeft, Lightbulb, Rocket, TrendingUp, Target, Award } from 'lucide-react'
import Link from 'next/link'

export default function PythonSkillPage() {
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
            <div className="text-6xl mb-4">🐍</div>
            <h1 className="text-4xl font-black text-white mb-4">
              Python
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              데이터 과학과 백엔드 개발을 위한 범용 프로그래밍 언어
            </p>
            <Badge style={{ background: 'rgb(37 99 235)' }} className="text-white text-lg px-6 py-2">
              Proficiency Level: 95%
            </Badge>
          </div>

          {/* 개인적 견해 */}
          <Card className="bg-gray-800/80 backdrop-blur-sm border border-gray-600/50 shadow-2xl mb-12">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-white flex items-center gap-3">
                <Lightbulb className="w-6 h-6 text-yellow-500" />
                Python에 대한 개인적 견해
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-lg text-gray-300 leading-relaxed space-y-4">
                <p>
                  <span className="font-bold text-cyan-400">Python은 만능 스위스 아미 나이프</span>라고 생각합니다. 
                  데이터 과학, 웹 개발, 자동화, AI/ML까지 
                  <span className="font-bold text-cyan-400">모든 영역을 아우르는</span> 진정한 범용 언어입니다.
                </p>
                <p>
                  특히 <span className="font-bold text-cyan-400">풍부한 생태계와 커뮤니티</span>가 인상적이었습니다. 
                  NumPy, pandas, scikit-learn부터 Django, FastAPI까지 
                  <span className="font-bold text-cyan-400">상상할 수 있는 모든 작업</span>에 대한 라이브러리가 존재합니다.
                </p>
                <p>
                  모든 프로젝트에서 <span className="font-bold text-cyan-400">Python을 핵심 언어</span>로 사용하면서, 
                  데이터 분석부터 웹 API 구축, ML 모델 개발, 자동화 스크립트까지 
                  <span className="font-bold text-cyan-400">하나의 언어로 모든 것을 해결</span>할 수 있는 강력함을 경험했습니다.
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
                <div className="bg-gradient-to-r from-orange-900/20 to-red-900/20 rounded-xl p-6 border border-orange-600/30 cursor-pointer hover:bg-gradient-to-r hover:from-orange-900/30 hover:to-red-900/30 transition-all duration-300" onClick={() => window.open('/boardgame-chatbot', '_blank')}>
                  <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2 hover:text-orange-300 transition-colors">
                    <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                    보드게임 룰 챗봇 시스템 →
                  </h3>
                  <div className="text-gray-300 space-y-3">
                    <p>
                      <span className="font-bold text-cyan-400">Python 기반 풀스택 개발</span>로 Django 웹서버와 FastAPI AI 엔진을 구축하고 
                      EXAONE 파인튜닝까지 <span className="font-bold text-cyan-400">통합 구현</span>했습니다.
                    </p>
                  </div>
                </div>
                
                <div className="bg-gradient-to-r from-purple-900/20 to-pink-900/20 rounded-xl p-6 border border-purple-600/30 cursor-pointer hover:bg-gradient-to-r hover:from-purple-900/30 hover:to-pink-900/30 transition-all duration-300" onClick={() => window.open('/newspaper-churn', '_blank')}>
                  <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2 hover:text-purple-300 transition-colors">
                    <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                    신문 구독자 이탈 예측 분석 →
                  </h3>
                  <div className="text-gray-300 space-y-3">
                    <p>
                      <span className="font-bold text-cyan-400">Python ML 생태계</span>를 활용하여 6개 알고리즘 성능 비교와 
                      Streamlit 대시보드까지 <span className="font-bold text-cyan-400">end-to-end 구현</span>했습니다.
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
                      <span className="font-bold text-cyan-400">Python 데이터 과학 스택</span>으로 전처리부터 모델 최적화, 
                      성능 평가까지 <span className="font-bold text-cyan-400">완전한 ML 파이프라인</span>을 구축했습니다.
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-gray-800/50 rounded-lg p-4 mt-6">
                <div className="text-sm text-gray-400 mb-2">핵심 Python 생태계:</div>
                <div className="flex flex-wrap gap-2">
                  <Badge className="bg-cyan-700 text-cyan-100">Data Science Stack</Badge>
                  <Badge className="bg-cyan-700 text-cyan-100">Web Frameworks</Badge>
                  <Badge className="bg-cyan-700 text-cyan-100">ML/AI Libraries</Badge>
                  <Badge className="bg-cyan-700 text-cyan-100">Automation</Badge>
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
                    개발 생산성
                  </h4>
                  <div className="text-cyan-300 space-y-2">
                    <div>• <span className="font-bold">단일 언어</span> 통합 개발</div>
                    <div>• <span className="font-bold">개발 속도 3배</span> 향상</div>
                    <div>• <span className="font-bold">프로토타이핑 10분</span> 완성</div>
                  </div>
                </div>
                
                <div className="bg-gradient-to-r from-green-900/30 to-emerald-900/30 rounded-xl p-6 border border-green-600/30">
                  <h4 className="font-bold text-white mb-3 flex items-center gap-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    기술 커버리지
                  </h4>
                  <div className="text-green-300 space-y-2">
                    <div>• <span className="font-bold">풀스택 개발</span> 가능</div>
                    <div>• <span className="font-bold">ML/AI 전문성</span></div>
                    <div>• <span className="font-bold">데이터 분석 마스터</span></div>
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
                    처음엔 <span className="font-bold text-cyan-400">단순한 스크립팅 언어</span> 정도로 생각했습니다. 
                    "진짜 개발은 Java나 C++로 해야지" 하는 
                    <span className="font-bold text-blue-300">편견</span>이 있었죠.
                  </p>
                  <p>
                    하지만 <span className="font-bold text-cyan-400">첫 데이터 분석 프로젝트</span>를 Python으로 진행하면서 
                    완전히 생각이 바뀌었습니다. 
                    특히 <span className="font-bold text-blue-300">pandas로 몇 줄로 복잡한 데이터 처리</span>가 
                    끝나는 것을 보고 감탄했습니다.
                  </p>
                  <p>
                    지금은 <span className="font-bold text-cyan-400">고급 OOP, 데코레이터, 컨텍스트 매니저</span> 등을 
                    자유자재로 활용하여 엔터프라이즈급 시스템도 구축할 수 있게 되었습니다.
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
                <h4 className="font-bold text-white mb-4">범용 언어로 전사적 기술 통합과 개발 효율성 극대화</h4>
                <div className="text-gray-300 space-y-3">
                  <p>
                    Python의 <span className="font-bold text-cyan-400">범용성과 풍부한 생태계</span>를 활용하여 
                    데이터 분석부터 웹 서비스, AI/ML까지 모든 영역을 하나의 언어로 통합 개발할 수 있었습니다. 이는 단순한 언어 선택을 넘어선 <span className="font-bold text-cyan-400">기술 아키텍처의 단순화</span>입니다.
                  </p>
                  <p>
                    <span className="font-bold text-blue-300">빠른 프로토타이핑과 반복 개발</span>을 통해 
                    아이디어를 즉시 구현하고 검증할 수 있게 되어, <span className="font-bold text-cyan-400">비즈니스 민첩성</span>을 크게 향상시켰습니다.
                  </p>
                  <p>
                    특히 토스와 같은 <span className="font-bold text-blue-300">데이터 기반 핀테크</span>에서는 
                    이런 Python 기반 통합 개발 능력이 <span className="font-bold text-cyan-400">기술적 일관성과 개발 생산성</span>의 
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