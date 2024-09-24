import React, { useState, useEffect, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { jwtDecode } from "jwt-decode"; // Ensure it's imported correctly
import Button from "./Button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [user, setUser] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const menuRef = useRef(null); // Reference for handling outside click

  useEffect(() => {
    const temp = localStorage.getItem("Profile");
    if (temp) {
      const parsedProfile = JSON.parse(temp);
      const decodedToken = jwtDecode(parsedProfile.token);

      // Auto logout when the token expires
      if (decodedToken.exp * 1000 < new Date().getTime()) {
        handleLogout();
      } else {
        setUser(parsedProfile.user);
      }
    }
  }, [location]);

  useEffect(() => {
    // Handle click outside menuRef to close menu
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleUserMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleLogout = () => {
    localStorage.removeItem("Profile");
    setUser(""); // Clear the user state
    setMenuOpen(false);
    window.location.refresh();
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
        <button className="hover:underline">Houses</button>

        <div className="relative" ref={menuRef}>
          {user ? (
            <button
              className="primary-button-creative"
              onClick={toggleUserMenu}
            >
              {user}
            </button>
          ) : (
            <button
              className="primary-button-creative"
              onClick={() => navigate("/auth")}
            >
              Login
            </button>
          )}

          {/* User menu dropdown */}
          {menuOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-lg">
              <ul className="py-1">
                <li
                  className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                  onClick={() => {
                    navigate("/house");
                    setMenuOpen(false);
                  }}
                >
                  My House
                </li>
                <li
                  className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                  onClick={() => {
                    navigate("/saved");
                    setMenuOpen(false);
                  }}
                >
                  Saved
                </li>
                <li
                  className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                  onClick={handleLogout}
                >
                  Logout
                </li>
              </ul>
            </div>
          )}
        </div>
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
                Houses
              </button>
            </li>
            <li>
              {user ? (
                <div className="flex flex-col items-center gap-4">
                  <button
                    className="primary-button-creative shadow-none"
                    onClick={toggleUserMenu}
                  >
                    {user}
                  </button>
                  {menuOpen && (
                    <ul className="flex flex-col items-center mt-2 bg-white shadow-lg rounded-lg p-2">
                      <li
                        className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                        onClick={() => {
                          navigate("/saved");
                          setMenuOpen(false);
                        }}
                      >
                        Saved
                      </li>
                      <li
                        className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                        onClick={handleLogout}
                      >
                        Logout
                      </li>
                    </ul>
                  )}
                </div>
              ) : (
                <button
                  className="primary-button-creative"
                  onClick={() => navigate("/auth")}
                >
                  Login
                </button>
              )}
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
