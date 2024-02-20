import React, { useState } from 'react';

const Login = ({ onLogin, onRegisterRedirect }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // ตรวจสอบข้อมูลและทำการ login
    if (username && password) {
      onLogin({ username, password });
    } else {
      alert('Please enter both username and password.');
    }
  };

  return (
    <div className="max-w-md mx-auto my-8 p-6 bg-white rounded-md shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Sign In</h2>
      <label className="block text-sm mb-2">Username: </label>
      <input
        type="text"
        className="w-full border p-2 rounded"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <br />
      <label className="block text-sm mt-2 mb-2">Password: </label>
      <input
        type="password"
        className="w-full border p-2 rounded"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <br />
      <button
        className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
        onClick={handleLogin}
      >
        Login
      </button>
      <p className="mt-2 text-sm">
        Don't have an account?{' '}
        <span className="text-blue-500 cursor-pointer" onClick={onRegisterRedirect}>
          Sign Up here.
        </span>
      </p>
    </div>
  );
};

export default Login;
