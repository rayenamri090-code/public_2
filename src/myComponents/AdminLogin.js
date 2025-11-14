import React, { useState } from 'react';
import { User, Lock, LogIn } from 'lucide-react';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loginMessage, setLoginMessage] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    setLoginMessage('');

    // Mock Login Logic:
    if (username === 'admin' && password === 'secret') {
      setLoginMessage({ type: 'success', text: 'Login successful. Redirecting to dashboard...' });
      // In a real app, you would handle token/session here and redirect
    } else {
      setLoginMessage({ type: 'error', text: 'Invalid username or password. Please try again.' });
    }
    // Clear password field for security
    setPassword('');
  };

  const statusStyle = loginMessage.type === 'error' 
    ? 'text-red-400 bg-red-900/30' 
    : 'text-green-400 bg-green-900/30';

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-950 p-4 font-sans">
      <div className="w-full max-w-sm sm:max-w-md bg-gray-900 p-8 rounded-2xl shadow-2xl shadow-blue-900/50 border border-blue-700/50">
        
        {/* Title & Logo */}
        <h1 className="text-4xl font-extrabold text-white mb-2 flex items-center justify-center">
            <span className="text-blue-400">LUX</span>AUTH
        </h1>
        <h2 className="text-xl text-center font-semibold text-gray-400 mb-8 pb-4 border-b border-gray-700/50">
          Sign in to your exclusive account
        </h2>

        {/* Status Message */}
        {loginMessage.text && (
          <div className={`p-3 mb-4 rounded-lg text-sm font-medium text-center ${statusStyle}`}>
            {loginMessage.text}
          </div>
        )}

        {/* Login Form */}
        <form onSubmit={handleLogin} className="space-y-6">
          
          {/* Username Field */}
          <div className="relative">
            <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-blue-500" />
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full pl-10 pr-4 py-3 bg-gray-800 text-white rounded-lg border border-gray-700 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition duration-200 placeholder-gray-500"
              required
            />
          </div>

          {/* Password Field */}
          <div className="relative">
            <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-blue-500" />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full pl-10 pr-4 py-3 bg-gray-800 text-white rounded-lg border border-gray-700 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition duration-200 placeholder-gray-500"
              required
            />
          </div>
          
          {/* Submission Button */}
          <button
            type="submit"
            className="w-full py-3 bg-blue-600 text-white font-bold text-lg rounded-lg hover:bg-blue-700 transition duration-300 shadow-xl shadow-blue-900/50 flex items-center justify-center tracking-wider mt-8"
          >
            <LogIn className="w-5 h-5 mr-2"/>
            ACCESS ACCOUNT
          </button>
        </form>

        {/* Footer Link */}
        <div className="text-center mt-6">
            <a href="#" className="text-sm text-gray-500 hover:text-blue-400 transition duration-200">
                Forgot your password?
            </a>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;