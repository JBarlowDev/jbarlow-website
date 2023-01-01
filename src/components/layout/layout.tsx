import React, { ReactNode } from 'react'
import { Footer } from '../footer/footer'
import { Header } from '../header/header'

type LayoutProps = {
  children: ReactNode
}

const Layout = ({children}: LayoutProps) => {
  return (
    <div className='bg-background text-font min-h-screen'>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  )
}

export default Layout

