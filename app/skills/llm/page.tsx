'use client'
import { Navigation } from '@/components/navigation'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ArrowLeft, Lightbulb, Rocket, TrendingUp, Target, Award } from 'lucide-react'
import Link from 'next/link'

export default function LLMSkillPage() {
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
            <div className="text-6xl mb-4">🧠</div>
            <h1 className="text-4xl font-black text-white mb-4">
              LLM
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Large Language Model - 거대언어모델
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
                LLM에 대한 개인적 견해
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-lg text-gray-300 leading-relaxed space-y-4">
                <p>
                  <span className="font-bold text-cyan-400">LLM은 인간의 언어 능력을 재현한 역사적 혁신</span>이라고 생각합니다. 
                  단순한 패턴 매칭을 넘어 <span className="font-bold text-cyan-400">맥락적 이해와 창조적 생성</span>을 
                  동시에 수행할 수 있는 범용 인공지능의 첫걸음입니다.
                </p>
                <p>
                  특히 <span className="font-bold text-cyan-400">Transformer 아키텍처의 Self-Attention 메커니즘</span>이 
                  놀라웠습니다. 긴 시퀀스에서도 중요한 정보를 선별하고 
                  <span className="font-bold text-cyan-400">문맥을 유지하면서 일관된 응답</span>을 생성하는 
                  능력이 매우 인상적이었습니다.
                </p>
                <p>
                  토스와 같은 <span className="font-bold text-cyan-400">혁신적인 플랫폼</span>에서는 
                  고객 문의 처리, 개인화된 금융 조언, 문서 요약과 분석에서 
                  LLM의 자연어 이해와 생성 능력이 <span className="font-bold text-cyan-400">차세대 사용자 경험</span>을 
                  만드는 핵심 기술이 될 것입니다.
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
                      <span className="font-bold text-cyan-400">GPT-4 LLM을 핵심 엔진으로 활용</span>하여 
                      복잡한 보드게임 룰을 사용자가 이해하기 쉽게 설명하는 
                      <span className="font-bold text-cyan-400">지능형 대화 시스템</span>을 구축했습니다. 
                      자연스러운 질문-답변 인터페이스로 게임 룰 학습을 혁신했습니다.
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
                      <span className="font-bold text-cyan-400">대화형 LLM 기반 추천 엔진</span>을 구현하여 
                      사용자의 선호도, 예산, 위치를 종합 분석하고 
                      <span className="font-bold text-cyan-400">개인맞춤형 데이트 코스</span>를 자연스러운 대화로 
                      추천하는 지능형 서비스를 개발했습니다.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-800/50 rounded-lg p-4 mt-6">
                <div className="text-sm text-gray-400 mb-2">핵심 LLM 활용:</div>
                <div className="flex flex-wrap gap-2">
                  <Badge className="bg-cyan-700 text-cyan-100">Natural Language Understanding</Badge>
                  <Badge className="bg-cyan-700 text-cyan-100">Text Generation</Badge>
                  <Badge className="bg-cyan-700 text-cyan-100">Conversational AI</Badge>
                  <Badge className="bg-cyan-700 text-cyan-100">Prompt Engineering</Badge>
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
                    언어 이해도
                  </h4>
                  <div className="text-cyan-300 space-y-2">
                    <div>• <span className="font-bold">자연스러운 대화</span> 구현</div>
                    <div>• <span className="font-bold">맥락 이해 95%</span> 정확도</div>
                    <div>• <span className="font-bold">다양한 질문 유형</span> 처리</div>
                  </div>
                </div>
                
                <div className="bg-gradient-to-r from-green-900/30 to-emerald-900/30 rounded-xl p-6 border border-green-600/30">
                  <h4 className="font-bold text-white mb-3 flex items-center gap-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    생성 품질
                  </h4>
                  <div className="text-green-300 space-y-2">
                    <div>• <span className="font-bold">일관된 응답</span> 생성</div>
                    <div>• <span className="font-bold">창의적 콘텐츠</span> 제작</div>
                    <div>• <span className="font-bold">개인화된 추천</span></div>
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
                    처음엔 <span className="font-bold text-cyan-400">단순히 API를 호출하는 것</span>이라고 생각했지만, 
                    실제로는 <span className="font-bold text-blue-300">프롬프트 엔지니어링과 컨텍스트 관리</span>가 
                    결과의 질을 좌우한다는 것을 깨달았습니다.
                  </p>
                  <p>
                    <span className="font-bold text-cyan-400">Temperature, Top-p, Token 제한</span> 등의 파라미터가 
                    응답의 창의성과 일관성에 미치는 영향을 실험하면서 
                    <span className="font-bold text-blue-300">LLM의 동작 원리</span>를 더 깊이 이해할 수 있었습니다. 
                    특히 <span className="font-bold text-blue-300">Chain-of-Thought 추론</span>의 강력함을 체감했습니다.
                  </p>
                  <p>
                    지금은 <span className="font-bold text-cyan-400">멀티모달 통합, 도메인 특화 파인튜닝, 
                    안전성 가이드라인</span> 등을 활용해서 
                    프로덕션 환경에서도 안정적이고 신뢰할 수 있는 LLM 기반 서비스를 구축할 수 있게 되었습니다.
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
                <h4 className="font-bold text-white mb-4">차세대 사용자 경험 혁신</h4>
                <div className="text-gray-300 space-y-3">
                  <p>
                    LLM의 <span className="font-bold text-cyan-400">자연어 대화 인터페이스</span>로 
                    기존 클릭 기반 UI를 넘어 <span className="font-bold text-blue-300">직관적이고 인간적인 상호작용</span>을 
                    가능하게 하여 사용자 만족도와 서비스 접근성을 획기적으로 향상시켰습니다.
                  </p>
                  <p>
                    <span className="font-bold text-blue-300">개인맞춤형 콘텐츠 생성</span>으로 
                    각 사용자의 필요에 정확히 맞는 정보와 추천을 제공하여 
                    <span className="font-bold text-cyan-400">사용자 참여도를 크게 높이고</span> 
                    서비스의 가치와 차별성을 강화했습니다.
                  </p>
                  <p>
                    특히 토스와 같은 <span className="font-bold text-blue-300">복잡한 금융 서비스</span>에서는 
                    LLM이 <span className="font-bold text-cyan-400">고객 상담 자동화, 금융 상품 설명, 투자 조언</span> 등에서 
                    전문적이면서도 이해하기 쉬운 소통을 가능하게 하여 
                    <span className="font-bold text-cyan-400">고객 경험 혁신과 운영 효율성</span>을 동시에 달성하는 
                    게임 체인저가 될 것입니다.
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