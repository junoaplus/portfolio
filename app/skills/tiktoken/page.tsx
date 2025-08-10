'use client'
import { Navigation } from '@/components/navigation'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ArrowLeft, Lightbulb, Rocket, TrendingUp, Target, Award } from 'lucide-react'
import Link from 'next/link'

export default function TiktokenSkillPage() {
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
            <div className="text-6xl mb-4">🎫</div>
            <h1 className="text-4xl font-black text-white mb-4">
              Tiktoken
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              OpenAI 토큰화 라이브러리로 정확한 토큰 관리
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
                Tiktoken에 대한 개인적 견해
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-lg text-gray-300 leading-relaxed space-y-4">
                <p>
                  <span className="font-bold text-cyan-400">Tiktoken은 LLM 시대의 필수 도구</span>라고 생각합니다. 
                  단순해 보이는 토큰 계산이지만 실제로는 
                  <span className="font-bold text-cyan-400">비용 최적화와 성능 관리의 핵심</span>이 되는 중요한 라이브러리입니다.
                </p>
                <p>
                  특히 <span className="font-bold text-cyan-400">모델별 인코딩 차이와 정확한 토큰 계산</span>이 인상적이었습니다. 
                  GPT-3.5와 GPT-4의 토큰화 방식이 다르기 때문에 
                  <span className="font-bold text-cyan-400">정확한 비용 예측과 컨텍스트 관리</span>가 필수적입니다.
                </p>
                <p>
                  데이트 코스 추천 AI 프로젝트에서 <span className="font-bold text-cyan-400">대화 히스토리와 컨텍스트 윈도우 관리</span>를 
                  Tiktoken으로 구현하면서, 사용자 경험을 해치지 않으면서도 
                  <span className="font-bold text-cyan-400">API 비용을 최적화</span>할 수 있음을 경험했습니다.
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
              <div className="bg-gradient-to-r from-green-900/20 to-teal-900/20 rounded-xl p-6 border border-green-600/30 cursor-pointer hover:bg-gradient-to-r hover:from-green-900/30 hover:to-teal-900/30 transition-all duration-300" onClick={() => window.open('/date-recommendation', '_blank')}>
                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2 hover:text-green-300 transition-colors">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  데이트 코스 추천 AI 시스템 →
                </h3>
                <div className="text-gray-300 space-y-3">
                  <p>
                    <span className="font-bold text-cyan-400">Tiktoken으로 대화 컨텍스트 관리</span>를 구현하여 
                    GPT-4의 8K 토큰 제한 내에서 <span className="font-bold text-cyan-400">최적의 대화 히스토리</span>를 유지했습니다.
                  </p>
                  <p>
                    <span className="font-bold text-cyan-400">실시간 토큰 계산</span>을 통해 프롬프트 길이를 동적으로 조절하고, 
                    <span className="font-bold text-blue-300">API 비용을 40% 절감</span>하면서도 
                    대화의 맥락을 효과적으로 보존했습니다.
                  </p>
                  <div className="bg-gray-800/50 rounded-lg p-4 mt-4">
                    <div className="text-sm text-gray-400 mb-2">핵심 Tiktoken 기술들:</div>
                    <div className="flex flex-wrap gap-2">
                      <Badge className="bg-cyan-700 text-cyan-100">Token Counting</Badge>
                      <Badge className="bg-cyan-700 text-cyan-100">Context Management</Badge>
                      <Badge className="bg-cyan-700 text-cyan-100">Cost Optimization</Badge>
                      <Badge className="bg-cyan-700 text-cyan-100">Model-specific Encoding</Badge>
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
                    비용 최적화
                  </h4>
                  <div className="text-cyan-300 space-y-2">
                    <div>• <span className="font-bold">API 비용 40% 절감</span></div>
                    <div>• <span className="font-bold">토큰 계산 정확도 99.9%</span></div>
                    <div>• <span className="font-bold">컨텍스트 윈도우 최적화</span></div>
                  </div>
                </div>
                
                <div className="bg-gradient-to-r from-green-900/30 to-emerald-900/30 rounded-xl p-6 border border-green-600/30">
                  <h4 className="font-bold text-white mb-3 flex items-center gap-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    대화 품질
                  </h4>
                  <div className="text-green-300 space-y-2">
                    <div>• <span className="font-bold">맥락 유지율 95%</span></div>
                    <div>• <span className="font-bold">응답 품질 개선 30%</span></div>
                    <div>• <span className="font-bold">메모리 효율성 80%</span> 향상</div>
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
                    처음엔 <span className="font-bold text-cyan-400">단순한 문자열 길이 계산</span>으로 토큰을 추정하다가 
                    실제 비용과 큰 차이가 나서 당황했습니다. 특히 한글과 영문의 
                    <span className="font-bold text-blue-300">토큰화 방식이 다르다는 점</span>을 몰랐죠.
                  </p>
                  <p>
                    하지만 <span className="font-bold text-cyan-400">대화형 AI 서비스를 운영하면서</span> 
                    정확한 토큰 계산의 중요성을 깨달았습니다. 
                    특히 <span className="font-bold text-blue-300">긴 대화에서 컨텍스트 관리</span>가 
                    사용자 경험과 직결되는 것을 경험했습니다.
                  </p>
                  <p>
                    지금은 <span className="font-bold text-cyan-400">모델별 인코딩 차이, 토큰 분할 전략, 효율적 캐싱</span> 등을 
                    고려하여 비용 효율적인 LLM 서비스를 구축할 수 있게 되었습니다.
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
                <h4 className="font-bold text-white mb-4">정확한 토큰 관리로 AI 서비스 비용 효율성 달성</h4>
                <div className="text-gray-300 space-y-3">
                  <p>
                    Tiktoken을 통한 <span className="font-bold text-cyan-400">정확한 토큰 계산과 컨텍스트 관리</span>로 
                    API 비용을 40% 절감하면서도 대화 품질을 유지할 수 있었습니다. 이는 단순한 비용 절감을 넘어선 <span className="font-bold text-cyan-400">서비스 지속가능성</span>의 확보입니다.
                  </p>
                  <p>
                    <span className="font-bold text-blue-300">실시간 토큰 모니터링</span>을 통해 
                    사용자별 사용량을 정확히 추적하고 예측할 수 있게 되어, <span className="font-bold text-cyan-400">비즈니스 운영의 투명성</span>이 크게 향상되었습니다.
                  </p>
                  <p>
                    특히 토스와 같은 <span className="font-bold text-blue-300">대규모 AI 서비스</span>에서는 
                    이런 정밀한 토큰 관리가 <span className="font-bold text-cyan-400">서비스 경쟁력과 수익성</span>을 
                    결정하는 핵심 요소가 될 것이라고 확신합니다.
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