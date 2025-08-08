'use client'

import { useState } from 'react'
import { Navigation } from '@/components/navigation'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import {
  Brain,
  Code,
  Database,
  Zap,
  Target,
  Cpu,
  Rocket,
  Bot,
  Search,
  Filter,
  Star,
  TrendingUp,
  Award,
  BookOpen,
  ArrowRight,
} from 'lucide-react'
import Link from 'next/link'

export default function SkillsPage() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [searchTerm, setSearchTerm] = useState('')

  const categories = [
    { key: 'All', label: '전체', count: 18 },
    { key: 'AI/ML', label: 'AI/ML', count: 6 },
    { key: 'Frontend', label: 'Frontend', count: 4 },
    { key: 'Backend', label: 'Backend', count: 4 },
    { key: 'DevOps', label: 'DevOps', count: 4 },
  ]

  const techStack = [
    // AI/ML 기술
    {
      name: 'Multi-Agent Systems',
      level: 90,
      category: 'AI/ML',
      icon: Bot,
      experience: '1년+',
      projects: ['AI 챗봇 포트폴리오'],
      description: 'LangGraph를 활용한 멀티 에이전트 시스템 설계 및 구현',
      achievements: ['복잡한 워크플로우 자동화', '에이전트 간 협업 최적화'],
      nextGoals: ['대규모 에이전트 시스템 구축', '성능 최적화'],
    },
    {
      name: 'LangGraph Orchestration',
      level: 85,
      category: 'AI/ML',
      icon: Brain,
      experience: '1년',
      projects: ['AI 챗봇 포트폴리오', '보드게임 룰 챗봇'],
      description: 'AI 에이전트 워크플로우 오케스트레이션 전문',
      achievements: ['상태 관리 최적화', '에이전트 협업 로직 구현'],
      nextGoals: ['복잡한 비즈니스 로직 구현', '실시간 처리 최적화'],
    },
    {
      name: 'RAG + Knowledge Graphs',
      level: 80,
      category: 'AI/ML',
      icon: Database,
      experience: '1년',
      projects: ['AI 챗봇 포트폴리오', '보드게임 룰 챗봇'],
      description: '검색 증강 생성과 지식 그래프를 결합한 시스템 구축',
      achievements: ['95% 정확도 달성', '벡터 검색 최적화'],
      nextGoals: ['하이브리드 검색 시스템', '실시간 지식 업데이트'],
    },
    {
      name: 'Chain of Thought',
      level: 85,
      category: 'AI/ML',
      icon: Zap,
      experience: '1년',
      projects: ['AI 챗봇 포트폴리오'],
      description: '단계별 추론을 통한 복잡한 문제 해결',
      achievements: ['논리적 추론 능력 향상', '답변 품질 개선'],
      nextGoals: ['자동 추론 체인 생성', '추론 과정 시각화'],
    },
    {
      name: 'Tool Calling & Function Calling',
      level: 80,
      category: 'AI/ML',
      icon: Code,
      experience: '1년',
      projects: ['AI 챗봇 포트폴리오'],
      description: 'AI 모델과 외부 도구/API 연동',
      achievements: ['실시간 데이터 연동', '동적 함수 호출'],
      nextGoals: ['도구 자동 선택', '병렬 함수 실행'],
    },
    {
      name: 'Vector Embeddings',
      level: 85,
      category: 'AI/ML',
      icon: Target,
      experience: '1년',
      projects: ['AI 챗봇 포트폴리오', '데이트 코스 추천 AI'],
      description: '텍스트와 데이터의 벡터 임베딩 및 유사도 검색',
      achievements: ['검색 정확도 향상', '임베딩 최적화'],
      nextGoals: ['멀티모달 임베딩', '실시간 임베딩 업데이트'],
    },

    // Frontend
    {
      name: 'Next.js',
      level: 90,
      category: 'Frontend',
      icon: Rocket,
      experience: '2년+',
      projects: ['AI 챗봇 포트폴리오', '데이트 코스 추천 AI'],
      description: 'App Router, SSR/SSG, API Routes 전문',
      achievements: ['Lighthouse 90+ 점수', '성능 최적화'],
      nextGoals: ['Server Components 심화', 'Edge Runtime 활용'],
    },
    {
      name: 'React',
      level: 95,
      category: 'Frontend',
      icon: Code,
      experience: '3년+',
      projects: ['모든 웹 프로젝트'],
      description: '복잡한 상태 관리와 컴포넌트 설계 능숙',
      achievements: ['재사용 가능한 컴포넌트 라이브러리', '성능 최적화'],
      nextGoals: ['React 19 새 기능', 'Concurrent Features'],
    },
    {
      name: 'TypeScript',
      level: 85,
      category: 'Frontend',
      icon: Zap,
      experience: '2년+',
      projects: ['AI 챗봇 포트폴리오', '실시간 협업 에디터'],
      description: '타입 안전성으로 대규모 프로젝트 구축',
      achievements: ['타입 에러 90% 감소', '개발 생산성 향상'],
      nextGoals: ['고급 타입 시스템', '제네릭 활용'],
    },
    {
      name: 'Tailwind CSS',
      level: 90,
      category: 'Frontend',
      icon: Cpu,
      experience: '2년+',
      projects: ['AI 챗봇 포트폴리오', '모든 최근 프로젝트'],
      description: '빠른 프로토타이핑과 일관된 디자인 시스템',
      achievements: ['디자인 시스템 구축', '반응형 최적화'],
      nextGoals: ['커스텀 플러그인 개발', '디자인 토큰 시스템'],
    },

    // Backend
    {
      name: 'Python',
      level: 90,
      category: 'Backend',
      icon: Code,
      experience: '3년+',
      projects: ['데이트 코스 추천 AI', '보드게임 룰 챗봇'],
      description: 'AI/ML 프로젝트의 주력 언어',
      achievements: ['데이터 처리 파이프라인', 'API 서버 구축'],
      nextGoals: ['비동기 프로그래밍 심화', '성능 최적화'],
    },
    {
      name: 'FastAPI',
      level: 80,
      category: 'Backend',
      icon: Rocket,
      experience: '1년+',
      projects: ['데이트 코스 추천 AI'],
      description: '고성능 API 개발',
      achievements: ['자동 문서화', '비동기 처리 최적화'],
      nextGoals: ['마이크로서비스 아키텍처', '실시간 API'],
    },
    {
      name: 'PostgreSQL',
      level: 75,
      category: 'Backend',
      icon: Database,
      experience: '2년',
      projects: ['데이트 코스 추천 AI', '실시간 협업 에디터'],
      description: '복잡한 쿼리 최적화 경험',
      achievements: ['공간 데이터 처리', '인덱싱 최적화'],
      nextGoals: ['고급 쿼리 최적화', '샤딩 전략'],
    },
    {
      name: 'Node.js',
      level: 70,
      category: 'Backend',
      icon: Zap,
      experience: '1년+',
      projects: ['실시간 협업 에디터'],
      description: 'JavaScript 풀스택 개발',
      achievements: ['실시간 통신', 'WebSocket 구현'],
      nextGoals: ['성능 모니터링', '클러스터링'],
    },

    // DevOps
    {
      name: 'Docker',
      level: 70,
      category: 'DevOps',
      icon: Cpu,
      experience: '1년+',
      projects: ['실시간 협업 에디터', 'API 게이트웨이'],
      description: '컨테이너화 배포',
      achievements: ['멀티 스테이지 빌드', '이미지 최적화'],
      nextGoals: ['Kubernetes 연동', 'CI/CD 파이프라인'],
    },
    {
      name: 'Vercel',
      level: 85,
      category: 'DevOps',
      icon: Rocket,
      experience: '2년+',
      projects: ['AI 챗봇 포트폴리오', '데이트 코스 추천 AI'],
      description: '서버리스 배포 최적화',
      achievements: ['자동 배포', '성능 모니터링'],
      nextGoals: ['Edge Functions', 'A/B 테스팅'],
    },
    {
      name: 'Git/GitHub',
      level: 95,
      category: 'DevOps',
      icon: Code,
      experience: '3년+',
      projects: ['모든 프로젝트'],
      description: '협업과 버전 관리',
      achievements: ['브랜치 전략 수립', '코드 리뷰 문화'],
      nextGoals: ['GitHub Actions 고도화', '자동화 워크플로우'],
    },
    {
      name: 'Redis',
      level: 65,
      category: 'DevOps',
      icon: Database,
      experience: '1년',
      projects: ['데이트 코스 추천 AI'],
      description: '인메모리 캐시 및 세션 관리',
      achievements: ['API 응답 속도 70% 향상', '캐싱 전략 수립'],
      nextGoals: ['클러스터 구성', '실시간 데이터 스트리밍'],
    },
  ]

  const learningJourney = [
    {
      year: '2022',
      title: '프로그래밍 시작',
      technologies: ['Python', 'HTML/CSS'],
      description: '프로그래밍의 기초를 다지며 첫 발걸음',
    },
    {
      year: '2023',
      title: '웹 개발 진입',
      technologies: ['React', 'JavaScript', 'Node.js'],
      description: '웹 개발 생태계 탐구 및 첫 프로젝트 완성',
    },
    {
      year: '2024',
      title: 'AI 특화',
      technologies: ['LangGraph', 'RAG', 'Vector DB'],
      description: 'AI 분야 진출 및 전문성 구축',
    },
    {
      year: '2025',
      title: '전문성 심화',
      technologies: ['Multi-Agent', 'Advanced RAG', 'Production AI'],
      description: '현재 학습 중인 고급 기술들',
    },
  ]

  const certifications = [
    {
      title: 'SK Networks AI 캠프 11기',
      issuer: 'SK Networks',
      date: '2025',
      description: 'LangChain, RAG 시스템 등 실무 AI 기술 학습',
      status: '완료',
    },
    {
      title: 'Advanced Prompt Engineering',
      issuer: 'OpenAI',
      date: '진행 중',
      description: '고급 프롬프트 엔지니어링 기법',
      status: '학습 중',
    },
    {
      title: 'Vector Database Optimization',
      issuer: 'Pinecone',
      date: '계획',
      description: '벡터 데이터베이스 성능 최적화',
      status: '예정',
    },
  ]

  const filteredSkills = techStack.filter(skill => {
    const matchesCategory =
      activeCategory === 'All' || skill.category === activeCategory
    const matchesSearch =
      skill.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      skill.description.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesCategory && matchesSearch
  })

  const getSkillColor = (level: number) => {
    if (level >= 90) return 'from-green-500 to-emerald-600'
    if (level >= 80) return 'from-blue-500 to-cyan-600'
    if (level >= 70) return 'from-yellow-500 to-orange-600'
    return 'from-gray-500 to-slate-600'
  }

  const getSkillLabel = (level: number) => {
    if (level >= 90) return 'Expert'
    if (level >= 80) return 'Advanced'
    if (level >= 70) return 'Intermediate'
    return 'Beginner'
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50/30">
      <Navigation />

      <div className="pt-16">
        {/* Hero Section */}
        <div className="px-4 py-20 bg-gradient-to-br from-white via-blue-50/30 to-purple-50/20 relative overflow-hidden">
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl animate-float"></div>
            <div className="absolute top-40 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-float delay-1000"></div>
          </div>

          <div className="max-w-6xl mx-auto text-center relative">
            <Badge className="bg-gradient-to-r from-blue-500 to-purple-600 text-white border-0 mb-6 px-4 py-2">
              <Code className="w-4 h-4 mr-2" />
              Skills & Expertise
            </Badge>

            <h1 className="text-4xl lg:text-5xl font-bold mb-6 text-gray-900">
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-teal-600 bg-clip-text text-transparent">
                기술 스택 & 전문 분야
              </span>
            </h1>

            <p className="text-xl text-gray-600 mb-8 leading-relaxed max-w-3xl mx-auto">
              프론트엔드부터 AI까지, 다양한 기술로 문제를 해결합니다.
              <br />각 기술의 숙련도와 경험을 상세히 확인해보세요.
            </p>
          </div>
        </div>

        {/* Filter & Search */}
        <div className="px-4 py-8 bg-white/80 backdrop-blur-sm border-b border-gray-200">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
              {/* Search */}
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="기술 검색..."
                  value={searchTerm}
                  onChange={e => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                />
              </div>

              {/* Categories */}
              <div className="flex flex-wrap gap-3">
                {categories.map(category => (
                  <Button
                    key={category.key}
                    variant={
                      activeCategory === category.key ? 'default' : 'outline'
                    }
                    className={`${
                      activeCategory === category.key
                        ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg'
                        : 'border-gray-200 text-gray-700 hover:bg-gray-50 hover:border-gray-300 bg-white/80 backdrop-blur-sm'
                    } transition-all duration-300 transform hover:scale-105`}
                    onClick={() => setActiveCategory(category.key)}
                  >
                    <Filter className="w-4 h-4 mr-2" />
                    {category.label}
                    <Badge className="ml-2 bg-white/20 text-xs">
                      {category.count}
                    </Badge>
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Skills Grid */}
        <div className="px-4 py-16 bg-gradient-to-br from-gray-50 to-blue-50/20">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-8">
              {filteredSkills.map((skill, index) => (
                <Link
                  href={`/skills/${skill.name.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
                  key={skill.name}
                >
                  <Card className="bg-white/80 backdrop-blur-sm border border-gray-200 shadow-lg hover:shadow-2xl transition-all duration-300 group overflow-hidden transform hover:-translate-y-1 cursor-pointer">
                    <CardContent className="p-6">
                      {/* Skill Header */}
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center gap-3">
                          <div
                            className={`w-12 h-12 bg-gradient-to-r ${getSkillColor(skill.level)} rounded-xl flex items-center justify-center`}
                          >
                            <skill.icon className="w-6 h-6 text-white" />
                          </div>
                          <div>
                            <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                              {skill.name}
                            </h3>
                            <div className="flex items-center gap-2">
                              <Badge
                                className={`bg-gradient-to-r ${getSkillColor(skill.level)} text-white border-0 text-xs`}
                              >
                                {getSkillLabel(skill.level)}
                              </Badge>
                              <span className="text-sm text-gray-500">
                                {skill.experience}
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-2xl font-bold text-gray-900">
                            {skill.level}%
                          </div>
                          <div className="flex items-center gap-1">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                className={`w-3 h-3 ${
                                  i < Math.floor(skill.level / 20)
                                    ? 'text-yellow-400 fill-current'
                                    : 'text-gray-300'
                                }`}
                              />
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Progress Bar */}
                      <div className="mb-4">
                        <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                          <div
                            className={`h-3 rounded-full bg-gradient-to-r ${getSkillColor(skill.level)} transition-all duration-1000 group-hover:scale-105`}
                            style={{ width: `${skill.level}%` }}
                          ></div>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                        {skill.description}
                      </p>

                      {/* Projects */}
                      <div className="mb-4">
                        <h4 className="font-semibold text-sm mb-2 text-gray-900">
                          관련 프로젝트
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {skill.projects.map((project, i) => (
                            <Badge
                              key={i}
                              className="text-xs bg-blue-50 text-blue-700 border-blue-200"
                            >
                              {project}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      {/* Achievements */}
                      <div className="mb-4">
                        <h4 className="font-semibold text-sm mb-2 flex items-center gap-2 text-green-600">
                          <Award className="w-4 h-4" />
                          주요 성과
                        </h4>
                        <ul className="space-y-1">
                          {skill.achievements.map((achievement, i) => (
                            <li
                              key={i}
                              className="flex items-start gap-2 text-xs text-gray-600"
                            >
                              <div className="w-1 h-1 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Next Goals */}
                      <div>
                        <h4 className="font-semibold text-sm mb-2 flex items-center gap-2 text-purple-600">
                          <TrendingUp className="w-4 h-4" />
                          학습 목표
                        </h4>
                        <ul className="space-y-1">
                          {skill.nextGoals.map((goal, i) => (
                            <li
                              key={i}
                              className="flex items-start gap-2 text-xs text-gray-600"
                            >
                              <div className="w-1 h-1 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                              {goal}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </CardContent>
                    <div className="mt-4 pt-4 border-t border-gray-200">
                      <Button
                        size="sm"
                        variant="outline"
                        className="w-full bg-transparent"
                      >
                        자세히 보기
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </div>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Learning Journey */}
        <div className="px-4 py-20 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                학습 여정
              </h2>
              <p className="text-xl text-gray-600">
                기술 습득 과정과 성장 스토리
              </p>
            </div>

            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-200 to-purple-200 rounded-full hidden md:block"></div>

              <div className="space-y-12">
                {learningJourney.map((item, index) => (
                  <div
                    key={index}
                    className={`flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} flex-col`}
                  >
                    <div
                      className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pr-8 md:text-right' : 'md:pl-8 md:text-left'} text-center mb-4 md:mb-0`}
                    >
                      <Card className="bg-white border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                        <CardContent className="p-6">
                          <div
                            className={`flex items-center gap-3 mb-4 ${index % 2 === 0 ? 'md:justify-end' : 'md:justify-start'} justify-center`}
                          >
                            <div className="text-3xl font-bold text-blue-600">
                              {item.year}
                            </div>
                          </div>
                          <h3 className="text-xl font-bold text-gray-900 mb-3">
                            {item.title}
                          </h3>
                          <p className="text-gray-600 mb-4 leading-relaxed">
                            {item.description}
                          </p>
                          <div className="flex flex-wrap gap-2 justify-center">
                            {item.technologies.map((tech, i) => (
                              <Badge
                                key={i}
                                className="text-xs bg-gray-100 text-gray-700 border-gray-200"
                              >
                                {tech}
                              </Badge>
                            ))}
                          </div>
                        </CardContent>
                      </Card>
                    </div>

                    {/* Timeline Dot */}
                    <div className="relative z-10 hidden md:block">
                      <div className="w-6 h-6 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full border-4 border-white shadow-lg"></div>
                    </div>

                    <div className="w-full md:w-1/2"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Certifications */}
        <div className="px-4 py-20 bg-gradient-to-br from-gray-50 to-blue-50/20">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                자격증 & 교육
              </h2>
              <p className="text-xl text-gray-600">
                완료한 교육과 진행 중인 학습
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {certifications.map((cert, index) => (
                <Card
                  key={index}
                  className={`bg-white/80 backdrop-blur-sm border shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 ${
                    cert.status === '완료'
                      ? 'border-green-200'
                      : cert.status === '학습 중'
                        ? 'border-blue-200'
                        : 'border-gray-200'
                  }`}
                >
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div
                        className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                          cert.status === '완료'
                            ? 'bg-green-100'
                            : cert.status === '학습 중'
                              ? 'bg-blue-100'
                              : 'bg-gray-100'
                        }`}
                      >
                        <BookOpen
                          className={`w-6 h-6 ${
                            cert.status === '완료'
                              ? 'text-green-600'
                              : cert.status === '학습 중'
                                ? 'text-blue-600'
                                : 'text-gray-600'
                          }`}
                        />
                      </div>
                      <Badge
                        className={`${
                          cert.status === '완료'
                            ? 'bg-green-100 text-green-700 border-green-200'
                            : cert.status === '학습 중'
                              ? 'bg-blue-100 text-blue-700 border-blue-200'
                              : 'bg-gray-100 text-gray-700 border-gray-200'
                        }`}
                      >
                        {cert.status}
                      </Badge>
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                      {cert.title}
                    </h3>
                    <p className="text-blue-600 font-medium mb-2">
                      {cert.issuer}
                    </p>
                    <p className="text-sm text-gray-500 mb-3">{cert.date}</p>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {cert.description}
                    </p>
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
                기술적 질문이 있으신가요?
              </span>
            </h2>
            <p className="text-gray-600 mb-8 text-lg leading-relaxed">
              특정 기술에 대한 경험이나 프로젝트 적용 사례가 궁금하시다면,
              <br />
              AI 챗봇에게 직접 질문해보세요!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/chatbot">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-4 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105"
                >
                  <Bot className="w-5 h-5 mr-2" />
                  AI 챗봇에게 질문하기
                </Button>
              </Link>
              <Link href="/projects">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-gray-300 text-gray-700 hover:bg-gray-50 hover:border-gray-400 bg-white/80 backdrop-blur-sm px-8 py-4 text-lg rounded-xl transition-all duration-200 transform hover:scale-105"
                >
                  프로젝트에서 확인하기
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
