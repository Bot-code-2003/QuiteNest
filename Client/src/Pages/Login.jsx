import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../Actions/user";
import Button from "../Components/Button";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login(formData, navigate));
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-custom-gradient p-4">
      {/* Vintage Styled Login Card */}
      <div className="w-full max-w-md bg-white/80 border border-gray-300 rounded-lg shadow-lg p-8 relative">
        {/* Header with glowing sticker effect */}
        <div className="flex justify-center items-center">
          <h2 className="text-4xl font-extrabold text-purple-900 font-['Courier_New'] mb-4 glow-text">
            Welcome Back
          </h2>
          <div className="absolute top-0 left-0">
            <svg
              className="w-12 h-12"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 2l4 4H8l4-4z"
              />
            </svg>
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Email Input */}
          <div>
            <label
              htmlFor="email"
              className="block text-md font-['Comic_Sans_MS'] text-purple-700"
            >
              Email Address
            </label>
            <input
              onChange={handleChange}
              type="email"
              id="email"
              name="email"
              value={formData.email}
              required
              className="w-full mt-1 p-2 bg-gray-200 border border-gray-400 rounded-md focus:outline-none focus:border-purple-500"
              placeholder="Enter your email"
            />
          </div>

          {/* Password Input */}
          <div>
            <label
              htmlFor="password"
              className="block text-md font-['Comic_Sans_MS'] text-purple-700"
            >
              Password
            </label>
            <input
              onChange={handleChange}
              value={formData.password}
              type="password"
              id="password"
              name="password"
              required
              className="w-full mt-1 p-2 bg-gray-200 border border-gray-400 rounded-md focus:outline-none focus:border-purple-500"
              placeholder="Enter your password"
            />
          </div>

          {/* Submit Button */}
          <div className="pt-4 flex justify-center">
            <Button type="submit">Sign In</Button>
          </div>
        </form>

        {/* Divider */}
        <div className="flex justify-center items-center mt-8">
          <span className="text-sm text-purple-600 font-['Verdana']">
            Don’t have an account?
          </span>
          <a
            href="/signup"
            className="text-purple-900 hover:underline ml-1 text-sm font-medium font-['Comic_Sans_MS']"
          >
            Sign Up
          </a>
        </div>

        {/* Forgot Password */}
        <div className="mt-4 text-center">
          <a
            href="/forgot-password"
            className="text-sm text-purple-900 hover:underline font-['Comic_Sans_MS']"
          >
            Forgot your password?
          </a>
        </div>
      </div>

      {/* Glowing sticker bottom corner */}
      <div className="absolute bottom-0 right-0 p-4">
        <svg
          className="w-12 h-12 text-pink-400 glow"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M5 12l7-7 7 7M5 12l7 7 7-7"
          />
        </svg>
      </div>
    </div>
  );
};

export default Login;
