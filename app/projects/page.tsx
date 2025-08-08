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
  Sparkles,
} from 'lucide-react'
import Link from 'next/link'

export default function ProjectsPage() {

  const projects = [
    {
      id: 1,
      title: 'AI 챗봇 포트폴리오',
      subtitle: 'LangGraph 멀티 에이전트 시스템',
      description:
        '실시간 GitHub 데이터와 RAG 시스템을 결합한 인터랙티브 AI 포트폴리오. 사용자 질문에 대해 95% 정확도로 답변하는 멀티 에이전트 챗봇입니다.',
      image: '/placeholder.svg?height=300&width=500',
      tech: [
        'Next.js 14',
        'LangGraph',
        'RAG',
        'OpenAI',
        'Supabase',
        'TypeScript',
      ],
      category: 'AI/ML',
      status: 'Live',
      gradient: 'from-blue-500 to-purple-600',
      achievements: [
        '실시간 GitHub 데이터 연동으로 최신 정보 제공',
        '벡터 검색 최적화로 95% 정확도 달성',
        '멀티 에이전트 협업으로 복잡한 질문 처리',
        '응답 시간 1.5초 이내 최적화',
      ],
      github: 'https://github.com/your-username/ai-portfolio',
      demo: '/chatbot',
      timeline: '2024.11 - 2025.01 (3개월)',
      team: '개인 프로젝트',
    },
    {
      id: 2,
      title: '데이트 코스 추천 AI',
      subtitle: '3개 마이크로서비스로 구현한 실시간 대화형 AI 추천 엔진',
      description:
        '사용자가 AI 챗봇과 자연스럽게 대화하며 MBTI, 관계단계, 예산 등을 입력하면, 3개의 전문 마이크로서비스가 협업하여 개인맞춤형 데이트 코스를 실시간 생성하는 시스템입니다. 서울시 25개구 89,321개 검증 장소 중에서 벡터 유사도 검색과 지리공간 필터링을 통해 최적의 조합을 찾아 추천하며, 대화 맥락을 기억하여 점진적으로 더 정확한 추천을 제공합니다.',
      image: '/date.jpeg',
      tech: [
        'PySpark 3.5.0',
        'OpenAI GPT-4',
        'LangChain',
        'Qdrant Vector DB',
        'FastAPI',
        'PostgreSQL',
        'SQLAlchemy',
        'Redis',
        'NumPy',
        'Tiktoken',
        'Docker',
        'Next.js 15'
      ],
      category: 'AI/ML',
      status: 'Featured',
      gradient: 'from-green-500 to-teal-600',
      achievements: [
        'PySpark ETL로 20만→9만개 데이터 품질 정제 + 중복 제거',
        'Qdrant 벡터 검색 전 151개 세분화 카테고리 필터링',
        '서울시 25개구 89,321개 검증된 장소 DB 구축',
      ],
      github: 'https://github.com/your-username/date-course-ai',
      demo: 'https://date-course-ai.vercel.app',
      timeline: '2024.06 - 2024.07 (7주)',
      team: '5명',
    },
    {
      id: 3,
      title: '보드게임 룰 챗봇',
      subtitle: '복잡한 게임 규칙을 쉽게 설명하는 AI',
      description:
        '50+ 보드게임의 복잡한 규칙을 AI가 쉽고 재미있게 설명해주는 전문 어시스턴트입니다.',
      image: '/placeholder.svg?height=300&width=500',
      tech: [
        'Django',
        'RAG',
        'Vector DB',
        'Fine-tuning',
        'PostgreSQL',
        'Redis',
      ],
      category: 'AI/ML',
      status: 'Completed',
      gradient: 'from-orange-500 to-red-500',
      achievements: [
        '50+ 보드게임 규칙 데이터베이스 구축',
        '게임별 전문 지식 Fine-tuning으로 정확도 향상',
        '사용자 만족도 4.8/5점 달성',
        '규칙 검색 속도 0.8초 이내 최적화',
      ],
      github: 'https://github.com/your-username/boardgame-rules-bot',
      demo: null,
      timeline: '2024.05 - 2024.07 (3개월)',
      team: '개인 프로젝트',
    },
    {
      id: 4,
      title: '실시간 협업 코드 에디터',
      subtitle: 'WebSocket 기반 동시 편집 시스템',
      description:
        '여러 개발자가 실시간으로 코드를 함께 편집할 수 있는 협업 플랫폼입니다.',
      image: '/placeholder.svg?height=300&width=500',
      tech: [
        'Node.js',
        'Socket.io',
        'React',
        'Monaco Editor',
        'Redis',
        'Docker',
      ],
      category: 'Full-Stack',
      status: 'Completed',
      gradient: 'from-purple-500 to-pink-600',
      achievements: [
        '실시간 동시 편집 충돌 해결 알고리즘 구현',
        'WebSocket 연결 최적화로 지연시간 50ms 이하 달성',
        '500+ 동시 사용자 지원하는 확장 가능한 아키텍처',
        'Docker 컨테이너화로 쉬운 배포 환경 구축',
      ],
      github: 'https://github.com/your-username/realtime-code-editor',
      demo: 'https://code-collab.vercel.app',
      timeline: '2024.02 - 2024.04 (3개월)',
      team: '개인 프로젝트',
    },
    {
      id: 5,
      title: '마이크로서비스 API 게이트웨이',
      subtitle: '고성능 분산 시스템 아키텍처',
      description:
        '여러 마이크로서비스를 통합 관리하는 고성능 API 게이트웨이 시스템입니다.',
      image: '/placeholder.svg?height=300&width=500',
      tech: ['Go', 'Docker', 'Kubernetes', 'Redis', 'Prometheus', 'Grafana'],
      category: 'Backend',
      status: 'Completed',
      gradient: 'from-indigo-500 to-blue-600',
      achievements: [
        '초당 10,000+ 요청 처리 가능한 고성능 시스템',
        '99.9% 가용성 달성하는 안정적인 아키텍처',
        'Kubernetes 기반 자동 스케일링 구현',
        '실시간 모니터링 및 알림 시스템 구축',
      ],
      github: 'https://github.com/your-username/api-gateway',
      demo: null,
      timeline: '2023.11 - 2024.01 (3개월)',
      team: '개인 프로젝트',
    },
  ]


  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 via-blue-50 to-indigo-100">
      <Navigation />

      <div className="pt-16">


        {/* Projects Grid */}
        <div className="px-4 py-16 bg-gradient-to-br from-slate-50 to-indigo-50">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-8">
              {projects.map(project => (
                <Link href={`/projects/${project.id}`} key={project.id} className="block">
                  <Card
                    className="bg-white/80 backdrop-blur-sm border border-gray-200 shadow-lg hover:shadow-2xl transition-all duration-300 group overflow-hidden transform hover:-translate-y-2 cursor-pointer"
                  >
                  {/* Project Image */}
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={project.image || '/placeholder.svg'}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>

                  <CardContent className="p-6">
                    {/* Project Header */}
                    <div className="mb-4">
                      <h3 className="text-2xl font-bold mb-2 text-gray-900 group-hover:text-blue-600 transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-blue-600 font-medium mb-3">
                        {project.subtitle}
                      </p>
                    </div>

                    {/* Tech Stack */}
                    <div className="mb-4">
                      <div className="flex flex-wrap gap-2">
                        {project.id === 2 ? (
                          <>
                            <Badge className="text-xs bg-gray-100 border-gray-200 text-gray-700 hover:bg-gray-200 transition-colors">
                              PySpark
                            </Badge>
                            <Badge className="text-xs bg-gray-100 border-gray-200 text-gray-700 hover:bg-gray-200 transition-colors">
                              LangChain
                            </Badge>
                            <Badge className="text-xs bg-gray-100 border-gray-200 text-gray-700 hover:bg-gray-200 transition-colors">
                              Qdrant Vector DB
                            </Badge>
                          </>
                        ) : (
                          project.tech.slice(0, 3).map(tech => (
                            <Badge
                              key={tech}
                              className="text-xs bg-gray-100 border-gray-200 text-gray-700 hover:bg-gray-200 transition-colors"
                            >
                              {tech}
                            </Badge>
                          ))
                        )}
                      </div>
                    </div>

                    {/* 핵심 기술 & 성과 섹션 */}
                    <div className="mb-4">
                      <h4 className="font-semibold text-sm mb-3 flex items-center gap-2 text-blue-600">
                        <Sparkles className="w-4 h-4" />
                        핵심 기술 & 성과
                      </h4>
                      <div className="grid grid-cols-1 gap-2">
                        {project.id === 2 ? (
                          <>
                            <div className="flex items-center gap-2 text-sm text-gray-700 bg-gradient-to-r from-blue-50 to-purple-50/30 p-2 rounded-lg">
                              <div className="w-2 h-2 bg-gradient-to-r from-green-500 to-green-600 rounded-full"></div>
                              <strong className="text-green-400">PySpark</strong>로 20만→9만개 데이터 정제
                            </div>
                            <div className="flex items-center gap-2 text-sm text-gray-700 bg-gradient-to-r from-blue-50 to-purple-50/30 p-2 rounded-lg">
                              <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full"></div>
                              <strong className="text-blue-400">Qdrant 벡터DB</strong> 실시간 검색 최적화
                            </div>
                            <div className="flex items-center gap-2 text-sm text-gray-700 bg-gradient-to-r from-blue-50 to-purple-50/30 p-2 rounded-lg">
                              <div className="w-2 h-2 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full"></div>
                              <strong className="text-purple-400">LangChain</strong> 대화형 추천 시스템 구축
                            </div>
                          </>
                        ) : (
                          project.achievements
                            .slice(0, 3)
                            .map((achievement, i) => (
                              <div
                                key={i}
                                className="flex items-center gap-2 text-sm text-gray-700 bg-gradient-to-r from-blue-50 to-purple-50/30 p-2 rounded-lg"
                              >
                                <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"></div>
                                {achievement}
                              </div>
                            ))
                        )}
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

                  </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}
