<<<<<<< HEAD
import Landing from "../components/LandingPage/LandingPage.jsx";
import Login from "../components/Login.jsx";
import Categories from "../components/Categories.jsx";
import StudentCourse from "../components/StudentCourse.jsx";
import Payment from "../components/PaymentPage/Payment.jsx";
=======
import LandingPage from "../components/LandingPage/LandingPage.jsx";
import Login from "../components/Login.jsx";
import Categories from "../components/Categories/Categories.jsx";
import StudentCourse from "../components/StudentCourse.jsx";
import Payment from "../components/Payment.jsx";
>>>>>>> fb13f586622038c012dd10e599708507787c74b2
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
<<<<<<< HEAD
    component: <Landing />,
=======
    component: <LandingPage />,
>>>>>>> fb13f586622038c012dd10e599708507787c74b2
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
