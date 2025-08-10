"""
완벽한 에이전틱 워크플로우 - 당신이 원하는 정확한 구조

워크플로우:
START → Router Agent (질문 의도 파악, GPT가 필요한 것만 선택)
           ↓ (점선 - 선택된 것만 호출)
    ┌─────────┬─────────┬─────────┬─────────┐
    │ Project │  Skill  │ Cover   │ About   │
    │Extract  │Extract  │Letter   │   Me    │
    │(실제DB) │(GPT)    │(GPT)    │(GPT)    │
    └─────────┴─────────┴─────────┴─────────┘
           ↓ (실선 - 무조건 통합)
        Data Integrator (데이터 통합 및 정제)
           ↓ (실선)
      Response Generator (답변 생성)
           ↓ (에이전틱 분기 - 품질 검증)
    ┌─────────────┬─────────────┐
    │   완료 → END │  재시도 → 위로 │
    └─────────────┴─────────────┘

핵심: Router가 GPT로 진짜 선택, 선택된 것만 병렬 실행, 나머지는 무조건 실행
"""

import asyncio
import time
import logging
from typing import Dict, Any, List, Optional, Literal
from langgraph.graph import StateGraph, END

# 상태 및 에이전트 임포트
from workflow.state import PortfolioState
from agents.enhanced_router import enhanced_router_agent
from agents.project_extractor import project_extractor_agent
from agents.skill_extractor import skill_extractor_agent
from agents.about_me_extractor import about_me_extractor_agent
from agents.cover_letter_extractor import cover_letter_extractor_agent
from agents.data_integrator import data_integrator_agent
from agents.final_response_generator import final_response_generator_agent

from config.settings import Config

# 로깅 설정
logger = logging.getLogger(__name__)

# === 진짜 조건부 라우팅 함수들 ===

def route_after_router(state: PortfolioState) -> Literal["selected_extractors", "integrator"]:
    """Router 결과에 따라 선택된 Extractor만 호출 (점선 - 선택적)"""
    
    selected_extractors = getattr(state, 'selected_extractors', [])
    
    if not selected_extractors or len(selected_extractors) == 0:
        logger.info("Router가 아무 Extractor도 선택하지 않음 → 바로 Integrator로")
        return "integrator"
    
    logger.info(f"Router가 {len(selected_extractors)}개 Extractor 선택: {selected_extractors}")
    return "selected_extractors"

def route_after_extractors(state: PortfolioState) -> str:
    """Extractor 완료 후 무조건 Integrator로 (실선 - 무조건)"""
    return "integrator"

def route_after_integrator(state: PortfolioState) -> str:
    """Integrator 완료 후 무조건 Generator로 (실선 - 무조건)"""
    return "generator"

def route_after_generator(state: PortfolioState) -> Literal["validator", "end"]:
    """Generator 완료 후 품질 검증 여부 결정 (에이전틱 분기)"""
    
    # 답변이 너무 짧으면 검증
    if not state.response or len(state.response.strip()) < 50:
        logger.info("답변이 너무 짧음 → Validator로")
        return "validator"
    
    # 품질 점수가 낮으면 검증
    if hasattr(state, 'response_quality_score') and state.response_quality_score < 0.6:
        logger.info(f"품질 점수 낮음 ({state.response_quality_score:.2f}) → Validator로")
        return "validator"
    
    # 기본적으로는 완료
    logger.info("품질 OK → 완료")
    return "end"

def route_after_validator(state: PortfolioState) -> Literal["generator", "end"]:
    """Validator 완료 후 재시도 or 완료 결정"""
    
    # 최대 재시도 횟수 체크
    retry_count = getattr(state, 'retry_count', 0)
    if retry_count >= 2:
        logger.info(f"최대 재시도 횟수 도달 ({retry_count}) → 강제 완료")
        return "end"
    
    # 검증 결과에 따라 결정
    needs_improvement = getattr(state, 'needs_improvement', False)
    if needs_improvement:
        logger.info("품질 개선 필요 → Generator 재실행")
        state.retry_count = retry_count + 1
        return "generator"
    
    logger.info("Validator 통과 → 완료")
    return "end"

# === 선택된 Extractor만 병렬 실행 노드 ===

async def selected_extractors_node(state: PortfolioState) -> PortfolioState:
    """
    Router가 선택한 Extractor들만 병렬 실행
    핵심: 선택된 것만 실행, 선택 안된건 스킵
    """
    
    print("\n🎯 선택된 Extractor들만 병렬 실행...")
    start_time = time.time()
    
    # Router가 선택한 extractors 확인
    selected_extractors = getattr(state, 'selected_extractors', [])
    print(f"   Router 선택 결과: {selected_extractors}")
    
    if not selected_extractors:
        print("   ⚠️ 선택된 Extractor 없음 - 빈 데이터로 진행")
        state.extracted_data = {}
        state.data_quality_score = 0.0
        return state
    
    # Extractor 함수 매핑
    extractor_functions = {
        "project": project_extractor_agent,
        "skill": skill_extractor_agent, 
        "about_me": about_me_extractor_agent,
        "cover_letter": cover_letter_extractor_agent
    }
    
    # 선택된 것만 병렬 실행할 태스크들 생성
    tasks = []
    for extractor_name in selected_extractors:
        if extractor_name in extractor_functions:
            print(f"   📦 {extractor_name} Extractor 준비...")
            task = extractor_functions[extractor_name](state)
            tasks.append((extractor_name, task))
        else:
            print(f"   ❌ 알 수 없는 Extractor: {extractor_name}")
    
    # 병렬 실행
    extracted_data = {}
    successful_extractions = 0
    
    if tasks:
        print(f"   🚀 {len(tasks)}개 선택된 Extractor 병렬 실행...")
        
        # asyncio.gather로 병렬 실행
        results = await asyncio.gather(
            *[task for _, task in tasks],
            return_exceptions=True
        )
        
        # 결과 처리
        for i, (extractor_name, _) in enumerate(tasks):
            if not isinstance(results[i], Exception):
                extracted_data[f"{extractor_name}_data"] = results[i]
                successful_extractions += 1
                print(f"   ✅ {extractor_name} 성공")
            else:
                print(f"   ❌ {extractor_name} 실패: {results[i]}")
                # 실패한 경우 빈 데이터로 처리
                extracted_data[f"{extractor_name}_data"] = {}
    
    # State에 결과 저장
    state.extracted_data = extracted_data
    state.data_quality_score = successful_extractions / max(len(selected_extractors), 1)
    
    elapsed = time.time() - start_time
    print(f"🎯 선택된 Extractor 완료: {elapsed:.2f}초 (성공: {successful_extractions}/{len(selected_extractors)})")
    
    return state

# === 품질 검증 노드 ===

async def validator_node(state: PortfolioState) -> PortfolioState:
    """응답 품질 검증 및 개선 방향 결정"""
    
    print("\n🔍 응답 품질 검증...")
    
    try:
        from utils.openai_client import get_openai_client
        
        client = get_openai_client()
        toss_context = Config.get_toss_job_context()
        
        validation_prompt = f"""
{toss_context}

위 토스 채용 정보를 바탕으로 다음 면접 답변의 품질을 평가해주세요:

질문: {state.question}
답변: {state.response or "답변 없음"}

평가 기준 (토스 ML Engineer 기준):
1. 질문과 답변의 연관성 (0-10점)
2. 토스 요구사항 부합도 (0-10점)  
3. 구체성과 깊이 (0-10점)
4. 면접 답변으로서의 자연스러움 (0-10점)

다음 형식으로만 응답:
점수: [총점]/40
개선필요: [true/false]
이유: [간단한 개선 이유]
"""
        
        response = await client.chat_completion_with_retry(
            messages=[
                {"role": "system", "content": "당신은 토스 ML Engineer 면접 전문가입니다."},
                {"role": "user", "content": validation_prompt}
            ],
            model="gpt-4o-mini",
            temperature=0.3,
            max_tokens=300
        )
        
        validation_text = response.choices[0].message.content
        
        # 점수 파싱
        score = 25  # 기본값
        needs_improvement = False
        
        if "점수:" in validation_text:
            try:
                score_part = validation_text.split("점수:")[1].split("/")[0].strip()
                score = int(score_part)
            except:
                pass
        
        if "개선필요:" in validation_text:
            improvement_part = validation_text.split("개선필요:")[1].split("\n")[0].strip().lower()
            needs_improvement = improvement_part == "true"
        
        # State에 검증 결과 저장
        state.validation_score = score
        state.needs_improvement = needs_improvement or score < 25
        state.validation_feedback = validation_text
        
        print(f"   📊 검증 점수: {score}/40")
        print(f"   🔄 개선 필요: {'예' if needs_improvement else '아니오'}")
        
    except Exception as e:
        print(f"   ❌ 검증 오류: {str(e)}")
        # 검증 실패시 기본 통과
        state.validation_score = 25
        state.needs_improvement = False
        state.validation_feedback = "검증 프로세스 오류 - 기본 통과"
    
    return state

# === 워크플로우 생성 함수 ===

def create_portfolio_workflow() -> StateGraph:
    """
    완벽한 에이전틱 포트폴리오 워크플로우 생성
    
    당신이 원하는 정확한 구조:
    Router (선택) → [선택된 Extractor만] → Integrator → Generator → Validator
    """
    
    print("🏗️ 완벽한 에이전틱 워크플로우 생성...")
    
    # StateGraph 초기화
    workflow = StateGraph(PortfolioState)
    
    # === 노드 추가 ===
    workflow.add_node("router", enhanced_router_agent)                    # 1. Router (GPT 선택)
    workflow.add_node("selected_extractors", selected_extractors_node)    # 2. 선택된 Extractor만 병렬
    workflow.add_node("integrator", data_integrator_agent)               # 3. Data Integrator (무조건)
    workflow.add_node("generator", final_response_generator_agent)       # 4. Response Generator (무조건)
    workflow.add_node("validator", validator_node)                       # 5. Validator (조건부)
    
    # === 시작점 설정 ===
    workflow.set_entry_point("router")
    
    # === 엣지 설정 (당신이 원하는 구조) ===
    
    # Router → 선택된 Extractor만 or 바로 Integrator (점선 - 선택적)
    workflow.add_conditional_edges(
        "router",
        route_after_router,
        {
            "selected_extractors": "selected_extractors",
            "integrator": "integrator"
        }
    )
    
    # 선택된 Extractor → Integrator (실선 - 무조건)
    workflow.add_conditional_edges(
        "selected_extractors",
        route_after_extractors,
        {
            "integrator": "integrator"
        }
    )
    
    # Integrator → Generator (실선 - 무조건)
    workflow.add_conditional_edges(
        "integrator",
        route_after_integrator,
        {
            "generator": "generator"
        }
    )
    
    # Generator → Validator or END (에이전틱 분기)
    workflow.add_conditional_edges(
        "generator",
        route_after_generator,
        {
            "validator": "validator",
            "end": END
        }
    )
    
    # Validator → Generator (재시도) or END
    workflow.add_conditional_edges(
        "validator",
        route_after_validator,
        {
            "generator": "generator",
            "end": END
        }
    )
    
    # 워크플로우 컴파일
    compiled_workflow = workflow.compile()
    
    print("✅ 완벽한 에이전틱 워크플로우 컴파일 완료!")
    logger.info("Portfolio workflow successfully compiled")
    
    return compiled_workflow

# === 메인 실행 함수 ===

async def run_portfolio_workflow(
    question: str,
    company_context: str = "toss", 
    conversation_history: Optional[List[Dict]] = None
) -> Dict[str, Any]:
    """완벽한 포트폴리오 워크플로우 실행"""
    
    workflow_start_time = time.time()
    
    print("\n" + "="*80)
    print("🚀 완벽한 포트폴리오 워크플로우 시작")
    print("="*80)
    print(f"📝 질문: {question}")
    print(f"🏢 회사: {company_context}")
    
    try:
        # === 1. 입력 검증 ===
        if not question or len(question.strip()) < 3:
            raise ValueError("질문이 너무 짧습니다")
        
        # === 2. 초기 상태 생성 ===
        initial_state = PortfolioState(
            question=question.strip(),
            company_context=company_context,
            conversation_history=conversation_history or [],
            retry_count=0
        )
        
        # === 3. 워크플로우 실행 ===
        app = create_portfolio_workflow()
        
        final_state = await asyncio.wait_for(
            app.ainvoke(initial_state),
            timeout=120.0  # 2분 타임아웃
        )
        
        # === 4. 결과 처리 ===
        processing_time = time.time() - workflow_start_time
        
        if not final_state.response or len(final_state.response.strip()) < 10:
            raise ValueError("생성된 답변이 너무 짧습니다")
        
        print("\n" + "="*80)
        print("✅ 워크플로우 성공 완료!")
        print(f"⏱️ 처리시간: {processing_time:.2f}초")
        print("="*80)
        
        return {
            "success": True,
            "answer": final_state.response,
            "metadata": {
                "intent": getattr(final_state, 'intent', ''),
                "selected_extractors": getattr(final_state, 'selected_extractors', []),
                "data_quality_score": getattr(final_state, 'data_quality_score', 0.0),
                "validation_score": getattr(final_state, 'validation_score', 0),
                "processing_time": round(processing_time, 3),
                "retry_count": getattr(final_state, 'retry_count', 0)
            }
        }
        
    except Exception as e:
        processing_time = time.time() - workflow_start_time
        error_msg = str(e)
        
        print(f"\n❌ 워크플로우 오류: {error_msg}")
        
        return {
            "success": False,
            "answer": f"죄송합니다. 답변 생성 중 문제가 발생했습니다: {error_msg}",
            "metadata": {
                "processing_time": round(processing_time, 3),
                "error": error_msg
            }
        }