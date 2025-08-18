"""
Production-Grade OpenAI API 클라이언트
- 완벽한 에러 처리 및 재시도 로직
- API 사용량 추적 및 모니터링
- 요청/응답 로깅 및 캐싱
- 동적 모델 선택 및 설정 최적화
- 토큰 사용량 실시간 추적
"""

import asyncio
import json
import time
import hashlib
import logging
from typing import Dict, Any, Optional, List, Union
from dataclasses import dataclass
from datetime import datetime, timedelta

from openai import AsyncOpenAI
from openai.types.chat import ChatCompletion
from openai._exceptions import (
    APIError, 
    APITimeoutError, 
    RateLimitError, 
    APIConnectionError,
    AuthenticationError,
    BadRequestError
)
from config.settings import Config

# 로깅 설정
logger = logging.getLogger(__name__)

@dataclass
class APIUsageStats:
    """API 사용량 통계"""
    total_requests: int = 0
    successful_requests: int = 0
    failed_requests: int = 0
    total_tokens: int = 0
    total_cost: float = 0.0
    start_time: datetime = None
    
    def __post_init__(self):
        if self.start_time is None:
            self.start_time = datetime.now()

@dataclass 
class RequestMetrics:
    """개별 요청 메트릭"""
    model: str
    prompt_tokens: int
    completion_tokens: int
    total_tokens: int
    request_duration: float
    timestamp: datetime
    success: bool
    error: Optional[str] = None

class EnhancedOpenAIClient:
    """완벽한 OpenAI 클라이언트 - Production Ready"""
    
    def __init__(self):
        self._client = None
        self._usage_stats = APIUsageStats()
        self._request_cache: Dict[str, Dict] = {}
        self._cache_duration = 300  # 5분 캐시
        self._max_retries = 3
        self._base_delay = 1.0
        self._max_delay = 60.0
        
        # 토큰 가격 (USD per 1K tokens) - 2024년 기준
        self._token_prices = {
            "gpt-4o-mini": {"input": 0.00015, "output": 0.0006},
            "gpt-4o": {"input": 0.005, "output": 0.015},
            "gpt-4-turbo": {"input": 0.01, "output": 0.03},
            "gpt-3.5-turbo": {"input": 0.0005, "output": 0.0015}
        }
        
    async def _get_client(self) -> AsyncOpenAI:
        """Thread-safe 클라이언트 인스턴스 생성"""
        if self._client is None:
            if not Config.OPENAI_API_KEY:
                raise AuthenticationError("OPENAI_API_KEY가 설정되지 않았습니다")
                
            self._client = AsyncOpenAI(
                api_key=Config.OPENAI_API_KEY,
                timeout=30.0,  # 30초 타임아웃
                max_retries=0   # 수동 재시도 로직 사용
            )
            
        return self._client
    
    def _generate_cache_key(self, messages: List[Dict], model: str, **kwargs) -> str:
        """요청 캐시 키 생성"""
        cache_data = {
            "messages": messages,
            "model": model,
            **{k: v for k, v in kwargs.items() if k not in ['stream']}
        }
        return hashlib.md5(json.dumps(cache_data, sort_keys=True).encode()).hexdigest()
    
    def _get_cached_response(self, cache_key: str) -> Optional[Dict]:
        """캐시된 응답 확인"""
        if cache_key in self._request_cache:
            cached_data = self._request_cache[cache_key]
            if datetime.now() - cached_data["timestamp"] < timedelta(seconds=self._cache_duration):
                logger.info(f"캐시 히트: {cache_key[:8]}...")
                return cached_data["response"]
            else:
                # 만료된 캐시 삭제
                del self._request_cache[cache_key]
        return None
    
    def _cache_response(self, cache_key: str, response: Dict):
        """응답 캐싱"""
        self._request_cache[cache_key] = {
            "response": response,
            "timestamp": datetime.now()
        }
        
        # 캐시 크기 제한 (최대 100개)
        if len(self._request_cache) > 100:
            oldest_key = min(self._request_cache.keys(), 
                           key=lambda k: self._request_cache[k]["timestamp"])
            del self._request_cache[oldest_key]
    
    def _calculate_cost(self, model: str, prompt_tokens: int, completion_tokens: int) -> float:
        """토큰 사용량 기반 비용 계산"""
        if model not in self._token_prices:
            model = "gpt-4o-mini"  # 기본값
            
        prices = self._token_prices[model]
        input_cost = (prompt_tokens / 1000) * prices["input"]
        output_cost = (completion_tokens / 1000) * prices["output"]
        return input_cost + output_cost
    
    def _update_usage_stats(self, metrics: RequestMetrics):
        """사용량 통계 업데이트"""
        self._usage_stats.total_requests += 1
        
        if metrics.success:
            self._usage_stats.successful_requests += 1
            self._usage_stats.total_tokens += metrics.total_tokens
            
            cost = self._calculate_cost(metrics.model, 
                                      metrics.prompt_tokens, 
                                      metrics.completion_tokens)
            self._usage_stats.total_cost += cost
        else:
            self._usage_stats.failed_requests += 1
    
    async def _exponential_backoff_retry(self, func, *args, **kwargs):
        """지능적 재시도 로직 with 지수 백오프"""
        last_exception = None
        
        for attempt in range(self._max_retries + 1):
            try:
                return await func(*args, **kwargs)
                
            except RateLimitError as e:
                last_exception = e
                if attempt == self._max_retries:
                    break
                    
                # Rate limit의 경우 더 긴 대기
                wait_time = min(self._base_delay * (4 ** attempt), self._max_delay)
                logger.warning(f"Rate limit 도달. {wait_time}초 대기... (시도 {attempt + 1}/{self._max_retries + 1})")
                await asyncio.sleep(wait_time)
                
            except (APITimeoutError, APIConnectionError) as e:
                last_exception = e
                if attempt == self._max_retries:
                    break
                    
                wait_time = min(self._base_delay * (2 ** attempt), self._max_delay)
                logger.warning(f"네트워크 오류. {wait_time}초 후 재시도... (시도 {attempt + 1}/{self._max_retries + 1})")
                await asyncio.sleep(wait_time)
                
            except (AuthenticationError, BadRequestError) as e:
                # 재시도해도 소용없는 에러들
                logger.error(f"재시도 불가능한 오류: {str(e)}")
                raise e
                
            except APIError as e:
                last_exception = e
                if attempt == self._max_retries:
                    break
                    
                wait_time = min(self._base_delay * (2 ** attempt), 10.0)
                logger.warning(f"API 오류. {wait_time}초 후 재시도... (시도 {attempt + 1}/{self._max_retries + 1})")
                await asyncio.sleep(wait_time)
        
        # 모든 재시도 실패
        logger.error(f"모든 재시도 실패: {str(last_exception)}")
        raise last_exception
    
    async def chat_completion_with_retry(
        self,
        messages: List[Dict[str, str]],
        model: Optional[str] = None,
        temperature: Optional[float] = None,
        max_tokens: Optional[int] = None,
        use_cache: bool = True,
        **kwargs
    ) -> ChatCompletion:
        """완벽한 에러 처리를 가진 ChatCompletion API 호출"""
        
        # 기본값 설정
        model = model or Config.OPENAI_MODEL
        temperature = temperature if temperature is not None else Config.OPENAI_TEMPERATURE
        max_tokens = max_tokens or Config.OPENAI_MAX_TOKENS
        
        # 캐시 확인
        cache_key = self._generate_cache_key(messages, model, temperature=temperature, max_tokens=max_tokens)
        if use_cache:
            cached_response = self._get_cached_response(cache_key)
            if cached_response:
                return ChatCompletion.model_validate(cached_response)
        
        start_time = time.time()
        request_success = False
        metrics = None
        
        try:
            client = await self._get_client()
            
            # 실제 API 호출 with 재시도
            response = await self._exponential_backoff_retry(
                client.chat.completions.create,
                model=model,
                messages=messages,
                temperature=temperature,
                max_tokens=max_tokens,
                **kwargs
            )
            
            request_success = True
            duration = time.time() - start_time
            
            # 메트릭 생성
            usage = response.usage
            metrics = RequestMetrics(
                model=model,
                prompt_tokens=usage.prompt_tokens if usage else 0,
                completion_tokens=usage.completion_tokens if usage else 0,
                total_tokens=usage.total_tokens if usage else 0,
                request_duration=duration,
                timestamp=datetime.now(),
                success=True
            )
            
            # 응답 캐싱
            if use_cache:
                self._cache_response(cache_key, response.model_dump())
            
            logger.info(f"OpenAI API 성공: {model} | {metrics.total_tokens} 토큰 | {duration:.2f}초")
            
            return response
            
        except Exception as e:
            duration = time.time() - start_time
            error_msg = str(e)
            
            metrics = RequestMetrics(
                model=model,
                prompt_tokens=0,
                completion_tokens=0,
                total_tokens=0,
                request_duration=duration,
                timestamp=datetime.now(),
                success=False,
                error=error_msg
            )
            
            logger.error(f"OpenAI API 실패: {model} | {error_msg} | {duration:.2f}초")
            raise
            
        finally:
            # 메트릭 업데이트
            if metrics:
                self._update_usage_stats(metrics)
    
    def get_usage_stats(self) -> Dict[str, Any]:
        """사용량 통계 반환"""
        uptime = datetime.now() - self._usage_stats.start_time
        return {
            "total_requests": self._usage_stats.total_requests,
            "successful_requests": self._usage_stats.successful_requests,
            "failed_requests": self._usage_stats.failed_requests,
            "success_rate": (
                self._usage_stats.successful_requests / max(self._usage_stats.total_requests, 1) * 100
            ),
            "total_tokens": self._usage_stats.total_tokens,
            "total_cost_usd": round(self._usage_stats.total_cost, 4),
            "uptime_hours": round(uptime.total_seconds() / 3600, 2),
            "requests_per_hour": round(
                self._usage_stats.total_requests / max(uptime.total_seconds() / 3600, 0.01), 2
            ),
            "cache_hit_rate": f"{len(self._request_cache)}/100 캐시 엔트리"
        }
    
    def clear_cache(self):
        """캐시 클리어"""
        self._request_cache.clear()
        logger.info("OpenAI 클라이언트 캐시 클리어 완료")
    
    async def test_connection(self) -> Dict[str, Any]:
        """API 연결 테스트"""
        try:
            start_time = time.time()
            response = await self.chat_completion_with_retry(
                messages=[{"role": "user", "content": "Hello! This is a connection test."}],
                model="gpt-4o-mini",
                max_tokens=10,
                use_cache=False
            )
            duration = time.time() - start_time
            
            return {
                "success": True,
                "response_time": round(duration, 3),
                "model": response.model,
                "tokens_used": response.usage.total_tokens if response.usage else 0,
                "message": "OpenAI API 연결 성공"
            }
        except Exception as e:
            return {
                "success": False,
                "error": str(e),
                "message": "OpenAI API 연결 실패"
            }

# 전역 클라이언트 인스턴스
_enhanced_client = None

def get_openai_client() -> EnhancedOpenAIClient:
    """
    Enhanced OpenAI 클라이언트 싱글톤 인스턴스 반환
    
    Returns:
        EnhancedOpenAIClient: Production-ready 클라이언트 인스턴스
    """
    global _enhanced_client
    
    if _enhanced_client is None:
        _enhanced_client = EnhancedOpenAIClient()
        logger.info("Enhanced OpenAI 클라이언트 초기화 완료")
    
    return _enhanced_client

# Legacy 호환성을 위한 별칭
def get_openai_async_client() -> AsyncOpenAI:
    """Legacy 코드 호환성을 위한 기본 클라이언트 반환"""
    return asyncio.run(get_openai_client()._get_client())