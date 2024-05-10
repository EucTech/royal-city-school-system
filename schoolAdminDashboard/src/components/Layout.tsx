// import React from 'react'
import React from 'react'
import Sidebar from './Sidebar'

interface LayoutProps {
  children: React.ReactNode
}

const Layout = ({children}: LayoutProps) => {
  return (
    <div className='flex'>
        <Sidebar />
        <div className=''>{children}</div>
    </div>
  )
}

export default Layout
