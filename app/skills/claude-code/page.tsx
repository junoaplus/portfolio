'use client'
import { Navigation } from '@/components/navigation'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ArrowLeft, Lightbulb, Rocket, TrendingUp, Target, Award } from 'lucide-react'
import Link from 'next/link'

export default function ClaudeCodeSkillPage() {
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
            <div className="text-6xl mb-4">💻</div>
            <h1 className="text-4xl font-black text-white mb-4">
              Claude Code
            </h1>
          </div>

          {/* 내가 이해한 Claude Code */}
          <Card className="bg-gray-800/80 backdrop-blur-sm border border-gray-600/50 shadow-2xl mb-12">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-white flex items-center gap-3">
                <Lightbulb className="w-6 h-6 text-yellow-500" />
                내가 이해한 Claude Code
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-lg text-gray-300 leading-relaxed space-y-4">
                <p>
                  <span className="font-bold text-cyan-400">제 코딩은 클로드 코드 전과 후로 나뉜다고 생각합니다.</span> 
                  클로드 코드를 사용하면 <span className="font-bold text-cyan-400">시간적인 측면에서 엄청난 단축과 효율을 올릴 수 있다고 생각합니다.</span>
                </p>
                <p>
                  그리고 <span className="font-bold text-cyan-400">대화를 통해 내가 놓친 부분도 보완해주는 좋은 존재</span>라고 생각합니다. 
                  앞으로 코딩은 바이브 코딩이 될 것이며, 
                  <span className="font-bold text-cyan-400">비효율적인 여러 명의 개발자보다 AI 도구를 전문적으로 활용할 줄 아는 한 명의 역량 있는 개발자가 더 가치 있다고 생각합니다.</span>
                </p>
                <p>
                  <span className="font-bold text-cyan-400">그런 사람이 되기 위해 노력하고 있습니다.</span> 
                  AI 도구를 잘 활용하는 개발자가 되는 것이 미래 코딩의 핵심 역량이라고 생각합니다.
                </p>
              </div>
            </CardContent>
          </Card>


          {/* Claude Code로 해결할 수 있는 문제들 */}
          <Card className="bg-gray-800/80 backdrop-blur-sm border border-gray-600/50 shadow-2xl mb-12">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-white flex items-center gap-3">
                <Award className="w-6 h-6 text-blue-500" />
                Claude Code로 해결할 수 있는 문제들
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-1 gap-6">
                {/* 정확한 코드 작성 */}
                <div className="bg-gradient-to-r from-purple-900/20 to-indigo-900/20 rounded-xl p-6 border border-purple-600/30">
                  <h4 className="font-bold text-white mb-3 flex items-center gap-2">
                    <div className="text-2xl">🎯</div>
                    정확한 코드 작성과 디버깅
                  </h4>
                  <div className="text-gray-300 space-y-2">
                    <div>• <span className="font-bold text-purple-400">장점:</span> 코드를 짤 때 가장 정확하고 세밀한 지원을 해줍니다</div>
                    <div>• <span className="font-bold text-purple-400">결과:</span> 개발 작업에서 OpenAI보다 더 뛰어난 성능을 보입니다</div>
                  </div>
                </div>

                {/* 개발 생산성 향상 */}
                <div className="bg-gradient-to-r from-green-900/20 to-emerald-900/20 rounded-xl p-6 border border-green-600/30">
                  <h4 className="font-bold text-white mb-3 flex items-center gap-2">
                    <div className="text-2xl">⚡</div>
                    개발 생산성과 품질 향상
                  </h4>
                  <div className="text-gray-300 space-y-2">
                    <div>• <span className="font-bold text-green-400">효율성:</span> 코드 작성, 디버깅, 리팩토링에서 매우 정확한 결과를 제공합니다</div>
                    <div>• <span className="font-bold text-green-400">접근법:</span> 복잡한 로직 구현 시 체계적이고 논리적인 접근을 해줍니다</div>
                  </div>
                </div>

                {/* 프로젝트 맥락 이해 */}
                <div className="bg-gradient-to-r from-blue-900/20 to-cyan-900/20 rounded-xl p-6 border border-blue-600/30">
                  <h4 className="font-bold text-white mb-3 flex items-center gap-2">
                    <div className="text-2xl">🏗️</div>
                    프로젝트 구조와 맥락 이해
                  </h4>
                  <div className="text-gray-300 space-y-2">
                    <div>• <span className="font-bold text-blue-400">최적화:</span> 개발자의 실제 작업 환경에 최적화된 도구입니다</div>
                    <div>• <span className="font-bold text-blue-400">능력:</span> 프로젝트 전체 구조와 맥락을 이해하고 적절한 해결책을 제시합니다</div>
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