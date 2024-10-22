import React from 'react';
import './Categories.css';
import { Carousel } from 'antd';
import { useNavigate } from 'react-router-dom';
import { IoMdArrowBack, IoMdArrowForward } from 'react-icons/io'; // Import forward arrow as well


function Categories() {
  const navigate = useNavigate();

  const courses = [
    {
      name: 'AWS',
      icon: '../images/categories/pics/pic-aws.svg',
      title: 'AWS Certified Solutions Architect',
      instructor: 'Lina Roberts',
      avatar: '../images/categories/pics/pic-avatar.svg',
      progress: 30,
      lesson: 5,
      totalLessons: 10,
      time: 6,
    },
    {
      name: 'Python',
      icon: '../images/categories/pics/pic-python.svg',
      title: 'Python for Beginners',
      instructor: 'Lina Roberts',
      avatar: '../images/categories/pics/pic-avatar.svg',
      progress: 40,
      lesson: 4,
      totalLessons: 10,
      time: 6,
    },
    {
      name: 'React',
      icon: '../images/categories/pics/pic-react.svg',
      title: 'Mastering React Development',
      instructor: 'Lina Roberts',
      avatar: '../images/categories/pics/pic-avatar.svg',
      progress: 90,
      lesson: 9,
      totalLessons: 10,
      time: 6,
    },
    {
      name: 'UX Design',
      icon: '../images/categories/pics/pic-ux.svg',
      title: 'UX Design Fundamentals',
      instructor: 'Lina Roberts',
      avatar: '../images/categories/pics/pic-avatar.svg',
      progress: 55,
      lesson: 6,
      totalLessons: 11,
      time: 6,
    },
    {
      name: 'Marketing',
      icon: '../images/categories/pics/pic-marketing.svg',
      title: 'Digital Marketing Strategies',
      instructor: 'Lina Roberts',
      avatar: '../images/categories/pics/pic-avatar.svg',
      progress: 6/8 * 100,
      lesson: 6,
      totalLessons: 8,
      time: 6,
    },
  ];

  const categories = [
    { icon: '../images/categories/icons/ic-design.svg', title: 'Design', description: 'Master the fundamentals of design with creative courses.' },
    { icon: '../images/categories/icons/ic-development.svg', title: 'Development', description: 'Learn programming, web development, and more.' },
    { icon: '../images/categories/icons/ic-business.svg', title: 'Business', description: 'Enhance your business acumen with top-tier courses.' },
    { icon: '../images/categories/icons/ic-marketing.svg', title: 'Marketing', description: 'Discover modern marketing strategies and digital trends.' },
    { icon: '../images/categories/icons/ic-photography.svg', title: 'Photography', description: 'Master photography and photo-editing techniques.' },
    { icon: '../images/categories/icons/ic-acting.svg', title: 'Acting', description: 'Explore acting skills and performance techniques.' },
    { icon: '../images/categories/icons/ic-science.svg', title: 'Science', description: 'Dive into the wonders of science with courses on physics, biology, and more.' },
    { icon: '../images/categories/icons/ic-law.svg', title: 'Law', description: 'Gain insights into legal principles and practices with expert-led law courses.' },
  ];

  const handleCourseClick = (course) => {
    navigate(`/course-categories/course-student`, { state: { course } });
  };

  return (
    <div className="categories-container">
      <section className="course-section">
        <div className="course-list-header">
          <h2>Welcome back, ready for your next lesson?</h2>
          <a href="#history" className="view-history">View history</a>
        </div>  
        <Carousel
          arrows={true}
          infinite={true}
          draggable={true}
          slidesToShow={3}  // Reduced to show 3 items
          slidesToScroll={1}
          autoplay={true}   // Auto-scroll carousel
          autoplaySpeed={3000} // Speed for auto-scroll
          prevArrow={<IoMdArrowBack className="carousel-arrow prev-arrow" />} // Custom arrows
          nextArrow={<IoMdArrowForward className="carousel-arrow next-arrow" />}
        >
          {courses.map((course, index) => (
            <div 
              key={index} 
              className="carousel-card"
              onClick={() => handleCourseClick(course)}
            >
              <img className="course-icon" src={course.icon} alt={course.title} />
              <div className="course-title">{course.title}</div>
              <div className="course-info">
                <img src={course.avatar} alt={course.instructor} className="instructor-avatar" />
                <span>{course.instructor}</span>
              </div>
              <div className="course-progress">
                <div className="progress-bar">
                  <div className="progress" style={{ width: `${course.progress}%` }}></div>
                </div>
                <span>Lesson {course.lesson} of {course.totalLessons}</span>
              </div>
              <div className="course-time">{course.time} mins learned</div>
            </div>
          ))}
        </Carousel>
      </section>

      <section className="category-section">
        <h2>Choice favourite course from top category</h2>
        <div className="category-grid">
          {categories.map((category, index) => (
            <div key={index} className="category-card">
              <div className="category-icon-container">
                <img src={category.icon} alt={category.title} className="category-icon" />
              </div>
              <h3>{category.title}</h3>
              <p>{category.description}</p>
            </div>
          ))}
        </div>
        <div className="navigation-buttons">
          <button className="nav-button prev">&lt;</button>
          <button className="nav-button next">&gt;</button>
        </div>
      </section>
    </div>
  );
}

export default Categories;