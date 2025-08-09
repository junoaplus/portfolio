'use client'
import { Navigation } from '@/components/navigation'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ArrowLeft, Lightbulb, Rocket, TrendingUp, Target, Award } from 'lucide-react'
import Link from 'next/link'

export default function SMOTESkillPage() {
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
            <div className="text-6xl mb-4">⚖️</div>
            <h1 className="text-4xl font-black text-white mb-4">
              SMOTE
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Synthetic Minority Oversampling Technique for imbalanced datasets
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
                SMOTE에 대한 개인적 견해
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-lg text-gray-300 leading-relaxed space-y-4">
                <p>
                  <span className="font-bold text-cyan-400">SMOTE는 불균형 데이터 문제의 게임 체인저</span>라고 생각합니다. 
                  단순한 오버샘플링을 넘어서 합성 데이터를 생성하여 
                  <span className="font-bold text-cyan-400">모델의 일반화 성능을 크게 향상</span>시키는 혁신적인 기법입니다.
                </p>
                <p>
                  특히 <span className="font-bold text-cyan-400">K-nearest neighbors 기반의 보간법</span>이 인상적이었습니다. 
                  기존 소수 클래스 샘플들 사이에서 새로운 합성 샘플을 생성하여 
                  <span className="font-bold text-cyan-400">자연스러운 데이터 분포</span>를 유지하는 것이 놀라웠습니다.
                </p>
                <p>
                  신문 이탈 예측 프로젝트에서 <span className="font-bold text-cyan-400">심각한 클래스 불균형 문제</span>를 
                  SMOTE로 해결하면서, 모델 성능이 극적으로 개선되는 것을 직접 경험했습니다. 
                  <span className="font-bold text-cyan-400">현실적인 ML 문제의 핵심 솔루션</span>임을 깨달았습니다.
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
              <div className="bg-gradient-to-r from-purple-900/20 to-pink-900/20 rounded-xl p-6 border border-purple-600/30 cursor-pointer hover:bg-gradient-to-r hover:from-purple-900/30 hover:to-pink-900/30 transition-all duration-300" onClick={() => window.open('/newspaper-churn', '_blank')}>
                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2 hover:text-purple-300 transition-colors">
                  <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                  신문 구독자 이탈 예측 분석 →
                </h3>
                <div className="text-gray-300 space-y-3">
                  <p>
                    <span className="font-bold text-cyan-400">SMOTE 오버샘플링</span>으로 심각한 클래스 불균형 문제를 해결하여 
                    이탈 고객 예측 성능을 <span className="font-bold text-cyan-400">획기적으로 개선</span>했습니다.
                  </p>
                  <p>
                    <span className="font-bold text-cyan-400">합성 데이터 생성</span>을 통해 소수 클래스(이탈 고객)의 
                    패턴을 증강시켜 <span className="font-bold text-blue-300">Recall 점수를 40% 향상</span>시키고 
                    실제 비즈니스에서 활용 가능한 모델을 구축했습니다.
                  </p>
                  <div className="bg-gray-800/50 rounded-lg p-4 mt-4">
                    <div className="text-sm text-gray-400 mb-2">핵심 SMOTE 기술들:</div>
                    <div className="flex flex-wrap gap-2">
                      <Badge className="bg-cyan-700 text-cyan-100">Synthetic Oversampling</Badge>
                      <Badge className="bg-cyan-700 text-cyan-100">K-NN Interpolation</Badge>
                      <Badge className="bg-cyan-700 text-cyan-100">Class Balancing</Badge>
                      <Badge className="bg-cyan-700 text-cyan-100">Minority Class Augmentation</Badge>
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
                    모델 성능
                  </h4>
                  <div className="text-cyan-300 space-y-2">
                    <div>• <span className="font-bold">Recall 점수 40% 향상</span></div>
                    <div>• <span className="font-bold">F1-score 35%</span> 개선</div>
                    <div>• <span className="font-bold">클래스 불균형</span> 완전 해결</div>
                  </div>
                </div>
                
                <div className="bg-gradient-to-r from-green-900/30 to-emerald-900/30 rounded-xl p-6 border border-green-600/30">
                  <h4 className="font-bold text-white mb-3 flex items-center gap-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    데이터 품질
                  </h4>
                  <div className="text-green-300 space-y-2">
                    <div>• <span className="font-bold">합성 데이터 품질 95%</span></div>
                    <div>• <span className="font-bold">오버피팅 방지</span></div>
                    <div>• <span className="font-bold">자연스러운 분포 유지</span></div>
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
                    처음엔 <span className="font-bold text-cyan-400">불균형 데이터를 단순 복제</span>로 해결하려고 했습니다. 
                    소수 클래스 샘플을 반복해서 복사하면 
                    <span className="font-bold text-blue-300">문제가 해결될 거라고</span> 생각했죠.
                  </p>
                  <p>
                    하지만 <span className="font-bold text-cyan-400">심각한 오버피팅 문제</span>에 직면했습니다. 
                    그때 SMOTE를 알게 되었고, 
                    특히 <span className="font-bold text-blue-300">K-NN 기반 보간법</span>으로 
                    자연스러운 합성 데이터를 생성한다는 아이디어에 감탄했습니다.
                  </p>
                  <p>
                    지금은 <span className="font-bold text-cyan-400">BorderlineSMOTE, ADASYN, SMOTE-ENN</span> 등 
                    다양한 변형 기법들을 상황에 맞게 적용할 수 있게 되었습니다.
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
                <h4 className="font-bold text-white mb-4">불균형 데이터 해결로 실용적 ML 모델 구축</h4>
                <div className="text-gray-300 space-y-3">
                  <p>
                    SMOTE를 통한 <span className="font-bold text-cyan-400">클래스 불균형 해결</span>로 
                    실제 비즈니스에서 활용 가능한 고성능 예측 모델을 구축할 수 있었습니다. 이는 단순한 기술적 개선을 넘어선 <span className="font-bold text-cyan-400">비즈니스 가치 창출</span>입니다.
                  </p>
                  <p>
                    <span className="font-bold text-blue-300">소수 클래스 예측 성능 향상</span>을 통해 
                    이탈 고객이나 사기 거래 같은 중요한 케이스를 놓치지 않게 되어, <span className="font-bold text-cyan-400">리스크 관리</span>가 크게 개선되었습니다.
                  </p>
                  <p>
                    특히 토스와 같은 <span className="font-bold text-blue-300">금융 서비스</span>에서는 
                    이런 불균형 데이터 처리 기술이 <span className="font-bold text-cyan-400">리스크 예측과 고객 관리</span>의 
                    핵심 경쟁력이 될 것이라고 확신합니다.
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