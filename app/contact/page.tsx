'use client'

import type React from 'react'

import { useState } from 'react'
import { Navigation } from '@/components/navigation'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import {
  Github,
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  Download,
  MessageCircle,
  Briefcase,
  Coffee,
  Calendar,
  CheckCircle,
  Bot,
} from 'lucide-react'
import Link from 'next/link'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    purpose: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // 실제로는 API 호출
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
    }, 2000)
  }

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const contactMethods = [
    {
      icon: Mail,
      title: '이메일',
      value: 'your-email@gmail.com',
      description: '가장 빠른 연락 방법',
      href: 'mailto:your-email@gmail.com',
      color: 'from-blue-500 to-purple-600',
    },
    {
      icon: Github,
      title: 'GitHub',
      value: 'github.com/your-username',
      description: '코드와 프로젝트 확인',
      href: 'https://github.com/your-username',
      color: 'from-gray-500 to-gray-700',
    },
    {
      icon: Phone,
      title: '전화',
      value: '010-1234-5678',
      description: '긴급한 경우에만',
      href: 'tel:+82-10-1234-5678',
      color: 'from-green-500 to-teal-600',
    },
  ]

  const availability = [
    { icon: Clock, label: '응답 시간', value: '24시간 내' },
    { icon: MapPin, label: '위치', value: '서울, 원격 근무 가능' },
    { icon: Calendar, label: '상태', value: '새로운 기회를 찾고 있습니다' },
  ]

  const collaborationTypes = [
    {
      icon: Briefcase,
      title: '풀타임 포지션',
      description: '정규직 AI 엔지니어 포지션',
    },
    {
      icon: Coffee,
      title: '프리랜스 프로젝트',
      description: '단기/중기 프로젝트 협업',
    },
    {
      icon: Github,
      title: '오픈소스 기여',
      description: '오픈소스 프로젝트 참여',
    },
    {
      icon: MessageCircle,
      title: '멘토링 & 교육',
      description: '기술 멘토링 및 교육 활동',
    },
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
            <Badge className="bg-gradient-to-r from-blue-500 to-purple-600 text-white border-0 mb-6 px-4 py-2">
              <Mail className="w-4 h-4 mr-2" />
              Contact Me
            </Badge>

            <h1 className="text-4xl lg:text-5xl font-bold mb-6 text-gray-900">
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-teal-600 bg-clip-text text-transparent">
                연락하기
              </span>
            </h1>

            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              새로운 프로젝트나 협업 기회에 대해 이야기하고 싶으시다면,
              <br />
              언제든지 편하게 연락주세요!
            </p>
          </div>
        </div>

        {/* Contact Methods */}
        <div className="px-4 py-16 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                연락 방법
              </h2>
              <p className="text-gray-600">가장 편한 방법으로 연락주세요</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-16">
              {contactMethods.map((method, index) => (
                <a
                  key={index}
                  href={method.href}
                  target={method.href.startsWith('http') ? '_blank' : undefined}
                  rel={
                    method.href.startsWith('http')
                      ? 'noopener noreferrer'
                      : undefined
                  }
                  className="block"
                >
                  <Card className="bg-white border border-gray-200 shadow-lg hover:shadow-2xl transition-all duration-300 group transform hover:-translate-y-2 h-full">
                    <CardContent className="p-8 text-center">
                      <div
                        className={`w-16 h-16 bg-gradient-to-r ${method.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}
                      >
                        <method.icon className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        {method.title}
                      </h3>
                      <p className="text-gray-600 mb-3 text-sm">
                        {method.description}
                      </p>
                      <p className="text-blue-600 font-medium break-all">
                        {method.value}
                      </p>
                    </CardContent>
                  </Card>
                </a>
              ))}
            </div>

            {/* Availability Info */}
            <div className="grid md:grid-cols-3 gap-6 mb-16">
              {availability.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl"
                >
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                    <item.icon className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">
                      {item.label}
                    </div>
                    <div className="text-sm text-gray-600">{item.value}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="px-4 py-16 bg-gradient-to-br from-gray-50 to-blue-50/20">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                메시지 보내기
              </h2>
              <p className="text-gray-600">
                직접 메시지를 보내주시면 빠르게 답변드리겠습니다
              </p>
            </div>

            {!isSubmitted ? (
              <Card className="bg-white/80 backdrop-blur-sm border border-gray-200 shadow-xl">
                <CardContent className="p-8">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label
                          htmlFor="name"
                          className="block text-sm font-medium text-gray-700 mb-2"
                        >
                          이름 *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                          placeholder="홍길동"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="email"
                          className="block text-sm font-medium text-gray-700 mb-2"
                        >
                          이메일 *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                          placeholder="hong@example.com"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label
                          htmlFor="purpose"
                          className="block text-sm font-medium text-gray-700 mb-2"
                        >
                          문의 목적
                        </label>
                        <select
                          id="purpose"
                          name="purpose"
                          value={formData.purpose}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                        >
                          <option value="">선택해주세요</option>
                          <option value="job">취업 제안</option>
                          <option value="project">프로젝트 협업</option>
                          <option value="tech">기술 문의</option>
                          <option value="other">기타</option>
                        </select>
                      </div>
                      <div>
                        <label
                          htmlFor="subject"
                          className="block text-sm font-medium text-gray-700 mb-2"
                        >
                          제목 *
                        </label>
                        <input
                          type="text"
                          id="subject"
                          name="subject"
                          required
                          value={formData.subject}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                          placeholder="문의 제목을 입력해주세요"
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        메시지 *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={6}
                        value={formData.message}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-none"
                        placeholder="자세한 내용을 입력해주세요..."
                      />
                    </div>

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white py-4 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                          전송 중...
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5 mr-2" />
                          메시지 보내기
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            ) : (
              <Card className="bg-white/80 backdrop-blur-sm border border-green-200 shadow-xl">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    메시지가 전송되었습니다!
                  </h3>
                  <p className="text-gray-600 mb-6">
                    소중한 메시지 감사합니다. 24시간 내에 답변드리겠습니다.
                    <br />
                    급한 경우 이메일로 직접 연락주세요.
                  </p>
                  <Button
                    onClick={() => setIsSubmitted(false)}
                    variant="outline"
                    className="border-gray-300 text-gray-700 hover:bg-gray-50"
                  >
                    새 메시지 작성
                  </Button>
                </CardContent>
              </Card>
            )}
          </div>
        </div>

        {/* Collaboration Types */}
        <div className="px-4 py-16 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                협업 가능한 분야
              </h2>
              <p className="text-gray-600">다양한 형태의 협업을 환영합니다</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {collaborationTypes.map((type, index) => (
                <Card
                  key={index}
                  className="bg-white border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                >
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                      <type.icon className="w-6 h-6 text-blue-600" />
                    </div>
                    <h3 className="font-bold text-gray-900 mb-2">
                      {type.title}
                    </h3>
                    <p className="text-sm text-gray-600">{type.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Alternative Contact */}
        <div className="px-4 py-16 bg-gradient-to-br from-gray-50 to-blue-50/20">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-teal-600 bg-clip-text text-transparent">
                다른 방법으로 소통하기
              </span>
            </h2>
            <p className="text-gray-600 mb-8 text-lg leading-relaxed">
              폼 작성이 번거로우시다면, 다른 방법으로도 연락 가능합니다
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
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-gray-300 text-gray-700 hover:bg-gray-50 hover:border-gray-400 bg-white/80 backdrop-blur-sm px-8 py-4 text-lg rounded-xl transition-all duration-200 transform hover:scale-105"
              >
                <Download className="w-5 h-5 mr-2" />
                이력서 다운로드
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
