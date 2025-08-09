'use client'
import { Navigation } from '@/components/navigation'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ArrowLeft, Lightbulb, Rocket, TrendingUp, Target, Award } from 'lucide-react'
import Link from 'next/link'

export default function EXAONESkillPage() {
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
              EXAONE
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              LG AI Research의 초거대 언어모델로 한국어 특화 AI 서비스 구축
            </p>
            <Badge style={{ background: 'rgb(37 99 235)' }} className="text-white text-lg px-6 py-2">
              Proficiency Level: 75%
            </Badge>
          </div>

          {/* 개인적 견해 */}
          <Card className="bg-gray-800/80 backdrop-blur-sm border border-gray-600/50 shadow-2xl mb-12">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-white flex items-center gap-3">
                <Lightbulb className="w-6 h-6 text-yellow-500" />
                EXAONE에 대한 개인적 견해
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-lg text-gray-300 leading-relaxed space-y-4">
                <p>
                  <span className="font-bold text-cyan-400">EXAONE은 한국어 AI의 새로운 가능성을 연 혁신</span>이라고 생각합니다. 
                  글로벌 모델들이 영어 중심으로 설계된 반면 
                  <span className="font-bold text-cyan-400">한국어 특화 성능</span>에서 압도적인 우위를 보여줍니다.
                </p>
                <p>
                  특히 <span className="font-bold text-cyan-400">파인튜닝을 통한 도메인 특화</span>가 인상적이었습니다. 
                  일반적인 대화형 AI를 넘어서 특정 업무 영역에서의 
                  <span className="font-bold text-cyan-400">전문성과 정확성</span>을 확보할 수 있는 것이 뛰어납니다.
                </p>
                <p>
                  보드게임 룰 챗봇 프로젝트에서 <span className="font-bold text-cyan-400">EXAONE 파인튜닝</span>을 경험하면서, 
                  217개 보드게임의 복잡한 룰을 학습하고 
                  <span className="font-bold text-cyan-400">자연스러운 한국어로 설명</span>하는 능력에 감탄했습니다.
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
              <div className="bg-gradient-to-r from-orange-900/20 to-red-900/20 rounded-xl p-6 border border-orange-600/30 cursor-pointer hover:bg-gradient-to-r hover:from-orange-900/30 hover:to-red-900/30 transition-all duration-300" onClick={() => window.open('/boardgame-chatbot', '_blank')}>
                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2 hover:text-orange-300 transition-colors">
                  <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                  보드게임 룰 챗봇 시스템 →
                </h3>
                <div className="text-gray-300 space-y-3">
                  <p>
                    <span className="font-bold text-cyan-400">EXAONE 파인튜닝</span>으로 217개 보드게임의 복잡한 룰을 학습하여 
                    사용자 질문에 <span className="font-bold text-cyan-400">정확하고 자연스러운 한국어</span>로 답변하는 시스템을 구축했습니다.
                  </p>
                  <p>
                    <span className="font-bold text-cyan-400">도메인 특화 파인튜닝</span>을 통해 
                    일반적인 LLM으로는 불가능한 <span className="font-bold text-blue-300">전문적인 게임 룰 해석</span>과 
                    상황별 맞춤 가이드를 제공했습니다.
                  </p>
                  <div className="bg-gray-800/50 rounded-lg p-4 mt-4">
                    <div className="text-sm text-gray-400 mb-2">핵심 EXAONE 기술들:</div>
                    <div className="flex flex-wrap gap-2">
                      <Badge className="bg-cyan-700 text-cyan-100">Fine-tuning</Badge>
                      <Badge className="bg-cyan-700 text-cyan-100">Korean Language</Badge>
                      <Badge className="bg-cyan-700 text-cyan-100">Domain Specialization</Badge>
                      <Badge className="bg-cyan-700 text-cyan-100">Rule Understanding</Badge>
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
                    모델 성능
                  </h4>
                  <div className="text-cyan-300 space-y-2">
                    <div>• <span className="font-bold">217개 게임 룰</span> 완벽 학습</div>
                    <div>• <span className="font-bold">한국어 이해도 95%</span></div>
                    <div>• <span className="font-bold">답변 정확도 90%</span></div>
                  </div>
                </div>
                
                <div className="bg-gradient-to-r from-green-900/30 to-emerald-900/30 rounded-xl p-6 border border-green-600/30">
                  <h4 className="font-bold text-white mb-3 flex items-center gap-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    사용자 경험
                  </h4>
                  <div className="text-green-300 space-y-2">
                    <div>• <span className="font-bold">자연스러운 대화</span> 구현</div>
                    <div>• <span className="font-bold">전문적 룰 해석</span></div>
                    <div>• <span className="font-bold">맞춤형 가이드</span> 제공</div>
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
                    처음엔 <span className="font-bold text-cyan-400">GPT-4만 있으면 충분하다고</span> 생각했습니다. 
                    글로벌 모델이면 한국어도 당연히 잘 할 거라고 
                    <span className="font-bold text-blue-300">안일하게 생각</span>했죠.
                  </p>
                  <p>
                    하지만 <span className="font-bold text-cyan-400">복잡한 한국어 게임 룰을 다루면서</span> 
                    차이를 확실히 느꼈습니다. 
                    특히 <span className="font-bold text-blue-300">미묘한 뉘앙스와 문맥 이해</span>에서 
                    EXAONE의 한국어 특화 성능이 압도적이었습니다.
                  </p>
                  <p>
                    지금은 <span className="font-bold text-cyan-400">파인튜닝 전략, 데이터셋 구성, 성능 최적화</span> 등을 
                    통해 도메인 특화 AI 모델을 효율적으로 개발할 수 있게 되었습니다.
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
                <h4 className="font-bold text-white mb-4">한국어 특화 AI로 국내 시장 최적화된 서비스 구현</h4>
                <div className="text-gray-300 space-y-3">
                  <p>
                    EXAONE의 <span className="font-bold text-cyan-400">한국어 특화 성능</span>을 활용하여 
                    국내 사용자에게 최적화된 AI 서비스를 제공할 수 있었습니다. 이는 단순한 번역을 넘어선 <span className="font-bold text-cyan-400">문화적 맥락의 이해</span>입니다.
                  </p>
                  <p>
                    <span className="font-bold text-blue-300">도메인 특화 파인튜닝</span>을 통해 
                    일반적인 범용 모델로는 불가능한 전문성을 확보하여, <span className="font-bold text-cyan-400">서비스 차별화</span>를 달성했습니다.
                  </p>
                  <p>
                    특히 토스와 같은 <span className="font-bold text-blue-300">한국 시장 특화 서비스</span>에서는 
                    이런 한국어 AI 기술이 <span className="font-bold text-cyan-400">고객 소통과 서비스 품질</span>의 
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