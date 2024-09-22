import React from "react";
import hero1 from "../assets/hero1.webp";

const Hero = () => {
  return (
    <div className="flex flex-col items-center gap-2 sm:gap-5 bg-[url('./assets/organise2.svg')] p-4 sm:p-6 lg:p-10 text-gray-600">
      <div className="flex flex-col gap-5 justify-center items-center">
        {/* Heading with responsive text size */}
        <h1 className="font-poppins text-2xl sm:text-3xl lg:text-4xl font-semibold text-gray-800 text-center">
          "A Place on the Internet, Away from the Internet"
        </h1>

        {/* Image with responsive width */}
        <img
          className="w-[100%] sm:w-[80%] md:w-[70%] lg:w-[60%] shadow-lg"
          src={hero1}
          alt="hero"
        />
      </div>

      {/* Button Group with responsive layout */}
      <div className="flex flex-row gap-4 mt-4">
        <button className="px-6 py-3 sm:px-8 sm:py-4 bg-primaryGreen hover:bg-secondary hover:shadow-lg font-semibold hover:text-black text-white transition duration-200 ease-in-out">
          Get Started
        </button>
        <button className="px-6 py-3 sm:px-8 sm:py-4 bg-white border border-primaryGreen hover:shadow-lg hover:underline text-gray-700 transition duration-200 ease-in-out">
          Learn More
        </button>
      </div>
    </div>
  );
};

export default Hero;
