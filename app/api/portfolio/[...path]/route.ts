/**
 * Next.js API Route - 포트폴리오 컨텐츠 동적 제공
 * 
 * 역할:
 * - 프론트엔드 페이지 파일(.tsx)을 직접 읽어서 데이터 추출
 * - boardgame-chatbot 페이지 데이터 파싱
 */

import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs/promises';
import path from 'path';

// boardgame-chatbot 페이지 전용 데이터 추출
function extractBoardgameChatbotData(fileContent: string): any {
  const data: any = {};
  
  try {
    // 1. const project = { ... } 추출 (10-50줄)
    const projectMatch = fileContent.match(/const\s+project\s*=\s*\{[\s\S]*?\n\s*\}/);
    if (projectMatch) {
      // 간단한 파싱을 위해 정규식으로 각 필드 추출
      const projectStr = projectMatch[0];
      
      // id
      const idMatch = projectStr.match(/id:\s*(\d+)/);
      if (idMatch) data.id = parseInt(idMatch[1]);
      
      // title
      const titleMatch = projectStr.match(/title:\s*"([^"]*)"/);
      if (titleMatch) data.title = titleMatch[1];
      
      // description
      const descMatch = projectStr.match(/description:\s*"([^"]*)"/);
      if (descMatch) data.description = descMatch[1];
      
      // longDescription
      const longDescMatch = projectStr.match(/longDescription:\s*"([^"]*)"/);
      if (longDescMatch) data.longDescription = longDescMatch[1];
      
      // tech 배열
      const techMatch = projectStr.match(/tech:\s*\[([^\]]*)\]/);
      if (techMatch) {
        data.tech = techMatch[1]
          .split(',')
          .map(t => t.trim().replace(/['"]/g, ''))
          .filter(t => t);
      }
      
      // category
      const categoryMatch = projectStr.match(/category:\s*"([^"]*)"/);
      if (categoryMatch) data.category = categoryMatch[1];
      
      // status
      const statusMatch = projectStr.match(/status:\s*"([^"]*)"/);
      if (statusMatch) data.status = statusMatch[1];
      
      // date
      const dateMatch = projectStr.match(/date:\s*"([^"]*)"/);
      if (dateMatch) data.date = dateMatch[1];
      
      // github 필드 제외 (사용하지 않음)
      
      // achievements 배열
      const achievementsMatch = projectStr.match(/achievements:\s*\[([^\]]*)\]/s);
      if (achievementsMatch) {
        data.achievements = achievementsMatch[1]
          .split(/,\s*(?=")/)
          .map(a => a.trim().replace(/^"|"$/g, ''))
          .filter(a => a);
      }
      
      // challenges 배열
      const challengesMatch = projectStr.match(/challenges:\s*\[([^\]]*)\]/s);
      if (challengesMatch) {
        data.challenges = challengesMatch[1]
          .split(/",\s*"/)
          .map(c => c.replace(/^[\s"]+|[\s"]+$/g, ''))
          .filter(c => c);
      }
      
      // solutions 배열
      const solutionsMatch = projectStr.match(/solutions:\s*\[([^\]]*)\]/s);
      if (solutionsMatch) {
        data.solutions = solutionsMatch[1]
          .split(/",\s*"/)
          .map(s => s.replace(/^[\s"]+|[\s"]+$/g, ''))
          .filter(s => s);
      }
    }
    
    // 2. 팀 구성 정보 추출 (118-120줄)
    const teamMatch = fileContent.match(/팀 구성.*?\)([\s\S]*?)<\/p>/);
    if (teamMatch) {
      const teamText = teamMatch[1].replace(/<[^>]*>/g, '').trim();
      data.team = teamText;
    }
    
    // 3. 담당 역할 추출 (143-150줄)
    const roleSection = fileContent.match(/담당 역할[\s\S]*?<\/Card>/);
    if (roleSection) {
      const roles = [];
      const roleMatches = roleSection[0].matchAll(/<div>•\s*<span[^>]*>([^<]*)<\/span>([^<]*)<\/div>/g);
      for (const match of roleMatches) {
        const role = (match[1] + match[2]).trim();
        if (role) roles.push(role);
      }
      data.myRole = roles;
    }
    
    // 4. 프로젝트 회고 추출 (293-328줄)
    const retrospective: any = {};
    
    // AWS 배포 경험
    const awsMatch = fileContent.match(/AWS 배포의 전반적 경험[\s\S]*?<\/p>/);
    if (awsMatch) {
      const awsText = awsMatch[0]
        .replace(/<span[^>]*>/g, '')
        .replace(/<\/span>/g, '')
        .replace(/<[^>]*>/g, '')
        .replace(/AWS 배포의 전반적 경험/, '')
        .trim();
      retrospective.aws_experience = awsText;
    }
    
    // 파인튜닝 핵심 요소
    const finetuningMatch = fileContent.match(/파인튜닝의 핵심 요소들[\s\S]*?<\/p>/);
    if (finetuningMatch) {
      const finetuningText = finetuningMatch[0]
        .replace(/<span[^>]*>/g, '')
        .replace(/<\/span>/g, '')
        .replace(/<[^>]*>/g, '')
        .replace(/파인튜닝의 핵심 요소들/, '')
        .trim();
      retrospective.finetuning_insights = finetuningText;
    }
    
    // 벡터DB 청킹 전략
    const chunkingMatch = fileContent.match(/벡터DB 청킹 전략의 중요성[\s\S]*?<\/p>/);
    if (chunkingMatch) {
      const chunkingText = chunkingMatch[0]
        .replace(/<span[^>]*>/g, '')
        .replace(/<\/span>/g, '')
        .replace(/<[^>]*>/g, '')
        .replace(/벡터DB 청킹 전략의 중요성/, '')
        .trim();
      retrospective.chunking_strategy = chunkingText;
    }
    
    data.retrospective = retrospective;
    
    // 5. 시스템 아키텍처 정보 추출
    const architecture: any = {};
    
    // Django Frontend (356-361줄)
    const djangoSection = fileContent.match(/Django Frontend[\s\S]*?<\/ul>/);
    if (djangoSection) {
      const djangoFeatures = [];
      const featureMatches = djangoSection[0].matchAll(/<li>•\s*([^<]*)<\/li>/g);
      for (const match of featureMatches) {
        if (match[1]) djangoFeatures.push(match[1].trim());
      }
      architecture.frontend = djangoFeatures;
    }
    
    // FastAPI Backend (370-375줄)
    const fastapiSection = fileContent.match(/FastAPI Backend[\s\S]*?<\/ul>/);
    if (fastapiSection) {
      const fastapiFeatures = [];
      const featureMatches = fastapiSection[0].matchAll(/<li>•\s*([^<]*)<\/li>/g);
      for (const match of featureMatches) {
        if (match[1]) fastapiFeatures.push(match[1].trim());
      }
      architecture.backend = fastapiFeatures;
    }
    
    // 배포 환경 (386-402줄)
    const deploySection = fileContent.match(/배포 환경[\s\S]*?AWS EC2[\s\S]*?<\/div>\s*<\/div>/);
    if (deploySection) {
      const deployItems = [];
      const itemMatches = deploySection[0].matchAll(/<span[^>]*><\/span>\s*([^<\n]*)/g);
      for (const match of itemMatches) {
        const item = match[1].trim();
        if (item && item.length > 0) deployItems.push(item);
      }
      architecture.deployment = deployItems;
    }
    
    // 핵심 기능 (413-429줄)
    const coreSection = fileContent.match(/핵심 기능[\s\S]*?<\/div>\s*<\/div>/);
    if (coreSection) {
      const coreFeatures = [];
      const featureMatches = coreSection[0].matchAll(/<span[^>]*><\/span>\s*([^<\n]*)/g);
      for (const match of featureMatches) {
        const feature = match[1].trim();
        if (feature && feature.length > 0) coreFeatures.push(feature);
      }
      architecture.core_features = coreFeatures;
    }
    
    data.architecture = architecture;
    
  } catch (error) {
    console.error('Error extracting boardgame data:', error);
  }
  
  return data;
}

// 완벽 파싱: newspaper-churn 데이터 추출
function extractNewspaperChurnData(fileContent: string): any {
  const data: any = {};
  
  try {
    // 1. 기본 프로젝트 정보 추출
    const projectMatch = fileContent.match(/const\s+project\s*=\s*\{[\s\S]*?\n\s*\}/);
    if (projectMatch) {
      const projectStr = projectMatch[0];
      
      const idMatch = projectStr.match(/id:\s*(\d+)/);
      if (idMatch) data.id = parseInt(idMatch[1]);
      
      const titleMatch = projectStr.match(/title:\s*"([^"]*)"/);
      if (titleMatch) data.title = titleMatch[1];
      
      const descMatch = projectStr.match(/description:\s*"([^"]*)"/);
      if (descMatch) data.description = descMatch[1];
      
      const longDescMatch = projectStr.match(/longDescription:\s*"([^"]*)"/);
      if (longDescMatch) data.longDescription = longDescMatch[1];
      
      const techMatch = projectStr.match(/tech:\s*\[([^\]]*)\]/);
      if (techMatch) {
        data.tech = techMatch[1]
          .split(',')
          .map(t => t.trim().replace(/['"]/g, ''))
          .filter(t => t);
      }
      
      const categoryMatch = projectStr.match(/category:\s*"([^"]*)"/);
      if (categoryMatch) data.category = categoryMatch[1];
      
      const statusMatch = projectStr.match(/status:\s*"([^"]*)"/);
      if (statusMatch) data.status = statusMatch[1];
      
      const dateMatch = projectStr.match(/date:\s*"([^"]*)"/);
      if (dateMatch) data.date = dateMatch[1];
      
      const achievementsMatch = projectStr.match(/achievements:\s*\[([^\]]*)\]/s);
      if (achievementsMatch) {
        data.achievements = achievementsMatch[1]
          .split(/,\s*(?=")/)
          .map(a => a.trim().replace(/^"|"$/g, ''))
          .filter(a => a);
      }
      
      const challengesMatch = projectStr.match(/challenges:\s*\[([^\]]*)\]/s);
      if (challengesMatch) {
        data.challenges = challengesMatch[1]
          .split(/",\s*"/)
          .map(c => c.replace(/^[\s"]+|[\s"]+$/g, ''))
          .filter(c => c);
      }
      
      const solutionsMatch = projectStr.match(/solutions:\s*\[([^\]]*)\]/s);
      if (solutionsMatch) {
        data.solutions = solutionsMatch[1]
          .split(/",\s*"/)
          .map(s => s.replace(/^[\s"]+|[\s"]+$/g, ''))
          .filter(s => s);
      }
    }
    
    // 2. 팀 구성 정보 추출
    const teamMatch = fileContent.match(/팀 구성[\s\S]*?<p[^>]*>([^<]*)<\/p>/);
    if (teamMatch) {
      data.team = teamMatch[1].trim();
    }
    
    // 3. 담당 역할 추출 (메인 데이터 사이언티스트)
    const roleSection = fileContent.match(/담당 역할[\s\S]*?<\/Card>/);
    if (roleSection) {
      const roles = [];
      const roleMatches = roleSection[0].matchAll(/<div>•\s*<span[^>]*>([^<]*)<\/span>([^<]*)<\/div>/g);
      for (const match of roleMatches) {
        const role = (match[1] + match[2]).trim();
        if (role) roles.push(role);
      }
      data.myRole = roles;
    }
    
    // 4. 프로젝트 회고 추출
    const retrospective: any = {};
    
    // SMOTE 오버샘플링 회고
    const smoteMatch = fileContent.match(/SMOTE 오버샘플링의 효과적 활용[\s\S]*?<\/p>/);
    if (smoteMatch) {
      const smoteText = smoteMatch[0]
        .replace(/<[^>]*>/g, '')
        .replace(/SMOTE 오버샘플링의 효과적 활용/, '')
        .trim();
      retrospective.smote_insights = smoteText;
    }
    
    // 알고리즘 비교 회고
    const algoMatch = fileContent.match(/다양한 알고리즘 비교의 중요성[\s\S]*?<\/p>/);
    if (algoMatch) {
      const algoText = algoMatch[0]
        .replace(/<[^>]*>/g, '')
        .replace(/다양한 알고리즘 비교의 중요성/, '')
        .trim();
      retrospective.algorithm_comparison = algoText;
    }
    
    // 실무적 성능 지표 회고
    const metricsMatch = fileContent.match(/실무적 성능 지표의 필요성[\s\S]*?<\/p>/);
    if (metricsMatch) {
      const metricsText = metricsMatch[0]
        .replace(/<[^>]*>/g, '')
        .replace(/실무적 성능 지표의 필요성/, '')
        .trim();
      retrospective.metrics_insights = metricsText;
    }
    
    data.retrospective = retrospective;
    
    // 5. EDA 및 모델 분석 정보
    const analysis: any = {};
    
    // EDA 결과 정보
    analysis.eda_results = [
      "이탈 여부 분포 (클래스 불균형 확인)",
      "카테고리별 이탈 비율 분석", 
      "변수 간 상관관계 히트맵",
      "연속형 변수 분포 시각화"
    ];
    
    // 모델 최적화 기법
    analysis.optimization_techniques = [
      "Faker 데이터 증강으로 클래스 불균형 해결",
      "Cost-Sensitive Learning 적용",
      "8가지 ML 알고리즘 체계적 비교",
      "Feature Importance 분석"
    ];
    
    data.analysis = analysis;
    
  } catch (error) {
    console.error('Error extracting newspaper-churn data:', error);
  }
  
  return data;
}

// 완벽 파싱: nurse-salary 데이터 추출  
function extractNurseSalaryData(fileContent: string): any {
  // 기본 구조는 동일하되 nurse-salary 특화 정보 추출
  // 구현 필요시 추가
  return extractProjectData(fileContent);
}

// 완벽 파싱: date-recommendation 데이터 추출
function extractDateRecommendationData(fileContent: string): any {
  // 기본 구조는 동일하되 date-recommendation 특화 정보 추출
  // 구현 필요시 추가
  return extractProjectData(fileContent);
}

// 일반 프로젝트 데이터 추출 (fallback)
function extractProjectData(fileContent: string): any {
  const data: any = {};
  
  try {
    // const project = { ... } 추출
    const projectMatch = fileContent.match(/const\s+project\s*=\s*\{[\s\S]*?\n\s*\}/);
    if (projectMatch) {
      const projectStr = projectMatch[0];
      
      // 동일한 파싱 로직 사용
      const idMatch = projectStr.match(/id:\s*(\d+)/);
      if (idMatch) data.id = parseInt(idMatch[1]);
      
      const titleMatch = projectStr.match(/title:\s*"([^"]*)"/);
      if (titleMatch) data.title = titleMatch[1];
      
      const descMatch = projectStr.match(/description:\s*"([^"]*)"/);
      if (descMatch) data.description = descMatch[1];
      
      const longDescMatch = projectStr.match(/longDescription:\s*"([^"]*)"/);
      if (longDescMatch) data.longDescription = longDescMatch[1];
      
      const techMatch = projectStr.match(/tech:\s*\[([^\]]*)\]/);
      if (techMatch) {
        data.tech = techMatch[1]
          .split(',')
          .map(t => t.trim().replace(/['"]/g, ''))
          .filter(t => t);
      }
      
      const categoryMatch = projectStr.match(/category:\s*"([^"]*)"/);
      if (categoryMatch) data.category = categoryMatch[1];
      
      const statusMatch = projectStr.match(/status:\s*"([^"]*)"/);
      if (statusMatch) data.status = statusMatch[1];
      
      const dateMatch = projectStr.match(/date:\s*"([^"]*)"/);
      if (dateMatch) data.date = dateMatch[1];
      
      const achievementsMatch = projectStr.match(/achievements:\s*\[([^\]]*)\]/s);
      if (achievementsMatch) {
        data.achievements = achievementsMatch[1]
          .split(/,\s*(?=")/)
          .map(a => a.trim().replace(/^"|"$/g, ''))
          .filter(a => a);
      }
      
      const challengesMatch = projectStr.match(/challenges:\s*\[([^\]]*)\]/s);
      if (challengesMatch) {
        data.challenges = challengesMatch[1]
          .split(/",\s*"/)
          .map(c => c.replace(/^[\s"]+|[\s"]+$/g, ''))
          .filter(c => c);
      }
      
      const solutionsMatch = projectStr.match(/solutions:\s*\[([^\]]*)\]/s);
      if (solutionsMatch) {
        data.solutions = solutionsMatch[1]
          .split(/",\s*"/)
          .map(s => s.replace(/^[\s"]+|[\s"]+$/g, ''))
          .filter(s => s);
      }
    }
  } catch (error) {
    console.error('Error extracting project data:', error);
  }
  
  return data;
}

// projects/[id] 페이지에서 특정 ID 프로젝트 추출
function extractProjectsArrayData(fileContent: string, projectId: number): any {
  try {
    // const projects = [ ... ] 배열 찾기 (더 정확한 패턴)
    const projectsMatch = fileContent.match(/const\s+projects\s*=\s*\[[\s\S]*?\]\s*\n/);
    if (!projectsMatch) {
      console.log('No projects array found');
      return {};
    }
    
    const projectsStr = projectsMatch[0];
    console.log('Found projects array, length:', projectsStr.length);
    
    // 프로젝트 객체들을 찾기 위해 { id: 숫자 로 시작하는 객체 찾기
    const projectStartPattern = /\{\s*id:\s*(\d+)/g;
    const matches = [];
    let match;
    
    console.log('Looking for project ID:', projectId);
    
    // ID 2 프로젝트만 우선 처리
    if (projectId === 2) {
      // "id: 2," 패턴으로 시작하는 위치 찾기
      const id2Pattern = /id:\s*2,/;
      const id2Match = projectsStr.search(id2Pattern);
      
      if (id2Match !== -1) {
        // id: 2 이전의 { 찾기
        let startPos = id2Match;
        while (startPos > 0 && projectsStr[startPos] !== '{') {
          startPos--;
        }
        
        if (projectsStr[startPos] === '{') {
          // 해당 객체의 끝 찾기
          let braceCount = 0;
          let endPos = startPos;
          
          for (let i = startPos; i < projectsStr.length; i++) {
            if (projectsStr[i] === '{') braceCount++;
            if (projectsStr[i] === '}') {
              braceCount--;
              if (braceCount === 0) {
                endPos = i + 1;
                break;
              }
            }
          }
          
          const projectObjStr = projectsStr.substring(startPos, endPos);
          return parseProjectObject(projectObjStr, projectId);
        }
      }
    }
  } catch (error) {
    console.error('Error extracting projects array data:', error);
  }
  
  return {};
}

// 프로젝트 객체 문자열을 파싱하는 헬퍼 함수
function parseProjectObject(objStr: string, projectId: number): any {
  const data: any = {};
  
  try {
    data.id = projectId;
    
    const titleMatch = objStr.match(/title:\s*"([^"]*)"/);
    if (titleMatch) data.title = titleMatch[1];
    
    const descMatch = objStr.match(/description:\s*"([^"]*)"/);
    if (descMatch) data.description = descMatch[1];
    
    const longDescMatch = objStr.match(/longDescription:\s*"([^"]*)"/s);
    if (longDescMatch) data.longDescription = longDescMatch[1];
    
    const techMatch = objStr.match(/tech:\s*\[([^\]]*)\]/);
    if (techMatch) {
      data.tech = techMatch[1]
        .split(',')
        .map(t => t.trim().replace(/['"]/g, ''))
        .filter(t => t);
    }
    
    const categoryMatch = objStr.match(/category:\s*"([^"]*)"/);
    if (categoryMatch) data.category = categoryMatch[1];
    
    const statusMatch = objStr.match(/status:\s*"([^"]*)"/);
    if (statusMatch) data.status = statusMatch[1];
    
    const dateMatch = objStr.match(/date:\s*"([^"]*)"/);
    if (dateMatch) data.date = dateMatch[1];
    
    const achievementsMatch = objStr.match(/achievements:\s*\[([^\]]*)\]/s);
    if (achievementsMatch) {
      data.achievements = achievementsMatch[1]
        .split(/,\s*(?=")/)
        .map(a => a.trim().replace(/^"|"$/g, ''))
        .filter(a => a);
    }
    
    const challengesMatch = objStr.match(/challenges:\s*\[([^\]]*)\]/s);
    if (challengesMatch) {
      data.challenges = challengesMatch[1]
        .split(/",\s*"/)
        .map(c => c.replace(/^[\s"]+|[\s"]+$/g, ''))
        .filter(c => c);
    }
    
    const solutionsMatch = objStr.match(/solutions:\s*\[([^\]]*)\]/s);
    if (solutionsMatch) {
      data.solutions = solutionsMatch[1]
        .split(/",\s*"/)
        .map(s => s.replace(/^[\s"]+|[\s"]+$/g, ''))
        .filter(s => s);
    }
    
  } catch (error) {
    console.error('Error parsing project object:', error);
  }
  
  return data;
}

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ path: string[] }> }
) {
  try {
    const resolvedParams = await params;
    const fullPath = resolvedParams.path.join('/');
    
    const headers = {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
      'Content-Type': 'application/json',
    };

    // 파일 경로와 함수 결정
    let filePath: string;
    let extractedData: any = {};

    if (fullPath === 'boardgame-chatbot') {
      filePath = path.join(process.cwd(), 'app', 'boardgame-chatbot', 'page.tsx');
      const fileContent = await fs.readFile(filePath, 'utf-8');
      extractedData = extractBoardgameChatbotData(fileContent);
    } else if (fullPath === 'newspaper-churn') {
      filePath = path.join(process.cwd(), 'app', 'newspaper-churn', 'page.tsx');
      const fileContent = await fs.readFile(filePath, 'utf-8');
      extractedData = extractNewspaperChurnData(fileContent);  // 완벽 파싱
    } else if (fullPath === 'nurse-salary') {
      filePath = path.join(process.cwd(), 'app', 'nurse-salary', 'page.tsx');
      const fileContent = await fs.readFile(filePath, 'utf-8');
      extractedData = extractNurseSalaryData(fileContent);  // 완벽 파싱 준비
    } else if (fullPath === 'date-recommendation') {
      filePath = path.join(process.cwd(), 'app', 'date-recommendation', 'page.tsx');
      const fileContent = await fs.readFile(filePath, 'utf-8');
      extractedData = extractDateRecommendationData(fileContent);  // 완벽 파싱 준비
    } else {
      return NextResponse.json(
        { error: 'Page not found', path: fullPath },
        { status: 404, headers }
      );
    }

    // 성공 응답
    return NextResponse.json(
      {
        path: fullPath,
        content: extractedData,
        timestamp: new Date().toISOString()
      },
      { status: 200, headers }
    );

  } catch (error) {
    console.error('Portfolio API Error:', error);
    return NextResponse.json(
      { error: 'Internal server error', details: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    );
  }
}

export async function OPTIONS() {
  return new Response(null, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  });
}