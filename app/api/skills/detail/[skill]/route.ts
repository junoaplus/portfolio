import { NextRequest, NextResponse } from 'next/server'
import fs from 'fs'
import path from 'path'

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ skill: string }> }
) {
  try {
    const resolvedParams = await params
    const skill = resolvedParams.skill.toLowerCase()
    
    // 스킬 페이지 존재 여부 확인
    const skillFilePath = path.join(process.cwd(), `app/skills/${skill}/page.tsx`)
    
    if (!fs.existsSync(skillFilePath)) {
      return NextResponse.json(
        { error: `Skill page not found: ${skill}` },
        { status: 404 }
      )
    }
    
    
    const fileContent = fs.readFileSync(skillFilePath, 'utf-8')
    
    // 헤더 정보 추출 (아이콘, 타이틀)
    const iconMatch = fileContent.match(/<div className="text-6xl mb-4">([^<]+)<\/div>/)
    const titleMatch = fileContent.match(/<h1 className="text-4xl font-black text-white mb-4">\s*([^<\n]+)\s*<\/h1>/)
    
    const icon = iconMatch ? iconMatch[1] : '🔗'
    const title = titleMatch ? titleMatch[1].trim() : skill
    
    // 내가 이해한 [스킬명] 섹션 추출 - 동적으로 스킬명 찾기
    const understandingMatch = fileContent.match(
      /내가 이해한 [^<]*[\s\S]*?<CardContent>\s*<div className="text-lg text-gray-300 leading-relaxed space-y-4">\s*([\s\S]*?)\s*<\/div>\s*<\/CardContent>/
    )
    
    let understanding = ''
    if (understandingMatch) {
      const understandingContent = understandingMatch[1]
      // p 태그들에서 텍스트 추출
      const pMatches = [...understandingContent.matchAll(/<p>([\s\S]*?)<\/p>/g)]
      understanding = pMatches.map(match => {
        // span 태그들 제거하고 텍스트만 추출
        return match[1]
          .replace(/<span[^>]*>/g, '')
          .replace(/<\/span>/g, '')
          .replace(/\s+/g, ' ')
          .trim()
      }).join('\n\n')
    }
    
    // 프로젝트 활용 사례 섹션 추출
    const projectsMatch = fileContent.match(
      /프로젝트 활용 사례[\s\S]*?<CardContent>\s*<div className="space-y-6">\s*([\s\S]*?)\s*<\/CardContent>/
    )
    
    let projects = []
    if (projectsMatch) {
      const projectsContent = projectsMatch[1]
      // 각 프로젝트 div 추출
      const projectMatches = [...projectsContent.matchAll(/<div className="bg-gradient[^>]*>([\s\S]*?)<\/div>\s*<\/div>/g)]
      
      projects = projectMatches.map(match => {
        const projectContent = match[1]
        
        // 프로젝트 제목 추출
        const titleMatch = projectContent.match(/<h3[^>]*>([\s\S]*?)<\/h3>/)
        let projectTitle = ''
        if (titleMatch) {
          projectTitle = titleMatch[1]
            .replace(/<[^>]*>/g, '')
            .replace(/\s+/g, ' ')
            .trim()
        }
        
        // 프로젝트 설명 추출
        const descMatch = projectContent.match(/<p>([\s\S]*?)<\/p>/)
        let description = ''
        if (descMatch) {
          description = descMatch[1]
            .replace(/<span[^>]*>/g, '')
            .replace(/<\/span>/g, '')
            .replace(/\s+/g, ' ')
            .trim()
        }
        
        return {
          title: projectTitle,
          description: description
        }
      }).filter(project => project.title && project.description)
    }
    
    // [스킬명]으로 해결할 수 있는 문제들 섹션 추출 - CardContent 전체를 가져와서 파싱
    const problemsMatch = fileContent.match(
      /[^<]*으로 해결할 수 있는 문제들[\s\S]*?<CardContent>\s*([\s\S]*?)\s*<\/CardContent>/
    )
    
    let problems = []
    if (problemsMatch) {
      const problemsContent = problemsMatch[1]
      // 각 문제 해결 방안 div 추출 - bg-gradient로 시작하는 모든 div 찾기
      const problemMatches = [...problemsContent.matchAll(/<div className="bg-gradient-to-r[^>]*?>([\s\S]*?)(?=<div className="bg-gradient-to-r|<\/div>\s*<\/CardContent>|$)/g)]
      
      problems = problemMatches.map(match => {
        const problemContent = match[1]
        
        // 문제 제목 추출
        const titleMatch = problemContent.match(/<h4[^>]*>([\s\S]*?)<\/h4>/)
        let problemTitle = ''
        if (titleMatch) {
          problemTitle = titleMatch[1]
            .replace(/<[^>]*>/g, '')
            .replace(/\s+/g, ' ')
            .trim()
        }
        
        // 문제 설명들 추출 (div 태그들)
        const descMatches = [...problemContent.matchAll(/<div>•\s*<span[^>]*>([^:]*?):<\/span>\s*(.*?)<\/div>/g)]
        const descriptions = descMatches.map(descMatch => ({
          label: descMatch[1].trim(),
          content: descMatch[2]
            .replace(/<[^>]*>/g, '')
            .replace(/\s+/g, ' ')
            .trim()
        }))
        
        return {
          title: problemTitle,
          descriptions: descriptions
        }
      }).filter(problem => problem.title && problem.descriptions.length > 0)
    }
    
    const skillDetail = {
      skill: skill,
      icon: icon,
      title: title,
      understanding: understanding,
      projects: projects,
      problems: problems
    }
    
    console.log(`[API] Skill detail for: ${skill}`)
    
    return NextResponse.json(skillDetail)
    
  } catch (error) {
    console.error('Error in skill detail API:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}