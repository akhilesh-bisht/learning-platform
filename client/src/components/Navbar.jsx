import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  BookOpen,
  Menu,
  X,
  ChevronDown,
  Book,
  Calculator,
  ListOrdered,
} from "lucide-react";
import { motion } from "framer-motion";
import Button from "@mui/material/Button";

const navLinks = [
  // { name: "Home", path: "/" },
  {
    name: "Subjects",
    path: "#",
    dropdown: [
      {
        name: "English",
        path: "/subject/english",
        icon: <Book className="w-4 h-4" />,
      },
      {
        name: "Math",
        path: "/subject/math",
        icon: <Calculator className="w-4 h-4" />,
      },
    ],
  },
  {
    name: "Grades",
    path: "#",
    dropdown: [
      {
        name: "Grade 1",
        path: "/grades/1",
        icon: <ListOrdered className="w-4 h-4" />,
      },
      {
        name: "Grade 2",
        path: "/grades/2",
        icon: <ListOrdered className="w-4 h-4" />,
      },
      {
        name: "Grade 3",
        path: "/grades/3",
        icon: <ListOrdered className="w-4 h-4" />,
      },
      {
        name: "Grade 4",
        path: "/grades/4",
        icon: <ListOrdered className="w-4 h-4" />,
      },
      {
        name: "Grade 5",
        path: "/grades/5",
        icon: <ListOrdered className="w-4 h-4" />,
      },
    ],
  },
  { name: "Pricing", path: "/pricing" },
  { name: "About", path: "/about" },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(null);
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
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur-md shadow-lg">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link to="/" className="flex items-center gap-2">
          <BookOpen className="h-6 w-6 text-blue-600" />
          <span className="text-xl font-bold">KidLearn</span>
        </Link>

        <nav className="hidden md:flex gap-6 justify-center items-center relative">
          {navLinks.map((link, index) => (
            <div key={index} className="relative">
              {link.dropdown ? (
                <div
                  onMouseEnter={() => setDropdownOpen(index)}
                  onMouseLeave={() => setDropdownOpen(null)}
                  className="flex items-center gap-1 text-sm font-medium hover:text-blue-600 cursor-pointer transition-transform"
                >
                  {link.name} <ChevronDown className="w-4 h-4 relative top-1" />
                  {dropdownOpen === index && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="absolute left-0 top-6 mt-1 w-40 bg-white shadow-lg rounded-md py-2"
                    >
                      {link.dropdown.map((item) => (
                        <Link
                          key={item.path}
                          to={item.path}
                          className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 transition"
                        >
                          {item.icon} {item.name}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </div>
              ) : (
                <Link
                  to={link.path}
                  className="text-sm font-medium hover:text-blue-600 transition"
                >
                  {link.name}
                </Link>
              )}
            </div>
          ))}
        </nav>

        <div className="hidden md:flex gap-4">
          {isLoggedIn ? (
            <>
              <Link
                to="/profile"
                className="text-sm font-medium hover:text-blue-600 transition"
              >
                My Progress
              </Link>
              <Button variant="outlined" color="primary" onClick={handleLogout}>
                Logout
              </Button>
            </>
          ) : (
            <>
              <Button
                variant="outlined"
                color="primary"
                component={Link}
                to="/login"
              >
                Login
              </Button>
              <Button
                variant="contained"
                color="primary"
                component={Link}
                to="/register"
              >
                Sign Up
              </Button>
            </>
          )}
        </div>

        <button
          className="md:hidden p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>

        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-16 left-0 right-0 bg-white border-b p-4 md:hidden shadow-lg"
          >
            <nav className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="text-sm font-medium hover:text-blue-600 transition"
                >
                  {link.name}
                </Link>
              ))}
              {isLoggedIn ? (
                <>
                  <Link
                    to="/profile"
                    className="block py-2 hover:bg-indigo-700 px-2 rounded"
                  >
                    My Progress
                  </Link>
                  <Button variant="outlined" fullWidth onClick={handleLogout}>
                    Logout
                  </Button>
                </>
              ) : (
                <Button
                  variant="contained"
                  fullWidth
                  component={Link}
                  to="/login"
                >
                  Login
                </Button>
              )}
            </nav>
          </motion.div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
