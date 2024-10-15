import "./navbar.css";
import React from "react";
// import category from "";

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

        <hr />

        <div className="low-half">
          <a href="/" className="logo">
            LOGO
          </a>

          <div className="menu">
<<<<<<< HEAD
            <button className="categories-button">Categories</button>
            {/* <a href="">Categories</a> */}
=======
            <a href="/course-categories"> <button className="categories-button">Categories</button></a>
            {/* <a href="">Categories</a> */}
            {/* href: tạo liên kết trong html */}
>>>>>>> fb13f586622038c012dd10e599708507787c74b2

            <nav className="navbar">
              <a href="">Home</a>
              <a href="">Courses</a>
              <a href="">Instructors</a>
            </nav>
          </div>

          <button className="learn-button">Start Learning</button>
        </div>
      </header>
    </>
  );
}

export default Navbar;
