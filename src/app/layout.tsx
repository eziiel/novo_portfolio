import type { Metadata } from 'next'
import { Nunito } from 'next/font/google'
import './globals.css'
import Header from '@/components/header'

const nunito = Nunito({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-Br" className="min-w-screen max-w-screen scroll-smooth">
      <body className={nunito.className} suppressHydrationWarning={true}>
        <Header />
        {children}
      </body>
    </html>
  )
}
