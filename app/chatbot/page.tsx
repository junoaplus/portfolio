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
    sessionStorage.setItem('chatbot_current_company', company)
  }

  // 3. 회사별 데이터 키 생성
  const getCompanyDataKey = (company: string): string => {
    return `chatbot_data_${company}`
  }

  // 4. 회사별 데이터 저장
  const saveCompanyData = (company: string, data: any) => {
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

  // 7. 페이지 로드시 복구 함수
  const restoreFromSessionStorage = (): {
    shouldShowSelection: boolean,
    restoredData?: any
  } => {
    const currentCompany = getCurrentCompany()
    
    if (!currentCompany) {
      console.log('🆕 첫 방문 - 회사 선택 화면 표시')
      return { shouldShowSelection: true }
    }
    
    const savedData = loadCompanyData(currentCompany)
    if (savedData && savedData.messages?.length > 0) {
      console.log(`🔄 ${currentCompany} 데이터 복구`)
      return { shouldShowSelection: false, restoredData: savedData }
    }
    
    console.log('📋 저장된 데이터 없음 - 회사 선택 화면 표시')
    return { shouldShowSelection: true }
  }

  // 초기 복구 데이터 계산
  const initialRestore = restoreFromSessionStorage()

  const [showCompanySelection, setShowCompanySelection] = useState(initialRestore.shouldShowSelection)
  const [selectedCompany, setSelectedCompany] = useState<string>(
    initialRestore.restoredData?.selectedCompany || ''
  )
  const [currentCompany, setCurrentCompany] = useState<CompanyConfig | null>(
    initialRestore.restoredData?.currentCompany || null
  )
  const [messages, setMessages] = useState<Message[]>(
    initialRestore.restoredData?.messages || []
  )
  const [inputValue, setInputValue] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const [isServerWarming, setIsServerWarming] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  const quickQuestions = [
    '어떤 AI 프로젝트를 했나요?',
    '기술 스택이 궁금해요',
    '왜 AI 엔지니어가 되고 싶나요?',
    '협업 경험을 알려주세요',
    '가장 도전적이었던 프로젝트는?',
  ]

  const getInitialMessage = (companyKey: string): string => {
    if (companyKey === "nuua") {
      return `# 누아 AI 에이전트 개발자 황준호

**지금 이 순간 면접관님과 대화하고 있는 이 AI 시스템이 제가 구축한 멀티 에이전트 포트폴리오입니다**

## 왜 저는 누아에 최적의 인재일까요?

자동화와 구조화 솔루션 개발을 정말 좋아하고 잘하는 개발자입니다. 복잡한 업무를 AI로 자동화하고, 비정형 데이터를 체계적으로 정리하는 일에 큰 보람을 느끼며, 이는 누아의 여행사 업무 자동화 철학과 완벽히 일치합니다.

## 누아가 원하는 AI 에이전트 개발 경험

🤖 **AI 에이전트 설계 및 구현**: LangGraph 멀티 에이전트 시스템  
   5개 전문 에이전트가 협업하는 자동화 시스템 구축  
   Intent Router → 전문 에이전트 자동 라우팅으로 업무 자동화  
   👉 [이 프로젝트 자세히 보기](/ai-chatbot-portfolio)

📊 **비정형 데이터 구조화**: 데이트 코스 AI 추천  
   PySpark로 4개 API 20만개 비정형 데이터 → 9만개 정제  
   카테고리 자동 분류, 중복 제거, 데이터 표준화 파이프라인  
   👉 [이 프로젝트 자세히 보기](/date-recommendation)

🔧 **업무 자동화 툴 개발**: 보드게임 RAG 챗봇  
   217개 게임 룰 설명 자동화 (수작업 → AI 자동 응답)  
   QA 데이터 자동 수집 → 재학습 → 서비스 개선 루프 구축  
   👉 [이 프로젝트 자세히 보기](/boardgame-chatbot)

⚡ **대규모 데이터 처리**: 89,321개 장소 실시간 검색  
   벡터DB + 카테고리 필터링으로 300ms 내 응답  
   병렬 처리 + 인메모리 캐싱으로 33초→3.4초 성능 개선  
   👉 [이 프로젝트 자세히 보기](/date-recommendation)

💡 **문제 해결 능력**: 신문 이탈 예측 ML  
   클래스 불균형, 과적합 등 복잡한 문제 논리적 해결  
   87% F1-Score 달성으로 실질적 비즈니스 가치 창출  
   👉 [이 프로젝트 자세히 보기](/newspaper-churn)

🎯 **성실함과 꾸준함**: E-commerce 사업 운영  
   2023년 8월 직접 사업 운영하며 실무 문제 체감  
   네이버/쿠팡 알고리즘 분석 → AI 자동화 필요성 인식  
   👉 [사업 운영 경험 자세히 보기](/about#ecommerce)

## 질문 방법
이 시스템은 라우터에서 기술에이전트, 프로젝트에이전트, 저의 정보에이전트로 구성되어 있습니다.

- 기술에이전트는 기술 관련 질문에 대해 답변합니다.
- 프로젝트에이전트는 프로젝트 관련 질문에 대해 답변합니다.
- 저의 정보에이전트는 저의 정보에 대해 답변합니다.

참고하시여 여러 질문들을 많이 해주세요!

## "당연해야 할 것들에 도전"하는 누아와 함께하고 싶습니다.`;
    
    } else if (companyKey === "lbox") {
      return `# 엘박스 Machine Learning Engineer 황준호

**지금 이 순간 면접관님과 대화하고 있는 이 AI 시스템이 제가 구축한 멀티 에이전트 포트폴리오입니다**

## 왜 저는 엘박스에 최적의 인재일까요?

체계적이고 완벽하게 정리된 데이터를 다루는 것을 정말 좋아하는 개발자입니다. 판례나 법률 같은 잘 구조화된 정보로 RAG 시스템을 구축하는 일이 너무 매력적이며, 법률 데이터의 완성도 높은 특성이 제 성향과 완벽하게 맞습니다.

## 엘박스가 원하는 LLM/RAG 시스템 구축 경험

🤖 **LLM/RAG 시스템 설계**: LangGraph 멀티 에이전트 포트폴리오  
   Intent Router + 5개 전문 에이전트로 RAG 파이프라인 구축  
   질문 의도 자동 분류 → 전문 지식 검색 → 컨텍스트 기반 응답  
   👉 [이 프로젝트 자세히 보기](/ai-chatbot-portfolio)

🔍 **검색 모델 최적화**: 데이트 코스 추천 벡터 검색  
   Qdrant 벡터DB + 151개 카테고리 필터링으로 89K 장소 실시간 검색  
   300ms 내 개인화 추천으로 검색 성능 최적화  
   👉 [이 프로젝트 자세히 보기](/date-recommendation)

🤖 **LLM 파인튜닝**: 보드게임 전문 지식 RAG 챗봇  
   EXAONE 모델 파인튜닝 + FAISS 벡터 검색  
   217개 게임 룰 자동 응답으로 전문 지식 AI 시스템 구축  
   👉 [이 프로젝트 자세히 보기](/boardgame-chatbot)

⚙️ **ML 파이프라인 구축**: 신문 이탈 예측 시스템  
   데이터 수집 → 전처리 → 모델링 → 배포 End-to-End 파이프라인  
   87% F1-Score로 TOP 50 위험고객 실시간 분석 시스템  
   👉 [이 프로젝트 자세히 보기](/newspaper-churn)

🏗️ **전체 시스템 설계**: FastAPI + React 풀스택  
   백엔드 API 설계, 프론트엔드 연동, 데이터베이스 스키마 설계  
   전체 아키텍처 설계 및 구현 경험  

## 질문 방법
이 시스템은 라우터에서 기술에이전트, 프로젝트에이전트, 저의 정보에이전트로 구성되어 있습니다.

- 기술에이전트는 기술 관련 질문에 대해 답변합니다.
- 프로젝트에이전트는 프로젝트 관련 질문에 대해 답변합니다.
- 저의 정보에이전트는 저의 정보에 대해 답변합니다.

참고하시여 여러 질문들을 많이 해주세요!

## 법을 사람들에게 더 가깝게 만드는 국내 1위 리걸테크의 미션에 함께하고 싶습니다.`;
    
    } else if (companyKey === "estsoft") {
      return `# 이스트소프트 LLM Engineer 황준호

**지금 이 순간 면접관님과 대화하고 있는 이 AI 시스템이 제가 구축한 멀티 에이전트 포트폴리오입니다**

## 왜 저는 이스트소프트에 최적의 인재일까요?

LLM 개발과 실용적인 AI 서비스 구축 경험이 있는 개발자입니다. 일상의 불편함을 AI로 해결하는 실용주의적 접근을 추구하며, 이는 이스트소프트의 "실용주의 인공지능으로 일상에 편리함을 더하다"는 철학과 정확히 일치합니다.

## 이스트소프트가 원하는 LLM 개발 경험

🤖 **LLM 모델 연구 및 개발**: LangGraph 멀티 에이전트 시스템  
   Intent Router + 5개 전문 에이전트로 LLM 기반 자동 응답 시스템 구축  
   질문 의도 분류부터 전문 지식 검색까지 End-to-End 구현  
   👉 [이 프로젝트 자세히 보기](/ai-chatbot-portfolio)

🔧 **OpenLLM 학습 및 파인튜닝**: 보드게임 전문 지식 RAG 챗봇  
   EXAONE 모델 파인튜닝으로 217개 게임 룰 전문 응답 생성  
   FAISS 벡터 검색 + LLM으로 고퀄리티 자연어 답변 구현  
   👉 [이 프로젝트 자세히 보기](/boardgame-chatbot)

⚡ **LLM 최적화**: 데이트 코스 추천 시스템  
   응답 속도 33초 → 3.4초로 90% 성능 개선  
   Qdrant 벡터DB + 병렬 처리로 89K 데이터 실시간 검색  
   👉 [이 프로젝트 자세히 보기](/date-recommendation)

🛠️ **Azure 클라우드 경험**: 신문 이탈 예측 ML 파이프라인  
   데이터 수집 → 전처리 → 모델링 → 배포 클라우드 파이프라인  
   87% F1-Score 달성으로 실질적 비즈니스 가치 창출  
   👉 [이 프로젝트 자세히 보기](/newspaper-churn)

🚀 **프로토타입 개발**: FastAPI + React 풀스택  
   AI 서비스 전체 아키텍처 설계 및 프로토타입 구현  
   Docker 컨테이너화로 배포 환경 표준화

## 질문 방법
이 시스템은 라우터에서 기술에이전트, 프로젝트에이전트, 저의 정보에이전트로 구성되어 있습니다.

- 기술에이전트는 기술 관련 질문에 대해 답변합니다.
- 프로젝트에이전트는 프로젝트 관련 질문에 대해 답변합니다.
- 저의 정보에이전트는 저의 정보에 대해 답변합니다.

참고하시여 여러 질문들을 많이 해주세요!

## "실용주의 인공지능으로 일상에 편리함을 더하는" 이스트소프트와 함께하고 싶습니다.`;
    
    } else if (companyKey === "liner") {
      return `# 라이너 ML Engineer(Agent) 황준호

**지금 이 순간 면접관님과 대화하고 있는 이 챗봇이 제가 만든 3번째 챗봇 프로젝트입니다**

## 왜 저는 라이너에 최적의 인재일까요?

챗봇을 만드는 것을 정말 좋아하는 개발자입니다. 지금까지 3개의 서로 다른 챗봇을 만들어봤고, 각각 다른 도전과 재미가 있었습니다. 라이너의 AI Search Agent와 Research Agent도 결국 사용자에게 정확한 정보를 찾아주는 챗봇의 확장된 형태라고 생각합니다.

## 제가 만든 3개 챗봇 프로젝트 경험

🤖 **AI 포트폴리오 챗봇 (지금 이 시스템)**  
   LangGraph 멀티 에이전트로 질문 자동 분류 및 전문 에이전트 협업  
   기술/프로젝트/개인/문제해결/부적절 5가지 의도 파악 시스템  
   👉 [이 프로젝트 자세히 보기](/ai-chatbot-portfolio)

🎯 **데이트 코스 추천 챗봇**  
   Qdrant Vector DB로 89,321개 장소 검색하는 추천 시스템  
   응답 시간 33초 → 3.4초로 10배 성능 개선 (실제 사용 가능한 수준까지)  
   👉 [이 프로젝트 자세히 보기](/date-recommendation)

🎲 **보드게임 룰 설명 챗봇**  
   217개 보드게임 복잡한 룰을 정확하게 설명하는 RAG 시스템  
   EXAONE 파인튜닝 + FAISS 벡터 검색으로 정확도 극대화  
   👉 [이 프로젝트 자세히 보기](/boardgame-chatbot)

## 이 경험들이 라이너에서 어떻게 활용될까요?

✅ **질문 의도 파악**: 포트폴리오 챗봇의 5가지 분류 경험을 더 복잡한 검색 의도 분석으로 확장  
✅ **검색 성능 최적화**: 데이트 코스 챗봇의 10배 속도 개선 경험을 10M+ 사용자 규모로 적용  
✅ **정확한 정보 제공**: 보드게임 룰 챗봇의 정확성 중시 경험을 신뢰할 수 있는 AI로 발전

## 질문 방법
이 시스템은 라우터에서 기술에이전트, 프로젝트에이전트, 저의 정보에이전트로 구성되어 있습니다.

- 기술에이전트는 기술 관련 질문에 대해 답변합니다.
- 프로젝트에이전트는 프로젝트 관련 질문에 대해 답변합니다.
- 저의 정보에이전트는 저의 정보에 대해 답변합니다.

**챗봇 개발 경험에 대해 궁금한 것이 있으시면 언제든 질문해주세요!**

## 3개 챗봇 경험으로 라이너의 "세상에서 가장 신뢰할 수 있는 AI"를 함께 만들고 싶습니다.`;

    } else {
      return `**안녕하세요! AI/ML 엔지니어 황준호입니다!**

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

**실전 프로젝트를 통해 AI 기술의 비즈니스 적용 경험을 쌓아왔습니다:**

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🎯 데이트 코스 AI 추천 시스템 (최고 완성도)
→ 89,321개 장소 DB + Qdrant Vector DB로 실시간 개인화 추천
→ 벡터 DB 인메모리 최적화로 33초→3.4초 성능 향상 달성
→ 3개 독립 마이크로서비스 + PySpark ETL + Redis 캐싱으로 확장성 확보

🤖 보드게임 RAG 챗봇
→ EXAONE 파인튜닝 + 217개 게임별 FAISS 벡터 검색 시스템
→ LangChain 대화 관리 + 자동 세션 시스템 구현

📊 이탈/퇴사 예측 ML 시스템
→ 8가지 알고리즘 비교로 87% F1-Score 달성  
→ SMOTE/Faker 데이터 증강으로 클래스 불균형 해결 + Feature Importance 분석

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

**궁금한 프로젝트나 기술이 있으시면 언제든 질문해주세요!**

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

**각 프로젝트 링크를 클릭하시면 더 자세한 기술적 구현 내용과 성과를 확인하실 수 있습니다.**`;
    }
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
        const initialMessage = getInitialMessage(companyKey)
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
    const restored = initialRestore.restoredData
    if (restored && restored.sessionId) {
      console.log('🔍 복구된 세션 검증 중...')
      validateRestoredSession(restored.sessionId, restored.selectedCompany)
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
        const initialMessage = getInitialMessage(selectedCompany)
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