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
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              고성능 벡터 검색 엔진 및 벡터 데이터베이스
            </p>
            <Badge style={{ background: 'rgb(37 99 235)' }} className="text-white text-lg px-6 py-2">
              Proficiency Level: 80%
            </Badge>
          </div>

          {/* 개인적 견해 */}
          <Card className="bg-gray-800/80 backdrop-blur-sm border border-gray-600/50 shadow-2xl mb-12">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-white flex items-center gap-3">
                <Lightbulb className="w-6 h-6 text-yellow-500" />
                Qdrant에 대한 개인적 견해
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-lg text-gray-300 leading-relaxed space-y-4">
                <p>
                  <span className="font-bold text-cyan-400">Qdrant는 차세대 검색의 핵심 기술</span>이라고 생각합니다. 
                  기존 키워드 검색의 한계를 뛰어넘어 <span className="font-bold text-cyan-400">의미적 유사성</span>을 
                  기반으로 진정한 지능형 검색을 구현할 수 있게 해줍니다.
                </p>
                <p>
                  특히 <span className="font-bold text-cyan-400">필터링과 벡터 검색의 완벽한 결합</span>이 인상적이었습니다. 
                  단순 벡터 유사도만으로는 부정확한 결과가 나올 수 있는데, 
                  <span className="font-bold text-cyan-400">메타데이터 필터링을 먼저 적용</span>한 후 벡터 검색을 하니 
                  정확도가 극적으로 향상되었습니다.
                </p>
                <p>
                  토스와 같은 <span className="font-bold text-cyan-400">대규모 서비스</span>에서는 고객 상담, 
                  상품 추천, 문서 검색 등에 Qdrant의 의미 검색이 필수적입니다. 
                  <span className="font-bold text-cyan-400">실시간 벡터 검색과 확장성</span>으로 
                  수백만 사용자의 개인화된 경험을 제공할 수 있는 핵심 인프라입니다.
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
              <div className="bg-gradient-to-r from-blue-900/20 to-cyan-900/20 rounded-xl p-6 border border-blue-600/30 cursor-pointer hover:bg-gradient-to-r hover:from-blue-900/30 hover:to-cyan-900/30 transition-all duration-300" onClick={() => window.open('/projects/2', '_blank')}>
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
                  <p>
                    특히 <span className="font-bold text-cyan-400">"로맨틱한 야경이 보이는 레스토랑"</span> 같은 
                    자연어 쿼리도 정확히 이해하여 적절한 장소를 찾아내는 
                    <span className="font-bold text-cyan-400">의미적 검색 시스템</span>을 구현했습니다. 
                    벡터 검색 응답 시간도 <span className="font-bold text-cyan-400">평균 300ms</span>로 실시간 서비스가 가능했습니다.
                  </p>
                  <div className="bg-gray-800/50 rounded-lg p-4 mt-4">
                    <div className="text-sm text-gray-400 mb-2">핵심 Qdrant 활용:</div>
                    <div className="flex flex-wrap gap-2">
                      <Badge className="bg-cyan-700 text-cyan-100">Vector Search</Badge>
                      <Badge className="bg-cyan-700 text-cyan-100">Metadata Filtering</Badge>
                      <Badge className="bg-cyan-700 text-cyan-100">Geo Filtering</Badge>
                      <Badge className="bg-cyan-700 text-cyan-100">Similarity Scoring</Badge>
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
                    검색 성능
                  </h4>
                  <div className="text-cyan-300 space-y-2">
                    <div>• <span className="font-bold">평균 응답 시간 300ms</span></div>
                    <div>• <span className="font-bold">검색 정확도 92%</span> 달성</div>
                    <div>• <span className="font-bold">89,321개 벡터</span> 실시간 검색</div>
                  </div>
                </div>
                
                <div className="bg-gradient-to-r from-green-900/30 to-emerald-900/30 rounded-xl p-6 border border-green-600/30">
                  <h4 className="font-bold text-white mb-3 flex items-center gap-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    필터링 최적화
                  </h4>
                  <div className="text-green-300 space-y-2">
                    <div>• <span className="font-bold">151개 카테고리</span> 세분화</div>
                    <div>• <span className="font-bold">지리공간 필터링</span> 구현</div>
                    <div>• <span className="font-bold">노이즈 제거 85%</span> 개선</div>
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
                    처음엔 <span className="font-bold text-cyan-400">단순 벡터 유사도 검색</span>만 사용했더니 
                    엉뚱한 결과들이 많이 나왔습니다. <span className="font-bold text-blue-300">필터링 전략의 중요성</span>을 
                    뒤늦게 깨달았죠.
                  </p>
                  <p>
                    <span className="font-bold text-cyan-400">메타데이터 필터링을 먼저 적용</span>하고 
                    벡터 검색을 수행하는 방식으로 바꾸니 정확도가 극적으로 향상되었습니다. 
                    특히 <span className="font-bold text-blue-300">지리공간 데이터와 카테고리 필터링</span>의 
                    조합이 핵심이었습니다.
                  </p>
                  <p>
                    지금은 <span className="font-bold text-cyan-400">벡터 임베딩 최적화, 인덱싱 전략, 클러스터링</span> 등을 
                    활용해서 대규모 벡터 데이터베이스도 효율적으로 운영할 수 있게 되었습니다.
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
                <h4 className="font-bold text-white mb-4">의미적 검색으로 사용자 만족도 극대화</h4>
                <div className="text-gray-300 space-y-3">
                  <p>
                    Qdrant의 <span className="font-bold text-cyan-400">의미적 벡터 검색</span>으로 
                    사용자들이 자연어로 원하는 장소를 표현해도 <span className="font-bold text-blue-300">정확한 추천을 받을 수 있게</span> 되었습니다. 
                    이는 기존 키워드 검색 대비 사용자 만족도를 크게 향상시켰습니다.
                  </p>
                  <p>
                    <span className="font-bold text-blue-300">평균 300ms의 빠른 검색 속도</span>로 
                    실시간 추천 서비스를 구현하여 <span className="font-bold text-cyan-400">사용자 이탈률을 대폭 감소</span>시켰고, 
                    서비스의 반응성과 사용성을 크게 개선했습니다.
                  </p>
                  <p>
                    특히 토스와 같은 <span className="font-bold text-blue-300">대규모 플랫폼</span>에서는 
                    Qdrant의 <span className="font-bold text-cyan-400">확장 가능한 벡터 검색 능력</span>이 
                    개인화된 상품 추천, 스마트 고객 상담, 문서 검색 등에서 
                    <span className="font-bold text-cyan-400">차별화된 사용자 경험</span>을 제공하는 핵심 기술이 될 것입니다.
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