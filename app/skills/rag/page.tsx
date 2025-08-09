'use client'
import { Navigation } from '@/components/navigation'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ArrowLeft, Lightbulb, Rocket, TrendingUp, Target, Award } from 'lucide-react'
import Link from 'next/link'

export default function RAGSkillPage() {
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
            <div className="text-6xl mb-4">🔍</div>
            <h1 className="text-4xl font-black text-white mb-4">
              RAG
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Retrieval-Augmented Generation - 지식 기반 AI 시스템
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
                RAG에 대한 개인적 견해
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-lg text-gray-300 leading-relaxed space-y-4">
                <p>
                  <span className="font-bold text-cyan-400">RAG는 AI의 지식 한계를 획기적으로 극복한 혁신</span>이라고 생각합니다. 
                  LLM의 강력한 추론 능력과 외부 지식베이스를 결합하여 
                  <span className="font-bold text-cyan-400">정확하고 최신의 정보</span>를 제공할 수 있는 
                  차세대 AI 아키텍처입니다.
                </p>
                <p>
                  특히 <span className="font-bold text-cyan-400">벡터 검색과 생성형 AI의 완벽한 조합</span>이 인상적이었습니다. 
                  사용자 질문과 유사한 문서를 검색하여 맥락을 제공하고 
                  <span className="font-bold text-cyan-400">환각(Hallucination)을 방지</span>하면서도 
                  자연스러운 답변을 생성할 수 있습니다.
                </p>
                <p>
                  토스와 같은 <span className="font-bold text-cyan-400">복잡한 비즈니스 환경</span>에서는 
                  사내 문서, 규정, 상품 정보를 활용한 RAG 시스템이 
                  <span className="font-bold text-cyan-400">고객 상담, 업무 지원, 정책 안내</span>에서 
                  정확성과 일관성을 보장하는 핵심 기술이 될 것입니다.
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
                      <span className="font-bold text-cyan-400">완전한 RAG 파이프라인을 구현</span>했습니다. 
                      FAISS 벡터 검색으로 관련 보드게임 룰을 찾고 
                      <span className="font-bold text-cyan-400">GPT-4가 정확한 답변을 생성</span>하는 시스템으로 
                      사용자 질문에 정확하고 맥락적인 룰 설명을 제공합니다.
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
                      <span className="font-bold text-cyan-400">지역별 장소 정보와 RAG 결합</span>하여 
                      사용자 선호도에 맞는 데이트 코스를 검색하고 
                      <span className="font-bold text-cyan-400">개인맞춤형 추천 설명</span>을 생성하는 
                      지능형 추천 시스템을 구축했습니다.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-800/50 rounded-lg p-4 mt-6">
                <div className="text-sm text-gray-400 mb-2">핵심 RAG 활용:</div>
                <div className="flex flex-wrap gap-2">
                  <Badge className="bg-cyan-700 text-cyan-100">Vector Retrieval</Badge>
                  <Badge className="bg-cyan-700 text-cyan-100">Context Injection</Badge>
                  <Badge className="bg-cyan-700 text-cyan-100">Hallucination Prevention</Badge>
                  <Badge className="bg-cyan-700 text-cyan-100">Knowledge Base</Badge>
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
                    답변 정확도
                  </h4>
                  <div className="text-cyan-300 space-y-2">
                    <div>• <span className="font-bold">환각 현상 95% 감소</span></div>
                    <div>• <span className="font-bold">정확한 정보 검색</span> 구현</div>
                    <div>• <span className="font-bold">맥락적 답변</span> 생성</div>
                  </div>
                </div>
                
                <div className="bg-gradient-to-r from-green-900/30 to-emerald-900/30 rounded-xl p-6 border border-green-600/30">
                  <h4 className="font-bold text-white mb-3 flex items-center gap-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    시스템 안정성
                  </h4>
                  <div className="text-green-300 space-y-2">
                    <div>• <span className="font-bold">실시간 검색</span> 최적화</div>
                    <div>• <span className="font-bold">확장 가능한</span> 아키텍처</div>
                    <div>• <span className="font-bold">지식 베이스</span> 동적 업데이트</div>
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
                    처음엔 <span className="font-bold text-cyan-400">단순히 검색하고 붙여넣는 방식</span>이라고 생각했지만, 
                    실제로는 <span className="font-bold text-blue-300">임베딩 공간에서의 의미론적 검색</span>과 
                    <span className="font-bold text-blue-300">생성 모델의 정교한 조합</span>이라는 것을 깨달았습니다.
                  </p>
                  <p>
                    <span className="font-bold text-cyan-400">청크 분할 전략, 임베딩 모델 선택, 검색 알고리즘</span> 등 
                    각 단계마다 성능에 미치는 영향이 크다는 것을 경험했습니다. 
                    특히 <span className="font-bold text-blue-300">Retrieval과 Generation의 균형</span>을 맞추는 것이 
                    핵심이었습니다.
                  </p>
                  <p>
                    지금은 <span className="font-bold text-cyan-400">다중 소스 검색, 하이브리드 검색, 
                    컨텍스트 윈도우 최적화</span> 등을 활용해서 
                    프로덕션 환경에서도 정확하고 효율적인 RAG 시스템을 구축할 수 있게 되었습니다.
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
                <h4 className="font-bold text-white mb-4">신뢰할 수 있는 AI 서비스 구현</h4>
                <div className="text-gray-300 space-y-3">
                  <p>
                    RAG의 <span className="font-bold text-cyan-400">환각 현상 95% 감소</span>로 
                    AI 답변의 신뢰성을 크게 향상시켜 
                    <span className="font-bold text-blue-300">고객 만족도와 서비스 품질</span>을 획기적으로 개선했습니다. 
                    이는 AI 서비스에 대한 사용자 신뢰를 구축하는 핵심 요소가 되었습니다.
                  </p>
                  <p>
                    <span className="font-bold text-blue-300">실시간 지식베이스 검색</span>을 통해 
                    최신 정보를 항상 반영할 수 있게 되어 
                    <span className="font-bold text-cyan-400">정보의 정확성과 시의성</span>을 보장하며 
                    고객 문의에 대한 즉각적이고 정확한 응답이 가능해졌습니다.
                  </p>
                  <p>
                    특히 토스와 같은 <span className="font-bold text-blue-300">복잡한 금융 서비스 환경</span>에서는 
                    RAG가 <span className="font-bold text-cyan-400">규정, 상품정보, FAQ를 활용한 고객상담</span> 등에서 
                    정확하고 일관된 정보를 제공하여 
                    <span className="font-bold text-cyan-400">고객 경험 향상과 운영 효율성</span>을 동시에 달성하는 
                    필수 기술이 될 것입니다.
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