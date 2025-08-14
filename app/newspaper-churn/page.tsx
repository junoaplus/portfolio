'use client'
import { Navigation } from '@/components/navigation'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Github, ExternalLink, Calendar, Users, Star, TrendingUp, Zap, ArrowLeft, CheckCircle, Award, Target, Lightbulb, Database } from 'lucide-react'
import Link from 'next/link'

export default function NewspaperChurnDetail() {
  const project = {
    id: 4,
    title: "신문 구독자 이탈 예측",
    description: "6가지 머신러닝 모델 비교 분석 및 불균형 데이터 처리 (팀 프로젝트)",
    longDescription: "디지털 전환과 미디어 경쟁 심화로 신문사 구독자 유지가 어려워지는 상황에서, 머신러닝을 활용하여 고객의 이탈 가능성을 조기에 식별하고 사전 대응 전략을 마련하기 위한 프로젝트입니다. **클래스 불균형 문제(YES:NO = 1:4.7)**를 SMOTE 데이터 증강으로 해결하고, **6가지 머신러닝 알고리즘을 체계적으로 비교 분석**하여 RandomForest 모델로 **87% F1-Score**를 달성했습니다. **Streamlit 기반 실시간 예측 대시보드**까지 구현하여 완전한 ML 파이프라인을 완성했습니다.",
    image: "/Newspaper.png",
    tech: ["RandomForest", "XGBoost", "SMOTE", "Python", "scikit-learn", "pandas", "matplotlib", "seaborn", "LogisticRegression", "KNN", "MLP", "SVM", "Streamlit"],
    category: "Traditional ML",
    status: "Completed",
    date: "2025.03.31 - 2025.04.01 (2일)",
    github: "https://github.com/hwangjunho-sknetworks/SKN11-2nd-1Team",
    demo: null,
    achievements: [
      "RandomForest 모델로 87% F1-Score 달성 (6개 알고리즘 중 최고 성능)",
      "SMOTE 데이터 증강으로 불균형 데이터(YES:NO = 1:4.7) 완전 해결",
      "로지스틱회귀, KNN, RandomForest, XGBoost, MLP, SVM 6가지 모델 비교",
      "Cost-Sensitive Learning으로 불균형 데이터 대응 전략 구현",
      "Weekly Fee, HH Income, Reward Program이 핵심 변수임을 Feature Importance로 확인",
      "Streamlit 대시보드로 실시간 이탈 예측 + TOP 50 위험 고객 분석 기능 구현",
      "ROC AUC 0.94 달성으로 실무 적용 가능한 예측 성능 입증"
    ],
    challenges: [
      "극심한 클래스 불균형: 신문 이탈자(NO) 대비 구독자(YES)가 4.7:1로 소수 클래스 예측이 매우 어려움",
      "복합적 데이터 타입: 가구소득 범위($30,000-$39,999), 연령대(30-40), 주간요금($10-$15) 등 범위형 데이터 처리",
      "도메인 특화 전처리: Nielsen Prizm 그룹, 배송주기, 리워드 프로그램 등 신문업계 특화 변수들의 적절한 인코딩",
      "6개 모델 성능 비교: 로지스틱~SVM까지 서로 다른 특성의 알고리즘들을 공정하게 비교할 평가 전략 필요",
      "Cost-Sensitive 파라미터 튜닝: 불균형 데이터에 특화된 클래스 가중치 및 임계값 최적화 복잡성",
      "비즈니스 지표 해석: Weekly Fee, HH Income 등이 이탈에 미치는 실질적 영향도 분석의 어려움"
    ],
    solutions: [
      "SMOTE 오버샘플링으로 고품질 합성 데이터 생성: 소수 클래스의 현실적인 가구소득, 연령, 주소 패턴을 가진 데이터를 생성하여 4.7:1 → 1:1 균형으로 조정",
      "도메인 특화 전처리 파이프라인: 가구소득 범위를 평균값으로 변환($30,000-$39,999→$34,999.5), 연령대 범위를 중간값으로, 배송주기를 수치형으로 매핑하는 체계적 변환",
      "Cost-Sensitive Learning 전략: 각 모델에 클래스 불균형을 반영한 가중치(class_weight='balanced') 적용으로 소수 클래스 예측 성능 대폭 향상",
      "6가지 모델 체계적 비교: 단순 정확도가 아닌 Precision, Recall, F1-Score를 종합 평가하여 RandomForest가 Class 0(0.87), Class 1(0.88) 모두에서 균형잡힌 성능 확인",
      "비즈니스 인사이트 도출: Feature Importance 분석으로 Weekly Fee(20%), HH Income(18%), Reward Program(16%)이 핵심 이탈 요인임을 확인하여 구체적 마케팅 전략 제안",
      "Streamlit 실시간 대시보드: 개별 고객 이탈 확률 예측 + 이탈 위험 TOP 50 고객 리스트 + 변수 중요도 시각화를 통한 실무진 의사결정 지원 시스템 구축"
    ]
  }

  return (
    <div className="min-h-screen relative overflow-hidden" style={{ background: 'linear-gradient(to bottom right, #000000, #111827, #000000)' }}>
      {/* Hero Tech Grid Pattern - 메인과 동일 */}
      <div className="absolute inset-0 opacity-40" style={{
        backgroundImage: `linear-gradient(rgba(59,130,246,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(59,130,246,0.03) 1px, transparent 1px)`,
        backgroundSize: '60px 60px'
      }}></div>
      
      {/* Hero Tech Glow Effects - 메인과 동일 */}
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
          <Link href="/projects">
            <Button variant="outline" className="bg-gray-800/70 backdrop-blur-sm border-gray-600/50 text-white hover:bg-gray-700/90 mb-8 rounded-xl shadow-lg">
              <ArrowLeft className="w-4 h-4 mr-2" />
              프로젝트로 돌아가기
            </Button>
          </Link>

          {/* Project Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-black text-white mb-4">
              {project.title}
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Description */}
          <Card className="bg-gray-800/80 backdrop-blur-sm border border-gray-600/50 shadow-2xl mb-12">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-white flex items-center gap-3">
                <Lightbulb className="w-6 h-6 text-indigo-600" />
                프로젝트 개요
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg text-gray-300 leading-relaxed mb-8">
                <span className="font-bold text-gray-200">신문사 구독자 이탈 예측</span>을 위한 머신러닝 분류 모델 개발 프로젝트입니다. <span className="font-bold text-gray-200">SMOTE 오버샘플링으로 불균형 데이터 문제를 해결</span>하고, <span className="font-bold text-gray-200">6가지 머신러닝 알고리즘의 성능을 체계적으로 비교 분석</span>하여 최적의 예측 모델을 구축했습니다. <span className="font-bold text-gray-200">RandomForest 모델로 87% F1-Score</span>를 달성했으며, <span className="font-bold text-gray-200">Streamlit 기반 실시간 예측 웹 앱</span>까지 구현하여 실무에 바로 적용할 수 있는 완전한 ML 파이프라인을 완성했습니다.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-gray-700 to-gray-600 rounded-xl p-6 border border-gray-500">
                  <h4 className="font-bold text-white mb-3 flex items-center gap-2">
                    <Users className="w-5 h-5 text-cyan-400" />
                    팀 구성
                  </h4>
                  <p className="text-gray-300">총 4명</p>
                </div>
                
                <div className="bg-gradient-to-br from-gray-700 to-gray-600 rounded-xl p-6 border border-gray-500">
                  <h4 className="font-bold text-white mb-3 flex items-center gap-2">
                    <Calendar className="w-5 h-5 text-cyan-400" />
                    개발 기간
                  </h4>
                  <p className="text-gray-300">2025.03.31 - 2025.04.01<br/>(2일)</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* 담당 역할 */}
          <Card className="bg-gray-800/80 backdrop-blur-sm border border-gray-600/50 shadow-2xl mb-12">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-white flex items-center gap-3">
                <Star className="w-6 h-6 text-indigo-600" />
                담당 역할 (메인 데이터 사이언티스트)
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="bg-gradient-to-br from-gray-700 to-gray-600 rounded-xl p-6 border border-gray-500">
                <div className="text-gray-300 space-y-2 text-lg">
                  <div>• <span className="text-cyan-400 font-bold">XGBoost & SVM</span> 모델 구현 및 최적화</div>
                  <div>• <span className="text-cyan-400 font-bold">SMOTE 데이터 증강</span> 전략 설계 및 구현</div>
                  <div>• <span className="text-cyan-400 font-bold">Cost-Sensitive Learning</span> 파라미터 튜닝</div>
                  <div>• <span className="text-cyan-400 font-bold">6개 모델 성능 비교</span> 분석 및 평가</div>
                  <div>• <span className="text-cyan-400 font-bold">프로젝트 발표</span> 및 최종 보고서 작성</div>
                  <div>• <span className="text-cyan-400 font-bold">비즈니스 인사이트</span> 도출 및 전략 제안</div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Challenges & Solutions - 핵심 섹션 강조 */}
          <div className="mb-14 bg-gradient-to-br from-gray-800/50 via-gray-700/30 to-gray-600/20 rounded-2xl p-8 border border-gray-600/50">
            <div className="text-center mb-8">
              <h3 className="text-2xl lg:text-3xl font-bold text-white flex items-center justify-center gap-3 mb-3">
                <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center">
                  <Zap className="w-5 h-5 text-white" />
                </div>
                주요 발생 이슈 및 해결방안
              </h3>
              <p className="text-base lg:text-lg text-gray-300 font-medium">실제 개발 과정에서 마주한 머신러닝 문제들과 해결 과정</p>
            </div>
          
            <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-6">
              {project.challenges.map((challenge, index) => (
                <Card key={index} className="bg-gray-700/90 backdrop-blur-sm border border-gray-500 shadow-xl hover:shadow-2xl transition-all duration-300">
                <CardContent className="p-5">
                    {/* 문제 */}
                    <div className="mb-4 h-32">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                          <span className="text-red-700 font-bold text-sm">{index + 1}</span>
                        </div>
                        <span className="font-bold text-white text-base">발생 이슈</span>
                      </div>
                      <p className="text-gray-200 ml-8 text-sm leading-relaxed">
                        <span style={{color: '#dc2626', fontWeight: 'bold'}}>{challenge.split(':')[0]}:</span>
                        <span className="text-gray-200">
                          {challenge.split(':').slice(1).join(':')}
                        </span>
                      </p>
                    </div>
                    
                    {/* 해결방안 */}
                    <div className="border-t border-gray-200 pt-4">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                          <CheckCircle className="w-3 h-3 text-green-700" />
                        </div>
                        <span className="font-bold text-white text-base">해결방안</span>
                      </div>
                      <p className="text-gray-200 ml-8 text-sm leading-relaxed">
                        {index === 0 ? (
                          <>
                            <span style={{color: '#06b6d4', fontWeight: 'bold'}}>SMOTE 오버샘플링</span>으로 고품질 합성 데이터 생성: <span style={{color: '#06b6d4', fontWeight: 'bold'}}>Cost-Sensitive Learning보다 더 효과적인</span> 가구소득, 연령, 주소 패턴을 가진 데이터를 생성하여 <span style={{color: '#06b6d4', fontWeight: 'bold'}}>4.7:1 → 1:1 균형</span>으로 조정
                          </>
                        ) : index === 1 ? (
                          <>
                            <span style={{color: '#06b6d4', fontWeight: 'bold'}}>도메인 특화 전처리 파이프라인</span>: 가구소득 범위를 <span style={{color: '#06b6d4', fontWeight: 'bold'}}>평균값으로 변환</span>($30,000-$39,999→$34,999.5), 연령대 범위를 중간값으로, 배송주기를 수치형으로 매핑하는 <span style={{color: '#06b6d4', fontWeight: 'bold'}}>체계적 변환</span>
                          </>
                        ) : index === 2 ? (
                          <>
                            <span style={{color: '#06b6d4', fontWeight: 'bold'}}>Cost-Sensitive Learning</span> 전략: 각 모델에 <span style={{color: '#06b6d4', fontWeight: 'bold'}}>클래스 불균형을 반영한 가중치</span>(<span style={{color: '#06b6d4', fontWeight: 'bold'}}>class_weight='balanced'</span>) 적용으로 소수 클래스 예측 성능 대폭 향상
                          </>
                        ) : index === 3 ? (
                          <>
                            <span style={{color: '#06b6d4', fontWeight: 'bold'}}>6가지 모델 체계적 비교</span>: 단순 정확도가 아닌 Precision, Recall, F1-Score를 종합 평가하여 <span style={{color: '#06b6d4', fontWeight: 'bold'}}>RandomForest</span>가 Class 0(0.87), Class 1(0.88) 모두에서 <span style={{color: '#06b6d4', fontWeight: 'bold'}}>균형잡힌 성능</span> 확인
                          </>
                        ) : index === 4 ? (
                          <>
                            비즈니스 인사이트 도출: <span style={{color: '#06b6d4', fontWeight: 'bold'}}>Feature Importance 분석</span>으로 <span style={{color: '#06b6d4', fontWeight: 'bold'}}>Weekly Fee(20%), HH Income(18%), Reward Program(16%)</span>이 핵심 이탈 요인임을 확인하여 <span style={{color: '#06b6d4', fontWeight: 'bold'}}>구체적 마케팅 전략</span> 제안
                          </>
                        ) : (
                          <>
                            <span style={{color: '#06b6d4', fontWeight: 'bold'}}>Streamlit 실시간 대시보드</span>: 개별 고객 이탈 확률 예측 + <span style={{color: '#06b6d4', fontWeight: 'bold'}}>이탈 위험 TOP 50 고객</span> 리스트 + 변수 중요도 시각화를 통한 <span style={{color: '#06b6d4', fontWeight: 'bold'}}>실무진 의사결정 지원 시스템</span> 구축
                          </>
                        )}
                      </p>
                    </div>
                  </CardContent>
                </Card>
                ))}
            </div>
          </div>

          {/* Tech Stack */}
          <Card className="bg-gray-800/80 backdrop-blur-sm border border-gray-600/50 shadow-2xl mb-12">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-white flex items-center gap-3">
                <Zap className="w-6 h-6 text-indigo-600" />
                기술 스택
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-3">
                {project.tech.map((tech) => (
                  <Badge key={tech} className="bg-gradient-to-r from-gray-700 to-gray-600 text-gray-200 border border-gray-500 px-4 py-2 text-sm font-medium shadow-sm">
                    {tech}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Achievements */}
          <Card className="bg-gray-800/80 backdrop-blur-sm border border-gray-600/50 shadow-2xl mb-12">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-white flex items-center gap-3">
                <Award className="w-6 h-6 text-indigo-600" />
                핵심 성취
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-4">
                {project.achievements.map((achievement, index) => (
                  <div key={index} className="flex items-center gap-3 p-4 bg-gradient-to-r from-emerald-900/30 to-teal-900/30 rounded-xl border border-emerald-600/30">
                    <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                    <span className="text-gray-200 font-medium">{achievement}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Project Retrospective */}
          <Card className="bg-gray-800/80 backdrop-blur-sm border border-gray-600/50 shadow-2xl mb-12">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-white flex items-center gap-3">
                <TrendingUp className="w-6 h-6 text-indigo-600" />
                프로젝트 회고
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-gray-700/50 to-gray-600/50 rounded-xl p-6 border border-gray-500">
                  <h4 className="font-bold text-white mb-3 flex items-center gap-2">
                    <Database className="w-4 h-4 text-cyan-400" />
                    SMOTE의 드라마틱한 성능 개선 효과
                  </h4>
                  <p className="text-gray-300 leading-relaxed">
                    처음에 <span style={{color: '#dc2626', fontWeight: 'bold'}}>Cost-Sensitive Learning으로 시도했을 때 Class 0 F1-Score가 0.39로 처참한 결과</span>를 얻었지만, 
                    <span style={{color: '#06b6d4', fontWeight: 'bold'}}>SMOTE 데이터 증강을 적용하니 0.87로 대폭 개선</span>되었습니다. 
                    이를 통해 <span style={{color: '#06b6d4', fontWeight: 'bold'}}>불균형 데이터에서 오버샘플링의 중요성</span>을 체감했습니다.
                  </p>
                </div>
                
                <div className="bg-gradient-to-r from-gray-700/50 to-gray-600/50 rounded-xl p-6 border border-gray-500/50">
                  <h4 className="font-bold text-white mb-3 flex items-center gap-2">
                    <Target className="w-4 h-4 text-green-600" />
                    6가지 모델의 체계적 비교 경험
                  </h4>
                  <p className="text-gray-300 leading-relaxed">
                    <span style={{color: '#16a34a', fontWeight: 'bold'}}>LogisticRegression, KNN, RandomForest, XGBoost, MLP, SVM</span> 6가지 모델을 실제로 비교하닩서 
                    <span style={{color: '#16a34a', fontWeight: 'bold'}}>RandomForest가 Class 0과 1 모두에서 가장 균형잡힌 성능</span>을 보인다는 것을 확인했습니다.
                  </p>
                </div>
                
                <div className="bg-gradient-to-r from-gray-700/50 to-gray-600/50 rounded-xl p-6 border border-gray-500/50">
                  <h4 className="font-bold text-white mb-3 flex items-center gap-2">
                    <Award className="w-4 h-4 text-purple-600" />
                    Feature Importance로 비즈니스 인사이트 도출
                  </h4>
                  <p className="text-gray-300 leading-relaxed">
                    <span style={{color: '#a855f7', fontWeight: 'bold'}}>Weekly Fee(20%), HH Income(18%), Reward Program(16%)</span>이 최상위 요인으로 나와서 
                    신문사가 <span style={{color: '#a855f7', fontWeight: 'bold'}}>가격 전략과 리워드 프로그램에 집중</span>해야 한다는 
                    구체적인 비즈니스 전략을 제안할 수 있었습니다.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* EDA 및 모델 성능 분석 결과 */}
          <Card className="bg-gray-800/80 backdrop-blur-sm border border-gray-600/50 shadow-2xl mb-12">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-white flex items-center gap-3">
                <Database className="w-6 h-6 text-indigo-600" />
                EDA 및 데이터 분석 결과
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-white font-semibold mb-3">이탈 여부 분포 (클래스 불균형)</h4>
                  <img src="/EDA1.png" alt="이탈 여부 분포" className="w-full rounded-lg border border-gray-600" />
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-3">카테고리별 이탈 비율</h4>
                  <img src="/EDA2.png" alt="카테고리별 이탈 비율" className="w-full rounded-lg border border-gray-600" />
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-white font-semibold mb-3">변수 간 상관관계 히트맵</h4>
                  <img src="/heatmap.png" alt="상관관계 히트맵" className="w-full rounded-lg border border-gray-600" />
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-3">연속형 변수 시각화</h4>
                  <img src="/EDA3.png" alt="연속형 변수 시각화" className="w-full rounded-lg border border-gray-600" />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* 모델 성능 비교 및 최적화 */}
          <Card className="bg-gray-800/80 backdrop-blur-sm border border-gray-600/50 shadow-2xl mb-12">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-white flex items-center gap-3">
                <TrendingUp className="w-6 h-6 text-indigo-600" />
                모델 성능 분석 및 최적화
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-8">
              {/* SMOTE 적용 전/후 성능 비교 */}
              <div className="bg-gradient-to-r from-red-900/20 to-green-900/20 rounded-xl p-6 border border-gray-600">
                <h4 className="text-white font-bold text-xl mb-6 text-center">🔥 SMOTE 적용 전/후 드라마틱한 성능 개선</h4>
                
                {/* Cost-Sensitive (적용 전) */}
                <div className="mb-6">
                  <h5 className="text-red-400 font-bold text-lg mb-3">❌ Cost-Sensitive Learning (SMOTE 적용 전) - 처참한 결과</h5>
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm border-collapse border border-red-600">
                      <thead>
                        <tr className="bg-red-900/30">
                          <th className="border border-red-600 px-3 py-2 text-white">모델</th>
                          <th className="border border-red-600 px-3 py-2 text-white">Precision (Class 0)</th>
                          <th className="border border-red-600 px-3 py-2 text-white">Recall (Class 0)</th>
                          <th className="border border-red-600 px-3 py-2 text-white">F1 Score (Class 0)</th>
                          <th className="border border-red-600 px-3 py-2 text-white">Precision (Class 1)</th>
                          <th className="border border-red-600 px-3 py-2 text-white">Recall (Class 1)</th>
                          <th className="border border-red-600 px-3 py-2 text-white">F1 Score (Class 1)</th>
                        </tr>
                      </thead>
                      <tbody className="text-gray-300">
                        <tr><td className="border border-red-600 px-3 py-2">로지스틱 회귀</td><td className="border border-red-600 px-3 py-2 text-red-400 font-bold">0.30</td><td className="border border-red-600 px-3 py-2">0.56</td><td className="border border-red-600 px-3 py-2 text-red-400 font-bold">0.39</td><td className="border border-red-600 px-3 py-2">0.88</td><td className="border border-red-600 px-3 py-2">0.71</td><td className="border border-red-600 px-3 py-2">0.78</td></tr>
                        <tr><td className="border border-red-600 px-3 py-2">KNN</td><td className="border border-red-600 px-3 py-2">0.31</td><td className="border border-red-600 px-3 py-2">0.63</td><td className="border border-red-600 px-3 py-2">0.42</td><td className="border border-red-600 px-3 py-2">0.89</td><td className="border border-red-600 px-3 py-2">0.69</td><td className="border border-red-600 px-3 py-2">0.78</td></tr>
                        <tr><td className="border border-red-600 px-3 py-2">랜덤 포레스트</td><td className="border border-red-600 px-3 py-2">0.49</td><td className="border border-red-600 px-3 py-2">0.45</td><td className="border border-red-600 px-3 py-2">0.47</td><td className="border border-red-600 px-3 py-2">0.88</td><td className="border border-red-600 px-3 py-2">0.90</td><td className="border border-red-600 px-3 py-2">0.89</td></tr>
                        <tr><td className="border border-red-600 px-3 py-2">XGBoost</td><td className="border border-red-600 px-3 py-2">0.79</td><td className="border border-red-600 px-3 py-2 text-red-400 font-bold">0.20</td><td className="border border-red-600 px-3 py-2 text-red-400 font-bold">0.32</td><td className="border border-red-600 px-3 py-2">0.85</td><td className="border border-red-600 px-3 py-2">0.99</td><td className="border border-red-600 px-3 py-2">0.91</td></tr>
                        <tr><td className="border border-red-600 px-3 py-2">MLP</td><td className="border border-red-600 px-3 py-2">0.35</td><td className="border border-red-600 px-3 py-2">0.55</td><td className="border border-red-600 px-3 py-2">0.42</td><td className="border border-red-600 px-3 py-2">0.88</td><td className="border border-red-600 px-3 py-2">0.77</td><td className="border border-red-600 px-3 py-2">0.82</td></tr>
                        <tr><td className="border border-red-600 px-3 py-2">SVM</td><td className="border border-red-600 px-3 py-2">0.32</td><td className="border border-red-600 px-3 py-2">0.60</td><td className="border border-red-600 px-3 py-2">0.42</td><td className="border border-red-600 px-3 py-2">0.89</td><td className="border border-red-600 px-3 py-2">0.72</td><td className="border border-red-600 px-3 py-2">0.79</td></tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                
                {/* SMOTE 적용 후 */}
                <div>
                  <h5 className="text-green-400 font-bold text-lg mb-3">✅ SMOTE 데이터 증강 후 - 놀라운 성능 향상!</h5>
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm border-collapse border border-green-600">
                      <thead>
                        <tr className="bg-green-900/30">
                          <th className="border border-green-600 px-3 py-2 text-white">모델</th>
                          <th className="border border-green-600 px-3 py-2 text-white">Precision (Class 0)</th>
                          <th className="border border-green-600 px-3 py-2 text-white">Recall (Class 0)</th>
                          <th className="border border-green-600 px-3 py-2 text-white">F1 Score (Class 0)</th>
                          <th className="border border-green-600 px-3 py-2 text-white">Precision (Class 1)</th>
                          <th className="border border-green-600 px-3 py-2 text-white">Recall (Class 1)</th>
                          <th className="border border-green-600 px-3 py-2 text-white">F1 Score (Class 1)</th>
                        </tr>
                      </thead>
                      <tbody className="text-gray-300">
                        <tr><td className="border border-green-600 px-3 py-2">로지스틱 회귀</td><td className="border border-green-600 px-3 py-2 text-green-400 font-bold">0.82</td><td className="border border-green-600 px-3 py-2">0.71</td><td className="border border-green-600 px-3 py-2 text-green-400 font-bold">0.76</td><td className="border border-green-600 px-3 py-2">0.74</td><td className="border border-green-600 px-3 py-2">0.85</td><td className="border border-green-600 px-3 py-2">0.79</td></tr>
                        <tr><td className="border border-green-600 px-3 py-2">KNN</td><td className="border border-green-600 px-3 py-2">0.86</td><td className="border border-green-600 px-3 py-2">0.78</td><td className="border border-green-600 px-3 py-2">0.82</td><td className="border border-green-600 px-3 py-2">0.79</td><td className="border border-green-600 px-3 py-2">0.87</td><td className="border border-green-600 px-3 py-2">0.83</td></tr>
                        <tr className="bg-green-900/20"><td className="border border-green-600 px-3 py-2 font-bold">랜덤 포레스트 ⭐</td><td className="border border-green-600 px-3 py-2 text-green-400 font-bold">0.91</td><td className="border border-green-600 px-3 py-2">0.83</td><td className="border border-green-600 px-3 py-2 text-green-400 font-bold">0.87</td><td className="border border-green-600 px-3 py-2">0.84</td><td className="border border-green-600 px-3 py-2">0.91</td><td className="border border-green-600 px-3 py-2 text-green-400 font-bold">0.88</td></tr>
                        <tr><td className="border border-green-600 px-3 py-2">XGBoost</td><td className="border border-green-600 px-3 py-2">0.96</td><td className="border border-green-600 px-3 py-2 text-green-400 font-bold">0.79</td><td className="border border-green-600 px-3 py-2 text-green-400 font-bold">0.86</td><td className="border border-green-600 px-3 py-2">0.82</td><td className="border border-green-600 px-3 py-2">0.97</td><td className="border border-green-600 px-3 py-2">0.89</td></tr>
                        <tr><td className="border border-green-600 px-3 py-2">MLP</td><td className="border border-green-600 px-3 py-2">0.89</td><td className="border border-green-600 px-3 py-2">0.78</td><td className="border border-green-600 px-3 py-2">0.83</td><td className="border border-green-600 px-3 py-2">0.80</td><td className="border border-green-600 px-3 py-2">0.91</td><td className="border border-green-600 px-3 py-2">0.85</td></tr>
                        <tr><td className="border border-green-600 px-3 py-2">SVM</td><td className="border border-green-600 px-3 py-2">0.90</td><td className="border border-green-600 px-3 py-2">0.76</td><td className="border border-green-600 px-3 py-2">0.82</td><td className="border border-green-600 px-3 py-2">0.79</td><td className="border border-green-600 px-3 py-2">0.92</td><td className="border border-green-600 px-3 py-2">0.85</td></tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                
                <div className="mt-6 text-center">
                  <p className="text-lg font-bold text-cyan-400">💡 핵심 성과: 로지스틱회귀 Class 0 F1-Score 0.39 → 0.76 (95% 향상!)</p>
                  <p className="text-lg font-bold text-cyan-400">🏆 RandomForest 최종 선정: Class 0 F1-Score 0.87, Class 1 F1-Score 0.88</p>
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-white font-semibold mb-3">ROC 곡선 (최종 성능)</h4>
                  <img src="/ROC.png" alt="ROC 곡선" className="w-full rounded-lg border border-gray-600" />
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-3">Feature Importance</h4>
                  <img src="/중요도.png" alt="변수 중요도" className="w-full rounded-lg border border-gray-600" />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Streamlit 대시보드 */}
          <Card className="bg-gray-800/80 backdrop-blur-sm border border-gray-600/50 shadow-2xl mb-12">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-white flex items-center gap-3">
                <ExternalLink className="w-6 h-6 text-indigo-600" />
                실시간 예측 대시보드
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-white font-semibold mb-3">개별 고객 이탈 예측</h4>
                  <img src="/streamlit-page1.png" alt="Streamlit 대시보드 1" className="w-full rounded-lg border border-gray-600" />
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-3">이탈 위험 TOP 50 고객</h4>
                  <img src="/streamlit-page2.png" alt="Streamlit 대시보드 2" className="w-full rounded-lg border border-gray-600" />
                </div>
              </div>
            </CardContent>
          </Card>

        </div>
      </div>
    </div>
  )
}