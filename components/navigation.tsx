'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Menu, X, Home, Bot, FolderOpen, Code, User, Mail } from 'lucide-react'
import Link from 'next/link'

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [isDark, setIsDark] = useState(false)
  const [currentSection, setCurrentSection] = useState('hero')
  const [isProjectDetailPage, setIsProjectDetailPage] = useState(false)

  useEffect(() => {
    // 프로젝트 상세 페이지 체크
    const checkProjectDetailPage = () => {
      const isProjectPage = window.location.pathname.startsWith('/projects') || 
                           window.location.pathname.startsWith('/boardgame-chatbot')
      setIsProjectDetailPage(isProjectPage)
      // 프로젝트 페이지도 다크 테마로 설정
      if (isProjectPage) {
        setIsDark(true)
      }
    }
    
    checkProjectDetailPage()
    
    // 경로 변경 감지
    const handleLocationChange = () => {
      checkProjectDetailPage()
    }
    
    window.addEventListener('popstate', handleLocationChange)
    
    const handleScroll = () => {
      // 프로젝트 상세 페이지에서는 스크롤 감지 안함
      if (isProjectDetailPage) return
      
      // 스크롤 컨테이너가 우리가 만든 div이므로 그것을 찾아야 함
      const scrollContainer = document.querySelector('.scroll-smooth.snap-y.snap-mandatory.overflow-y-auto.h-screen')
      
      if (!scrollContainer) {
        return
      }
      
      const scrollY = scrollContainer.scrollTop
      const viewportHeight = window.innerHeight
      
      // 섹션별 범위 계산
      if (scrollY < viewportHeight * 0.5) {
        setCurrentSection('hero')
        setIsDark(true)
      } else if (scrollY < viewportHeight * 1.5) {
        setCurrentSection('projects')
        setIsDark(true)
      } else if (scrollY < viewportHeight * 2.5) {
        setCurrentSection('techstack')
        setIsDark(true)
      } else if (scrollY < viewportHeight * 3.5) {
        setCurrentSection('about')
        setIsDark(true)
      } else if (scrollY < viewportHeight * 4.5) {
        setCurrentSection('education')
        setIsDark(true)
      } else {
        setCurrentSection('contact')
        setIsDark(true)
      }
    }

    // 스크롤 컨테이너에 직접 이벤트 등록 (메인 페이지에서만)
    if (!isProjectDetailPage) {
      const scrollContainer = document.querySelector('.scroll-smooth.snap-y.snap-mandatory.overflow-y-auto.h-screen')
      
      if (scrollContainer) {
        scrollContainer.addEventListener('scroll', handleScroll, { passive: true })
        // 초기 체크
        handleScroll()
        
        return () => {
          scrollContainer.removeEventListener('scroll', handleScroll)
        }
      }
    }
    
    return () => {
      window.removeEventListener('popstate', handleLocationChange)
    }
  }, [isProjectDetailPage])

  const navItems = [
    { name: '홈', href: '/', icon: Home },
    { name: 'AI 챗봇', href: '/chatbot', icon: Bot },
    { name: '프로젝트', href: '/projects', icon: FolderOpen },
    { name: '기술 스택', href: '/skills', icon: Code },
    { name: '소개', href: '/about', icon: User },
    { name: '연락처', href: '/contact', icon: Mail },
  ]

  // 섹션별 헤더 스타일 정의
  const getHeaderStyle = () => {
    // 프로젝트 상세 페이지면 히어로 섹션과 똑같은 스타일 사용
    if (isProjectDetailPage) {
      return {
        backgroundImage: 'linear-gradient(to bottom right, rgba(0, 0, 0, 0.95), rgba(17, 24, 39, 0.95), rgba(0, 0, 0, 0.95)), linear-gradient(rgba(59,130,246,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(59,130,246,0.03) 1px, transparent 1px)',
        backgroundSize: '100% 100%, 60px 60px, 60px 60px',
        borderBottom: '1px solid rgba(55, 65, 81, 0.8)'
      }
    }
    
    switch (currentSection) {
      case 'hero':
        return {
          backgroundImage: 'linear-gradient(to bottom right, rgba(0, 0, 0, 0.95), rgba(17, 24, 39, 0.95), rgba(0, 0, 0, 0.95)), linear-gradient(rgba(59,130,246,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(59,130,246,0.03) 1px, transparent 1px)',
          backgroundSize: '100% 100%, 60px 60px, 60px 60px',
          borderBottom: '1px solid rgba(55, 65, 81, 0.8)'
        }
      case 'projects':
        return {
          backgroundImage: 'linear-gradient(to bottom right, rgba(17, 24, 39, 0.95), rgba(0, 0, 0, 0.95), rgba(17, 24, 39, 0.95)), radial-gradient(circle at 1px 1px, rgba(59,130,246,0.05) 1px, transparent 0)',
          backgroundSize: '100% 100%, 40px 40px',
          borderBottom: '1px solid rgba(55, 65, 81, 0.8)'
        }
      case 'techstack':
        return {
          backgroundImage: 'linear-gradient(to bottom right, rgba(17, 24, 39, 0.95), rgba(0, 0, 0, 0.95), rgba(17, 24, 39, 0.95)), radial-gradient(circle at 20% 20%, rgba(37, 99, 235, 0.1) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(147, 51, 234, 0.1) 0%, transparent 50%)',
          backgroundSize: '100% 100%, 500px 500px, 500px 500px',
          borderBottom: '1px solid rgba(55, 65, 81, 0.8)'
        }
      case 'about':
        return {
          backgroundImage: 'linear-gradient(to bottom right, rgba(0, 0, 0, 0.95), rgba(17, 24, 39, 0.95), rgba(0, 0, 0, 0.95)), linear-gradient(rgba(59,130,246,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(59,130,246,0.03) 1px, transparent 1px)',
          backgroundSize: '100% 100%, 50px 50px, 50px 50px',
          borderBottom: '1px solid rgba(55, 65, 81, 0.8)'
        }
      case 'education':
        return {
          backgroundImage: 'linear-gradient(to bottom right, rgba(17, 24, 39, 0.95), rgba(0, 0, 0, 0.95), rgba(17, 24, 39, 0.95)), linear-gradient(rgba(59,130,246,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(59,130,246,0.03) 1px, transparent 1px)',
          backgroundSize: '100% 100%, 45px 45px, 45px 45px',
          borderBottom: '1px solid rgba(55, 65, 81, 0.8)'
        }
      case 'contact':
        return {
          backgroundImage: 'linear-gradient(to bottom right, rgba(0, 0, 0, 0.95), rgba(17, 24, 39, 0.95), rgba(0, 0, 0, 0.95))',
          borderBottom: '1px solid rgba(55, 65, 81, 0.8)'
        }
      default:
        return {
          backgroundImage: 'linear-gradient(to bottom right, rgba(0, 0, 0, 0.95), rgba(17, 24, 39, 0.95), rgba(0, 0, 0, 0.95)), linear-gradient(rgba(59,130,246,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(59,130,246,0.03) 1px, transparent 1px)',
          backgroundSize: '100% 100%, 60px 60px, 60px 60px',
          borderBottom: '1px solid rgba(55, 65, 81, 0.8)'
        }
    }
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md transition-all duration-200" style={getHeaderStyle()}>
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* 왼쪽 빈 공간 */}
          <div></div>
          
          {/* Desktop Navigation - 가운데 */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map(item => (
              <Link key={item.name} href={item.href}>
                <Button
                  variant="ghost"
                  className="text-gray-300 hover:text-white hover:bg-gray-800 transition-colors"
                >
                  <item.icon className="w-4 h-4 mr-2" />
                  {item.name}
                </Button>
              </Link>
            ))}
          </div>

          {/* 지원자 정보 - 오른쪽 */}
          <div className="text-white transition-colors">
            지원자 - 황준호
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden text-white transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-gray-800 transition-colors">
            <div className="flex flex-col gap-2">
              {navItems.map(item => (
                <Link key={item.name} href={item.href}>
                  <Button
                    variant="ghost"
                    className="w-full justify-start text-gray-300 hover:text-white hover:bg-gray-800 transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    <item.icon className="w-4 h-4 mr-3" />
                    {item.name}
                  </Button>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
