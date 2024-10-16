import React, { useState } from "react";
import { Carousel } from "antd";
import { IoMdArrowBack } from "react-icons/io";
import modellessons from "../data/modellessons.jsx";
import modelquizzes from "../data/modelquizzes.jsx";
import "./CourseContent.css";

const CourseContent = () => {
  const [isQuiz, setIsQuiz] = useState(false);

  return (
    <div className="course-content-container">
      <div className="cc-nav">
        <button className="back-btn">
          <IoMdArrowBack /> Back
        </button>
        <div className="nav-lesson">
          <h4>Your Lessons</h4>
          {modellessons.map((lesson, index) => {
            return (
              <div className="lesson-card" key={index}>
                <div className="lc-title">{lesson.title}</div>
                <div className="lc-time">{lesson.time}</div>
              </div>
            );
          })}
        </div>

        <div className="nav-quiz">
          <h4>Your quiz</h4>
          {modelquizzes.map((quiz, index) => {
            return (
              <div className="quiz-card" key={index}>
                <div className="qc-title">{quiz.title}</div>
                <div className="qc-time">{quiz.time}</div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="cc-content">
        <div className="content-header">
          <h2>Learnin about Something</h2>
        </div>

        <div className="content-body">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
            repellat accusantium quidem odio ex eaque reiciendis veniam nulla
            doloremque. Sint omnis suscipit possimus odio neque nostrum
            accusamus similique placeat! Quod!Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Expedita repellat accusantium quidem
            odio ex eaque reiciendis veniam nulla doloremque. Sint omnis
            suscipit possimus odio neque nostrum accusamus similique placeat!
            Quod!Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Expedita repellat accusantium quidem odio ex eaque reiciendis veniam
            nulla doloremque. Sint omnis suscipit possimus odio neque nostrum
            accusamus similique placeat! Quod!Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Expedita repellat accusantium quidem
            odio ex eaque reiciendis veniam nulla doloremque. Sint omnis
            suscipit possimus odio neque nostrum accusamus similique placeat!
            Quod!Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Expedita repellat accusantium quidem odio ex eaque reiciendis veniam
            nulla doloremque. Sint omnis suscipit possimus odio neque nostrum
            accusamus similique placeat! Quod!Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Expedita repellat accusantium quidem
            odio ex eaque reiciendis veniam nulla doloremque. Sint omnis
            suscipit possimus odio neque nostrum accusamus similique placeat!
            Quod!Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Expedita repellat accusantium quidem odio ex eaque reiciendis veniam
            nulla doloremque. Sint omnis suscipit possimus odio neque nostrum
            accusamus similique placeat! Quod!Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Expedita repellat accusantium quidem
            odio ex eaque reiciendis veniam nulla doloremque. Sint omnis
            suscipit possimus odio neque nostrum accusamus similique placeat!
            Quod!Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Expedita repellat accusantium quidem odio ex eaque reiciendis veniam
            nulla doloremque. Sint omnis suscipit possimus odio neque nostrum
            accusamus similique placeat! Quod!Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Expedita repellat accusantium quidem
            odio ex eaque reiciendis veniam nulla doloremque. Sint omnis
            suscipit possimus odio neque nostrum accusamus similique placeat!
            Quod!Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Expedita repellat accusantium quidem odio ex eaque reiciendis veniam
            nulla doloremque. Sint omnis suscipit possimus odio neque nostrum
            accusamus similique placeat! Quod!Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Expedita repellat accusantium quidem
            odio ex eaque reiciendis veniam nulla doloremque. Sint omnis
            suscipit possimus odio neque nostrum accusamus similique placeat!
            Quod!Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Expedita repellat accusantium quidem odio ex eaque reiciendis veniam
            nulla doloremque. Sint omnis suscipit possimus odio neque nostrum
            accusamus similique placeat! Quod!Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Expedita repellat accusantium quidem
            odio ex eaque reiciendis veniam nulla doloremque. Sint omnis
            suscipit possimus odio neque nostrum accusamus similique placeat!
            Quod!Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Expedita repellat accusantium quidem odio ex eaque reiciendis veniam
            nulla doloremque. Sint omnis suscipit possimus odio neque nostrum
            accusamus similique placeat! Quod!Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Expedita repellat accusantium quidem
            odio ex eaque reiciendis veniam nulla doloremque. Sint omnis
            suscipit possimus odio neque nostrum accusamus similique placeat!
            Quod!Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Expedita repellat accusantium quidem odio ex eaque reiciendis veniam
            nulla doloremque. Sint omnis suscipit possimus odio neque nostrum
            accusamus similique placeat! Quod!Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Expedita repellat accusantium quidem
            odio ex eaque reiciendis veniam nulla doloremque. Sint omnis
            suscipit possimus odio neque nostrum accusamus similique placeat!
            Quod!Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Expedita repellat accusantium quidem odio ex eaque reiciendis veniam
            nulla doloremque. Sint omnis suscipit possimus odio neque nostrum
            accusamus similique placeat! Quod!Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Expedita repellat accusantium quidem
            odio ex eaque reiciendis veniam nulla doloremque. Sint omnis
            suscipit possimus odio neque nostrum accusamus similique placeat!
            Quod!Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Expedita repellat accusantium quidem odio ex eaque reiciendis veniam
            nulla doloremque. Sint omnis suscipit possimus odio neque nostrum
            accusamus similique placeat! Quod!Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Expedita repellat accusantium quidem
            odio ex eaque reiciendis veniam nulla doloremque. Sint omnis
            suscipit possimus odio neque nostrum accusamus similique placeat!
            Quod!Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Expedita repellat accusantium quidem odio ex eaque reiciendis veniam
            nulla doloremque. Sint omnis suscipit possimus odio neque nostrum
            accusamus similique placeat! Quod!Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Expedita repellat accusantium quidem
            odio ex eaque reiciendis veniam nulla doloremque. Sint omnis
            suscipit possimus odio neque nostrum accusamus similique placeat!
            Quod!Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Expedita repellat accusantium quidem odio ex eaque reiciendis veniam
            nulla doloremque. Sint omnis suscipit possimus odio neque nostrum
            accusamus similique placeat! Quod!Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Expedita repellat accusantium quidem
            odio ex eaque reiciendis veniam nulla doloremque. Sint omnis
            suscipit possimus odio neque nostrum accusamus similique placeat!
            Quod!Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Expedita repellat accusantium quidem odio ex eaque reiciendis veniam
            nulla doloremque. Sint omnis suscipit possimus odio neque nostrum
            accusamus similique placeat! Quod!Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Expedita repellat accusantium quidem
            odio ex eaque reiciendis veniam nulla doloremque. Sint omnis
            suscipit possimus odio neque nostrum accusamus similique placeat!
            Quod!Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Expedita repellat accusantium quidem odio ex eaque reiciendis veniam
            nulla doloremque. Sint omnis suscipit possimus odio neque nostrum
            accusamus similique placeat! Quod!Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Expedita repellat accusantium quidem
            odio ex eaque reiciendis veniam nulla doloremque. Sint omnis
            suscipit possimus odio neque nostrum accusamus similique placeat!
            Quod!Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Expedita repellat accusantium quidem odio ex eaque reiciendis veniam
            nulla doloremque. Sint omnis suscipit possimus odio neque nostrum
            accusamus similique placeat! Quod!Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Expedita repellat accusantium quidem
            odio ex eaque reiciendis veniam nulla doloremque. Sint omnis
            suscipit possimus odio neque nostrum accusamus similique placeat!
            Quod!Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Expedita repellat accusantium quidem odio ex eaque reiciendis veniam
            nulla doloremque. Sint omnis suscipit possimus odio neque nostrum
            accusamus similique placeat! Quod!Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Expedita repellat accusantium quidem
            odio ex eaque reiciendis veniam nulla doloremque. Sint omnis
            suscipit possimus odio neque nostrum accusamus similique placeat!
            Quod!Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Expedita repellat accusantium quidem odio ex eaque reiciendis veniam
            nulla doloremque. Sint omnis suscipit possimus odio neque nostrum
            accusamus similique placeat! Quod!Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Expedita repellat accusantium quidem
            odio ex eaque reiciendis veniam nulla doloremque. Sint omnis
            suscipit possimus odio neque nostrum accusamus similique placeat!
            Quod!Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Expedita repellat accusantium quidem odio ex eaque reiciendis veniam
            nulla doloremque. Sint omnis suscipit possimus odio neque nostrum
            accusamus similique placeat! Quod!Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Expedita repellat accusantium quidem
            odio ex eaque reiciendis veniam nulla doloremque. Sint omnis
            suscipit possimus odio neque nostrum accusamus similique placeat!
            Quod!Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Expedita repellat accusantium quidem odio ex eaque reiciendis veniam
            nulla doloremque. Sint omnis suscipit possimus odio neque nostrum
            accusamus similique placeat! Quod!Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Expedita repellat accusantium quidem
            odio ex eaque reiciendis veniam nulla doloremque. Sint omnis
            suscipit possimus odio neque nostrum accusamus similique placeat!
            Quod!Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Expedita repellat accusantium quidem odio ex eaque reiciendis veniam
            nulla doloremque. Sint omnis suscipit possimus odio neque nostrum
            accusamus similique placeat! Quod!Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Expedita repellat accusantium quidem
            odio ex eaque reiciendis veniam nulla doloremque. Sint omnis
            suscipit possimus odio neque nostrum accusamus similique placeat!
            Quod!Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Expedita repellat accusantium quidem odio ex eaque reiciendis veniam
            nulla doloremque. Sint omnis suscipit possimus odio neque nostrum
            accusamus similique placeat! Quod!Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Expedita repellat accusantium quidem
            odio ex eaque reiciendis veniam nulla doloremque. Sint omnis
            suscipit possimus odio neque nostrum accusamus similique placeat!
            Quod!Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Expedita repellat accusantium quidem odio ex eaque reiciendis veniam
            nulla doloremque. Sint omnis suscipit possimus odio neque nostrum
            accusamus similique placeat! Quod!Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Expedita repellat accusantium quidem
            odio ex eaque reiciendis veniam nulla doloremque. Sint omnis
            suscipit possimus odio neque nostrum accusamus similique placeat!
            Quod!Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Expedita repellat accusantium quidem odio ex eaque reiciendis veniam
            nulla doloremque. Sint omnis suscipit possimus odio neque nostrum
            accusamus similique placeat! Quod!Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Expedita repellat accusantium quidem
            odio ex eaque reiciendis veniam nulla doloremque. Sint omnis
            suscipit possimus odio neque nostrum accusamus similique placeat!
            Quod!Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Expedita repellat accusantium quidem odio ex eaque reiciendis veniam
            nulla doloremque. Sint omnis suscipit possimus odio neque nostrum
            accusamus similique placeat! Quod!Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Expedita repellat accusantium quidem
            odio ex eaque reiciendis veniam nulla doloremque. Sint omnis
            suscipit possimus odio neque nostrum accusamus similique placeat!
            Quod!Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Expedita repellat accusantium quidem odio ex eaque reiciendis veniam
            nulla doloremque. Sint omnis suscipit possimus odio neque nostrum
            accusamus similique placeat! Quod!Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Expedita repellat accusantium quidem
            odio ex eaque reiciendis veniam nulla doloremque. Sint omnis
            suscipit possimus odio neque nostrum accusamus similique placeat!
            Quod!Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Expedita repellat accusantium quidem odio ex eaque reiciendis veniam
            nulla doloremque. Sint omnis suscipit possimus odio neque nostrum
            accusamus similique placeat! Quod!Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Expedita repellat accusantium quidem
            odio ex eaque reiciendis veniam nulla doloremque. Sint omnis
            suscipit possimus odio neque nostrum accusamus similique placeat!
            Quod!Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Expedita repellat accusantium quidem odio ex eaque reiciendis veniam
            nulla doloremque. Sint omnis suscipit possimus odio neque nostrum
            accusamus similique placeat! Quod!Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Expedita repellat accusantium quidem
            odio ex eaque reiciendis veniam nulla doloremque. Sint omnis
            suscipit possimus odio neque nostrum accusamus similique placeat!
            Quod!Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Expedita repellat accusantium quidem odio ex eaque reiciendis veniam
            nulla doloremque. Sint omnis suscipit possimus odio neque nostrum
            accusamus similique placeat! Quod!Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Expedita repellat accusantium quidem
            odio ex eaque reiciendis veniam nulla doloremque. Sint omnis
            suscipit possimus odio neque nostrum accusamus similique placeat!
            Quod!Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Expedita repellat accusantium quidem odio ex eaque reiciendis veniam
            nulla doloremque. Sint omnis suscipit possimus odio neque nostrum
            accusamus similique placeat! Quod!Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Expedita repellat accusantium quidem
            odio ex eaque reiciendis veniam nulla doloremque. Sint omnis
            suscipit possimus odio neque nostrum accusamus similique placeat!
            Quod!Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Expedita repellat accusantium quidem odio ex eaque reiciendis veniam
            nulla doloremque. Sint omnis suscipit possimus odio neque nostrum
            accusamus similique placeat! Quod!Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Expedita repellat accusantium quidem
            odio ex eaque reiciendis veniam nulla doloremque. Sint omnis
            suscipit possimus odio neque nostrum accusamus similique placeat!
            Quod!Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Expedita repellat accusantium quidem odio ex eaque reiciendis veniam
            nulla doloremque. Sint omnis suscipit possimus odio neque nostrum
            accusamus similique placeat! Quod!Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Expedita repellat accusantium quidem
            odio ex eaque reiciendis veniam nulla doloremque. Sint omnis
            suscipit possimus odio neque nostrum accusamus similique placeat!
            Quod!Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Expedita repellat accusantium quidem odio ex eaque reiciendis veniam
            nulla doloremque. Sint omnis suscipit possimus odio neque nostrum
            accusamus similique placeat! Quod!Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Expedita repellat accusantium quidem
            odio ex eaque reiciendis veniam nulla doloremque. Sint omnis
            suscipit possimus odio neque nostrum accusamus similique placeat!
            Quod!Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Expedita repellat accusantium quidem odio ex eaque reiciendis veniam
            nulla doloremque. Sint omnis suscipit possimus odio neque nostrum
            accusamus similique placeat! Quod!Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Expedita repellat accusantium quidem
            odio ex eaque reiciendis veniam nulla doloremque. Sint omnis
            suscipit possimus odio neque nostrum accusamus similique placeat!
            Quod!Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Expedita repellat accusantium quidem odio ex eaque reiciendis veniam
            nulla doloremque. Sint omnis suscipit possimus odio neque nostrum
            accusamus similique placeat! Quod!Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Expedita repellat accusantium quidem
            odio ex eaque reiciendis veniam nulla doloremque. Sint omnis
            suscipit possimus odio neque nostrum accusamus similique placeat!
            Quod!Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Expedita repellat accusantium quidem odio ex eaque reiciendis veniam
            nulla doloremque. Sint omnis suscipit possimus odio neque nostrum
            accusamus similique placeat! Quod!Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Expedita repellat accusantium quidem
            odio ex eaque reiciendis veniam nulla doloremque. Sint omnis
            suscipit possimus odio neque nostrum accusamus similique placeat!
            Quod!Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Expedita repellat accusantium quidem odio ex eaque reiciendis veniam
            nulla doloremque. Sint omnis suscipit possimus odio neque nostrum
            accusamus similique placeat! Quod!Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Expedita repellat accusantium quidem
            odio ex eaque reiciendis veniam nulla doloremque. Sint omnis
            suscipit possimus odio neque nostrum accusamus similique placeat!
            Quod!Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Expedita repellat accusantium quidem odio ex eaque reiciendis veniam
            nulla doloremque. Sint omnis suscipit possimus odio neque nostrum
            accusamus similique placeat! Quod!Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Expedita repellat accusantium quidem
            odio ex eaque reiciendis veniam nulla doloremque. Sint omnis
            suscipit possimus odio neque nostrum accusamus similique placeat!
            Quod!Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Expedita repellat accusantium quidem odio ex eaque reiciendis veniam
            nulla doloremque. Sint omnis suscipit possimus odio neque nostrum
            accusamus similique placeat! Quod!Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Expedita repellat accusantium quidem
            odio ex eaque reiciendis veniam nulla doloremque. Sint omnis
            suscipit possimus odio neque nostrum accusamus similique placeat!
            Quod!Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Expedita repellat accusantium quidem odio ex eaque reiciendis veniam
            nulla doloremque. Sint omnis suscipit possimus odio neque nostrum
            accusamus similique placeat! Quod!Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Expedita repellat accusantium quidem
            odio ex eaque reiciendis veniam nulla doloremque. Sint omnis
            suscipit possimus odio neque nostrum accusamus similique placeat!
            Quod!Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Expedita repellat accusantium quidem odio ex eaque reiciendis veniam
            nulla doloremque. Sint omnis suscipit possimus odio neque nostrum
            accusamus similique placeat! Quod!Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Expedita repellat accusantium quidem
            odio ex eaque reiciendis veniam nulla doloremque. Sint omnis
            suscipit possimus odio neque nostrum accusamus similique placeat!
            Quod!Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Expedita repellat accusantium quidem odio ex eaque reiciendis veniam
            nulla doloremque. Sint omnis suscipit possimus odio neque nostrum
            accusamus similique placeat! Quod!Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Expedita repellat accusantium quidem
            odio ex eaque reiciendis veniam nulla doloremque. Sint omnis
            suscipit possimus odio neque nostrum accusamus similique placeat!
            Quod!Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Expedita repellat accusantium quidem odio ex eaque reiciendis veniam
            nulla doloremque. Sint omnis suscipit possimus odio neque nostrum
            accusamus similique placeat! Quod!Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Expedita repellat accusantium quidem
            odio ex eaque reiciendis veniam nulla doloremque. Sint omnis
            suscipit possimus odio neque nostrum accusamus similique placeat!
            Quod!Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Expedita repellat accusantium quidem odio ex eaque reiciendis veniam
            nulla doloremque. Sint omnis suscipit possimus odio neque nostrum
            accusamus similique placeat! Quod!Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Expedita repellat accusantium quidem
            odio ex eaque reiciendis veniam nulla doloremque. Sint omnis
            suscipit possimus odio neque nostrum accusamus similique placeat!
            Quod!Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Expedita repellat accusantium quidem odio ex eaque reiciendis veniam
            nulla doloremque. Sint omnis suscipit possimus odio neque nostrum
            accusamus similique placeat! Quod!Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Expedita repellat accusantium quidem
            odio ex eaque reiciendis veniam nulla doloremque. Sint omnis
            suscipit possimus odio neque nostrum accusamus similique placeat!
            Quod!Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Expedita repellat accusantium quidem odio ex eaque reiciendis veniam
            nulla doloremque. Sint omnis suscipit possimus odio neque nostrum
            accusamus similique placeat! Quod!
          </p>
        </div>

        <div className="content-carousel">
          <Carousel
            arrows
            infinite={true}
            draggable={true}
            slidesToShow={4}
            slidesToScroll={1}
          >
            {modellessons.map((lesson, index) => {
            return (
              <div className="lesson-card" key={index}>
                <div className="lc-title">{lesson.title}</div>
                <div className="lc-time">{lesson.time}</div>
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