import React from 'react'

const Login = () => {
  const loginBtn = document.getElementById('loginBtn');
  const registerBtn = document.getElementById('registerBtn');
  const loginForm = document.getElementById('loginForm');
  const registerForm = document.getElementById('registerForm');

  loginBtn.addEventListener('click', () => {
      loginForm.classList.add('active');
      registerForm.classList.remove('active');
      loginBtn.classList.add('bg-teal-500');
      loginBtn.classList.remove('bg-teal-300');
      registerBtn.classList.add('bg-teal-300');
      registerBtn.classList.remove('bg-teal-500');
  });

  registerBtn.addEventListener('click', () => {
      registerForm.classList.add('active');
      loginForm.classList.remove('active');
      registerBtn.classList.add('bg-teal-500');
      registerBtn.classList.remove('bg-teal-300');
      loginBtn.classList.add('bg-teal-300');
      loginBtn.classList.remove('bg-teal-500');
  });
  return (
    <div>
      <div class="container mx-auto px-4 h-screen flex items-center justify-center">
        <div class="bg-white rounded-lg shadow-lg overflow-hidden flex max-w-4xl w-full">
            <!-- Left side - Image -->
            <div class="w-1/2 hidden md:block relative">
                <img src="/api/placeholder/800/600" alt="Students in classroom" class="object-cover h-full w-full">
                <div class="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black to-transparent">
                    <h2 class="text-white text-2xl font-bold">Lorem Ipsum is Simply</h2>
                    <p class="text-white mt-2">Lorem Ipsum is simply</p>
                </div>
            </div>
            
            <!-- Right side - Login/Register form -->
            <div class="w-full md:w-1/2 p-8">
                <h2 class="text-2xl font-bold mb-4">Welcome to lorem.!</h2>
                <div class="flex mb-4">
                    <button id="loginBtn" class="bg-teal-500 text-white px-4 py-2 rounded-l-lg w-1/2">Login</button>
                    <button id="registerBtn" class="bg-teal-300 text-white px-4 py-2 rounded-r-lg w-1/2">Register</button>
                </div>
                <p class="text-gray-600 mb-8">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                
                <!-- Login Form -->
                <form id="loginForm" class="form-container active">
                    <div class="mb-4">
                        <label for="loginUsername" class="block text-gray-700 text-sm font-bold mb-2">User name</label>
                        <input type="text" id="loginUsername" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Enter your User name">
                    </div>
                    <div class="mb-6">
                        <label for="loginPassword" class="block text-gray-700 text-sm font-bold mb-2">Password</label>
                        <input type="password" id="loginPassword" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" placeholder="Enter your Password">
                    </div>
                    <div class="flex items-center justify-between mb-6">
                        <div class="flex items-center">
                            <input type="checkbox" id="remember" class="mr-2">
                            <label for="remember" class="text-sm text-gray-700">Remember me</label>
                        </div>
                        <a href="#" class="text-sm text-blue-500 hover:text-blue-800">Forgot Password?</a>
                    </div>
                    <div class="flex items-center justify-between">
                        <button type="submit" class="bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full">
                            Login
                        </button>
                    </div>
                </form>

                <!-- Register Form -->
                <form id="registerForm" class="form-container">
                    <div class="mb-4">
                        <label for="registerEmail" class="block text-gray-700 text-sm font-bold mb-2">Email Address</label>
                        <input type="email" id="registerEmail" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Enter your Email Address">
                    </div>
                    <div class="mb-4">
                        <label for="registerUsername" class="block text-gray-700 text-sm font-bold mb-2">User name</label>
                        <input type="text" id="registerUsername" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Enter your User name">
                    </div>
                    <div class="mb-6">
                        <label for="registerPassword" class="block text-gray-700 text-sm font-bold mb-2">Password</label>
                        <input type="password" id="registerPassword" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" placeholder="Enter your Password">
                    </div>
                    <div class="flex items-center justify-between">
                        <button type="submit" class="bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full">
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
