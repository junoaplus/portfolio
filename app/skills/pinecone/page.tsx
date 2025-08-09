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
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              관리형 벡터 데이터베이스로 AI 검색 시스템 구축
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
                Pinecone에 대한 개인적 견해
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-lg text-gray-300 leading-relaxed space-y-4">
                <p>
                  <span className="font-bold text-cyan-400">Pinecone은 벡터 검색의 완전 관리형 솔루션</span>이라고 생각합니다. 
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
                  <div className="bg-gray-800/50 rounded-lg p-4 mt-4">
                    <div className="text-sm text-gray-400 mb-2">핵심 Pinecone 기술들:</div>
                    <div className="flex flex-wrap gap-2">
                      <Badge className="bg-cyan-700 text-cyan-100">Vector Search</Badge>
                      <Badge className="bg-cyan-700 text-cyan-100">Metadata Filtering</Badge>
                      <Badge className="bg-cyan-700 text-cyan-100">Real-time Upsert</Badge>
                      <Badge className="bg-cyan-700 text-cyan-100">Namespaces</Badge>
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
                    <div>• <span className="font-bold">검색 응답시간 50ms 이하</span></div>
                    <div>• <span className="font-bold">검색 정확도 92%</span> 달성</div>
                    <div>• <span className="font-bold">동시 검색 처리 1000+ QPS</span></div>
                  </div>
                </div>
                
                <div className="bg-gradient-to-r from-green-900/30 to-emerald-900/30 rounded-xl p-6 border border-green-600/30">
                  <h4 className="font-bold text-white mb-3 flex items-center gap-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    데이터 관리
                  </h4>
                  <div className="text-green-300 space-y-2">
                    <div>• <span className="font-bold">실시간 데이터 업데이트</span></div>
                    <div>• <span className="font-bold">벡터 차원 1536차원</span> 처리</div>
                    <div>• <span className="font-bold">99.9% 가용성</span> 확보</div>
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
                    처음엔 <span className="font-bold text-cyan-400">전통적인 관계형 DB에 익숙한 상태</span>에서 벡터 검색의 
                    개념이 낯설었습니다. 왜 단순한 텍스트 매칭이 아닌 벡터 유사도를 
                    <span className="font-bold text-blue-300">계산해야 하는지</span> 이해하기 어려웠죠.
                  </p>
                  <p>
                    하지만 <span className="font-bold text-cyan-400">AI 챗봇의 의미적 검색을 구현하면서</span> 
                    벡터 검색의 강력함을 체감했습니다. 
                    특히 <span className="font-bold text-blue-300">사용자의 자연어 질문</span>에 대해 
                    정확한 정보를 찾아주는 성능에 깊은 인상을 받았습니다.
                  </p>
                  <p>
                    지금은 <span className="font-bold text-cyan-400">임베딩 최적화, 메타데이터 설계, 네임스페이스 관리</span> 등을 
                    활용해서 복잡한 AI 검색 시스템을 안정적으로 운영할 수 있게 되었습니다.
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
                <h4 className="font-bold text-white mb-4">AI 기반 지능형 검색으로 사용자 경험 혁신</h4>
                <div className="text-gray-300 space-y-3">
                  <p>
                    Pinecone을 통한 <span className="font-bold text-cyan-400">의미적 벡터 검색</span>으로 
                    사용자가 자연어로 질문해도 정확한 답변을 받을 수 있는 시스템을 구축했습니다. 이는 단순한 키워드 검색을 넘어선 <span className="font-bold text-cyan-400">지능형 정보 접근</span>입니다.
                  </p>
                  <p>
                    <span className="font-bold text-blue-300">실시간 데이터 동기화</span>를 통해 
                    항상 최신 정보를 제공할 수 있게 되었고, <span className="font-bold text-cyan-400">사용자 만족도</span>가 크게 향상되었습니다.
                  </p>
                  <p>
                    특히 토스와 같은 <span className="font-bold text-blue-300">대용량 데이터 서비스</span>에서는 
                    이런 벡터 검색 기술이 <span className="font-bold text-cyan-400">개인화된 서비스와 지능형 추천</span>의 
                    핵심 역량이 될 것이라고 확신합니다.
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