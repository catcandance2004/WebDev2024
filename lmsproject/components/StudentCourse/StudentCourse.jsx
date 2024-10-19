import React from 'react';
import { useLocation, useNavigate } from "react-router-dom";
import "./StudentCourse.css";

const StudentCourse = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const course = location.state?.course; // Access course data passed from Categories

  // Handle missing course data
  if (!course) {
    return <div>No course selected</div>;
  }

  const handleCourseAccess = () => {
    navigate("/course-categories/course-student/course-content");
  }
  const handleRedirect = () => {
    navigate("/course-categories/course-student/payment");
  };

  return (
    <div className="app-container">
      {/* Header with background image and course title */}
      <div className="header">
        <img 
          src="../../images/course_student/course_background.svg" 
          alt="Course Background Image" 
          className="background-image" 
        />
        <div className="text-overlay">
          <h1 className='course-title'>{course.title}</h1>
          <p>Last updated October 2024</p>
        </div>
        
        <div className="course-overview">
          <div className="tabs-container">
            <button onClick={handleCourseAccess} className="tab">Overview</button>
            <button className="tab">Q&A</button>
            <button className="tab">Announcements</button>
            <button className="tab active">Reviews</button>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="main-content">
        <div className="course-section">
          {/* Rating Section */}
          <div className="course-section-container">
            <div className="rating-summary">
              <div className="square-container">
                <div>
                  <h1>4 out of 5</h1>
                </div>
                <div>
                  <img src="../../images/course_student/rating.svg" alt="Course Rating" className="rating" />
                </div>
                <div>
                  <p>Top Rating</p>
                </div>
              </div>

              <div className="star-breakdown">
                <div className="rating-bar">
                  <p>5 Stars</p>
                  <div className="bar">
                    <div className="filled" style={{ width: '70%' }}></div>
                  </div>
                </div>
                <div className="rating-bar">
                  <p>4 Stars</p>
                  <div className="bar">
                    <div className="filled" style={{ width: '90%' }}></div>
                  </div>
                </div>
                <div className="rating-bar">
                  <p>3 Stars</p>
                  <div className="bar">
                    <div className="filled" style={{ width: '30%' }}></div>
                  </div>
                </div>
                <div className="rating-bar">
                  <p>2 Stars</p>
                  <div className="bar">
                    <div className="filled" style={{ width: '20%' }}></div>
                  </div>
                </div>
                <div className="rating-bar">
                  <p>1 Stars</p>
                  <div className="bar">
                    <div className="filled" style={{ width: '10%' }}></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Reviews */}
            <div className="review">
              <div className="user-info">
                <img src="../../images/course_student/user_img.svg" alt="User" />
                <div className="user-details">
                  <span className="user-name">Lina</span>
                  <div className="user-rating">⭐⭐⭐⭐</div>
                </div>
              </div>
              <p>This course really helped me to pass my exam!...</p>
              <div className="review-time">🕒 3 Months</div>
            </div>
            
            <hr />

            <div className="review">
              <div className="user-info">
                <img src="../../images/course_student/user_img.svg" alt="User" />
                <div className="user-details">
                  <span className="user-name">Lina</span>
                  <div className="user-rating">⭐⭐⭐⭐⭐</div>
                </div>
              </div>
              <p>Best Course for this certification...</p>
              <div className="review-time">🕒 3 Months</div>
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="sidebar">
          <div className="price-container">
            <img src="../../images/course_student/course_img.svg" alt="Course Image"/>
            <div className="price-content">
              <span className="new-price">$49.65</span>
              <div className="old-price-container">
                <span className="old-price">$99.99</span>
                <span className="line"></span>
              </div>
              <span className="discount">50% Off</span>
            </div>
            
            <p className="time-left">11 hours left at this price</p>
            <button className="buy-button" onClick={handleRedirect}>Buy Now</button>
          </div>

          <hr/>

          <div className="course-features">
            <h3>This Course Includes</h3>
            <ul>
              <li>Money Back Guarantee</li>
              <li>Access on all devices</li>
              <li>Certification of completion</li>
              <li>32 Modules</li>
            </ul>
          </div>

          <hr/>

          <div className="training-info">
            <h3>Training 5 or more people</h3>
            <p>Class, launched less than a year ago by Blackboard co-founder Michael Chasen...</p>
          </div>

          <hr/>
          
          <div className="share-course">
            <h3>Share this course</h3>
            <div className="social-icons">
              <img src="../../images/course_student/icons/twitter.svg" alt="twitter" />
              <img src="../../images/course_student/icons/facebook.svg" alt="facebook" />
              <img src="../../images/course_student/icons/youtube.svg" alt="youtube" />
              <img src="../../images/course_student/icons/instagram.svg" alt="instagram" />
              <img src="../../images/course_student/icons/telegram.svg" alt="telegram" />
              <img src="../../images/course_student/icons/whatsapp.svg" alt="whatsapp" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentCourse;
