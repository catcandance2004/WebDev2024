import React, { useState } from "react";
import { Carousel } from "antd";
import { IoMdArrowBack } from "react-icons/io";
import modellessons from "../data/modellessons.jsx";
import modelquizzes from "../data/modelquizzes.jsx";
import "./CourseContent.css";

const CourseContent = () => {
  const [whatLesson, setWhatLesson] = useState(modellessons[0])
  const [isLesson, setIsLesson] = useState(true)

  return (
    <div className="course-content-container">
      <div className="cc-nav">
        <button className="back-btn">
          <IoMdArrowBack /> Back
        </button>
        <div className="nav-lesson">
          <h4>Your lessons</h4>
          {modellessons.map((lesson, index) => {
            return (
              <div onClick={()=>{setWhatLesson(lesson); setIsLesson(true)}} className="lesson-card" key={index}>
                <div className="lc-title">{lesson.title}</div>
                <div className="lc-time">{lesson.time} mins</div>
              </div>
            );
          })}
        </div>

        <div className="nav-quiz">
          <h4>Your quizzes</h4>
          {modelquizzes.map((quiz, index) => {
            return (
              <div onClick={()=>{setWhatLesson(quiz); setIsLesson(false)}} className="quiz-card" key={index}>
                <div className="qc-title">{quiz.title}</div>
                <div className="qc-time">{quiz.time} mins</div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="cc-content">
        <div className="content-header">
          <h2>{whatLesson.title}</h2>
          <div>{whatLesson.desc}</div>
        </div>

        <div className="content-body">
          {isLesson && <video className="cb-video" src={whatLesson.video} width="100%" height="50%" controls="controls" autoPlay="true"/>
          
          }
          <p className="cb-paragraph">
            {whatLesson.content}
          </p>
        </div>

        <div className="content-carousel">
          <Carousel
            arrows
            infinite={true}
            draggable={true}
            slidesToShow={5}
            slidesToScroll={1}
          >
            {modellessons.map((carousel, index) => {
            return (
              <div className="carousel-card" key={index}>
                <img className="crs-thumbnail" src="https://picsum.photos/240/150" alt="" />
                <div className="crs-title">{carousel.title}</div>
                <div className="crs-time">{carousel.time} mins</div>
              </div>
            );
          })}
          </Carousel>

        </div>
      </div>
    </div>
  );
};

export default CourseContent;

