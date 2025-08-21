"""
Runpod Serverless Handler for AI Chatbot Backend

Runpod Serverless 환경에서 FastAPI 앱을 실행하기 위한 핸들러
django_env 가상환경과 호환되도록 설계됨

핵심 기능:
- FastAPI 앱을 서버리스 함수로 래핑
- Cold start 최적화
- 환경변수 및 설정 관리
- 에러 핸들링 및 로깅
"""

import runpod
import asyncio
import json
import os
import sys
from typing import Dict, Any
import uvicorn
from fastapi.testclient import TestClient

# FastAPI 앱 import
from main import app

# 환경변수 설정
os.environ.setdefault("ENVIRONMENT", "production")
os.environ.setdefault("PORT", "8000")

# Runpod 환경에서 필요한 환경변수들 설정
if not os.getenv("OPENAI_API_KEY"):
    print("⚠️ OPENAI_API_KEY가 설정되지 않음 - Runpod 환경변수에서 설정 필요")

if not os.getenv("PORTFOLIO_BASE_URL"):
    print("⚠️ PORTFOLIO_BASE_URL이 설정되지 않음 - 기본값 사용")
    os.environ["PORTFOLIO_BASE_URL"] = "https://portfolio-domain.vercel.app"

if not os.getenv("ALLOWED_ORIGINS"):
    print("⚠️ ALLOWED_ORIGINS가 설정되지 않음 - 기본값 사용")
    os.environ["ALLOWED_ORIGINS"] = "https://portfolio-domain.vercel.app"

# TestClient 인스턴스 생성 (서버리스 환경용)
client = TestClient(app)

def validate_request(job_input: Dict[str, Any]) -> tuple[bool, str]:
    """
    요청 데이터 유효성 검사
    
    Args:
        job_input: Runpod에서 전달받은 입력 데이터
        
    Returns:
        tuple[bool, str]: (유효성 여부, 에러 메시지)
    """
    if not isinstance(job_input, dict):
        return False, "입력 데이터가 딕셔너리가 아닙니다"
    
    required_fields = ["method", "path"]
    for field in required_fields:
        if field not in job_input:
            return False, f"필수 필드 '{field}'가 누락되었습니다"
    
    # HTTP 메소드 검증
    valid_methods = ["GET", "POST", "PUT", "DELETE", "PATCH"]
    if job_input["method"].upper() not in valid_methods:
        return False, f"지원하지 않는 HTTP 메소드: {job_input['method']}"
    
    return True, ""

async def process_request(job_input: Dict[str, Any]) -> Dict[str, Any]:
    """
    HTTP 요청 처리
    
    Args:
        job_input: 요청 데이터 (method, path, headers, body 등)
        
    Returns:
        Dict[str, Any]: 응답 데이터
    """
    try:
        method = job_input["method"].upper()
        path = job_input["path"]
        headers = job_input.get("headers", {})
        body = job_input.get("body", {})
        params = job_input.get("params", {})
        
        print(f"🔄 요청 처리: {method} {path}")
        
        # Content-Type 설정
        if "content-type" not in [h.lower() for h in headers.keys()]:
            headers["Content-Type"] = "application/json"
        
        # 요청 실행
        if method == "GET":
            response = client.get(path, headers=headers, params=params)
        elif method == "POST":
            response = client.post(path, headers=headers, json=body, params=params)
        elif method == "PUT":
            response = client.put(path, headers=headers, json=body, params=params)
        elif method == "DELETE":
            response = client.delete(path, headers=headers, params=params)
        elif method == "PATCH":
            response = client.patch(path, headers=headers, json=body, params=params)
        else:
            return {
                "error": f"지원하지 않는 HTTP 메소드: {method}",
                "status_code": 405
            }
        
        # 응답 데이터 처리
        try:
            response_data = response.json()
        except Exception:
            response_data = {"message": response.text}
        
        result = {
            "status_code": response.status_code,
            "headers": dict(response.headers),
            "body": response_data,
            "success": response.status_code < 400
        }
        
        print(f"✅ 응답 완료: {response.status_code}")
        return result
        
    except Exception as e:
        print(f"❌ 요청 처리 오류: {str(e)}")
        return {
            "error": f"요청 처리 중 오류 발생: {str(e)}",
            "status_code": 500,
            "success": False
        }

def handler(job: Dict[str, Any]) -> Dict[str, Any]:
    """
    Runpod Serverless 메인 핸들러
    
    Args:
        job: Runpod에서 전달하는 작업 데이터
        
    Returns:
        Dict[str, Any]: 처리 결과
    """
    try:
        print("🚀 Runpod Handler 시작")
        
        # 입력 데이터 추출
        job_input = job.get("input", {})
        print(f"📥 입력 데이터: {json.dumps(job_input, ensure_ascii=False, indent=2)}")
        
        # 요청 유효성 검사
        is_valid, error_message = validate_request(job_input)
        if not is_valid:
            print(f"❌ 유효성 검사 실패: {error_message}")
            return {
                "error": error_message,
                "status_code": 400,
                "success": False
            }
        
        # 🔥 글로벌 TestClient 사용 (메모리 공유)
        try:
            method = job_input.get("method", "GET")
            path = job_input.get("path", "/")
            headers = job_input.get("headers", {})
            body = job_input.get("body", {})
            
            print(f"🔄 요청 처리: {method} {path}")
            print(f"🔍 세션 관리자 상태: 활성 세션 수 확인")
            
            # 🔥 동일한 client 인스턴스 사용 (메모리 상태 유지)
            if method == "GET":
                response = client.get(path, headers=headers)
            elif method == "POST":
                response = client.post(path, json=body, headers=headers)
            else:
                return {"error": f"지원하지 않는 HTTP 메소드: {method}", "status_code": 405}
            
            # 응답 처리
            try:
                response_data = response.json()
            except Exception:
                response_data = {"message": response.text}
            
            result = {
                "status_code": response.status_code,
                "body": response_data,
                "success": response.status_code < 400
            }
            
            print(f"✅ 응답 완료: {response.status_code}")
            return result
            
        except Exception as e:
            print(f"❌ 요청 처리 오류: {str(e)}")
            return {"error": f"요청 처리 중 오류 발생: {str(e)}", "status_code": 500, "success": False}
            
    except Exception as e:
        print(f"❌ 핸들러 오류: {str(e)}")
        return {
            "error": f"핸들러 처리 중 오류 발생: {str(e)}",
            "status_code": 500,
            "success": False
        }

# 개발/테스트용 로컬 실행
if __name__ == "__main__":
    # 로컬 개발 모드
    if len(sys.argv) > 1 and sys.argv[1] == "local":
        print("🏠 로컬 개발 모드 실행")
        uvicorn.run("main:app", host="0.0.0.0", port=8000, reload=True)
    
    # 테스트 모드
    elif len(sys.argv) > 1 and sys.argv[1] == "test":
        print("🧪 테스트 모드 실행")
        
        # 테스트 요청 예시
        test_requests = [
            {
                "method": "GET",
                "path": "/",
                "headers": {},
                "params": {}
            },
            {
                "method": "GET", 
                "path": "/api/health",
                "headers": {},
                "params": {}
            },
            {
                "method": "POST",
                "path": "/api/sessions",
                "headers": {"Content-Type": "application/json"},
                "body": {"company_context": "toss"}
            }
        ]
        
        for i, test_req in enumerate(test_requests, 1):
            print(f"\n--- 테스트 {i}: {test_req['method']} {test_req['path']} ---")
            result = handler({"input": test_req})
            print(f"결과: {json.dumps(result, ensure_ascii=False, indent=2)}")
    
    # Runpod 서버리스 모드 (기본)
    else:
        print("☁️ Runpod Serverless 모드 시작")
        print("📡 요청 대기 중...")
        runpod.serverless.start({"handler": handler})