"use client"

import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Home, ArrowLeft, Bot, Search, AlertTriangle } from "lucide-react"
import Link from "next/link"

export default function NotFound() {
  const suggestions = [
    { name: "홈", href: "/", icon: Home, description: "메인 페이지로 돌아가기" },
    { name: "AI 챗봇", href: "/chatbot", icon: Bot, description: "AI 어시스턴트와 대화하기" },
    { name: "프로젝트", href: "/projects", icon: Search, description: "프로젝트 둘러보기" },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50/30">
      <Navigation />

      <div className="pt-16 px-4 py-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* 404 Animation */}
          <div className="mb-12">
            <div className="relative">
              <div className="text-9xl font-bold text-gray-200 select-none">404</div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-24 h-24 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center animate-bounce">
                  <AlertTriangle className="w-12 h-12 text-white" />
                </div>
              </div>
            </div>
          </div>

          {/* Error Message */}
          <div className="mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">페이지를 찾을 수 없습니다</h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              요청하신 페이지가 존재하지 않거나 이동되었을 수 있습니다.
              <br />
              아래 링크를 통해 원하는 페이지로 이동해보세요.
            </p>
          </div>

          {/* Quick Actions */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {suggestions.map((item, index) => (
              <Link key={index} href={item.href}>
                <Card className="bg-white/80 backdrop-blur-sm border border-gray-200 shadow-lg hover:shadow-2xl transition-all duration-300 group transform hover:-translate-y-2 h-full">
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-100 to-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:from-blue-200 group-hover:to-purple-200 transition-all duration-300">
                      <item.icon className="w-8 h-8 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                      {item.name}
                    </h3>
                    <p className="text-gray-600 text-sm">{item.description}</p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>

          {/* Back Button */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-4 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105"
              onClick={() => window.history.back()}
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              이전 페이지로
            </Button>
            <Link href="/">
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-gray-300 text-gray-700 hover:bg-gray-50 hover:border-gray-400 bg-white/80 backdrop-blur-sm px-8 py-4 text-lg rounded-xl transition-all duration-200 transform hover:scale-105"
              >
                <Home className="w-5 h-5 mr-2" />
                홈으로 가기
              </Button>
            </Link>
          </div>

          {/* Fun Message */}
          <div className="mt-16 p-6 bg-gradient-to-r from-blue-50 to-purple-50/50 rounded-2xl border border-blue-100">
            <p className="text-gray-600 text-sm">
              💡 <strong>팁:</strong> AI 챗봇에게 "어떤 페이지들이 있나요?"라고 물어보시면 전체 사이트 구조를
              안내해드려요!
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
