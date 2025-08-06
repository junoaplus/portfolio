"use client"

import { useState } from "react"
import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Github, ExternalLink, Users, Brain, Clock, Rocket, Filter, Search, Sparkles } from "lucide-react"
import Link from "next/link"

export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState("All")
  const [searchTerm, setSearchTerm] = useState("")

  const filters = [
    { key: "All", label: "전체 프로젝트", count: 5 },
    { key: "AI/ML", label: "AI/ML", count: 3 },
    { key: "Full-Stack", label: "풀스택 웹", count: 1 },
    { key: "Backend", label: "백엔드 API", count: 1 },
  ]

  const projects = [
    {
      id: 1,
      title: "AI 챗봇 포트폴리오",
      subtitle: "LangGraph 멀티 에이전트 시스템",
      description:
        "실시간 GitHub 데이터와 RAG 시스템을 결합한 인터랙티브 AI 포트폴리오. 사용자 질문에 대해 95% 정확도로 답변하는 멀티 에이전트 챗봇입니다.",
      image: "/placeholder.svg?height=300&width=500",
      tech: ["Next.js 14", "LangGraph", "RAG", "OpenAI", "Supabase", "TypeScript"],
      category: "AI/ML",
      status: "Live",
      gradient: "from-blue-500 to-purple-600",
      achievements: [
        "실시간 GitHub 데이터 연동으로 최신 정보 제공",
        "벡터 검색 최적화로 95% 정확도 달성",
        "멀티 에이전트 협업으로 복잡한 질문 처리",
        "응답 시간 1.5초 이내 최적화",
      ],
      github: "https://github.com/your-username/ai-portfolio",
      demo: "/chatbot",
      timeline: "2024.11 - 2025.01 (3개월)",
      team: "개인 프로젝트",
    },
    {
      id: 2,
      title: "데이트 코스 추천 AI",
      subtitle: "서울시 빅데이터 기반 맞춤형 추천",
      description:
        "서울시 25개 구의 100만+ 장소 데이터를 AI로 분석하여 개인 취향에 맞는 데이트 코스를 추천하는 서비스입니다.",
      image: "/placeholder.svg?height=300&width=500",
      tech: ["FastAPI", "React", "AI Agents", "PostgreSQL", "Redis", "Kakao API"],
      category: "AI/ML",
      status: "Featured",
      gradient: "from-green-500 to-teal-600",
      achievements: [
        "서울시 25개 구 100만+ 장소 데이터 수집 및 정제",
        "실시간 길찾기 및 교통정보 연동",
        "개인화 추천 알고리즘으로 만족도 4.7/5 달성",
        "GitHub에서 24개 스타 획득",
      ],
      github: "https://github.com/your-username/date-course-ai",
      demo: "https://date-course-ai.vercel.app",
      timeline: "2024.08 - 2024.10 (3개월)",
      team: "개인 프로젝트",
    },
    {
      id: 3,
      title: "보드게임 룰 챗봇",
      subtitle: "복잡한 게임 규칙을 쉽게 설명하는 AI",
      description: "50+ 보드게임의 복잡한 규칙을 AI가 쉽고 재미있게 설명해주는 전문 어시스턴트입니다.",
      image: "/placeholder.svg?height=300&width=500",
      tech: ["Django", "RAG", "Vector DB", "Fine-tuning", "PostgreSQL", "Redis"],
      category: "AI/ML",
      status: "Completed",
      gradient: "from-orange-500 to-red-500",
      achievements: [
        "50+ 보드게임 규칙 데이터베이스 구축",
        "게임별 전문 지식 Fine-tuning으로 정확도 향상",
        "사용자 만족도 4.8/5점 달성",
        "규칙 검색 속도 0.8초 이내 최적화",
      ],
      github: "https://github.com/your-username/boardgame-rules-bot",
      demo: null,
      timeline: "2024.05 - 2024.07 (3개월)",
      team: "개인 프로젝트",
    },
    {
      id: 4,
      title: "실시간 협업 코드 에디터",
      subtitle: "WebSocket 기반 동시 편집 시스템",
      description: "여러 개발자가 실시간으로 코드를 함께 편집할 수 있는 협업 플랫폼입니다.",
      image: "/placeholder.svg?height=300&width=500",
      tech: ["Node.js", "Socket.io", "React", "Monaco Editor", "Redis", "Docker"],
      category: "Full-Stack",
      status: "Completed",
      gradient: "from-purple-500 to-pink-600",
      achievements: [
        "실시간 동시 편집 충돌 해결 알고리즘 구현",
        "WebSocket 연결 최적화로 지연시간 50ms 이하 달성",
        "500+ 동시 사용자 지원하는 확장 가능한 아키텍처",
        "Docker 컨테이너화로 쉬운 배포 환경 구축",
      ],
      github: "https://github.com/your-username/realtime-code-editor",
      demo: "https://code-collab.vercel.app",
      timeline: "2024.02 - 2024.04 (3개월)",
      team: "개인 프로젝트",
    },
    {
      id: 5,
      title: "마이크로서비스 API 게이트웨이",
      subtitle: "고성능 분산 시스템 아키텍처",
      description: "여러 마이크로서비스를 통합 관리하는 고성능 API 게이트웨이 시스템입니다.",
      image: "/placeholder.svg?height=300&width=500",
      tech: ["Go", "Docker", "Kubernetes", "Redis", "Prometheus", "Grafana"],
      category: "Backend",
      status: "Completed",
      gradient: "from-indigo-500 to-blue-600",
      achievements: [
        "초당 10,000+ 요청 처리 가능한 고성능 시스템",
        "99.9% 가용성 달성하는 안정적인 아키텍처",
        "Kubernetes 기반 자동 스케일링 구현",
        "실시간 모니터링 및 알림 시스템 구축",
      ],
      github: "https://github.com/your-username/api-gateway",
      demo: null,
      timeline: "2023.11 - 2024.01 (3개월)",
      team: "개인 프로젝트",
    },
  ]

  const filteredProjects = projects.filter((project) => {
    const matchesFilter = activeFilter === "All" || project.category === activeFilter
    const matchesSearch =
      project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.tech.some((tech) => tech.toLowerCase().includes(searchTerm.toLowerCase()))
    return matchesFilter && matchesSearch
  })

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50/30">
      <Navigation />

      <div className="pt-16">
        {/* Hero Section - 통계 부분 제거 */}
        <div className="px-4 py-20 bg-gradient-to-br from-white via-blue-50/30 to-purple-50/20 relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl animate-float"></div>
            <div className="absolute top-40 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-float delay-1000"></div>
          </div>

          <div className="max-w-6xl mx-auto text-center relative">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg">
                <Rocket className="w-8 h-8 text-white" />
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold">
                <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-teal-600 bg-clip-text text-transparent">
                  프로젝트 포트폴리오
                </span>
              </h1>
            </div>

            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              AI부터 풀스택까지, 다양한 기술로 실제 문제를 해결한 프로젝트들을 소개합니다.
              <br />각 프로젝트의 기술적 도전과 창의적 해결 과정을 확인해보세요.
            </p>
          </div>
        </div>

        {/* Filter & Search Section */}
        <div className="px-4 py-8 bg-white/80 backdrop-blur-sm border-b border-gray-200">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
              {/* Search */}
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="프로젝트 검색..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                />
              </div>

              {/* Filters */}
              <div className="flex flex-wrap gap-3">
                {filters.map((filter) => (
                  <Button
                    key={filter.key}
                    variant={activeFilter === filter.key ? "default" : "outline"}
                    className={`${
                      activeFilter === filter.key
                        ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg"
                        : "border-gray-200 text-gray-700 hover:bg-gray-50 hover:border-gray-300 bg-white/80 backdrop-blur-sm"
                    } transition-all duration-300 transform hover:scale-105`}
                    onClick={() => setActiveFilter(filter.key)}
                  >
                    <Filter className="w-4 h-4 mr-2" />
                    {filter.label}
                    <Badge className="ml-2 bg-white/20 text-xs">{filter.count}</Badge>
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="px-4 py-16 bg-gradient-to-br from-gray-50 to-blue-50/20">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-8">
              {filteredProjects.map((project) => (
                <Card
                  key={project.id}
                  className="bg-white/80 backdrop-blur-sm border border-gray-200 shadow-lg hover:shadow-2xl transition-all duration-300 group overflow-hidden transform hover:-translate-y-2"
                >
                  {/* Project Image */}
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-t ${project.gradient} opacity-20`}></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>

                    {/* Status Badge */}
                    <Badge
                      className={`absolute top-4 right-4 ${
                        project.status === "Live"
                          ? "bg-green-500/90 border-green-400/50 text-white"
                          : project.status === "Featured"
                            ? "bg-blue-500/90 border-blue-400/50 text-white"
                            : "bg-gray-500/90 border-gray-400/50 text-white"
                      } backdrop-blur-sm shadow-lg`}
                    >
                      <Sparkles className="w-3 h-3 mr-1" />
                      {project.status}
                    </Badge>

                    {/* Category Badge */}
                    <Badge
                      className={`absolute top-4 left-4 bg-gradient-to-r ${project.gradient} text-white border-0 backdrop-blur-sm shadow-lg`}
                    >
                      {project.category}
                    </Badge>
                  </div>

                  <CardContent className="p-6">
                    {/* Project Header */}
                    <div className="mb-4">
                      <h3 className="text-2xl font-bold mb-2 text-gray-900 group-hover:text-blue-600 transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-blue-600 font-medium mb-3">{project.subtitle}</p>
                      <p className="text-gray-600 text-sm leading-relaxed">{project.description}</p>
                    </div>

                    {/* Tech Stack */}
                    <div className="mb-4">
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech) => (
                          <Badge
                            key={tech}
                            className="text-xs bg-gray-100 border-gray-200 text-gray-700 hover:bg-gray-200 transition-colors"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* 핵심 기술 & 성과 섹션 */}
                    <div className="mb-4">
                      <h4 className="font-semibold text-sm mb-3 flex items-center gap-2 text-blue-600">
                        <Sparkles className="w-4 h-4" />
                        핵심 기술 & 성과
                      </h4>
                      <div className="grid grid-cols-1 gap-2">
                        {project.achievements.slice(0, 3).map((achievement, i) => (
                          <div
                            key={i}
                            className="flex items-center gap-2 text-sm text-gray-700 bg-gradient-to-r from-blue-50 to-purple-50/30 p-2 rounded-lg"
                          >
                            <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"></div>
                            {achievement}
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Project Info */}
                    <div className="mb-6 p-4 bg-gradient-to-r from-gray-50 to-purple-50/30 rounded-xl border border-gray-100">
                      <div className="grid grid-cols-2 gap-4 text-xs">
                        <div className="flex items-center gap-2 text-gray-600">
                          <Clock className="w-3 h-3" />
                          <span>{project.timeline}</span>
                        </div>
                        <div className="flex items-center gap-2 text-gray-600">
                          <Users className="w-3 h-3" />
                          <span>{project.team}</span>
                        </div>
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-3">
                      <Link href={`/projects/${project.id}`} className="flex-1">
                        <Button
                          size="sm"
                          variant="outline"
                          className="w-full border-gray-200 text-gray-700 hover:bg-gray-50 hover:border-gray-300 bg-white/80 backdrop-blur-sm transition-all duration-200"
                        >
                          자세히 보기
                        </Button>
                      </Link>
                      <Button
                        size="sm"
                        variant="outline"
                        className="border-gray-200 text-gray-700 hover:bg-gray-50 hover:border-gray-300 bg-white/80 backdrop-blur-sm transition-all duration-200"
                        asChild
                      >
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                          <Github className="w-4 h-4 mr-2" />
                          Code
                        </a>
                      </Button>
                      {project.demo && (
                        <Button
                          size="sm"
                          className={`bg-gradient-to-r ${project.gradient} hover:opacity-90 text-white shadow-lg transition-all duration-200 transform hover:scale-105`}
                          asChild
                        >
                          <a href={project.demo} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="w-4 h-4 mr-2" />
                            Demo
                          </a>
                        </Button>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="px-4 py-16 bg-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-teal-600 bg-clip-text text-transparent">
                더 궁금한 것이 있으신가요?
              </span>
            </h2>
            <p className="text-gray-600 mb-8 text-lg leading-relaxed">
              각 프로젝트의 상세한 기술적 구현이나 개발 과정이 궁금하시다면,
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
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-gray-300 text-gray-700 hover:bg-gray-50 hover:border-gray-400 bg-white/80 backdrop-blur-sm px-8 py-4 text-lg rounded-xl transition-all duration-200 transform hover:scale-105"
                asChild
              >
                <a href="https://github.com/your-username" target="_blank" rel="noopener noreferrer">
                  <Github className="w-5 h-5 mr-2" />
                  GitHub 프로필 보기
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
