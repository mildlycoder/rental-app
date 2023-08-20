import React from 'react'
import Header from './components/Header'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div className='flex flex-col min-h-screen bg-violet-50'>
        <Header/>
        <Outlet/>
    </div>
  )
}

export default Layout