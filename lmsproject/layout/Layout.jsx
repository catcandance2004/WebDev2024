import './Layout.css'
import Navbar from "../components/Navbar/Navbar"
import LandingPage from "../components/LandingPage/LandingPage"
import { Outlet } from 'react-router'

const Layout = () => {
  return (
    <div className="layout-container">

    {/* <header className='navbar'>
      logo---Home-Courses-About Us-Login
    </header> */}

    <Navbar />
    <LandingPage/> 
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
