'use client'

import { useEffect, useRef } from 'react'
import { useParams, useRouter } from 'next/navigation'
import { HomePageContent } from '../page'

const allowedCompanies = ['mindlogic', 'nuua']

export default function CompanyShortcutPage() {
  const params = useParams<{ company?: string | string[] }>()
  const router = useRouter()
  const storedRef = useRef(false)

  useEffect(() => {
    const rawParam = params?.company
    const companyParam = Array.isArray(rawParam) ? rawParam[0] : rawParam
    if (!companyParam) return

    const companyKey = companyParam.toLowerCase()

    // 잘못된 슬러그는 홈으로 돌려보냄
    if (!allowedCompanies.includes(companyKey)) {
      router.replace('/')
      return
    }

    if (storedRef.current) return
    storedRef.current = true

    try {
      if (typeof window !== 'undefined') {
        sessionStorage.setItem('chatbot_current_company', companyKey)
        // 혹시 모를 사용성 요구사항 대응
        localStorage.setItem('chatbot_current_company', companyKey)
        sessionStorage.setItem('chatbot_company_source', 'slug')
        localStorage.setItem('chatbot_company_source', 'slug')
      }
    } catch (error) {
      console.error('회사 컨텍스트 저장 실패:', error)
    }

    router.replace('/')
  }, [params?.company, router])

  return <HomePageContent />
}
