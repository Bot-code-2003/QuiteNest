import React, { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { signup } from "../Actions/user";
import { useNavigate } from "react-router-dom";

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
    // console.log(formData); // Log form data to the console for now
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
    <div className="flex justify-center items-center min-h-screen bg-gray-50 p-4">
      {/* Signup Box (No Rounded Corners) */}
      <div className="w-full max-w-lg bg-white border border-gray-300 shadow-xl p-10">
        {/* Header */}
        <h2 className="text-3xl font-poppins text-center font-bold text-primaryGreen mb-10 tracking-wide">
          Create Your Account
        </h2>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Username Input */}
          <div className="relative">
            <label
              htmlFor="username"
              className="block text-sm font-lora text-gray-700 mb-2 uppercase tracking-wider"
            >
              Username
            </label>
            <input
              type="text"
              id="username"
              name="username"
              required
              className="w-full p-4 border border-gray-400 focus:border-primaryGreen focus:ring-primaryGreen transition-colors ease-in-out bg-gray-50 focus:bg-white"
              placeholder="Choose a username"
              onChange={handleChange}
              value={formData.username}
            />
          </div>

          {/* Email Input */}
          <div className="relative">
            <label
              htmlFor="email"
              className="block text-sm font-lora text-gray-700 mb-2 uppercase tracking-wider"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="w-full p-4 border border-gray-400 focus:border-primaryGreen focus:ring-primaryGreen transition-colors ease-in-out bg-gray-50 focus:bg-white"
              placeholder="Enter your email"
              onChange={handleChange}
              value={formData.email}
            />
          </div>

          {/* Password Input */}
          <div className="relative">
            <label
              htmlFor="password"
              className="block text-sm font-lora text-gray-700 mb-2 uppercase tracking-wider"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              required
              className="w-full p-4 border border-gray-400 focus:border-primaryGreen focus:ring-primaryGreen transition-colors ease-in-out bg-gray-50 focus:bg-white"
              placeholder="Create a password"
              onChange={handleChange}
              value={formData.password}
            />
          </div>

          {/* Confirm Password Input */}
          <div className="relative">
            <label
              htmlFor="confirm-password"
              className="block text-sm font-lora text-gray-700 mb-2 uppercase tracking-wider"
            >
              Confirm Password
            </label>
            <input
              type="password"
              id="confirm-password"
              name="confirmPassword"
              required
              className="w-full p-4 border border-gray-400 focus:border-primaryGreen focus:ring-primaryGreen transition-colors ease-in-out bg-gray-50 focus:bg-white"
              placeholder="Confirm your password"
              onChange={handleChange}
              value={formData.confirmPassword}
            />
          </div>

          {/* Submit Button */}
          <div className="pt-4">
            <button
              type="submit"
              className="w-full px-6 py-4 bg-primaryGreen text-white font-bold uppercase tracking-widest shadow-md hover:bg-secondaryGreen hover:shadow-lg transition duration-300 ease-in-out"
            >
              Sign Up
            </button>
          </div>
        </form>

        {/* Divider */}
        <div className="flex justify-center items-center mt-8">
          <span className="text-sm text-gray-500">
            Already have an account?
          </span>
          <a
            href="/auth"
            className="text-primaryGreen hover:underline ml-2 text-sm font-medium"
          >
            Sign In
          </a>
        </div>
      </div>
    </div>
  );
};

export default Signup;
