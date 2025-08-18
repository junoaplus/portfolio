"""
포트폴리오 데이터 클라이언트

역할:
- Next.js API Route와 통신하여 포트폴리오 데이터 가져오기
- HTTP 요청/응답 처리
- 에러 처리 및 재시도 로직
- 데이터 검증 및 포맷팅

API 엔드포인트:
- GET /api/portfolio/boardgame-chatbot
- GET /api/portfolio/newspaper-churn  
- GET /api/portfolio/nurse-salary
- GET /api/portfolio/date-recommendation

응답 형식:
{
  "path": "boardgame-chatbot",
  "content": {...},
  "timestamp": "2024-01-01T00:00:00.000Z"
}
"""

import httpx
import asyncio
from typing import Dict, Any, Optional
import logging
from config.settings import Config

logger = logging.getLogger(__name__)

class PortfolioClient:
    """
    포트폴리오 API 클라이언트
    """
    
    def __init__(self, base_url: str = Config.PORTFOLIO_API_BASE_URL):
        """
        클라이언트 초기화
        
        Args:
            base_url: Next.js API 서버 URL (기본값: localhost:3000)
        """
        self.base_url = base_url
        self.timeout = Config.REQUEST_TIMEOUT
        
    async def get_portfolio_data(self, page_path: str) -> Dict[str, Any]:
        """
        특정 페이지의 포트폴리오 데이터 가져오기
        
        Args:
            page_path: 페이지 경로 ('boardgame-chatbot', 'date-recommendation' 등)
            
        Returns:
            Dict[str, Any]: 포트폴리오 데이터
            
        Raises:
            httpx.HTTPError: HTTP 요청 실패
            ValueError: 잘못된 응답 데이터
        """
        
        url = f"{self.base_url}/{page_path}"
        
        try:
            async with httpx.AsyncClient(timeout=self.timeout) as client:
                logger.info(f"포트폴리오 데이터 요청: {url}")
                
                response = await client.get(url)
                response.raise_for_status()
                
                data = response.json()
                
                # 응답 데이터 검증
                if not isinstance(data, dict) or 'content' not in data:
                    raise ValueError(f"잘못된 응답 형식: {data}")
                
                logger.info(f"데이터 수신 완료: {page_path}")
                return data['content']
                
        except httpx.TimeoutException:
            logger.error(f"요청 타임아웃: {url}")
            raise
        except httpx.HTTPError as e:
            logger.error(f"HTTP 요청 실패: {url}, 상태코드: {e.response.status_code if hasattr(e, 'response') else 'N/A'}")
            raise
        except Exception as e:
            logger.error(f"예상치 못한 오류: {url}, {str(e)}")
            raise
            
    async def get_multiple_pages(self, page_paths: list) -> Dict[str, Any]:
        """
        여러 페이지의 데이터를 병렬로 가져오기
        
        Args:
            page_paths: 페이지 경로 목록
            
        Returns:
            Dict[str, Any]: 페이지별 데이터 딕셔너리
        """
        
        tasks = []
        for path in page_paths:
            task = self.get_portfolio_data(path)
            tasks.append((path, task))
        
        results = {}
        completed_tasks = await asyncio.gather(
            *[task for _, task in tasks], 
            return_exceptions=True
        )
        
        for i, (path, _) in enumerate(tasks):
            result = completed_tasks[i]
            if isinstance(result, Exception):
                logger.warning(f"페이지 데이터 가져오기 실패: {path}, {str(result)}")
                results[path] = {}  # 빈 데이터로 fallback
            else:
                results[path] = result
        
        return results
    
    async def search_portfolio_content(self, query: str, pages: Optional[list] = None) -> Dict[str, Any]:
        """
        포트폴리오 컨텐츠에서 검색
        
        Args:
            query: 검색 쿼리
            pages: 검색할 페이지 목록 (None이면 전체)
            
        Returns:
            Dict[str, Any]: 검색 결과
        """
        
        # 기본 페이지 목록
        if pages is None:
            pages = ['boardgame-chatbot', 'newspaper-churn', 'nurse-salary', 'date-recommendation']
        
        # 모든 페이지 데이터 가져오기
        all_data = await self.get_multiple_pages(pages)
        
        # 검색 로직 (간단한 텍스트 매칭)
        search_results = {}
        query_lower = query.lower()
        
        for page, data in all_data.items():
            matches = []
            
            # 제목에서 검색
            if 'title' in data and query_lower in data['title'].lower():
                matches.append({'field': 'title', 'value': data['title']})
            
            # 설명에서 검색
            if 'description' in data and query_lower in data['description'].lower():
                matches.append({'field': 'description', 'value': data['description']})
            
            # 기술 스택에서 검색
            if 'tech' in data:
                for tech in data['tech']:
                    if query_lower in tech.lower():
                        matches.append({'field': 'tech', 'value': tech})
            
            # 성과에서 검색
            if 'achievements' in data:
                for achievement in data['achievements']:
                    if query_lower in achievement.lower():
                        matches.append({'field': 'achievements', 'value': achievement})
            
            if matches:
                search_results[page] = {
                    'page_data': data,
                    'matches': matches
                }
        
        return search_results
    
    async def get_page_metadata(self, page_path: str) -> Dict[str, Any]:
        """
        페이지의 메타데이터만 가져오기 (기본 정보)
        
        Args:
            page_path: 페이지 경로
            
        Returns:
            Dict[str, Any]: 메타데이터
        """
        
        try:
            full_data = await self.get_portfolio_data(page_path)
            
            # 메타데이터만 추출
            metadata = {
                'id': full_data.get('id'),
                'title': full_data.get('title'),
                'description': full_data.get('description'),
                'category': full_data.get('category'),
                'status': full_data.get('status'),
                'date': full_data.get('date'),
                'tech': full_data.get('tech', [])
            }
            
            return metadata
            
        except Exception as e:
            logger.warning(f"메타데이터 가져오기 실패: {page_path}, {str(e)}")
            return {}

# 전역 클라이언트 인스턴스
portfolio_client = PortfolioClient()

# 편의 함수들
async def get_portfolio_data(page_path: str) -> Dict[str, Any]:
    """포트폴리오 데이터 가져오기 편의 함수"""
    return await portfolio_client.get_portfolio_data(page_path)

async def search_portfolio(query: str, pages: Optional[list] = None) -> Dict[str, Any]:
    """포트폴리오 검색 편의 함수"""
    return await portfolio_client.search_portfolio_content(query, pages)