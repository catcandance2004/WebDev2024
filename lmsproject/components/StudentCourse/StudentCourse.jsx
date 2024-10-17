import "./StudentCourse.css"
import React from 'react'

const StudentCourse = () => {
  return (
    <>
      <div className="welcome-back-course">
        <div className="welcome-back-container">
          <p className="welcome-back-container-left">Welcome back, ready for your next lesson?</p>
          <p className="welcome-back-container-right">View History</p>
        </div>

        <div className="welcome-back-course-container">
          <div className="square-container">
            <img src="../../images/CourseImage1.svg" alt="Course Image 1" />
            <p className="course-name">AWS Certified Solutions Architect</p>
          </div>

          <div className="square-container">
          </div>

          <div className="square-container">
          </div>
        </div>
      </div>
    </>
  )
};

export default StudentCourse
