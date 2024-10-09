import Router from "../router/router.jsx";
import { Routes, Route } from "react-router-dom";
import "./App.css";

const App = () => {
  return (
    <>
      <Routes>
        {Router.map((route, index) => {
          return (
            <Route path={route.path} element={route.component} key={index} />
          );
        })}
      </Routes>
    </>
  );
};

export default App;
