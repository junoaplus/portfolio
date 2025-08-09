'use client'
import { Navigation } from '@/components/navigation'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Github, ExternalLink, Calendar, Users, Star, TrendingUp, Zap, ArrowLeft, CheckCircle, Award, Target, Lightbulb, Database } from 'lucide-react'
import Link from 'next/link'

export default function BoardgameChatbotDetail() {
  const project = {
    id: 3,
    title: "보드게임 룰 챗봇 '보비(BOVI)'",
    description: "LLM 파인튜닝 + RAG 기반 보드게임 전문 챗봇 시스템 (팀 프로젝트)",
    longDescription: "보드게임 초보자들의 게임 선택 장애와 복잡한 룰 이해를 돕기 위해 개발된 전문 AI 챗봇입니다. GPT-3.5-turbo 파인튜닝과 FAISS 벡터 DB를 활용한 RAG 시스템으로 정확한 룰 설명과 개인 취향 기반 보드게임 추천을 제공합니다. Django 웹 프레임워크로 구축되어 AWS EC2에서 서비스되고 있습니다.",
    image: "/보드게임.png",
    tech: ["Fine-tuning", "EXAONE", "RAG", "FAISS", "LangChain", "AWS EC2", "Django", "FastAPI", "Python", "Uvicorn", "PostgreSQL", "Nginx"],
    category: "AI/ML",
    status: "Completed",
    date: "2025.05.16 - 2025.06.11 (4주)",
    github: "https://github.com/junoaplus/SKN11-4th-3Team",
    demo: "#",
    achievements: [
      "EXAONE 파인튜닝 모델 구현 및 RAG 하이브리드 시스템 구축",
      "217개 게임별 개별 FAISS 벡터DB + 통합 추천용 벡터DB 구축",
      "모든 QA 데이터 PostgreSQL 자동 저장 시스템 구현",
      "자동 IP 감지를 통한 QR 모바일 접속 시스템 구현",
      "커스텀 세션 관리 시스템(40분 타임아웃, 추천/룰 분리)",
      "Django + FastAPI 하이브리드 아키텍처로 안정적 서비스 운영"
    ],
    challenges: [
      "기존 범용 LLM의 도메인 특화 성능 한계: 기존 범용 LLM으로는 보드게임 도메인 특화 답변 품질이 낮았음",
      "217개 게임 전체 파인튜닝 데이터 부족: 217개 게임 전체 파인튜닝용 데이터 부족으로 즉시 적용 불가",
      "청킹 전략 차별화를 통한 이중 벡터DB 아키텍처: 게임 추천과 룰 설명은 완전히 다른 검색 패턴이 필요한데 청킹 방식도 달라야 함",
      "보드게임카페 실사용을 위한 QR 모바일 접근성: 은밀한 정보를 숨겨야 하는 게임들에서 태블릿으로 룰 질문하면 다른 플레이어들에게 전략이나 역할이 노출될 위험",
      "엑사온 모델 LangChain 미지원에 따른 사용자별 세션 관리 시스템: 엑사온 파인튜닝 모델이 LangChain과 호환되지 않아서 사용자별 대화 맥락 관리가 불가능했음",
      "멀티서비스 백엔드 안정성 확보: RAG 서비스, 파인튜닝 서비스, 세션 관리가 하나의 백엔드에서 동시 실행될 때 메모리나 CPU 과부하로 전체 시스템 다운 우려",
      "대용량 벡터DB 메모리 관리: 217개 게임의 벡터DB를 모두 메모리에 로드하면 메모리 부족과 응답 지연 우려",
      "사용자 행동 데이터 분석 부재: 단순 로그 저장만으로는 게임별 인기도나 사용자 관심 패턴을 파악하기 어려워 서비스 개선 방향 설정이 불가능했음"
    ],
    solutions: [
      "단계적 접근법 사용. GPT-4로 뱅 게임만 질문-답변 쌍 1500개 생성해서 엑사온 파인튜닝 실험했더니 83.7% 정확도 달성. 본 시스템에서는 벡터DB로 정확한 룰 찾아서 GPT가 답변하게 한 후, 그 질문-답변을 DB에 자동 저장해서 나중에 게임별로 파인튜닝할 데이터를 축적하는 전략",
      "벡터DB에서 관련 룰을 정확하게 찾아온 다음 GPT가 생성한 모든 질문-답변을 자동으로 데이터베이스에 저장하는 시스템 구현. 사용자가 질문할 때마다 고품질 학습 데이터가 자동으로 쌓이게 만들어서 향후 게임별 파인튜닝에 활용할 계획",
      "게임 추천용은 게임별로 청킹해서 통합 벡터DB 구축, 룰 설명용은 217개 게임마다 개별 벡터DB 만들고 각 게임 내에서 룰 기반이나 의미적 단위로 과학적 청킹. 이렇게 청킹 전략을 차별화해서 각 도메인에 최적화된 검색 정확도 확보",
      "QR코드 생성 시스템 만들어서 사용자가 개인 스마트폰으로 접속할 수 있게 구현. 5개 외부 IP 서비스를 순차적으로 시도해서 안정적으로 모바일 URL 생성하도록 설계",
      "사용자가 세션 요청하면 고유 세션 ID 발급하고, 그 세션으로 모든 대화 맥락을 유지하는 커스텀 시스템 직접 구현. 추천용 세션과 룰 설명용 세션을 분리해서 각각 독립적으로 대화 히스토리 관리하고 40분 타임아웃으로 메모리 누수 방지",
      "서비스별로 독립적 초기화와 헬스체크 구현해서 한 서비스가 실패해도 다른 기능은 정상 작동하도록 격리. 백그라운드에서 주기적으로 세션 정리하는 별도 스레드 운영으로 시스템 안정성 확보",
      "게임 선택 후 해당 게임의 벡터DB만 동적 로드하는 지연 로딩 방식으로 메모리 사용량 최적화하고, RunPod GPU 인스턴스 활용해서 임베딩 성능 향상",
      "모델별 QA 데이터 분리 저장 및 SQL 집계 쿼리로 게임별 질문 빈도 순위 추출. 두 모델 데이터를 통합 분석하여 사용자 관심도 TOP 10과 모델 성능 비교 지표를 실시간 도출하는 분석 시스템 구축"
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
          <Link href="/">
            <Button variant="outline" className="bg-gray-800/70 backdrop-blur-sm border-gray-600/50 text-white hover:bg-gray-700/90 mb-8 rounded-xl shadow-lg">
              <ArrowLeft className="w-4 h-4 mr-2" />
              메인으로 돌아가기
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
                <span className="font-bold text-gray-200">보드게임 초보자들의 게임 선택 장애와 복잡한 룰 이해</span>를 돕기 위해 개발된 전문 AI 챗봇입니다. <span className="font-bold text-gray-200">EXAONE 파인튜닝 모델과 FAISS 벡터 DB를 활용한 RAG 시스템</span>으로 정확한 룰 설명과 개인 취향 기반 보드게임 추천을 제공합니다. <span className="font-bold text-gray-200">217개 게임별 개별 벡터DB 구축</span>과 <span className="font-bold text-gray-200">커스텀 세션 관리 시스템</span>으로 사용자 맞춤형 서비스를 구현하였으며, <span className="font-bold text-gray-200">Django + FastAPI 하이브리드 아키텍처</span>로 AWS EC2에서 안정적으로 서비스되고 있습니다.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-gray-700 to-gray-600 rounded-xl p-6 border border-gray-500">
                  <h4 className="font-bold text-white mb-3 flex items-center gap-2">
                    <Users className="w-5 h-5 text-cyan-400" />
                    팀 구성 (BoardNavi)
                  </h4>
                  <p className="text-gray-300">총 4명<br/>풀스택 1명(본인), 프론트 1명, 백엔드 1명, AI 엔지니어 1명</p>
                </div>
                
                <div className="bg-gradient-to-br from-gray-700 to-gray-600 rounded-xl p-6 border border-gray-500">
                  <h4 className="font-bold text-white mb-3 flex items-center gap-2">
                    <Calendar className="w-5 h-5 text-cyan-400" />
                    개발 기간
                  </h4>
                  <p className="text-gray-300">2025.05.16 - 2025.06.11<br/>(약 4주)</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* 담당 역할 */}
          <Card className="bg-gray-800/80 backdrop-blur-sm border border-gray-600/50 shadow-2xl mb-12">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-white flex items-center gap-3">
                <Star className="w-6 h-6 text-indigo-600" />
                담당 역할 (팀장/풀스택 개발)
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="bg-gradient-to-br from-gray-700 to-gray-600 rounded-xl p-6 border border-gray-500">
                <div className="text-gray-300 space-y-2 text-lg">
                  <div>• <span className="text-cyan-400 font-bold">프로젝트 총괄</span> 및 팀 리딩</div>
                  <div>• <span className="text-cyan-400 font-bold">EXAONE 파인튜닝</span> 모델 학습</div>
                  <div>• <span className="text-cyan-400 font-bold">벡터 DB 구축</span> 및 청킹 전략 설계</div>
                  <div>• <span className="text-cyan-400 font-bold">Django 프론트엔드</span> 웹 인터페이스 구축</div>
                  <div>• <span className="text-cyan-400 font-bold">AWS EC2 배포</span> 및 인프라 관리</div>
                  <div>• <span className="text-cyan-400 font-bold">Nginx + Gunicorn</span> 웹서버 구성</div>
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
              <p className="text-base lg:text-lg text-gray-300 font-medium">실제 개발 과정에서 마주한 문제들과 해결 과정</p>
            </div>
          
            <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-6">
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
                        {index === 0 && (
                          <>
                            <span style={{color: '#06b6d4', fontWeight: 'bold'}}>GPT-4로 뱅 게임 질문-답변 쌍 생성</span>해서 EXAONE 파인튜닝 실험. <span style={{color: '#06b6d4', fontWeight: 'bold'}}>1000개 데이터: 78.2% → 1500개 데이터: 83.7%</span>로 <span style={{color: '#06b6d4', fontWeight: 'bold'}}>데이터 증가시 정확도 향상</span> 확인. 고품질 파인튜닝 데이터의 효과성 입증
                          </>
                        )}
                        {index === 1 && (
                          <>
                            현재는 <span style={{color: '#06b6d4', fontWeight: 'bold'}}>벡터DB+GPT로 정확한 답변 생성</span> 후 <span style={{color: '#06b6d4', fontWeight: 'bold'}}>모든 Q-A를 DB 자동 저장</span>. 게임 룰은 불변이므로 축적된 <span style={{color: '#06b6d4', fontWeight: 'bold'}}>고품질 데이터로 향후 게임별 순차 파인튜닝</span> 계획
                          </>
                        )}
                        {index === 2 && (
                          <>
                            <span style={{color: '#06b6d4', fontWeight: 'bold'}}>게임 추천용은 게임별로 청킹</span>해서 통합 벡터DB 구축, <span style={{color: '#06b6d4', fontWeight: 'bold'}}>룰 설명용은 217개 게임마다 개별 벡터DB</span> 만들고 각 게임 내에서 <span style={{color: '#06b6d4', fontWeight: 'bold'}}>룰의 논리적 단위(턴, 단계, 카드별)로 체계적 청킹</span>. 이렇게 청킹 전략을 차별화해서 각 도메인에 최적화된 검색 정확도 확보
                          </>
                        )}
                        {index === 3 && (
                          <>
                            <span style={{color: '#06b6d4', fontWeight: 'bold'}}>QR코드로 개인 스마트폰 접속</span> 가능하게 구현해서 <span style={{color: '#06b6d4', fontWeight: 'bold'}}>다른 플레이어들 몰래 조용히 룰 확인</span> 가능. 게임 전략이나 역할 노출 없이 필요한 정보만 획득
                          </>
                        )}
                        {index === 4 && (
                          <>
                            사용자가 세션 요청하면 <span style={{color: '#06b6d4', fontWeight: 'bold'}}>고유 세션 ID 발급</span>하고, 그 세션으로 <span style={{color: '#06b6d4', fontWeight: 'bold'}}>모든 대화 맥락을 유지</span>하는 커스텀 시스템 직접 구현. <span style={{color: '#06b6d4', fontWeight: 'bold'}}>추천용 세션과 룰 설명용 세션을 분리</span>해서 각각 독립적으로 대화 히스토리 관리하고 <span style={{color: '#06b6d4', fontWeight: 'bold'}}>40분 타임아웃으로 메모리 누수 방지</span>
                          </>
                        )}
                        {index === 5 && (
                          <>
                            <span style={{color: '#06b6d4', fontWeight: 'bold'}}>서비스별로 독립적 초기화와 헬스체크</span> 구현해서 한 서비스가 실패해도 다른 기능은 정상 작동하도록 격리. <span style={{color: '#06b6d4', fontWeight: 'bold'}}>백그라운드에서 주기적으로 세션 정리</span>하는 별도 스레드 운영으로 시스템 안정성 확보
                          </>
                        )}
                        {index === 6 && (
                          <>
                            <span style={{color: '#06b6d4', fontWeight: 'bold'}}>게임 선택 후 해당 게임의 벡터DB만 로드</span>하는 지연 로딩 방식으로 메모리 사용량 최적화하고, <span style={{color: '#06b6d4', fontWeight: 'bold'}}>RunPod GPU 인스턴스 활용</span>해서 병렬 처리로 검색 속도 향상
                          </>
                        )}
                        {index === 7 && (
                          <>
                            <span style={{color: '#06b6d4', fontWeight: 'bold'}}>모델별 QA 데이터 분리 저장</span> 및 <span style={{color: '#06b6d4', fontWeight: 'bold'}}>SQL 집계 쿼리로 게임별 질문 빈도 순위 추출</span>. 두 모델 데이터를 <span style={{color: '#06b6d4', fontWeight: 'bold'}}>통합 분석하여 사용자 관심도 TOP 10</span>과 <span style={{color: '#06b6d4', fontWeight: 'bold'}}>모델 성능 비교 지표</span>를 실시간 도출하는 분석 시스템 구축
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
                    AWS 배포의 전반적 경험
                  </h4>
                  <p className="text-gray-300 leading-relaxed">
                    <span style={{color: '#06b6d4', fontWeight: 'bold'}}>AWS에서 gunicorn, nginx를 사용하여 Django를 배포</span>하면서 
                    프론트엔드 개발을 배웠고, <span style={{color: '#06b6d4', fontWeight: 'bold'}}>FastAPI를 사용하여 프론트엔드와 통신</span>하는 
                    것을 배우며 배포의 전반적인 내용을 다룰 수 있어서 뜻깊은 시간이었습니다.
                  </p>
                </div>
                
                <div className="bg-gradient-to-r from-gray-700/50 to-gray-600/50 rounded-xl p-6 border border-gray-500/50">
                  <h4 className="font-bold text-white mb-3 flex items-center gap-2">
                    <Target className="w-4 h-4 text-green-600" />
                    파인튜닝의 핵심 요소들
                  </h4>
                  <p className="text-gray-300 leading-relaxed">
                    <span style={{color: '#16a34a', fontWeight: 'bold'}}>데이터 품질이 모델 성능을 좌우</span>한다는 것을 체감했습니다. 
                    1000개→1500개 데이터로 5.5% 정확도 향상을 확인했고, <span style={{color: '#16a34a', fontWeight: 'bold'}}>에포크, 얼리스토핑, 로스값 등 하이퍼파라미터 튜닝</span>을 
                    반복 실험하며 각 설정이 모델 성능에 미치는 영향을 이해할 수 있었습니다.
                  </p>
                </div>
                
                <div className="bg-gradient-to-r from-gray-700/50 to-gray-600/50 rounded-xl p-6 border border-gray-500/50">
                  <h4 className="font-bold text-white mb-3 flex items-center gap-2">
                    <Award className="w-4 h-4 text-purple-600" />
                    벡터DB 청킹 전략의 중요성
                  </h4>
                  <p className="text-gray-300 leading-relaxed">
                    <span style={{color: '#a855f7', fontWeight: 'bold'}}>게임별로 다른 청킹 전략</span>이 필요함을 깨달았습니다. 
                    카드게임은 카드별로, 전략게임은 턴 단위로, 보드게임은 단계별로 나누어야 하며, 
                    <span style={{color: '#a855f7', fontWeight: 'bold'}}>청킹 방식에 따라 RAG 검색 정확도가 크게 달라진다</span>는 것을 실험으로 확인했습니다.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* System Architecture */}
          <Card className="bg-gray-800/80 backdrop-blur-sm border border-gray-600/50 shadow-2xl mb-12">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-white flex items-center gap-3">
                <Database className="w-6 h-6 text-indigo-600" />
                시스템 아키텍처
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="mb-6">
                <img
                  src="/보드게임시스템아키텍쳐.png"
                  alt="보드게임 챗봇 시스템 아키텍처"
                  className="w-full h-auto rounded-lg shadow-lg"
                />
              </div>
              <div className="bg-gradient-to-br from-gray-800/50 to-gray-700/50 rounded-xl p-8">
                <div className="grid lg:grid-cols-2 gap-6 mb-6">
                  {/* 프론트엔드 */}
                  <div className="bg-gray-700/80 rounded-lg p-4 shadow-md border border-gray-500">
                    <h4 className="font-bold text-white mb-2 flex items-center gap-2">
                      <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                      Django Frontend
                    </h4>
                    <ul className="text-sm text-gray-300 space-y-1">
                      <li>• 실시간 채팅 인터페이스</li>
                      <li>• QR 코드 모바일 접속</li>
                      <li>• 반응형 웹 디자인</li>
                      <li>• PostgreSQL 연동</li>
                    </ul>
                  </div>
                  
                  {/* 백엔드 */}
                  <div className="bg-gray-700/80 rounded-lg p-4 shadow-md border border-gray-500/50">
                    <h4 className="font-bold text-white mb-2 flex items-center gap-2">
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      FastAPI Backend
                    </h4>
                    <ul className="text-sm text-gray-300 space-y-1">
                      <li>• EXAONE 파인튜닝 모델</li>
                      <li>• GPT-4 + FAISS 벡터 검색</li>
                      <li>• RAG 파이프라인</li>
                      <li>• Sentence Transformers</li>
                    </ul>
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  {/* 배포 환경 */}
                  <div className="bg-gray-700/80 rounded-lg p-4 shadow-md">
                    <h4 className="font-bold text-white mb-3 flex items-center gap-2">
                      <TrendingUp className="w-4 h-4 text-indigo-600" />
                      배포 환경 (AWS EC2)
                    </h4>
                    <div className="text-sm text-gray-300 space-y-2">
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                        Ubuntu Server 22.04 LTS
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                        Nginx 웹서버 + Gunicorn
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
                        PostgreSQL 데이터베이스
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-orange-400 rounded-full"></span>
                        Systemd 서비스 관리
                      </div>
                    </div>
                  </div>
                  
                  {/* 핵심 기능 */}
                  <div className="bg-gray-700/80 rounded-lg p-4 shadow-md">
                    <h4 className="font-bold text-white mb-3 flex items-center gap-2">
                      <Zap className="w-4 h-4 text-indigo-600" />
                      핵심 기능
                    </h4>
                    <div className="text-sm text-gray-300 space-y-2">
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                        보드게임 룰 질의응답
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                        개인 취향 기반 게임 추천
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
                        EXAONE vs GPT 모델 비교
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-orange-400 rounded-full"></span>
                        RunPod GPU 분산 처리
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Project Demo */}
          <Card className="bg-gray-800/80 backdrop-blur-sm border border-gray-600/50 shadow-2xl mb-12">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-white flex items-center gap-3">
                <ExternalLink className="w-6 h-6 text-indigo-600" />
                프로젝트 미리보기
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </CardContent>
          </Card>

        </div>
      </div>
    </div>
  )
}