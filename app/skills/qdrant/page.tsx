'use client'
import { Navigation } from '@/components/navigation'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ArrowLeft, Lightbulb, Rocket, TrendingUp, Target, Award } from 'lucide-react'
import Link from 'next/link'

export default function QdrantSkillPage() {
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
              Qdrant
            </h1>
          </div>

          {/* 개인적 견해 */}
          <Card className="bg-gray-800/80 backdrop-blur-sm border border-gray-600/50 shadow-2xl mb-12">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-white flex items-center gap-3">
                <Lightbulb className="w-6 h-6 text-yellow-500" />
                내가 이해한 Qdrant
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-lg text-gray-300 leading-relaxed space-y-4">
                <p>
                  <span className="font-bold text-cyan-400">Qdrant는 벡터 DB의 종류 중 하나</span>로 
                  <span className="font-bold text-cyan-400">메타데이터와 함께 임베딩을 저장</span>합니다. 
                  그리고 <span className="font-bold text-cyan-400">메타데이터를 통해서 정교한 필터링이 가능하도록 지원</span>해주는 
                  벡터 DB라고 생각합니다.
                </p>
                <p>
                  요새 유행하는 <span className="font-bold text-cyan-400">RAG 서비스에서는 필터링해서 검색이 가장 중요</span>하다고 생각합니다. 
                  그래야 <span className="font-bold text-cyan-400">검색의 정확성과 퀄리티가 올라가기 때문</span>입니다.
                </p>
                <p>
                  그렇기 때문에 현재는 <span className="font-bold text-cyan-400">벡터 DB에서 필터링을 가장 잘 지원하는 것이 Qdrant</span>라고 생각해서 
                  이것을 자주 쓰고 있습니다. 메타데이터 기반의 정교한 필터링 능력이 
                  다른 벡터 DB들과 차별화되는 핵심 강점이라고 봅니다.
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
              <div className="bg-gradient-to-r from-blue-900/20 to-cyan-900/20 rounded-xl p-6 border border-blue-600/30 cursor-pointer hover:bg-gradient-to-r hover:from-blue-900/30 hover:to-cyan-900/30 transition-all duration-300" onClick={() => window.open('/date-recommendation', '_blank')}>
                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2 hover:text-blue-300 transition-colors">
                  <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                  데이트 코스 추천 AI 시스템 →
                </h3>
                <div className="text-gray-300 space-y-3">
                  <p>
                    <span className="font-bold text-cyan-400">89,321개 장소의 의미적 검색 엔진</span>으로 Qdrant를 구축했습니다. 
                    <span className="font-bold text-cyan-400">151개 세분화 카테고리 필터링</span>과 
                    <span className="font-bold text-cyan-400">지리공간 반경 필터링</span>을 조합하여 
                    정확한 장소 매칭을 구현했습니다.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Qdrant로 해결할 수 있는 문제들 */}
          <Card className="bg-gray-800/80 backdrop-blur-sm border border-gray-600/50 shadow-2xl mb-12">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-white flex items-center gap-3">
                <Award className="w-6 h-6 text-blue-500" />
                Qdrant로 해결할 수 있는 문제들
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-1 gap-6">
                {/* 키워드 검색의 한계 문제 */}
                <div className="bg-gradient-to-r from-purple-900/20 to-indigo-900/20 rounded-xl p-6 border border-purple-600/30">
                  <h4 className="font-bold text-white mb-3 flex items-center gap-2">
                    <div className="text-2xl">🔍</div>
                    키워드 검색의 한계와 의미적 검색 문제
                  </h4>
                  <div className="text-gray-300 space-y-2">
                    <div>• <span className="font-bold text-purple-400">문제:</span> 기존 키워드 검색으로는 사용자의 진정한 의도를 파악하기 어려움</div>
                    <div>• <span className="font-bold text-purple-400">해결:</span> 의미적 유사성 기반 지능형 검색으로 정확한 결과 제공</div>
                  </div>
                </div>

                {/* 대규모 벡터 검색 성능 문제 */}
                <div className="bg-gradient-to-r from-green-900/20 to-emerald-900/20 rounded-xl p-6 border border-green-600/30">
                  <h4 className="font-bold text-white mb-3 flex items-center gap-2">
                    <div className="text-2xl">⚡</div>
                    대규모 벡터 검색 성능 문제
                  </h4>
                  <div className="text-gray-300 space-y-2">
                    <div>• <span className="font-bold text-green-400">문제:</span> 수만 개 이상의 벡터에서 실시간 검색 성능 확보</div>
                    <div>• <span className="font-bold text-green-400">해결:</span> 대규모 벡터에서도 빠른 검색 속도 제공</div>
                  </div>
                </div>

                {/* 검색 정확도 향상 문제 */}
                <div className="bg-gradient-to-r from-blue-900/20 to-cyan-900/20 rounded-xl p-6 border border-blue-600/30">
                  <h4 className="font-bold text-white mb-3 flex items-center gap-2">
                    <div className="text-2xl">🎯</div>
                    검색 정확도와 노이즈 제거 문제
                  </h4>
                  <div className="text-gray-300 space-y-2">
                    <div>• <span className="font-bold text-blue-400">문제:</span> 단순 벡터 유사도만으로는 부정확한 결과 발생</div>
                    <div>• <span className="font-bold text-blue-400">해결:</span> 메타데이터 필터링과 지리공간 필터링으로 검색 정확도 향상</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

        </div>
      </div>
    </div>
  )
}