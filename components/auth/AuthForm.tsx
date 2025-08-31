'use client';

import { useState } from 'react';

export default function AuthForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [activeTab, setActiveTab] = useState('login');
  const [loginData, setLoginData] = useState({
    email: '',
    password: '',
  });
  const [signupData, setSignupData] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
  });

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // Here you would typically authenticate with your backend
      await new Promise(resolve => setTimeout(resolve, 1000)); // Simulated API call
      
      alert('Login Successful! Welcome back to VLP Technologies.');
    } catch (error) {
      alert('Login Failed. Please check your credentials and try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (signupData.password !== signupData.confirmPassword) {
      alert('Password Mismatch. Passwords do not match. Please try again.');
      return;
    }

    setIsLoading(true);

    try {
      // Here you would typically create account with your backend
      await new Promise(resolve => setTimeout(resolve, 1000)); // Simulated API call
      
      alert('Account Created! Welcome to VLP Technologies. Please check your email for verification.');
    } catch (error) {
      alert('Signup Failed. Failed to create account. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="pt-20 lg:pt-24 section-padding bg-gradient-to-br from-blue-900 via-gray-900 to-black min-h-screen flex items-center">
      <div className="container-custom">
        <div className="max-w-md mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Welcome to <span className="bg-gradient-to-r from-blue-400 to-amber-400 bg-clip-text text-transparent">VLP Technologies</span>
            </h1>
            <p className="text-gray-300">
              Access your client portal to manage projects and communicate with our team.
            </p>
          </div>

          <div className="bg-white/95 backdrop-blur-md shadow-2xl rounded-lg overflow-hidden">
            <div className="flex">
              <button
                onClick={() => setActiveTab('login')}
                className={`flex-1 py-4 px-6 font-semibold transition-colors ${
                  activeTab === 'login'
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                Login
              </button>
              <button
                onClick={() => setActiveTab('signup')}
                className={`flex-1 py-4 px-6 font-semibold transition-colors ${
                  activeTab === 'signup'
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                Sign Up
              </button>
            </div>
              
            {activeTab === 'login' && (
              <div className="p-8">
                <div className="mb-6">
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">Login to Your Account</h2>
                  <p className="text-gray-600">
                    Enter your credentials to access your client portal.
                  </p>
                </div>
                <div>
                  <form onSubmit={handleLogin} className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                      <input
                        id="login-email"
                        type="email"
                        required
                        value={loginData.email}
                        onChange={(e) => setLoginData(prev => ({ ...prev, email: e.target.value }))}
                        placeholder="your.email@example.com"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
                      <input
                        id="login-password"
                        type="password"
                        required
                        value={loginData.password}
                        onChange={(e) => setLoginData(prev => ({ ...prev, password: e.target.value }))}
                        placeholder="Enter your password"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                    <button
                      type="submit" 
                      disabled={isLoading} 
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg font-semibold transition-colors duration-200 disabled:opacity-50"
                    >
                      {isLoading ? (
                        <div className="flex items-center">
                          <div className="spinner w-4 h-4 mr-2"></div>
                          Logging in...
                        </div>
                      ) : (
                        'Login'
                      )}
                    </button>
                  </form>
                  
                  <div className="mt-4 text-center">
                    <a href="#" className="text-sm text-blue-600 hover:text-blue-700">
                      Forgot your password?
                    </a>
                  </div>
                </div>
              </div>
            )}
              
            {activeTab === 'signup' && (
              <div className="p-8">
                <div className="mb-6">
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">Create New Account</h2>
                  <p className="text-gray-600">
                    Join VLP Technologies to access our client portal and services.
                  </p>
                </div>
                <div>
                  <form onSubmit={handleSignup} className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                      <input
                        id="signup-name"
                        type="text"
                        required
                        value={signupData.name}
                        onChange={(e) => setSignupData(prev => ({ ...prev, name: e.target.value }))}
                        placeholder="Your full name"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                      <input
                        id="signup-email"
                        type="email"
                        required
                        value={signupData.email}
                        onChange={(e) => setSignupData(prev => ({ ...prev, email: e.target.value }))}
                        placeholder="your.email@example.com"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                      <input
                        id="signup-phone"
                        type="tel"
                        required
                        value={signupData.phone}
                        onChange={(e) => setSignupData(prev => ({ ...prev, phone: e.target.value }))}
                        placeholder="+91 XXXXX XXXXX"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
                      <input
                        id="signup-password"
                        type="password"
                        required
                        value={signupData.password}
                        onChange={(e) => setSignupData(prev => ({ ...prev, password: e.target.value }))}
                        placeholder="Create a strong password"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Confirm Password</label>
                      <input
                        id="signup-confirm-password"
                        type="password"
                        required
                        value={signupData.confirmPassword}
                        onChange={(e) => setSignupData(prev => ({ ...prev, confirmPassword: e.target.value }))}
                        placeholder="Confirm your password"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                    <button
                      type="submit" 
                      disabled={isLoading} 
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg font-semibold transition-colors duration-200 disabled:opacity-50"
                    >
                      {isLoading ? (
                        <div className="flex items-center">
                          <div className="spinner w-4 h-4 mr-2"></div>
                          Creating Account...
                        </div>
                      ) : (
                        'Create Account'
                      )}
                    </button>
                  </form>
                </div>
              </div>
            )}
          </div>

          <div className="mt-8 text-center">
            <p className="text-gray-300 mb-4">Need help getting started?</p>
            <a
              href="https://wa.me/919648974867?text=Hello, I need help with account access"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-green-400 hover:text-green-300 font-medium"
            >
              <i className="fab fa-whatsapp mr-2" />
              Contact Support on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}