import type { Metadata } from 'next'
import { Noto_Sans_KR } from 'next/font/google';
import './globals.css'
import Navbar from './_components/nav-bar/Navbar'
import React from 'react';
import Providers from './ReactQueryProvider';
import Footer from './_components/footer/Footer';
const notoSansKr = Noto_Sans_KR({
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: '파밍',
  description: '파밍',
}
export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={notoSansKr.className}>
        <Providers>
            {children}
        </Providers>
      </body>
    </html>
  )
}
