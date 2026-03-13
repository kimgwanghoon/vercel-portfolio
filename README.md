# 김광훈 - Backend Developer Portfolio

Next.js와 TypeScript, Tailwind CSS로 제작된 개인 포트폴리오 웹사이트입니다.

## 기술 스택

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Deployment**: Vercel

## 시작하기

### 의존성 설치

```bash
npm install
```

### 개발 서버 실행

```bash
npm run dev
```

브라우저에서 [http://localhost:3000](http://localhost:3000)을 열어 확인하세요.

### 프로덕션 빌드

```bash
npm run build
npm start
```

## 프로젝트 구조

```
├── app/
│   ├── layout.tsx      # 레이아웃
│   ├── page.tsx        # 메인 페이지
│   └── globals.css     # 글로벌 스타일
├── components/
│   ├── Header.tsx      # 헤더/네비게이션
│   ├── Hero.tsx        # 히어로 섹션
│   ├── About.tsx       # 소개 섹션
│   ├── Projects.tsx    # 프로젝트 섹션
│   ├── Skills.tsx      # 기술 스택 섹션
│   ├── Contact.tsx     # 연락처 섹션
│   └── Footer.tsx      # 푸터
└── data/
    └── portfolio.ts    # 포트폴리오 데이터
```

## 특징

- 📱 반응형 디자인
- 🎨 다크 모드 지원
- ⚡ 빠른 로딩 속도
- 🎯 SEO 최적화
- 💼 프로젝트 상세 정보 토글
- 📧 간편한 연락처 연결

## 배포

Vercel을 통해 쉽게 배포할 수 있습니다:

```bash
vercel
```

## 라이선스

© 2025 김광훈. All rights reserved.
