import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function GET(request: NextRequest) {
  try {
    // page.tsx 파일 경로
    const aboutPagePath = path.join(process.cwd(), 'app/about/page.tsx');
    
    // 파일 읽기
    const fileContent = fs.readFileSync(aboutPagePath, 'utf-8');
    
    const result: any = {};
    
    // coreValues 추출
    const coreValuesMatch = fileContent.match(/const coreValues = {[\s\S]*?title: "(.*?)",[\s\S]*?items: \[([\s\S]*?)\][\s\S]*?}/);
    if (coreValuesMatch) {
      result.coreValues = {
        title: coreValuesMatch[1],
        items: extractCoreValuesItems(coreValuesMatch[2])
      };
    }
    
    // strengths 추출
    const strengthsMatch = fileContent.match(/const strengths = {[\s\S]*?title: "(.*?)",[\s\S]*?items: \[([\s\S]*?)\][\s\S]*?}/);
    if (strengthsMatch) {
      result.strengths = {
        title: strengthsMatch[1],
        items: extractStrengthsItems(strengthsMatch[2])
      };
    }
    
    // growthStories 추출
    const growthStoriesMatch = fileContent.match(/const growthStories = {[\s\S]*?title: "(.*?)",[\s\S]*?items: \[([\s\S]*?)\][\s\S]*?}/);
    if (growthStoriesMatch) {
      result.growthStories = {
        title: growthStoriesMatch[1],
        items: extractGrowthStoriesItems(growthStoriesMatch[2])
      };
    }
    
    // teamwork 추출
    const teamworkMatch = fileContent.match(/const teamwork = {[\s\S]*?title: "(.*?)",[\s\S]*?items: \[([\s\S]*?)\][\s\S]*?}/);
    if (teamworkMatch) {
      result.teamwork = {
        title: teamworkMatch[1],
        items: extractTeamworkItems(teamworkMatch[2])
      };
    }
    
    // problemSolving 추출
    const problemSolvingMatch = fileContent.match(/const problemSolving = {[\s\S]*?title: "(.*?)",[\s\S]*?items: \[([\s\S]*?)\][\s\S]*?}/);
    if (problemSolvingMatch) {
      result.problemSolving = {
        title: problemSolvingMatch[1],
        items: extractProblemSolvingItems(problemSolvingMatch[2])
      };
    }
    
    // workStyle 추출
    const workStyleMatch = fileContent.match(/const workStyle = {[\s\S]*?title: "(.*?)",[\s\S]*?items: \[([\s\S]*?)\][\s\S]*?}/);
    if (workStyleMatch) {
      result.workStyle = {
        title: workStyleMatch[1],
        items: extractWorkStyleItems(workStyleMatch[2])
      };
    }
    
    // activities 추출 - 전체 배열을 정확히 가져오기 위해 끝까지 매칭
    const activitiesMatch = fileContent.match(/const activities = {[\s\S]*?title: "(.*?)",[\s\S]*?items: \[([\s\S]*?)\]\s*}\s*$/m);
    if (activitiesMatch) {
      result.activities = {
        title: activitiesMatch[1],
        items: extractActivitiesItems(activitiesMatch[2])
      };
    }
    
    return NextResponse.json(result);
    
  } catch (error) {
    console.error('About API Error:', error);
    return NextResponse.json({
      error: `파일 읽기 또는 파싱 중 오류 발생: ${error}`
    }, { status: 500 });
  }
}

// coreValues 아이템 추출
function extractCoreValuesItems(itemsString: string) {
  const questions = itemsString.match(/question: "(.*?)"/g);
  const answers = itemsString.match(/answer: "([\s\S]*?)"/g);
  
  const items = [];
  if (questions && answers) {
    for (let i = 0; i < Math.min(questions.length, answers.length); i++) {
      const question = questions[i].replace('question: "', '').replace('"', '');
      const answer = answers[i].replace('answer: "', '').replace(/\\n\\n/g, '\n').replace(/\\n/g, '\n').slice(0, -1);
      items.push({ question, answer });
    }
  }
  return items;
}

// strengths 아이템 추출
function extractStrengthsItems(itemsString: string) {
  const names = itemsString.match(/name: "(.*?)"/g);
  const descriptions = itemsString.match(/description: "(.*?)"/g);
  
  const items = [];
  if (names && descriptions) {
    for (let i = 0; i < Math.min(names.length, descriptions.length); i++) {
      const name = names[i].replace('name: "', '').replace('"', '');
      const description = descriptions[i].replace('description: "', '').replace('"', '');
      items.push({ name, description });
    }
  }
  return items;
}

// growthStories 아이템 추출
function extractGrowthStoriesItems(itemsString: string) {
  const titles = itemsString.match(/title: "(.*?)"/g);
  const descriptions = itemsString.match(/description: "(.*?)"/g);
  
  const items = [];
  if (titles && descriptions) {
    for (let i = 0; i < Math.min(titles.length, descriptions.length); i++) {
      const title = titles[i].replace('title: "', '').replace('"', '');
      const description = descriptions[i].replace('description: "', '').replace('"', '');
      items.push({ title, description });
    }
  }
  return items;
}

// teamwork 아이템 추출
function extractTeamworkItems(itemsString: string) {
  const roles = itemsString.match(/role: "(.*?)"/g);
  const descriptions = itemsString.match(/description: "(.*?)"/g);
  const outcomes = itemsString.match(/outcome: "(.*?)"/g);
  
  const items = [];
  if (roles && descriptions && outcomes) {
    for (let i = 0; i < Math.min(roles.length, descriptions.length, outcomes.length); i++) {
      const role = roles[i].replace('role: "', '').replace('"', '');
      const description = descriptions[i].replace('description: "', '').replace('"', '');
      const outcome = outcomes[i].replace('outcome: "', '').replace('"', '');
      items.push({ role, description, outcome });
    }
  }
  return items;
}

// problemSolving 아이템 추출  
function extractProblemSolvingItems(itemsString: string) {
  const steps = itemsString.match(/step: (\d+)/g);
  const names = itemsString.match(/name: "(.*?)"/g);
  const descriptions = itemsString.match(/description: "(.*?)"/g);
  
  const items = [];
  if (steps && names && descriptions) {
    for (let i = 0; i < Math.min(steps.length, names.length, descriptions.length); i++) {
      const step = parseInt(steps[i].replace('step: ', ''));
      const name = names[i].replace('name: "', '').replace('"', '');
      const description = descriptions[i].replace('description: "', '').replace('"', '');
      items.push({ step, name, description });
    }
  }
  return items;
}

// workStyle 아이템 추출
function extractWorkStyleItems(itemsString: string) {
  const aspects = itemsString.match(/aspect: "(.*?)"/g);
  const descriptions = itemsString.match(/description: "(.*?)"/g);
  
  const items = [];
  if (aspects && descriptions) {
    for (let i = 0; i < Math.min(aspects.length, descriptions.length); i++) {
      const aspect = aspects[i].replace('aspect: "', '').replace('"', '');
      const description = descriptions[i].replace('description: "', '').replace('"', '');
      items.push({ aspect, description });
    }
  }
  return items;
}

// activities 아이템 추출
function extractActivitiesItems(itemsString: string) {
  const items = [];
  
  // icon: Brain, 같은 함수 참조를 임시로 제거해서 파싱 문제 해결
  const cleanedItemsString = itemsString.replace(/icon:\s*[A-Za-z]+,/g, '');
  
  // 각 중괄호 블록을 정확히 분리 - 중첩된 배열 고려
  let braceCount = 0;
  let currentItem = '';
  let inQuotes = false;
  let escapeNext = false;
  
  for (let i = 0; i < cleanedItemsString.length; i++) {
    const char = cleanedItemsString[i];
    
    if (escapeNext) {
      escapeNext = false;
      currentItem += char;
      continue;
    }
    
    if (char === '\\') {
      escapeNext = true;
      currentItem += char;
      continue;
    }
    
    if (char === '"' && !escapeNext) {
      inQuotes = !inQuotes;
    }
    
    if (!inQuotes) {
      if (char === '{') {
        braceCount++;
      } else if (char === '}') {
        braceCount--;
        if (braceCount === 0 && currentItem.trim()) {
          // 완전한 객체 완성
          const fullItem = '{' + currentItem + '}';
          const parsedItem = parseActivityItem(fullItem);
          if (parsedItem.name) {
            items.push(parsedItem);
          }
          currentItem = '';
          continue;
        }
      }
    }
    
    if (braceCount > 0) {
      currentItem += char;
    }
  }
  
  // 마지막에 남은 아이템 처리 - 배열이 닫히기 전까지 모든 내용 포함
  if (currentItem.trim()) {
    let fullItem = '{' + currentItem.trim();
    
    // 마지막 객체의 닫는 중괄호 누락 시 추가
    let openBraces = (fullItem.match(/{/g) || []).length;
    let closeBraces = (fullItem.match(/}/g) || []).length;
    
    // 부족한 닫는 중괄호 추가
    while (openBraces > closeBraces) {
      fullItem += '}';
      closeBraces++;
    }
    
    const parsedItem = parseActivityItem(fullItem);
    if (parsedItem.name) {
      items.push(parsedItem);
    }
  }
  
  return items;
}

// 개별 활동 아이템 파싱
function parseActivityItem(itemString: string): any {
  const item: any = {};
  
  // name 추출
  const nameMatch = itemString.match(/name:\s*"([^"]*)"/);
  if (nameMatch) item.name = nameMatch[1];
  
  // period 추출
  const periodMatch = itemString.match(/period:\s*"([^"]*)"/);
  if (periodMatch) item.period = periodMatch[1];
  
  // activity 추출
  const activityMatch = itemString.match(/activity:\s*"([^"]*)"/);
  if (activityMatch) item.activity = activityMatch[1];
  
  // achievement 추출
  const achievementMatch = itemString.match(/achievement:\s*"([^"]*)"/);
  if (achievementMatch) item.achievement = achievementMatch[1];
  
  // organization 추출
  const organizationMatch = itemString.match(/organization:\s*"([^"]*)"/);
  if (organizationMatch) item.organization = organizationMatch[1];
  
  // role 추출
  const roleMatch = itemString.match(/role:\s*"([^"]*)"/);
  if (roleMatch) item.role = roleMatch[1];
  
  // color 추출
  const colorMatch = itemString.match(/color:\s*"([^"]*)"/);
  if (colorMatch) item.color = colorMatch[1];
  
  // details 배열 추출 - 더 유연한 패턴으로 마지막 객체까지 완전히 파싱
  const detailsMatch = itemString.match(/details:\s*\[([\s\S]*)\]/s);
  if (detailsMatch) {
    const detailsArray = [];
    let detailsContent = detailsMatch[1];
    
    // 마지막 details가 잘리지 않도록 끝까지 포함
    detailsContent = detailsContent.trim();
    
    // 각 detail 객체 추출 - 멀티라인 content 지원  
    const detailPattern = /\{\s*label:\s*"([^"]*)",\s*content:\s*"([\s\S]*?)"\s*\}/g;
    let detailMatch;
    
    while ((detailMatch = detailPattern.exec(detailsContent)) !== null) {
      detailsArray.push({
        label: detailMatch[1],
        content: detailMatch[2]
      });
    }
    
    item.details = detailsArray;
  }
  
  return item;
}