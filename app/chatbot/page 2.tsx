'use client'

import { useState, useRef, useEffect } from 'react'
import { Navigation } from '@/components/navigation'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import {
  Send,
  Mic,
  Download,
  RefreshCw,
  ThumbsUp,
  ThumbsDown,
  Copy,
  Bot,
  User,
  Sparkles,
  Clock,
  Zap,
  Building2,
  Globe,
  ArrowRight,
} from 'lucide-react'

interface Message {
  id: string
  type: 'user' | 'ai'
  content: string
  timestamp: Date
  sources?: string[]
}

interface CompanyConfig {
  name: string
  color: string
  focus: string[]
  description: string
}

const companyConfigs: Record<string, CompanyConfig> = {
  samsung: {
    name: '삼성전자',
    color: 'blue-600',
    focus: ['AI 하드웨어', '임베디드 AI', '모바일 AI'],
    description: '하드웨어와 AI의 융합 기술에 특화된 경험',
  },
  naver: {
    name: '네이버',
    color: 'green-600',
    focus: ['검색 AI', '추천 시스템', '자연어 처리'],
    description: '검색과 추천 알고리즘 전문 경험',
  },
  kakao: {
    name: '카카오',
    color: 'yellow-500',
    focus: ['대화 AI', '챗봇', '개인화 서비스'],
    description: '대화형 AI와 개인화 서비스 경험',
  },
  general: {
    name: '일반',
    color: 'slate-700',
    focus: ['전체 기술 스택', '다양한 프로젝트', '종합적 역량'],
    description: '전반적인 AI 개발 경험과 역량',
  },
}

export default function ChatbotPage() {
  const [showCompanySelection, setShowCompanySelection] = useState(true)
  const [selectedCompany, setSelectedCompany] = useState<string>('')
  const [currentCompany, setCurrentCompany] = useState<CompanyConfig | null>(
    null
  )
  const [messages, setMessages] = useState<Message[]>([])
  const [inputValue, setInputValue] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  const quickQuestions = [
    '어떤 AI 프로젝트를 했나요?',
    '기술 스택이 궁금해요',
    '왜 AI 엔지니어가 되고 싶나요?',
    '협업 경험을 알려주세요',
    '가장 도전적이었던 프로젝트는?',
  ]

  const handleCompanySelect = (companyKey: string) => {
    const company = companyConfigs[companyKey]
    setCurrentCompany(company)
    setSelectedCompany(companyKey)
    setShowCompanySelection(false)
  }

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const handleSendMessage = async (content: string) => {
    if (!content.trim()) return

    const userMessage: Message = {
      id: Date.now().toString(),
      type: 'user',
      content: content.trim(),
      timestamp: new Date(),
    }

    setMessages(prev => [...prev, userMessage])
    setInputValue('')
    setIsTyping(true)

    // AI 응답 시뮬레이션 (회사별 맞춤)
    setTimeout(() => {
      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        type: 'ai',
        content: getCompanySpecificResponse(content),
        timestamp: new Date(),
        sources: ['GitHub Profile', '프로젝트 문서', '이력서'],
      }
      setMessages(prev => [...prev, aiMessage])
      setIsTyping(false)
    }, 1500)
  }

  const getCompanySpecificResponse = (question: string): string => {
    const lowerQuestion = question.toLowerCase()
    const company = currentCompany!

    if (selectedCompany === 'general') {
      // 일반 모드 응답
      if (lowerQuestion.includes('프로젝트')) {
        return '안녕하세요! 제가 진행한 주요 AI 프로젝트들을 소개해드릴게요.\n\n🤖 **AI 챗봇 포트폴리오**\n- LangGraph 멀티 에이전트 시스템으로 구축\n- 실시간 GitHub 데이터 연동\n- RAG 기반 벡터 검색으로 95% 정확도 달성\n\n💕 **데이트 코스 추천 AI**\n- 서울시 25개 구 100만+ 장소 데이터 활용\n- FastAPI + React로 실시간 길찾기 연동\n- GitHub에서 24개 스타 획득\n\n🎲 **보드게임 룰 챗봇**\n- 50+ 게임 규칙을 쉽게 설명하는 AI 어시스턴트\n- Django + RAG + Vector DB로 구축\n- 사용자 만족도 4.8/5점 달성'
      }
    } else {
      // 회사별 맞춤 응답
      if (lowerQuestion.includes('프로젝트')) {
        return `안녕하세요! ${company.name}에 특화된 제 AI 프로젝트들을 소개해드릴게요.\n\n🎯 **${company.name} 관련 강점:**\n${company.focus.map(f => `• ${f}`).join('\n')}\n\n🤖 **주요 프로젝트:**\n• AI 챗봇 포트폴리오 - ${company.name}의 대화형 AI 기술에 적용 가능\n• 데이트 코스 추천 AI - 개인화 추천 알고리즘 경험\n• 보드게임 룰 챗봇 - 복잡한 규칙을 쉽게 설명하는 AI\n\n${company.name}의 ${company.focus[0]} 분야에서 제 경험이 어떻게 기여할 수 있는지 더 자세히 설명드릴까요?`
      }
    }

    // 기본 응답
    if (lowerQuestion.includes('기술') || lowerQuestion.includes('스택')) {
      const focusText =
        selectedCompany === 'general'
          ? '전반적인 기술 스택을'
          : `${company.name}에서 중요하게 여기는 기술들을 중심으로`

      return `${focusText} 소개해드릴게요! 🚀\n\n🧠 **AI/ML 전문 분야**\n- Multi-Agent Systems (90%)\n- LangGraph Orchestration (85%)\n- RAG + Knowledge Graphs (80%)\n\n💻 **Frontend**\n- Next.js (90%) - 현재 프로젝트의 핵심\n- React (95%) - 3년+ 경험\n- TypeScript (85%)\n\n🔧 **Backend**\n- Python (90%) - AI/ML 프로젝트 주력 언어\n- FastAPI (80%)\n- PostgreSQL (75%)`
    }

    const greeting =
      selectedCompany === 'general'
        ? '황준호의 AI 어시스턴트입니다'
        : `${company.name} 면접관님, 황준호의 AI 어시스턴트입니다`

    return `안녕하세요! ${greeting}. 🤖\n\n저에 대한 모든 것을 질문해보세요!\n\n• ${company.focus.join('\n• ')}\n\n궁금한 것이 있으시면 언제든 물어보세요!`
  }

  const handleQuickQuestion = (question: string) => {
    handleSendMessage(question)
  }

  const copyMessage = (content: string) => {
    navigator.clipboard.writeText(content)
  }

  // 회사 선택 화면 - 토스 스타일로 완전 개편
  if (showCompanySelection) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Navigation />

        <div className="pt-16 min-h-screen flex items-center justify-center px-4">
          <div className="max-w-4xl mx-auto text-center">
            {/* 헤더 섹션 - 토스 스타일 */}
            <div className="mb-16">
              <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-8">
                <Bot className="w-8 h-8 text-white" />
              </div>
              <h1 className="text-4xl font-bold text-gray-900 mb-4">
                AI 어시스턴트에 오신 것을 환영합니다
              </h1>
              <p className="text-xl text-gray-600 mb-12">
                어떤 방식으로 포트폴리오를 둘러보시겠어요?
              </p>
            </div>

            {/* 선택 카드들 - 토스 스타일 */}
            <div className="grid md:grid-cols-2 gap-6 mb-12">
              {/* 일반 모드 */}
              <Card
                className="bg-white border border-gray-200 hover:border-gray-300 hover:shadow-lg transition-all duration-200 cursor-pointer group p-8"
                onClick={() => handleCompanySelect('general')}
              >
                <CardContent className="p-0">
                  <div className="flex items-center justify-center mb-6">
                    <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center group-hover:bg-gray-200 transition-colors">
                      <Globe className="w-6 h-6 text-gray-700" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    일반 모드
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    전체적인 포트폴리오를 자유롭게 둘러보세요.
                    <br />
                    모든 프로젝트와 기술 스택을 확인할 수 있습니다.
                  </p>
                  <div className="flex items-center justify-center text-blue-600 group-hover:text-blue-700">
                    <span className="mr-2 font-medium">바로 시작하기</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </CardContent>
              </Card>

              {/* 회사별 맞춤 모드 */}
              <Card className="bg-white border border-gray-200 hover:border-gray-300 hover:shadow-lg transition-all duration-200 p-8">
                <CardContent className="p-0">
                  <div className="flex items-center justify-center mb-6">
                    <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center">
                      <Building2 className="w-6 h-6 text-blue-600" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    회사별 맞춤 모드
                  </h3>
                  <p className="text-gray-600 mb-8 leading-relaxed">
                    특정 회사에 맞춤화된 정보를 제공합니다.
                    <br />
                    해당 회사의 관심 분야에 특화된 경험을 강조합니다.
                  </p>

                  <div className="space-y-3">
                    {Object.entries(companyConfigs)
                      .filter(([key]) => key !== 'general')
                      .map(([key, company]) => (
                        <Button
                          key={key}
                          variant="outline"
                          className="w-full justify-start border-gray-200 text-gray-700 hover:bg-gray-50 hover:border-gray-300 transition-all duration-200 h-auto py-3 bg-transparent"
                          onClick={() => handleCompanySelect(key)}
                        >
                          <div
                            className={`w-3 h-3 bg-${company.color} rounded-full mr-3`}
                          ></div>
                          <div className="text-left">
                            <div className="font-semibold text-gray-900">
                              {company.name}
                            </div>
                            <div className="text-sm text-gray-500">
                              {company.description}
                            </div>
                          </div>
                        </Button>
                      ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* 팁 섹션 - 토스 스타일 */}
            <div className="bg-blue-50 rounded-2xl border border-blue-100 p-6">
              <p className="text-sm text-blue-800">
                💡 <strong>팁:</strong> 언제든지 모드를 변경할 수 있습니다.
                회사별 맞춤 모드에서는 해당 회사의 관심사에 맞는 프로젝트와
                기술을 중심으로 답변합니다.
              </p>
            </div>
          </div>
        </div>
      </div>
    )
  }

  // 메인 채팅 화면 - 고정 헤더와 채팅 영역 분리
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navigation />

      {/* Fixed Header Section */}
      <div className="mt-16 px-4 py-6 bg-white border-b border-gray-200 flex-shrink-0">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div
                className={`w-10 h-10 bg-${currentCompany?.color} rounded-xl flex items-center justify-center`}
              >
                <Bot className="w-5 h-5 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">
                  {selectedCompany === 'general'
                    ? '일반'
                    : currentCompany?.name}{' '}
                  포트폴리오 AI 어시스턴트
                </h1>
                <p className="text-gray-600 text-sm">
                  {selectedCompany === 'general'
                    ? '전체 포트폴리오에 대해 자유롭게 질문해보세요.'
                    : `${currentCompany?.name}에 특화된 제 경험과 역량에 대해 질문해보세요.`}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4 text-sm">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-green-600 font-medium">
                  AI 에이전트 온라인
                </span>
              </div>
              <Badge className={`bg-${currentCompany?.color} text-white`}>
                <Sparkles className="w-3 h-3 mr-1" />
                {selectedCompany === 'general'
                  ? '일반 모드'
                  : `${currentCompany?.name} 전용`}
              </Badge>
              <Button
                variant="ghost"
                size="sm"
                className="text-gray-500 hover:text-gray-700 hover:bg-gray-100"
                onClick={() => {
                  setShowCompanySelection(true)
                  setMessages([])
                }}
              >
                모드 변경
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Chat Layout */}
      <div className="flex-1 flex">
        {/* Chat Area */}
        <div className="flex-1 flex flex-col">
          {/* Messages Container */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 max-w-5xl mx-auto w-full">
            {messages.length === 0 ? (
              // Empty State - 토스 스타일
              <div className="flex flex-col items-center justify-center h-full text-center">
                <div
                  className={`w-16 h-16 bg-${currentCompany?.color} bg-opacity-10 rounded-2xl flex items-center justify-center mb-8`}
                >
                  <Bot className={`w-8 h-8 text-${currentCompany?.color}`} />
                </div>

                <h2 className="text-2xl font-bold mb-6 text-gray-900">
                  안녕하세요!{' '}
                  {selectedCompany === 'general'
                    ? '포트폴리오 방문자님'
                    : `${currentCompany?.name} 면접관님`}
                </h2>

                <div className="grid md:grid-cols-2 gap-4 mb-8 max-w-2xl">
                  {currentCompany?.focus.map((focus, index) => (
                    <div
                      key={index}
                      className="bg-white rounded-xl border border-gray-200 p-4"
                    >
                      <div className="flex items-center gap-3 mb-2">
                        <Zap
                          className={`w-5 h-5 text-${currentCompany?.color}`}
                        />
                        <span
                          className={`font-semibold text-${currentCompany?.color}`}
                        >
                          {focus}
                        </span>
                      </div>
                      <p className="text-gray-600 text-sm">
                        관련 프로젝트 경험과 기술적 깊이
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              // Messages - 토스 스타일
              messages.map(message => (
                <div
                  key={message.id}
                  className={`flex gap-3 ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  {message.type === 'ai' && (
                    <div
                      className={`w-8 h-8 bg-${currentCompany?.color} rounded-full flex items-center justify-center flex-shrink-0`}
                    >
                      <Bot className="w-4 h-4 text-white" />
                    </div>
                  )}

                  <div
                    className={`max-w-2xl ${message.type === 'user' ? 'order-1' : ''}`}
                  >
                    <Card
                      className={`${
                        message.type === 'user'
                          ? `bg-${currentCompany?.color} border-0 text-white`
                          : 'bg-white border border-gray-200'
                      }`}
                    >
                      <CardContent className="p-4">
                        <div className="flex items-start justify-between gap-2 mb-2">
                          <span
                            className={`font-semibold text-sm ${message.type === 'user' ? 'text-white' : 'text-gray-900'}`}
                          >
                            {message.type === 'user' ? '나' : `AI 어시스턴트`}
                          </span>
                          <div className="flex items-center gap-2">
                            <span
                              className={`text-xs flex items-center gap-1 ${message.type === 'user' ? 'text-white/70' : 'text-gray-500'}`}
                            >
                              <Clock className="w-3 h-3" />
                              {message.timestamp.toLocaleTimeString()}
                            </span>
                            <Button
                              size="sm"
                              variant="ghost"
                              className="h-6 w-6 p-0 hover:bg-gray-100"
                              onClick={() => copyMessage(message.content)}
                            >
                              <Copy
                                className={`w-3 h-3 ${message.type === 'user' ? 'text-white/70' : 'text-gray-500'}`}
                              />
                            </Button>
                          </div>
                        </div>

                        <div
                          className={`whitespace-pre-wrap text-sm leading-relaxed ${message.type === 'user' ? 'text-white' : 'text-gray-900'}`}
                        >
                          {message.content}
                        </div>

                        {message.sources && (
                          <div
                            className={`mt-3 pt-3 border-t ${message.type === 'user' ? 'border-white/20' : 'border-gray-200'}`}
                          >
                            <div
                              className={`flex items-center gap-2 text-xs ${message.type === 'user' ? 'text-white/70' : 'text-gray-500'}`}
                            >
                              <span>출처:</span>
                              {message.sources.map((source, index) => (
                                <Badge
                                  key={index}
                                  className="text-xs bg-gray-100 text-gray-700 border-0"
                                >
                                  {source}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        )}

                        {message.type === 'ai' && (
                          <div className="flex items-center gap-2 mt-3 pt-3 border-t border-gray-200">
                            <Button
                              size="sm"
                              variant="ghost"
                              className="h-6 px-2 text-xs hover:bg-gray-100 text-gray-500"
                            >
                              <ThumbsUp className="w-3 h-3 mr-1" />
                              도움됨
                            </Button>
                            <Button
                              size="sm"
                              variant="ghost"
                              className="h-6 px-2 text-xs hover:bg-gray-100 text-gray-500"
                            >
                              <ThumbsDown className="w-3 h-3 mr-1" />
                              개선 필요
                            </Button>
                          </div>
                        )}
                      </CardContent>
                    </Card>
                  </div>

                  {message.type === 'user' && (
                    <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center flex-shrink-0">
                      <User className="w-4 h-4 text-gray-600" />
                    </div>
                  )}
                </div>
              ))
            )}

            {/* Typing Indicator */}
            {isTyping && (
              <div className="flex gap-3 justify-start">
                <div
                  className={`w-8 h-8 bg-${currentCompany?.color} rounded-full flex items-center justify-center flex-shrink-0`}
                >
                  <Bot className="w-4 h-4 text-white" />
                </div>
                <Card className="bg-white border border-gray-200">
                  <CardContent className="p-4">
                    <div className="flex items-center gap-2">
                      <div className="flex gap-1">
                        <div
                          className={`w-2 h-2 bg-${currentCompany?.color} rounded-full animate-bounce`}
                        ></div>
                        <div
                          className={`w-2 h-2 bg-${currentCompany?.color} rounded-full animate-bounce delay-100`}
                        ></div>
                        <div
                          className={`w-2 h-2 bg-${currentCompany?.color} rounded-full animate-bounce delay-200`}
                        ></div>
                      </div>
                      <span className="text-sm text-gray-600">
                        AI가 답변을 생성하고 있습니다...
                      </span>
                    </div>
                  </CardContent>
                </Card>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Quick Questions */}
          {messages.length === 0 && (
            <div className="px-4 pb-4">
              <div className="flex flex-wrap gap-2 justify-center max-w-5xl mx-auto">
                {quickQuestions.map((question, index) => (
                  <Button
                    key={index}
                    variant="outline"
                    size="sm"
                    className="border-gray-200 text-gray-700 hover:bg-gray-50 hover:border-gray-300 bg-transparent"
                    onClick={() => handleQuickQuestion(question)}
                  >
                    {question}
                  </Button>
                ))}
              </div>
            </div>
          )}

          {/* Fixed Input Area - 전체 너비 */}
          <div className="p-4 bg-white border-t border-gray-200 flex-shrink-0">
            <div className="flex gap-3 w-full">
              <div className="flex-1 relative max-w-5xl mx-auto">
                <input
                  ref={inputRef}
                  type="text"
                  value={inputValue}
                  onChange={e => setInputValue(e.target.value)}
                  onKeyPress={e =>
                    e.key === 'Enter' && handleSendMessage(inputValue)
                  }
                  placeholder={`${selectedCompany === 'general' ? '포트폴리오에' : currentCompany?.name + '에'} 대해 궁금한 것을 물어보세요...`}
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-xs text-gray-400">
                  {inputValue.length}/500
                </div>
              </div>

              <Button
                variant="ghost"
                size="sm"
                className="px-3 hover:bg-gray-100 text-gray-500"
              >
                <Mic className="w-4 h-4" />
              </Button>

              <Button
                onClick={() => handleSendMessage(inputValue)}
                disabled={!inputValue.trim() || isTyping}
                className={`bg-${currentCompany?.color} hover:opacity-90 px-6 text-white`}
              >
                <Send className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* Fixed Right Sidebar */}
        <div className="w-80 bg-white border-l border-gray-200 flex-shrink-0">
          <div className="p-4 space-y-4 h-full">
            <div className="space-y-3">
              <Button
                variant="outline"
                className="w-full justify-start border-gray-200 text-gray-700 hover:bg-gray-50 bg-transparent"
              >
                <Download className="w-4 h-4 mr-2" />
                대화 내보내기
              </Button>

              <Button
                variant="outline"
                className="w-full justify-start border-gray-200 text-gray-700 hover:bg-gray-50 bg-transparent"
                onClick={() => setMessages([])}
              >
                <RefreshCw className="w-4 h-4 mr-2" />새 대화 시작
              </Button>
            </div>

            <div className="space-y-4">
              <div>
                <h3 className="font-semibold mb-3 text-gray-900">
                  {selectedCompany === 'general'
                    ? '전체 포트폴리오'
                    : `${currentCompany?.name} 맞춤 정보`}
                </h3>
                <div className="space-y-2">
                  {currentCompany?.focus.map((focus, index) => (
                    <Badge
                      key={index}
                      className={`w-full justify-center bg-${currentCompany.color} text-white border-0`}
                    >
                      {focus}
                    </Badge>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="font-semibold mb-3 text-gray-900">
                  시스템 정보
                </h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">응답 시간</span>
                    <span className="text-green-600 font-medium">~1.5초</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">정확도</span>
                    <span className="text-blue-600 font-medium">95%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">모드</span>
                    <span
                      className={`text-${currentCompany?.color} font-medium`}
                    >
                      {selectedCompany === 'general'
                        ? '일반'
                        : `${currentCompany?.name} 전용`}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
