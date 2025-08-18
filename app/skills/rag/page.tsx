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
          </div>

          {/* 내가 이해한 RAG */}
          <Card className="bg-gray-800/80 backdrop-blur-sm border border-gray-600/50 shadow-2xl mb-12">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-white flex items-center gap-3">
                <Lightbulb className="w-6 h-6 text-yellow-500" />
                내가 이해한 RAG
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-lg text-gray-300 leading-relaxed space-y-4">
                <p>
                  <span className="font-bold text-cyan-400">RAG는 파인튜닝 다음의 기술로, RAG가 나오면서 파인튜닝이 죽었다고 생각합니다.</span> 
                  돈이 많이 들고 시간도 많이 드는 파인튜닝과 달리, 
                  <span className="font-bold text-cyan-400">벡터 DB를 생성해서 저장해두고 찾아서 하는 방식</span>이라서 
                  돈과 시간 그리고 정확성도 확실하게 올라가거든요.
                </p>
                <p>
                  <span className="font-bold text-cyan-400">파인튜닝은 구시대적, RAG는 신시대적</span>이라고 생각해요. 
                  하지만 RAG를 쓸 때 <span className="font-bold text-cyan-400">벡터 DB 선정, 임베딩 모델 선정, 청킹 전략이 매우 중요</span>하다고 봅니다. 
                  이 선택들이 성능을 좌우하거든요.
                </p>
                <p>
                  그리고 저는 <span className="font-bold text-cyan-400">RAG를 쓰려면 필터링을 통해 노이즈를 줄여주는 것도 좋은 전략</span>이라고 생각해요. 
                  아무리 좋은 벡터 검색이어도 쓸데없는 정보까지 같이 검색되면 답변 품질이 떨어지니까, 
                  <span className="font-bold text-cyan-400">깔끔한 데이터 전처리와 필터링이 핵심</span>이라고 봅니다.
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
                <div className="bg-gradient-to-r from-green-900/20 to-teal-900/20 rounded-xl p-6 border border-green-600/30 cursor-pointer hover:bg-gradient-to-r hover:from-green-900/30 hover:to-teal-900/30 transition-all duration-300" onClick={() => window.open('/date-recommendation', '_blank')}>
                  <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2 hover:text-green-300 transition-colors">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    데이트 코스 추천 AI 시스템 →
                  </h3>
                  <div className="text-gray-300 space-y-3">
                    <p>
                      <span className="font-bold text-cyan-400">필터링을 위해 Qdrant 벡터 DB를 사용</span>했어요. 
                      메타데이터에 <span className="font-bold text-cyan-400">151개의 소카테고리 그리고 위도 경도를 넣은 지역 필터링을 구현</span>해서 
                      정확한 지역 기반 추천이 가능하도록 만들었습니다.
                    </p>
                  </div>
                </div>
                
                <div className="bg-gradient-to-r from-blue-900/20 to-cyan-900/20 rounded-xl p-6 border border-blue-600/30 cursor-pointer hover:bg-gradient-to-r hover:from-blue-900/30 hover:to-cyan-900/30 transition-all duration-300" onClick={() => window.open('/boardgame-chatbot', '_blank')}>
                  <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2 hover:text-blue-300 transition-colors">
                    <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                    보드게임 룰 챗봇 'BOVI' →
                  </h3>
                  <div className="text-gray-300 space-y-3">
                    <p>
                      <span className="font-bold text-cyan-400">추천용 벡터 DB와 게임룰 답변용 벡터 DB를 따로 만들고 각각 다른 청킹 전략을 사용했습니다.</span> 
                      <span className="font-bold text-cyan-400">속도를 위해 FAISS를 사용</span>해서 
                      빠른 검색과 정확한 룰 설명이 가능하도록 구현했습니다.
                    </p>
                  </div>
                </div>
              </div>
              
            </CardContent>
          </Card>



          {/* RAG로 해결할 수 있는 문제들 */}
          <Card className="bg-gray-800/80 backdrop-blur-sm border border-gray-600/50 shadow-2xl mb-12">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-white flex items-center gap-3">
                <Award className="w-6 h-6 text-blue-500" />
                RAG로 해결할 수 있는 문제들
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-1 gap-6">
                {/* 파인튜닝 비용 문제 */}
                <div className="bg-gradient-to-r from-yellow-900/20 to-orange-900/20 rounded-xl p-6 border border-yellow-600/30">
                  <h4 className="font-bold text-white mb-3 flex items-center gap-2">
                    <div className="text-2xl">💰</div>
                    파인튜닝 비용 문제
                  </h4>
                  <div className="text-gray-300 space-y-2">
                    <div>• <span className="font-bold text-yellow-400">기존:</span> 수백만원 드는 파인튜닝 비용과 오랜 시간</div>
                    <div>• <span className="font-bold text-yellow-400">해결:</span> 벡터 DB로 저렴하고 빠른 지식 업데이트</div>
                  </div>
                </div>

                {/* 환각 문제 */}
                <div className="bg-gradient-to-r from-red-900/20 to-pink-900/20 rounded-xl p-6 border border-red-600/30">
                  <h4 className="font-bold text-white mb-3 flex items-center gap-2">
                    <div className="text-2xl">🎯</div>
                    환각(Hallucination) 문제
                  </h4>
                  <div className="text-gray-300 space-y-2">
                    <div>• <span className="font-bold text-red-400">기존:</span> LLM이 틀린 정보를 그럴듯하게 생성</div>
                    <div>• <span className="font-bold text-red-400">해결:</span> 실제 문서 기반 답변으로 정확성 보장</div>
                  </div>
                </div>

                {/* 실시간 정보 업데이트 문제 */}
                <div className="bg-gradient-to-r from-green-900/20 to-emerald-900/20 rounded-xl p-6 border border-green-600/30">
                  <h4 className="font-bold text-white mb-3 flex items-center gap-2">
                    <div className="text-2xl">⚡</div>
                    실시간 정보 업데이트 문제
                  </h4>
                  <div className="text-gray-300 space-y-2">
                    <div>• <span className="font-bold text-green-400">기존:</span> 모델 재훈련 없이는 최신 정보 반영 불가</div>
                    <div>• <span className="font-bold text-green-400">해결:</span> 벡터 DB 업데이트만으로 즉시 최신 정보 활용</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* RAG 하위 기술 연결 */}
          <Card className="bg-gray-800/80 backdrop-blur-sm border border-gray-600/50 shadow-2xl mb-12">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-white flex items-center gap-3">
                <div className="text-2xl">🔗</div>
                RAG 관련 기술들
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-4">
                <Link href="/skills/qdrant">
                  <div className="bg-gradient-to-r from-purple-900/20 to-indigo-900/20 rounded-xl p-6 border border-purple-600/30 cursor-pointer hover:bg-gradient-to-r hover:from-purple-900/30 hover:to-indigo-900/30 transition-all duration-300 text-center">
                    <div className="text-4xl mb-3">🔍</div>
                    <h3 className="text-lg font-bold text-white mb-2">Qdrant</h3>
                    <p className="text-sm text-gray-300">고성능 벡터 검색 엔진</p>
                  </div>
                </Link>

                <Link href="/skills/faiss">
                  <div className="bg-gradient-to-r from-blue-900/20 to-cyan-900/20 rounded-xl p-6 border border-blue-600/30 cursor-pointer hover:bg-gradient-to-r hover:from-blue-900/30 hover:to-cyan-900/30 transition-all duration-300 text-center">
                    <div className="text-4xl mb-3">🎯</div>
                    <h3 className="text-lg font-bold text-white mb-2">FAISS</h3>
                    <p className="text-sm text-gray-300">빠른 벡터 유사도 검색</p>
                  </div>
                </Link>

                <Link href="/skills/vector-db">
                  <div className="bg-gradient-to-r from-green-900/20 to-teal-900/20 rounded-xl p-6 border border-green-600/30 cursor-pointer hover:bg-gradient-to-r hover:from-green-900/30 hover:to-teal-900/30 transition-all duration-300 text-center">
                    <div className="text-4xl mb-3">🗃️</div>
                    <h3 className="text-lg font-bold text-white mb-2">Vector DB</h3>
                    <p className="text-sm text-gray-300">벡터 데이터베이스 개념</p>
                  </div>
                </Link>
              </div>
            </CardContent>
          </Card>

        </div>
      </div>
    </div>
  )
}