'use client'
import { Navigation } from '@/components/navigation'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ArrowLeft, Lightbulb, Rocket, TrendingUp, Target, Award } from 'lucide-react'
import Link from 'next/link'

export default function DjangoSkillPage() {
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
            <div className="text-6xl mb-4">🟢</div>
            <h1 className="text-4xl font-black text-white mb-4">
              Django
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Python 웹 프레임워크의 완성형, 풀스택 개발의 강자
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
                Django에 대한 개인적 견해
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-lg text-gray-300 leading-relaxed space-y-4">
                <p>
                  <span className="font-bold text-cyan-400">Django는 "Batteries included" 철학의 완벽한 구현체</span>라고 생각합니다. 
                  인증, 관리자 페이지, ORM, 보안까지 웹 개발에 필요한 모든 것이 
                  <span className="font-bold text-cyan-400">기본 제공되는 올인원 솔루션</span>입니다.
                </p>
                <p>
                  특히 <span className="font-bold text-cyan-400">Django Admin과 ORM의 강력함</span>이 인상적이었습니다. 
                  몇 줄의 코드만으로 완전한 관리자 인터페이스가 생성되고, 
                  <span className="font-bold text-cyan-400">복잡한 데이터베이스 관계</span>도 직관적으로 다룰 수 있습니다.
                </p>
                <p>
                  보드게임 룰 챗봇 프로젝트에서 <span className="font-bold text-cyan-400">Django와 FastAPI의 하이브리드 구조</span>를 경험하며, 
                  웹 서비스는 Django로, AI API는 FastAPI로 분리하여 
                  <span className="font-bold text-cyan-400">각 영역의 장점을 최대화</span>할 수 있었습니다.
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
                    <span className="font-bold text-cyan-400">Django 웹 프레임워크</span>로 사용자 인터페이스와 세션 관리를 구축하고, 
                    <span className="font-bold text-cyan-400">FastAPI와의 하이브리드 아키텍처</span>를 통해 AI 추론 성능을 최적화했습니다.
                  </p>
                  <p>
                    <span className="font-bold text-cyan-400">Django ORM과 PostgreSQL</span>을 활용하여 217개 게임의 
                    QA 데이터를 체계적으로 관리하고, <span className="font-bold text-blue-300">실시간 데이터 축적 시스템</span>을 구현했습니다.
                  </p>
                  <div className="bg-gray-800/50 rounded-lg p-4 mt-4">
                    <div className="text-sm text-gray-400 mb-2">핵심 Django 기술들:</div>
                    <div className="flex flex-wrap gap-2">
                      <Badge className="bg-cyan-700 text-cyan-100">Django ORM</Badge>
                      <Badge className="bg-cyan-700 text-cyan-100">Session Management</Badge>
                      <Badge className="bg-cyan-700 text-cyan-100">Hybrid Architecture</Badge>
                      <Badge className="bg-cyan-700 text-cyan-100">Data Management</Badge>
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
                    개발 생산성
                  </h4>
                  <div className="text-cyan-300 space-y-2">
                    <div>• <span className="font-bold">웹 앱 개발 시간 70% 단축</span></div>
                    <div>• <span className="font-bold">관리자 페이지 자동 생성</span></div>
                    <div>• <span className="font-bold">보안 기능 100% 내장</span></div>
                  </div>
                </div>
                
                <div className="bg-gradient-to-r from-green-900/30 to-emerald-900/30 rounded-xl p-6 border border-green-600/30">
                  <h4 className="font-bold text-white mb-3 flex items-center gap-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    서비스 안정성
                  </h4>
                  <div className="text-green-300 space-y-2">
                    <div>• <span className="font-bold">217개 게임 데이터</span> 안정 관리</div>
                    <div>• <span className="font-bold">세션 관리 99.9%</span> 안정성</div>
                    <div>• <span className="font-bold">데이터베이스 무결성</span> 보장</div>
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
                    처음엔 <span className="font-bold text-cyan-400">FastAPI의 간결함에 익숙한 상태</span>에서 Django의 
                    복잡한 구조와 많은 설정 파일들이 부담스러웠습니다. 
                    <span className="font-bold text-blue-300">왜 이렇게 복잡해야 하는지</span> 의문이었죠.
                  </p>
                  <p>
                    하지만 <span className="font-bold text-cyan-400">대규모 웹 애플리케이션을 구축하면서</span> 
                    Django의 체계적인 구조와 풍부한 기능들의 가치를 깨달았습니다. 
                    특히 <span className="font-bold text-blue-300">사용자 인증과 권한 관리</span>에서 
                    Django의 완성도를 체감할 수 있었습니다.
                  </p>
                  <p>
                    지금은 <span className="font-bold text-cyan-400">커스텀 미들웨어, 시그널, 고급 쿼리셋</span> 등을 
                    활용하여 엔터프라이즈급 웹 애플리케이션도 체계적으로 구축할 수 있게 되었습니다.
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
                <h4 className="font-bold text-white mb-4">완성도 높은 웹 서비스로 사용자 신뢰 확보</h4>
                <div className="text-gray-300 space-y-3">
                  <p>
                    Django의 <span className="font-bold text-cyan-400">내장 보안 기능과 체계적인 아키텍처</span>를 통해 
                    안전하고 안정적인 웹 서비스를 구축할 수 있었습니다. 이는 단순한 기능 구현을 넘어선 <span className="font-bold text-cyan-400">서비스 신뢰성</span>의 확보입니다.
                  </p>
                  <p>
                    <span className="font-bold text-blue-300">관리자 페이지 자동 생성</span>과 체계적인 데이터 관리를 통해 
                    운영진이 효율적으로 서비스를 관리할 수 있게 되었고, <span className="font-bold text-cyan-400">운영 비용</span>을 크게 절감했습니다.
                  </p>
                  <p>
                    특히 토스와 같은 <span className="font-bold text-blue-300">대규모 웹 서비스</span>에서는 
                    이런 Django의 완성도와 안정성이 <span className="font-bold text-cyan-400">서비스 품질과 개발 생산성</span>을 
                    동시에 보장하는 핵심 역량이 될 것이라고 확신합니다.
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