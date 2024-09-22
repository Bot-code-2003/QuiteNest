import React from "react";
import hero2 from "../assets/hero2.webp";

const About = () => {
  return (
    <div className="flex flex-col items-center p-4 sm:p-10 bg-[url('./assets/organise2.svg')] text-center">
      {/* Heading */}
      <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6 font-poppins text-gray-800">
        About QuiteNest
      </h1>

      {/* Subheading */}
      <p className="text-base sm:text-lg lg:text-xl font-lora text-gray-600 mb-6 max-w-2xl">
        QuiteNest is a peaceful online space designed for those seeking an
        escape from the chaotic internet. Here, you can express your thoughts,
        track your moods, and share your journey with a supportive and anonymous
        community.
      </p>

      {/* Image Section */}
      <div className="w-full flex justify-center my-6 sm:my-10">
        <img
          className="w-[90%] sm:w-[70%] md:w-[60%] rounded-lg shadow-lg"
          src={hero2}
          alt="peaceful scene"
        />
      </div>

      {/* Key Features Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 w-full max-w-6xl">
        {/* Feature 1 */}
        <div className="p-6 bg-white shadow-md rounded-lg hover:shadow-xl transition duration-300 ease-in-out">
          <h2 className="text-xl sm:text-2xl font-semibold mb-4 font-poppins text-primaryGreen">
            Anonymity & Privacy
          </h2>
          <p className="text-gray-600 font-lora">
            Stay completely anonymous while you share your thoughts and moods
            with the community. QuiteNest prioritizes your privacy at every
            step.
          </p>
        </div>

        {/* Feature 2 */}
        <div className="p-6 bg-white shadow-md rounded-lg hover:shadow-xl transition duration-300 ease-in-out">
          <h2 className="text-xl sm:text-2xl font-semibold mb-4 font-poppins text-primaryGreen">
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
          <h2 className="text-xl sm:text-2xl font-semibold mb-4 font-poppins text-primaryGreen">
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
        <button className="px-6 py-3 bg-primaryGreen text-white font-semibold hover:bg-secondaryGreen hover:text-black transition duration-300 ease-in-out rounded-md">
          Join QuiteNest
        </button>
      </div>
    </div>
  );
};

export default About;
