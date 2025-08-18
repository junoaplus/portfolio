import { NextRequest, NextResponse } from 'next/server'
import fs from 'fs'
import path from 'path'

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ category: string }> }
) {
  try {
    const resolvedParams = await params
    const category = resolvedParams.category.toLowerCase()
    
    // 1. skills/page.tsx 파일 읽기
    const filePath = path.join(process.cwd(), 'app/skills/page.tsx')
    
    if (!fs.existsSync(filePath)) {
      return NextResponse.json(
        { error: 'Skills page not found' },
        { status: 404 }
      )
    }
    
    const fileContent = fs.readFileSync(filePath, 'utf-8')
    
    // 2. skillCategories 배열 추출
    const categoriesMatch = fileContent.match(/const skillCategories = (\[[\s\S]*?\n  \])/s)
    
    if (!categoriesMatch) {
      return NextResponse.json(
        { error: 'Could not parse skillCategories' },
        { status: 500 }
      )
    }
    
    const categoriesCode = categoriesMatch[1]
    
    // 3. 카테고리 매핑 (한글 → 영문)
    const categoryMappings: { [key: string]: string } = {
      'llm': 'LLM',
      'ml': 'ML', 
      'backend': '백엔드',
      'infra': '인프라',
      'frontend': '프론트엔드'
    }
    
    const categoryTitle = categoryMappings[category]
    if (!categoryTitle) {
      return NextResponse.json(
        { error: 'Invalid category. Valid categories: llm, ml, backend, infra, frontend' },
        { status: 400 }
      )
    }
    
    // 4. 해당 카테고리의 skills 배열 찾기
    const categoryPattern = new RegExp(
      `title: '${categoryTitle}'[\\s\\S]*?skills: \\[([\\s\\S]*?)\\n\\s*\\]`,
      'i'
    )
    const categoryMatch = categoriesCode.match(categoryPattern)
    
    if (!categoryMatch) {
      return NextResponse.json(
        { error: `Category '${category}' not found` },
        { status: 404 }
      )
    }
    
    // 5. slug들 추출
    const skillsText = categoryMatch[1]
    const slugMatches = [...skillsText.matchAll(/slug: '([^']+)'/g)]
    const slugs = slugMatches.map(match => match[1])
    
    // 6. 실제 폴더 존재 여부 확인 (추가 검증)
    const skillsDir = path.join(process.cwd(), 'app/skills')
    const validSlugs = slugs.filter(slug => {
      const skillDir = path.join(skillsDir, slug)
      const skillPage = path.join(skillDir, 'page.tsx')
      return fs.existsSync(skillPage)
    })
    
    console.log(`[API] Category: ${category}, Found: ${validSlugs.length} skills`)
    
    return NextResponse.json(validSlugs)
    
  } catch (error) {
    console.error('Error in skills category API:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}