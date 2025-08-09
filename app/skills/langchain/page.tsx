'use client'
import { Navigation } from '@/components/navigation'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ArrowLeft, Lightbulb, Rocket, TrendingUp, Target, Award } from 'lucide-react'
import Link from 'next/link'

export default function LangChainSkillPage() {
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
            <div className="text-6xl mb-4">🔗</div>
            <h1 className="text-4xl font-black text-white mb-4">
              LangChain
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              LLM 애플리케이션 개발을 위한 강력한 프레임워크
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
                LangChain에 대한 개인적 견해
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-lg text-gray-300 leading-relaxed space-y-4">
                <p>
                  <span className="font-bold text-cyan-400">LangChain은 AI 애플리케이션의 레고 블록</span>이라고 생각합니다. 
                  복잡한 LLM 기반 시스템을 <span className="font-bold text-cyan-400">모듈화된 컴포넌트</span>로 쉽게 구성할 수 있어 
                  개발 생산성을 극대화할 수 있습니다.
                </p>
                <p>
                  특히 <span className="font-bold text-cyan-400">Chain과 Agent의 강력한 추상화</span>가 인상적이었습니다. 
                  단순한 질답부터 복잡한 다단계 추론까지 일관된 인터페이스로 처리할 수 있어 
                  <span className="font-bold text-cyan-400">확장 가능한 AI 시스템</span>을 구축할 수 있습니다.
                </p>
                <p>
                  토스와 같은 <span className="font-bold text-cyan-400">대규모 서비스</span>에서는 
                  고객 상담, 문서 분석, 개인화 추천에 LangChain의 체계적인 프레임워크가 필수적입니다. 
                  <span className="font-bold text-cyan-400">메모리 관리, 체인 연결, 에이전트 협업</span>으로 
                  복잡한 비즈니스 로직을 AI로 자동화하는 핵심 인프라입니다.
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
                <div className="bg-gradient-to-r from-blue-900/20 to-cyan-900/20 rounded-xl p-6 border border-blue-600/30 cursor-pointer hover:bg-gradient-to-r hover:from-blue-900/30 hover:to-cyan-900/30 transition-all duration-300" onClick={() => window.open('/projects/2', '_blank')}>
                  <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2 hover:text-blue-300 transition-colors">
                    <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                    데이트 코스 추천 AI 시스템 →
                  </h3>
                  <div className="text-gray-300 space-y-3">
                    <p>
                      <span className="font-bold text-cyan-400">LangChain으로 대화형 추천 시스템</span>을 구축했습니다. 
                      ConversationChain과 메모리 관리를 활용하여 
                      <span className="font-bold text-cyan-400">사용자와의 자연스러운 대화 맥락을 유지</span>하면서 
                      개인맞춤형 데이트 코스를 추천하는 시스템을 개발했습니다.
                    </p>
                  </div>
                </div>
                
                <div className="bg-gradient-to-r from-green-900/20 to-teal-900/20 rounded-xl p-6 border border-green-600/30 cursor-pointer hover:bg-gradient-to-r hover:from-green-900/30 hover:to-teal-900/30 transition-all duration-300" onClick={() => window.open('/boardgame-chatbot', '_blank')}>
                  <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2 hover:text-green-300 transition-colors">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    보드게임 룰 챗봇 'BOVI' →
                  </h3>
                  <div className="text-gray-300 space-y-3">
                    <p>
                      <span className="font-bold text-cyan-400">LangChain Expression Language 기반 RAG 파이프라인</span>을 구현했습니다. 
                      FAISS 벡터 검색과 GPT-4 생성을 체인으로 연결하여 
                      <span className="font-bold text-cyan-400">정확한 보드게임 룰 설명 시스템</span>을 구축했습니다.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-800/50 rounded-lg p-4 mt-6">
                <div className="text-sm text-gray-400 mb-2">핵심 LangChain 활용:</div>
                <div className="flex flex-wrap gap-2">
                  <Badge className="bg-cyan-700 text-cyan-100">Conversation Chain</Badge>
                  <Badge className="bg-cyan-700 text-cyan-100">Memory Management</Badge>
                  <Badge className="bg-cyan-700 text-cyan-100">RAG Pipeline</Badge>
                  <Badge className="bg-cyan-700 text-cyan-100">LCEL</Badge>
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
                    시스템 구축
                  </h4>
                  <div className="text-cyan-300 space-y-2">
                    <div>• <span className="font-bold">복잡한 AI 파이프라인</span> 구축</div>
                    <div>• <span className="font-bold">모듈화된 컴포넌트</span> 설계</div>
                    <div>• <span className="font-bold">확장 가능한 아키텍처</span></div>
                  </div>
                </div>
                
                <div className="bg-gradient-to-r from-green-900/30 to-emerald-900/30 rounded-xl p-6 border border-green-600/30">
                  <h4 className="font-bold text-white mb-3 flex items-center gap-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    사용자 경험
                  </h4>
                  <div className="text-green-300 space-y-2">
                    <div>• <span className="font-bold">자연스러운 대화</span> 구현</div>
                    <div>• <span className="font-bold">맥락 유지</span> 완벽</div>
                    <div>• <span className="font-bold">개인화된 응답</span> 제공</div>
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
                    처음엔 <span className="font-bold text-cyan-400">OpenAI API를 직접 호출</span>하는 방식에 익숙했지만, 
                    LangChain을 사용하니 <span className="font-bold text-blue-300">코드의 재사용성과 유지보수성</span>이 
                    극적으로 향상되었습니다.
                  </p>
                  <p>
                    <span className="font-bold text-cyan-400">체인의 개념과 LCEL(LangChain Expression Language)</span>을 
                    이해하게 되면서 복잡한 AI 워크플로우를 선언적으로 정의할 수 있게 되었습니다. 
                    특히 <span className="font-bold text-blue-300">메모리와 상태 관리</span>의 중요성을 깨달았습니다.
                  </p>
                  <p>
                    지금은 <span className="font-bold text-cyan-400">커스텀 체인, 에이전트 시스템, 
                    다중 LLM 협업</span> 등을 활용해서 
                    엔터프라이즈급 AI 애플리케이션을 체계적으로 설계하고 구현할 수 있게 되었습니다.
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
                <h4 className="font-bold text-white mb-4">AI 시스템 개발 생산성 극대화</h4>
                <div className="text-gray-300 space-y-3">
                  <p>
                    LangChain의 <span className="font-bold text-cyan-400">모듈화된 컴포넌트 시스템</span>으로 
                    복잡한 AI 기능을 빠르게 프로토타이핑하고 
                    <span className="font-bold text-blue-300">개발 시간을 70% 단축</span>했습니다. 
                    이는 비즈니스 요구사항에 빠르게 대응하고 시장 기회를 선점하는 경쟁력을 제공했습니다.
                  </p>
                  <p>
                    <span className="font-bold text-blue-300">체계적인 메모리 관리와 대화 맥락 유지</span>로 
                    사용자들이 자연스럽고 일관된 AI 경험을 받을 수 있게 되어 
                    <span className="font-bold text-cyan-400">사용자 만족도와 서비스 신뢰성</span>을 크게 향상시켰습니다.
                  </p>
                  <p>
                    특히 토스와 같은 <span className="font-bold text-blue-300">대규모 플랫폼</span>에서는 
                    LangChain이 <span className="font-bold text-cyan-400">고객 상담 자동화, 문서 처리, 개인화 서비스</span> 등에서 
                    확장 가능하고 유지보수하기 쉬운 AI 시스템을 구축하여 
                    <span className="font-bold text-cyan-400">운영 비용 절감과 서비스 품질 향상</span>을 
                    동시에 달성하는 핵심 프레임워크가 될 것입니다.
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