'use client'
import { Navigation } from '@/components/navigation'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ArrowLeft, Lightbulb, Rocket, TrendingUp, Target, Award } from 'lucide-react'
import Link from 'next/link'

export default function VectorDBSkillPage() {
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
            <div className="text-6xl mb-4">🗃️</div>
            <h1 className="text-4xl font-black text-white mb-4">
              Vector DB
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              의미적 검색을 위한 차세대 벡터 데이터베이스
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
                Vector DB에 대한 개인적 견해
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-lg text-gray-300 leading-relaxed space-y-4">
                <p>
                  <span className="font-bold text-cyan-400">Vector DB는 AI 시대의 핵심 인프라</span>라고 생각합니다. 
                  기존 관계형 데이터베이스가 구조화된 데이터를 다뤘다면, 
                  <span className="font-bold text-cyan-400">벡터 데이터베이스는 의미와 맥락을 저장하고 검색</span>합니다.
                </p>
                <p>
                  특히 <span className="font-bold text-cyan-400">RAG 시스템과 LLM의 완벽한 결합</span>이 인상적이었습니다. 
                  단순한 키워드 매칭을 넘어서 사용자의 의도를 이해하고 
                  <span className="font-bold text-cyan-400">맥락적으로 가장 적절한 정보를 찾아내는</span> 능력은 
                  정말 혁신적입니다.
                </p>
                <p>
                  토스와 같은 <span className="font-bold text-cyan-400">복잡한 금융 서비스</span>에서는 
                  고객 상담, 개인화 추천, 지능형 검색 등에 벡터 DB가 필수적입니다. 
                  <span className="font-bold text-cyan-400">수백만 사용자의 행동 패턴을 벡터로 저장</span>하고 
                  실시간으로 유사성을 찾아내는 것이 차세대 서비스의 핵심이 될 것입니다.
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
                    데이트 코스 추천 AI (Qdrant) →
                  </h3>
                  <div className="text-gray-300 space-y-3">
                    <p>
                      <span className="font-bold text-cyan-400">89,321개 장소의 의미적 임베딩</span>을 Qdrant에 저장하여 
                      자연어 쿼리로 정확한 장소 검색이 가능한 시스템을 구축했습니다.
                    </p>
                  </div>
                </div>
                
                <div className="bg-gradient-to-r from-green-900/20 to-teal-900/20 rounded-xl p-6 border border-green-600/30 cursor-pointer hover:bg-gradient-to-r hover:from-green-900/30 hover:to-teal-900/30 transition-all duration-300" onClick={() => window.open('/boardgame-chatbot', '_blank')}>
                  <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2 hover:text-green-300 transition-colors">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    보드게임 챗봇 (FAISS) →
                  </h3>
                  <div className="text-gray-300 space-y-3">
                    <p>
                      <span className="font-bold text-cyan-400">217개 게임별 개별 FAISS 벡터DB</span> 구축으로 
                      게임 룰 질문에 대한 정확한 답변 시스템을 개발했습니다.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-800/50 rounded-lg p-4 mt-6">
                <div className="text-sm text-gray-400 mb-2">핵심 Vector DB 기술:</div>
                <div className="flex flex-wrap gap-2">
                  <Badge className="bg-cyan-700 text-cyan-100">Qdrant</Badge>
                  <Badge className="bg-cyan-700 text-cyan-100">FAISS</Badge>
                  <Badge className="bg-cyan-700 text-cyan-100">Pinecone</Badge>
                  <Badge className="bg-cyan-700 text-cyan-100">Embedding Storage</Badge>
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
                    검색 혁신
                  </h4>
                  <div className="text-cyan-300 space-y-2">
                    <div>• <span className="font-bold">의미적 검색 정확도 95%</span></div>
                    <div>• <span className="font-bold">자연어 쿼리 처리</span> 완벽 지원</div>
                    <div>• <span className="font-bold">실시간 유사도 검색</span></div>
                  </div>
                </div>
                
                <div className="bg-gradient-to-r from-green-900/30 to-emerald-900/30 rounded-xl p-6 border border-green-600/30">
                  <h4 className="font-bold text-white mb-3 flex items-center gap-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    확장성 & 성능
                  </h4>
                  <div className="text-green-300 space-y-2">
                    <div>• <span className="font-bold">30만+ 벡터</span> 안정적 관리</div>
                    <div>• <span className="font-bold">평균 응답시간 300ms</span></div>
                    <div>• <span className="font-bold">분산 처리</span> 아키텍처 구현</div>
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
                    처음엔 <span className="font-bold text-cyan-400">벡터 데이터베이스가 단순한 검색 도구</span>라고 생각했지만, 
                    실제로는 <span className="font-bold text-blue-300">AI 시스템의 핵심 기억 장치</span>라는 걸 깨달았습니다. 
                    데이터의 의미와 맥락을 이해하고 저장하는 혁신적 기술이었습니다.
                  </p>
                  <p>
                    <span className="font-bold text-cyan-400">임베딩 모델 선택과 청킹 전략</span>이 성능에 미치는 영향이 
                    엄청나다는 것을 배웠습니다. 같은 데이터라도 <span className="font-bold text-blue-300">어떻게 벡터화하느냐에 따라 
                    검색 품질이 천차만별</span>이었습니다.
                  </p>
                  <p>
                    지금은 <span className="font-bold text-cyan-400">하이브리드 검색, 메타데이터 필터링, 클러스터링</span> 등을 
                    활용해서 대규모 프로덕션 환경에서도 안정적이고 정확한 벡터 검색 시스템을 설계할 수 있게 되었습니다.
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
                <h4 className="font-bold text-white mb-4">지능형 검색으로 사용자 경험 혁신</h4>
                <div className="text-gray-300 space-y-3">
                  <p>
                    Vector DB를 통한 <span className="font-bold text-cyan-400">의미적 검색 시스템</span>으로 
                    사용자들이 자연어로 원하는 정보를 찾을 수 있게 되어 
                    <span className="font-bold text-blue-300">검색 성공률과 사용자 만족도가 크게 향상</span>되었습니다.
                  </p>
                  <p>
                    <span className="font-bold text-blue-300">실시간 개인화 추천 시스템</span>을 구현하여 
                    각 사용자의 선호도와 행동 패턴을 학습하고 
                    <span className="font-bold text-cyan-400">맞춤형 콘텐츠를 정확히 제공</span>할 수 있게 되었습니다.
                  </p>
                  <p>
                    특히 토스와 같은 <span className="font-bold text-blue-300">대규모 플랫폼</span>에서는 
                    Vector DB가 <span className="font-bold text-cyan-400">고객 상담 자동화, 상품 추천, 리스크 분석</span> 등에서 
                    기존 시스템 대비 <span className="font-bold text-cyan-400">압도적인 성능 우위</span>를 
                    제공하는 게임 체인저가 될 것입니다.
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