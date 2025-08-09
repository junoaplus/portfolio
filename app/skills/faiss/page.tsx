'use client'
import { Navigation } from '@/components/navigation'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ArrowLeft, Lightbulb, Rocket, TrendingUp, Target, Award } from 'lucide-react'
import Link from 'next/link'

export default function FAISSSkillPage() {
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
            <div className="text-6xl mb-4">🎯</div>
            <h1 className="text-4xl font-black text-white mb-4">
              FAISS
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Facebook AI의 고속 벡터 유사성 검색 라이브러리
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
                FAISS에 대한 개인적 견해
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-lg text-gray-300 leading-relaxed space-y-4">
                <p>
                  <span className="font-bold text-cyan-400">FAISS는 벡터 검색의 스피드 레이서</span>라고 생각합니다. 
                  Facebook AI에서 개발한 만큼 <span className="font-bold text-cyan-400">대규모 벡터 검색 성능에 특화</span>되어 있어 
                  수백만 개의 벡터에서도 밀리초 단위의 검색이 가능합니다.
                </p>
                <p>
                  특히 <span className="font-bold text-cyan-400">다양한 인덱싱 알고리즘과 근사 검색</span>이 인상적이었습니다. 
                  정확도와 속도의 트레이드오프를 세밀하게 조절할 수 있어 
                  <span className="font-bold text-cyan-400">실시간 서비스에 최적화된 성능 튜닝</span>이 가능합니다.
                </p>
                <p>
                  토스와 같은 <span className="font-bold text-cyan-400">대규모 서비스</span>에서는 수백만 사용자의 
                  행동 패턴, 상품 추천, 사기 탐지 등에 FAISS의 초고속 벡터 검색이 필수적입니다. 
                  <span className="font-bold text-cyan-400">GPU 가속과 병렬 처리</span>로 
                  실시간 의사결정을 지원하는 핵심 인프라가 될 것입니다.
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
              <div className="bg-gradient-to-r from-blue-900/20 to-cyan-900/20 rounded-xl p-6 border border-blue-600/30 cursor-pointer hover:bg-gradient-to-r hover:from-blue-900/30 hover:to-cyan-900/30 transition-all duration-300" onClick={() => window.open('/boardgame-chatbot', '_blank')}>
                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2 hover:text-blue-300 transition-colors">
                  <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                  보드게임 룰 챗봇 'BOVI' →
                </h3>
                <div className="text-gray-300 space-y-3">
                  <p>
                    <span className="font-bold text-cyan-400">217개 게임별 개별 FAISS 벡터DB 구축</span> + 
                    <span className="font-bold text-cyan-400">통합 추천용 벡터DB</span>로 이중 아키텍처를 설계했습니다. 
                    게임 룰 설명과 게임 추천에 각각 최적화된 검색 정확도를 확보했습니다.
                  </p>
                  <p>
                    특히 <span className="font-bold text-cyan-400">RunPod GPU 인스턴스</span>와 결합하여 
                    임베딩 성능을 향상시켰고, <span className="font-bold text-cyan-400">지연 로딩 방식</span>으로 
                    메모리 사용량을 최적화하면서도 빠른 검색 성능을 유지했습니다.
                  </p>
                  <div className="bg-gray-800/50 rounded-lg p-4 mt-4">
                    <div className="text-sm text-gray-400 mb-2">핵심 FAISS 활용:</div>
                    <div className="flex flex-wrap gap-2">
                      <Badge className="bg-cyan-700 text-cyan-100">Index Building</Badge>
                      <Badge className="bg-cyan-700 text-cyan-100">Similarity Search</Badge>
                      <Badge className="bg-cyan-700 text-cyan-100">Memory Optimization</Badge>
                      <Badge className="bg-cyan-700 text-cyan-100">GPU Acceleration</Badge>
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
                    <div>• <span className="font-bold">217개 개별 벡터DB</span> 구축</div>
                    <div>• <span className="font-bold">밀리초 단위</span> 검색 응답</div>
                    <div>• <span className="font-bold">GPU 가속 최적화</span> 완료</div>
                  </div>
                </div>
                
                <div className="bg-gradient-to-r from-green-900/30 to-emerald-900/30 rounded-xl p-6 border border-green-600/30">
                  <h4 className="font-bold text-white mb-3 flex items-center gap-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    메모리 최적화
                  </h4>
                  <div className="text-green-300 space-y-2">
                    <div>• <span className="font-bold">지연 로딩 방식</span> 적용</div>
                    <div>• <span className="font-bold">동적 인덱스 로딩</span></div>
                    <div>• <span className="font-bold">메모리 사용량 70% 절약</span></div>
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
                    처음엔 <span className="font-bold text-cyan-400">단일 거대 벡터DB</span>를 구축하려 했지만 
                    성능과 정확도에서 한계를 경험했습니다. <span className="font-bold text-blue-300">게임별 개별 벡터DB 전략</span>으로 
                    바꾸니 검색 품질이 크게 향상되었습니다.
                  </p>
                  <p>
                    <span className="font-bold text-cyan-400">인덱스 타입 선택과 파라미터 튜닝</span>의 중요성을 
                    깨달았습니다. 특히 <span className="font-bold text-blue-300">IVF vs HNSW 인덱스의 특성</span>을 
                    이해하고 용도에 맞게 선택하는 것이 성능에 결정적이었습니다.
                  </p>
                  <p>
                    지금은 <span className="font-bold text-cyan-400">대규모 벡터 검색 시스템 설계, GPU 최적화, 분산 처리</span> 등을 
                    활용해서 실제 프로덕션 환경에서도 안정적이고 빠른 벡터 검색 서비스를 구축할 수 있게 되었습니다.
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
                <h4 className="font-bold text-white mb-4">초고속 검색으로 실시간 서비스 품질 확보</h4>
                <div className="text-gray-300 space-y-3">
                  <p>
                    FAISS의 <span className="font-bold text-cyan-400">밀리초 단위 벡터 검색</span>으로 
                    보드게임 룰 질문에 대한 <span className="font-bold text-blue-300">실시간 정확한 답변</span>이 가능해졌습니다. 
                    이는 사용자들이 게임 중에도 즉각적인 도움을 받을 수 있게 하여 서비스 가치를 크게 높였습니다.
                  </p>
                  <p>
                    <span className="font-bold text-blue-300">메모리 최적화와 지연 로딩</span>으로 
                    서버 비용을 절감하면서도 <span className="font-bold text-cyan-400">217개 게임 데이터베이스를 효율적으로 운영</span>할 수 있어 
                    서비스 확장성과 경제성을 동시에 달성했습니다.
                  </p>
                  <p>
                    특히 토스와 같은 <span className="font-bold text-blue-300">대규모 플랫폼</span>에서는 
                    FAISS의 <span className="font-bold text-cyan-400">초고속 벡터 검색 능력</span>이 
                    실시간 추천, 이상 거래 탐지, 개인화 서비스 등에서 
                    <span className="font-bold text-cyan-400">차별화된 성능 우위</span>를 제공하는 핵심 기술이 될 것입니다.
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