import React, { useState } from 'react'
import { IoMdArrowBack } from "react-icons/io";
import './CourseContent.css'

const CourseContent = () => {

  const [isQuiz, setIsQuiz] = useState(false)

  return (
    <div className='course-content-container'>
      <div className="cc-nav">
        <button className='back-btn'><IoMdArrowBack /> Back</button>
        <div className="nav-lesson">
          <h4>Your Lessons</h4>
        </div>

        <div className="nav-quiz">
          <h4>Your quiz</h4>
        </div>
      </div>

      <div className="cc-content">
        <div className="content-header">
          this is content header
        </div>

        <div className="content-body">
          this is body
          
        </div>

        <div className="content-carousel">
          carousel
        </div>
      </div>
    </div>
  )
}

export default CourseContent
