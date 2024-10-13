import React from 'react';
import './Categories.css';

function Categories() {
  const courses = [
    {
      image: './src/assets/pics/pic-aws.svg',
      title: 'AWS Certified Solutions Architect',
      instructor: 'Lina Roberts',
      avatar: './src/assets/pics/pic-avatar.svg',
      progress: 50,
      lesson: 5,
      totalLessons: 10,
    },
    {
      image: './src/assets/pics/pic-python.svg',
      title: 'Python for Beginners',
      instructor: 'Lina Roberts',
      avatar: './src/assets/pics/pic-avatar.svg',
      progress: 40,
      lesson: 4,
      totalLessons: 10,
    },
    {
      image: './src/assets/pics/pic-react.svg',
      title: 'Mastering React Development',
      instructor: 'Lina Roberts',
      avatar: './src/assets/pics/pic-avatar.svg',
      progress: 90,
      lesson: 9,
      totalLessons: 10,
    },
    {
      image: './src/assets/pics/pic-ux.svg',
      title: 'UX Design Fundamentals',
      instructor: 'Lina Roberts',
      avatar: './src/assets/pics/pic-avatar.svg',
      progress: 55,
      lesson: 6,
      totalLessons: 11,
    },
    {
      image: './src/assets/pics/pic-marketing.svg',
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
      {/* Course List */}
      <section className="course-list">
        <h2>Welcome back, ready for your next lesson?</h2>
        <div className="course-cards">
          {courses.map((course, index) => (
            <div key={index} className="course-card">
              <img src={course.image} alt={course.title} className="course-image" />
              <h3>{course.title}</h3>
              <div className="course-info">
                <img src={course.avatar} alt={course.instructor} className="instructor-avatar" />
                <span>{course.instructor}</span>
              </div>
              <div className="course-progress">
                <progress value={course.progress} max="100"></progress>
                <span>Lesson {course.lesson} of {course.totalLessons}</span>
              </div>
            </div>
          ))}
        </div>
        <a href="#history" className="view-history">View history</a>
      </section>

      {/* Category List */}
      <section className="category-list">
        <h2>Choose a course from the top categories</h2>
        <div className="category-grid">
          {categories.map((category, index) => (
            <div key={index} className="category-card">
              <div className="icon-container">
                <img src={category.icon} alt={category.title} className="category-icon" />
              </div>
              <h3>{category.title}</h3>
              <p>{category.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Categories;
