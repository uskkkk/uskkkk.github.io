export const experiences = [
  {
    id: 1,
    title: '제주 화장품 특화 ML 기반 PoC 서비스 개발',
    company: '제주 스마트시티',
    period: '2026.03 - 2026.04',
    description: [
      'Spring Boot 기반 웹 플랫폼 풀스택 설계 및 개발 — REST API 설계부터 챗봇 연동까지 서비스 전체 아키텍처 주도',
      'PostgreSQL·MySQL 이중 DB 구조 설계 및 화장품 성분·제품 데이터 약 8,000건 직접 구축·정제, EWG 등급 기반 안전성 데이터 모델링',
      'Python·CatBoost 기반 바우만 피부 타입 예측 모델 개발 — Feature Engineering 및 범주형 데이터 최적화로 분류 정확도 80% 이상 달성',
      'ML 모델을 REST API로 래핑하여 서비스와 연동, 입력 → 예측 → 결과 반환까지 End-to-End 파이프라인 구축',
    ],
    skills: ['Spring Boot', 'Python', 'CatBoost', 'PostgreSQL', 'MySQL']
  },
  {
    id: 2,
    title: '전기차 충전소 수요-공급 관리 서비스 개발 (2차년도)',
    company: '제주 스마트시티',
    period: '2024.12 - 2025.07',
    description: [
      '건축물대장·인허가 공공데이터를 파싱·정제하여 법령 기준 대비 충전기 의무설치 충족 여부를 자동 판별하는 분석 엔진 설계 및 구현',
      '건축물 용도·규모별 주차면수·충전기 현황을 시각화하는 대시보드 개발 — 복잡한 공간 데이터를 직관적인 통계 UI로 전환',
      '이용량·충전시간·고장시간 운영 데이터를 1·3·5km 격자 단위로 집계, 충전 취약지 도출 알고리즘 설계 및 지도 시각화 구현',
      'NGSI-LD 표준 인터페이스 기반 국토부 스마트시티 통합플랫폼·데이터허브 연동 모듈 개발 — 이기종 시스템 간 데이터 호환성 확보',
      '내부 행정시스템 SSO 연계 및 API 기반 데이터 수집 파이프라인 구축으로 실시간 자동화 처리 체계 수립',
    ],
    skills: ['Spring Boot', 'PostgreSQL', 'MySQL', 'NiFi']
  },
  {
    id: 3,
    title: '서민금융진흥원 휴면예금 서비스 운영 및 정산 시스템 개발',
    company: '신사브릿지 / 금융권 SM',
    period: '2022.03 - 2023.07',
    description: [
      'Job Scheduler 기반 일·월 단위 정산 배치 프로세스 설계·구축 — 수작업 정산 프로세스를 자동화하여 운영 효율성 개선',
      '대용량 휴면예금 데이터 처리 배치 로직 개발 및 성능 튜닝, 장애 시 로그 분석을 통한 신속 원인 파악 및 대응',
      'Oracle 기반 정산 집계 SQL 설계·최적화 및 트랜잭션 처리·데이터 정합성 유지 로직 구현',
      'XPlatform 기반 관리자 화면 연동 및 운영 이슈 대응, 사용자 요구사항 반영을 통한 서비스 안정성 강화',
    ],
    skills: ['Java', 'JavaScript', 'Oracle', 'XPlatform', 'Job Scheduler']
  }
];
