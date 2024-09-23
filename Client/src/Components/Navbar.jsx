import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [user, setUser] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const temp = localStorage.getItem("Profile");
    const parsedProfile = JSON.parse(temp);
    setUser(parsedProfile.user);
    const details = jwtDecode(parsedProfile.token);
    console.log("details: ", details);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="p-5 flex justify-between items-center text-gray-700">
      {/* Logo */}
      <h1 className="font-poppins text-xl font-bold">QUITE NEST</h1>

      {/* Menu for larger screens */}
      <div className="hidden md:flex gap-5">
        <button className="hover:underline" onClick={() => navigate("/")}>
          Home
        </button>
        <button className="hover:underline" onClick={() => navigate("/about")}>
          About
        </button>
        {/* <button className="hover:underline" onClick={() => navigate("/draw")}>
          Draw
        </button> */}
        <button className="hover:underline">Community</button>
        {user.length > 0 ? (
          <button className="px-3 py-2 bg-primaryGreen hover:bg-secondary hover:text-black text-white transition duration-200 ease-in-out">
            {user}
          </button>
        ) : (
          <button
            onClick={() => navigate("/auth")}
            className="px-3 py-2 bg-primaryGreen hover:bg-secondary hover:text-black text-white transition duration-200 ease-in-out"
          >
            Login
          </button>
        )}
      </div>

      {/* Hamburger menu for mobile */}
      <div className="md:hidden">
        <button onClick={toggleMenu} className="focus:outline-none">
          {/* Hamburger Icon */}
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            ></path>
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-white shadow-lg md:hidden">
          <ul className="flex flex-col items-center gap-5 p-5">
            <li>
              <button
                className="hover:underline"
                onClick={() => {
                  navigate("/");
                  toggleMenu();
                }}
              >
                Home
              </button>
            </li>
            <li>
              <button
                className="hover:underline"
                onClick={() => {
                  navigate("/about");
                  toggleMenu();
                }}
              >
                About
              </button>
            </li>
            <li>
              <button className="hover:underline" onClick={() => toggleMenu()}>
                Community
              </button>
            </li>
            <li>
              <button
                onClick={() => {
                  navigate("/auth");
                  toggleMenu();
                }}
                className="px-3 py-2 bg-primaryGreen hover:bg-secondary hover:text-black text-white transition duration-200 ease-in-out"
              >
                Login
              </button>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
