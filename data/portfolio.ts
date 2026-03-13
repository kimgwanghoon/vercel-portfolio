export const personalInfo = {
  name: "김광훈",
  title: "Backend Developer",
  email: "khkimykk@naver.com",
  phone: "010-2811-0463",
  introduction: "7년 이상의 백엔드 개발 경험을 바탕으로 복잡한 비즈니스 로직을 안정적인 서비스로 구현해 온 개발자입니다. Spring Boot와 JPA 기반 대규모 주차관제 시스템을 개발하며 실시간 API 연동, 정산/할인 로직 구현, 운영 시스템 고도화를 수행했습니다. 성능 최적화를 통해 조회 응답 시간을 약 97% 단축하는 등 서비스 품질 개선에 기여했습니다. 문제의 원인을 구조적으로 분석하고 확장성을 고려한 설계로 개선하는 개발을 지향합니다."
};

export const skills = [
  { name: "JAVA", level: "중급" },
  { name: "Spring Boot", level: "중급" },
  { name: "PostgreSQL", level: "중급" },
  { name: "JavaScript", level: "중급" },
  { name: "Thymeleaf", level: "중급" },
  { name: "node.js", level: "하급" },
  { name: "JPA/Hibernate", level: "상" },
  { name: "MyBatis", level: "중" },
  { name: "RESTful API", level: "상" },
  { name: "MySQL", level: "중급" },
  { name: "MSSQL", level: "중급" },
];

export const careers = [
  {
    company: "넥스파시스템",
    department: "기술연구소",
    period: "2022년 4월 - 현재",
    role: "주차관제 솔루션 개발자",
    description: "주차장 관리 시스템 개발 및 외부 시스템 연동"
  },
  {
    company: "앤서스랩코리아",
    period: "2021년 8월 - 2021년 12월",
    role: "Data Exchange"
  },
  {
    company: "한울데이타시스템",
    department: "AI솔루션기술팀",
    period: "2019년 7월 - 2021년 8월",
    role: "검색서버 구축 및 웹개발",
    description: "검색 시스템 데이터 색인 및 적재, 웹 검색 구현"
  },
  {
    company: "NHN커머스",
    period: "2018년 4월 - 2019년 7월",
    role: "IDC운영"
  }
];

export const education = [
  {
    school: "계명대학교",
    major: "컴퓨터공학과",
    period: "2018년 2월 졸업"
  },
  {
    school: "계명문화대학교",
    major: "컴퓨터학부",
    period: "2016년 2월 졸업"
  }
];

export const certifications = [
  { name: "정보처리기사", level: "무급", year: "2018년 8월" },
  { name: "SQLD", level: "무급", year: "2024년 9월" },
  { name: "리눅스마스터", level: "2급", year: "2015년 12월" }
];

export const mainProjects = [
  {
    id: 1,
    title: "파르나스 통합 주차 관리 시스템",
    period: "2025.04 ~ 2025.12 (8개월)",
    role: "주요 기능 설계 및 개발",
    description: "대형 복합 상업시설 주차장 통합 관리 시스템",
    features: [
      "발렛(Valet) 주차 시스템 전체 개발",
      "정기권 관리 시스템",
      "FC(Frequent Customer) 회원 관리",
      "층위반 체크 시스템",
      "5부제/10부제 위반 시스템",
      "전광판 제어 시스템",
      "할인 시스템 고도화",
      "마감/정산 시스템"
    ],
    techStack: ["Spring Boot", "JPA/Hibernate", "MyBatis", "MSSQL", "MySQL", "RESTful API"],
    achievements: [
      "발렛 시스템 전체 무인화 → 인건비 30% 절감",
      "마감 시간 80% 단축 (2시간 → 20분)",
      "정기권 조회 성능 70% 향상",
      "FC 회원 요금 오류 0건"
    ],
    commits: 341
  },
  {
    id: 2,
    title: "카카오파킹스페이스 연동 중계 시스템",
    period: "2024년",
    role: "중계 시스템 설계 및 개발",
    description: "카카오파킹스페이스와 주차장비 간 API 연동 중계 시스템",
    features: [
      "입출차, 요금조회, 정산, 할인 처리 데이터 변환 로직",
      "전광판 및 차단기 제어 연동",
      "Quartz 기반 주차점유/장비상태 전송 스케줄러"
    ],
    techStack: ["Spring Boot", "Quartz", "RESTful API"],
    achievements: [
      "신규 현장 장비 도입 자동화",
      "특이 현장 대응 확장 가능한 구조 설계"
    ]
  },
  {
    id: 3,
    title: "LG 트윈타워 주차 시스템",
    period: "2024.06 ~ 2024.10 (5개월)",
    role: "재충전 시스템, APS 할인, 웹할인 개발",
    description: "대형 오피스 빌딩 주차 시스템",
    features: [
      "재충전 스케줄러 (월별 할인 총계 자동 계산)",
      "APS 입주사 할인 시스템",
      "웹 할인 구매/사용 현황 페이지"
    ],
    techStack: ["Spring Boot", "Spring Scheduler", "JSP", "jQuery", "MySQL"],
    achievements: [
      "재충전 스케줄러 자동화 → 월말 정산 시간 90% 단축",
      "APS 입주사 할인 오류 0건",
      "웹 할인 페이지 사용자 만족도 95%"
    ],
    commits: 30
  },
  {
    id: 4,
    title: "인천 파라다이스호텔 주차 시스템",
    period: "2024.01 ~ 2024.12 (1년)",
    role: "API 설계 및 결제 연동 개발",
    description: "호텔 주차 결제 시스템 연동",
    features: [
      "입출차 및 결제 정보 실시간 전송",
      "할인/예약/정기권 통합 API",
      "결제 정보 누락 재전송 로직 (Quartz 스케줄러)",
      "Windows TIME_WAIT 문제 해결"
    ],
    techStack: ["Spring Boot", "RestTemplate", "Quartz", "MySQL"],
    achievements: [
      "결제 전송 성공률 99.9%",
      "재시도 로직으로 전송 실패 0건",
      "서비스 가용성 안정화"
    ],
    commits: 15
  },
  {
    id: 5,
    title: "주차장별 바코드 할인 전략 패턴 리팩토링",
    period: "2024년",
    role: "리팩토링 설계 및 구현",
    description: "바코드 할인 로직 전략 패턴 적용",
    features: [
      "switch-case 기반 단일 메소드를 전략 패턴으로 분리",
      "주차장별 할인 전략 클래스 분리",
      "공통 인터페이스 기반 확장 가능한 구조"
    ],
    techStack: ["Spring Boot", "Design Pattern"],
    achievements: [
      "가독성 및 유지보수성 향상",
      "신규 할인 방식 추가 시 기존 로직 수정 불필요"
    ]
  },
  {
    id: 6,
    title: "관리자용 주차장 운영 조회 페이지 개선",
    period: "2024년",
    role: "할인 페이지 성능 개선",
    description: "데이터 로딩 지연 문제 해결",
    features: [
      "서버 사이드 페이징 도입",
      "DTO 구조 적용",
      "복잡한 Join 쿼리 최적화"
    ],
    techStack: ["Spring Boot", "JPA", "MySQL"],
    achievements: [
      "응답 속도 97% 단축 (1분 이상 → 2초 이내)",
      "1000건 이상 조회 성능 대폭 향상"
    ]
  }
];

export const otherProjects = [
  {
    title: "카카오T 주차 연동",
    period: "2024.03 ~ 2024.04",
    description: "PG 결제 연동, 이벤트 처리",
    achievements: ["PG 결제 오류율 0%", "이벤트 처리 안정성 확보"]
  },
  {
    title: "횡성 벨라시티 주차 시스템",
    period: "2024.12 ~ 2025.01",
    description: "정기차량 관리, 세대별 대수 제한",
    achievements: ["세대별 대수 제한 오류 0건", "정기권 조회 정확도 100%"]
  },
  {
    title: "대전 공영주차장 바코드 시스템",
    period: "2024.03 ~ 2024.12",
    description: "바코드 할인 시스템",
    achievements: ["바코드 인식률 99.5%", "다양한 바코드 포맷 지원"]
  },
  {
    title: "금융정보분석원 통합관리체계 검색시스템",
    company: "한울데이타시스템",
    description: "DB 및 대용량 파일 데이터 수집 및 검색데이터 적재"
  },
  {
    title: "디지털 경기도정 정보시스템",
    company: "한울데이타시스템",
    description: "행정지식 축적 및 공유 검색 데이터 색인 및 적재, 웹 검색 구현"
  },
  {
    title: "전군사용자통합관리시스템",
    company: "한울데이타시스템",
    description: "국방부 조직정보 관리 검색시스템 데이터 색인 및 적재"
  },
  {
    title: "한국과학기술정보연구원 대화형 챗봇",
    company: "한울데이타시스템",
    description: "사이언스온 챗봇 질의응답 데이터 구성, 논문/보고서/특허 정보 API 연동"
  }
];

export const techStacks = {
  "백엔드 개발": ["Spring Boot", "JPA/Hibernate", "MyBatis", "Java"],
  "데이터베이스": ["MySQL", "PostgreSQL", "MSSQL"],
  "외부 연동": ["RESTful API", "PG 결제 시스템", "실시간 데이터 전송"],
  "스케줄러": ["Quartz", "Spring Scheduler"],
  "프론트엔드": ["JSP", "Thymeleaf", "jQuery", "JavaScript"],
  "Tool": ["IntelliJ IDEA", "Git", "Slack", "GitHub Codex", "Claude Code"]
};

export const keyCompetencies = [
  {
    title: "백엔드 개발",
    items: [
      "Spring Boot 기반 대규모 시스템 설계 및 구현",
      "JPA/Hibernate를 활용한 복잡한 도메인 모델링",
      "비즈니스 로직 최적화 및 성능 개선"
    ]
  },
  {
    title: "외부 연동",
    items: [
      "RESTful API 설계 및 구현",
      "PG 결제 시스템 연동 및 안정화",
      "실시간 데이터 전송 및 동기화"
    ]
  },
  {
    title: "문제 해결",
    items: [
      "JPA 영속성 관리 이슈 해결",
      "순환참조 문제 해결 (@JsonManagedReference)",
      "복잡한 비즈니스 로직 분기 처리",
      "성능 최적화 (쿼리 튜닝, 페이징)"
    ]
  },
  {
    title: "운영 및 유지보수",
    items: [
      "스케줄러 기반 자동화",
      "재시도 로직 구현",
      "로깅 및 모니터링"
    ]
  }
];

export const stats = {
  totalCommits: 341,
  projectCount: "25+",
  experience: "7년 11개월",
  largeProjects: 3,
  paymentSuccessRate: "99.9%",
  barcodeRecognitionRate: "99.5%"
};
