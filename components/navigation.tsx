"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, Home, Bot, FolderOpen, Code, User, Mail } from "lucide-react"
import Link from "next/link"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { name: "홈", href: "/", icon: Home },
    { name: "AI 챗봇", href: "/chatbot", icon: Bot },
    { name: "프로젝트", href: "/projects", icon: FolderOpen },
    { name: "기술 스택", href: "/skills", icon: Code },
    { name: "소개", href: "/about", icon: User },
    { name: "연락처", href: "/contact", icon: Mail },
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <Bot className="w-5 h-5 text-white" />
            </div>
            <span className="text-gray-900 font-bold text-lg">황준호</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <Link key={item.name} href={item.href}>
                <Button
                  variant="ghost"
                  className="text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-colors"
                >
                  <item.icon className="w-4 h-4 mr-2" />
                  {item.name}
                </Button>
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <Button variant="ghost" size="sm" className="md:hidden text-gray-900" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col gap-2">
              {navItems.map((item) => (
                <Link key={item.name} href={item.href}>
                  <Button
                    variant="ghost"
                    className="w-full justify-start text-gray-600 hover:text-gray-900 hover:bg-gray-100"
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
