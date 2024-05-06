import { Metadata } from 'next'
import React from 'react'
import { Footer } from '../src/components/footer/footer'
import { Header } from '../src/components/header/header'
import '../styles/globals.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <div className='bg-background text-font min-h-screen'>
          <Header />
          <main>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  )
}

export const metadata: Metadata = {
  title: {
    template: '%s | JBarlow',
    default: 'JBarlow'
  }
}
