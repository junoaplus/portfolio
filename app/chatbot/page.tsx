'use client'

import { useState, useRef, useEffect } from 'react'
import ReactMarkdown from 'react-markdown'
import { Navigation } from '@/components/navigation'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import {
  Send,
  Download,
  RefreshCw,
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
  links?: Record<string, string>  // 추천 링크 추가
}

interface CompanyConfig {
  name: string
  color: string
  focus: string[]
  description: string
}

const companyConfigs: Record<string, CompanyConfig> = {
  mindlogic: {
    name: '마인드로직',
    color: 'blue-500',
    focus: ['페르소나 챗봇', 'LLM/에이전트', 'RAG', '스트리밍 최적화'],
    description: 'AI Software Engineer - 페르소나 챗봇',
  },
  /*
  // 기존 회사 컨텍스트는 보관용으로 유지 (사용 안 함)
  nuua: {
    name: '누아',
    color: 'green-500',
    focus: ['AI 에이전트', '여행사 업무 자동화', '비정형 데이터 구조화', '항공권 유통'],
    description: 'AI 에이전트 개발자 - 여행 산업 혁신',
  },
  lbox: {
    name: '엘박스',
    color: 'purple-500',
    focus: ['LLM/RAG', '법률 AI', '검색 모델', 'ML 파이프라인'],
    description: 'ML Engineer - 법률 AI 제품 개발',
  },
  estsoft: {
    name: '이스트소프트',
    color: 'orange-500',
    focus: ['LLM 개발', 'Perso SaaS', 'Alan AI', 'Azure Cloud'],
    description: 'LLM Engineer - 실용주의 인공지능',
  },
  liner: {
    name: '라이너',
    color: 'blue-500',
    focus: ['AI Search', 'Research Agent', '검색 에이전트', '정보 탐색 혁신'],
    description: 'ML Engineer(Agent) - 신뢰할 수 있는 AI',
  },
  */
}

export default function ChatbotPage() {
  // API Base URL 환경변수 설정 (Runpod Serverless)
  const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:8000'
  
  // Runpod Serverless API 호출 함수
  const callRunpodAPI = async (path: string, body: any) => {
    const response = await fetch(API_BASE_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.NEXT_PUBLIC_RUNPOD_API_KEY}` // 필요시
      },
      body: JSON.stringify({
        input: {
          method: 'POST',
          path: path,
          headers: { 'Content-Type': 'application/json' },
          body: body
        }
      })
    })
    
    const data = await response.json()
    
    // 디버깅용 로그
    console.log('Runpod 응답:', data)
    
    // Runpod Serverless 응답 구조 확인
    if (data.status === 'IN_QUEUE' || data.status === 'IN_PROGRESS') {
      // Job이 큐에 있거나 처리 중인 경우
      console.log('Job 상태:', data.status)
      throw new Error('Job이 아직 처리 중입니다. 잠시 후 다시 시도해주세요.')
    }
    
    // 응답 형식에 따라 처리
    if (data.output) {
      // output이 직접 결과인 경우
      if (typeof data.output === 'object' && !data.output.body) {
        return {
          ok: true,
          json: () => Promise.resolve(data.output)
        }
      }
      // output.body가 있는 경우
      if (data.output.body) {
        return {
          ok: data.output.status_code ? data.output.status_code < 400 : true,
          json: () => Promise.resolve(data.output.body)
        }
      }
    }
    
    // 에러 응답인 경우
    if (data.error) {
      throw new Error(data.error)
    }
    
    throw new Error('Runpod API 응답 형식을 알 수 없습니다')
  }
  
  // === 회사별 데이터 관리 유틸리티 함수 ===

  // 1. 현재 회사 확인
  const getCurrentCompany = (): string | null => {
    if (typeof window === 'undefined') return null
    return sessionStorage.getItem('chatbot_current_company')
  }

  // 2. 현재 회사 설정
  const setCurrentCompanyStorage = (company: string) => {
    if (typeof window === 'undefined') return
    sessionStorage.setItem('chatbot_current_company', company)
  }

  // 3. 회사별 데이터 키 생성
  const getCompanyDataKey = (company: string): string => {
    return `chatbot_data_${company}`
  }

  // 4. 회사별 데이터 저장
  const saveCompanyData = (company: string, data: any) => {
    if (typeof window === 'undefined') return
    const key = getCompanyDataKey(company)
    const saveData = {
      ...data,
      lastActivity: new Date().toISOString()
    }
    sessionStorage.setItem(key, JSON.stringify(saveData))
    console.log(`💾 ${company} 데이터 저장 완료`)
  }

  // 5. 회사별 데이터 로드
  const loadCompanyData = (company: string): any | null => {
    if (typeof window === 'undefined') return null
    const key = getCompanyDataKey(company)
    const saved = sessionStorage.getItem(key)
    if (saved) {
      console.log(`📂 ${company} 데이터 로드 완료`)
      const data = JSON.parse(saved)
      
      // timestamp를 Date 객체로 변환
      if (data.messages) {
        data.messages = data.messages.map((msg: any) => ({
          ...msg,
          timestamp: new Date(msg.timestamp)
        }))
      }
      
      return data
    }
    return null
  }

  // 6. 현재 회사 데이터 저장 (현재 상태 기반)
  const saveCurrentCompanyData = (messages: Message[], sessionId: string, selectedCompany: string, currentCompany: CompanyConfig) => {
    if (!selectedCompany) return
    
    saveCompanyData(selectedCompany, {
      messages,
      sessionId,
      selectedCompany,
      currentCompany
    })
  }

  const defaultCompanyKey = 'mindlogic'
  const defaultCompany = companyConfigs[defaultCompanyKey]

  const [showCompanySelection, setShowCompanySelection] = useState(false)
  const [selectedCompany, setSelectedCompany] = useState<string>(defaultCompanyKey)
  const [currentCompany, setCurrentCompany] = useState<CompanyConfig | null>(defaultCompany)
  const [messages, setMessages] = useState<Message[]>([])
  const [inputValue, setInputValue] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const [isServerWarming, setIsServerWarming] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  // 기본 회사(마인드로직) 초기 복구 - 클라이언트에서만 실행
  useEffect(() => {
    if (typeof window === 'undefined') return
    const savedData = loadCompanyData(defaultCompanyKey)
    if (savedData && savedData.messages?.length > 0) {
      setMessages(savedData.messages)
      setSelectedCompany(savedData.selectedCompany || defaultCompanyKey)
      setCurrentCompany(savedData.currentCompany || defaultCompany)
      setShowCompanySelection(false)
      if (savedData.sessionId) {
        localStorage.setItem('chatbot_session_id', savedData.sessionId)
      }
      return
    }
    // 기본 회사 고정 저장
    setCurrentCompanyStorage(defaultCompanyKey)
    setSelectedCompany(defaultCompanyKey)
    setCurrentCompany(defaultCompany)
    setMessages([])
  }, [])

  const quickQuestions = [
    'LangGraph 멀티 에이전트 설계를 설명해 주세요',
    'RAG 성능을 어떻게 높였나요?',
    '스트리밍 응답 속도를 33초→3.4초로 줄인 방법은?',
    'Codex/GPT Pro 전환으로 얻은 이점은?',
    'PySpark ETL과 Qdrant 벡터 검색 구축 과정을 알려주세요',
  ]

  const getInitialMessage = (): string => {
    return `# 마인드로직 AI Software Engineer 지원자 황준호입니다 (포트폴리오 Q&A)

이 챗봇은 면접 모드가 아닌 **포트폴리오 Q&A** 모드입니다. 어떤 질문이든 저를 어필하는 답변을 드립니다.

## 최근 스택/전환
- Claude 중심 → **Codex/GPT Pro**로 전환해 프롬프트 실험 속도 업
- LangGraph 멀티 에이전트 + RAG, 스트리밍 응답 최적화 경험

## 마인드로직과 맞닿은 강점
- RAG/에이전트: LangGraph로 질문 라우팅 + 전문 에이전트 협업 설계
- 스트리밍/성능: 응답 33초 → 3.4초 개선 경험, 지연·비용 최적화 집착
- 서빙/운영: FastAPI + Next.js 풀스택, Redis/Postgres/Qdrant, AWS
- 도구: Codex/GPT Pro, Claude 등 실사용 경험

## 대표 프로젝트
- AI 챗봇 포트폴리오: LangGraph 멀티 에이전트, 실시간 API, PC 포트폴리오 Q&A /ai-chatbot-portfolio
- 데이트 코스 추천 AI: PySpark 20만→9만 정제, Qdrant 벡터 검색, 89,321개 장소, 응답 33초→3.4초 /date-recommendation
- 보드게임 룰 챗봇: EXAONE 파인튜닝 + FAISS RAG, 217개 게임 룰 자동 응답 /boardgame-chatbot
- 신문 이탈 예측: SMOTE + RandomForest, Streamlit 대시보드 /newspaper-churn
- 간호사 퇴사 예측: StratifiedKFold + LogisticRegression /nurse-salary

## 질문 팁
필요한 정보를 말씀해주세요. (예: LangGraph 멀티 에이전트 설계, RAG 성능/검색, 스트리밍 최적화, Codex/GPT Pro 전환, PySpark ETL + Qdrant 구축)
`;
  }

  const handleCompanySelect = async (companyKey: string) => {
    const company = companyConfigs[companyKey]
    
    // 1. 현재 회사 설정
    setCurrentCompany(company)
    setSelectedCompany(companyKey)
    setCurrentCompanyStorage(companyKey) // sessionStorage 업데이트
    
    // 2. 기존 데이터 확인
    const existingData = loadCompanyData(companyKey)
    
    if (existingData && existingData.messages?.length > 0) {
      // 기존 데이터 복구
      console.log(`📂 ${companyKey} 기존 데이터 복구`)
      setMessages(existingData.messages)
      setShowCompanySelection(false)
      
      // 기존 세션 ID로 localStorage 업데이트  
      if (existingData.sessionId) {
        localStorage.setItem('chatbot_session_id', existingData.sessionId)
      }
      
      return
    }
    
    // 3. 새로 시작하는 경우
    setIsTyping(true)
    
    try {
      // 세션 생성
      const sessionResponse = await callRunpodAPI('/api/sessions', {
        company_context: companyKey,
      })
      
      const sessionData = await sessionResponse.json()
      
      if (sessionData.success) {
        const sessionId = sessionData.session_id
        localStorage.setItem('chatbot_session_id', sessionId)
        
        // 초기 메시지 생성
        const initialMessage = getInitialMessage()
        const aiMessage: Message = {
          id: Date.now().toString(),
          type: 'ai',
          content: initialMessage,
          timestamp: new Date(),
          sources: [],
          links: {
            "AI 챗봇 포트폴리오": "/ai-chatbot-portfolio",
            "데이트 코스 AI 추천": "/date-recommendation", 
            "보드게임 RAG 챗봇": "/boardgame-chatbot",
            "신문 이탈 예측": "/newspaper-churn",
            "간호사 급여 예측": "/nurse-salary"
          }
        }
        
        setMessages([aiMessage])
        setShowCompanySelection(false)
        
        // 초기 데이터 저장
        saveCurrentCompanyData([aiMessage], sessionId, companyKey, company)
        
        console.log(`✅ ${companyKey} 새 세션 시작: ${sessionId}`)
        
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

  // 복구된 데이터가 있으면 세션 검증
  useEffect(() => {
    if (typeof window === 'undefined') return
    const restored = loadCompanyData(defaultCompanyKey)
    if (restored && restored.sessionId) {
      console.log('🔍 복구된 세션 검증 중...')
      validateRestoredSession(restored.sessionId, restored.selectedCompany || defaultCompanyKey)
    }
  }, [])

  // 세션 검증 함수
  const validateRestoredSession = async (sessionId: string, company: string) => {
    try {
      // 간단한 세션 유효성 체크 (빈 메시지 전송)
      const response = await callRunpodAPI('/api/chat', {
        session_id: sessionId,
        question: '__health_check__' // 특별한 헬스체크 질문
      })
      
      const data = await response.json()
      if (data.success) {
        console.log('✅ 복구된 세션 유효함')
        // localStorage도 업데이트
        localStorage.setItem('chatbot_session_id', sessionId)
      } else {
        console.log('❌ 복구된 세션 무효 - 새 세션 생성')
        await createNewSessionForCompany(company)
      }
    } catch (error) {
      console.log('❌ 세션 검증 실패 - 새 세션 생성')
      await createNewSessionForCompany(company)
    }
  }

  // 회사별 새 세션 생성 함수
  const createNewSessionForCompany = async (company: string) => {
    try {
      // 🔥 해당 회사의 저장된 메시지만 가져오기
      const companyData = loadCompanyData(company)
      const previousMessages = companyData?.messages ? 
        companyData.messages.map((msg: Message) => ({
          type: msg.type,
          content: msg.content,
          timestamp: msg.timestamp?.toISOString() || new Date().toISOString()
        })) : []
      
      const sessionResponse = await callRunpodAPI('/api/sessions', {
        company_context: company,
        previous_messages: previousMessages  // 🔥 대화 복구
      })
      
      const sessionData = await sessionResponse.json()
      if (sessionData.success) {
        const newSessionId = sessionData.session_id
        localStorage.setItem('chatbot_session_id', newSessionId)
        
        // 복구된 데이터에 새 세션 ID 업데이트
        if (messages.length > 0 && selectedCompany && currentCompany) {
          saveCurrentCompanyData(messages, newSessionId, selectedCompany, currentCompany)
        }
        
        console.log(`✅ ${company} 새 세션 생성: ${newSessionId} (대화 ${previousMessages.length}개 복구)`)
      }
    } catch (error) {
      console.error('❌ 새 세션 생성 실패:', error)
    }
  }

  // 🔥 재시도 API 호출 함수 추가
  const callRunpodAPIWithRetry = async (path: string, body: any, maxRetries = 3) => {
    let lastError: Error

    for (let attempt = 1; attempt <= maxRetries; attempt++) {
      try {
        console.log(`🔄 API 호출 시도 ${attempt}/${maxRetries}: ${path}`)
        const response = await callRunpodAPI(path, body)
        console.log(`✅ API 호출 성공 (${attempt}번째 시도)`)
        return response
        
      } catch (error) {
        console.log(`❌ API 호출 실패 ${attempt}/${maxRetries}:`, error)
        lastError = error as Error
        
        // 마지막 시도가 아니면 대기 후 재시도
        if (attempt < maxRetries) {
          const delay = Math.min(1000 * attempt, 3000) // 1초, 2초, 3초
          console.log(`⏳ ${delay}ms 대기 후 재시도...`)
          await new Promise(resolve => setTimeout(resolve, delay))
        }
      }
    }
    
    throw lastError
  }

  // 🔥 세션 복구 함수 추가
  const recoverSession = async () => {
    try {
      console.log('🔄 세션 복구 중...')
      
      const currentComp = selectedCompany || getCurrentCompany() || 'general'
      
      // 🔥 현재 회사의 메시지만 전송 (다른 회사 메시지 섞이지 않도록)
      const previousMessages = messages.map(msg => ({
        type: msg.type,
        content: msg.content,
        timestamp: msg.timestamp.toISOString()
      }))
      
      // 기존 세션 ID 제거
      localStorage.removeItem('chatbot_session_id')
      
      // 🔥 새 세션 생성 (대화 기록 포함)
      const sessionResponse = await callRunpodAPIWithRetry('/api/sessions', {
        company_context: currentComp,
        previous_messages: previousMessages  // 🔥 핵심!
      }, 2)
      
      const sessionData = await sessionResponse.json()
      
      if (sessionData.success) {
        const newSessionId = sessionData.session_id
        localStorage.setItem('chatbot_session_id', newSessionId)
        
        // sessionStorage도 업데이트
        if (currentCompany) {
          saveCurrentCompanyData(messages, newSessionId, currentComp, currentCompany)
        }
        
        console.log(`✅ ${currentComp} 세션 복구 성공 (대화 ${messages.length}개 유지)`)
        return true
      } else {
        console.error('❌ 세션 복구 실패:', sessionData)
        return false
      }
      
    } catch (error) {
      console.error('❌ 세션 복구 중 오류:', error)
      return false
    }
  }

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
      // 🔥 세션 ID 검증 강화
      const sessionId = localStorage.getItem('chatbot_session_id')
      if (!sessionId) {
        console.log('❌ 세션 ID가 없음, 새로 생성 필요')
        throw new Error('SESSION_MISSING')
      }
      
      // 🔥 재시도 로직으로 API 호출
      const response = await callRunpodAPIWithRetry('/api/chat', {
        session_id: sessionId,
        question: content.trim(),
      }, 3) // 최대 3회 재시도

      const data = await response.json()
      
      console.log('백엔드 응답:', data)

      // 🔥 404 에러 (세션 없음) 감지
      if (!response.ok && response.status === 404) {
        console.log('❌ 404 에러 감지 - 세션 없음')
        throw new Error('SESSION_NOT_FOUND')
      }

      if (data.success) {
        const aiMessage: Message = {
          id: (Date.now() + 1).toString(),
          type: 'ai',
          content: data.answer,
          timestamp: new Date(),
          links: data.links || {},
          sources: data.metadata?.key_points || [],
        }
        
        const newMessages = [...messages, userMessage, aiMessage]
        setMessages(newMessages)
        
        // 🔥 새로 추가: 메시지 저장
        const sessionId = localStorage.getItem('chatbot_session_id')
        if (sessionId && selectedCompany && currentCompany) {
          saveCurrentCompanyData(newMessages, sessionId, selectedCompany, currentCompany)
        }
      } else {
        // 🔥 세션 관련 에러 감지 (detail.message도 확인)
        if (data.detail?.message?.includes('세션을 찾을 수 없습니다') || 
            data.message?.includes('session') || 
            data.message?.includes('세션')) {
          console.log('❌ 세션 관련 에러 감지, 복구 시도')
          throw new Error('SESSION_ERROR')
        }
        
        // 일반 에러 처리
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
      
      // 🔥 세션 관련 에러면 자동 복구
      if (error instanceof Error && (
          error.message === 'SESSION_MISSING' || 
          error.message === 'SESSION_ERROR' ||
          error.message === 'SESSION_NOT_FOUND' ||  // 🔥 추가
          error.message.includes('session') ||
          error.message.includes('404')
        )) {
        
        console.log('🔄 세션 자동 복구 시작...')
        const recovered = await recoverSession()
        
        if (recovered) {
          // 🔥 복구 메시지 대신 원래 질문 재시도
          console.log('✅ 세션 복구 완료, 원래 질문 재시도')
          
          try {
            const newSessionId = localStorage.getItem('chatbot_session_id')
            const retryResponse = await callRunpodAPI('/api/chat', {
              session_id: newSessionId,
              question: content.trim(), // 원래 질문 그대로
            })
            
            const retryData = await retryResponse.json()
            
            if (retryData.success) {
              // 원래 답변처럼 표시 (복구 언급 없이)
              const aiMessage: Message = {
                id: (Date.now() + 1).toString(),
                type: 'ai',
                content: retryData.answer,
                timestamp: new Date(),
                links: retryData.links || {},
                sources: retryData.metadata?.key_points || [],
              }
              
              const newMessages = [...messages, userMessage, aiMessage]
              setMessages(newMessages)
              
              // 저장
              if (newSessionId && selectedCompany && currentCompany) {
                saveCurrentCompanyData(newMessages, newSessionId, selectedCompany, currentCompany)
              }
              
              console.log('🎉 복구 후 재시도 성공!')
              return // 성공적으로 처리 완료
            }
          } catch (retryError) {
            console.error('❌ 복구 후 재시도 실패:', retryError)
          }
          
          // 재시도도 실패하면 복구 메시지라도 표시
          const recoveryMessage: Message = {
            id: (Date.now() + 1).toString(),
            type: 'ai',
            content: '연결을 복구했습니다. 다시 질문해주세요! 🔄',
            timestamp: new Date(),
          }
          setMessages(prev => [...prev, recoveryMessage])
        } else {
          // 복구 실패 메시지
          const failMessage: Message = {
            id: (Date.now() + 1).toString(),
            type: 'ai',
            content: '세션 복구에 실패했습니다. 페이지를 새로고침해주세요.',
            timestamp: new Date(),
          }
          setMessages(prev => [...prev, failMessage])
        }
        
      } else {
        // 일반 네트워크 에러
        const errorMessage: Message = {
          id: (Date.now() + 1).toString(),
          type: 'ai',
          content: '연결 에러가 발생했습니다. 잠시 후 다시 시도해주세요.',
          timestamp: new Date(),
        }
        setMessages(prev => [...prev, errorMessage])
      }
    } finally {
      setIsTyping(false)
    }
  }

  const handleQuickQuestion = (question: string) => {
    handleSendMessage(question)
  }

  const handleRestartChat = async () => {
    if (!selectedCompany || !currentCompany) return

    try {
      console.log(`🔄 ${selectedCompany} 채팅 새로 시작`)
      
      // 1. 현재 회사 데이터 완전 삭제
      const key = getCompanyDataKey(selectedCompany)
      sessionStorage.removeItem(key)
      
      // 2. localStorage 세션 ID 삭제
      localStorage.removeItem('chatbot_session_id')
      
      // 3. 새 세션 생성
      const sessionResponse = await callRunpodAPI('/api/sessions', {
        company_context: selectedCompany,
      })
      
      const sessionData = await sessionResponse.json()
      
      if (sessionData.success) {
        const sessionId = sessionData.session_id
        localStorage.setItem('chatbot_session_id', sessionId)
        
        // 4. 초기 메시지로 리셋
        const initialMessage = getInitialMessage()
        const aiMessage: Message = {
          id: Date.now().toString(),
          type: 'ai',
          content: initialMessage,
          timestamp: new Date(),
          sources: [],
          links: {
            "AI 챗봇 포트폴리오": "/ai-chatbot-portfolio",
            "데이트 코스 AI 추천": "/date-recommendation", 
            "보드게임 RAG 챗봇": "/boardgame-chatbot",
            "신문 이탈 예측": "/newspaper-churn",
            "간호사 급여 예측": "/nurse-salary"
          }
        }
        
        setMessages([aiMessage])
        
        // 5. 새 데이터 저장
        saveCurrentCompanyData([aiMessage], sessionId, selectedCompany, currentCompany)
        
        console.log(`✅ ${selectedCompany} 새로 시작 완료: ${sessionId}`)
        
      } else {
        console.error('새 세션 생성 실패:', sessionData)
        alert('새로 시작에 실패했습니다.')
      }
      
    } catch (error) {
      console.error('새로 시작 오류:', error)
      alert('새로 시작 중 오류가 발생했습니다.')
    }
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
                안녕하세요 지원자 황준호에 대해 답해주는 AI 챗봇입니다
              </h1>
              <p className="text-xl text-gray-300 mb-6">
                회사를 선택하시고 회사 맞춤형 답변을 받아보세요
              </p>
              <div className="text-center mb-8 p-4 bg-blue-900/20 backdrop-blur-sm border border-blue-700/30 rounded-xl max-w-lg mx-auto">
                <p className="text-blue-300 text-sm">
                  💡 귀하의 회사 챗봇을 먼저 체험해보시고<br/>
                  다른 회사 챗봇도 비교해보세요<br/>
                  <span className="text-blue-400 font-medium">각 회사 특성에 맞춰 다르게 답변하도록 설계했습니다</span>
                </p>
              </div>
            </div>

            {/* 회사 선택 카드들 */}
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-3 gap-8">
                {Object.entries(companyConfigs)
                  .sort(([, a], [, b]) => a.name.localeCompare(b.name, 'ko')) // 가나다순 정렬
                  .map(([key, company]) => (
                  <Card
                    key={key}
                    className={`bg-gray-800/80 backdrop-blur-sm border border-gray-600/50 hover:border-${company.color}/50 hover:shadow-xl hover:shadow-${company.color}/20 transition-all duration-300 cursor-pointer group transform hover:-translate-y-1`}
                    onClick={() => handleCompanySelect(key)}
                  >
                    <CardContent className="p-6 text-center">
                      <div className={`w-16 h-16 bg-${company.color} rounded-2xl flex items-center justify-center shadow-lg mx-auto mb-4`}>
                        <Building2 className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-white">
                        {company.name}
                      </h3>
                    </CardContent>
                  </Card>
                ))}
              </div>
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
              <Button
                variant="ghost"
                size="sm"
                onClick={() => {
                  // 현재 데이터 저장 후 회사 선택 화면으로
                  if (selectedCompany && currentCompany) {
                    const sessionId = localStorage.getItem('chatbot_session_id')
                    if (sessionId) {
                      saveCurrentCompanyData(messages, sessionId, selectedCompany, currentCompany)
                    }
                  }
                  setShowCompanySelection(true)
                }}
                className="text-gray-400 hover:text-white hover:bg-gray-800/50 transition-colors"
              >
                <ArrowRight className="w-4 h-4 rotate-180 mr-1" />
                회사 선택
              </Button>
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
                <div className={`w-2 h-2 rounded-full animate-pulse ${
                  isServerWarming ? 'bg-yellow-500' : 'bg-green-500'
                }`}></div>
                <span className={`font-medium ${
                  isServerWarming ? 'text-yellow-400' : 'text-green-400'
                }`}>
                  {isServerWarming ? 'AI 에이전트 준비중...' : 'AI 에이전트 온라인'}
                </span>
              </div>
              <Badge className={`bg-${currentCompany?.color} text-white`}>
                <Sparkles className="w-3 h-3 mr-1" />
                {currentCompany?.name} 전용
              </Badge>
              <Button
                variant="ghost"
                size="sm"
                className="text-red-400 hover:text-red-300 hover:bg-red-500/10"
                onClick={handleRestartChat}
              >
                <RefreshCw className="w-3 h-3 mr-1" />
                새로 시작
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
              // Empty State
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
              // Messages
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
                          </div>
                        </div>

                        <div
                          className={`text-sm leading-relaxed font-medium ${
                            message.type === 'user' ? 'text-gray-200' : 'text-gray-100'
                          }`}
                        >
                          <ReactMarkdown
                            components={{
                              h1: ({ children }) => {
                                const title = String(children);
                                let icon = "📝";
                                let color = "text-white";
                                
                                if (title.includes("강점") || title.includes("경험")) {
                                  icon = "💪";
                                  color = "text-cyan-300";
                                } else if (title.includes("기술") || title.includes("스킬")) {
                                  icon = "🛠️";
                                  color = "text-yellow-300";
                                } else if (title.includes("목표") || title.includes("비전")) {
                                  icon = "🎯";
                                  color = "text-green-300";
                                } else if (title.includes("가치관") || title.includes("마인드")) {
                                  icon = "💡";
                                  color = "text-purple-300";
                                } else if (title.includes("프로젝트")) {
                                  icon = "📦";
                                  color = "text-orange-300";
                                } else if (title.includes("기여") || title.includes("회사")) {
                                  icon = "🏢";
                                  color = "text-blue-300";
                                }
                                
                                return (
                                  <div className="mt-8 mb-4">
                                    <h1 className={`text-xl font-bold ${color} mb-4 flex items-center gap-2 bg-gray-800/50 rounded-lg p-3 border-l-4 border-cyan-500`}>
                                      <span className="text-2xl">{icon}</span>
                                      {children}
                                    </h1>
                                  </div>
                                );
                              },
                              h2: ({ children }) => {
                                const title = String(children);
                                let icon = "📝";
                                let color = "text-white";
                                
                                if (title.includes("강점") || title.includes("경험")) {
                                  icon = "💪";
                                  color = "text-cyan-300";
                                } else if (title.includes("기술") || title.includes("스킬")) {
                                  icon = "🛠️";
                                  color = "text-yellow-300";
                                } else if (title.includes("목표") || title.includes("비전")) {
                                  icon = "🎯";
                                  color = "text-green-300";
                                } else if (title.includes("가치관") || title.includes("마인드")) {
                                  icon = "💡";
                                  color = "text-purple-300";
                                } else if (title.includes("프로젝트")) {
                                  icon = "📦";
                                  color = "text-orange-300";
                                } else if (title.includes("기여") || title.includes("회사")) {
                                  icon = "🏢";
                                  color = "text-blue-300";
                                }
                                
                                return (
                                  <div className="mt-8 mb-4">
                                    <h2 className={`text-lg font-bold ${color} mb-4 flex items-center gap-2 bg-gray-800/50 rounded-lg p-3 border-l-4 border-cyan-500`}>
                                      <span className="text-xl">{icon}</span>
                                      {children}
                                    </h2>
                                  </div>
                                );
                              },
                              h3: ({ children }) => {
                                const title = String(children);
                                let icon = "📝";
                                let color = "text-white";
                                
                                if (title.includes("강점") || title.includes("경험")) {
                                  icon = "☝️";
                                  color = "text-cyan-300";
                                } else if (title.includes("기술") || title.includes("스킬")) {
                                  icon = "🛠️";
                                  color = "text-yellow-300";
                                } else if (title.includes("목표") || title.includes("비전")) {
                                  icon = "🎯";
                                  color = "text-green-300";
                                } else if (title.includes("가치관") || title.includes("마인드")) {
                                  icon = "💡";
                                  color = "text-purple-300";
                                } else if (title.includes("프로젝트")) {
                                  icon = "📦";
                                  color = "text-orange-300";
                                } else if (title.includes("기여") || title.includes("회사")) {
                                  icon = "🏢";
                                  color = "text-blue-300";
                                }
                                
                                return (
                                  <div className="mt-8 mb-4">
                                    <h3 className={`text-lg font-bold ${color} mb-4 flex items-center gap-2 bg-gray-800/50 rounded-lg p-3 border-l-4 border-cyan-500`}>
                                      <span className="text-xl">{icon}</span>
                                      {children}
                                    </h3>
                                  </div>
                                );
                              },
                              h4: ({ children }) => (
                                <h4 className="text-base font-bold text-blue-300 mb-2 mt-3 pl-2">
                                  {children}
                                </h4>
                              ),
                              p: ({ children }) => (
                                <p className="text-gray-200 leading-relaxed mb-3 bg-gray-900/30 rounded-md p-3 border border-gray-700/30">
                                  {children}
                                </p>
                              ),
                              strong: ({ children }) => (
                                <strong className="text-cyan-300 font-bold">
                                  {children}
                                </strong>
                              ),
                              em: ({ children }) => (
                                <em className="text-cyan-300 font-bold italic">
                                  {children}
                                </em>
                              ),
                              code: ({ children }) => (
                                <code className="bg-blue-900/30 text-blue-300 px-2 py-1 rounded text-sm">
                                  {children}
                                </code>
                              ),
                              ul: ({ children }) => (
                                <ul className="list-disc list-inside space-y-1 mb-3 text-gray-200">
                                  {children}
                                </ul>
                              ),
                              li: ({ children }) => (
                                <li className="text-gray-200">
                                  {children}
                                </li>
                              ),
                              blockquote: ({ children }) => (
                                <div className="bg-blue-900/20 border-l-4 border-blue-400 p-3 rounded-lg mb-3">
                                  {children}
                                </div>
                              ),
                              hr: () => (
                                <hr className="border-t border-blue-500/30 my-4" />
                              ),
                              a: ({ href, children }) => (
                                <a
                                  href={href}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="text-blue-400 hover:text-blue-300 underline font-semibold transition-colors duration-200"
                                >
                                  {children}
                                </a>
                              )
                            }}
                            rehypePlugins={[]}
                          >
                            {message.content}
                          </ReactMarkdown>
                        </div>

                        {/* 추천 링크 표시 */}
                        {message.type === 'ai' && message.links && Object.keys(message.links).length > 0 && (
                          <div className="mt-4 pt-4 border-t border-gray-700">
                            <div className="text-xs text-gray-400 mb-2">📌 관련 링크</div>
                            <div className="flex flex-wrap gap-2">
                              {Object.entries(message.links).map(([title, url]) => (
                                <a
                                  key={url}
                                  href={url}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="inline-flex items-center gap-1 px-3 py-1.5 bg-blue-900/30 hover:bg-blue-900/50 border border-blue-500/30 hover:border-blue-500/50 rounded-lg text-xs text-blue-300 hover:text-blue-200 transition-all duration-200"
                                >
                                  <span>{title}</span>
                                  <ArrowRight className="w-3 h-3" />
                                </a>
                              ))}
                            </div>
                          </div>
                        )}
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

      </div>
    </div>
  )
}
