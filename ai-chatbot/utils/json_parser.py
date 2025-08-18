"""
JSON 파싱 유틸리티

GPT 응답에서 마크다운 코드블록을 제거하고 JSON 파싱
"""

import json
from typing import Any, Dict


def parse_json_response(response_text: str) -> Dict[str, Any]:
    """
    GPT 응답에서 마크다운 코드블록을 제거하고 JSON 파싱
    
    Args:
        response_text: GPT 응답 텍스트
        
    Returns:
        파싱된 JSON 객체
        
    Raises:
        json.JSONDecodeError: JSON 파싱 실패
    """
    text = response_text.strip()
    
    # 코드블록으로 감싸진 경우 처리
    if "```" in text:
        # ```json 또는 ``` 사이의 내용만 추출
        lines = text.split('\n')
        json_lines = []
        in_code_block = False
        
        for line in lines:
            stripped = line.strip()
            # 코드블록 시작
            if stripped.startswith("```json") or stripped == "```":
                if not in_code_block:
                    in_code_block = True
                else:
                    in_code_block = False
                continue
            # 코드블록 내부 내용만 수집
            elif in_code_block:
                json_lines.append(line)
        
        # 코드블록 내용이 있으면 사용, 없으면 원본 사용
        if json_lines:
            text = '\n'.join(json_lines).strip()
    
    # JSON 파싱
    return json.loads(text)