'use client'
import { Navigation } from '@/components/navigation'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ArrowLeft, Lightbulb, Rocket, TrendingUp, Target, Award } from 'lucide-react'
import Link from 'next/link'

export default function AWSEC2SkillPage() {
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
            <div className="text-6xl mb-4">☁️</div>
            <h1 className="text-4xl font-black text-white mb-4">
              AWS EC2
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Amazon Elastic Compute Cloud로 확장 가능한 클라우드 인프라 구축
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
                AWS EC2에 대한 개인적 견해
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-lg text-gray-300 leading-relaxed space-y-4">
                <p>
                  <span className="font-bold text-cyan-400">AWS EC2는 현대 클라우드 컴퓨팅의 기반</span>이라고 생각합니다. 
                  물리적 서버의 제약에서 벗어나 필요에 따라 
                  <span className="font-bold text-cyan-400">탄력적으로 확장</span>할 수 있는 혁신적인 플랫폼입니다.
                </p>
                <p>
                  특히 <span className="font-bold text-cyan-400">다양한 인스턴스 타입과 요금 모델</span>이 인상적이었습니다. 
                  개발 환경부터 고성능 컴퓨팅까지 모든 요구사항을 충족하고 
                  <span className="font-bold text-cyan-400">비용 최적화</span>도 동시에 달성할 수 있습니다.
                </p>
                <p>
                  보드게임 룰 챗봇 프로젝트에서 <span className="font-bold text-cyan-400">EC2 인스턴스에 전체 시스템을 배포</span>하면서, 
                  Django, FastAPI, PostgreSQL이 통합된 복잡한 아키텍처도 
                  <span className="font-bold text-cyan-400">안정적으로 운영</span>할 수 있음을 경험했습니다.
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
                    <span className="font-bold text-cyan-400">AWS EC2 인스턴스</span>에 Django 웹서버, FastAPI AI 엔진, 
                    PostgreSQL 데이터베이스를 통합 배포하여 <span className="font-bold text-cyan-400">완전한 프로덕션 환경</span>을 구축했습니다.
                  </p>
                  <p>
                    <span className="font-bold text-cyan-400">Elastic IP와 보안 그룹</span> 설정을 통해 
                    안정적인 네트워크 환경을 구성하고 <span className="font-bold text-blue-300">24/7 서비스 운영</span>을 
                    실현했습니다.
                  </p>
                  <div className="bg-gray-800/50 rounded-lg p-4 mt-4">
                    <div className="text-sm text-gray-400 mb-2">핵심 AWS EC2 기술들:</div>
                    <div className="flex flex-wrap gap-2">
                      <Badge className="bg-cyan-700 text-cyan-100">Instance Management</Badge>
                      <Badge className="bg-cyan-700 text-cyan-100">Security Groups</Badge>
                      <Badge className="bg-cyan-700 text-cyan-100">Elastic IP</Badge>
                      <Badge className="bg-cyan-700 text-cyan-100">Auto Scaling</Badge>
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
                    인프라 성능
                  </h4>
                  <div className="text-cyan-300 space-y-2">
                    <div>• <span className="font-bold">서비스 가용성 99.9%</span></div>
                    <div>• <span className="font-bold">자동 확장</span> 완벽 구현</div>
                    <div>• <span className="font-bold">글로벌 접근</span> 최적화</div>
                  </div>
                </div>
                
                <div className="bg-gradient-to-r from-green-900/30 to-emerald-900/30 rounded-xl p-6 border border-green-600/30">
                  <h4 className="font-bold text-white mb-3 flex items-center gap-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    비용 효율성
                  </h4>
                  <div className="text-green-300 space-y-2">
                    <div>• <span className="font-bold">인프라 비용 60% 절감</span></div>
                    <div>• <span className="font-bold">탄력적 자원 관리</span></div>
                    <div>• <span className="font-bold">운영 관리 자동화</span></div>
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
                    처음엔 <span className="font-bold text-cyan-400">로컬 개발 환경에만 의존</span>하고 있었습니다. 
                    "내 컴퓨터에서 잘 되니까" 식으로 생각하다가 
                    <span className="font-bold text-blue-300">실제 배포</span>에서 많은 문제를 겪었죠.
                  </p>
                  <p>
                    하지만 <span className="font-bold text-cyan-400">EC2로 첫 배포를 경험하면서</span> 
                    클라우드의 강력함을 깨달았습니다. 
                    특히 <span className="font-bold text-blue-300">보안 그룹과 네트워크 설정</span>에서 
                    인프라의 중요성을 확실히 이해하게 되었습니다.
                  </p>
                  <p>
                    지금은 <span className="font-bold text-cyan-400">Auto Scaling, Load Balancer, CloudWatch</span> 등을 
                    활용해서 엔터프라이즈급 클라우드 아키텍처도 설계할 수 있게 되었습니다.
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
                <h4 className="font-bold text-white mb-4">클라우드 인프라로 비즈니스 민첩성과 확장성 확보</h4>
                <div className="text-gray-300 space-y-3">
                  <p>
                    AWS EC2의 <span className="font-bold text-cyan-400">탄력적 확장성</span>을 통해 
                    비즈니스 성장에 맞춰 인프라를 즉시 조정할 수 있게 되었습니다. 이는 단순한 기술 도입을 넘어선 <span className="font-bold text-cyan-400">비즈니스 민첩성</span>의 확보입니다.
                  </p>
                  <p>
                    <span className="font-bold text-blue-300">글로벌 인프라와 높은 가용성</span>을 통해 
                    서비스 중단 없이 안정적인 운영이 가능해져, <span className="font-bold text-cyan-400">고객 신뢰도</span>가 크게 향상되었습니다.
                  </p>
                  <p>
                    특히 토스와 같은 <span className="font-bold text-blue-300">스케일업 기업</span>에서는 
                    이런 클라우드 기술이 <span className="font-bold text-cyan-400">급속한 성장과 글로벌 확장</span>의 
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