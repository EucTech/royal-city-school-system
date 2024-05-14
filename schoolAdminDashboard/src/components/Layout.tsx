// import React from 'react'
import React from 'react'
import Sidebar from './Sidebar'

interface LayoutProps {
  children: React.ReactNode
}

const Layout = ({children}: LayoutProps) => {
  return (
    <div className='flex w-full h-screen bg-[#d8dfe6]'>
        <Sidebar />
        <div className='flex-1 h-screen overflow-auto'>{children}</div>
    </div>
  )
}

export default Layout
