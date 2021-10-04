import React from 'react'

import Header from 'components/Header'
import Footer from 'components/Footer'

interface PageProps {
  className?: string
  style?: any
}

const Page: React.FC<PageProps> = ({ children, className, style }) => {
  return (
    <div className={`page ${className ?? ''}`} style={style}>
      <Header />
      {children}
      <Footer />
    </div>
  )
}

export default Page