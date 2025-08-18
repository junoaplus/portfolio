'use client'

import { Navigation } from '@/components/navigation'
import { Button } from '@/components/ui/button'
import {
  Github,
  Mail,
  Phone,
} from 'lucide-react'

export default function ContactPage() {

  const contactMethods = [
    {
      icon: Github,
      title: 'GitHub',
      value: 'github.com/junoaplus',
      description: '코드와 프로젝트 확인',
      href: 'https://github.com/junoaplus',
      color: 'from-gray-700 to-gray-800',
    },
    {
      icon: Mail,
      title: 'Email',
      value: 'junehoo4248@naver.com',
      description: '가장 빠른 연락 방법',
      color: 'from-blue-600 to-purple-600',
      copyText: 'junehoo4248@naver.com',
    },
    {
      icon: Phone,
      title: 'Phone',
      value: '010-2125-4247',
      description: '긴급한 경우에만',
      color: 'from-green-600 to-teal-600',
      copyText: '010-2125-4247',
    },
  ]


  return (
    <div className="scroll-smooth snap-y snap-mandatory overflow-y-auto h-screen">
      {/* Navigation */}
      <Navigation />

      {/* Contact Section - 메인 페이지와 똑같은 구조 */}
      <section className="min-h-screen snap-start flex items-center justify-center px-4 relative" style={{ background: 'linear-gradient(to bottom right, #000000, #111827, #000000)' }}>
        {/* Contact 글로우 효과 */}
        <div className="absolute top-20 left-20 w-80 h-80 rounded-full filter blur-3xl" style={{ background: 'linear-gradient(to right, rgba(59, 130, 246, 0.1), rgba(37, 99, 235, 0.1))' }}></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 rounded-full filter blur-3xl" style={{ background: 'linear-gradient(to right, rgba(37, 99, 235, 0.1), rgba(59, 130, 246, 0.1))' }}></div>
        <div className="max-w-4xl mx-auto text-center relative py-20">
          <h2 className="text-4xl font-bold mb-4 text-white">연락하기</h2>
          <p className="text-xl text-gray-300 mb-16">
            언제든지 편하게 연락주세요
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            {contactMethods.map((method, index) => (
              <div key={index}>
                {method.href ? (
                  <a
                    href={method.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ background: 'rgb(17 24 39)', border: '1px solid rgb(31 41 55)' }}
                    className="flex flex-col items-center p-8 backdrop-blur-sm rounded-2xl hover:shadow-xl transition-all duration-300 group transform hover:-translate-y-2 h-full"
                  >
                    <div className={`w-16 h-16 bg-gradient-to-br ${method.color} rounded-2xl flex items-center justify-center mb-4 group-hover:from-gray-600 group-hover:to-gray-700 transition-all duration-300`}>
                      <method.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="font-bold text-lg text-white mb-2">{method.title}</div>
                    <div className="text-sm text-gray-400 mb-3">
                      {method.value}
                    </div>
                    {/* 높이 맞추기용 투명 공간 */}
                    <div className="h-8"></div>
                  </a>
                ) : (
                  <div
                    style={{ background: 'rgb(17 24 39)', border: '1px solid rgb(31 41 55)' }}
                    className="flex flex-col items-center p-8 backdrop-blur-sm rounded-2xl hover:shadow-xl transition-all duration-300 group transform hover:-translate-y-2"
                  >
                    <div className={`w-16 h-16 bg-gradient-to-br ${method.color} rounded-2xl flex items-center justify-center mb-4 group-hover:from-blue-500 group-hover:to-purple-500 transition-all duration-300`}>
                      <method.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="font-bold text-lg text-white mb-2">{method.title}</div>
                    <div className="text-sm text-gray-400 mb-3">{method.value}</div>
                    <Button
                      onClick={() => navigator.clipboard.writeText(method.copyText)}
                      size="sm"
                      className={`${method.title === 'Email' ? 'bg-blue-600 hover:bg-blue-500' : 'bg-green-600 hover:bg-green-500'} text-white px-4 py-2 text-sm rounded-lg transition-colors`}
                    >
                      복사하기
                    </Button>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-gray-700" style={{ background: 'rgb(0 0 0)' }}>
        <div className="max-w-6xl mx-auto text-center text-gray-400">
          <p>&copy; 2025 황준호. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
