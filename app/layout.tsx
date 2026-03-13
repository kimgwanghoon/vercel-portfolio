import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: '김광훈 | Backend Developer',
  description: '주차관제, 검색시스템 등 다양한 도메인에서 실시간 API와 연동 로직을 설계하고 구현해온 백엔드 개발자',
  keywords: ['Backend Developer', 'Spring Boot', 'Java', 'Portfolio', 'Kim Gwanghun'],
  authors: [{ name: '김광훈' }],
  openGraph: {
    title: '김광훈 | Backend Developer',
    description: '주차관제, 검색시스템 전문 백엔드 개발자',
    type: 'website',
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
