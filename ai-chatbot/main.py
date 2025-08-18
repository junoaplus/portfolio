"""
FastAPI 서버 진입점

역할:
- FastAPI 앱 초기화 및 설정
- CORS 설정 (Next.js 프론트엔드와 통신)
- 라우터 등록 (/chat, /health)
- 전역 에러 핸들링
- 서버 실행 관리

실행:
uvicorn main:app --reload --port 8000
"""

from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from contextlib import asynccontextmanager
import os

# 라우터 import
from api.chat import router as chat_router  
from api.health import router as health_router

@asynccontextmanager
async def lifespan(app: FastAPI):
    """
    서버 시작/종료 시 실행되는 라이프사이클 함수
    - 시작: OpenAI 클라이언트 초기화, 설정 검증
    - 종료: 리소스 정리
    """
    # === 서버 시작시 실행 ===
    print("🚀 Production-Grade AI 챗봇 서버 시작 중...")
    
    try:
        # 설정 유효성 검사
        from config.settings import Config
        Config.validate_config()
        print("✅ 환경 설정 검증 완료")
        
        # OpenAI 클라이언트 연결 테스트
        from utils.openai_client import get_openai_client
        openai_client = get_openai_client()
        
        # 연결 테스트
        connection_test = await openai_client.test_connection()
        if connection_test["success"]:
            print(f"✅ OpenAI API 연결 성공 - 응답시간: {connection_test['response_time']}초")
        else:
            print(f"⚠️ OpenAI API 연결 실패: {connection_test['error']}")
        
        # 워크플로우 상태 확인
        from workflow.graph import get_workflow_status
        workflow_status = get_workflow_status()
        print(f"✅ 워크플로우 초기화 완료 - {workflow_status['workflow_version']}")
        print(f"   └ Agent 수: {workflow_status['agents_count']}개")
        print(f"   └ 기능: {', '.join(workflow_status['features'])}")
        
        print("🎉 AI 챗봇 서버 준비 완료!")
        
    except Exception as e:
        print(f"❌ 서버 초기화 실패: {str(e)}")
        print("   └ 환경변수 OPENAI_API_KEY를 확인해주세요")
    
    yield
    
    # === 서버 종료시 실행 ===
    print("🔥 AI 챗봇 서버 종료 중...")
    
    try:
        # OpenAI 클라이언트 캐시 정리
        openai_client = get_openai_client()
        openai_client.clear_cache()
        print("✅ OpenAI 클라이언트 리소스 정리 완료")
        
        # 사용량 통계 출력
        usage_stats = openai_client.get_usage_stats()
        print(f"📊 최종 사용량 통계:")
        print(f"   └ 총 요청: {usage_stats['total_requests']}회")
        print(f"   └ 성공률: {usage_stats['success_rate']:.1f}%")
        print(f"   └ 총 토큰: {usage_stats['total_tokens']:,}개")
        print(f"   └ 예상 비용: ${usage_stats['total_cost_usd']:.4f}")
        
    except Exception as e:
        print(f"⚠️ 서버 종료 중 오류: {str(e)}")
    
    print("👋 AI 챗봇 서버 종료 완료")

# FastAPI 앱 생성
app = FastAPI(
    title="AI 챗봇 API",
    description="LangGraph 멀티 에이전트 기반 면접 질문 답변 시스템",
    version="1.0.0",
    lifespan=lifespan
)

# CORS 설정 (환경변수 기반)
allowed_origins = os.getenv("ALLOWED_ORIGINS", "http://localhost:3000").split(",")
app.add_middleware(
    CORSMiddleware,
    allow_origins=[origin.strip() for origin in allowed_origins],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# 라우터 등록
app.include_router(chat_router, prefix="/api", tags=["chat"])
app.include_router(health_router, prefix="/api", tags=["health"])

# 루트 엔드포인트
@app.get("/")
async def root():
    """
    서버 상태 확인용 루트 엔드포인트
    """
    return {
        "message": "AI 챗봇 API 서버가 실행 중입니다",
        "status": "running",
        "version": "1.0.0"
    }

# 전역 에러 핸들러
@app.exception_handler(Exception)
async def global_exception_handler(request, exc):
    """
    전역 예외 처리
    - 예상치 못한 에러를 안전하게 처리
    - 클라이언트에게 적절한 에러 메시지 반환
    """
    return HTTPException(
        status_code=500,
        detail="서버 내부 오류가 발생했습니다. 잠시 후 다시 시도해주세요."
    )

if __name__ == "__main__":
    import uvicorn
    uvicorn.run("main:app", host="0.0.0.0", port=8000, reload=True)