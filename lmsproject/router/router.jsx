import LandingPage from "../components/LandingPage/LandingPage.jsx";
import Login from "../components/Login.jsx";
import Categories from "../components/Categories/Categories.jsx";
import StudentCourse from "../components/StudentCourse/StudentCourse.jsx";
import Payment from "../components/PaymentPage/Payment.jsx";
import CourseContent from "../components/CourseContent.jsx";

const privateRouter = [
  {
    path: "/login",
    component: <Login />,
  },
  {
    path: "/course-categories/course-student/course-content",
    component: <CourseContent />,
  },
];
const publicRouter = [
  {
    path: "/",
    component: <LandingPage />,
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
];

export { publicRouter, privateRouter };
