import React from 'react'

const Login = () => {
  const loginBtn = document.getElementById('loginBtn');
  const registerBtn = document.getElementById('registerBtn');
  const loginForm = document.getElementById('loginForm');
  const registerForm = document.getElementById('registerForm');

  loginBtn.addEventListener('click', () => {
      loginForm.classNameList.add('active');
      registerForm.classNameList.remove('active');
      loginBtn.classNameList.add('bg-teal-500');
      loginBtn.classNameList.remove('bg-teal-300');
      registerBtn.classNameList.add('bg-teal-300');
      registerBtn.classNameList.remove('bg-teal-500');
  });

  registerBtn.addEventListener('click', () => {
      registerForm.classNameList.add('active');
      loginForm.classNameList.remove('active');
      registerBtn.classNameList.add('bg-teal-500');
      registerBtn.classNameList.remove('bg-teal-300');
      loginBtn.classNameList.add('bg-teal-300');
      loginBtn.classNameList.remove('bg-teal-500');
  });
  return (
    <div>
      <div className="container mx-auto px-4 h-screen flex items-center justify-center">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden flex max-w-4xl w-full">

            <div className="w-1/2 hidden md:block relative">
                <img src="/api/placeholder/800/600" alt="Students in classNameroom" className="object-cover h-full w-full" />
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black to-transparent">
                    <h2 className="text-white text-2xl font-bold">Lorem Ipsum is Simply</h2>
                    <p className="text-white mt-2">Lorem Ipsum is simply</p>
                </div>
            </div>
            

            <div className="w-full md:w-1/2 p-8">
                <h2 className="text-2xl font-bold mb-4">Welcome to lorem.!</h2>
                <div className="flex mb-4">
                    <button id="loginBtn" className="bg-teal-500 text-white px-4 py-2 rounded-l-lg w-1/2">Login</button>
                    <button id="registerBtn" className="bg-teal-300 text-white px-4 py-2 rounded-r-lg w-1/2">Register</button>
                </div>
                <p className="text-gray-600 mb-8">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                

                <form id="loginForm" className="form-container active">
                    <div className="mb-4">
                        <label htmlFor="loginUsername" className="block text-gray-700 text-sm font-bold mb-2">User name</label>
                        <input type="text" id="loginUsername" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Enter your User name" />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="loginPassword" className="block text-gray-700 text-sm font-bold mb-2">Password</label>
                        <input type="password" id="loginPassword" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" placeholder="Enter your Password" />
                    </div>
                    <div className="flex items-center justify-between mb-6">
                        <div className="flex items-center">
                            <input type="checkbox" id="remember" className="mr-2" />
                            <label htmlFor="remember" className="text-sm text-gray-700">Remember me</label>
                        </div>
                        <a href="#" className="text-sm text-blue-500 hover:text-blue-800">Forgot Password?</a>
                    </div>
                    <div className="flex items-center justify-between">
                        <button type="submit" className="bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full">
                            Login
                        </button>
                    </div>
                </form>

                <form id="registerForm" className="form-container">
                    <div className="mb-4">
                        <label htmlFor="registerEmail" className="block text-gray-700 text-sm font-bold mb-2">Email Address</label>
                        <input type="email" id="registerEmail" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Enter your Email Address" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="registerUsername" className="block text-gray-700 text-sm font-bold mb-2">User name</label>
                        <input type="text" id="registerUsername" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Enter your User name" />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="registerPassword" className="block text-gray-700 text-sm font-bold mb-2">Password</label>
                        <input type="password" id="registerPassword" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" placeholder="Enter your Password" />
                    </div>
                    <div className="flex items-center justify-between">
                        <button type="submit" className="bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full">
                            Register
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Login
