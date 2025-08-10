"""
환경설정 및 전역 상수 관리
- 환경변수 로드
- API 엔드포인트 정의
- 완성된 페이지 목록 관리
"""

import os
from typing import List, Dict, Any
from dotenv import load_dotenv

# .env 파일 로드
load_dotenv()

class Config:
    # === 환경변수 ===
    OPENAI_API_KEY: str = os.getenv("OPENAI_API_KEY")
    PORTFOLIO_BASE_URL: str = os.getenv("PORTFOLIO_API_BASE_URL", "http://localhost:3000")
    
    # === API 설정 ===
    PORTFOLIO_API_BASE_URL: str = f"{PORTFOLIO_BASE_URL}/api/portfolio"
    REQUEST_TIMEOUT: int = 30
    MAX_RETRIES: int = 3
    
    # === OpenAI 설정 ===
    OPENAI_MODEL: str = "gpt-4o-mini"
    OPENAI_TEMPERATURE: float = 0.7
    OPENAI_MAX_TOKENS: int = 2000
    
    # === 완성된 페이지 목록 (동적 데이터 추출 가능) ===
    COMPLETE_PROJECTS: List[str] = [
        "boardgame-chatbot",    # 보드게임 챗봇 (상세페이지 완성)
        "date-recommendation",  # 데이트 코스 AI (상세페이지 완성)
        "newspaper-churn",      # 신문 이탈 예측 (상세페이지 완성) 
        "nurse-salary"          # 간호사 급여 예측 (상세페이지 완성)
    ]
    
    # === 완성된 LLM 스킬 목록 ===
    COMPLETE_LLM_SKILLS: List[str] = [
        "langchain",    # LangChain (상세페이지 완성)
        "rag",          # RAG (상세페이지 완성)
        "vector-db",    # Vector DB (상세페이지 완성)
        "openai",       # OpenAI (상세페이지 완성)
        "fine-tuning",  # Fine-tuning (상세페이지 완성)
        "postgresql"    # PostgreSQL (상세페이지 완성)
    ]
    
    @staticmethod
    def get_toss_job_context() -> str:
        """
        토스 ML Engineer 채용공고 완전한 컨텍스트 반환
        모든 GPT 요청 시 포함하여 토스 요구사항에 맞는 답변 생성
        """
        return """=== 토스 ML Engineer [산업기능요원/전문연구요원] 채용공고 ===

📍 회사: 토스 (Toss)
📍 직급: 정규직  
📍 팀 특성: 다양한 사업부 및 팀에 속하여 토스의 다양한 문제를 머신러닝을 통해 빠르게 해결하고 자동화

🎯 팀의 역할:
- ML 기술을 통해 여러 비즈니스 도메인에서 발생하는 문제 해결
- ML 기반으로 공통화된 기술 제품들을 토스팀에 제공  
- 인터뷰를 통해 후보자의 강점과 경험을 고려한 도메인 및 과제에 배치

💼 주요 업무 영역 (6개):

1. 📋 General
   - 추천, 이상 탐지, 자연어 처리, AutoML 등 다양한 과제
   - 새로운 문제 유형을 탐색하고 실험

2. 🎯 추천 (Recommendation) 
   - 토스의 다양한 도메인(Ads, 커머스, Home 등)
   - 추천 시스템과 반응 예측 모델 개발
   - 사용자와 콘텐츠, 서비스, 광고 간의 연결 최적화

3. 📢 Ads (광고)
   - 다양한 광고 지면과 사용자 접점
   - 광고 퍼널 전반 최적화를 위한 예측 모델
   - 의사결정 로직 설계

4. 🔧 Platform  
   - 다양한 ML 요구사항을 안전하고 빠르게 실험 반복
   - 배포 플랫폼 및 Kubernetes 인프라 구축
   - ML 팀에 기술 제품 제공

5. 🔍 검색 (Search)
   - 실시간 대용량 데이터 처리
   - 검색 인프라 운영  
   - 검색 품질 개선
   - 검색 플랫폼 설계하고 운영
   - 고객 경험 개선

6. 🤖 AI ⭐⭐⭐ 
   - LLM, RAG, 멀티모달 등 다양한 AI 기술 활용
   - 문제를 정의하고 기술적으로 접근하는 방식 자체를 설계

✅ 자격 요건 (토스가 원하는 인재):
1. 머신러닝에 대한 깊이 있는 이해 + 다양한 비즈니스 문제 적용 경험
2. SQL 및 Hadoop, Spark 등 빅데이터 플랫폼 경험  
3. 모델 설계/개발 → 실제 서비스 적용 → 결과 분석 전 과정 경험
4. PyTorch, TensorFlow, XGBoost, LightGBM 등 주요 ML 라이브러리 실무 경험
5. 새로운 문제에 빠르게 몰입 + 필요 역량 스스로 학습하여 해결

📄 이력서 평가 기준:
- 머신러닝 알고리즘 직접 개발 + 운영 적용 경험 → 사용 기술과 그로 인한 변화 명시
- 팀 결과뿐 아니라 본인이 주도적으로 기여한 부분 구체적 명시  
- 경험이 적어도 → 문제 정의하고 해결한 과정이 잘 드러나면 좋은 인상

🔥 토스 ML Engineer의 핵심 철학:
"단순한 모델링만 하는 것이 아닌, 비즈니스에 임팩트를 내는 역할"

토스만의 특별한 점:
- 모델링 그 이상을 한다
- 이전: "주어진 모델에 데이터 넣고 성능 평가"  
- 현재: "집계되지 않는 데이터를 어떻게 모델에 녹여낼지 고민"
- 금융 데이터 분석을 넘어서 → 유저 이해 바탕으로 슈퍼 앱 운영에 임팩트

🎯 채용 프로세스:
서류 접수 → 1차 직무 인터뷰(코딩) → 2차 직무 인터뷰 → 문화적합성 인터뷰 → 레퍼런스체크 → 처우 협의 → 최종 합격

=== 채용담당자 마인드셋 ===
당신은 토스 ML Engineer 채용담당자로서 다음을 중요시합니다:
- 비즈니스 임팩트를 낸 실제 경험
- LLM/RAG/멀티모달 AI 기술 활용 능력
- 추천시스템, 대용량 데이터 처리 경험
- 문제 정의부터 해결까지 주도적 기여
- 실제 서비스 적용과 결과 분석 경험"""

    @staticmethod  
    def get_company_context(company: str) -> str:
        """회사별 채용 컨텍스트 반환"""
        if company == "toss":
            return Config.get_toss_job_context()
        else:
            return """=== 일반 AI/ML 엔지니어 채용 상황 ===
기술적 역량과 문제 해결 능력을 종합적으로 평가하는 일반적인 면접 상황입니다.
다양한 프로젝트 경험과 기술 스택을 균형있게 어필하는 것이 중요합니다."""

    @classmethod
    def validate_config(cls):
        """설정 유효성 검사"""
        if not cls.OPENAI_API_KEY:
            raise ValueError("OPENAI_API_KEY가 설정되지 않았습니다")
        if not cls.PORTFOLIO_BASE_URL:
            raise ValueError("PORTFOLIO_BASE_URL이 설정되지 않았습니다")