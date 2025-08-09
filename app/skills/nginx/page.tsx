'use client'
import { Navigation } from '@/components/navigation'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ArrowLeft, Lightbulb, Rocket, TrendingUp, Target, Award } from 'lucide-react'
import Link from 'next/link'

export default function NginxSkillPage() {
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
            <div className="text-6xl mb-4">⚡</div>
            <h1 className="text-4xl font-black text-white mb-4">
              Nginx
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              고성능 웹 서버와 리버스 프록시로 안정적인 서비스 인프라 구축
            </p>
            <Badge style={{ background: 'rgb(37 99 235)' }} className="text-white text-lg px-6 py-2">
              Proficiency Level: 70%
            </Badge>
          </div>

          {/* 개인적 견해 */}
          <Card className="bg-gray-800/80 backdrop-blur-sm border border-gray-600/50 shadow-2xl mb-12">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-white flex items-center gap-3">
                <Lightbulb className="w-6 h-6 text-yellow-500" />
                Nginx에 대한 개인적 견해
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-lg text-gray-300 leading-relaxed space-y-4">
                <p>
                  <span className="font-bold text-cyan-400">Nginx는 현대 웹 인프라의 필수 요소</span>라고 생각합니다. 
                  단순한 웹 서버를 넘어서 로드 밸런서, 리버스 프록시, SSL 터미네이터까지 
                  <span className="font-bold text-cyan-400">올인원 솔루션</span>을 제공합니다.
                </p>
                <p>
                  특히 <span className="font-bold text-cyan-400">이벤트 기반 아키텍처</span>가 인상적이었습니다. 
                  적은 메모리로 수많은 동시 연결을 처리하는 효율성과 
                  <span className="font-bold text-cyan-400">C10K 문제 해결</span>에서의 혁신성이 뛰어납니다.
                </p>
                <p>
                  보드게임 룰 챗봇 프로젝트에서 <span className="font-bold text-cyan-400">Nginx를 리버스 프록시</span>로 활용하여 
                  Django와 FastAPI 서비스를 통합하고, SSL 인증서와 정적 파일 서빙을 최적화하면서 
                  <span className="font-bold text-cyan-400">안정적인 프로덕션 환경</span>을 구축할 수 있었습니다.
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
                    <span className="font-bold text-cyan-400">Nginx 리버스 프록시</span>로 Django 웹 서버와 FastAPI AI 엔진을 
                    통합하여 <span className="font-bold text-cyan-400">단일 엔드포인트</span>로 서비스했습니다.
                  </p>
                  <p>
                    <span className="font-bold text-cyan-400">SSL 인증서 관리와 정적 파일 최적화</span>를 통해 
                    보안과 성능을 동시에 확보하고 <span className="font-bold text-blue-300">프로덕션 환경</span>에서 
                    안정적인 서비스 운영을 구현했습니다.
                  </p>
                  <div className="bg-gray-800/50 rounded-lg p-4 mt-4">
                    <div className="text-sm text-gray-400 mb-2">핵심 Nginx 기술들:</div>
                    <div className="flex flex-wrap gap-2">
                      <Badge className="bg-cyan-700 text-cyan-100">Reverse Proxy</Badge>
                      <Badge className="bg-cyan-700 text-cyan-100">SSL Termination</Badge>
                      <Badge className="bg-cyan-700 text-cyan-100">Static File Serving</Badge>
                      <Badge className="bg-cyan-700 text-cyan-100">Load Balancing</Badge>
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
                    서버 성능
                  </h4>
                  <div className="text-cyan-300 space-y-2">
                    <div>• <span className="font-bold">동시 연결 10,000개+</span> 지원</div>
                    <div>• <span className="font-bold">메모리 사용량 50% 절약</span></div>
                    <div>• <span className="font-bold">응답 속도 40% 향상</span></div>
                  </div>
                </div>
                
                <div className="bg-gradient-to-r from-green-900/30 to-emerald-900/30 rounded-xl p-6 border border-green-600/30">
                  <h4 className="font-bold text-white mb-3 flex items-center gap-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    인프라 안정성
                  </h4>
                  <div className="text-green-300 space-y-2">
                    <div>• <span className="font-bold">서비스 가용성 99.9%</span></div>
                    <div>• <span className="font-bold">SSL 보안</span> 완벽 구현</div>
                    <div>• <span className="font-bold">자동 장애 복구</span></div>
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
                    처음엔 <span className="font-bold text-cyan-400">개발 서버만으로 충분하다고</span> 생각했습니다. 
                    Django나 FastAPI의 내장 서버면 
                    <span className="font-bold text-blue-300">굳이 복잡한 설정</span>이 필요할까 싶었죠.
                  </p>
                  <p>
                    하지만 <span className="font-bold text-cyan-400">프로덕션 환경에서 트래픽이 증가하면서</span> 
                    성능 병목을 경험했습니다. 
                    특히 <span className="font-bold text-blue-300">정적 파일 서빙과 SSL 처리</span>에서 
                    Nginx의 필요성을 절실히 느꼈습니다.
                  </p>
                  <p>
                    지금은 <span className="font-bold text-cyan-400">고급 설정, 캐싱 전략, 보안 헤더</span> 등을 
                    활용해서 엔터프라이즈급 웹 인프라도 구축할 수 있게 되었습니다.
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
                <h4 className="font-bold text-white mb-4">고성능 웹 인프라로 서비스 안정성과 확장성 확보</h4>
                <div className="text-gray-300 space-y-3">
                  <p>
                    Nginx의 <span className="font-bold text-cyan-400">고성능 아키텍처</span>를 통해 
                    대용량 트래픽을 안정적으로 처리하고 서비스 다운타임을 최소화할 수 있었습니다. 이는 단순한 기술 구현을 넘어선 <span className="font-bold text-cyan-400">비즈니스 연속성</span>의 보장입니다.
                  </p>
                  <p>
                    <span className="font-bold text-blue-300">효율적인 자원 활용</span>을 통해 
                    서버 비용을 절감하면서도 더 많은 사용자를 지원할 수 있게 되어, <span className="font-bold text-cyan-400">운영 효율성</span>이 크게 향상되었습니다.
                  </p>
                  <p>
                    특히 토스와 같은 <span className="font-bold text-blue-300">대규모 서비스</span>에서는 
                    이런 웹 인프라 기술이 <span className="font-bold text-cyan-400">서비스 안정성과 사용자 경험</span>의 
                    핵심 기반이 될 것이라고 확신합니다.
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