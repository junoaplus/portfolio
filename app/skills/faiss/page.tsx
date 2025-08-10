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
          </div>

          {/* 개인적 견해 */}
          <Card className="bg-gray-800/80 backdrop-blur-sm border border-gray-600/50 shadow-2xl mb-12">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-white flex items-center gap-3">
                <Lightbulb className="w-6 h-6 text-yellow-500" />
                내가 이해한 FAISS
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-lg text-gray-300 leading-relaxed space-y-4">
                <p>
                  <span className="font-bold text-cyan-400">FAISS는 정교한 작업 없이 정말 검색 속도가 목표라면 선택하기 좋은 최고의 도구</span>라고 생각합니다. 
                  Facebook AI에서 개발한 만큼 <span className="font-bold text-cyan-400">대규모 벡터 검색 성능에 특화</span>되어 있어 
                  수백만 개의 벡터에서도 밀리초 단위의 검색이 가능합니다.
                </p>
                <p>
                  특히 <span className="font-bold text-cyan-400">실시간 서비스에 정말 좋고</span> 
                  <span className="font-bold text-cyan-400">GPU 가속도 지원</span>해서 성능을 극대화할 수 있습니다. 
                  복잡한 설정이나 튜닝 없이도 바로 빠른 검색 성능을 얻을 수 있는 것이 가장 큰 장점이라고 생각합니다.
                </p>
                <p>
                  <span className="font-bold text-cyan-400">다양한 인덱싱 알고리즘과 근사 검색</span>을 통해 
                  정확도와 속도의 트레이드오프를 조절할 수 있어, 
                  용도에 맞는 최적의 성능을 쉽게 구현할 수 있다고 봅니다.
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
                </div>
              </div>
            </CardContent>
          </Card>

          {/* FAISS로 해결할 수 있는 문제들 */}
          <Card className="bg-gray-800/80 backdrop-blur-sm border border-gray-600/50 shadow-2xl mb-12">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-white flex items-center gap-3">
                <Award className="w-6 h-6 text-blue-500" />
                FAISS로 해결할 수 있는 문제들
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-1 gap-6">
                {/* 대규모 벡터 검색 속도 문제 */}
                <div className="bg-gradient-to-r from-purple-900/20 to-indigo-900/20 rounded-xl p-6 border border-purple-600/30">
                  <h4 className="font-bold text-white mb-3 flex items-center gap-2">
                    <div className="text-2xl">⚡</div>
                    대규모 벡터 검색 속도 문제
                  </h4>
                  <div className="text-gray-300 space-y-2">
                    <div>• <span className="font-bold text-purple-400">문제:</span> 수백만 개의 벡터에서 실시간 검색 성능 확보 필요</div>
                    <div>• <span className="font-bold text-purple-400">해결:</span> 밀리초 단위의 초고속 벡터 검색 제공</div>
                  </div>
                </div>

                {/* 메모리 사용량 최적화 문제 */}
                <div className="bg-gradient-to-r from-green-900/20 to-emerald-900/20 rounded-xl p-6 border border-green-600/30">
                  <h4 className="font-bold text-white mb-3 flex items-center gap-2">
                    <div className="text-2xl">💾</div>
                    메모리 사용량 최적화 문제
                  </h4>
                  <div className="text-gray-300 space-y-2">
                    <div>• <span className="font-bold text-green-400">문제:</span> 대량의 벡터 데이터로 인한 메모리 부족</div>
                    <div>• <span className="font-bold text-green-400">해결:</span> 지연 로딩과 동적 인덱스 로딩으로 메모리 효율성 확보</div>
                  </div>
                </div>

                {/* GPU 가속 처리 문제 */}
                <div className="bg-gradient-to-r from-blue-900/20 to-cyan-900/20 rounded-xl p-6 border border-blue-600/30">
                  <h4 className="font-bold text-white mb-3 flex items-center gap-2">
                    <div className="text-2xl">🚀</div>
                    GPU 가속 처리 성능 문제
                  </h4>
                  <div className="text-gray-300 space-y-2">
                    <div>• <span className="font-bold text-blue-400">문제:</span> CPU만으로는 한계가 있는 대규모 벡터 연산</div>
                    <div>• <span className="font-bold text-blue-400">해결:</span> GPU 가속과 병렬 처리로 성능 최적화</div>
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