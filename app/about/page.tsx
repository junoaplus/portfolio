"use client"

import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Brain, Target, ArrowRight, Bot, Sparkles, Heart, Coffee, Code } from "lucide-react"
import Link from "next/link"

export default function AboutPage() {
  const timeline = [
    {
      year: "2022",
      title: "개발의 시작",
      description: "프로그래밍 첫 발걸음, Python과 HTML/CSS 학습",
      icon: Code,
      color: "from-blue-400 to-blue-600",
    },
    {
      year: "2023",
      title: "웹 개발 입문",
      description: "React와 JavaScript 생태계 탐구, 첫 웹 프로젝트 완성",
      icon: Bot,
      color: "from-green-400 to-green-600",
    },
    {
      year: "2024",
      title: "AI 분야 진출",
      description: "머신러닝과 LangChain 학습, AI 프로젝트 시작",
      icon: Brain,
      color: "from-purple-400 to-purple-600",
    },
    {
      year: "2025",
      title: "AI 엔지니어로 성장",
      description: "LangGraph와 RAG 시스템 전문화, 포트폴리오 구축",
      icon: Sparkles,
      color: "from-orange-400 to-orange-600",
    },
  ]

  const interests = [
    {
      category: "기술적 관심사",
      items: ["멀티 에이전트 시스템 설계", "사용자 친화적 AI 인터페이스", "성능 최적화와 확장성"],
    },
    { category: "개인적 관심사", items: ["새로운 기술 트렌드 탐구", "오픈소스 프로젝트 기여", "개발 커뮤니티 활동"] },
    { category: "소프트 스킬", items: ["팀 커뮤니케이션", "문제 해결 능력", "빠른 적응력"] },
  ]

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

          <div className="max-w-4xl mx-auto text-center relative">
            <div className="mb-8">
              <Badge className="bg-gradient-to-r from-blue-500 to-purple-600 text-white border-0 mb-4 px-4 py-2">
                <Sparkles className="w-4 h-4 mr-2" />
                About Me
              </Badge>
            </div>

            <h1 className="text-4xl lg:text-5xl font-bold mb-6 text-gray-900">
              AI로 세상을 바꾸고 싶은
              <br />
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-teal-600 bg-clip-text text-transparent">
                개발자
              </span>
            </h1>

            <p className="text-xl text-gray-600 mb-8 leading-relaxed max-w-3xl mx-auto">
              안녕하세요! 프론트엔드부터 AI까지, 기술의 경계를 넘나드는 개발자 황준호입니다.
              <br />
              복잡한 문제를 AI로 해결하고, 사용자가 쉽게 사용할 수 있는 인터페이스를 만드는 것이 저의 목표입니다.
            </p>

            <div className="flex flex-wrap justify-center gap-3 mb-8">
              <Badge className="bg-blue-50 text-blue-700 border border-blue-200">문제 해결자</Badge>
              <Badge className="bg-green-50 text-green-700 border border-green-200">빠른 학습자</Badge>
              <Badge className="bg-purple-50 text-purple-700 border border-purple-200">협업 전문가</Badge>
            </div>
          </div>
        </div>

        {/* My Journey Timeline */}
        <div className="px-4 py-20 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">나의 개발 여정</h2>
              <p className="text-xl text-gray-600">어떻게 AI 엔지니어가 되었는지 소개합니다</p>
            </div>

            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-200 to-purple-200 rounded-full"></div>

              <div className="space-y-12">
                {timeline.map((item, index) => (
                  <div key={index} className={`flex items-center ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}>
                    <div className={`w-1/2 ${index % 2 === 0 ? "pr-8 text-right" : "pl-8 text-left"}`}>
                      <Card className="bg-white border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                        <CardContent className="p-6">
                          <div
                            className={`flex items-center gap-3 mb-4 ${index % 2 === 0 ? "justify-end" : "justify-start"}`}
                          >
                            <div
                              className={`w-10 h-10 bg-gradient-to-r ${item.color} rounded-xl flex items-center justify-center`}
                            >
                              <item.icon className="w-5 h-5 text-white" />
                            </div>
                            <div>
                              <div className="text-2xl font-bold text-gray-900">{item.year}</div>
                            </div>
                          </div>
                          <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                          <p className="text-gray-600 leading-relaxed">{item.description}</p>
                        </CardContent>
                      </Card>
                    </div>

                    {/* Timeline Dot */}
                    <div className="relative z-10">
                      <div
                        className={`w-6 h-6 bg-gradient-to-r ${item.color} rounded-full border-4 border-white shadow-lg`}
                      ></div>
                    </div>

                    <div className="w-1/2"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Why AI Engineering */}
        <div className="px-4 py-20 bg-gradient-to-br from-gray-50 to-blue-50/20">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">왜 AI 엔지니어가 되고 싶었나요?</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="bg-white/80 backdrop-blur-sm border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-gray-900">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-purple-100 rounded-xl flex items-center justify-center">
                      <Heart className="w-6 h-6 text-blue-600" />
                    </div>
                    열정과 동기
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 leading-relaxed">
                    기술로 사람들의 일상을 더 편리하게 만들고 싶다는 꿈에서 시작되었습니다. 복잡한 문제를 AI로 해결하는
                    과정에서 느끼는 성취감과, 사용자와 AI가 자연스럽게 소통하는 인터페이스를 구축할 때의 즐거움이 저를
                    이 길로 이끌었습니다.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white/80 backdrop-blur-sm border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-gray-900">
                    <div className="w-12 h-12 bg-gradient-to-br from-green-100 to-teal-100 rounded-xl flex items-center justify-center">
                      <Target className="w-6 h-6 text-green-600" />
                    </div>
                    미래 비전
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 leading-relaxed">
                    5년 후에는 AI 제품의 기술 리더가 되어 더 많은 혁신을 이끌고 싶습니다. 멀티 에이전트 시스템과 RAG
                    기술을 활용한 차세대 AI 서비스를 만들어, 사람과 AI가 협력하는 새로운 패러다임을 제시하고 싶습니다.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {/* Skills & Interests */}
        <div className="px-4 py-20 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">관심사 & 역량</h2>
              <p className="text-xl text-gray-600">기술적 관심사부터 개인적 취향까지</p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8 mb-16">
              {interests.map((interest, index) => (
                <Card
                  key={index}
                  className="bg-white border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                >
                  <CardHeader>
                    <CardTitle className="text-lg text-gray-900">{interest.category}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {interest.items.map((item, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-gray-600 text-sm leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Fun Facts */}
            <Card className="bg-gradient-to-r from-blue-50 to-purple-50/50 border border-blue-100">
              <CardHeader>
                <CardTitle className="text-center text-gray-900 flex items-center justify-center gap-3">
                  <Coffee className="w-6 h-6 text-blue-600" />
                  코드 너머의 나
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
                  <div>
                    <div className="text-2xl mb-2">☕</div>
                    <div className="font-semibold text-gray-900">커피 vs 차</div>
                    <div className="text-sm text-gray-600">커피 파 (하루 3잔)</div>
                  </div>
                  <div>
                    <div className="text-2xl mb-2">🎵</div>
                    <div className="font-semibold text-gray-900">코딩 음악</div>
                    <div className="text-sm text-gray-600">Lo-fi Hip Hop</div>
                  </div>
                  <div>
                    <div className="text-2xl mb-2">🌙</div>
                    <div className="font-semibold text-gray-900">작업 시간</div>
                    <div className="text-sm text-gray-600">밤 올빼미형</div>
                  </div>
                  <div>
                    <div className="text-2xl mb-2">💭</div>
                    <div className="font-semibold text-gray-900">좌우명</div>
                    <div className="text-sm text-gray-600">"코드는 시가 되어야 한다"</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Call to Action */}
        <div className="px-4 py-16 bg-gradient-to-br from-gray-50 to-blue-50/20">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-teal-600 bg-clip-text text-transparent">
                더 궁금한 것이 있으신가요?
              </span>
            </h2>
            <p className="text-gray-600 mb-8 text-lg leading-relaxed">
              저에 대해 더 자세히 알고 싶으시다면,
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
                  AI 챗봇과 대화하기
                </Button>
              </Link>
              <Link href="/contact">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-gray-300 text-gray-700 hover:bg-gray-50 hover:border-gray-400 bg-white/80 backdrop-blur-sm px-8 py-4 text-lg rounded-xl transition-all duration-200 transform hover:scale-105"
                >
                  연락처 보기
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
