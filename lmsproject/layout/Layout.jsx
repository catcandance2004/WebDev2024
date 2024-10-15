import "./Layout.css";
import Navbar from "../components/Navbar/Navbar";
import { Outlet } from "react-router";

const Layout = () => {
  return (
    <div className="layout-container">
      <Navbar />
      {/* <LandingPage/>  */}
      <div className="outlet">
        <Outlet />
      </div>

      <footer className="footer">This is footer</footer>
    </div>
  );
};

export default Layout;
