'use client'
import { Navigation } from '@/components/navigation'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Github, ExternalLink, Calendar, Users, Star, TrendingUp, Zap, ArrowLeft, CheckCircle, Award, Target, Lightbulb, Database } from 'lucide-react'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { use } from 'react'

interface ProjectDetailProps {
  params: Promise<{
    id: string
  }>
}

export default function ProjectDetail({ params }: ProjectDetailProps) {
  const resolvedParams = use(params)
  const projects = [
    {
      id: 1,
      title: "AI 챗봇 포트폴리오",
      description: "LangGraph 멀티 에이전트로 구축한 인터랙티브 포트폴리오",
      longDescription: "이 프로젝트는 단순한 포트폴리오를 넘어서, 방문자와 실시간으로 소통할 수 있는 AI 기반 인터랙티브 경험을 제공합니다. LangGraph의 멀티 에이전트 시스템을 활용하여 복잡한 질문도 정확하게 처리할 수 있으며, RAG(Retrieval-Augmented Generation) 기술을 통해 실시간으로 최신 정보를 제공합니다.",
      image: "/placeholder.svg?height=400&width=600",
      tech: ["Next.js", "LangGraph", "RAG", "OpenAI", "TypeScript", "Tailwind CSS", "Vercel", "Pinecone"],
      category: "AI/ML",
      status: "Live",
      date: "2024.12",
      github: "#",
      demo: "#",
      achievements: [
        "95% 정확도로 사용자 질문 처리",
        "실시간 GitHub 데이터 연동",
        "벡터 검색 최적화 구현",
        "멀티 에이전트 협업 시스템"
      ],
      challenges: [
        "멀티 에이전트 간 효율적인 협업 구조 설계",
        "실시간 데이터 동기화 및 캐싱 최적화",
        "자연어 처리 정확도 향상을 위한 프롬프트 엔지니어링",
        "대화 맥락 유지를 위한 메모리 관리 시스템"
      ],
      solutions: [
        "LangGraph의 상태 관리를 활용한 에이전트 워크플로우 구축",
        "Redis 캐싱과 웹훅을 통한 실시간 데이터 동기화",
        "Few-shot learning과 Chain-of-Thought 프롬프팅 적용",
        "대화 세션별 컨텍스트 벡터 저장 및 검색 시스템"
      ]
    },
    {
      id: 2,
      title: "대화형 AI 기반 개인맞춤 데이트 코스 추천 시스템",
      description: "3개 마이크로서비스로 구현한 실시간 대화형 AI 추천 엔진 (9만+ 장소 DB)",
      longDescription: "사용자가 AI 챗봇과 자연스럽게 대화하며 MBTI, 관계단계, 예산 등을 입력하면, 3개의 전문 마이크로서비스가 협업하여 개인맞춤형 데이트 코스를 실시간 생성하는 시스템입니다. 서울시 25개구 89,321개 검증 장소 중에서 벡터 유사도 검색과 지리공간 필터링을 통해 최적의 조합을 찾아 추천하며, 대화 맥락을 기억하여 점진적으로 더 정확한 추천을 제공합니다.",
      image: "/placeholder.svg?height=400&width=600",
      tech: ["PySpark 3.5.0", "OpenAI GPT-4", "LangChain", "Qdrant Vector DB", "FastAPI", "PostgreSQL", "SQLAlchemy", "Redis", "NumPy", "Tiktoken", "Docker", "Next.js 15", "Pydantic", "Uvicorn", "HTTPX", "Loguru", "Geopy"],
      category: "AI/ML",
      status: "Featured",
      date: "2024.10",
      github: "#",
      demo: "#",
      challenges: [
        "멀티 API 데이터 품질 문제: 카카오, 관광공사, T맵, 네이버 API 통합 시 중복·노이즈 데이터 대량 발생",
        "벡터 DB 검색 정확도 한계: 단순 벡터 유사도만으로는 원하는 데이트 장소 추천 실패",
        "에이전트 vs 룰베이스 아키텍처 선택: 자율 판단 에이전트 vs 예측가능한 룰베이스 트레이드오프",
        "서버 비용 최적화: 벡터 DB 인메모리 특성상 상시 운영 vs 서버리스 비용 딜레마",
        "OpenAI API 실시간성 부족: 한국 지역정보 처리 시 응답 지연 및 정확도 문제",
        "벡터 DB 임베딩 데이터 최적화: 장소별 요약문구에 업체 정보·홍보문구 등 불필요한 노이즈 포함"
      ],
      solutions: [
        "PySpark ETL로 20만→9만개 데이터 품질 정제 + 중복 제거 자동화 파이프라인 구축",
        "Qdrant 벡터 검색 전 151개 세분화 카테고리 필터링 + 반경 필터링으로 노이즈 제거",
        "룰베이스 아키텍처 선택으로 예측 가능한 서비스 품질 확보 + 블랙박스 리스크 회피",
        "하이브리드 인프라: 메인/플레이스는 서버리스, 벡터 DB는 상시 운영으로 비용 50% 절감",
        "XAI(Grok) API 도입으로 한국 지역정보 실시간 처리 + OpenAI 폴백으로 안정성 확보",
        "프롬프트 엔지니어링으로 장소 분위기만 추출한 정제 요약문구 생성 + 개인화 검색 쿼리도 동일한 방식으로 생성하여 노이즈 없는 정확한 매칭 구현"
      ],
      achievements: [
        "서울시 전 지역 커버리지: 25개구 89,321개 검증된 장소 DB 구축",
        "마이크로서비스 아키텍처: 3개 독립 서비스로 분산 처리", 
        "실시간 성능: 벡터 검색 + 지리 필터링 평균 300ms 응답시간",
        "데이터 정제: PySpark ETL로 20만개→9만개 고품질 데이터 구축",
        "멀티 API 통합: 카카오, T맵, 네이버, 관광공사 4개 API 데이터 융합",
        "확장 가능한 구조: 새로운 지역/카테고리 추가 시 선형적 확장"
      ]
    }
  ]

  const project = projects.find(p => p.id === parseInt(resolvedParams.id))
  
  if (!project) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 via-blue-50 to-indigo-100">
      <Navigation />
      
      <div className="pt-24 px-4 py-16">
        <div className="max-w-7xl mx-auto">
          {/* Back Button */}
          <Link href="/">
            <Button variant="outline" className="bg-white/70 backdrop-blur-sm border-white/50 text-slate-700 hover:bg-white/90 mb-8 rounded-xl shadow-lg">
              <ArrowLeft className="w-4 h-4 mr-2" />
              메인으로 돌아가기
            </Button>
          </Link>

          {/* Project Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-black bg-gradient-to-r from-slate-800 to-indigo-800 bg-clip-text text-transparent mb-4">
              {project.title}
            </h1>
            
            <p className="text-xl text-slate-600 mb-8 leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Description - 사진보다 먼저 */}
          <Card className="bg-white/80 backdrop-blur-sm border border-white/50 shadow-2xl mb-12">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-slate-800 flex items-center gap-3">
                <Lightbulb className="w-6 h-6 text-indigo-600" />
                프로젝트 개요
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg text-slate-600 leading-relaxed mb-8">
                {project.longDescription}
              </p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-200">
                  <h4 className="font-bold text-slate-800 mb-3 flex items-center gap-2">
                    <Users className="w-5 h-5 text-blue-600" />
                    팀 구성
                  </h4>
                  <p className="text-slate-600">총 5명<br/>풀스택 1명(본인), 프론트 1명, 백엔드 1명, AI서비스 2명</p>
                </div>
                
                <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6 border border-green-200">
                  <h4 className="font-bold text-slate-800 mb-3 flex items-center gap-2">
                    <Calendar className="w-5 h-5 text-green-600" />
                    개발 기간
                  </h4>
                  <p className="text-slate-600">2024.06.13 - 2024.07.30<br/>(약 7주)</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* 담당 역할 */}
          <Card className="bg-white/80 backdrop-blur-sm border border-white/50 shadow-2xl mb-12">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-slate-800 flex items-center gap-3">
                <Star className="w-6 h-6 text-indigo-600" />
                담당 역할 (풀스택 개발)
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="bg-gradient-to-br from-purple-50 to-violet-50 rounded-xl p-6 border border-purple-200">
                <div className="text-slate-600 space-y-2 text-lg">
                  <div>• <span style={{color: '#9333ea', fontWeight: 'bold'}}>마이크로서비스 아키텍처</span> 설계</div>
                  <div>• <span style={{color: '#9333ea', fontWeight: 'bold'}}>DB 설계</span> 및 <span style={{color: '#9333ea', fontWeight: 'bold'}}>백엔드 서버</span> 구축</div>
                  <div>• <span style={{color: '#9333ea', fontWeight: 'bold'}}>3개 서비스</span> (Main/Place/DateCourse) 개발</div>
                  <div>• <span style={{color: '#9333ea', fontWeight: 'bold'}}>벡터 DB</span> 구축 및 최적화</div>
                  <div>• <span style={{color: '#9333ea', fontWeight: 'bold'}}>RAG 파이프라인</span> 구현</div>
                  <div>• <span style={{color: '#9333ea', fontWeight: 'bold'}}>PySpark ETL</span> 데이터 처리</div>
                  <div>• <span style={{color: '#9333ea', fontWeight: 'bold'}}>프론트엔드</span> UI/UX 개발</div>
                  <div>• <span style={{color: '#9333ea', fontWeight: 'bold'}}>실시간 채팅</span> 시스템 구현</div>
                  <div>• <span style={{color: '#9333ea', fontWeight: 'bold'}}>API 통합</span> 및 서비스 배포</div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Challenges & Solutions - 핵심 섹션 강조 */}
          <div className="mb-14">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold text-slate-800 flex items-center justify-center gap-3 mb-3">
                <Target className="w-7 h-7 text-indigo-600" />
                주요 발생 이슈 및 해결방안
              </h3>
              <p className="text-lg text-slate-600 font-medium">실제 개발 과정에서 마주한 문제들과 해결 과정</p>
            </div>
          
            <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-7">
              {project.challenges.map((challenge, index) => (
                <Card key={index} className="bg-white/90 backdrop-blur-sm border border-indigo-200 shadow-xl hover:shadow-2xl transition-all duration-300">
                <CardContent className="p-6">
                    {/* 문제 */}
                    <div className="mb-5 h-32">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-7 h-7 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                          <span className="text-red-700 font-bold">{index + 1}</span>
                        </div>
                        <span className="font-bold text-gray-800 text-lg">발생 이슈</span>
                      </div>
                      <p className="text-gray-700 ml-10 text-lg leading-relaxed">
                        <span style={{color: '#dc2626', fontWeight: 'bold'}}>{challenge.split(':')[0]}:</span>
                        <span className="text-gray-700">
                          {challenge.split(':').slice(1).join(':')}
                        </span>
                      </p>
                    </div>
                    
                    {/* 해결방안 */}
                    <div className="border-t border-gray-200 pt-5">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-7 h-7 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                          <CheckCircle className="w-4 h-4 text-green-700" />
                        </div>
                        <span className="font-bold text-gray-800 text-lg">해결방안</span>
                      </div>
                      <p className="text-gray-700 ml-10 text-lg leading-relaxed">
                        {index === 0 && (
                          <>
                            <span style={{color: '#16a34a', fontWeight: 'bold'}}>PySpark ETL로</span> 20만→9만개 데이터 <span style={{color: '#16a34a', fontWeight: 'bold'}}>품질 정제</span> + <span style={{color: '#16a34a', fontWeight: 'bold'}}>중복 제거</span> 자동화 파이프라인 구축
                          </>
                        )}
                        {index === 1 && (
                          <>
                            Qdrant 벡터 검색 전 151개 세분화 <span style={{color: '#16a34a', fontWeight: 'bold'}}>카테고리 필터링</span> + <span style={{color: '#16a34a', fontWeight: 'bold'}}>반경 필터링</span>으로 노이즈 제거
                          </>
                        )}
                        {index === 2 && (
                          <>
                            <span style={{color: '#16a34a', fontWeight: 'bold'}}>룰베이스 아키텍처</span> 선택으로 <span style={{color: '#16a34a', fontWeight: 'bold'}}>예측 가능한 서비스</span> 품질 확보 + 에이전트의 <span style={{color: '#16a34a', fontWeight: 'bold'}}>블랙박스 리스크 회피</span>
                          </>
                        )}
                        {index === 3 && (
                          <>
                            하이브리드 인프라: <span style={{color: '#16a34a', fontWeight: 'bold'}}>Main/Place Service</span>는 <span style={{color: '#16a34a', fontWeight: 'bold'}}>서버리스</span>, 벡터 DB는 상시 운영으로 비용 50% 절감
                          </>
                        )}
                        {index === 4 && (
                          <>
                            <span style={{color: '#16a34a', fontWeight: 'bold'}}>XAI(Grok) API</span> 도입으로 한국 지역정보 실시간 처리 + OpenAI 폴백으로 안정성 확보
                          </>
                        )}
                        {index === 5 && (
                          <>
                            <span style={{color: '#16a34a', fontWeight: 'bold'}}>프롬프트 엔지니어링으로</span> 장소 분위기만 추출한 정제 요약문구 생성 + 개인화 검색 쿼리도 동일한 방식으로 생성하여 <span style={{color: '#16a34a', fontWeight: 'bold'}}>노이즈 없는 정확한 매칭 구현</span>
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
          <Card className="bg-white/80 backdrop-blur-sm border border-white/50 shadow-2xl mb-12">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-slate-800 flex items-center gap-3">
                <Zap className="w-6 h-6 text-indigo-600" />
                기술 스택
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-3">
                {project.tech.map((tech) => (
                  <Badge key={tech} className="bg-gradient-to-r from-indigo-100 to-blue-100 text-indigo-700 border border-indigo-200 px-4 py-2 text-sm font-medium shadow-sm">
                    {tech}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Achievements */}
          <Card className="bg-white/80 backdrop-blur-sm border border-white/50 shadow-2xl mb-12">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-slate-800 flex items-center gap-3">
                <Award className="w-6 h-6 text-indigo-600" />
                핵심 성취
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-4">
                {project.achievements.map((achievement, index) => (
                  <div key={index} className="flex items-center gap-3 p-4 bg-gradient-to-r from-emerald-50 to-teal-50 rounded-xl border border-emerald-100">
                    <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                    <span className="text-slate-700 font-medium">{achievement}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Project Retrospective */}
          <Card className="bg-white/80 backdrop-blur-sm border border-white/50 shadow-2xl mb-12">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-slate-800 flex items-center gap-3">
                <TrendingUp className="w-6 h-6 text-indigo-600" />
                프로젝트 회고
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl p-6 border border-blue-200">
                  <h4 className="font-bold text-slate-800 mb-3 flex items-center gap-2">
                    <Database className="w-4 h-4 text-blue-600" />
                    대용량 데이터 처리 경험
                  </h4>
                  <p className="text-slate-600 leading-relaxed">
                    대용량 데이터를 수집하고 관리하면서 많은 것을 배웠습니다. <span style={{color: '#2563eb', fontWeight: 'bold'}}>PySpark를 활용한 데이터 정제</span>부터 
                    <span style={{color: '#2563eb', fontWeight: 'bold'}}>DB 저장 최적화</span>까지, 실제 업무에서 요구되는 빅데이터 처리 역량을 체득할 수 있었습니다.
                  </p>
                </div>
                
                <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-6 border border-green-200">
                  <h4 className="font-bold text-slate-800 mb-3 flex items-center gap-2">
                    <Target className="w-4 h-4 text-green-600" />
                    데이터 품질의 중요성
                  </h4>
                  <p className="text-slate-600 leading-relaxed">
                    코스 추천 엔진을 구축하면서 <span style={{color: '#16a34a', fontWeight: 'bold'}}>벡터 DB RAG 검색의 한계</span>를 깨달았습니다. 
                    노이즈가 많은 원시 데이터로는 정확한 추천이 불가능했고, 여러 실험을 통해 
                    <span style={{color: '#16a34a', fontWeight: 'bold'}}>데이터 정제와 분류 필터링</span>이 AI 성능을 좌우한다는 것을 체감했습니다.
                  </p>
                </div>
                
                <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-6 border border-purple-200">
                  <h4 className="font-bold text-slate-800 mb-3 flex items-center gap-2">
                    <Award className="w-4 h-4 text-purple-600" />
                    아키텍처 선택의 교훈
                  </h4>
                  <p className="text-slate-600 leading-relaxed">
                    <span style={{color: '#9333ea', fontWeight: 'bold'}}>에이전트 시스템</span>으로 수많은 실험을 진행했습니다. 
                    <span style={{color: '#9333ea', fontWeight: 'bold'}}>무한질문 늪</span>에 빠져 사용자가 답변을 받지 못하는 상황부터, 
                    예측 불가능한 응답으로 인한 품질 관리의 어려움까지 직접 겪어봤습니다. 
                    결국 목적이 명확한 추천 시스템에서는 <span style={{color: '#9333ea', fontWeight: 'bold'}}>룰베이스 접근법</span>이 더 안정적임을 깨달았고, 
                    전환 과정에서 많은 시행착오를 통해 각 아키텍처의 장단점을 체감할 수 있었습니다.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Project Demo Video - 시연 영상을 위로 */}
          <Card className="bg-white/80 backdrop-blur-sm border border-white/50 shadow-2xl mb-12">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-slate-800 flex items-center gap-3">
                <ExternalLink className="w-6 h-6 text-indigo-600" />
                시연 영상
              </CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              {project.id === 2 ? (
                <div className="relative w-full pb-[56.25%] h-0 rounded-lg overflow-hidden">
                  <iframe
                    src="https://www.youtube.com/embed/BfQWABa2siw"
                    title="대화형 AI 기반 개인맞춤 데이트 코스 추천 시스템 시연"
                    className="absolute top-0 left-0 w-full h-full rounded-lg"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              ) : (
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-80 object-cover rounded-lg"
                />
              )}
            </CardContent>
          </Card>

          {/* System Architecture */}
          <Card className="bg-white/80 backdrop-blur-sm border border-white/50 shadow-2xl">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-slate-800 flex items-center gap-3">
                <Database className="w-6 h-6 text-indigo-600" />
                시스템 아키텍처
              </CardTitle>
            </CardHeader>
            <CardContent>
              {/* 아키텍처 이미지 */}
              <div className="mb-8">
                <img
                  src="/system.png"
                  alt="시스템 아키텍처 다이어그램"
                  className="w-full h-auto rounded-lg border border-gray-200 shadow-sm"
                />
              </div>
              
              <div className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-xl p-8">
                <div className="grid lg:grid-cols-3 gap-6 mb-6">
                  {/* 메인 서비스 */}
                  <div className="bg-white rounded-lg p-4 shadow-md border border-blue-200">
                    <h4 className="font-bold text-slate-800 mb-2 flex items-center gap-2">
                      <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                      Main Service
                    </h4>
                    <ul className="text-sm text-slate-600 space-y-1">
                      <li>• LangChain 대화 관리</li>
                      <li>• 사용자 프로필 분석</li>
                      <li>• 의도 파악 & 라우팅</li>
                    </ul>
                  </div>
                  
                  {/* 플레이스 서비스 */}
                  <div className="bg-white rounded-lg p-4 shadow-md border border-green-200">
                    <h4 className="font-bold text-slate-800 mb-2 flex items-center gap-2">
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      Place Service
                    </h4>
                    <ul className="text-sm text-slate-600 space-y-1">
                      <li>• XAI/OpenAI 기반</li>
                      <li>• 지역별 장소 검색</li>
                      <li>• 개인화 추천</li>
                    </ul>
                  </div>
                  
                  {/* 데이트 코스 서비스 */}
                  <div className="bg-white rounded-lg p-4 shadow-md border border-purple-200">
                    <h4 className="font-bold text-slate-800 mb-2 flex items-center gap-2">
                      <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                      DateCourse Service
                    </h4>
                    <ul className="text-sm text-slate-600 space-y-1">
                      <li>• Qdrant 벡터 검색</li>
                      <li>• 지리공간 필터링</li>
                      <li>• 코스 최적화</li>
                    </ul>
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  {/* 데이터 플로우 */}
                  <div className="bg-white rounded-lg p-4 shadow-md">
                    <h4 className="font-bold text-slate-800 mb-3 flex items-center gap-2">
                      <TrendingUp className="w-4 h-4 text-indigo-600" />
                      데이터 플로우
                    </h4>
                    <div className="text-sm text-slate-600 space-y-2">
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                        사용자 입력 및 프로필 분석 → Main Service
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                        지역 선별 → Place Service
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
                        장소 선별 및 최적 코스 → DateCourse Service
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-orange-400 rounded-full"></span>
                        최종 결과 → Frontend
                      </div>
                    </div>
                  </div>
                  
                  {/* 인프라 구성 */}
                  <div className="bg-white rounded-lg p-4 shadow-md">
                    <h4 className="font-bold text-slate-800 mb-3 flex items-center gap-2">
                      <Zap className="w-4 h-4 text-indigo-600" />
                      인프라 구성
                    </h4>
                    <div className="text-sm text-slate-600 space-y-2">
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                        PostgreSQL DB
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                        Qdrant Vector DB
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
                        FastAPI 서비스
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-orange-400 rounded-full"></span>
                        Docker 컨테이너
                      </div>
                    </div>
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