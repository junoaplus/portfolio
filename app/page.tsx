"use client"
import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Github,
  Mail,
  ExternalLink,
  Phone,
  GraduationCap,
  Trophy,
  Cpu,
  Target,
  Lightbulb,
  TrendingUp,
  Brain,
  Zap,
  Sparkles,
  Bot,
  Users,
  ArrowRight,
  Rocket,
  Code,
  Database,
} from "lucide-react"
import Link from "next/link"

export default function HomePage() {
  const techStack = [
    // 1줄: AI/ML 핵심 기술
    { name: "LangGraph", level: 90, icon: "🧠", slug: "langgraph" },
    { name: "LangChain", level: 85, icon: "🔗", slug: "langchain" },
    { name: "Multi-Agent", level: 90, icon: "🤖", slug: "multi-agent" },
    { name: "MCP", level: 80, icon: "🔌", slug: "mcp" },
    { name: "Vector DB", level: 85, icon: "🔍", slug: "vector-db" },
    { name: "RAG", level: 85, icon: "📚", slug: "rag" },

    // 2줄: AI 백엔드 + 고급 프론트
    { name: "FastAPI", level: 80, icon: "⚡", slug: "fastapi" },
    { name: "Supabase", level: 75, icon: "☁️", slug: "supabase" },
    { name: "TypeScript", level: 85, icon: "📘", slug: "typescript" },
    { name: "React", level: 90, icon: "⚛️", slug: "react" },
    { name: "Next.js", level: 90, icon: "⚡", slug: "nextjs" },

    // 3줄: 나머지 개발 스택
    { name: "Tailwind", level: 85, icon: "🎨", slug: "tailwind" },
    { name: "Docker", level: 70, icon: "🐳", slug: "docker" },
    { name: "Vercel", level: 80, icon: "☁️", slug: "vercel" },
    { name: "PostgreSQL", level: 75, icon: "🐘", slug: "postgresql" },
    { name: "Python", level: 90, icon: "🐍", slug: "python" },
    { name: "GitHub", level: 95, icon: "🐙", slug: "github" },
  ]

  const projects = [
    {
      id: 1, // 추가
      title: "AI 챗봇 포트폴리오",
      description: "LangGraph 멀티 에이전트로 구축한 인터랙티브 포트폴리오",
      image: "/placeholder.svg?height=200&width=300",
      tech: ["Next.js", "LangGraph", "RAG", "OpenAI"],
      achievements: ["실시간 GitHub 연동", "벡터 검색 최적화", "95% 정확도"],
      github: "#",
      demo: "#",
      status: "Live",
      metrics: { stars: 42, views: "2.1k", commits: 156 },
      gradient: "from-blue-500 to-purple-600",
    },
    {
      id: 2, // 추가
      title: "데이트 코스 추천 AI",
      description: "서울시 데이터 기반 맞춤형 데이트 코스 추천 서비스",
      image: "/placeholder.svg?height=200&width=300",
      tech: ["FastAPI", "React", "AI Agents", "PostgreSQL"],
      achievements: ["100만+ 장소 데이터", "실시간 길찾기", "⭐ 24 GitHub Stars"],
      github: "#",
      demo: "#",
      status: "Featured",
      metrics: { stars: 24, views: "5.3k", commits: 203 },
      gradient: "from-green-500 to-teal-600",
    },
    {
      id: 3, // 추가
      title: "보드게임 룰 챗봇",
      description: "복잡한 보드게임 규칙을 쉽게 설명하는 AI 어시스턴트",
      image: "/placeholder.svg?height=200&width=300",
      tech: ["Django", "RAG", "Vector DB", "Fine-tuning"],
      achievements: ["50+ 게임 지원", "규칙 검색 최적화", "사용자 만족도 4.8/5"],
      github: "#",
      demo: null,
      status: "Completed",
      metrics: { stars: 18, views: "1.8k", commits: 127 },
      gradient: "from-orange-500 to-red-500",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50/30">
      {/* Navigation */}
      <Navigation />

      {/* Hero Section - 토스 스타일 */}
      <section className="mt-16 px-4 py-20 bg-gradient-to-br from-white via-blue-50/30 to-purple-50/20 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl animate-float"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-float delay-1000"></div>
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl animate-float delay-500"></div>
        </div>

        <div className="max-w-6xl mx-auto relative">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            {/* Profile Image */}
            <div className="flex-shrink-0 relative">
              <div className="w-48 h-48 rounded-3xl overflow-hidden bg-gradient-to-br from-blue-100 to-purple-100 shadow-2xl relative">
                <img
                  src="/placeholder.svg?height=192&width=192"
                  alt="황준호 프로필"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-600/20 to-transparent"></div>
              </div>
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full animate-bounce"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-gradient-to-r from-green-500 to-teal-600 rounded-full animate-bounce delay-300"></div>
            </div>

            {/* Main Content */}
            <div className="flex-1 text-center lg:text-left">
              <div className="mb-6">
                <Badge className="bg-gradient-to-r from-blue-500 to-purple-600 text-white border-0 mb-4 px-4 py-2 text-sm font-medium">
                  <Sparkles className="w-4 h-4 mr-2" />
                  AI Specialist
                </Badge>
              </div>

              <h1 className="text-5xl lg:text-6xl font-bold mb-6 text-gray-900 leading-tight">
                AI Engineer
                <br />
                <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-teal-600 bg-clip-text text-transparent">
                  황준호
                </span>
              </h1>

              <p className="text-xl lg:text-2xl text-gray-600 mb-8 leading-relaxed">
                <span className="text-blue-600 font-semibold">LangGraph</span>와{" "}
                <span className="text-green-600 font-semibold">RAG</span>로 만드는
                <br />
                <strong className="text-gray-900">차세대 AI 서비스</strong>
              </p>

              <div className="flex flex-wrap justify-center lg:justify-start gap-3 mb-8">
                <Badge className="bg-blue-50 text-blue-700 border border-blue-200 hover:bg-blue-100 transition-colors">
                  멀티 에이전트 시스템
                </Badge>
                <Badge className="bg-green-50 text-green-700 border border-green-200 hover:bg-green-100 transition-colors">
                  벡터 검색 최적화
                </Badge>
                <Badge className="bg-purple-50 text-purple-700 border border-purple-200 hover:bg-purple-100 transition-colors">
                  사용자 중심 설계
                </Badge>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link href="/chatbot">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105"
                  >
                    <Bot className="w-5 h-5 mr-2" />
                    AI 챗봇과 대화하기
                  </Button>
                </Link>
                <Link href="/projects">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-2 border-gray-300 text-gray-700 hover:bg-gray-50 hover:border-gray-400 px-8 py-4 text-lg rounded-xl bg-white/80 backdrop-blur-sm transition-all duration-200 transform hover:scale-105"
                  >
                    프로젝트 보기
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Me Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-gray-50 to-blue-50/20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">About Me</h2>
            <p className="text-xl text-gray-600">AI 개발자로서의 철학과 비전을 소개합니다</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-white/80 backdrop-blur-sm border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-yellow-400 to-orange-500"></div>
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-gray-900">
                  <div className="w-12 h-12 bg-gradient-to-br from-yellow-100 to-orange-100 rounded-xl flex items-center justify-center">
                    <Lightbulb className="w-6 h-6 text-yellow-600" />
                  </div>
                  개발 철학
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 leading-relaxed">
                  <strong className="text-blue-600">"AI는 사람을 대체하는 것이 아니라 증강하는 것"</strong>이라는
                  믿음으로 개발합니다. 복잡한 AI 기술을 직관적인 인터페이스로 만들어, 누구나 쉽게 AI의 힘을 활용할 수
                  있도록 하는 것이 목표입니다.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/80 backdrop-blur-sm border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-purple-500"></div>
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-gray-900">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-purple-100 rounded-xl flex items-center justify-center">
                    <Target className="w-6 h-6 text-blue-600" />
                  </div>
                  목표 & 비전
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 leading-relaxed">
                  <strong className="text-green-600">멀티 에이전트 시스템</strong>과{" "}
                  <strong className="text-purple-600">RAG 기술</strong>을 활용한 차세대 AI 서비스를 만드는 것이
                  꿈입니다. 5년 후에는 AI 제품의 기술 리더가 되어 더 많은 혁신을 이끌고 싶습니다.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">주요 프로젝트</h2>
            <p className="text-xl text-gray-600">AI 기술로 실제 문제를 해결한 프로젝트들을 소개합니다</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="bg-white border border-gray-200 shadow-lg hover:shadow-2xl transition-all duration-300 group overflow-hidden transform hover:-translate-y-2"
              >
                <div className="relative">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${project.gradient} opacity-20`}></div>
                  <Badge
                    className={`absolute top-3 right-3 ${
                      project.status === "Live"
                        ? "bg-green-100 text-green-700 border-green-200"
                        : project.status === "Featured"
                          ? "bg-blue-100 text-blue-700 border-blue-200"
                          : "bg-gray-100 text-gray-700 border-gray-200"
                    } backdrop-blur-sm`}
                  >
                    {project.status}
                  </Badge>
                </div>

                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-gray-900 group-hover:text-blue-600 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">{project.description}</p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <Badge key={tech} className="text-xs bg-gray-100 text-gray-700 border-gray-200">
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  {/* Key Achievements */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-sm mb-3 flex items-center gap-2 text-green-600">
                      <TrendingUp className="w-4 h-4" />
                      주요 성과
                    </h4>
                    <ul className="text-xs text-gray-600 space-y-1">
                      {project.achievements.slice(0, 2).map((achievement, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <div className="w-1 h-1 bg-blue-500 rounded-full"></div>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex gap-3">
                    <Link href={`/projects/${project.id}`} className="flex-1">
                      <Button
                        size="sm"
                        variant="outline"
                        className="w-full border-gray-200 text-gray-700 hover:bg-gray-50 bg-transparent"
                      >
                        자세히 보기
                      </Button>
                    </Link>
                    <Button
                      size="sm"
                      variant="outline"
                      className="border-gray-200 text-gray-700 hover:bg-gray-50 bg-transparent"
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
                        className={`bg-gradient-to-r ${project.gradient} hover:opacity-90 text-white transition-all duration-200 transform hover:scale-105`}
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
      </section>

      {/* Tech Stack Section - 새로운 카드 그리드 */}
      <section className="py-20 px-4 bg-gradient-to-br from-gray-50 to-purple-50/20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">기술 스택</h2>
            <p className="text-xl text-gray-600">AI 전문 분야를 중심으로 한 기술 역량을 소개합니다</p>
          </div>

          {/* 기술 카드 그리드 - 벽돌식 지그재그 레이아웃 (전체 너비) */}
          <div className="space-y-4 w-full">
            {/* 1줄: AI/ML 핵심 (6개) */}
            <div className="grid grid-cols-6 gap-3">
              {techStack.slice(0, 6).map((tech, index) => (
                <Link key={tech.slug} href={`/skills/${tech.slug}`}>
                  <Card className="h-16 bg-white/90 backdrop-blur-sm border-2 border-gray-200 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-105 cursor-pointer group relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-50 to-pink-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <CardContent className="p-3 h-full flex items-center gap-3 relative z-10">
                      <div className="text-2xl group-hover:scale-110 transition-transform duration-300">
                        {tech.icon}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="text-sm font-bold text-gray-900 leading-tight truncate">
                          {tech.name}
                        </div>
                      </div>
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <ArrowRight className="w-4 h-4 text-purple-500" />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>

            {/* 2줄: AI 백엔드 + 고급 프론트 (5개) - 반칸씩 밀어서 벽돌식 */}
            <div className="grid grid-cols-12 gap-3">
              <div className="col-span-1"></div>
              {techStack.slice(6, 11).map((tech, index) => (
                <Link key={tech.slug} href={`/skills/${tech.slug}`} className="col-span-2">
                  <Card className="h-16 bg-white/90 backdrop-blur-sm border-2 border-gray-200 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-105 cursor-pointer group relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-cyan-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <CardContent className="p-3 h-full flex items-center gap-3 relative z-10">
                      <div className="text-2xl group-hover:scale-110 transition-transform duration-300">
                        {tech.icon}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="text-sm font-bold text-gray-900 leading-tight truncate">
                          {tech.name}
                        </div>
                      </div>
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <ArrowRight className="w-4 h-4 text-blue-500" />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
              <div className="col-span-1"></div>
            </div>

            {/* 3줄: 나머지 개발 스택 (6개) - 첫번째줄과 맞춤 */}
            <div className="grid grid-cols-6 gap-3">
              {techStack.slice(11, 17).map((tech, index) => (
                <Link key={tech.slug} href={`/skills/${tech.slug}`}>
                  <Card className="h-16 bg-white/90 backdrop-blur-sm border-2 border-gray-200 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-105 cursor-pointer group relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-green-50 to-teal-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <CardContent className="p-3 h-full flex items-center gap-3 relative z-10">
                      <div className="text-2xl group-hover:scale-110 transition-transform duration-300">
                        {tech.icon}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="text-sm font-bold text-gray-900 leading-tight truncate">
                          {tech.name}
                        </div>
                      </div>
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <ArrowRight className="w-4 h-4 text-green-500" />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>

          {/* 더 많은 기술 보기 버튼 */}
          <div className="text-center mt-12">
            <Link href="/skills">
              <Button 
                size="lg"
                variant="outline"
                className="border-2 border-gray-300 text-gray-700 hover:bg-gray-50 hover:border-gray-400 bg-white/80 backdrop-blur-sm px-8 py-4 text-lg rounded-xl transition-all duration-200 transform hover:scale-105"
              >
                모든 기술 스택 보기
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Education & Activities - 박스 크기 맞추기 */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">학력 & 경험</h2>
            <p className="text-xl text-gray-600">교육 배경과 리더십 경험을 소개합니다</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Education - 높이 맞추기 */}
            <div className="flex flex-col h-full">
              <h3 className="text-2xl font-bold mb-8 flex items-center gap-3 text-gray-900">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                  <GraduationCap className="w-5 h-5 text-white" />
                </div>
                학력
              </h3>
              <div className="space-y-6 flex-1">
                <Card className="bg-white border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 relative overflow-hidden">
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-400 to-purple-500"></div>
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-purple-100 rounded-xl flex items-center justify-center flex-shrink-0">
                        <GraduationCap className="w-6 h-6 text-blue-600" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-bold text-lg text-gray-900 mb-1">한국항공대학교</h4>
                        <p className="text-blue-600 mb-2 font-medium">소프트웨어학과 (4-1 휴학)</p>
                        <p className="text-gray-500 text-sm mb-3">2022 - 현재</p>
                        <p className="text-gray-600 text-sm">
                          AI와 소프트웨어 개발의 기초를 다지며, 실무 프로젝트를 통해 실력을 키워가고 있습니다.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-white border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 relative overflow-hidden">
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-green-400 to-teal-500"></div>
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-green-100 to-teal-100 rounded-xl flex items-center justify-center flex-shrink-0">
                        <GraduationCap className="w-6 h-6 text-green-600" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-bold text-lg text-gray-900 mb-1">하노이한국국제학교</h4>
                        <p className="text-green-600 mb-2 font-medium">고등학교 졸업</p>
                        <p className="text-gray-500 text-sm mb-3">2018 - 2021</p>
                        <p className="text-gray-600 text-sm">
                          국제적인 환경에서 다양한 문화를 경험하며 글로벌 마인드를 기를 수 있었습니다.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Activities - 높이 맞추기 */}
            <div className="flex flex-col h-full">
              <h3 className="text-2xl font-bold mb-8 flex items-center gap-3 text-gray-900">
                <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg flex items-center justify-center">
                  <Trophy className="w-5 h-5 text-white" />
                </div>
                대외활동 & 리더십
              </h3>
              <div className="space-y-6 flex-1">
                <Card className="bg-white border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 relative overflow-hidden">
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-purple-400 to-pink-500"></div>
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-purple-100 to-pink-100 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Brain className="w-6 h-6 text-purple-600" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-bold text-lg text-gray-900 mb-1">SK Networks Family AI Camp 11기</h4>
                        <p className="text-purple-600 mb-2 font-medium">AI 개발 교육 프로그램</p>
                        <p className="text-gray-500 text-sm mb-3">2025</p>
                        <p className="text-gray-600 text-sm">
                          LangChain, RAG 시스템 등 실무 AI 기술을 학습하며 최신 AI 트렌드를 익혔습니다.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-white border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 relative overflow-hidden">
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-orange-400 to-red-500"></div>
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-orange-100 to-red-100 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Trophy className="w-6 h-6 text-orange-600" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-bold text-lg text-gray-900 mb-1">부학생회장</h4>
                        <p className="text-orange-600 mb-2 font-medium">한국항공대학교 학생회</p>
                        <p className="text-gray-500 text-sm mb-3">2024</p>
                        <p className="text-gray-600 text-sm">
                          학교 전체 학생 대표로 활동하며 리더십과 소통 능력을 기를 수 있었습니다.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-white border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 relative overflow-hidden">
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-400 to-cyan-500"></div>
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Users className="w-6 h-6 text-blue-600" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-bold text-lg text-gray-900 mb-1">소프트웨어학과 과대표</h4>
                        <p className="text-blue-600 mb-2 font-medium">한국항공대학교</p>
                        <p className="text-gray-500 text-sm mb-3">2023</p>
                        <p className="text-gray-600 text-sm">
                          학과 행사 기획과 학생들 간의 소통 창구 역할을 담당했습니다.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-gray-50 to-blue-50/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4 text-gray-900">연락하기</h2>
          <p className="text-xl text-gray-600 mb-16">언제든지 편하게 연락주세요</p>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <a
              href="https://github.com/your-username"
              className="flex flex-col items-center p-8 bg-white/80 backdrop-blur-sm border border-gray-200 rounded-2xl hover:shadow-xl transition-all duration-300 group transform hover:-translate-y-2"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl flex items-center justify-center mb-4 group-hover:from-gray-200 group-hover:to-gray-300 transition-all duration-300">
                <Github className="w-8 h-8 text-gray-700" />
              </div>
              <div className="font-bold text-lg text-gray-900 mb-2">GitHub</div>
              <div className="text-sm text-gray-500">github.com/your-username</div>
            </a>

            <a
              href="mailto:your-email@gmail.com"
              className="flex flex-col items-center p-8 bg-white/80 backdrop-blur-sm border border-gray-200 rounded-2xl hover:shadow-xl transition-all duration-300 group transform hover:-translate-y-2"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl flex items-center justify-center mb-4 group-hover:from-blue-200 group-hover:to-purple-200 transition-all duration-300">
                <Mail className="w-8 h-8 text-blue-600" />
              </div>
              <div className="font-bold text-lg text-gray-900 mb-2">Email</div>
              <div className="text-sm text-gray-500">your-email@gmail.com</div>
            </a>

            <a
              href="tel:+82-10-1234-5678"
              className="flex flex-col items-center p-8 bg-white/80 backdrop-blur-sm border border-gray-200 rounded-2xl hover:shadow-xl transition-all duration-300 group transform hover:-translate-y-2"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-green-100 to-teal-100 rounded-2xl flex items-center justify-center mb-4 group-hover:from-green-200 group-hover:to-teal-200 transition-all duration-300">
                <Phone className="w-8 h-8 text-green-600" />
              </div>
              <div className="font-bold text-lg text-gray-900 mb-2">Phone</div>
              <div className="text-sm text-gray-500">010-1234-5678</div>
            </a>
          </div>

          <div>
            <Button
              variant="outline"
              size="lg"
              className="border-2 border-gray-300 text-gray-700 hover:bg-gray-50 hover:border-gray-400 bg-white/80 backdrop-blur-sm px-8 py-4 text-lg rounded-xl transition-all duration-200 transform hover:scale-105"
            >
              이력서 다운로드
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 bg-white border-t border-gray-200">
        <div className="max-w-6xl mx-auto text-center text-gray-500">
          <p>&copy; 2025 황준호. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
