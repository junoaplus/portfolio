'use client'

import { Navigation } from '@/components/navigation'
import { Card, CardContent } from '@/components/ui/card'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

export default function SkillsPage() {
  // 5개 카테고리별 기술 스택 분류
  const skillCategories = [
    {
      title: 'LLM',
      subtitle: 'Large Language Models',
      description: '대규모 언어모델과 생성형 AI',
      color: 'from-purple-500/20 to-pink-500/20',
      textColor: 'text-purple-400',
      skills: [
        { name: 'LangChain', level: 90, icon: '🔗', slug: 'langchain' },
        { name: 'RAG', level: 85, icon: '📚', slug: 'rag' },
        { name: 'LLM', level: 85, icon: '🤖', slug: 'llm' },
        { name: 'Fine-tuning', level: 80, icon: '🔧', slug: 'fine-tuning' },
        { name: 'OpenAI', level: 85, icon: '🧠', slug: 'openai' },
        { name: 'EXAONE', level: 70, icon: '🤖', slug: 'exaone' },
        { name: 'Qdrant', level: 80, icon: '🔍', slug: 'qdrant' },
        { name: 'FAISS', level: 75, icon: '🎯', slug: 'faiss' },
        { name: 'Vector DB', level: 85, icon: '🗃️', slug: 'vector-db' },
        { name: 'PySpark', level: 85, icon: '⚡', slug: 'pyspark' },
      ]
    },
    {
      title: 'ML',
      subtitle: 'Machine Learning',
      description: '머신러닝 알고리즘과 데이터 사이언스',
      color: 'from-green-500/20 to-teal-500/20',
      textColor: 'text-green-400',
      skills: [
        { name: 'Python', level: 90, icon: '🐍', slug: 'python' },
        { name: 'XGBoost', level: 80, icon: '🚀', slug: 'xgboost' },
        { name: 'LightGBM', level: 80, icon: '💡', slug: 'lightgbm' },
        { name: 'RandomForest', level: 85, icon: '🌲', slug: 'randomforest' },
        { name: 'LogisticRegression', level: 80, icon: '📊', slug: 'logisticregression' },
        { name: 'SVM', level: 75, icon: '🎯', slug: 'svm' },
        { name: 'KNN', level: 75, icon: '👥', slug: 'knn' },
        { name: 'MLP', level: 70, icon: '🧠', slug: 'mlp' },
        { name: 'scikit-learn', level: 85, icon: '🔬', slug: 'scikit-learn' },
        { name: 'pandas', level: 90, icon: '🐼', slug: 'pandas' },
        { name: 'NumPy', level: 85, icon: '🔢', slug: 'numpy' },
        { name: 'matplotlib', level: 80, icon: '📈', slug: 'matplotlib' },
        { name: 'seaborn', level: 75, icon: '🎭', slug: 'seaborn' },
        { name: 'SMOTE', level: 70, icon: '⚖️', slug: 'smote' },
        { name: 'StratifiedKFold', level: 75, icon: '🔀', slug: 'stratifiedkfold' },
        { name: 'GridSearchCV', level: 75, icon: '🔍', slug: 'gridsearchcv' },
      ]
    },
    {
      title: '백엔드',
      subtitle: 'Backend Development',
      description: '서버 개발과 API 구축',
      color: 'from-blue-500/20 to-cyan-500/20',
      textColor: 'text-blue-400',
      skills: [
        { name: 'FastAPI', level: 80, icon: '🚀', slug: 'fastapi' },
        { name: 'Django', level: 75, icon: '🟢', slug: 'django' },
        { name: 'PostgreSQL', level: 80, icon: '🐘', slug: 'postgresql' },
        { name: 'Redis', level: 75, icon: '💾', slug: 'redis' },
        { name: 'SQLAlchemy', level: 75, icon: '🗄️', slug: 'sqlalchemy' },
        { name: 'Pinecone', level: 80, icon: '🌲', slug: 'pinecone' },
        { name: 'Pydantic', level: 75, icon: '✅', slug: 'pydantic' },
        { name: 'Uvicorn', level: 70, icon: '🦄', slug: 'uvicorn' },
        { name: 'HTTPX', level: 65, icon: '🌐', slug: 'httpx' },
        { name: 'Loguru', level: 65, icon: '📝', slug: 'loguru' },
        { name: 'Geopy', level: 60, icon: '🌍', slug: 'geopy' },
        { name: 'Tiktoken', level: 70, icon: '🎫', slug: 'tiktoken' },
      ]
    },
    {
      title: '인프라',
      subtitle: 'Infrastructure & DevOps',
      description: '배포, 운영, 클라우드 인프라',
      color: 'from-yellow-500/20 to-orange-500/20',
      textColor: 'text-yellow-400',
      skills: [
        { name: 'Docker', level: 70, icon: '🐳', slug: 'docker' },
        { name: 'AWS EC2', level: 65, icon: '☁️', slug: 'aws-ec2' },
        { name: 'Nginx', level: 65, icon: '🔧', slug: 'nginx' },
        { name: 'Vercel', level: 85, icon: '▲', slug: 'vercel' },
      ]
    },
    {
      title: '프론트엔드',
      subtitle: 'Frontend & UI/UX',
      description: '웹 프론트엔드와 사용자 인터페이스',
      color: 'from-red-500/20 to-pink-500/20',
      textColor: 'text-red-400',
      skills: [
        { name: 'Next.js 15', level: 90, icon: '🔺', slug: 'next-js' },
        { name: 'React', level: 95, icon: '⚛️', slug: 'react' },
        { name: 'TypeScript', level: 85, icon: '📘', slug: 'typescript' },
        { name: 'Tailwind CSS', level: 90, icon: '🎨', slug: 'tailwind-css' },
        { name: 'Streamlit', level: 80, icon: '📊', slug: 'streamlit' },
      ]
    }
  ]

  return (
    <div className="min-h-screen scroll-smooth snap-y snap-mandatory overflow-y-auto h-screen">
      {/* Navigation */}
      <Navigation />

      {/* Tech Stack Section - 풀스크린 */}
      <section className="min-h-screen snap-start flex items-center justify-center py-20 px-4 relative" style={{ background: 'linear-gradient(to bottom right, #111827, #000000, #111827)' }}>
        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-40" style={{
          backgroundImage: `linear-gradient(rgba(59,130,246,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(59,130,246,0.03) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}></div>

        {/* Glow Effects */}
        <div className="absolute top-20 left-20 w-96 h-96 rounded-full filter blur-3xl" style={{ background: 'linear-gradient(to right, rgba(37, 99, 235, 0.1), rgba(147, 51, 234, 0.1))' }}></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 rounded-full filter blur-3xl" style={{ background: 'linear-gradient(to right, rgba(147, 51, 234, 0.1), rgba(236, 72, 153, 0.1))' }}></div>

        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">기술 스택</h2>
            <p className="text-xl text-gray-300">
              5개 전문 분야별로 체계화된 기술 역량
            </p>
          </div>

          {/* 카테고리별 기술 스택 - 세로로 배치 */}
          <div className="space-y-16">
            {skillCategories.map((category, categoryIndex) => (
              <div key={category.title} className="space-y-6">
                {/* 카테고리 헤더 */}
                <div className="text-center">
                  <h3 className="text-3xl font-bold text-white mb-2">
                    {category.title}
                  </h3>
                  <p className="text-lg text-gray-400 mb-1">
                    {category.subtitle}
                  </p>
                  <p className="text-sm text-gray-500">
                    {category.description}
                  </p>
                </div>

                {/* 기술 카드 그리드 - 벽돌식 레이아웃 */}
                <div className="space-y-4">
                  {/* 첫 번째 줄: 6개 */}
                  {category.skills.length > 6 ? (
                    <>
                      <div className="grid grid-cols-6 gap-3">
                        {category.skills.slice(0, 6).map((tech) => (
                          <Link key={tech.slug} href={`/skills/${tech.slug}`}>
                            <Card style={{ background: 'rgb(17 24 39)', border: '1px solid rgb(31 41 55)' }} className="h-16 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-105 cursor-pointer group relative overflow-hidden">
                              <div className={`absolute inset-0 bg-gradient-to-r ${category.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                              <CardContent className="p-3 h-full flex items-center gap-3 relative z-10">
                                <div className="text-2xl group-hover:scale-110 transition-transform duration-300">
                                  {tech.icon}
                                </div>
                                <div className="flex-1 min-w-0">
                                  <div className="text-sm font-bold text-white leading-tight truncate">
                                    {tech.name}
                                  </div>
                                </div>
                                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                  <ArrowRight className={`w-4 h-4 ${category.textColor}`} />
                                </div>
                              </CardContent>
                            </Card>
                          </Link>
                        ))}
                      </div>
                      
                      {/* 두 번째 줄: 나머지 (벽돌식) */}
                      {category.skills.length > 6 && (
                        <div className="grid grid-cols-12 gap-3">
                          <div className="col-span-1"></div>
                          {category.skills.slice(6).map((tech) => (
                            <Link
                              key={tech.slug}
                              href={`/skills/${tech.slug}`}
                              className="col-span-2"
                            >
                              <Card style={{ background: 'rgb(17 24 39)', border: '1px solid rgb(31 41 55)' }} className="h-16 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-105 cursor-pointer group relative overflow-hidden">
                                <div className={`absolute inset-0 bg-gradient-to-r ${category.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                                <CardContent className="p-3 h-full flex items-center gap-3 relative z-10">
                                  <div className="text-2xl group-hover:scale-110 transition-transform duration-300">
                                    {tech.icon}
                                  </div>
                                  <div className="flex-1 min-w-0">
                                    <div className="text-sm font-bold text-white leading-tight truncate">
                                      {tech.name}
                                    </div>
                                  </div>
                                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <ArrowRight className={`w-4 h-4 ${category.textColor}`} />
                                  </div>
                                </CardContent>
                              </Card>
                            </Link>
                          ))}
                          <div className="col-span-1"></div>
                        </div>
                      )}
                    </>
                  ) : (
                    /* 6개 이하일 때는 한 줄에 모두 배치 */
                    <div className={`grid gap-3 ${category.skills.length <= 5 ? 'grid-cols-5' : 'grid-cols-6'} justify-center`}>
                      {category.skills.map((tech) => (
                        <Link key={tech.slug} href={`/skills/${tech.slug}`}>
                          <Card style={{ background: 'rgb(17 24 39)', border: '1px solid rgb(31 41 55)' }} className="h-16 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-105 cursor-pointer group relative overflow-hidden">
                            <div className={`absolute inset-0 bg-gradient-to-r ${category.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                            <CardContent className="p-3 h-full flex items-center gap-3 relative z-10">
                              <div className="text-2xl group-hover:scale-110 transition-transform duration-300">
                                {tech.icon}
                              </div>
                              <div className="flex-1 min-w-0">
                                <div className="text-sm font-bold text-white leading-tight truncate">
                                  {tech.name}
                                </div>
                              </div>
                              <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <ArrowRight className={`w-4 h-4 ${category.textColor}`} />
                              </div>
                            </CardContent>
                          </Card>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}