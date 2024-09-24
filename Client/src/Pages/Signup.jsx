import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { signup } from "../Actions/user";
import Button from "../Components/Button"; // Using the same Button component

const Signup = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // State to hold form data
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(signup(formData, navigate));
  };

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-custom-gradient p-4">
      {/* Signup Box */}
      <div className="w-full max-w-md bg-white/80 border border-gray-300 rounded-lg shadow-lg p-8 relative">
        {/* Header with glowing text */}
        <div className="flex justify-center items-center">
          <h2 className="text-4xl font-extrabold text-purple-900 font-['Courier_New'] mb-4 glow-text">
            Create Your Account
          </h2>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Username Input */}
          <div>
            <label
              htmlFor="username"
              className="block text-md font-['Comic_Sans_MS'] text-purple-700"
            >
              Username
            </label>
            <input
              type="text"
              id="username"
              name="username"
              required
              className="w-full mt-1 p-2 bg-gray-200 border border-gray-400 rounded-md focus:outline-none focus:border-purple-500"
              placeholder="Choose a username"
              onChange={handleChange}
              value={formData.username}
            />
          </div>

          {/* Email Input */}
          <div>
            <label
              htmlFor="email"
              className="block text-md font-['Comic_Sans_MS'] text-purple-700"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="w-full mt-1 p-2 bg-gray-200 border border-gray-400 rounded-md focus:outline-none focus:border-purple-500"
              placeholder="Enter your email"
              onChange={handleChange}
              value={formData.email}
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
              type="password"
              id="password"
              name="password"
              required
              className="w-full mt-1 p-2 bg-gray-200 border border-gray-400 rounded-md focus:outline-none focus:border-purple-500"
              placeholder="Create a password"
              onChange={handleChange}
              value={formData.password}
            />
          </div>

          {/* Confirm Password Input */}
          <div>
            <label
              htmlFor="confirm-password"
              className="block text-md font-['Comic_Sans_MS'] text-purple-700"
            >
              Confirm Password
            </label>
            <input
              type="password"
              id="confirm-password"
              name="confirmPassword"
              required
              className="w-full mt-1 p-2 bg-gray-200 border border-gray-400 rounded-md focus:outline-none focus:border-purple-500"
              placeholder="Confirm your password"
              onChange={handleChange}
              value={formData.confirmPassword}
            />
          </div>

          {/* Submit Button */}
          <div className="pt-4 flex justify-center">
            <Button type="submit">Sign Up</Button>
          </div>
        </form>

        {/* Divider */}
        <div className="flex justify-center items-center mt-8">
          <span className="text-sm text-purple-600 font-['Verdana']">
            Already have an account?
          </span>
          <a
            href="/auth"
            className="text-purple-900 hover:underline ml-1 text-sm font-medium font-['Comic_Sans_MS']"
          >
            Sign In
          </a>
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
    </div>
  );
};

export default Signup;
