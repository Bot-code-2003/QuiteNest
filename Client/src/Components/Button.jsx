import React from "react";

// Button Component
const Button = ({ children, variant = "primary", onClick, type }) => {
  // Define styles for the primary and secondary button variants
  const baseStyles =
    "px-8 py-3 border-2 rounded-lg shadow-lg font-['Comic_Sans_MS'] transition duration-300 ease-in-out hover:shadow-xl";
  const variants = {
    primary:
      "bg-button-gradient hover:bg-button-hover-gradient text-purple-900 border-purple-500",
    secondary:
      "bg-white text-purple-700 hover:bg-purple-100 border-purple-500 hover:underline",
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]}`}
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
  );
};

export default Button;
