import React, { useState } from "react";
import { useNavigate } from "react-router";

const Login = () => {
  const [isLoginForm, setIsLoginForm] = useState(true);

  const navigate = useNavigate();

  const handleRedirect = () => {
    navigate("../");
  };

  const handleLoginClick = () => {
    setIsLoginForm(true);
  };

  const handleRegisterClick = () => {
    setIsLoginForm(false);
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-200">
      <div className="flex h-4/5 w-full max-w-6xl shadow-lg rounded-lg overflow-hidden">
        {/* Left side - Image */}
        <div className="hidden md:block w-1/2 relative">
          <img
            id="sideImage"
            src={isLoginForm ? "https://picsum.photos/200/300" : "https://picsum.photos/200/301"}
            alt="Students in classroom"
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black to-transparent">
            <h2 className="text-white text-3xl font-bold">
              Lorem Ipsum is Simply
            </h2>
            <p className="text-white mt-2 text-lg">Lorem Ipsum is simply</p>
          </div>
        </div>

        {/* Right side - Login/Register form */}
        <div className="w-full md:w-1/2 p-8 bg-white flex flex-col justify-center">
          <h2 className="text-3xl font-bold mb-6">
            {isLoginForm ? "Welcome to lorem.!" : "Create your account!"}
          </h2>

          <div className="flex mb-6">
            <button
              id="loginBtn"
              onClick={handleLoginClick}
              className={`px-6 py-3 rounded-full w-1/2 mr-2 ${
                isLoginForm ? "bg-teal-500" : "bg-teal-300"
              } text-white`}
            >
              Login
            </button>
            <button
              id="registerBtn"
              onClick={handleRegisterClick}
              className={`px-6 py-3 rounded-full w-1/2 ml-2 ${
                !isLoginForm ? "bg-teal-500" : "bg-teal-300"
              } text-white`}
            >
              Register
            </button>
          </div>

          <p className="text-gray-600 mb-8">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>

          {isLoginForm ? (
            <form id="loginForm" className="form-container">
              <div className="mb-6">
                <label
                  htmlFor="loginUsername"
                  className="block text-gray-700 text-lg font-bold mb-2"
                >
                  User name
                </label>
                <input
                  type="text"
                  id="loginUsername"
                  className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Enter your User name"
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="loginPassword"
                  className="block text-gray-700 text-lg font-bold mb-2"
                >
                  Password
                </label>
                <input
                  type="password"
                  id="loginPassword"
                  className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Enter your Password"
                />
              </div>
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center">
                  <input type="checkbox" id="remember" className="mr-2" />
                  <label htmlFor="remember" className="text-lg text-gray-700">
                    Remember me
                  </label>
                </div>
                <a
                  href="#"
                  className="text-lg text-blue-500 hover:text-blue-800"
                >
                  Forgot Password?
                </a>
              </div>
              <div className="flex items-center justify-between">
                <button
                  onClick={handleRedirect}
                  type="submit"
                  className="bg-teal-500 hover:bg-teal-700 text-white font-bold py-3 px-6 rounded-full focus:outline-none focus:shadow-outline w-full"
                >
                  Login
                </button>
              </div>
            </form>
          ) : (
            <form id="registerForm" className="form-container">
              <div className="mb-6">
                <label
                  htmlFor="registerEmail"
                  className="block text-gray-700 text-lg font-bold mb-2"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="registerEmail"
                  className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Enter your Email Address"
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="registerUsername"
                  className="block text-gray-700 text-lg font-bold mb-2"
                >
                  User name
                </label>
                <input
                  type="text"
                  id="registerUsername"
                  className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Enter your User name"
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="registerPassword"
                  className="block text-gray-700 text-lg font-bold mb-2"
                >
                  Password
                </label>
                <input
                  type="password"
                  id="registerPassword"
                  className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Enter your Password"
                />
              </div>
              <div className="flex items-center justify-between">
                <button
                  onClick={handleRedirect}
                  type="submit"
                  className="bg-teal-500 hover:bg-teal-700 text-white font-bold py-3 px-6 rounded-full focus:outline-none focus:shadow-outline w-full"
                >
                  Register
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;
