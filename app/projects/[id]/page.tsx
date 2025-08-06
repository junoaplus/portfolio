'use client'

import { Navigation } from '@/components/navigation'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import {
  Github,
  ExternalLink,
  Users,
  Brain,
  Clock,
  ArrowLeft,
  Sparkles,
  Code,
  Award,
  CheckCircle,
  AlertTriangle,
  TrendingUp,
} from 'lucide-react'
import Link from 'next/link'
import { notFound } from 'next/navigation'

// 프로젝트 데이터 (실제로는 데이터베이스나 API에서 가져올 것)
const projects = [
  {
    id: 1,
    title: 'AI 챗봇 포트폴리오',
    subtitle: 'LangGraph 멀티 에이전트 시스템',
    description:
      '실시간 GitHub 데이터와 RAG 시스템을 결합한 인터랙티브 AI 포트폴리오. 사용자 질문에 대해 95% 정확도로 답변하는 멀티 에이전트 챗봇입니다.',
    longDescription:
      '이 프로젝트는 단순한 포트폴리오를 넘어서, LangGraph의 멀티 에이전트 아키텍처를 활용한 지능형 대화 시스템입니다. 실시간으로 GitHub API에서 데이터를 가져와 벡터 데이터베이스에 저장하고, RAG(Retrieval-Augmented Generation) 기술로 사용자 질문에 정확한 답변을 제공합니다. 각 에이전트는 특정 역할을 담당하며, 협업을 통해 복잡한 질문도 정확하게 처리할 수 있습니다.',
    image: '/placeholder.svg?height=400&width=800',
    tech: [
      'Next.js 14',
      'LangGraph',
      'RAG',
      'OpenAI',
      'Supabase',
      'TypeScript',
      'Tailwind CSS',
      'Vercel',
    ],
    category: 'AI/ML',
    status: 'Live',
    gradient: 'from-blue-500 to-purple-600',
    achievements: [
      '실시간 GitHub 데이터 연동으로 최신 정보 제공',
      '벡터 검색 최적화로 95% 정확도 달성',
      '멀티 에이전트 협업으로 복잡한 질문 처리',
      '응답 시간 1.5초 이내 최적화',
      '회사별 맞춤 모드로 개인화된 답변 제공',
      '자연어 처리 정확도 향상을 위한 프롬프트 엔지니어링',
    ],
    challenges: [
      {
        title: '멀티 에이전트 협업 로직 설계',
        description:
          '여러 AI 에이전트가 효율적으로 협업하여 사용자 질문을 처리하는 시스템 구축',
        solution:
          'LangGraph의 상태 관리 기능을 활용하여 에이전트 간 정보 공유 및 작업 분배 최적화',
      },
      {
        title: '대용량 벡터 데이터 실시간 검색',
        description:
          'GitHub 데이터를 벡터화하여 실시간으로 검색하는 성능 최적화',
        solution: 'Supabase Vector와 임베딩 캐싱을 통해 검색 속도 3배 향상',
      },
      {
        title: '사용자 의도 파악 정확도',
        description:
          '다양한 질문 형태에 대한 정확한 의도 파악 및 적절한 답변 생성',
        solution:
          'Chain of Thought 기법과 Few-shot Learning으로 답변 품질 개선',
      },
    ],
    techDetails: [
      {
        name: 'LangGraph',
        description: '멀티 에이전트 오케스트레이션',
        usage: '에이전트 간 워크플로우 관리 및 상태 공유',
      },
      {
        name: 'RAG (Retrieval-Augmented Generation)',
        description: '검색 증강 생성 시스템',
        usage: 'GitHub 데이터 검색 후 컨텍스트 기반 답변 생성',
      },
      {
        name: 'Supabase Vector',
        description: '벡터 데이터베이스',
        usage: '임베딩 저장 및 유사도 검색',
      },
      {
        name: 'OpenAI GPT-4',
        description: '대화형 AI 모델',
        usage: '자연어 이해 및 답변 생성',
      },
    ],
    github: 'https://github.com/your-username/ai-portfolio',
    demo: '/chatbot',
    timeline: '2024.11 - 2025.01 (3개월)',
    team: '개인 프로젝트',
  },
  {
    id: 2,
    title: '데이트 코스 추천 AI',
    subtitle: '서울시 빅데이터 기반 맞춤형 추천',
    description:
      '서울시 25개 구의 100만+ 장소 데이터를 AI로 분석하여 개인 취향에 맞는 데이트 코스를 추천하는 서비스입니다.',
    longDescription:
      '서울시 공공데이터와 카카오맵 API를 결합하여 실시간으로 업데이트되는 장소 정보를 기반으로 AI가 최적의 데이트 코스를 설계합니다. 사용자의 선호도, 날씨, 교통상황, 예산 등을 종합적으로 고려한 개인화된 추천 시스템으로, 머신러닝 알고리즘을 통해 사용자 만족도를 지속적으로 개선합니다.',
    image: '/placeholder.svg?height=400&width=800',
    tech: [
      'FastAPI',
      'React',
      'AI Agents',
      'PostgreSQL',
      'Redis',
      'Kakao API',
      'Python',
      'Docker',
    ],
    category: 'AI/ML',
    status: 'Featured',
    gradient: 'from-green-500 to-teal-600',
    achievements: [
      '서울시 25개 구 100만+ 장소 데이터 수집 및 정제',
      '실시간 길찾기 및 교통정보 연동',
      '개인화 추천 알고리즘으로 만족도 4.7/5 달성',
      'GitHub에서 24개 스타 획득',
      '월 1,200+ 활성 사용자 확보',
      '평균 추천 정확도 87% 달성',
    ],
    challenges: [
      {
        title: '대용량 지리 데이터 처리',
        description:
          '서울시 전체 장소 데이터의 효율적인 저장 및 검색 시스템 구축',
        solution:
          'PostgreSQL의 PostGIS 확장과 공간 인덱싱으로 검색 성능 10배 향상',
      },
      {
        title: '실시간 API 호출 최적화',
        description: '카카오맵 API 호출 비용 최소화 및 응답 속도 개선',
        solution: 'Redis 캐싱과 배치 처리로 API 호출 70% 감소',
      },
      {
        title: '개인화 추천 알고리즘',
        description: '다양한 사용자 선호도를 반영한 정확한 추천 시스템 개발',
        solution: '협업 필터링과 콘텐츠 기반 필터링 하이브리드 모델 적용',
      },
    ],
    techDetails: [
      {
        name: 'FastAPI',
        description: '고성능 Python 웹 프레임워크',
        usage: 'RESTful API 서버 구축 및 비동기 처리',
      },
      {
        name: 'PostgreSQL + PostGIS',
        description: '공간 데이터베이스',
        usage: '지리 정보 저장 및 공간 쿼리 처리',
      },
      {
        name: 'Redis',
        description: '인메모리 캐시',
        usage: 'API 응답 캐싱 및 세션 관리',
      },
      {
        name: 'Kakao Map API',
        description: '지도 및 장소 정보 API',
        usage: '실시간 장소 정보 및 길찾기 서비스',
      },
    ],
    github: 'https://github.com/your-username/date-course-ai',
    demo: 'https://date-course-ai.vercel.app',
    timeline: '2024.08 - 2024.10 (3개월)',
    team: '개인 프로젝트',
  },
  // 다른 프로젝트들도 비슷하게 추가...
]

export default function ProjectDetailPage({
  params,
}: {
  params: { id: string }
}) {
  const projectId = Number.parseInt(params.id)
  const project = projects.find(p => p.id === projectId)

  if (!project) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50/30">
      <Navigation />

      <div className="pt-16">
        {/* Hero Section */}
        <div className="px-4 py-12 bg-gradient-to-br from-white via-blue-50/30 to-purple-50/20 relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl animate-float"></div>
            <div className="absolute top-40 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-float delay-1000"></div>
          </div>

          <div className="max-w-6xl mx-auto relative">
            {/* Back Button */}
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-8 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              프로젝트 목록으로 돌아가기
            </Link>

            {/* Project Header */}
            <div className="mb-12">
              <div className="flex items-center gap-4 mb-6">
                <Badge
                  className={`bg-gradient-to-r ${project.gradient} text-white border-0 px-4 py-2`}
                >
                  {project.category}
                </Badge>
                <Badge
                  className={`${
                    project.status === 'Live'
                      ? 'bg-green-100 text-green-700 border-green-200'
                      : project.status === 'Featured'
                        ? 'bg-blue-100 text-blue-700 border-blue-200'
                        : 'bg-gray-100 text-gray-700 border-gray-200'
                  }`}
                >
                  <Sparkles className="w-3 h-3 mr-1" />
                  {project.status}
                </Badge>
              </div>

              <h1 className="text-4xl lg:text-5xl font-bold mb-4 text-gray-900">
                {project.title}
              </h1>
              <p className="text-xl text-blue-600 font-medium mb-6">
                {project.subtitle}
              </p>
              <p className="text-lg text-gray-600 leading-relaxed max-w-4xl">
                {project.longDescription}
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4">
              <Button
                size="lg"
                className={`bg-gradient-to-r ${project.gradient} hover:opacity-90 text-white px-8 py-4 text-lg rounded-xl shadow-lg transition-all duration-200 transform hover:scale-105`}
                asChild
              >
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="w-5 h-5 mr-2" />
                  GitHub에서 보기
                </a>
              </Button>
              {project.demo && (
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-gray-300 text-gray-700 hover:bg-gray-50 hover:border-gray-400 bg-white/80 backdrop-blur-sm px-8 py-4 text-lg rounded-xl transition-all duration-200 transform hover:scale-105"
                  asChild
                >
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="w-5 h-5 mr-2" />
                    라이브 데모
                  </a>
                </Button>
              )}
            </div>
          </div>
        </div>

        {/* Project Image */}
        <div className="px-4 py-8 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={project.image || '/placeholder.svg'}
                alt={project.title}
                className="w-full h-96 object-cover"
              />
              <div
                className={`absolute inset-0 bg-gradient-to-t ${project.gradient} opacity-10`}
              ></div>
            </div>
          </div>
        </div>

        {/* Project Details */}
        <div className="px-4 py-16 bg-gradient-to-br from-gray-50 to-blue-50/20">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Main Content */}
              <div className="lg:col-span-2 space-y-8">
                {/* 주요 성과 */}
                <Card className="bg-white/80 backdrop-blur-sm border border-gray-200 shadow-lg">
                  <CardContent className="p-8">
                    <h2 className="text-2xl font-bold mb-6 flex items-center gap-3 text-gray-900">
                      <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-teal-600 rounded-lg flex items-center justify-center">
                        <Award className="w-5 h-5 text-white" />
                      </div>
                      주요 성과
                    </h2>
                    <div className="grid md:grid-cols-2 gap-4">
                      {project.achievements.map((achievement, index) => (
                        <div
                          key={index}
                          className="flex items-start gap-3 p-4 bg-gradient-to-r from-green-50 to-teal-50/50 rounded-lg border border-green-100"
                        >
                          <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700 text-sm leading-relaxed">
                            {achievement}
                          </span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* 기술적 도전과 해결 */}
                <Card className="bg-white/80 backdrop-blur-sm border border-gray-200 shadow-lg">
                  <CardContent className="p-8">
                    <h2 className="text-2xl font-bold mb-6 flex items-center gap-3 text-gray-900">
                      <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-red-600 rounded-lg flex items-center justify-center">
                        <AlertTriangle className="w-5 h-5 text-white" />
                      </div>
                      기술적 도전과 해결
                    </h2>
                    <div className="space-y-6">
                      {project.challenges.map((challenge, index) => (
                        <div
                          key={index}
                          className="border-l-4 border-orange-500 pl-6"
                        >
                          <h3 className="text-lg font-semibold text-gray-900 mb-2">
                            {challenge.title}
                          </h3>
                          <p className="text-gray-600 mb-3 leading-relaxed">
                            {challenge.description}
                          </p>
                          <div className="bg-gradient-to-r from-blue-50 to-purple-50/30 p-4 rounded-lg">
                            <p className="text-sm text-gray-700">
                              <strong className="text-blue-600">
                                해결 방법:
                              </strong>{' '}
                              {challenge.solution}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* 기술 상세 */}
                <Card className="bg-white/80 backdrop-blur-sm border border-gray-200 shadow-lg">
                  <CardContent className="p-8">
                    <h2 className="text-2xl font-bold mb-6 flex items-center gap-3 text-gray-900">
                      <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg flex items-center justify-center">
                        <Code className="w-5 h-5 text-white" />
                      </div>
                      핵심 기술 상세
                    </h2>
                    <div className="grid md:grid-cols-2 gap-6">
                      {project.techDetails.map((tech, index) => (
                        <div
                          key={index}
                          className="p-4 bg-gradient-to-r from-gray-50 to-purple-50/30 rounded-lg border border-gray-100"
                        >
                          <h3 className="font-semibold text-gray-900 mb-2">
                            {tech.name}
                          </h3>
                          <p className="text-sm text-gray-600 mb-2">
                            {tech.description}
                          </p>
                          <p className="text-xs text-blue-600 font-medium">
                            {tech.usage}
                          </p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Sidebar */}
              <div className="space-y-6">
                {/* 프로젝트 정보 */}
                <Card className="bg-white/80 backdrop-blur-sm border border-gray-200 shadow-lg">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-bold mb-4 text-gray-900">
                      프로젝트 정보
                    </h3>
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <Clock className="w-4 h-4 text-gray-500" />
                        <div>
                          <div className="text-sm text-gray-500">개발 기간</div>
                          <div className="font-medium text-gray-900">
                            {project.timeline}
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <Users className="w-4 h-4 text-gray-500" />
                        <div>
                          <div className="text-sm text-gray-500">팀 구성</div>
                          <div className="font-medium text-gray-900">
                            {project.team}
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <TrendingUp className="w-4 h-4 text-gray-500" />
                        <div>
                          <div className="text-sm text-gray-500">상태</div>
                          <div className="font-medium text-gray-900">
                            {project.status}
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* 기술 스택 */}
                <Card className="bg-white/80 backdrop-blur-sm border border-gray-200 shadow-lg">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-bold mb-4 text-gray-900">
                      기술 스택
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map(tech => (
                        <Badge
                          key={tech}
                          className="text-xs bg-gray-100 border-gray-200 text-gray-700 hover:bg-gray-200 transition-colors"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* 링크 */}
                <Card className="bg-white/80 backdrop-blur-sm border border-gray-200 shadow-lg">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-bold mb-4 text-gray-900">
                      링크
                    </h3>
                    <div className="space-y-3">
                      <Button
                        variant="outline"
                        className="w-full justify-start border-gray-200 text-gray-700 hover:bg-gray-50 bg-transparent"
                        asChild
                      >
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Github className="w-4 h-4 mr-2" />
                          GitHub Repository
                        </a>
                      </Button>
                      {project.demo && (
                        <Button
                          variant="outline"
                          className="w-full justify-start border-gray-200 text-gray-700 hover:bg-gray-50 bg-transparent"
                          asChild
                        >
                          <a
                            href={project.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <ExternalLink className="w-4 h-4 mr-2" />
                            Live Demo
                          </a>
                        </Button>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="px-4 py-16 bg-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-teal-600 bg-clip-text text-transparent">
                더 자세한 내용이 궁금하신가요?
              </span>
            </h2>
            <p className="text-gray-600 mb-8 text-lg leading-relaxed">
              이 프로젝트의 기술적 구현이나 개발 과정에 대해 더 알고 싶으시다면,
              <br />
              AI 챗봇에게 직접 질문해보세요!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-4 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105"
                asChild
              >
                <a href="/chatbot">
                  <Brain className="w-5 h-5 mr-2" />
                  AI 챗봇에게 질문하기
                </a>
              </Button>
              <Link href="/projects">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-gray-300 text-gray-700 hover:bg-gray-50 hover:border-gray-400 bg-white/80 backdrop-blur-sm px-8 py-4 text-lg rounded-xl transition-all duration-200 transform hover:scale-105"
                >
                  <ArrowLeft className="w-5 h-5 mr-2" />
                  다른 프로젝트 보기
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
