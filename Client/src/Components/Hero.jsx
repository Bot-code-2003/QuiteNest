import React from "react";
import Button from "./Button";
import hero1 from "../assets/hero1.webp";

const Hero = () => {
  return (
    <div className="flex flex-col items-center gap-4 sm:gap-6 bg-custom-gradient p-4 sm:p-8 lg:p-10 text-gray-700 border-t-4 border-b-4 border-dashed border-purple-300">
      <div className="flex flex-col gap-5 justify-center items-center">
        <h1 className="font-['Courier_New'] text-2xl sm:text-3xl lg:text-4xl font-bold text-purple-800 text-center px-4 leading-relaxed">
          "A Place on the Internet, Away from the Internet"
        </h1>

        <div className="w-[100%] sm:w-[80%] md:w-[70%] lg:w-[60%] p-4 border-4 border-dashed border-blue-300 rounded-lg bg-white/80 shadow-vintage">
          <img className="w-full shadow-inner" src={hero1} alt="hero" />
        </div>
      </div>

      <div className="flex flex-row gap-6 mt-6">
        <button className="primary-button-creative">Get Started</button>
        <button className="secondary-button-creative">Learn more</button>
      </div>
    </div>
  );
};

export default Hero;
