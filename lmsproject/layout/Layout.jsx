import React from 'react'
import './Layout.css'
import { Outlet } from 'react-router'

const Layout = () => {
  return (
    <div className="layout-container">

    <header className='navbar'>
      logo---Home-Courses-About Us-Login
    </header>

    <div className="outlet">
        <Outlet/>
    </div>

    <footer className='footer'>
        This is footer
    </footer>
    </div>
  )
}

export default Layout
