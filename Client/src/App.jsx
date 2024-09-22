import React from "react";
import Navbar from "./Components/Navbar";
import Homepage from "./Pages/Homepage";
import { Routes, Route } from "react-router-dom";
import About from "./Pages/About";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";

const App = () => {
  return (
    <div className="px-2 sm:px-10 font-lora">
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<About />} />
        <Route path="/auth" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </div>
  );
};

export default App;
