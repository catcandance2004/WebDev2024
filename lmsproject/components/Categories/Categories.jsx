import React from 'react';
import './Categories.css';

function Categories() {
  const courses = [
    {
      icon: './src/assets/pics/pic-aws.svg',
      title: 'AWS Certified Solutions Architect',
      instructor: 'Lina Roberts',
      avatar: './src/assets/pics/pic-avatar.svg',
      progress: 50,
      lesson: 5,
      totalLessons: 10,
    },
    {
      icon: './src/assets/pics/pic-python.svg',
      title: 'Python for Beginners',
      instructor: 'Lina Roberts',
      avatar: './src/assets/pics/pic-avatar.svg',
      progress: 40,
      lesson: 4,
      totalLessons: 10,
    },
    {
      icon: './src/assets/pics/pic-react.svg',
      title: 'Mastering React Development',
      instructor: 'Lina Roberts',
      avatar: './src/assets/pics/pic-avatar.svg',
      progress: 90,
      lesson: 9,
      totalLessons: 10,
    },
    {
      icon: './src/assets/pics/pic-ux.svg',
      title: 'UX Design Fundamentals',
      instructor: 'Lina Roberts',
      avatar: './src/assets/pics/pic-avatar.svg',
      progress: 55,
      lesson: 6,
      totalLessons: 11,
    },
    {
      icon: './src/assets/pics/pic-marketing.svg',
      title: 'Digital Marketing Strategies',
      instructor: 'Lina Roberts',
      avatar: './src/assets/pics/pic-avatar.svg',
      progress: 45,
      lesson: 3,
      totalLessons: 8,
    },
    
  ];

  const categories = [
    { icon: './src/assets/icons/ic-design.svg', title: 'Design', description: 'Master the fundamentals of design with creative courses.' },
    { icon: './src/assets/icons/ic-development.svg', title: 'Development', description: 'Learn programming, web development, and more.' },
    { icon: './src/assets/icons/ic-business.svg', title: 'Business', description: 'Enhance your business acumen with top-tier courses.' },
    { icon: './src/assets/icons/ic-marketing.svg', title: 'Marketing', description: 'Discover modern marketing strategies and digital trends.' },
    { icon: './src/assets/icons/ic-photography.svg', title: 'Photography', description: 'Master photography and photo-editing techniques.' },
    { icon: './src/assets/icons/ic-acting.svg', title: 'Acting', description: 'Explore acting skills and performance techniques.' },
    { icon: './src/assets/icons/ic-science.svg', title: 'Science', description: 'Dive into the wonders of science with courses on physics, biology, and more.' },
    { icon: './src/assets/icons/ic-law.svg', title: 'Law', description: 'Gain insights into legal principles and practices with expert-led law courses.' },
  ];

  return (
    <div className="categories-container">
      <section className="course-section">
        <div className="course-list-header">
          <h2>Welcome back, ready for your next lesson?</h2>
          <a href="#history" className="view-history">View history</a>
        </div>  
        <div className="course-list">
          {courses.map((course, index) => (
            <div key={index} className="course-card">
              <img src={course.icon} alt={course.title} className="course-icon" />
              <h3>{course.title}</h3>
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
            </div>
          ))}
        </div>
        <div className="arrow-buttons">
          <button className="arrow-btn left-btn">{'<'}</button>
          <button className="arrow-btn right-btn">{'>'}</button>
        </div>
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