"""
Format Agent - 답변 가독성 개선 전문

역할:
1. 다른 에이전트에서 생성된 답변을 받아서 가독성만 개선
2. 내용은 절대 변경하지 않고 오직 마크다운 구조만 추가
3. GPT를 이용해 자연스러운 포매팅 적용

중요 원칙:
- 내용 절대 변경 금지
- 문장 순서 절대 변경 금지
- 단어 하나도 바꾸지 않음
- 오직 마크다운 구조만 추가
"""

from typing import Dict, Any
from workflow.state import ChatState
from utils.openai_client import get_openai_client

class FormatAgent:
    """답변 가독성 개선 전문 에이전트"""
    
    def __init__(self):
        pass
    
    async def process(self, state: ChatState) -> ChatState:
        """답변의 가독성을 개선 (내용 변경 없이)"""
        
        print(f"\n📝 Format Agent 시작")
        print(f"   원본 답변 길이: {len(state.response)}자")
        print(f"   🧾 최종 답변(포맷 전): {state.response}")
        
        try:
            # 이미 포매팅된 답변이면 스킵 (마크다운 헤더가 있는 경우)
            if "###" in state.response or "**" in state.response:
                print("   ⏩ 이미 포매팅된 답변, 스킵")
                return state
            
            # GPT로 가독성 개선
            formatted_answer = await self._format_for_readability(state.response)
            
            # 포매팅된 답변으로 교체
            state.response = formatted_answer
            
            print(f"   ✅ Format Agent 완료")
            print(f"   📝 포매팅된 답변 길이: {len(formatted_answer)}자")
            print(f"   🧾 최종 답변(포맷 후): {formatted_answer}")
            
        except Exception as e:
            print(f"   ❌ Format Agent 오류: {str(e)}")
            # 오류 발생시 원본 답변 그대로 유지
            print("   🔄 원본 답변 유지")
        
        return state
    
    async def _format_for_readability(self, raw_answer: str) -> str:
        """GPT를 이용해 답변의 가독성만 개선"""
        
        try:
            client = get_openai_client()
            
            prompt = f"""
다음 면접 답변의 내용을 절대 변경하지 말고, 오직 가독성을 위한 마크다운 구조만 추가하세요.

원본 답변:
{raw_answer}

매우 중요한 규칙:
1. 내용 절대 변경 금지 - 단어 하나도 바꾸지 마세요
2. 문장 순서 절대 변경 금지 - 순서 그대로 유지하세요
3. 의미 절대 변경 금지 - 뜻이 바뀌면 안 됩니다
4. 문체 절대 변경 금지 - 존댓말/반말 그대로 유지하세요
5. 오직 다음 마크다운 요소만 추가 가능:
   - 헤더: ### (섹션이 바뀔 때마다 반드시 추가)
   - 강조: **중요한 단어나 구문**
   - 기술용어: `백틱으로 감싸기`
   - 리스트: - (나열된 내용이 있을 때만)
   - 단락 나누기 (긴 문장을 자연스럽게 구분)

가독성 개선 가이드라인:
- 섹션이 바뀔 때마다 제목 부분에 ### 추가 (예: "### 문제 상황", "### 해결 방법", "### 성과")
- 제목이 없는 섹션이면 적절한 제목을 만들어서 ### 헤더로 추가
- 핵심 성과나 수치는 **강조**
- 기술 스택은 `백틱`으로 감싸기
- 리스트 형태 내용은 - 로 변환
- 과도한 마크다운은 금지 (필요한 구조화만)

원본 내용을 그대로 유지하면서 가독성만 높인 답변을 출력하세요.
마크다운 코드블록(```)은 사용하지 마세요.
"""

            response = await client.chat_completion_with_retry(
                messages=[
                    {"role": "system", "content": "당신은 텍스트의 내용을 절대 변경하지 않으면서 오직 가독성만 개선하는 전문가입니다."},
                    {"role": "user", "content": prompt}
                ],
                model="gpt-4o",  # 정확도 최우선
                temperature=0.1,  # 낮은 온도로 일관성 확보
                max_tokens=2000
            )
            
            formatted_answer = response.choices[0].message.content.strip()
            
            # 마크다운 코드블록 제거 (혹시 GPT가 추가했다면)
            if formatted_answer.startswith("```") and formatted_answer.endswith("```"):
                lines = formatted_answer.split('\n')
                if len(lines) > 2:
                    formatted_answer = '\n'.join(lines[1:-1])
            
            print(f"   🤖 포매팅 완료: {formatted_answer[:100]}...")
            
            return formatted_answer
            
        except Exception as e:
            print(f"   ❌ 포매팅 오류: {str(e)}")
            # 오류시 원본 답변 반환
            return raw_answer

async def format_agent(state: ChatState) -> ChatState:
    """Format Agent 실행 함수"""
    agent = FormatAgent()
    return await agent.process(state)
