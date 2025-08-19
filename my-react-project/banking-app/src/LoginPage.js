import React, { useState } from 'react';

function LoginPage() {
  const [loginData, setLoginData] = useState({
    username: '',
    password: ''
  });

  function handleChange(e) {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    alert(`Welcome back, ${loginData.username}!`);
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-black p-4">
      <form
        onSubmit={handleSubmit}
        className="bg-gray-800 shadow-2xl rounded-2xl p-8 w-full max-w-md border border-gray-700"
      >
        <h2 className="text-2xl font-bold mb-6 text-center text-green-400">
          Login to Your Account
        </h2>

        <label className="block mb-2 font-medium text-gray-300">Username</label>
        <input
          type="text"
          name="username"
          value={loginData.username}
          onChange={handleChange}
          required
          className="w-full p-2 border border-gray-600 bg-gray-900 text-white rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-green-400"
        />

        <label className="block mb-2 font-medium text-gray-300">Password</label>
        <input
          type="password"
          name="password"
          value={loginData.password}
          onChange={handleChange}
          required
          className="w-full p-2 border border-gray-600 bg-gray-900 text-white rounded-lg mb-6 focus:outline-none focus:ring-2 focus:ring-green-400"
        />

        <button
          type="submit"
          className="w-full bg-green-500 text-black font-semibold p-2 rounded-lg hover:bg-green-400 transition-colors shadow-lg shadow-green-500/50"
        >
          Login
        </button>
      </form>
    </div>
  );
}

export default LoginPage;
