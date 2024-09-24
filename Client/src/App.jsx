import React, { useEffect } from "react";
import Navbar from "./Components/Navbar";
import Homepage from "./Pages/Homepage";
import { Routes, Route, useLocation } from "react-router-dom";
import About from "./Pages/About";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import PixelArt from "./Components/PixelArt";
import House from "./Pages/House";

const App = () => {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div className="font-['Courier_New'] font-semiboldt">
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<About />} />
        <Route path="/auth" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/draw" element={<PixelArt />} />
        <Route path="/house" element={<House />} />
      </Routes>
    </div>
  );
};

export default App;
