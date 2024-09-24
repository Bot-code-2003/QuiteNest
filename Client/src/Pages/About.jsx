import React from "react";
import hero2 from "../assets/hero2.webp";
import Button from "../Components/Button";

const About = () => {
  return (
    <div className="flex flex-col items-center gap-4 sm:gap-6 bg-custom-gradient p-4 sm:p-8 lg:p-10 text-gray-700 border-t-4 border-b-4 border-dashed border-purple-300">
      {/* Heading */}
      <div className="flex flex-col gap-5 justify-center items-center">
        <h1 className="font-['Courier_New'] text-2xl sm:text-5xl font-bold text-purple-800 text-center px-4 leading-relaxed">
          "About QuiteNest"
        </h1>

        {/* Subheading */}
        <p className="text-base sm:text-lg lg:text-xl font-lora text-gray-600 mb-6 max-w-2xl">
          QuiteNest is a peaceful online space designed for those seeking an
          escape from the chaotic internet. Here, you can express your thoughts,
          track your moods, and share your journey with a supportive and
          anonymous community.
        </p>

        {/* Image Section */}
        <div className="mb-10 w-[100%] sm:w-[80%] md:w-[70%] lg:w-[60%] p-4 border-4 border-dashed border-blue-300 rounded-lg bg-white/80 shadow-vintage">
          <img className="w-full shadow-inner" src={hero2} alt="hero" />
        </div>
      </div>

      {/* Key Features Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 w-full max-w-6xl">
        {/* Feature 1 */}
        <div className="p-6 bg-white shadow-md rounded-lg hover:shadow-xl transition duration-300 ease-in-out">
          <h2 className="font-['Courier_New'] text-xl sm:text-3xl font-bold text-purple-800 text-center px-4 leading-relaxed">
            Be anonymous
          </h2>
          <p className="text-gray-600 font-lora">
            Stay completely anonymous while you share your thoughts and moods
            with the community. QuiteNest prioritizes your privacy at every
            step.
          </p>
        </div>

        {/* Feature 2 */}
        <div className="p-6 bg-white shadow-md rounded-lg hover:shadow-xl transition duration-300 ease-in-out">
          <h2 className="font-['Courier_New'] text-xl sm:text-3xl font-bold text-purple-800 text-center px-4 leading-relaxed">
            Mood Tracking
          </h2>
          <p className="text-gray-600 font-lora">
            Track your daily moods and reflect on your journey in a calm,
            non-judgmental environment. Keep a visual diary of your emotional
            growth.
          </p>
        </div>

        {/* Feature 3 */}
        <div className="p-6 bg-white shadow-md rounded-lg hover:shadow-xl transition duration-300 ease-in-out">
          <h2 className="font-['Courier_New'] text-xl sm:text-3xl font-bold text-purple-800 text-center px-4 leading-relaxed">
            Creative Expression
          </h2>
          <p className="text-gray-600 font-lora">
            Share your thoughts, art, and stories freely. QuiteNest allows you
            to express yourself in a space that fosters creativity and peace.
          </p>
        </div>
      </div>

      {/* Call to Action */}
      <div className="mt-8 sm:mt-12">
        <button className="primary-button-creative">Join QuiteNest</button>
      </div>
    </div>
  );
};

export default About;
