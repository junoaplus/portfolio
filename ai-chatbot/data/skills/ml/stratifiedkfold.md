---
title: "StratifiedKFold"
icon: "🔄"
category: "ml"
slug: "stratifiedkfold"
---

# 내가 이해한 StratifiedKFold

StratifiedKFold는 모델 성능을 제대로 평가할 때 쓰는 도구입니다. 처음에는 train_test_split만 써서 한 번만 나누어서 평가했는데, 운에 따라 결과가 달라지는 문제가 있었습니다.

간호사 퇴사 예측 프로젝트에서 여러 모델을 비교할 때 StratifiedKFold를 써서 5번 나누어서 평가했습니다. 그랬더니 각 모델의 진짜 성능을 알 수 있었습니다.

특히 불균형 데이터에서 클래스 비율을 맞춰주는 기능이 좋았습니다. LogisticRegression이 F1-Score 0.76으로 가장 좋다는 걸 확실하게 알 수 있었습니다.

# 프로젝트 활용 사례

## 간호사 퇴사 예측 분석
5개 ML 모델을 StratifiedKFold로 비교해서 LogisticRegression이 F1-Score 0.76으로 가장 좋다는 걸 확실하게 알 수 있었습니다.

# StratifiedKFold로 해결할 수 있는 문제들

## 🎲 모델 평가 신뢰성 문제
- **기존:** train_test_split 한 번만 써서 운에 따라 성능이 달라짐
- **해결:** 5번 교차검증으로 안정적이고 신뢰할 수 있는 성능 측정

## ⚖️ 불균형 데이터 평가 문제
- **기존:** 일반 KFold는 클래스 비율이 안 맞아서 편향된 평가
- **해결:** 각 폴드마다 클래스 비율을 유지해서 공정한 비교

## 🔍 모델 선택 고민
- **기존:** 여러 모델 중 어떤 게 제일 좋은지 확신이 안 섬
- **해결:** 체계적 비교로 LogisticRegression이 F1-Score 0.76으로 최고 확정