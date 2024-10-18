import "./StudentCourse.css"
import React from 'react'

const StudentCourse = () => {
  return (
    <>
      <div className="app-container">
        
      {/* Header with background image */}
      <div className="header">
        <img src="../../images/course_background.svg" alt="Course Background Image" className="background-image" />
        <div className="course-overview">
          <div className="tabs-container">

            {/*Currently no interaction */}
            <button className="tab">Overview</button>
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
                  <img src="../../images/rating.svg" alt="Course Rating" className="rating" />
                </div>
                <div>
                  <p>Top Rating</p>
                </div>
              </div>

              <div className="star-breakdown">
                <div className="rating-bar">
                  <p>5 Stars</p>
                  <div className="bar">
                    <div className="filled" style={{ width: '70%' }}>
                    </div>
                  </div>
                </div>

                <div className="rating-bar">
                  <p>4 Stars</p>
                  <div className="bar">
                    <div className="filled" style={{ width: '90%' }}>
                    </div>
                  </div>
                </div>

                <div className="rating-bar">
                  <p>3 Stars</p>
                  <div className="bar">
                    <div className="filled" style={{ width: '30%' }}>
                    </div>
                  </div>
                </div>

                <div className="rating-bar">
                  <p>2 Stars</p>
                  <div className="bar">
                    <div className="filled" style={{ width: '20%' }}>
                    </div>
                  </div>
                </div>

                <div className="rating-bar">
                  <p>1 Stars</p>
                  <div className="bar">
                    <div className="filled" style={{ width: '10%' }}>
                    </div>
                  </div>
                </div>
              </div>
            </div>


            {/* Reviews */}
            <div className="review">
              <div className="user-info">
                <img src="../../images/user_img.svg" alt="User" />
                <div className="user-details">
                  <span className="user-name">Lina</span>
                  <div className="user-rating">⭐⭐⭐⭐</div>
                </div>
              </div>
              <p>This course really helped me to pass my exam! The SAA-C03 tests how the exam taker would assess and think on scenario based questions and I highly appreciate the effort Stephan has put in to build this module especially the hands-on exercises. Cheers!</p>
              <div className="review-time">🕒 3 Months</div>
            </div>

            <hr />

            <div className="review">
              <div className="user-info">
                <img src="../../images/user_img.svg" alt="User" />
                <div className="user-details">
                  <span className="user-name">Lina</span>
                  <div className="user-rating">⭐⭐⭐⭐⭐</div>
                </div>
              </div>
              <p>Best Course for this certification. I like the way all the information is nicely structured. I watched the entire course twice. Going through the course 2 times made me grasp much more information and also increased my confidence levels. </p>
              <div className="review-time">🕒 3 Months</div>
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="sidebar">
          <div className="price-container">
            <img src="../../images/course_img.svg" alt="Course Image"/>
            <div className="price-content">
              <span className="new-price">$49.65</span>
              <span className="old-price">$99.99</span>
              <span className="discount">50% Off</span>
            </div>
            
            <p className="time-left">11 hours left at this price</p>
            <button className="buy-button">Buy Now</button>
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
            <p>Class, launched less than a year ago by Blackboard co-founder Michael Chasen, integrates exclusively...</p>
          </div>

          <hr/>
          
          <div className="share-course">
            <h3>Share this course</h3>
            <div className="social-icons">
              <a href="#"><i className="fab fa-facebook"></i></a>
              <a href="#"><i className="fab fa-twitter"></i></a>
              <a href="#"><i className="fab fa-youtube"></i></a>
              <a href="#"><i className="fab fa-instagram"></i></a>
            </div>
          </div>
        </div>
      </div>
      </div>
    </>
  )
};

export default StudentCourse
