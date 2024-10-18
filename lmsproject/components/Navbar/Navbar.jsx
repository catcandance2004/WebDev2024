import "./Navbar.css";
import { Link } from "react-router-dom";
import React from "react";

function Navbar() {
  return (
    <>
      <header className="header">
        <div className="top-half">
          <div className="top-left">
            <select id="currency">
              <option value="USD">USD ($)</option>
              <option value="VND">VND (₫)</option>
              <option value="EUR">EUR (€)</option>
            </select>

            <select id="language">
              <option value="US">🇺🇸 English</option>
              <option value="VN">🇻🇳 Vietnamese</option>
              <option value="FR">🇫🇷 French</option>
            </select>

            <div className="search-container">
              <form action="">
                <input type="text" placeholder="Search.." name="search" />
                <button type="submit">
                  <i className="fa fa-search" aria-hidden="true"></i>
                </button>
              </form>
            </div>
          </div>

          <div className="top-right"></div>
        </div>

        <div className="low-half">
          <Link to={"/"} className="logo">
            LOGO
          </Link>

          <div className="menu">
            <nav className="navbar">
              <Link className="link" to={"/course-categories"}>Categories</Link>
              <Link className="link" to={"/"}>
                Home
              </Link>
              <Link className="link" to={"/course-categories"}>
                Courses
              </Link>
              <Link className="link" to={"/"}>
                Instructors
              </Link>
            </nav>
          </div>

          <button className="learn-button">Start Learning</button>
        </div>
      </header>
    </>
  );
}

export default Navbar;
