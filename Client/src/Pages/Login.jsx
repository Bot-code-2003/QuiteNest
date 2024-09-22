import React from "react";

const Login = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50 p-4">
      {/* Login Card */}
      <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-8">
        {/* Header */}
        <h2 className="text-3xl font-poppins text-center font-bold text-primaryGreen mb-8">
          Welcome Back
        </h2>

        {/* Form */}
        <form className="space-y-6">
          {/* Email Input */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-lora text-gray-700"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="w-full mt-1 p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-primaryGreen focus:border-primaryGreen"
              placeholder="Enter your email"
            />
          </div>

          {/* Password Input */}
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-lora text-gray-700"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              required
              className="w-full mt-1 p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-primaryGreen focus:border-primaryGreen"
              placeholder="Enter your password"
            />
          </div>

          {/* Submit Button */}
          <div className="pt-4">
            <button
              type="submit"
              className="w-full px-6 py-3 bg-primaryGreen text-white font-semibold rounded-lg shadow-md hover:bg-secondaryGreen hover:shadow-lg transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-primaryGreen focus:ring-offset-2"
            >
              Sign In
            </button>
          </div>
        </form>

        {/* Divider */}
        <div className="flex justify-center items-center mt-8">
          <span className="text-sm text-gray-500">Don’t have an account?</span>
          <a
            href="/signup"
            className="text-primaryGreen hover:underline ml-1 text-sm font-medium"
          >
            Sign Up
          </a>
        </div>

        {/* Forgot Password */}
        <div className="mt-4 text-center">
          <a
            href="/forgot-password"
            className="text-sm text-primaryGreen hover:underline"
          >
            Forgot your password?
          </a>
        </div>
      </div>
    </div>
  );
};

export default Login;
