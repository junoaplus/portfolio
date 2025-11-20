"""
포트폴리오 페이지에 없는 숨겨진 정보들
- 기본 스킬 정보 (Python, React 등)
- 개인적 질문 답변 (가장 어려운 프로젝트, 자소서 등)
- 메타데이터는 실제 사실만 포함, 추론이나 가공 금지
"""

from typing import Dict, Any

HIDDEN_METADATA: Dict[str, Any] = {
    # 가장 자주 묻지만 별도 페이지가 없는 기본 스킬들
    "basic_skills": {
        "python": {
            "level": "고급 (3년+)",
            "description": "모든 AI/ML 프로젝트의 메인 언어",
            "usage_projects": [
                {
                    "project": "boardgame-chatbot",
                    "usage": "Django 웹프레임워크, FastAPI 마이크로서비스"
                },
                {
                    "project": "date-recommendation", 
                    "usage": "PySpark ETL 파이프라인, 대용량 데이터 처리"
                },
                {
                    "project": "nurse-salary",
                    "usage": "scikit-learn ML 파이프라인"
                }
            ],
            "redirect_projects": ["boardgame-chatbot", "date-recommendation"]
        },
        
        "fastapi": {
            "level": "중급",
            "description": "마이크로서비스 구축 경험",
            "usage_projects": [
                {
                    "project": "boardgame-chatbot",
                    "usage": "AI 서비스 API 구축, 세션 관리"
                }
            ],
            "redirect_projects": ["boardgame-chatbot"]
        }
        
        # TODO: django, postgresql, aws 등 추가
    },
    
    # 면접관이 자주 묻는 개인적 질문들
    "personal_questions": {
        "hardest_project": {
            "answer": "데이트 코스 AI",
            "reasons": [
                "20만→9만개 대용량 데이터 정제 작업",
                "PySpark ETL 파이프라인 첫 구축",
                "5명 팀 협업에서의 소통과 조율",
                "실시간 추천 알고리즘 최적화"
            ],
            "redirect_to": "date-recommendation",
            "learned": "대용량 데이터 처리와 팀 협업의 중요성"
        },
        
        "motivation": {
            "why_ai": "복잡한 비즈니스 문제를 AI로 단순하게 해결하는 것에 매력",
            "specific_interest": "사용자 경험을 개선하는 실용적인 AI 서비스",
            "examples": ["챗봇으로 복잡한 룰 쉽게 설명", "추천 시스템으로 선택의 어려움 해결"]
        }
        
        # TODO: 자소서, 성격, 장단점 등 추가
    },
    
    # 회사별 맞춤 답변 (향후 확장)
    "company_specific": {
        # 추후 회사별 특화 답변 추가 예정
        "mindlogic": {
            "role": "AI Software Engineer",
            "tone": "포트폴리오 Q&A 모드 (면접 모드 아님)",
            "story": {
                "tools_transition": "Claude 중심에서 Codex/GPT Pro 조합으로 전환하며 프롬프트 실험을 빠르게 반복 중",
                "recent_stack": ["LangGraph", "RAG", "PyTorch", "Transformers", "Qdrant/pgvector", "AWS", "FastAPI", "Next.js", "Codex/GPT Pro", "Claude"],
                "streaming_focus": "응답 33초→3.4초로 줄인 성능 개선 경험을 강조 (벡터 검색/캐싱 최적화)"
            },
            "highlight_projects": [
                {
                    "name": "AI 챗봇 포트폴리오",
                    "keywords": ["LangGraph 멀티 에이전트", "실시간 API", "포트폴리오 Q&A", "PC 웹"],
                    "link": "/ai-chatbot-portfolio"
                },
                {
                    "name": "데이트 코스 추천 AI",
                    "keywords": ["PySpark ETL 20만→9만", "Qdrant 벡터 검색", "LangChain 대화형 추천", "89,321개 장소", "응답 33초→3.4초"],
                    "link": "/date-recommendation"
                },
                {
                    "name": "보드게임 룰 챗봇",
                    "keywords": ["EXAONE 파인튜닝", "FAISS RAG", "217개 게임 룰"],
                    "link": "/boardgame-chatbot"
                },
                {
                    "name": "신문 이탈 예측",
                    "keywords": ["RandomForest", "SMOTE", "Streamlit 대시보드"],
                    "link": "/newspaper-churn"
                },
                {
                    "name": "간호사 퇴사 예측",
                    "keywords": ["LogisticRegression", "StratifiedKFold", "불균형 대응"],
                    "link": "/nurse-salary"
                }
            ],
            "strengths": [
                "LLM/RAG/에이전트 설계와 프롬프트 엔지니어링을 결합해 일관성 있는 답변을 만든다",
                "스트리밍·성능 최적화에 집중(응답 33초→3.4초 개선 사례)",
                "데이터 파이프라인(PySpark)부터 프론트(Next.js)까지 풀스택 대응",
                "Codex/GPT Pro, Claude 등 실제 사용 도구를 작업 흐름에 통합"
            ],
            "what_to_emphasize": [
                "모든 질문은 면접이 아닌 포트폴리오 Q&A로 응대",
                "마인드로직 JD 키워드(페르소나 챗봇 지향, 스트리밍, LLM/RAG/에이전트)를 반영",
                "최근 도구 전환 (Codex/GPT Pro)과 실사용 경험을 짧게 언급",
                "가능하면 관련 프로젝트 링크를 함께 제시",
                "없는 경험은 솔직히 말하고, 가장 유사한 실경험 + 적용 계획을 붙인다"
            ]
        }
    }
}

def get_metadata(key_path: str) -> Any:
    """
    점 표기법으로 메타데이터 접근
    예: get_metadata("basic_skills.python.level") -> "고급 (3년+)"
    """
    keys = key_path.split(".")
    data = HIDDEN_METADATA
    
    for key in keys:
        if isinstance(data, dict) and key in data:
            data = data[key]
        else:
            return None
    
    return data
