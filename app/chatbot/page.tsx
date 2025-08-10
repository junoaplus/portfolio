'use client'

import { useState, useRef, useEffect } from 'react'
import { Navigation } from '@/components/navigation'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import {
  Send,
  Download,
  RefreshCw,
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
  toss: {
    name: '토스',
    color: 'blue-500',
    focus: ['검색 인프라', 'LLM/RAG', '대용량 데이터 처리', '추천 시스템'],
    description: 'ML Engineer - 검색/추천/이상탐지 전문',
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

  const handleCompanySelect = async (companyKey: string) => {
    const company = companyConfigs[companyKey]
    setCurrentCompany(company)
    setSelectedCompany(companyKey)
    setIsTyping(true)
    
    try {
      // 1. 세션 생성
      const sessionResponse = await fetch('http://localhost:8000/api/sessions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          company_context: companyKey,
        }),
      })
      
      const sessionData = await sessionResponse.json()
      
      if (sessionData.success) {
        const sessionId = sessionData.session_id
        
        // 2. 초기 대화 시작
        const initialResponse = await fetch('http://localhost:8000/api/chat/initial', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            session_id: sessionId,
          }),
        })
        
        const initialData = await initialResponse.json()
        
        if (initialData.success) {
          // 상태 업데이트
          setShowCompanySelection(false)
          
          // 초기 메시지 추가
          const aiMessage: Message = {
            id: Date.now().toString(),
            type: 'ai',
            content: initialData.answer,
            timestamp: new Date(),
            sources: initialData.metadata?.key_points || []
          }
          
          setMessages([aiMessage])
          
          // 세션 ID 저장 (localStorage 또는 state로)
          localStorage.setItem('chatbot_session_id', sessionId)
          
        } else {
          console.error('초기 대화 시작 실패:', initialData)
          alert('초기 대화 시작에 실패했습니다.')
        }
      } else {
        console.error('세션 생성 실패:', sessionData)
        alert('세션 생성에 실패했습니다.')
      }
      
    } catch (error) {
      console.error('API 오류:', error)
      alert('연결에 실패했습니다.')
    } finally {
      setIsTyping(false)
    }
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

    try {
      // 세션 ID 가져오기
      const sessionId = localStorage.getItem('chatbot_session_id')
      if (!sessionId) {
        throw new Error('세션 ID가 없습니다. 다시 시작해주세요.')
      }
      
      // 챗봇 API 호출
      const response = await fetch('http://localhost:8000/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          session_id: sessionId,
          question: content.trim(),
        }),
      })

      const data = await response.json()

      if (data.success) {
        const aiMessage: Message = {
          id: (Date.now() + 1).toString(),
          type: 'ai',
          content: data.answer,
          timestamp: new Date(),
          sources: data.metadata?.key_points || [],
        }
        setMessages(prev => [...prev, aiMessage])
      } else {
        // 에러 처리
        const errorMessage: Message = {
          id: (Date.now() + 1).toString(),
          type: 'ai',
          content: data.message || '죄송합니다. 응답을 생성하는 중 오류가 발생했습니다.',
          timestamp: new Date(),
        }
        setMessages(prev => [...prev, errorMessage])
      }
    } catch (error) {
      console.error('API 호출 실패:', error)
      
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        type: 'ai',
        content: error instanceof Error ? error.message : '연결 에러가 발생했습니다.',
        timestamp: new Date(),
      }
      setMessages(prev => [...prev, errorMessage])
    } finally {
      setIsTyping(false)
    }
  }

  const handleQuickQuestion = (question: string) => {
    handleSendMessage(question)
  }

  const copyMessage = (content: string) => {
    navigator.clipboard.writeText(content)
  }

  // 회사 선택 화면 - 메인 페이지와 동일한 히어로 스타일
  if (showCompanySelection) {
    return (
      <div className="min-h-screen relative overflow-hidden" style={{ background: 'linear-gradient(to bottom right, #000000, #111827, #000000)' }}>
        {/* Hero Tech Grid Pattern - 메인과 동일 */}
        <div className="absolute inset-0 opacity-40" style={{
          backgroundImage: `linear-gradient(rgba(59,130,246,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(59,130,246,0.03) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}></div>
        
        {/* Hero Tech Glow Effects - 메인과 동일 */}
        <div className="absolute top-24 left-24 w-96 h-96 rounded-full filter blur-3xl animate-pulse" style={{ 
          background: 'linear-gradient(to right, rgba(59, 130, 246, 0.15), rgba(99, 152, 255, 0.15))',
          animationDuration: '4s'
        }}></div>
        
        <div className="absolute bottom-32 right-32 w-80 h-80 rounded-full filter blur-3xl animate-pulse" style={{ 
          background: 'linear-gradient(to right, rgba(59, 130, 246, 0.15), rgba(37, 99, 235, 0.15))',
          animationDuration: '3s',
          animationDelay: '1s'
        }}></div>
        
        <div className="absolute top-1/2 left-32 w-64 h-64 rounded-full filter blur-2xl animate-pulse" style={{ 
          background: 'linear-gradient(to right, rgba(59, 130, 246, 0.1), rgba(96, 165, 250, 0.1))',
          animationDuration: '5s',
          animationDelay: '2s'
        }}></div>

        <Navigation />

        <div className="pt-16 min-h-screen flex items-center justify-center px-4">
          <div className="max-w-4xl mx-auto text-center">
            {/* 헤더 섹션 - 메인 페이지 스타일 */}
            <div className="mb-16">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-lg shadow-blue-500/50">
                <Bot className="w-8 h-8 text-white" />
              </div>
              <h1 className="text-4xl font-bold text-white mb-4">
                AI 어시스턴트에 오신 것을 환영합니다
              </h1>
              <p className="text-xl text-gray-300 mb-12">
                어떤 방식으로 포트폴리오를 둘러보시겠어요?
              </p>
            </div>

            {/* 회사 선택 카드들 */}
            <div className="max-w-md mx-auto">
              <div className="space-y-4">
                {Object.entries(companyConfigs).map(([key, company]) => (
                  <Card
                    key={key}
                    className="bg-gray-800/80 backdrop-blur-sm border border-gray-600/50 hover:border-blue-500/50 hover:shadow-xl hover:shadow-blue-500/20 transition-all duration-300 cursor-pointer group transform hover:-translate-y-1"
                    onClick={() => handleCompanySelect(key)}
                  >
                    <CardContent className="p-6">
                      <div className="flex items-center gap-4">
                        <div className={`w-12 h-12 bg-${company.color} rounded-xl flex items-center justify-center shadow-lg`}>
                          <Building2 className="w-6 h-6 text-white" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-lg font-bold text-white mb-1">
                            {company.name}
                          </h3>
                          <p className="text-sm text-gray-400 mb-3">
                            {company.description}
                          </p>
                          <div className="flex flex-wrap gap-1">
                            {company.focus.slice(0, 2).map((focus, idx) => (
                              <span key={idx} className="text-xs bg-gray-700/50 text-gray-300 px-2 py-1 rounded">
                                {focus}
                              </span>
                            ))}
                            {company.focus.length > 2 && (
                              <span className="text-xs text-gray-400">
                                +{company.focus.length - 2}개
                              </span>
                            )}
                          </div>
                        </div>
                        <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-blue-400 group-hover:translate-x-1 transition-all" />
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* 팁 섹션 */}
            <div className="bg-blue-900/20 border border-blue-500/30 rounded-2xl p-6 backdrop-blur-sm max-w-md mx-auto">
              <p className="text-sm text-blue-300">
                💡 <strong className="text-blue-200">안내:</strong> 회사를 선택하시면 해당 회사의 채용 요구사항에 맞춤화된 포트폴리오 정보와 답변을 제공합니다.
              </p>
            </div>
          </div>
        </div>
      </div>
    )
  }

  // 메인 채팅 화면 - 메인 페이지와 동일한 다크 테마
  return (
    <div className="h-screen relative flex flex-col" style={{ background: 'linear-gradient(to bottom right, #000000, #111827, #000000)' }}>
      {/* Hero Tech Grid Pattern - 메인과 동일 */}
      <div className="absolute inset-0 opacity-40" style={{
        backgroundImage: `linear-gradient(rgba(59,130,246,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(59,130,246,0.03) 1px, transparent 1px)`,
        backgroundSize: '60px 60px'
      }}></div>
      
      {/* Hero Tech Glow Effects - 메인과 동일 */}
      <div className="absolute top-24 left-24 w-96 h-96 rounded-full filter blur-3xl animate-pulse" style={{ 
        background: 'linear-gradient(to right, rgba(59, 130, 246, 0.15), rgba(99, 152, 255, 0.15))',
        animationDuration: '4s'
      }}></div>
      
      <div className="absolute bottom-32 right-32 w-80 h-80 rounded-full filter blur-3xl animate-pulse" style={{ 
        background: 'linear-gradient(to right, rgba(59, 130, 246, 0.15), rgba(37, 99, 235, 0.15))',
        animationDuration: '3s',
        animationDelay: '1s'
      }}></div>
      
      <div className="absolute top-1/2 left-32 w-64 h-64 rounded-full filter blur-2xl animate-pulse" style={{ 
        background: 'linear-gradient(to right, rgba(59, 130, 246, 0.1), rgba(96, 165, 250, 0.1))',
        animationDuration: '5s',
        animationDelay: '2s'
      }}></div>

      <Navigation />

      {/* Fixed Header Section */}
      <div className="mt-16 px-4 py-6 flex-shrink-0 relative z-10 backdrop-blur-xl" style={{ background: 'linear-gradient(to right, rgba(0,0,0,0.95), rgba(17,24,39,0.95), rgba(0,0,0,0.95))' }}>
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: `linear-gradient(rgba(59,130,246,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(59,130,246,0.05) 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}></div>
        
        {/* Header Glow Effects */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-96 h-1 bg-gradient-to-r from-transparent via-blue-500/30 to-transparent"></div>
        
        {/* Header Bottom Border Glow */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/60 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-t from-blue-500/20 to-transparent blur-sm"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div
                className={`w-10 h-10 bg-${currentCompany?.color} rounded-xl flex items-center justify-center`}
              >
                <Bot className="w-5 h-5 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-white">
                  {currentCompany?.name} 포트폴리오 AI 어시스턴트
                </h1>
                <p className="text-gray-300 text-sm">
                  {currentCompany?.name}에 특화된 제 경험과 역량에 대해 질문해보세요.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4 text-sm">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-green-400 font-medium">
                  AI 에이전트 온라인
                </span>
              </div>
              <Badge className={`bg-${currentCompany?.color} text-white`}>
                <Sparkles className="w-3 h-3 mr-1" />
                {currentCompany?.name} 전용
              </Badge>
              <Button
                variant="ghost"
                size="sm"
                className="text-gray-300 hover:text-white hover:bg-gray-700/50"
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
      <div className="flex-1 flex overflow-hidden">
        {/* Chat Area */}
        <div className="flex-1 flex flex-col">
          {/* Messages Container */}
          <div 
            className="flex-1 overflow-y-auto p-4" 
            style={{ 
              minHeight: '0',
              height: '100%',
              position: 'relative'
            }}
          >
            <div 
              className="space-y-4 max-w-5xl mx-auto w-full" 
              style={{ 
                minHeight: 'calc(100% + 1px)',
                paddingBottom: '20px',
                position: 'relative'
              }}
            >
            {messages.length === 0 ? (
              // Empty State - 토스 스타일
              <div className="flex flex-col items-center justify-center h-full text-center">
                <div
                  className={`w-16 h-16 bg-${currentCompany?.color} bg-opacity-10 rounded-2xl flex items-center justify-center mb-8`}
                >
                  <Bot className={`w-8 h-8 text-${currentCompany?.color}`} />
                </div>

                <h2 className="text-2xl font-bold mb-6 text-white">
                  안녕하세요! {currentCompany?.name} 면접관님
                </h2>

                <div className="grid md:grid-cols-2 gap-4 mb-8 max-w-2xl">
                  {currentCompany?.focus.map((focus, index) => (
                    <div
                      key={index}
                      className="bg-gradient-to-br from-gray-900/90 to-gray-800/90 backdrop-blur-sm rounded-xl border border-blue-500/30 p-4 shadow-lg shadow-blue-500/10 hover:shadow-blue-500/20 transition-all duration-300"
                    >
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                        <Zap
                          className="w-5 h-5 text-blue-400"
                        />
                        <span
                          className="font-semibold text-blue-300"
                        >
                          {focus}
                        </span>
                      </div>
                      <p className="text-gray-200 text-sm font-medium">
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
                    className={`max-w-2xl ${message.type === 'user' ? '' : ''}`}
                  >
                    <Card
                      className={`${
                        message.type === 'user'
                          ? 'bg-gradient-to-br from-gray-900/90 to-gray-800/90 backdrop-blur-sm border border-blue-500/30 shadow-lg shadow-blue-500/10 hover:shadow-blue-500/20 transition-all duration-300'
                          : 'bg-gradient-to-br from-gray-900/95 to-gray-800/95 backdrop-blur-sm border border-blue-500/20 shadow-lg shadow-blue-500/10'
                      }`}
                    >
                      <CardContent className="p-4">
                        <div className="flex items-start justify-between gap-2 mb-2">
                          <span
                            className={`font-semibold text-sm flex items-center gap-2 ${
                              message.type === 'user' ? 'text-blue-300' : 'text-blue-300'
                            }`}
                          >
                            {message.type === 'user' ? (
                              <>
                                <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                                나
                              </>
                            ) : (
                              <>
                                <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                                AI 어시스턴트
                              </>
                            )}
                          </span>
                          <div className="flex items-center gap-2">
                            <span
                              className={`text-xs flex items-center gap-1 ${message.type === 'user' ? 'text-white/70' : 'text-gray-400'}`}
                            >
                              <Clock className="w-3 h-3" />
                              {message.timestamp.toLocaleTimeString()}
                            </span>
                            <Button
                              size="sm"
                              variant="ghost"
                              className="h-6 w-6 p-0 hover:bg-gray-700/50"
                              onClick={() => copyMessage(message.content)}
                            >
                              <Copy
                                className={`w-3 h-3 ${message.type === 'user' ? 'text-white/70' : 'text-gray-400'}`}
                              />
                            </Button>
                          </div>
                        </div>

                        <div
                          className={`text-sm leading-relaxed font-medium ${
                            message.type === 'user' ? 'text-gray-200' : 'text-gray-100'
                          }`}
                        >
                          {message.content.split('\n').map((line, index) => {
                            // 박스 섹션 처리 (━━━ 패턴)
                            if (line.includes('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━')) {
                              return (
                                <div key={index} className="my-4">
                                  <div className="border-t border-blue-500/30 w-full"></div>
                                </div>
                              );
                            }
                            
                            // 박스 처리 - 통일된 고급 테마
                            if (line.includes('**안녕하세요! 토스 ML Engineer 지원자 황준호입니다!**')) {
                              return (
                                <div key={index} className="mb-4">
                                  <div className="bg-blue-900/20 p-2 rounded-lg border-l-4 border-r-4 border-blue-400 text-center">
                                    <h2 className="text-lg font-bold text-white">
                                      안녕하세요! 토스 ML Engineer <span className="text-cyan-300 font-bold">지원자 황준호</span>입니다!
                                    </h2>
                                  </div>
                                </div>
                              );
                            }
                            
                            // 소개 박스 처리 - 양쪽 파란색 보더 + 가운데 정렬
                            if (line.includes('**토스 채용 공고를 바탕으로')) {
                              const text = '토스 채용 공고를 바탕으로 우선순위를 정리하여 보여드립니다! 아래 프로젝트들을 확인해보시고, 궁금한 점은 언제든 저에게 질문해주세요. 꼭 좋은 기회로 이어졌으면 좋겠습니다';
                              
                              return (
                                <div key={index} className="mb-4">
                                  <div className="bg-blue-900/20 p-2 rounded-lg border-l-4 border-r-4 border-blue-400 text-center">
                                    <h3 className="text-lg font-bold text-white">
                                      <div><span className="text-cyan-300 font-bold">토스 채용 공고</span>를 바탕으로 <span className="text-cyan-300 font-bold">우선순위</span>를 정리하여 보여드립니다!</div>
                                      <div>아래 프로젝트들을 확인해보시고, 언제든지 챗봇을 통해 질문해주세요</div>
                                    </h3>
                                  </div>
                                </div>
                              );
                            }
                            
                            // 안내 박스 처리 - 양쪽 파란색 보더 + 가운데 정렬 (글자 크기 유지)
                            if (line.includes('**궁금한 프로젝트나')) {
                              return (
                                <div 
                                  key={index} 
                                  className="mt-1 bg-blue-900/20 p-2 rounded-lg border-l-4 border-r-4 border-blue-400 text-center"
                                >
                                  <div>궁금한 프로젝트나 기술이 있으시면 언제든 질문해주세요!</div>
                                  <div>각 프로젝트 링크를 클릭하시면 더 자세한 기술적 구현 내용과 성과를 확인하실 수 있습니다.</div>
                                </div>
                              );
                            }
                            
                            // 프로젝트 링크 처리 - 완전 매칭 시스템 (모든 패턴)
                            // 패턴 1: 이모지 제목 → 설명
                            // 패턴 2: 이모지 제목 (부가설명)  
                            // 패턴 3: 이모지 제목만
                            const linkMatch = line.match(/^(🎯|🤖|📊|💰|🔧)\s*(.+?)(?:→|\(|$)(.*)$/);
                            if (linkMatch && linkMatch[1]) {
                              const [, emoji, title, description] = linkMatch;
                              const fullText = `${title} ${description}`.toLowerCase();
                              
                              // 프로젝트별 완전 매칭 시스템
                              let projectUrl = null;
                              
                              // 데이트코스 매칭 (마이크로서비스, PySpark 모두 여기)
                              if (fullText.includes('데이트') || fullText.includes('추천 시스템') || 
                                  fullText.includes('89,321') || fullText.includes('qdrant') || 
                                  fullText.includes('vector db') || fullText.includes('마이크로') || 
                                  fullText.includes('pyspark') || fullText.includes('redis') ||
                                  fullText.includes('33초') || fullText.includes('3.4초')) {
                                projectUrl = '/date-recommendation';
                              } 
                              // 보드게임 매칭
                              else if (fullText.includes('보드게임') || fullText.includes('rag') || 
                                       fullText.includes('exaone') || fullText.includes('faiss') || 
                                       fullText.includes('217') || fullText.includes('langchain')) {
                                projectUrl = '/boardgame-chatbot';
                              } 
                              // 신문 이탈 매칭 (이탈/퇴사 예측 ML 시스템도 여기)
                              else if (fullText.includes('신문') || fullText.includes('이탈 예측') || 
                                       fullText.includes('randomforest') || fullText.includes('smote') ||
                                       fullText.includes('faker') || fullText.includes('top 50') ||
                                       (fullText.includes('이탈') && fullText.includes('예측')) ||
                                       (fullText.includes('8가지') && fullText.includes('알고리즘'))) {
                                projectUrl = '/newspaper-churn';
                              } 
                              // 간호사 매칭
                              else if (fullText.includes('간호사') || fullText.includes('퇴사 예측') || 
                                       fullText.includes('급여') || fullText.includes('logistic') || 
                                       fullText.includes('794') || fullText.includes('stratified')) {
                                projectUrl = '/nurse-salary';
                              }
                              // 이탈/퇴사 예측 ML 시스템 - 신문과 간호사 둘 다 연관
                              else if (fullText.includes('이탈/퇴사')) {
                                // 기본적으로 신문 이탈로 연결 (더 관련성 높음)
                                projectUrl = '/newspaper-churn';
                              }
                              
                              if (projectUrl) {
                                return (
                                  <div key={index} className="mb-3">
                                    <div className="bg-gray-800/60 backdrop-blur-sm border border-blue-500/30 rounded-lg p-3 hover:border-blue-400/50 hover:bg-gray-700/60 transition-all duration-200">
                                      <a 
                                        href={projectUrl} 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        className="block"
                                      >
                                        <div className="flex items-start gap-3">
                                          <span className="text-xl mt-1">{emoji}</span>
                                          <div className="flex-1">
                                            <div className="flex items-center gap-2 mb-1">
                                              <span className="font-bold text-blue-300">{title.trim()}</span>
                                              <ArrowRight className="w-4 h-4 text-blue-400" />
                                              <span className="text-xs text-blue-400 bg-blue-900/30 px-2 py-1 rounded">프로젝트 보기</span>
                                            </div>
                                            <p className="text-gray-300 text-sm leading-relaxed">
                                              {description.trim()}
                                            </p>
                                          </div>
                                        </div>
                                      </a>
                                    </div>
                                  </div>
                                );
                              }
                            }
                            
                            // 일반 라인 처리 - 중요 포인트 강조
                            let processedLine = line;
                            
                            // **텍스트** 마크다운 제거
                            processedLine = processedLine.replace(/\*\*(.+?)\*\*/g, '$1');
                            
                            // 강조 문구들만 청록색 처리
                            const cyanPatterns = [
                              /(\d+%|\d+초|\d+\.\d+초|F1-Score|ROC AUC|89,321개|794명|87%)/g, // 성능 지표
                              /(토스|Toss|ML Engineer|검색 인프라|LLM\/RAG|대용량 데이터|추천 시스템)/g, // 토스 관련
                              /(Qdrant|Vector DB|FAISS|EXAONE|PySpark|StratifiedKFold|GridSearchCV)/g, // 기술 스택
                            ];
                            
                            // 강조 문구들만 청록색 처리
                            cyanPatterns.forEach(pattern => {
                              processedLine = processedLine.replace(pattern, '<span class="text-cyan-300 font-bold">$1</span>');
                            });
                            
                            return (
                              <div 
                                key={index} 
                                className={`${index === 0 ? '' : 'mt-1'} ${line.includes('토스') || line.includes('ML Engineer') ? 'bg-blue-900/20 p-2 rounded-lg border-l-4 border-blue-400' : ''}`}
                                dangerouslySetInnerHTML={processedLine !== line ? { __html: processedLine } : undefined}
                              >
                                {processedLine === line ? (line || <br />) : null}
                              </div>
                            );
                          })}
                        </div>
                      </CardContent>
                    </Card>
                  </div>

                  {message.type === 'user' && (
                    <div className="w-8 h-8 bg-gradient-to-br from-gray-600 to-gray-700 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg">
                      <User className="w-4 h-4 text-white" />
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
                <Card className="bg-gray-800/80 backdrop-blur-sm border border-gray-600/50">
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
                      <span className="text-sm text-gray-300">
                        AI가 답변을 생성하고 있습니다...
                      </span>
                    </div>
                  </CardContent>
                </Card>
              </div>
            )}

            <div ref={messagesEndRef} />
            </div>
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
                    className="border-gray-600 text-gray-300 hover:bg-gray-700/50 hover:border-gray-500 bg-transparent"
                    onClick={() => handleQuickQuestion(question)}
                  >
                    {question}
                  </Button>
                ))}
              </div>
            </div>
          )}

          {/* Fixed Input Area - 전체 너비 */}
          <div className="p-4 flex-shrink-0 relative z-10 backdrop-blur-xl" style={{ background: 'linear-gradient(to right, rgba(0,0,0,0.95), rgba(17,24,39,0.95), rgba(0,0,0,0.95))' }}>
            <div className="absolute inset-0 opacity-20" style={{
              backgroundImage: `linear-gradient(rgba(59,130,246,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(59,130,246,0.05) 1px, transparent 1px)`,
              backgroundSize: '40px 40px'
            }}></div>
            
            {/* Input Area Glow Effects */}
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-96 h-1 bg-gradient-to-r from-transparent via-blue-500/30 to-transparent"></div>
            
            {/* Input Top Border Glow */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/60 to-transparent"></div>
            <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-b from-blue-500/20 to-transparent blur-sm"></div>
            <div className="flex gap-3 w-full relative z-10">
              <div className="flex-1 relative max-w-5xl mx-auto">
                <input
                  ref={inputRef}
                  type="text"
                  value={inputValue}
                  onChange={e => setInputValue(e.target.value)}
                  onKeyPress={e =>
                    e.key === 'Enter' && handleSendMessage(inputValue)
                  }
                  placeholder={`${currentCompany?.name}에 대해 궁금한 것을 물어보세요...`}
                  className="w-full px-4 py-3 bg-gray-900/40 border border-blue-500/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400/50 focus:shadow-lg focus:shadow-blue-500/20 backdrop-blur-sm transition-all duration-200"
                />
                <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-xs text-gray-500">
                  {inputValue.length}/500
                </div>
              </div>

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
        <div className="w-80 flex-shrink-0 relative backdrop-blur-xl" style={{ background: 'linear-gradient(to bottom, rgba(0,0,0,0.90), rgba(17,24,39,0.90), rgba(0,0,0,0.90))' }}>
          <div className="absolute inset-0 opacity-15" style={{
            backgroundImage: `linear-gradient(rgba(59,130,246,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(59,130,246,0.08) 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }}></div>
          
          {/* Sidebar Left Border Glow */}
          <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-blue-500/40 via-blue-500/60 to-blue-500/40"></div>
          <div className="absolute left-0 top-0 bottom-0 w-2 bg-gradient-to-r from-blue-500/15 to-transparent blur-sm"></div>
          
          {/* Sidebar Enhanced Glow */}
          <div className="absolute left-0 top-1/3 h-1/3 w-1 bg-blue-400/50 blur-sm"></div>
          <div className="p-4 space-y-4 h-full relative z-10">
            <div className="space-y-3">
              <Button
                variant="outline"
                className="w-full justify-start border-blue-500/20 text-gray-200 hover:bg-blue-900/30 hover:border-blue-400/40 hover:shadow-lg hover:shadow-blue-500/20 bg-gray-900/30 backdrop-blur-sm transition-all duration-200"
              >
                <Download className="w-4 h-4 mr-2" />
                대화 내보내기
              </Button>

              <Button
                variant="outline"
                className="w-full justify-start border-blue-500/20 text-gray-200 hover:bg-blue-900/30 hover:border-blue-400/40 hover:shadow-lg hover:shadow-blue-500/20 bg-gray-900/30 backdrop-blur-sm transition-all duration-200"
                onClick={() => setMessages([])}
              >
                <RefreshCw className="w-4 h-4 mr-2" />새 대화 시작
              </Button>
            </div>

            <div className="space-y-4">
              <div>
                <h3 className="font-semibold mb-3 text-white">
                  {currentCompany?.name} 맞춤 정보
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
                <h3 className="font-semibold mb-3 text-white">
                  시스템 정보
                </h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-400">응답 시간</span>
                    <span className="text-green-400 font-medium">~1.5초</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">정확도</span>
                    <span className="text-blue-400 font-medium">95%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">모드</span>
                    <span
                      className={`text-${currentCompany?.color} font-medium`}
                    >
                      {currentCompany?.name} 전용
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