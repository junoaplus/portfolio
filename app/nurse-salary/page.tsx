'use client'
import { Navigation } from '@/components/navigation'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Github, ExternalLink, Calendar, Users, Star, TrendingUp, Zap, ArrowLeft, CheckCircle, Award, Target, Lightbulb, Database } from 'lucide-react'
import Link from 'next/link'

export default function NurseSalaryDetail() {
  const project = {
    id: 5,
    title: "간호사 퇴사 예측 분석",
    description: "의료기관 인력 관리 최적화를 위한 퇴사 예측 모델 (팀 프로젝트)",
    longDescription: "간호사 퇴사 문제는 의료기관의 핵심 과제입니다. 본 프로젝트는 **1676명의 의료진 데이터 중 간호사 822명을 추출**하고, **55세 이상 은퇴 예정자를 제외한 794명**을 대상으로 퇴사 예측 모델을 개발했습니다. **StratifiedKFold와 GridSearchCV**로 모델 성능을 최적화하여 **LogisticRegression에서 F1-Score 0.76 달성**했습니다. **Feature Importance 분석**을 통해 나이, 월급, 출퇴근거리가 핵심 퇴사 요인임을 확인하고, 의료기관에 **구체적인 인력 관리 전략**을 제안했습니다.",
    image: "/퇴사여부분포.png",
    tech: ["LogisticRegression", "StratifiedKFold", "GridSearchCV", "OneHotEncoding", "StandardScaler", "Python", "scikit-learn", "RandomForest", "XGBoost", "LightGBM", "SVM", "pandas", "matplotlib", "seaborn"],
    category: "Traditional ML",
    status: "Completed",
    date: "2025.03.14 - 2025.03.18 (5일)",
    github: "https://github.com/hwangjunho-sknetworks/ML-1Team",
    demo: null,
    achievements: [
      "LogisticRegression 모델로 F1-Score 0.76 달성 (5가지 알고리즘 중 최고 성능)",
      "1676명→822명→794명 체계적 데이터 정제를 통한 고품질 학습 데이터 확보",
      "StratifiedKFold + GridSearchCV로 데이터 불균형 대응 및 하이퍼파라미터 최적화",
      "나이, 월급, 출퇴근거리가 퇴사 핵심 요인임을 Feature Importance로 입증",
      "LogisticRegression 계수 분석으로 각 변수의 양/음 상관관계 정량적 해석",
      "의료기관 맞춤형 인력 관리 전략 제안 (초기 적응 프로그램, 급여 체계 개선, 기숙사 제공)"
    ],
    challenges: [
      "다직종 혼재 데이터: 1676명 의료진 중 간호사만 822명으로 타 직종(의사, 치료사, 관리직) 데이터가 혼재하여 정확한 간호사 퇴사 패턴 파악 어려움",
      "은퇴 vs 퇴사 구분: 나이가 55세 이상인 간호사는 자연 은퇴로 인한 퇴사 가능성이 높아 실질적 퇴사 요인 분석에 노이즈로 작용",
      "클래스 불균형: 퇴사하지 않은 간호사가 퇴사한 간호사보다 훨씬 많아 소수 클래스(퇴사자) 예측 성능 저하",
      "복합적 퇴사 요인: 워라밸, 직무만족도, 근무환경만족도 등 주관적 지표와 나이, 월급, 근속연수 등 객관적 지표가 복합적으로 퇴사에 영향",
      "모델 성능 최적화: F1-Score 기준 최적화 시 Precision과 Recall 트레이드오프 문제로 균형잡힌 성능 확보 어려움",
      "실무 적용성: 단순 예측 정확도보다는 의료기관이 실제 활용할 수 있는 구체적 인사이트와 액션 플랜 도출 필요"
    ],
    solutions: [
      "체계적 데이터 필터링: 전체 의료진 1676명 → 간호사만 추출 822명 → 55세 이상 은퇴 예정자 제외 794명으로 순차 정제하여 순수한 간호사 퇴사 데이터 확보",
      "StratifiedKFold 적용: 퇴사/비퇴사 비율을 유지하면서 교차검증을 수행하여 클래스 불균형 문제를 해결하고 과적합 방지",
      "GridSearchCV를 통한 하이퍼파라미터 최적화: F1-Score를 기준으로 Precision과 Recall의 조화평균을 최대화하여 균형잡힌 모델 성능 확보",
      "수치형/범주형 변수 분리 전처리: 수치형 변수(나이, 월급, 근속연수)는 StandardScaler로 정규화, 범주형 변수는 원핫인코딩으로 처리하여 모델 학습 최적화",
      "LogisticRegression 계수 해석: 양의 계수(나이 많을수록 퇴사율 감소)와 음의 계수(출퇴근거리 길수록 퇴사율 증가)를 정량적으로 분석하여 비즈니스 인사이트 도출",
      "실무진 대상 구체적 전략 제안: 신입 간호사 적응 프로그램, 급여 및 승진 체계 개선, 출퇴근 부담 경감(기숙사, 통근버스) 등 즉시 실행 가능한 솔루션 제시"
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
                <span className="font-bold text-gray-200">간호사 퇴사 예측</span>을 위한 머신러닝 분류 모델 개발 프로젝트입니다. <span className="font-bold text-gray-200">체계적인 EDA와 데이터 정제</span>를 통해 1676명→822명→794명으로 고품질 학습 데이터를 확보하고, <span className="font-bold text-gray-200">5가지 분류 알고리즘의 성능을 비교 분석</span>하여 최적의 예측 모델을 구축했습니다. <span className="font-bold text-gray-200">StratifiedKFold + GridSearchCV</span>로 모델을 최적화하여 <span className="font-bold text-gray-200">LogisticRegression에서 F1-Score 0.76</span>을 달성했으며, <span className="font-bold text-gray-200">Feature Importance 분석</span>을 통해 퇴사 요인에 대한 실무적 인사이트를 도출했습니다.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-gray-700 to-gray-600 rounded-xl p-6 border border-gray-500">
                  <h4 className="font-bold text-white mb-3 flex items-center gap-2">
                    <Users className="w-5 h-5 text-cyan-400" />
                    팀 구성
                  </h4>
                  <p className="text-gray-300">총 3명</p>
                </div>
                
                <div className="bg-gradient-to-br from-gray-700 to-gray-600 rounded-xl p-6 border border-gray-500">
                  <h4 className="font-bold text-white mb-3 flex items-center gap-2">
                    <Calendar className="w-5 h-5 text-cyan-400" />
                    개발 기간
                  </h4>
                  <p className="text-gray-300">2025.03.14 - 2025.03.18<br/>(5일)</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* 담당 역할 */}
          <Card className="bg-gray-800/80 backdrop-blur-sm border border-gray-600/50 shadow-2xl mb-12">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-white flex items-center gap-3">
                <Star className="w-6 h-6 text-indigo-600" />
                담당 역할 (메인 데이터 분석가)
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="bg-gradient-to-br from-gray-700 to-gray-600 rounded-xl p-6 border border-gray-500">
                <div className="text-gray-300 space-y-2 text-lg">
                  <div>• <span className="text-cyan-400 font-bold">데이터 정제</span> (1676명→822명→794명 순차 필터링)</div>
                  <div>• <span className="text-cyan-400 font-bold">5가지 분류 모델</span> 구현 및 성능 비교</div>
                  <div>• <span className="text-cyan-400 font-bold">StratifiedKFold + GridSearchCV</span> 최적화</div>
                  <div>• <span className="text-cyan-400 font-bold">Feature Importance</span> 분석 및 해석</div>
                  <div>• <span className="text-cyan-400 font-bold">LogisticRegression 계수</span> 해석을 통한 인사이트 도출</div>
                  <div>• <span className="text-cyan-400 font-bold">의료기관 인력 관리 전략</span> 제안 및 보고</div>
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
              <p className="text-base lg:text-lg text-gray-300 font-medium">실제 개발 과정에서 마주한 회귀 분석 문제들과 해결 과정</p>
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
                            <span style={{color: '#06b6d4', fontWeight: 'bold'}}>체계적 데이터 필터링</span>: 전체 의료진 <span style={{color: '#06b6d4', fontWeight: 'bold'}}>1676명 → 간호사만 추출 822명 → 55세 이상 은퇴 예정자 제외 794명</span>으로 순차 정제하여 <span style={{color: '#06b6d4', fontWeight: 'bold'}}>순수한 간호사 퇴사 데이터</span> 확보
                          </>
                        ) : index === 1 ? (
                          <>
                            <span style={{color: '#06b6d4', fontWeight: 'bold'}}>StratifiedKFold</span> 적용: <span style={{color: '#06b6d4', fontWeight: 'bold'}}>퇴사/비퇴사 비율을 유지</span>하면서 교차검증을 수행하여 <span style={{color: '#06b6d4', fontWeight: 'bold'}}>클래스 불균형 문제</span>를 해결하고 <span style={{color: '#06b6d4', fontWeight: 'bold'}}>과적합 방지</span>
                          </>
                        ) : index === 2 ? (
                          <>
                            <span style={{color: '#06b6d4', fontWeight: 'bold'}}>GridSearchCV를 통한 하이퍼파라미터 최적화</span>: <span style={{color: '#06b6d4', fontWeight: 'bold'}}>F1-Score</span>를 기준으로 <span style={{color: '#06b6d4', fontWeight: 'bold'}}>Precision과 Recall의 조화평균</span>을 최대화하여 균형잡힌 모델 성능 확보
                          </>
                        ) : index === 3 ? (
                          <>
                            <span style={{color: '#06b6d4', fontWeight: 'bold'}}>수치형/범주형 변수 분리 전처리</span>: 수치형 변수(나이, 월급, 근속연수)는 <span style={{color: '#06b6d4', fontWeight: 'bold'}}>StandardScaler로 정규화</span>, 범주형 변수는 <span style={{color: '#06b6d4', fontWeight: 'bold'}}>원핫인코딩</span>으로 처리하여 <span style={{color: '#06b6d4', fontWeight: 'bold'}}>모델 학습 최적화</span>
                          </>
                        ) : index === 4 ? (
                          <>
                            <span style={{color: '#06b6d4', fontWeight: 'bold'}}>LogisticRegression 계수 해석</span>: <span style={{color: '#06b6d4', fontWeight: 'bold'}}>양의 계수</span>(나이 많을수록 퇴사율 감소)와 <span style={{color: '#06b6d4', fontWeight: 'bold'}}>음의 계수</span>(출퇴근거리 길수록 퇴사율 증가)를 정량적으로 분석하여 <span style={{color: '#06b6d4', fontWeight: 'bold'}}>비즈니스 인사이트</span> 도출
                          </>
                        ) : (
                          <>
                            <span style={{color: '#06b6d4', fontWeight: 'bold'}}>실무진 대상 구체적 전략 제안</span>: <span style={{color: '#06b6d4', fontWeight: 'bold'}}>신입 간호사 적응 프로그램</span>, 급여 및 승진 체계 개선, 출퇴근 부담 경감(기숙사, 통근버스) 등 <span style={{color: '#06b6d4', fontWeight: 'bold'}}>즉시 실행 가능한 솔루션</span> 제시
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
                    StratifiedKFold의 효과적 활용
                  </h4>
                  <p className="text-gray-300 leading-relaxed">
                    <span style={{color: '#06b6d4', fontWeight: 'bold'}}>StratifiedKFold를 통한 클래스 불균형 해결</span>의 중요성을 체감했습니다. 
                    <span style={{color: '#06b6d4', fontWeight: 'bold'}}>단순 train_test_split과 달리 퇴사/비퇴사 비율을 유지</span>하면서 교차검증을 수행하니 
                    모델 성능이 안정적으로 향상되었습니다.
                  </p>
                </div>
                
                <div className="bg-gradient-to-r from-gray-700/50 to-gray-600/50 rounded-xl p-6 border border-gray-500/50">
                  <h4 className="font-bold text-white mb-3 flex items-center gap-2">
                    <Target className="w-4 h-4 text-green-600" />
                    도메인 특화 데이터 정제의 가치
                  </h4>
                  <p className="text-gray-300 leading-relaxed">
                    <span style={{color: '#16a34a', fontWeight: 'bold'}}>전체 의료진에서 간호사만 추출하고, 55세 이상 은퇴 예정자를 제외</span>하는 
                    도메인 지식 기반 데이터 정제가 모델 성능에 결정적이었습니다. 
                    <span style={{color: '#16a34a', fontWeight: 'bold'}}>노이즈 데이터 제거만으로도 예측 정확도가 크게 향상</span>됨을 확인했습니다.
                  </p>
                </div>
                
                <div className="bg-gradient-to-r from-gray-700/50 to-gray-600/50 rounded-xl p-6 border border-gray-500/50">
                  <h4 className="font-bold text-white mb-3 flex items-center gap-2">
                    <Award className="w-4 h-4 text-purple-600" />
                    실무적 인사이트 도출의 중요성
                  </h4>
                  <p className="text-gray-300 leading-relaxed">
                    <span style={{color: '#a855f7', fontWeight: 'bold'}}>나이, 월급, 출퇴근거리가 퇴사 핵심 요인</span>임을 확인하고, 
                    이를 바탕으로 <span style={{color: '#a855f7', fontWeight: 'bold'}}>신입 간호사 적응 프로그램, 기숙사 제공 등 즉시 실행 가능한 솔루션</span>을 
                    제안할 수 있었습니다. 단순 모델링을 넘어 실무진이 활용할 수 있는 구체적 전략을 도출하는 것이 핵심이었습니다.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* EDA 및 데이터 분석 과정 */}
          <Card className="bg-gray-800/80 backdrop-blur-sm border border-gray-600/50 shadow-2xl mb-12">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-white flex items-center gap-3">
                <Database className="w-6 h-6 text-indigo-600" />
                EDA 및 데이터 분석 과정
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="bg-gradient-to-r from-gray-700/50 to-gray-600/50 rounded-xl p-6 border border-gray-500">
                <h4 className="text-white font-semibold mb-4">1단계: 데이터 구조 확인 및 결측치/이상치 탐색</h4>
                <div className="text-gray-300 space-y-2">
                  <div>• <span className="font-bold text-cyan-400">1676명의 의료진 데이터, 35개 컬럼</span></div>
                  <div>• <span className="font-bold text-cyan-400">결측치: 모든 컬럼에서 결측치 없음 확인</span></div>
                  <div>• <span className="font-bold text-cyan-400">이상치: 나이, 월급, 현 매니저와 근속연수에서 발견</span></div>
                  <div>• <span className="font-bold text-yellow-400">핵심 발견: 55세 이상은 은퇴로 인한 자연 퇴사 가능성 높음</span></div>
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-white font-semibold mb-3">간호사 데이터만 추출 (1676명→822명)</h4>
                  <img src="/간호사데이터만추출.png" alt="간호사 데이터 추출" className="w-full rounded-lg border border-gray-600" />
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-3">55세 이상 은퇴 예정자 제거 (822명→794명)</h4>
                  <img src="/55세이상간호사제거.png" alt="55세 이상 간호사 제거" className="w-full rounded-lg border border-gray-600" />
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-white font-semibold mb-3">퇴사 여부 분포 (클래스 불균형 확인)</h4>
                  <img src="/퇴사여부분포.png" alt="퇴사 여부 분포" className="w-full rounded-lg border border-gray-600" />
                  <p className="text-sm text-gray-400 mt-2">퇴사하지 않은 인원이 훨씬 많아 데이터 불균형 존재 → StratifiedKFold 적용 필요성 확인</p>
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-3">변수 간 상관관계 히트맵</h4>
                  <img src="/변수간상관관계.png" alt="변수간 상관관계" className="w-full rounded-lg border border-gray-600" />
                  <p className="text-sm text-gray-400 mt-2">주요 지표들의 상관관계를 색상으로 시각화하여 퇴사 영향 요인 사전 파악</p>
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
            <CardContent className="space-y-6">
              <div className="bg-gradient-to-r from-blue-900/20 to-cyan-900/20 rounded-xl p-6 border border-blue-600/30 mb-6">
                <h4 className="text-white font-semibold mb-4">StratifiedKFold + GridSearchCV 최적화 전략</h4>
                <div className="text-gray-300 space-y-3">
                  <div>• <span className="font-bold text-cyan-400">F1-Score 기준 최적화</span>: Precision과 Recall의 조화평균으로 균형잡힌 성능 확보</div>
                  <div>• <span className="font-bold text-cyan-400">StratifiedKFold 적용</span>: 퇴사/비퇴사 비율을 유지하며 교차검증으로 과적합 방지</div>
                  <div>• <span className="font-bold text-cyan-400">GridSearchCV</span>: 하이퍼파라미터 자동 최적화로 모델 성능 극대화</div>
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-green-900/20 to-emerald-900/20 rounded-xl p-6 border border-green-600/30 mb-6">
                <h4 className="text-white font-semibold mb-4">모델 성능 비교 결과</h4>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm text-gray-300">
                    <thead>
                      <tr className="border-b border-gray-600">
                        <th className="text-left py-2 px-3">모델</th>
                        <th className="text-center py-2 px-3">정확도</th>
                        <th className="text-center py-2 px-3">정밀도</th>
                        <th className="text-center py-2 px-3">재현율</th>
                        <th className="text-center py-2 px-3">F1-Score</th>
                      </tr>
                    </thead>
                    <tbody className="text-sm">
                      <tr className="border-b border-gray-700 bg-green-900/20">
                        <td className="py-2 px-3 font-bold text-green-400">LogisticRegression 🏆</td>
                        <td className="text-center py-2 px-3">0.93</td>
                        <td className="text-center py-2 px-3">0.77</td>
                        <td className="text-center py-2 px-3">0.74</td>
                        <td className="text-center py-2 px-3 font-bold text-green-400">0.76</td>
                      </tr>
                      <tr className="border-b border-gray-700">
                        <td className="py-2 px-3">RandomForest</td>
                        <td className="text-center py-2 px-3">0.92</td>
                        <td className="text-center py-2 px-3">0.75</td>
                        <td className="text-center py-2 px-3">0.70</td>
                        <td className="text-center py-2 px-3">0.72</td>
                      </tr>
                      <tr className="border-b border-gray-700">
                        <td className="py-2 px-3">LightGBM</td>
                        <td className="text-center py-2 px-3">0.91</td>
                        <td className="text-center py-2 px-3">0.73</td>
                        <td className="text-center py-2 px-3">0.68</td>
                        <td className="text-center py-2 px-3">0.70</td>
                      </tr>
                      <tr className="border-b border-gray-700">
                        <td className="py-2 px-3">XGBoost</td>
                        <td className="text-center py-2 px-3">0.90</td>
                        <td className="text-center py-2 px-3">0.71</td>
                        <td className="text-center py-2 px-3">0.65</td>
                        <td className="text-center py-2 px-3">0.68</td>
                      </tr>
                      <tr>
                        <td className="py-2 px-3">SVM</td>
                        <td className="text-center py-2 px-3">0.89</td>
                        <td className="text-center py-2 px-3">0.69</td>
                        <td className="text-center py-2 px-3">0.62</td>
                        <td className="text-center py-2 px-3">0.65</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-white font-semibold mb-3">LogisticRegression 성능 향상 과정</h4>
                  <img src="/로지스틱회귀성능향상!.png" alt="로지스틱회귀 성능 향상" className="w-full rounded-lg border border-gray-600" />
                  <p className="text-sm text-gray-400 mt-2">StratifiedKFold 적용 전후 비교: F1-Score 0.74 → 0.76 향상</p>
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-3">RandomForest 분류 리포트</h4>
                  <img src="/rf_report.png" alt="RandomForest 리포트" className="w-full rounded-lg border border-gray-600" />
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-white font-semibold mb-3">LightGBM 분류 리포트</h4>
                  <img src="/lightgbm_report.png" alt="LightGBM 리포트" className="w-full rounded-lg border border-gray-600" />
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-3">XGBoost 분류 리포트</h4>
                  <img src="/xgboost_report.png" alt="XGBoost 리포트" className="w-full rounded-lg border border-gray-600" />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Feature Importance 분석 및 인사이트 도출 */}
          <Card className="bg-gray-800/80 backdrop-blur-sm border border-gray-600/50 shadow-2xl mb-12">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-white flex items-center gap-3">
                <Award className="w-6 h-6 text-indigo-600" />
                Feature Importance 분석 및 비즈니스 인사이트
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="bg-gradient-to-r from-purple-900/20 to-pink-900/20 rounded-xl p-6 border border-purple-600/30 mb-6">
                <h4 className="text-white font-semibold mb-4">핵심 발견사항</h4>
                <div className="text-gray-300 space-y-3">
                  <div>🥇 <span className="font-bold text-purple-400">나이</span>: 퇴사에 가장 큰 영향 (나이가 많을수록 퇴사 확률 감소)</div>
                  <div>🥈 <span className="font-bold text-purple-400">월급</span>: 두 번째로 큰 영향 요인</div>
                  <div>🥉 <span className="font-bold text-purple-400">출퇴근거리</span>: 거리가 길수록 퇴사 확률 증가</div>
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-white font-semibold mb-3">LightGBM 피처 중요도 (수치)</h4>
                  <img src="/피처별중요도_숫자.png" alt="피처별 중요도 숫자" className="w-full rounded-lg border border-gray-600" />
                  <p className="text-sm text-gray-400 mt-2">성능이 좋았던 LightGBM 모델의 가중치 기반 중요도 분석</p>
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-3">LogisticRegression 계수 분석</h4>
                  <img src="/피처벌중요도상위15개_그래프.png" alt="상위 15개 피처 중요도" className="w-full rounded-lg border border-gray-600" />
                  <p className="text-sm text-gray-400 mt-2">양/음 상관관계 해석을 위한 LogisticRegression 계수 시각화</p>
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-green-900/20 to-emerald-900/20 rounded-xl p-6 border border-green-600/30">
                <h4 className="text-white font-semibold mb-4">의료기관 맞춤 인력 관리 전략 제안</h4>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h5 className="text-green-400 font-semibold mb-3">이탈 방지 방안</h5>
                    <div className="text-sm text-gray-300 space-y-2">
                      <div>• <span className="font-bold">신입 간호사 초기 적응 프로그램</span> 운영</div>
                      <div>• <span className="font-bold">급여 및 승진 체계</span> 개선으로 만족도 향상</div>
                      <div>• <span className="font-bold">워라밸 개선</span>을 통한 초과근무 감소</div>
                      <div>• <span className="font-bold">기숙사, 통근버스 제공</span>으로 출퇴근 부담 경감</div>
                    </div>
                  </div>
                  <div>
                    <h5 className="text-green-400 font-semibold mb-3">채용 전략</h5>
                    <div className="text-sm text-gray-300 space-y-2">
                      <div>• <span className="font-bold">결혼 상태인 지원자</span> 우선 고려</div>
                      <div>• <span className="font-bold">적정 연령대</span> (너무 어리지 않은)</div>
                      <div>• <span className="font-bold">병원 근처 거주자</span> 선호</div>
                      <div>• <span className="font-bold">장기 근속 의향</span> 사전 확인</div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <h4 className="text-white font-semibold mb-3">실제 예측 결과 샘플</h4>
                <img src="/실제예측결과.png" alt="실제 예측 결과" className="w-full rounded-lg border border-gray-600" />
                <p className="text-sm text-gray-400 mt-2">모델이 실제 간호사 데이터에 대해 퇴사 여부를 예측한 결과</p>
              </div>
            </CardContent>
          </Card>

        </div>
      </div>
    </div>
  )
}