'use client'
import { Navigation } from '@/components/navigation'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ArrowLeft, Lightbulb, Rocket, TrendingUp, Target, Award } from 'lucide-react'
import Link from 'next/link'

export default function PineconeSkillPage() {
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
            <div className="text-6xl mb-4">🌲</div>
            <h1 className="text-4xl font-black text-white mb-4">
              Pinecone
            </h1>
          </div>

          {/* 내가 이해한 Pinecone */}
          <Card className="bg-gray-800/80 backdrop-blur-sm border border-gray-600/50 shadow-2xl mb-12">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-white flex items-center gap-3">
                <Lightbulb className="w-6 h-6 text-yellow-500" />
                내가 이해한 Pinecone
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-lg text-gray-300 leading-relaxed space-y-4">
                <p>
                  <span className="font-bold text-cyan-400">Pinecone은 벡터 검색의 완전 관리형 솔루션입니다.</span> 
                  복잡한 벡터 인덱싱과 유사도 검색을 직접 구현할 필요 없이 
                  <span className="font-bold text-cyan-400">API만으로 고성능 AI 검색</span>을 구현할 수 있는 것이 혁신적입니다.
                </p>
                <p>
                  특히 <span className="font-bold text-cyan-400">실시간 업서트와 메타데이터 필터링</span>이 인상적이었습니다. 
                  대용량 임베딩 데이터를 실시간으로 추가하고 업데이트하면서도 
                  <span className="font-bold text-cyan-400">밀리초 단위의 검색 성능</span>을 유지할 수 있습니다.
                </p>
                <p>
                  AI 챗봇 포트폴리오 프로젝트에서 <span className="font-bold text-cyan-400">대화 맥락 검색과 지식 기반 검색</span>을 
                  Pinecone으로 구현하면서, 복잡한 인프라 관리 없이도 
                  <span className="font-bold text-cyan-400">프로덕션 레벨의 벡터 검색</span>을 구축할 수 있음을 경험했습니다.
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
              <div className="bg-gradient-to-r from-blue-900/20 to-cyan-900/20 rounded-xl p-6 border border-blue-600/30 cursor-pointer hover:bg-gradient-to-r hover:from-blue-900/30 hover:to-cyan-900/30 transition-all duration-300" onClick={() => window.open('/projects/1', '_blank')}>
                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2 hover:text-blue-300 transition-colors">
                  <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                  AI 챗봇 포트폴리오 시스템 →
                </h3>
                <div className="text-gray-300 space-y-3">
                  <p>
                    <span className="font-bold text-cyan-400">Pinecone 벡터 데이터베이스</span>를 활용하여 사용자 질문과 포트폴리오 정보 간의 
                    <span className="font-bold text-cyan-400">의미적 유사도 검색</span>을 구현했습니다.
                  </p>
                  <p>
                    <span className="font-bold text-cyan-400">실시간 임베딩 업데이트</span>와 메타데이터 필터링을 통해 
                    <span className="font-bold text-blue-300">맥락 인식 검색</span>을 구현하고, 
                    GitHub 데이터와 프로젝트 정보를 실시간으로 동기화했습니다.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Pinecone으로 해결할 수 있는 문제들 */}
          <Card className="bg-gray-800/80 backdrop-blur-sm border border-gray-600/50 shadow-2xl mb-12">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-white flex items-center gap-3">
                <Award className="w-6 h-6 text-blue-500" />
                Pinecone으로 해결할 수 있는 문제들
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-1 gap-6">
                {/* 키워드 검색 한계 */}
                <div className="bg-gradient-to-r from-blue-900/20 to-cyan-900/20 rounded-xl p-6 border border-blue-600/30">
                  <h4 className="font-bold text-white mb-3 flex items-center gap-2">
                    <div className="text-2xl">🔍</div>
                    키워드 검색 한계
                  </h4>
                  <div className="text-gray-300 space-y-2">
                    <div>• <span className="font-bold text-cyan-400">기존:</span> 정확한 키워드 매칭만 가능하고 의미 이해 불가</div>
                    <div>• <span className="font-bold text-cyan-400">해결:</span> 벡터 유사도로 의미적 검색과 자연어 질문 이해</div>
                  </div>
                </div>
                
                {/* 벡터 인프라 복잡성 */}
                <div className="bg-gradient-to-r from-green-900/20 to-emerald-900/20 rounded-xl p-6 border border-green-600/30">
                  <h4 className="font-bold text-white mb-3 flex items-center gap-2">
                    <div className="text-2xl">⚙️</div>
                    벡터 인프라 구축 복잡성
                  </h4>
                  <div className="text-gray-300 space-y-2">
                    <div>• <span className="font-bold text-green-400">기존:</span> 벡터 DB 직접 구축하고 인덱싱 관리가 복잡함</div>
                    <div>• <span className="font-bold text-green-400">해결:</span> 관리형 서비스로 API만으로 고성능 벡터 검색 구현</div>
                  </div>
                </div>

                {/* 실시간 데이터 동기화 */}
                <div className="bg-gradient-to-r from-purple-900/20 to-pink-900/20 rounded-xl p-6 border border-purple-600/30">
                  <h4 className="font-bold text-white mb-3 flex items-center gap-2">
                    <div className="text-2xl">🔄</div>
                    실시간 데이터 동기화 문제
                  </h4>
                  <div className="text-gray-300 space-y-2">
                    <div>• <span className="font-bold text-purple-400">기존:</span> 데이터 변경 시 검색 결과가 최신 상태 반영 안됨</div>
                    <div>• <span className="font-bold text-purple-400">해결:</span> 실시간 upsert로 즉시 데이터 업데이트와 검색 반영</div>
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