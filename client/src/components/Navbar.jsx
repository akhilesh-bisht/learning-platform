import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem("token") ? true : false
  );

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    navigate("/");
  };

  return (
    <nav className="bg-indigo-600 text-white">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-xl font-bold flex items-center">
            <span className="text-2xl mr-2">🎓</span>
            KidLearn
          </Link>

          <div className="hidden md:flex items-center space-x-6">
            <Link to="/" className="hover:text-indigo-200 transition">
              Home
            </Link>
            <Link
              to="/subject/english"
              className="hover:text-indigo-200 transition"
            >
              English
            </Link>
            <Link
              to="/subject/math"
              className="hover:text-indigo-200 transition"
            >
              Math
            </Link>

            {isLoggedIn ? (
              <>
                <Link
                  to="/profile"
                  className="hover:text-indigo-200 transition"
                >
                  My Progress
                </Link>
                <button
                  onClick={handleLogout}
                  className="px-4 py-1 bg-white text-indigo-600 rounded-md hover:bg-indigo-100 transition"
                >
                  Logout
                </button>
              </>
            ) : (
              <Link
                to="/login"
                className="px-4 py-1 bg-white text-indigo-600 rounded-md hover:bg-indigo-100 transition"
              >
                Login
              </Link>
            )}
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-white focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-3 space-y-2">
            <Link
              to="/"
              className="block py-2 hover:bg-indigo-700 px-2 rounded"
            >
              Home
            </Link>
            <Link
              to="/subject/english"
              className="block py-2 hover:bg-indigo-700 px-2 rounded"
            >
              English
            </Link>
            <Link
              to="/subject/math"
              className="block py-2 hover:bg-indigo-700 px-2 rounded"
            >
              Math
            </Link>

            {isLoggedIn ? (
              <>
                <Link
                  to="/profile"
                  className="block py-2 hover:bg-indigo-700 px-2 rounded"
                >
                  My Progress
                </Link>
                <button
                  onClick={handleLogout}
                  className="block w-full text-left py-2 hover:bg-indigo-700 px-2 rounded"
                >
                  Logout
                </button>
              </>
            ) : (
              <Link
                to="/login"
                className="block py-2 hover:bg-indigo-700 px-2 rounded"
              >
                Login
              </Link>
            )}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
