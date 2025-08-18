"""
헬스체크 API 엔드포인트

역할:
- 서버 상태 모니터링
- 외부 의존성 연결 상태 확인 (Next.js API, OpenAI API)
- 시스템 리소스 사용량 체크
- 로드밸런서/모니터링 도구를 위한 정보 제공

엔드포인트:
- GET /health - 기본 헬스체크
- GET /health/detailed - 상세 시스템 정보
- GET /health/dependencies - 외부 서비스 연결 상태
"""

from fastapi import APIRouter, HTTPException
from pydantic import BaseModel
from typing import Dict, Any, Optional
import time
import psutil
import asyncio
from datetime import datetime

# 서비스 import
from services.portfolio_client import portfolio_client
from utils.openai_client import get_openai_client
from config.settings import Config
from workflow.graph import test_workflow_health

router = APIRouter()

class HealthStatus(BaseModel):
    """기본 헬스체크 응답 모델"""
    status: str  # "healthy", "degraded", "unhealthy"
    timestamp: str
    uptime_seconds: float
    version: str = "1.0.0"

class DetailedHealthStatus(BaseModel):
    """상세 헬스체크 응답 모델"""
    status: str
    timestamp: str
    uptime_seconds: float
    version: str = "1.0.0"
    system_info: Dict[str, Any]
    dependencies: Dict[str, Any]

# 서버 시작 시간 기록
SERVER_START_TIME = time.time()

@router.get("/health", response_model=HealthStatus)
async def health_check() -> HealthStatus:
    """
    기본 헬스체크
    
    간단한 서버 상태 확인용 엔드포인트.
    로드밸런서나 쿠버네티스에서 주로 사용.
    
    Returns:
        HealthStatus: 기본 상태 정보
    """
    
    uptime = time.time() - SERVER_START_TIME
    
    return HealthStatus(
        status="healthy",
        timestamp=datetime.now().isoformat(),
        uptime_seconds=uptime
    )

@router.get("/health/detailed", response_model=DetailedHealthStatus)
async def detailed_health_check() -> DetailedHealthStatus:
    """
    상세 헬스체크
    
    시스템 리소스 사용량과 외부 의존성 상태를 포함한
    상세한 서버 상태 정보를 반환.
    
    Returns:
        DetailedHealthStatus: 상세 상태 정보
    """
    
    uptime = time.time() - SERVER_START_TIME
    
    # 시스템 정보 수집
    try:
        cpu_percent = psutil.cpu_percent(interval=1)
        memory = psutil.virtual_memory()
        disk = psutil.disk_usage('/')
        
        system_info = {
            "cpu": {
                "usage_percent": cpu_percent,
                "count": psutil.cpu_count()
            },
            "memory": {
                "total_gb": round(memory.total / (1024**3), 2),
                "available_gb": round(memory.available / (1024**3), 2),
                "usage_percent": memory.percent
            },
            "disk": {
                "total_gb": round(disk.total / (1024**3), 2),
                "free_gb": round(disk.free / (1024**3), 2),
                "usage_percent": round((disk.used / disk.total) * 100, 2)
            }
        }
    except Exception as e:
        system_info = {"error": f"시스템 정보 수집 실패: {str(e)}"}
    
    # 외부 의존성 상태 확인
    dependencies = await check_dependencies()
    
    # 전체 상태 결정
    overall_status = determine_overall_status(system_info, dependencies)
    
    return DetailedHealthStatus(
        status=overall_status,
        timestamp=datetime.now().isoformat(),
        uptime_seconds=uptime,
        system_info=system_info,
        dependencies=dependencies
    )

@router.get("/health/dependencies")
async def check_dependencies_endpoint() -> Dict[str, Any]:
    """
    외부 의존성 연결 상태만 확인
    
    Next.js API와 OpenAI API 연결 상태를 체크하고
    각각의 응답 시간을 측정.
    
    Returns:
        Dict[str, Any]: 의존성 상태 정보
    """
    
    dependencies = await check_dependencies()
    
    return {
        "timestamp": datetime.now().isoformat(),
        "dependencies": dependencies
    }

async def check_dependencies() -> Dict[str, Any]:
    """
    외부 서비스 의존성 상태 확인
    
    Returns:
        Dict[str, Any]: 각 서비스의 상태와 응답시간
    """
    
    dependencies = {}
    
    # Next.js Portfolio API 상태 확인
    try:
        start_time = time.time()
        
        # 간단한 메타데이터 조회로 연결 테스트
        await portfolio_client.get_page_metadata('boardgame-chatbot')
        
        response_time = (time.time() - start_time) * 1000  # ms 단위
        
        dependencies["portfolio_api"] = {
            "status": "healthy",
            "url": Config.PORTFOLIO_API_BASE_URL,
            "response_time_ms": round(response_time, 2),
            "last_check": datetime.now().isoformat()
        }
        
    except Exception as e:
        dependencies["portfolio_api"] = {
            "status": "unhealthy",
            "url": Config.PORTFOLIO_API_BASE_URL,
            "error": str(e),
            "last_check": datetime.now().isoformat()
        }
    
    # OpenAI API 상태 확인
    try:
        client = get_openai_client()
        
        # Enhanced 클라이언트의 테스트 메서드 사용
        connection_test = await client.test_connection()
        
        if connection_test["success"]:
            dependencies["openai_api"] = {
                "status": "healthy",
                "model": connection_test["model"],
                "response_time_ms": round(connection_test["response_time"] * 1000, 2),
                "tokens_used": connection_test["tokens_used"],
                "last_check": datetime.now().isoformat()
            }
        else:
            dependencies["openai_api"] = {
                "status": "unhealthy",
                "error": connection_test["error"],
                "last_check": datetime.now().isoformat()
            }
        
    except Exception as e:
        dependencies["openai_api"] = {
            "status": "unhealthy",
            "error": str(e),
            "last_check": datetime.now().isoformat()
        }
    
    # AI 워크플로우 상태 확인
    try:
        workflow_health = await test_workflow_health()
        dependencies["ai_workflow"] = workflow_health
    except Exception as e:
        dependencies["ai_workflow"] = {
            "status": "unhealthy",
            "error": str(e),
            "last_check": datetime.now().isoformat()
        }
    
    return dependencies

def determine_overall_status(system_info: Dict[str, Any], dependencies: Dict[str, Any]) -> str:
    """
    전체 시스템 상태 결정
    
    Args:
        system_info: 시스템 리소스 정보
        dependencies: 외부 의존성 상태
        
    Returns:
        str: "healthy", "degraded", "unhealthy"
    """
    
    # 시스템 리소스 체크
    if "error" in system_info:
        return "degraded"
    
    # CPU, 메모리 사용률이 너무 높은 경우
    cpu_usage = system_info.get("cpu", {}).get("usage_percent", 0)
    memory_usage = system_info.get("memory", {}).get("usage_percent", 0)
    
    if cpu_usage > 90 or memory_usage > 90:
        return "degraded"
    
    # 외부 의존성 체크
    unhealthy_deps = 0
    total_deps = len(dependencies)
    
    for dep_status in dependencies.values():
        if dep_status.get("status") != "healthy":
            unhealthy_deps += 1
    
    if unhealthy_deps == total_deps:
        return "unhealthy"  # 모든 의존성이 실패
    elif unhealthy_deps > 0:
        return "degraded"   # 일부 의존성이 실패
    else:
        return "healthy"    # 모든 것이 정상

@router.get("/health/metrics")
async def get_metrics() -> Dict[str, Any]:
    """
    모니터링용 메트릭스 정보
    
    Prometheus 등의 모니터링 시스템에서 사용할 수 있는
    수치형 데이터를 제공.
    
    Returns:
        Dict[str, Any]: 메트릭스 데이터
    """
    
    uptime = time.time() - SERVER_START_TIME
    
    try:
        system_info = {
            "uptime_seconds": uptime,
            "cpu_usage_percent": psutil.cpu_percent(interval=1),
            "memory_usage_percent": psutil.virtual_memory().percent,
            "disk_usage_percent": round((psutil.disk_usage('/').used / psutil.disk_usage('/').total) * 100, 2)
        }
    except Exception:
        system_info = {
            "uptime_seconds": uptime,
            "cpu_usage_percent": 0,
            "memory_usage_percent": 0,
            "disk_usage_percent": 0
        }
    
    # TODO: 추가 메트릭스
    # - 처리된 요청 수
    # - 평균 응답 시간
    # - 에러율
    
    return {
        "timestamp": datetime.now().isoformat(),
        "metrics": system_info
    }