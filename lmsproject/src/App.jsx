import { publicRouter, privateRouter } from "../router/router.jsx";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Layout from "../layout/Layout.jsx";
import StudentCourse from "../components/StudentCourse/StudentCourse.jsx";

const App = () => {
  return (
    <>
      <Routes>
        {privateRouter.map((route, index) => {
          return (
            <Route path={route.path} element={route.component} key={index} />
          );
        })}

        <Route path="/" element={<Layout />}>
          {publicRouter.map((route, index) => {
            return (
              <Route path={route.path} element={route.component} key={index} />
            );
          })}
        </Route>
      </Routes>
    </>
  );
};

export default App;
