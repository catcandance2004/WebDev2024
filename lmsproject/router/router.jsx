import Landing from "../components/Landing.jsx";
import Login from "../components/Login.jsx";
import Categories from "../components/Categories.jsx";
import StudentCourse from "../components/StudentCourse.jsx";
import Payment from "../components/Payment.jsx";
import CourseContent from "../components/CourseContent.jsx";

const Router = [
  {
    path: "/",
    component: <Landing />,
  },
  {
    path: "/login",
    component: <Login />,
  },
  {
    path: "/course-categories",
    component: <Categories />,
  },
  {
    path: "/course-categories/course-student",
    component: <StudentCourse />,
  },
  {
    path: "/course-categories/course-student/payment",
    component: <Payment />,
  },
  {
    path: "/course-categories/course-student/course-content",
    component: <CourseContent />,
  },
];

export default Router;
