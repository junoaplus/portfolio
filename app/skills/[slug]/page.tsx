'use client'

import { Navigation } from '@/components/navigation'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import {
  ArrowLeft,
  Star,
  Award,
  TrendingUp,
  ExternalLink,
  Bot,
  Code,
  Target,
  Rocket,
  Brain,
  BookOpen,
  Lightbulb,
} from 'lucide-react'
import Link from 'next/link'
import { notFound } from 'next/navigation'

// 기술 데이터 (실제로는 데이터베이스나 API에서 가져올 것)
const techData = {
  'multi-agent-systems': {
    name: 'Multi-Agent Systems',
    level: 90,
    category: 'AI/ML',
    icon: Bot,
    experience: '1년+',
    description: 'LangGraph를 활용한 멀티 에이전트 시스템 설계 및 구현',
    longDescription:
      '복잡한 AI 워크플로우를 여러 전문화된 에이전트가 협업하여 처리하는 시스템을 구축합니다. 각 에이전트는 특정 역할을 담당하며, 상태 관리와 메시지 전달을 통해 효율적으로 협업합니다.',
    achievements: [
      '복잡한 워크플로우 자동화',
      '에이전트 간 협업 최적화',
      '상태 관리 시스템 구축',
    ],
    nextGoals: [
      '대규모 에이전트 시스템 구축',
      '성능 최적화',
      '실시간 협업 강화',
    ],
    relatedProjects: [
      {
        id: 1,
        title: 'AI 챗봇 포트폴리오',
        description: 'LangGraph 멀티 에이전트로 구축한 인터랙티브 포트폴리오',
        role: '핵심 기술로 사용',
        impact: '사용자 질문을 여러 에이전트가 협업하여 처리',
        techUsage: [
          '에이전트 워크플로우 설계',
          '상태 관리',
          '에이전트 간 통신',
        ],
      },
    ],
    learningPath: [
      {
        phase: '기초 학습',
        description: 'LangGraph 기본 개념 이해',
        duration: '1개월',
      },
      {
        phase: '실습 프로젝트',
        description: '간단한 멀티 에이전트 시스템 구축',
        duration: '2개월',
      },
      {
        phase: '고도화',
        description: '복잡한 워크플로우 구현',
        duration: '진행 중',
      },
    ],
    resources: [
      { title: 'LangGraph 공식 문서', type: '문서', url: '#' },
      { title: 'Multi-Agent Systems Course', type: '강의', url: '#' },
      { title: 'AI Agent Patterns', type: '블로그', url: '#' },
    ],
    skills: {
      core: ['LangGraph', 'Agent Design', 'Workflow Orchestration'],
      supporting: ['Python', 'OpenAI API', 'State Management'],
      tools: ['LangSmith', 'LangServe', 'Jupyter Notebook'],
    },
  },
  'langgraph-orchestration': {
    name: 'LangGraph Orchestration',
    level: 85,
    category: 'AI/ML',
    icon: Brain,
    experience: '1년',
    description: 'AI 에이전트 워크플로우 오케스트레이션 전문',
    longDescription:
      'LangGraph를 사용하여 복잡한 AI 워크플로우를 설계하고 관리합니다. 조건부 분기, 병렬 처리, 에러 핸들링 등을 포함한 견고한 AI 시스템을 구축할 수 있습니다.',
    achievements: [
      '상태 관리 최적화',
      '에이전트 협업 로직 구현',
      '워크플로우 시각화',
    ],
    nextGoals: [
      '복잡한 비즈니스 로직 구현',
      '실시간 처리 최적화',
      '모니터링 시스템 구축',
    ],
    relatedProjects: [
      {
        id: 1,
        title: 'AI 챗봇 포트폴리오',
        description: 'LangGraph로 구축한 멀티 에이전트 챗봇',
        role: '워크플로우 엔진',
        impact: '복잡한 질문을 단계별로 처리',
        techUsage: ['그래프 설계', '상태 전이', '조건부 라우팅'],
      },
      {
        id: 3,
        title: '보드게임 룰 챗봇',
        description: '게임 규칙을 단계별로 설명하는 AI',
        role: '설명 워크플로우',
        impact: '복잡한 규칙을 이해하기 쉽게 분해',
        techUsage: ['순차적 설명', '사용자 피드백 처리', '컨텍스트 관리'],
      },
    ],
    learningPath: [
      {
        phase: '기본 그래프',
        description: '간단한 워크플로우 구축',
        duration: '2주',
      },
      {
        phase: '고급 패턴',
        description: '조건부 분기와 병렬 처리',
        duration: '1개월',
      },
      {
        phase: '프로덕션',
        description: '에러 핸들링과 모니터링',
        duration: '진행 중',
      },
    ],
    resources: [
      { title: 'LangGraph Tutorial', type: '튜토리얼', url: '#' },
      { title: 'Workflow Patterns', type: '가이드', url: '#' },
      { title: 'LangGraph Examples', type: '예제', url: '#' },
    ],
    skills: {
      core: ['LangGraph', 'Workflow Design', 'State Management'],
      supporting: ['Python', 'Async Programming', 'Error Handling'],
      tools: ['LangSmith', 'Streamlit', 'FastAPI'],
    },
  },
  'next-js': {
    name: 'Next.js',
    level: 90,
    category: 'Frontend',
    icon: Rocket,
    experience: '2년+',
    description: 'App Router, SSR/SSG, API Routes 전문',
    longDescription:
      'Next.js 13+ App Router를 활용한 현대적인 웹 애플리케이션 개발에 능숙합니다. Server Components, Client Components를 적절히 활용하여 성능 최적화된 애플리케이션을 구축합니다.',
    achievements: [
      'Lighthouse 90+ 점수',
      '성능 최적화',
      'SEO 최적화',
      '타입 안전성 확보',
    ],
    nextGoals: [
      'Server Components 심화',
      'Edge Runtime 활용',
      'Streaming 최적화',
    ],
    relatedProjects: [
      {
        id: 1,
        title: 'AI 챗봇 포트폴리오',
        description: '현재 보고 계신 포트폴리오 사이트',
        role: '프론트엔드 프레임워크',
        impact: '빠른 로딩과 SEO 최적화',
        techUsage: [
          'App Router',
          'Server Components',
          'API Routes',
          'Middleware',
        ],
      },
      {
        id: 2,
        title: '데이트 코스 추천 AI',
        description: 'React 기반 사용자 인터페이스',
        role: '프론트엔드 개발',
        impact: '반응형 UI와 실시간 업데이트',
        techUsage: ['Pages Router', 'API Routes', 'Dynamic Routing'],
      },
    ],
    learningPath: [
      { phase: '기초', description: 'React와 Next.js 기본', duration: '3개월' },
      { phase: '중급', description: 'SSR/SSG와 최적화', duration: '6개월' },
      {
        phase: '고급',
        description: 'App Router와 Server Components',
        duration: '진행 중',
      },
    ],
    resources: [
      { title: 'Next.js 공식 문서', type: '문서', url: '#' },
      { title: 'Next.js 13 마스터 클래스', type: '강의', url: '#' },
      { title: 'Vercel Blog', type: '블로그', url: '#' },
    ],
    skills: {
      core: ['Next.js', 'React', 'TypeScript'],
      supporting: ['Tailwind CSS', 'Vercel', 'API Design'],
      tools: ['VS Code', 'Vercel CLI', 'Next.js DevTools'],
    },
  },
  langgraph: {
    name: 'LangGraph',
    level: 90,
    category: 'AI/ML',
    icon: Brain,
    experience: '1년+',
    description: 'AI 에이전트 워크플로우 오케스트레이션 전문',
    longDescription:
      'LangGraph를 사용하여 복잡한 AI 워크플로우를 설계하고 관리합니다. 조건부 분기, 병렬 처리, 에러 핸들링 등을 포함한 견고한 AI 시스템을 구축할 수 있습니다.',
    achievements: [
      '상태 관리 최적화',
      '에이전트 협업 로직 구현',
      '워크플로우 시각화',
    ],
    nextGoals: [
      '복잡한 비즈니스 로직 구현',
      '실시간 처리 최적화',
      '모니터링 시스템 구축',
    ],
    relatedProjects: [
      {
        id: 1,
        title: 'AI 챗봇 포트폴리오',
        description: 'LangGraph로 구축한 멀티 에이전트 챗봇',
        role: '워크플로우 엔진',
        impact: '복잡한 질문을 단계별로 처리',
        techUsage: ['그래프 설계', '상태 전이', '조건부 라우팅'],
      },
    ],
    learningPath: [
      {
        phase: '기본 그래프',
        description: '간단한 워크플로우 구축',
        duration: '2주',
      },
      {
        phase: '고급 패턴',
        description: '조건부 분기와 병렬 처리',
        duration: '1개월',
      },
      {
        phase: '프로덕션',
        description: '에러 핸들링과 모니터링',
        duration: '진행 중',
      },
    ],
    resources: [
      { title: 'LangGraph Tutorial', type: '튜토리얼', url: '#' },
      { title: 'Workflow Patterns', type: '가이드', url: '#' },
      { title: 'LangGraph Examples', type: '예제', url: '#' },
    ],
    skills: {
      core: ['LangGraph', 'Workflow Design', 'State Management'],
      supporting: ['Python', 'Async Programming', 'Error Handling'],
      tools: ['LangSmith', 'Streamlit', 'FastAPI'],
    },
  },
  langchain: {
    name: 'LangChain',
    level: 85,
    category: 'AI/ML',
    icon: Brain,
    experience: '1년',
    description: 'LLM 애플리케이션 개발 프레임워크',
    longDescription:
      'LangChain을 활용하여 LLM 기반 애플리케이션을 구축합니다. 체인, 에이전트, 메모리 관리 등 다양한 컴포넌트를 조합하여 복잡한 AI 워크플로우를 만들 수 있습니다.',
    achievements: ['체인 최적화', '메모리 관리', '에이전트 구현'],
    nextGoals: ['고급 체인 패턴', '커스텀 도구 개발', '성능 최적화'],
    relatedProjects: [
      {
        id: 1,
        title: 'AI 챗봇 포트폴리오',
        description: 'LangChain 기반 대화형 AI',
        role: '핵심 프레임워크',
        impact: '자연스러운 대화 처리',
        techUsage: ['체인 구성', '메모리 관리', '프롬프트 엔지니어링'],
      },
    ],
    learningPath: [
      { phase: '기초', description: 'LangChain 기본 개념', duration: '2주' },
      { phase: '실습', description: '체인과 에이전트 구현', duration: '1개월' },
      {
        phase: '고급',
        description: '복잡한 워크플로우 구축',
        duration: '진행 중',
      },
    ],
    resources: [
      { title: 'LangChain 공식 문서', type: '문서', url: '#' },
      { title: 'LangChain Cookbook', type: '예제', url: '#' },
    ],
    skills: {
      core: ['LangChain', 'Chain Design', 'Agent Development'],
      supporting: ['Python', 'OpenAI API', 'Prompt Engineering'],
      tools: ['LangSmith', 'Jupyter', 'Streamlit'],
    },
  },
  'multi-agent': {
    name: 'Multi-Agent Systems',
    level: 90,
    category: 'AI/ML',
    icon: Bot,
    experience: '1년+',
    description: '멀티 에이전트 시스템 설계 및 구현',
    longDescription:
      '여러 AI 에이전트가 협업하여 복잡한 작업을 수행하는 시스템을 구축합니다. 각 에이전트의 역할 분담, 통신 프로토콜, 협업 전략을 설계할 수 있습니다.',
    achievements: [
      '에이전트 협업 최적화',
      '역할 분담 설계',
      '통신 프로토콜 구현',
    ],
    nextGoals: ['대규모 에이전트 관리', '동적 역할 할당', '성능 모니터링'],
    relatedProjects: [
      {
        id: 1,
        title: 'AI 챗봇 포트폴리오',
        description: '멀티 에이전트 기반 질의응답 시스템',
        role: '핵심 아키텍처',
        impact: '전문화된 에이전트들의 협업',
        techUsage: ['에이전트 설계', '역할 분담', '협업 로직'],
      },
    ],
    learningPath: [
      { phase: '기초', description: '에이전트 개념 이해', duration: '3주' },
      {
        phase: '구현',
        description: '간단한 멀티 에이전트 시스템',
        duration: '1개월',
      },
      {
        phase: '최적화',
        description: '성능 및 협업 최적화',
        duration: '진행 중',
      },
    ],
    resources: [
      { title: 'Multi-Agent Systems', type: '서적', url: '#' },
      { title: 'Agent Communication', type: '논문', url: '#' },
    ],
    skills: {
      core: ['Agent Design', 'Multi-Agent Architecture', 'Coordination'],
      supporting: ['Python', 'Distributed Systems', 'State Management'],
      tools: ['LangGraph', 'Ray', 'Celery'],
    },
  },
  mcp: {
    name: 'MCP (Model Context Protocol)',
    level: 80,
    category: 'AI/ML',
    icon: Code,
    experience: '6개월',
    description: 'AI 모델과 도구 간 연결 프로토콜',
    longDescription:
      'MCP를 사용하여 AI 모델이 외부 도구와 데이터 소스에 안전하게 접근할 수 있는 시스템을 구축합니다. 표준화된 프로토콜을 통해 확장 가능한 AI 애플리케이션을 만들 수 있습니다.',
    achievements: ['프로토콜 구현', '도구 연동', '보안 설정'],
    nextGoals: ['커스텀 서버 개발', '고급 보안 설정', '성능 최적화'],
    relatedProjects: [
      {
        id: 1,
        title: 'AI 챗봇 포트폴리오',
        description: 'MCP를 통한 외부 도구 연동',
        role: '도구 연결 레이어',
        impact: '안전한 외부 서비스 접근',
        techUsage: ['서버 설정', '클라이언트 구성', '보안 관리'],
      },
    ],
    learningPath: [
      { phase: '기초', description: 'MCP 프로토콜 이해', duration: '2주' },
      {
        phase: '구현',
        description: '기본 서버/클라이언트 구축',
        duration: '3주',
      },
      { phase: '응용', description: '복잡한 도구 연동', duration: '진행 중' },
    ],
    resources: [
      { title: 'MCP Specification', type: '문서', url: '#' },
      { title: 'MCP Examples', type: '예제', url: '#' },
    ],
    skills: {
      core: ['MCP Protocol', 'Server Development', 'Tool Integration'],
      supporting: ['Python', 'JSON-RPC', 'Security'],
      tools: ['MCP SDK', 'Claude Desktop', 'VS Code'],
    },
  },
  'vector-db': {
    name: 'Vector Database',
    level: 85,
    category: 'AI/ML',
    icon: Database,
    experience: '1년',
    description: '벡터 데이터베이스 설계 및 최적화',
    longDescription:
      'Supabase pgvector, Pinecone, Chroma 등 다양한 벡터 데이터베이스를 활용하여 임베딩 기반 검색 시스템을 구축합니다. 성능 최적화와 스케일링 전략을 수립할 수 있습니다.',
    achievements: ['검색 성능 최적화', '인덱싱 전략 수립', '스케일링 구현'],
    nextGoals: ['대용량 데이터 처리', '실시간 업데이트', '하이브리드 검색'],
    relatedProjects: [
      {
        id: 1,
        title: 'AI 챗봇 포트폴리오',
        description: '벡터 검색 기반 RAG 시스템',
        role: '검색 엔진',
        impact: '정확한 정보 검색 및 제공',
        techUsage: ['임베딩 생성', '유사도 검색', '성능 최적화'],
      },
    ],
    learningPath: [
      { phase: '기초', description: '벡터 데이터베이스 개념', duration: '2주' },
      { phase: '구현', description: '검색 시스템 구축', duration: '1개월' },
      { phase: '최적화', description: '성능 튜닝', duration: '진행 중' },
    ],
    resources: [
      { title: 'Vector Databases Guide', type: '가이드', url: '#' },
      { title: 'Embedding Best Practices', type: '블로그', url: '#' },
    ],
    skills: {
      core: ['Vector Search', 'Embedding', 'Database Design'],
      supporting: ['PostgreSQL', 'Machine Learning', 'Performance Tuning'],
      tools: ['Supabase', 'Pinecone', 'Chroma'],
    },
  },
  rag: {
    name: 'RAG (Retrieval Augmented Generation)',
    level: 85,
    category: 'AI/ML',
    icon: Database,
    experience: '1년',
    description: '검색 증강 생성 시스템 구축',
    longDescription:
      'RAG 시스템을 통해 외부 지식을 활용한 AI 응답 생성 시스템을 구축합니다. 벡터 검색과 생성 모델을 결합하여 정확하고 신뢰할 수 있는 AI 서비스를 만들 수 있습니다.',
    achievements: [
      '95% 정확도 달성',
      '벡터 검색 최적화',
      '실시간 지식 업데이트',
    ],
    nextGoals: ['하이브리드 검색 시스템', '멀티모달 RAG', '지식 그래프 연동'],
    relatedProjects: [
      {
        id: 1,
        title: 'AI 챗봇 포트폴리오',
        description: 'RAG 기반 질의응답 시스템',
        role: '핵심 검색 엔진',
        impact: '정확한 정보 검색 및 응답 생성',
        techUsage: ['문서 임베딩', '유사도 검색', '컨텍스트 생성'],
      },
    ],
    learningPath: [
      { phase: '기초', description: 'RAG 개념과 구조 이해', duration: '2주' },
      { phase: '구현', description: '기본 RAG 시스템 구축', duration: '1개월' },
      {
        phase: '최적화',
        description: '성능 및 정확도 개선',
        duration: '진행 중',
      },
    ],
    resources: [
      { title: 'RAG Best Practices', type: '가이드', url: '#' },
      { title: 'Advanced RAG Techniques', type: '논문', url: '#' },
    ],
    skills: {
      core: ['RAG Architecture', 'Information Retrieval', 'Text Generation'],
      supporting: [
        'Vector Databases',
        'Embedding Models',
        'Prompt Engineering',
      ],
      tools: ['LangChain', 'Chroma', 'OpenAI API'],
    },
  },
  fastapi: {
    name: 'FastAPI',
    level: 80,
    category: 'Backend',
    icon: Rocket,
    experience: '1년+',
    description: '고성능 API 개발 프레임워크',
    longDescription:
      'FastAPI를 사용하여 높은 성능의 RESTful API를 구축합니다. 자동 문서화, 타입 힌팅, 비동기 처리 등 현대적인 백엔드 개발 기법을 활용할 수 있습니다.',
    achievements: [
      '자동 문서화 구현',
      '비동기 처리 최적화',
      '타입 안전성 확보',
    ],
    nextGoals: ['마이크로서비스 아키텍처', '실시간 API', '성능 모니터링'],
    relatedProjects: [
      {
        id: 2,
        title: '데이트 코스 추천 AI',
        description: 'FastAPI 기반 백엔드 서버',
        role: 'API 서버',
        impact: '빠른 응답 속도와 확장성',
        techUsage: ['RESTful API', '비동기 처리', '데이터베이스 연동'],
      },
    ],
    learningPath: [
      { phase: '기초', description: 'FastAPI 기본 개념', duration: '1주' },
      { phase: '실습', description: 'API 설계 및 구현', duration: '3주' },
      { phase: '고급', description: '성능 최적화', duration: '진행 중' },
    ],
    resources: [
      { title: 'FastAPI 공식 문서', type: '문서', url: '#' },
      { title: 'FastAPI Best Practices', type: '가이드', url: '#' },
    ],
    skills: {
      core: ['FastAPI', 'API Design', 'Async Programming'],
      supporting: ['Python', 'SQLAlchemy', 'Pydantic'],
      tools: ['Uvicorn', 'Docker', 'PostgreSQL'],
    },
  },
  supabase: {
    name: 'Supabase',
    level: 75,
    category: 'Backend',
    icon: Database,
    experience: '1년',
    description: '오픈소스 Firebase 대안',
    longDescription:
      'Supabase를 활용하여 백엔드 인프라를 구축합니다. PostgreSQL 기반의 실시간 데이터베이스, 인증, 스토리지 등을 통합적으로 관리할 수 있습니다.',
    achievements: [
      '실시간 데이터 동기화',
      '벡터 검색 구현',
      '인증 시스템 구축',
    ],
    nextGoals: ['고급 쿼리 최적화', '실시간 기능 확장', '보안 강화'],
    relatedProjects: [
      {
        id: 1,
        title: 'AI 챗봇 포트폴리오',
        description: 'Supabase pgvector를 활용한 벡터 검색',
        role: '데이터베이스',
        impact: '빠른 벡터 검색과 실시간 업데이트',
        techUsage: ['pgvector', '실시간 구독', 'SQL 쿼리'],
      },
    ],
    learningPath: [
      { phase: '기초', description: 'Supabase 기본 설정', duration: '1주' },
      { phase: '실습', description: '데이터베이스 설계', duration: '2주' },
      { phase: '고급', description: '성능 최적화', duration: '진행 중' },
    ],
    resources: [
      { title: 'Supabase 공식 문서', type: '문서', url: '#' },
      { title: 'Supabase Tutorials', type: '튜토리얼', url: '#' },
    ],
    skills: {
      core: ['Supabase', 'PostgreSQL', 'Real-time Database'],
      supporting: ['SQL', 'Authentication', 'pgvector'],
      tools: ['Supabase CLI', 'pgAdmin', 'PostgREST'],
    },
  },
  typescript: {
    name: 'TypeScript',
    level: 85,
    category: 'Frontend',
    icon: Code,
    experience: '2년+',
    description: '타입 안전성을 제공하는 JavaScript 슈퍼셋',
    longDescription:
      'TypeScript를 활용하여 대규모 JavaScript 애플리케이션을 안전하고 효율적으로 개발합니다. 정적 타입 검사를 통해 런타임 에러를 방지하고 코드 품질을 향상시킬 수 있습니다.',
    achievements: ['타입 에러 90% 감소', '개발 생산성 향상', '코드 품질 개선'],
    nextGoals: ['고급 타입 시스템', '제네릭 활용', '타입 가드 패턴'],
    relatedProjects: [
      {
        id: 1,
        title: 'AI 챗봇 포트폴리오',
        description: 'TypeScript로 구축된 타입 안전한 프론트엔드',
        role: '타입 시스템',
        impact: '안정적인 코드베이스 구축',
        techUsage: ['인터페이스 설계', '타입 추론', '제네릭'],
      },
    ],
    learningPath: [
      { phase: '기초', description: 'TypeScript 기본 문법', duration: '2주' },
      { phase: '실습', description: 'React와 TypeScript', duration: '1개월' },
      { phase: '고급', description: '고급 타입 패턴', duration: '진행 중' },
    ],
    resources: [
      { title: 'TypeScript 핸드북', type: '문서', url: '#' },
      { title: 'TypeScript Deep Dive', type: '서적', url: '#' },
    ],
    skills: {
      core: ['TypeScript', 'Type System', 'Static Analysis'],
      supporting: ['JavaScript', 'React', 'Node.js'],
      tools: ['VS Code', 'TSC', 'ESLint'],
    },
  },
  react: {
    name: 'React',
    level: 90,
    category: 'Frontend',
    icon: Code,
    experience: '3년+',
    description: '사용자 인터페이스 구축을 위한 JavaScript 라이브러리',
    longDescription:
      'React를 사용하여 복잡한 사용자 인터페이스를 구축합니다. 컴포넌트 기반 아키텍처, 상태 관리, 성능 최적화 등 현대적인 프론트엔드 개발을 수행할 수 있습니다.',
    achievements: [
      '재사용 가능한 컴포넌트 라이브러리',
      '성능 최적화',
      '상태 관리 시스템',
    ],
    nextGoals: ['React 19 새 기능', 'Concurrent Features', 'Server Components'],
    relatedProjects: [
      {
        id: 1,
        title: 'AI 챗봇 포트폴리오',
        description: 'React 기반 인터랙티브 UI',
        role: '프론트엔드 프레임워크',
        impact: '사용자 친화적인 인터페이스',
        techUsage: ['함수형 컴포넌트', 'Hooks', '상태 관리'],
      },
    ],
    learningPath: [
      { phase: '기초', description: 'React 기본 개념', duration: '3주' },
      { phase: '실습', description: '프로젝트 구축', duration: '2개월' },
      { phase: '고급', description: '성능 최적화', duration: '진행 중' },
    ],
    resources: [
      { title: 'React 공식 문서', type: '문서', url: '#' },
      { title: 'React 패턴', type: '가이드', url: '#' },
    ],
    skills: {
      core: ['React', 'JSX', 'Component Architecture'],
      supporting: ['JavaScript', 'HTML/CSS', 'State Management'],
      tools: ['Create React App', 'Vite', 'React DevTools'],
    },
  },
  nextjs: {
    name: 'Next.js',
    level: 90,
    category: 'Frontend',
    icon: Rocket,
    experience: '2년+',
    description: '프로덕션 React 애플리케이션을 위한 풀스택 프레임워크',
    longDescription:
      'Next.js를 사용하여 서버 사이드 렌더링, 정적 사이트 생성, API 라우트 등을 활용한 현대적인 웹 애플리케이션을 구축합니다. 성능 최적화와 SEO를 동시에 달성할 수 있습니다.',
    achievements: ['Lighthouse 90+ 점수', 'SEO 최적화', '성능 최적화'],
    nextGoals: [
      'Server Components 심화',
      'Edge Runtime 활용',
      'Streaming 최적화',
    ],
    relatedProjects: [
      {
        id: 1,
        title: 'AI 챗봇 포트폴리오',
        description: 'Next.js App Router 기반 포트폴리오',
        role: '풀스택 프레임워크',
        impact: '빠른 로딩과 SEO 최적화',
        techUsage: ['App Router', 'Server Components', 'API Routes'],
      },
    ],
    learningPath: [
      { phase: '기초', description: 'Next.js 기본 개념', duration: '2주' },
      { phase: '실습', description: '풀스택 애플리케이션', duration: '1개월' },
      { phase: '고급', description: '성능 최적화', duration: '진행 중' },
    ],
    resources: [
      { title: 'Next.js 공식 문서', type: '문서', url: '#' },
      { title: 'Next.js 베스트 프랙티스', type: '가이드', url: '#' },
    ],
    skills: {
      core: ['Next.js', 'React', 'Full-stack Development'],
      supporting: ['TypeScript', 'Node.js', 'Vercel'],
      tools: ['Next.js CLI', 'Vercel', 'React DevTools'],
    },
  },
  tailwind: {
    name: 'Tailwind CSS',
    level: 85,
    category: 'Frontend',
    icon: Cpu,
    experience: '2년+',
    description: '유틸리티 우선 CSS 프레임워크',
    longDescription:
      'Tailwind CSS를 사용하여 빠른 프로토타이핑과 일관된 디자인 시스템을 구축합니다. 유틸리티 클래스를 통해 효율적이고 유지보수 가능한 스타일링을 수행할 수 있습니다.',
    achievements: ['디자인 시스템 구축', '반응형 최적화', '개발 속도 향상'],
    nextGoals: [
      '커스텀 플러그인 개발',
      '디자인 토큰 시스템',
      '고급 애니메이션',
    ],
    relatedProjects: [
      {
        id: 1,
        title: 'AI 챗봇 포트폴리오',
        description: 'Tailwind CSS 기반 디자인 시스템',
        role: '스타일링 프레임워크',
        impact: '일관된 디자인과 빠른 개발',
        techUsage: ['유틸리티 클래스', '반응형 디자인', '커스텀 설정'],
      },
    ],
    learningPath: [
      { phase: '기초', description: 'Tailwind 기본 개념', duration: '1주' },
      { phase: '실습', description: '컴포넌트 스타일링', duration: '2주' },
      { phase: '고급', description: '커스터마이징', duration: '진행 중' },
    ],
    resources: [
      { title: 'Tailwind CSS 공식 문서', type: '문서', url: '#' },
      { title: 'Tailwind UI', type: '컴포넌트', url: '#' },
    ],
    skills: {
      core: ['Tailwind CSS', 'CSS', 'Design Systems'],
      supporting: ['HTML', 'JavaScript', 'Responsive Design'],
      tools: ['Tailwind CLI', 'PostCSS', 'VS Code Extensions'],
    },
  },
  docker: {
    name: 'Docker',
    level: 70,
    category: 'DevOps',
    icon: Cpu,
    experience: '1년+',
    description: '컨테이너화 플랫폼',
    longDescription:
      'Docker를 사용하여 애플리케이션을 컨테이너화하고 배포합니다. 개발, 테스트, 프로덕션 환경 간의 일관성을 보장하고 확장 가능한 인프라를 구축할 수 있습니다.',
    achievements: ['멀티 스테이지 빌드', '이미지 최적화', '배포 자동화'],
    nextGoals: ['Kubernetes 연동', 'CI/CD 파이프라인', '모니터링 시스템'],
    relatedProjects: [
      {
        id: 2,
        title: '데이트 코스 추천 AI',
        description: 'Docker 기반 배포 시스템',
        role: '컨테이너화',
        impact: '일관된 배포 환경',
        techUsage: ['Dockerfile', 'Docker Compose', '이미지 빌드'],
      },
    ],
    learningPath: [
      { phase: '기초', description: 'Docker 기본 개념', duration: '1주' },
      { phase: '실습', description: '컨테이너화', duration: '2주' },
      { phase: '고급', description: '오케스트레이션', duration: '진행 중' },
    ],
    resources: [
      { title: 'Docker 공식 문서', type: '문서', url: '#' },
      { title: 'Docker Best Practices', type: '가이드', url: '#' },
    ],
    skills: {
      core: ['Docker', 'Containerization', 'DevOps'],
      supporting: ['Linux', 'Networking', 'Security'],
      tools: ['Docker Desktop', 'Docker Hub', 'Docker Compose'],
    },
  },
  vercel: {
    name: 'Vercel',
    level: 80,
    category: 'DevOps',
    icon: Rocket,
    experience: '2년+',
    description: '프론트엔드 배포 플랫폼',
    longDescription:
      'Vercel을 사용하여 프론트엔드 애플리케이션을 배포하고 관리합니다. 자동 배포, 성능 모니터링, Edge Functions 등을 활용하여 최적화된 웹 서비스를 제공할 수 있습니다.',
    achievements: ['자동 배포 구축', '성능 모니터링', '글로벌 CDN 활용'],
    nextGoals: ['Edge Functions 활용', 'A/B 테스팅', '고급 분석'],
    relatedProjects: [
      {
        id: 1,
        title: 'AI 챗봇 포트폴리오',
        description: 'Vercel 기반 배포 및 호스팅',
        role: '배포 플랫폼',
        impact: '빠른 로드 타임과 글로벌 접근성',
        techUsage: ['자동 배포', '환경 변수', '도메인 관리'],
      },
    ],
    learningPath: [
      { phase: '기초', description: 'Vercel 기본 설정', duration: '1주' },
      { phase: '실습', description: '프로젝트 배포', duration: '1주' },
      { phase: '고급', description: '성능 최적화', duration: '진행 중' },
    ],
    resources: [
      { title: 'Vercel 공식 문서', type: '문서', url: '#' },
      { title: 'Vercel 가이드', type: '튜토리얼', url: '#' },
    ],
    skills: {
      core: ['Vercel', 'Deployment', 'Performance Optimization'],
      supporting: ['Next.js', 'Git', 'DNS'],
      tools: ['Vercel CLI', 'GitHub Integration', 'Analytics'],
    },
  },
  postgresql: {
    name: 'PostgreSQL',
    level: 75,
    category: 'Backend',
    icon: Database,
    experience: '2년',
    description: '강력한 오픈소스 관계형 데이터베이스',
    longDescription:
      'PostgreSQL을 사용하여 복잡한 데이터 모델링과 고성능 쿼리를 구현합니다. 고급 SQL 기능, 인덱싱, 트랜잭션 관리 등을 통해 안정적인 데이터베이스 시스템을 구축할 수 있습니다.',
    achievements: ['복잡한 쿼리 최적화', '인덱싱 전략', '데이터 무결성 보장'],
    nextGoals: ['고급 쿼리 최적화', '샤딩 전략', '성능 튜닝'],
    relatedProjects: [
      {
        id: 2,
        title: '데이트 코스 추천 AI',
        description: 'PostgreSQL 기반 데이터 저장소',
        role: '주 데이터베이스',
        impact: '안정적인 데이터 관리',
        techUsage: ['복잡한 조인', '공간 데이터', '인덱싱'],
      },
    ],
    learningPath: [
      { phase: '기초', description: 'SQL 기본 문법', duration: '2주' },
      { phase: '실습', description: '데이터베이스 설계', duration: '1개월' },
      { phase: '고급', description: '성능 최적화', duration: '진행 중' },
    ],
    resources: [
      { title: 'PostgreSQL 공식 문서', type: '문서', url: '#' },
      { title: 'PostgreSQL 튜토리얼', type: '튜토리얼', url: '#' },
    ],
    skills: {
      core: ['PostgreSQL', 'SQL', 'Database Design'],
      supporting: ['Performance Tuning', 'Indexing', 'Transactions'],
      tools: ['pgAdmin', 'psql', 'pg_stat_statements'],
    },
  },
  python: {
    name: 'Python',
    level: 90,
    category: 'Backend',
    icon: Code,
    experience: '3년+',
    description: '다목적 프로그래밍 언어',
    longDescription:
      'Python을 사용하여 백엔드 개발, 데이터 처리, AI/ML 모델 개발을 수행합니다. 풍부한 라이브러리 생태계를 활용하여 다양한 영역의 문제를 해결할 수 있습니다.',
    achievements: ['데이터 처리 파이프라인', 'API 서버 구축', 'AI 모델 통합'],
    nextGoals: ['비동기 프로그래밍 심화', '성능 최적화', '패키지 개발'],
    relatedProjects: [
      {
        id: 2,
        title: '데이트 코스 추천 AI',
        description: 'Python 기반 백엔드 및 AI 로직',
        role: '주 개발 언어',
        impact: '빠른 개발과 AI 통합',
        techUsage: ['FastAPI', '데이터 처리', 'AI 모델'],
      },
    ],
    learningPath: [
      { phase: '기초', description: 'Python 문법', duration: '1개월' },
      { phase: '실습', description: '웹 개발', duration: '2개월' },
      { phase: '고급', description: '고급 패턴', duration: '진행 중' },
    ],
    resources: [
      { title: 'Python 공식 문서', type: '문서', url: '#' },
      { title: 'Python 패턴', type: '서적', url: '#' },
    ],
    skills: {
      core: ['Python', 'Object-Oriented Programming', 'Functional Programming'],
      supporting: ['Data Structures', 'Algorithms', 'Testing'],
      tools: ['PyCharm', 'Jupyter', 'Poetry'],
    },
  },
  github: {
    name: 'GitHub',
    level: 95,
    category: 'DevOps',
    icon: Code,
    experience: '3년+',
    description: '버전 관리 및 협업 플랫폼',
    longDescription:
      'GitHub을 사용하여 코드 버전 관리, 협업, CI/CD 파이프라인을 구축합니다. Git 워크플로우, 코드 리뷰, 이슈 관리 등을 통해 효율적인 개발 프로세스를 운영할 수 있습니다.',
    achievements: ['브랜치 전략 수립', '코드 리뷰 문화', '자동화 워크플로우'],
    nextGoals: ['GitHub Actions 고도화', '보안 강화', '팀 협업 최적화'],
    relatedProjects: [
      {
        id: 1,
        title: 'AI 챗봇 포트폴리오',
        description: 'GitHub 기반 코드 관리 및 배포',
        role: '버전 관리',
        impact: '체계적인 코드 관리',
        techUsage: ['Git 워크플로우', 'GitHub Actions', '이슈 관리'],
      },
    ],
    learningPath: [
      { phase: '기초', description: 'Git 기본 명령어', duration: '1주' },
      { phase: '실습', description: '협업 워크플로우', duration: '1개월' },
      { phase: '고급', description: '고급 Git 패턴', duration: '진행 중' },
    ],
    resources: [
      { title: 'Git 공식 문서', type: '문서', url: '#' },
      { title: 'GitHub 가이드', type: '튜토리얼', url: '#' },
    ],
    skills: {
      core: ['Git', 'GitHub', 'Version Control'],
      supporting: ['Branching Strategy', 'Code Review', 'CI/CD'],
      tools: ['Git CLI', 'GitHub Desktop', 'VS Code Git'],
    },
  },
}

export default function SkillDetailPage({
  params,
}: {
  params: { slug: string }
}) {
  const skill = techData[params.slug as keyof typeof techData]

  if (!skill) {
    notFound()
  }

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
        <div className="px-4 py-16 bg-gradient-to-br from-white via-blue-50/30 to-purple-50/20 relative overflow-hidden">
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl animate-float"></div>
            <div className="absolute top-40 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-float delay-1000"></div>
          </div>

          <div className="max-w-6xl mx-auto relative">
            {/* Back Button */}
            <Link
              href="/skills"
              className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-8 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              기술 스택으로 돌아가기
            </Link>

            {/* Skill Header */}
            <div className="flex flex-col lg:flex-row items-start gap-8 mb-12">
              <div className="flex items-center gap-6">
                <div
                  className={`w-20 h-20 bg-gradient-to-r ${getSkillColor(skill.level)} rounded-2xl flex items-center justify-center shadow-lg`}
                >
                  <skill.icon className="w-10 h-10 text-white" />
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <Badge
                      className={`bg-gradient-to-r ${getSkillColor(skill.level)} text-white border-0`}
                    >
                      {skill.category}
                    </Badge>
                    <Badge className="bg-gray-100 text-gray-700 border-gray-200">
                      {getSkillLabel(skill.level)}
                    </Badge>
                  </div>
                  <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-2">
                    {skill.name}
                  </h1>
                  <p className="text-xl text-gray-600">{skill.description}</p>
                </div>
              </div>

              <div className="lg:ml-auto text-center lg:text-right">
                <div className="text-5xl font-bold text-gray-900 mb-2">
                  {skill.level}%
                </div>
                <div className="flex items-center gap-1 justify-center lg:justify-end mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${
                        i < Math.floor(skill.level / 20)
                          ? 'text-yellow-400 fill-current'
                          : 'text-gray-300'
                      }`}
                    />
                  ))}
                </div>
                <div className="text-gray-500">경험: {skill.experience}</div>
              </div>
            </div>

            {/* Progress Bar */}
            <div className="mb-8">
              <div className="w-full bg-gray-200 rounded-full h-4 overflow-hidden">
                <div
                  className={`h-4 rounded-full bg-gradient-to-r ${getSkillColor(skill.level)} transition-all duration-1000`}
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>

            {/* Description */}
            <p className="text-lg text-gray-600 leading-relaxed max-w-4xl">
              {skill.longDescription}
            </p>
          </div>
        </div>

        {/* Related Projects */}
        <div className="px-4 py-16 bg-white">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center gap-3">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <Code className="w-5 h-5 text-white" />
              </div>
              관련 프로젝트
            </h2>

            <div className="grid lg:grid-cols-2 gap-8">
              {skill.relatedProjects.map((project, index) => (
                <Card
                  key={index}
                  className="bg-white border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                >
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">
                          {project.title}
                        </h3>
                        <p className="text-gray-600 text-sm mb-3">
                          {project.description}
                        </p>
                        <Badge className="bg-blue-50 text-blue-700 border-blue-200 text-xs">
                          {project.role}
                        </Badge>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-sm mb-2 text-green-600">
                          프로젝트 임팩트
                        </h4>
                        <p className="text-gray-600 text-sm">
                          {project.impact}
                        </p>
                      </div>

                      <div>
                        <h4 className="font-semibold text-sm mb-2 text-purple-600">
                          기술 활용
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {project.techUsage.map((usage, i) => (
                            <Badge
                              key={i}
                              className="text-xs bg-purple-50 text-purple-700 border-purple-200"
                            >
                              {usage}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="mt-6 pt-4 border-t border-gray-200">
                      <Link href={`/projects/${project.id}`}>
                        <Button
                          size="sm"
                          variant="outline"
                          className="w-full bg-transparent"
                        >
                          프로젝트 자세히 보기
                          <ExternalLink className="w-4 h-4 ml-2" />
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Skills Breakdown */}
        <div className="px-4 py-16 bg-gradient-to-br from-gray-50 to-blue-50/20">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center gap-3">
              <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-teal-600 rounded-lg flex items-center justify-center">
                <Target className="w-5 h-5 text-white" />
              </div>
              세부 기술 스택
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="bg-white/80 backdrop-blur-sm border border-gray-200 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-lg text-gray-900">
                    핵심 기술
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {skill.skills.core.map((tech, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <span className="text-gray-700 text-sm">{tech}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white/80 backdrop-blur-sm border border-gray-200 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-lg text-gray-900">
                    지원 기술
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {skill.skills.supporting.map((tech, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                        <span className="text-gray-700 text-sm">{tech}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white/80 backdrop-blur-sm border border-gray-200 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-lg text-gray-900">
                    개발 도구
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {skill.skills.tools.map((tool, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                        <span className="text-gray-700 text-sm">{tool}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {/* Learning Path */}
        <div className="px-4 py-16 bg-white">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center gap-3">
              <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-red-600 rounded-lg flex items-center justify-center">
                <BookOpen className="w-5 h-5 text-white" />
              </div>
              학습 과정
            </h2>

            <div className="relative">
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-orange-200 to-red-200"></div>

              <div className="space-y-8">
                {skill.learningPath.map((phase, index) => (
                  <div key={index} className="flex items-start gap-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-600 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg relative z-10">
                      {index + 1}
                    </div>
                    <Card className="flex-1 bg-white border border-gray-200 shadow-lg">
                      <CardContent className="p-6">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="text-lg font-bold text-gray-900">
                            {phase.phase}
                          </h3>
                          <Badge className="bg-orange-50 text-orange-700 border-orange-200">
                            {phase.duration}
                          </Badge>
                        </div>
                        <p className="text-gray-600">{phase.description}</p>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Achievements & Goals */}
        <div className="px-4 py-16 bg-gradient-to-br from-gray-50 to-blue-50/20">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Achievements */}
              <Card className="bg-white/80 backdrop-blur-sm border border-gray-200 shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-gray-900">
                    <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg flex items-center justify-center">
                      <Award className="w-5 h-5 text-white" />
                    </div>
                    주요 성과
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {skill.achievements.map((achievement, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-700 text-sm leading-relaxed">
                          {achievement}
                        </span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Next Goals */}
              <Card className="bg-white/80 backdrop-blur-sm border border-gray-200 shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-gray-900">
                    <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg flex items-center justify-center">
                      <TrendingUp className="w-5 h-5 text-white" />
                    </div>
                    학습 목표
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {skill.nextGoals.map((goal, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-700 text-sm leading-relaxed">
                          {goal}
                        </span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {/* Learning Resources */}
        <div className="px-4 py-16 bg-white">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center gap-3">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-lg flex items-center justify-center">
                <Lightbulb className="w-5 h-5 text-white" />
              </div>
              학습 자료
            </h2>

            <div className="grid md:grid-cols-3 gap-6">
              {skill.resources.map((resource, index) => (
                <Card
                  key={index}
                  className="bg-white border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                >
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                        <BookOpen className="w-5 h-5 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-900">
                          {resource.title}
                        </h3>
                        <Badge className="bg-blue-50 text-blue-700 border-blue-200 text-xs">
                          {resource.type}
                        </Badge>
                      </div>
                    </div>
                    <Button
                      size="sm"
                      variant="outline"
                      className="w-full bg-transparent"
                      asChild
                    >
                      <a
                        href={resource.url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        보러가기
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="px-4 py-16 bg-gradient-to-br from-gray-50 to-blue-50/20">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-teal-600 bg-clip-text text-transparent">
                이 기술에 대해 더 궁금하신가요?
              </span>
            </h2>
            <p className="text-gray-600 mb-8 text-lg leading-relaxed">
              {skill.name}에 대한 구체적인 경험이나 프로젝트 적용 사례가
              궁금하시다면,
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
              <Link href="/skills">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-gray-300 text-gray-700 hover:bg-gray-50 hover:border-gray-400 bg-white/80 backdrop-blur-sm px-8 py-4 text-lg rounded-xl transition-all duration-200 transform hover:scale-105"
                >
                  <ArrowLeft className="w-5 h-5 mr-2" />
                  다른 기술 보기
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
