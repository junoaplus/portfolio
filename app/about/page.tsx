'use client'
import { Navigation } from '@/components/navigation'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import {
  Heart, Target, TrendingUp, Trophy, Star,
  Lightbulb, Brain, Zap, Users, Shield,
  Book, Code, Rocket, Coffee, GameController2,
  ArrowLeft, ArrowRight, CheckCircle, AlertCircle, Clock,
  GitBranch, MessageSquare, Settings, Layers, Database
} from 'lucide-react'
import Link from 'next/link'

export default function AboutPage() {
  // TOP 5 - 포트폴리오 메인 페이지에도 노출될 핵심 콘텐츠
  const coreValues = {
    title: "💡 핵심 가치관 & 개발 철학",
    items: [
      {
        question: "왜 AI/ML 엔지니어가 되었나요?",
        answer: "임베디드 소프트웨어, IoT, 컴퓨터 네트워크, 데이터베이스, 객체지향 프로그래밍까지 다양한 수업을 들으며 공부할 때, 가장 큰 도움을 준 것이 GPT였습니다. AI가 미래의 핵심 기술이라 확신하고 본격적으로 공부했더니 저와 너무 잘 맞았고, 그동안 배운 모든 지식들과 시너지를 내며 더 큰 가치를 만들 수 있었습니다. 예를 들어 컴퓨터 네트워크에서 배운 TCP/IP 지식으로 LangChain의 스트리밍 응답을 최적화하고, IoT 수업의 MQTT 프로토콜 이해로 실시간 채팅 시스템을 구축하는 등, 모든 지식이 AI 개발에 활용되었습니다.\n\n특히 데이터를 기반으로 RAG 시스템을 구축하고, 에이전틱한 구조를 설계하며, 복잡한 데이터를 정제하는 과정이 정말 재미있었습니다. 제가 직접 만든 챗봇이 실제로 사용자의 질문에 답변하고, 실시간으로 작동하는 것을 볼 때의 보람은 이루 말할 수 없었습니다.",
        icon: Brain
      },
      {
        question: "어떤 개발자가 되고 싶나요?",
        answer: "요즘 기업들은 여러 명의 평범한 개발자보다 한 명의 확실한 개발자를 원합니다. 최근 빅테크 기업들이 AI 인재 영입 경쟁을 벌이며 천문학적인 연봉을 제시하는 것처럼, 진짜 실력 있는 개발자의 가치는 그 어느 때보다 높습니다. 저는 AI/ML이라는 한 분야에서 깊은 전문성을 갖추면서, 다른 분야도 폭넓게 이해하는 'T자형 개발자'가 되고 싶습니다. '일을 알고 시키는 것과 모르고 시키는 것은 천지 차이'라고 생각합니다. AI 코딩이 대세인 시대에, 우리는 직접 모든 것을 하기보다 우리가 아는 지식을 바탕으로 AI를 효과적으로 활용하여 더 큰 가치를 만들어낼 것입니다. AI와의 협업 능력이 곧 경쟁력이 되는 시대, 문제를 정확히 정의하고 AI와 함께 해결책을 만들어가는 개발자가 되는 것이 목표입니다.",
        icon: Target
      },
      {
        question: "일할 때 가장 중요하게 생각하는 것은?",
        answer: "새로운 도전을 두려워하지 않는 것입니다. 매일 새로운 기술이 등장하는 시대에 변화를 두려워하면 도태됩니다. 하지만 동시에 잘못된 방향임을 깨달았을 때는 빠르게 인정하고 방향을 전환할 수 있는 용기도 필요합니다. 무엇보다 문제를 명확히 정의하고 체계적으로 해결하는 능력이 뛰어난 성과의 핵심이라고 믿습니다.\n\nAI/ML 분야에서는 특히 데이터가 정말 중요합니다. 아무리 좋은 모델도 잘못된 데이터로는 쓸모없는 결과를 만듭니다. 데이터를 꼼꼼하게 정제하고, 품질을 검증하는 과정이 모델 성능의 90%를 좌우한다고 생각합니다. 또한 내가 만든 서비스가 실제 고객에게 얼마나 실용적일지 항상 고민합니다. 기술적으로 완벽한 것보다 고객 관점에서 정말 필요한 기능을 만드는 것이 더 중요하다고 믿습니다.",
        icon: TrendingUp
      }
    ]
  }

  const strengths = {
    title: "💪 핵심 강점",
    items: [
      {
        name: "문제를 정의하고 해결해 나아가는 능력",
        description: "개발 과정에서 마주하는 복잡한 문제들을 명확히 정의하고, 체계적으로 해결해 나가는 것이 저의 가장 큰 강점입니다. 단순히 증상만 보는 것이 아니라 근본 원인을 파악하고, 효과적인 해결책을 찾아 실행합니다.",
        examples: [
          "복잡한 기술적 문제를 논리적으로 분석",
          "원인 파악부터 해결까지 체계적 접근",
          "실행 가능한 구체적 솔루션 도출"
        ],
        links: [
          { text: "📍 데이트 코스 추천 프로젝트 - 8가지 기술 문제 해결 과정 보기", url: "/date-recommendation" },
          { text: "🎲 보드게임 챗봇 프로젝트 - 복잡한 시스템 설계 문제 해결 보기", url: "/boardgame-chatbot" }
        ],
        icon: Target
      },
      {
        name: "새로운 기술에 대한 빠른 적응력",
        description: "Claude Code, GPT, 에이전트 시스템 같은 새로운 기술이 나오면 바로 학습해서 프로젝트에 적용해봅니다. 최신 AI 트렌드를 놓치지 않고 실제로 사용해보며, 실무에 활용할 수 있는 방법을 찾아냅니다.",
        examples: [
          "새로운 AI 도구와 프레임워크에 대한 빠른 학습",
          "트렌드 기술을 실제 프로젝트에 즉시 적용",
          "공식 문서와 실습을 통한 체계적 습득"
        ],
        icon: Zap
      },
      {
        name: "팀 커뮤니케이션과 리더십",
        description: "소프트웨어학과 과대표, 부학생회장 경험을 통해 키운 커뮤니케이션 능력으로 5명 팀에서 풀스택 개발을 담당하며 팀원 모두와 소통을 통해 문제를 해결해 나아갔습니다. 복잡한 기술 내용을 팀원들이 이해하기 쉽게 설명하고, 항상 문서화를 통해 지식을 공유하며 팀 전체가 함께 성장할 수 있도록 돕습니다.",
        examples: [
          "팀 프로젝트에서 기술 리드 역할 수행",
          "학생회 활동으로 다져진 소통과 조율 능력",
          "문서화와 지식 공유를 통한 팀 역량 향상"
        ],
        icon: Users
      },
      {
        name: "긍정적인 마인드와 성장 지향",
        description: "개발을 하다 보면 실패할 때도 있고 내 마음대로 결과가 나오지 않을 때도 있습니다. 하지만 이런 상황에서도 긍정적으로 생각하며 '하나 더 배워간다'는 마음으로 접근합니다. 실패도 성장의 기회로 여기며, 문제를 정의하고 차근차근 풀어나가는 것이 저의 개발 철학입니다.",
        examples: [
          "실패와 시행착오를 학습 기회로 전환",
          "어려운 상황에서도 긍정적 사고 유지",
          "지속적인 자기 개발과 성장 추구"
        ],
        icon: Heart
      }
    ]
  }

  const growthStories = {
    title: "💡 프로젝트 경험과 배운 점",
    items: [
      {
        title: "데이트 코스 추천 프로젝트",
        description: "20만개 장소 데이터를 9만개로 정제하고, 33초 응답시간을 3.4초로 개선한 프로젝트입니다. 이 프로젝트를 통해 가장 큰 도전과 성취, 그리고 실패의 교훈을 모두 경험했습니다.",
        keywords: ["가장 어려웠던 프로젝트", "가장 자랑스러운 성취", "가장 큰 성과", "가장 실패했던 경험", "대표 프로젝트"],
        sections: [
          {
            type: "challenge",
            title: "🔥 가장 어려웠던 점: 데이터 수집의 막막함",
            content: "데이터를 어디서, 어떻게 수집해야 할지 막막했습니다. 결국 카카오, T맵, 네이버, 관광공사, 블로그 크롤링까지 5개의 다양한 API를 활용해 데이터를 수집했고, 대용량 데이터의 빠른 처리를 위해 PySpark를 도입했습니다. 20만개가 넘는 데이터를 효율적으로 처리하는 것이 가장 큰 도전이었습니다."
          },
          {
            type: "achievement", 
            title: "🏆 가장 자랑스러운 성취: 벡터 DB 구축 및 완벽한 챗봇 구현",
            content: "89,321개 검증된 장소 데이터로 벡터 DB를 구축하고, 사용자와 자연스럽게 대화하며 개인 맞춤형 데이트 코스를 추천하는 챗봇을 완벽히 구현한 것입니다. 단순한 검색이 아닌, 사용자의 MBTI, 관계 단계, 예산까지 고려해서 정말 원하는 데이트 코스를 정확히 추천해주는 시스템을 만들어낸 것이 가장 뿌듯합니다."
          },
          {
            type: "failure",
            title: "💔 가장 실패했던 경험: 에이전트 시스템의 한계 깨달음", 
            content: "처음에는 3개의 AI 서비스를 각각 에이전트로 구성해서 최신 에이전트 기술을 적용했습니다. 하지만 실제로는 예측 불가능한 응답과 느린 처리 속도 때문에 사용자 경험이 좋지 않았습니다. 빠르게 판단을 내려 룰 베이스 시스템으로 전환했고, 훨씬 안정적이고 빠른 서비스를 구현할 수 있었습니다. '최신 기술이라고 다 좋은 것은 아니다'라는 중요한 교훈을 얻었습니다."
          }
        ]
      }
    ]
  }


  const teamwork = {
    title: "👥 팀워크 & 협업",
    items: [
      {
        role: "기술 리드",
        description: "어떤 프레임워크를 사용할지, 어떤 기술을 쓸지를 팀원들과 함께 큰 틀을 잡고 나아갔습니다. 단순히 기술을 정하는 것이 아니라, 그 기술을 쓰는 이유와 타당성을 중심으로 팀 전체가 납득할 수 있는 기반을 다졌습니다.",
        outcome: "팀원 모두가 기술 선택 근거를 이해하고 프로젝트에 집중"
      },
      {
        role: "병합 담당",
        description: "모든 파트에 관여하고 있어서 각 팀원의 작업을 쉽게 통합할 수 있었습니다. 프론트엔드, 백엔드, AI 서비스까지 전체 구조를 파악하고 있어 원활한 병합과 배포를 담당했습니다.",
        outcome: "코드 충돌 최소화, 안정적인 통합 프로세스 구축"
      },
      {
        role: "갈등 중재자",
        description: "처음 해보는 팀원들은 일을 어떻게 해야 할지 몰라 갈등이 있었습니다. 이런 상황에서 세세하게 계획을 세워주고 구체적인 할 일을 제공하면서 집중 관리를 통해 팀원들이 혼란 없이 작업할 수 있도록 도왔습니다.",
        outcome: "팀 내 갈등 해소, 모든 팀원이 명확한 역할로 기여"
      }
    ]
  }

  // 중단 노출 - 면접 대비
  const problemSolving = {
    title: "🔧 문제 해결 프로세스",
    items: [
      { step: 1, name: "문제 파악", description: "문제를 파악하면 즉시 팀원들과 공유" },
      { step: 2, name: "면밀 분석", description: "로그를 찍어보고 디버깅을 통한 원인 분석" },
      { step: 3, name: "해결책 실행", description: "해결책을 찾아서 문제 해결" },
      { step: 4, name: "결과 공유", description: "해결 완료 후 팀원들에게 해결 과정과 결과 공유" }
    ]
  }




  const workStyle = {
    title: "🔄 업무 스타일",
    items: [
      {
        aspect: "하루 시작",
        description: "오늘 할 일 파악 → Git Pull로 최신 버전 유지"
      },
      {
        aspect: "업무 진행",
        description: "무엇을 어떻게 해결할지 고민 → 오늘 할 일 완료"
      },
      {
        aspect: "하루 마무리",
        description: "완료된 작업 Git Push로 팀원들과 공유"
      }
    ]
  }

  // 대외활동 상세 섹션
  const activities = {
    title: "🏆 대외활동 상세",
    items: [
      {
        name: "SK Networks Family AI Camp 11기",
        period: "2024.02 - 2024.07 (6개월)",
        activity: "AI 개발 교육 프로그램",
        achievement: "LangChain, RAG 시스템 실무 적용",
        icon: Brain,
        color: "red",
        details: [
          { label: "프로젝트 성과", content: "6개월간 3개의 소규모, 2개의 대규모 프로젝트 완성" },
          { label: "학습 분야", content: "ML/AI/LLM 분야의 실무 역량을 체계적으로 학습" },
          { label: "어려움 극복", content: "복습 스터디를 만들어 스터디장을 맡아 하브루타 방식으로 어려운 개념들을 함께 이겨나감" },
          { label: "핵심 기술", content: "LangChain을 활용한 RAG 시스템 구축과 멀티 에이전트 아키텍처 설계" }
        ]
      },
      {
        name: "부학생회장",
        period: "2023.12 - 2024.11",
        organization: "한국항공대학교 소프트웨어학과",
        role: "학생 대표, 행사 기획",
        icon: Trophy,
        color: "green",
        details: [
          { label: "리더십 역량", content: "성격상 남의 말을 잘 안 듣고 밀어붙이는 단점이 있었지만, 부학생회장 활동을 통해 언제 밀어붙여야 하고 언제 다른 사람의 의견을 들어야 하는지 균형감각을 터득했습니다" },
          { label: "소통 능력", content: "평소 감정적으로 반응하는 단점이 있었는데, 교수진과 소통하며 감정적 대응으로는 아무것도 얻을 수 없다는 것을 깨달았고 효과적인 소통 방법을 체득했습니다" },
          { label: "책임감", content: "십자인대 파열 부상으로 2개월간 목발을 짚고 다녀야 했지만, 부학생회장 업무와 3개의 팀프로젝트를 모두 완수하기 위해 수술을 미루며 끝까지 책임을 다했습니다" }
        ]
      },
      {
        name: "해커톤 운영진",
        period: "2023.04.01 - 2023.05.10",
        activity: "기술 이벤트 기획 및 운영",
        achievement: "해커톤 성공적 개최",
        icon: Code,
        color: "blue",
        details: [
          { label: "기획력 및 문제 정의 능력", content: "해커톤 주제 선정 시 \"어떤 주제로 어떤 문제를 해결할 수 있을까\"를 깊이 고민하며 문제를 다각도로 바라보는 능력을 키웠습니다" },
          { label: "시각 확장 및 다양성 이해", content: "다른 팀들이 동일한 문제를 완전히 다른 방식으로 접근하는 것을 관찰하며, 하나의 문제에도 수많은 해결 관점이 존재함을 깨달았습니다" },
          { label: "기술 트렌드 파악 및 학습", content: "참가 팀들의 다양한 최신 기술 스택과 접근법을 보며 새롭게 알게 된 기술들에 대해 적극적으로 공부하고 습득했습니다" }
        ]
      },
      {
        name: "E-commerce 사업 운영",
        period: "2023.08",
        activity: "온라인 플랫폼 셀러 경험",
        achievement: "멀티플랫폼 운영 경험",
        icon: Rocket,
        color: "purple",
        details: [
          { label: "비즈니스 감각", content: "사업자 등록을 내고 동대문에서 의류를 직접 구매하여 온라인으로 판매하며 실제 비즈니스 프로세스를 경험했습니다" },
          { label: "플랫폼 알고리즘 분석", content: "저렴한 가격으로 광고를 하기 위해 네이버와 쿠팡의 상품 노출 알고리즘을 분석했지만, 키워드 기반 시스템의 한계를 발견했습니다" },
          { label: "타겟팅 한계 체감", content: "특정 사용자층을 타겟팅할 수 있는 방법이 제한적이어서 효율적인 마케팅이 어려웠습니다" },
          { label: "가격 경쟁력 이슈", content: "대량 구매를 통한 가격 경쟁력 확보가 어려워 기존 셀러들과의 경쟁에서 불리함을 경험했습니다" }
        ]
      },
      {
        name: "소프트웨어학과 과대표",
        period: "2023.01 - 2023.12",
        organization: "한국항공대학교 소프트웨어학과",
        role: "학과 행사 기획, 학생 소통",
        icon: Users,
        color: "cyan",
        details: [
          { label: "관계 구축 및 소통", content: "2학년 과대표로서 복학생 형들과 적극적으로 친해지며 나이 차이와 경험 차이를 극복하고, 학과 내 세대 간 소통의 다리 역할을 했습니다" },
          { label: "학과 환경 개선", content: "새내기 오리엔테이션, MT, 학과 워크샵 등 다양한 행사를 기획하고 운영하여 학과 구성원들이 함께 어우러질 수 있는 좋은 환경을 구축하기 위해 노력했습니다" }
        ]
      },
      {
        name: ""
      }
    ]
  }

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

      <Navigation />

      <div className="pt-24 px-4 pb-20">
        <div className="max-w-7xl mx-auto">
          {/* Back Button */}
          <Link href="/">
            <Button variant="outline" className="bg-gray-800/70 backdrop-blur-sm border-gray-600/50 text-white hover:bg-gray-700/90 mb-8 rounded-xl shadow-lg">
              <ArrowLeft className="w-4 h-4 mr-2" />
              메인으로 돌아가기
            </Button>
          </Link>

          {/* Page Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-4">
              About Me
            </h1>
            <p className="text-xl text-gray-300">
              AI/ML 엔지니어로서의 가치관, 경험, 그리고 성장 스토리
            </p>
          </div>

          {/* TOP 5 섹션들 - 상단 노출 */}
          
          {/* 1. 핵심 가치관 & 개발 철학 */}
          <Card className="bg-gray-800/80 backdrop-blur-sm border border-gray-600/50 shadow-2xl mb-8">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-white">
                {coreValues.title}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {coreValues.items.map((item, idx) => (
                <div key={idx} className="border-l-4 border-blue-500 pl-4">
                  <h4 className="text-lg font-semibold text-cyan-400 mb-2">{item.question}</h4>
                  <div className="text-gray-300 leading-relaxed space-y-3">
                    {item.answer.split('\n\n').map((paragraph, i) => (
                      <p key={i}>{paragraph}</p>
                    ))}
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* 2. 핵심 강점 */}
          <Card className="bg-gray-800/80 backdrop-blur-sm border border-gray-600/50 shadow-2xl mb-8">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-white">
                {strengths.title}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-8">
              {strengths.items.map((item, idx) => (
                <div key={idx} className="border-l-4 border-blue-500 pl-6">
                  <div className="flex items-start gap-3 mb-3">
                    <div className="w-8 h-8 bg-blue-500/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                      <item.icon className="w-5 h-5 text-blue-400" />
                    </div>
                    <h4 className="text-xl font-bold text-cyan-400">{item.name}</h4>
                  </div>
                  <p className="text-gray-300 leading-relaxed mb-4">{item.description}</p>
                  <div className="space-y-2 mb-4">
                    {item.examples.map((example, i) => (
                      <div key={i} className="flex items-center gap-2 text-sm text-gray-400">
                        <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                        <span>{example}</span>
                      </div>
                    ))}
                  </div>
                  {item.links && (
                    <div className="space-y-2">
                      {item.links.map((link, i) => (
                        <Link key={i} href={link.url}>
                          <div className="flex items-center gap-2 text-sm text-blue-400 hover:text-blue-300 transition-colors cursor-pointer p-2 rounded-lg bg-blue-500/10 hover:bg-blue-500/20">
                            <ArrowRight className="w-4 h-4 flex-shrink-0" />
                            <span>{link.text}</span>
                          </div>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </CardContent>
          </Card>

          {/* 3. 프로젝트 경험과 배운 점 */}
          <Card className="bg-gray-800/80 backdrop-blur-sm border border-gray-600/50 shadow-2xl mb-8">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-white">
                {growthStories.title}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-8">
              {growthStories.items.map((story, idx) => (
                <div key={idx} className="border-l-4 border-green-500 pl-6">
                  <h4 className="text-xl font-bold text-cyan-400 mb-3">{story.title}</h4>
                  <p className="text-gray-300 leading-relaxed mb-8">{story.description}</p>
                  
                  <div className="space-y-8">
                    {story.sections.map((section, i) => {
                      const getSectionStyle = (type) => {
                        switch(type) {
                          case 'challenge':
                            return {
                              borderColor: 'border-blue-500',
                              bgColor: 'bg-blue-500/10',
                              titleColor: 'text-blue-400'
                            }
                          case 'achievement':
                            return {
                              borderColor: 'border-green-500',
                              bgColor: 'bg-green-500/10',
                              titleColor: 'text-green-400'
                            }
                          case 'failure':
                            return {
                              borderColor: 'border-red-500',
                              bgColor: 'bg-red-500/10',
                              titleColor: 'text-red-400'
                            }
                          default:
                            return {
                              borderColor: 'border-gray-500',
                              bgColor: 'bg-gray-500/10',
                              titleColor: 'text-gray-400'
                            }
                        }
                      }
                      
                      const style = getSectionStyle(section.type)
                      
                      return (
                        <div key={i} className={`${style.bgColor} ${style.borderColor} border-l-4 rounded-lg p-6`}>
                          <h5 className={`text-lg font-bold ${style.titleColor} mb-3`}>
                            {section.title}
                          </h5>
                          <p className="text-gray-300 leading-relaxed">
                            {section.content}
                          </p>
                        </div>
                      )
                    })}
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* 4. 팀워크 & 협업 */}
          <Card className="bg-gray-800/80 backdrop-blur-sm border border-gray-600/50 shadow-2xl mb-8">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-white">
                {teamwork.title}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {teamwork.items.map((item, idx) => (
                <div key={idx} className="flex gap-4">
                  <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Users className="w-6 h-6 text-blue-400" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-semibold text-cyan-400 mb-2">{item.role}</h4>
                    <p className="text-gray-300 mb-2">{item.description}</p>
                    <p className="text-sm text-green-400">→ {item.outcome}</p>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* 구분선 */}
          <div className="relative h-16 flex items-center justify-center my-12">
            <div className="w-full max-w-md h-px opacity-50" style={{ background: 'linear-gradient(to right, transparent, #3b82f6, transparent)' }}></div>
          </div>

          {/* 중단 섹션들 - 면접 대비 */}
          
          {/* 6. 문제 해결 프로세스 - 한 줄로 */}
          <Card className="bg-gray-800/80 backdrop-blur-sm border border-gray-600/50 shadow-2xl mb-8">
            <CardHeader>
              <CardTitle className="text-xl font-bold text-white">
                {problemSolving.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {problemSolving.items.map((item) => (
                  <div key={item.step} className="flex gap-3">
                    <div className="w-8 h-8 bg-blue-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-blue-400 font-bold">{item.step}</span>
                    </div>
                    <div>
                      <div className="font-semibold text-cyan-400">{item.name}</div>
                      <div className="text-sm text-gray-400">{item.description}</div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* 10. 업무 스타일 */}
          <Card className="bg-gray-800/80 backdrop-blur-sm border border-gray-600/50 shadow-2xl mb-8">
            <CardHeader>
              <CardTitle className="text-xl font-bold text-white">
                {workStyle.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-6">
                {workStyle.items.map((item, idx) => (
                  <div key={idx} className="text-center">
                    <div className="font-semibold text-cyan-400 mb-2">{item.aspect}</div>
                    <div className="text-sm text-gray-300">{item.description}</div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>


          {/* 대외활동 상세 섹션 */}
          <div id="activities" className="mt-16">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">{activities.title}</h2>
            
            <div className="space-y-8">
              {activities.items.filter(activity => activity.name && activity.name.trim()).map((activity, idx) => {
                const IconComponent = activity.icon;
                const textColor = `text-${activity.color}-400`;
                const bgColor = `bg-${activity.color}-500/20`;
                
                return (
                  <Card key={idx} className="bg-gray-800/80 backdrop-blur-sm border border-gray-600/50 shadow-2xl">
                    <CardHeader>
                      <CardTitle className="text-xl font-bold text-white flex items-center gap-3">
                        <div className={`w-8 h-8 ${bgColor} rounded-lg flex items-center justify-center`}>
                          <IconComponent className={`w-5 h-5 ${textColor}`} />
                        </div>
                        {activity.name}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="grid md:grid-cols-3 gap-6">
                        <div>
                          <h4 className={`font-semibold ${textColor} mb-2`}>기간</h4>
                          <p className="text-gray-300">{activity.period}</p>
                        </div>
                        <div>
                          <h4 className={`font-semibold ${textColor} mb-2`}>
                            {activity.organization ? '소속' : '활동 내용'}
                          </h4>
                          <p className="text-gray-300">
                            {activity.organization || activity.activity}
                          </p>
                        </div>
                        <div>
                          <h4 className={`font-semibold ${textColor} mb-2`}>
                            {activity.role ? '담당 업무' : '주요 성과'}
                          </h4>
                          <p className="text-gray-300">
                            {activity.role || activity.achievement}
                          </p>
                        </div>
                      </div>
                      <div className="mt-6">
                        <h4 className={`font-semibold ${textColor} mb-3`}>상세 설명</h4>
                        <div className="text-gray-300 leading-relaxed space-y-2">
                          {activity.details?.map((detail, detailIdx) => (
                            <p key={detailIdx}>
                              - <span className={`${textColor} font-medium`}>{detail.label}</span>: {detail.content}
                            </p>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}