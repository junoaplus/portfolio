'use client'
import { Navigation } from '@/components/navigation'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ArrowLeft, Lightbulb, Rocket, TrendingUp, Target, Award } from 'lucide-react'
import Link from 'next/link'

export default function OpenAISkillPage() {
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
            <div className="text-6xl mb-4">🤖</div>
            <h1 className="text-4xl font-black text-white mb-4">
              OpenAI
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              OpenAI API - 최고 수준의 AI 서비스
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
                OpenAI에 대한 개인적 견해
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-lg text-gray-300 leading-relaxed space-y-4">
                <p>
                  <span className="font-bold text-cyan-400">OpenAI는 AI 혁명의 선두주자이자 실용적인 동반자</span>라고 생각합니다. 
                  GPT-4의 강력한 언어 이해와 생성 능력으로 <span className="font-bold text-cyan-400">상상을 현실로 만드는</span> 
                  개발 경험을 제공하며, 복잡한 AI를 누구나 쉽게 사용할 수 있게 했습니다.
                </p>
                <p>
                  특히 <span className="font-bold text-cyan-400">API의 직관적인 설계와 강력한 성능</span>이 인상적이었습니다. 
                  간단한 HTTP 호출로도 세계 최고 수준의 AI 능력을 활용할 수 있어 
                  <span className="font-bold text-cyan-400">개발 생산성과 서비스 품질</span>을 
                  동시에 극대화할 수 있습니다.
                </p>
                <p>
                  토스와 같은 <span className="font-bold text-cyan-400">혁신적인 기술 기업</span>에서는 
                  OpenAI의 최신 AI 기술이 고객 상담, 문서 처리, 개인화 서비스에서 
                  <span className="font-bold text-cyan-400">차세대 사용자 경험</span>을 창조하고 
                  경쟁 우위를 확보하는 핵심 엔진이 될 것입니다.
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
                <div className="bg-gradient-to-r from-blue-900/20 to-cyan-900/20 rounded-xl p-6 border border-blue-600/30 cursor-pointer hover:bg-gradient-to-r hover:from-blue-900/30 hover:to-cyan-900/30 transition-all duration-300" onClick={() => window.open('/boardgame-chatbot', '_blank')}>
                  <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2 hover:text-blue-300 transition-colors">
                    <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                    보드게임 룰 챗봇 'BOVI' →
                  </h3>
                  <div className="text-gray-300 space-y-3">
                    <p>
                      <span className="font-bold text-cyan-400">OpenAI GPT-4를 핵심 언어 엔진</span>으로 활용하여 
                      복잡한 보드게임 룰을 사용자 친화적으로 설명하는 챗봇을 개발했습니다. 
                      <span className="font-bold text-cyan-400">자연스러운 대화와 정확한 정보 제공</span>으로 
                      게임 룰 학습 경험을 혁신했습니다.
                    </p>
                  </div>
                </div>
                
                <div className="bg-gradient-to-r from-green-900/20 to-teal-900/20 rounded-xl p-6 border border-green-600/30 cursor-pointer hover:bg-gradient-to-r hover:from-green-900/30 hover:to-teal-900/30 transition-all duration-300" onClick={() => window.open('/projects/2', '_blank')}>
                  <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2 hover:text-green-300 transition-colors">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    데이트 코스 추천 AI 시스템 →
                  </h3>
                  <div className="text-gray-300 space-y-3">
                    <p>
                      <span className="font-bold text-cyan-400">OpenAI API 기반 대화형 추천 시스템</span>을 구축하여 
                      사용자의 선호도, 예산, 위치 정보를 종합 분석하고 
                      <span className="font-bold text-cyan-400">개인맞춤형 데이트 코스를 자연스럽게 추천</span>하는 
                      지능형 플래너를 개발했습니다.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-800/50 rounded-lg p-4 mt-6">
                <div className="text-sm text-gray-400 mb-2">핵심 OpenAI 활용:</div>
                <div className="flex flex-wrap gap-2">
                  <Badge className="bg-cyan-700 text-cyan-100">GPT-4 API</Badge>
                  <Badge className="bg-cyan-700 text-cyan-100">Embeddings</Badge>
                  <Badge className="bg-cyan-700 text-cyan-100">Completions</Badge>
                  <Badge className="bg-cyan-700 text-cyan-100">Function Calling</Badge>
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
                    API 성능
                  </h4>
                  <div className="text-cyan-300 space-y-2">
                    <div>• <span className="font-bold">세계 최고 수준</span> AI 성능</div>
                    <div>• <span className="font-bold">안정적인 서비스</span> 제공</div>
                    <div>• <span className="font-bold">빠른 응답 속도</span></div>
                  </div>
                </div>
                
                <div className="bg-gradient-to-r from-green-900/30 to-emerald-900/30 rounded-xl p-6 border border-green-600/30">
                  <h4 className="font-bold text-white mb-3 flex items-center gap-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    개발 생산성
                  </h4>
                  <div className="text-green-300 space-y-2">
                    <div>• <span className="font-bold">개발 시간 80%</span> 단축</div>
                    <div>• <span className="font-bold">직관적인 API</span> 설계</div>
                    <div>• <span className="font-bold">풍부한 문서화</span></div>
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
                    처음 <span className="font-bold text-cyan-400">OpenAI API를 접했을 때</span>의 충격을 잊을 수 없습니다. 
                    단 몇 줄의 코드로 <span className="font-bold text-blue-300">인간 수준의 대화와 창작</span>이 가능하다는 것이 
                    개발자로서의 관점을 완전히 바꿔놓았습니다.
                  </p>
                  <p>
                    <span className="font-bold text-cyan-400">프롬프트 엔지니어링의 중요성</span>을 깨달으면서 
                    같은 API라도 질문하는 방식에 따라 결과가 천차만별이라는 것을 배웠습니다. 
                    특히 <span className="font-bold text-blue-300">System Message, Temperature, Token 관리</span> 등의 
                    세밀한 조정이 서비스 품질을 좌우한다는 것을 경험했습니다.
                  </p>
                  <p>
                    지금은 <span className="font-bold text-cyan-400">Function Calling, Streaming, Embeddings, 
                    Vision API</span> 등을 종합적으로 활용해서 
                    프로덕션 환경에서도 안정적이고 효율적인 AI 기반 서비스를 구축할 수 있게 되었습니다.
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
                <h4 className="font-bold text-white mb-4">최첨단 AI로 경쟁 우위 확보</h4>
                <div className="text-gray-300 space-y-3">
                  <p>
                    OpenAI의 <span className="font-bold text-cyan-400">세계 최고 수준 AI 성능</span>을 활용하여 
                    경쟁사 대비 현저히 높은 <span className="font-bold text-blue-300">서비스 품질과 사용자 경험</span>을 
                    제공할 수 있게 되어 시장에서 강력한 차별화와 브랜드 가치를 확보했습니다.
                  </p>
                  <p>
                    <span className="font-bold text-blue-300">개발 시간 80% 단축</span>으로 
                    복잡한 AI 기능을 빠르게 프로토타이핑하고 출시할 수 있어 
                    <span className="font-bold text-cyan-400">시장 기회를 선점</span>하고 
                    비즈니스 요구사항에 민첩하게 대응할 수 있는 경쟁력을 갖췄습니다.
                  </p>
                  <p>
                    특히 토스와 같은 <span className="font-bold text-blue-300">혁신을 추구하는 기술 기업</span>에서는 
                    OpenAI가 <span className="font-bold text-cyan-400">고객 상담 자동화, 금융 문서 분석, 개인화 서비스</span> 등에서 
                    최신 AI 기술을 바탕으로 한 <span className="font-bold text-cyan-400">차세대 금융 경험</span>을 
                    창조하는 핵심 동력이 될 것입니다.
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