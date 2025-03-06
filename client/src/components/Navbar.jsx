import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  BookOpen,
  Menu,
  X,
  ChevronDown,
  Book,
  Calculator,
  ListOrdered,
  Sun,
  Moon,
} from "lucide-react";
import { motion } from "framer-motion";
import Button from "@mui/material/Button";
import Switch from "@mui/material/Switch"; // MUI Switch for Theme Toggle

const navLinks = [
  {
    name: "Subjects",
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

  // Dark Mode State
  const [isDarkMode, setIsDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDarkMode]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    navigate("/");
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white dark:bg-gray-900 shadow-lg">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <BookOpen className="h-6 w-6 text-blue-600" />
          <span className="text-xl font-bold">KidLearn</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-6 justify-center items-center relative">
          {navLinks.map((link, index) => (
            <div
              key={index}
              className="relative group"
              onMouseEnter={() => setDropdownOpen(index)}
              onMouseLeave={() => setDropdownOpen(null)}
            >
              {link.dropdown ? (
                <div className="flex items-center gap-1 text-sm font-medium hover:text-blue-600 cursor-pointer transition">
                  {link.name} <ChevronDown className="w-4 h-4" />
                </div>
              ) : (
                <Link
                  to={link.path}
                  className="text-sm font-medium hover:text-blue-600 transition"
                >
                  {link.name}
                </Link>
              )}

              {/* Dropdown Menu */}
              {dropdownOpen === index && link.dropdown && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="absolute left-0 top-full mt-1 w-40 bg-white dark:bg-gray-800 shadow-lg rounded-md py-2"
                >
                  {link.dropdown.map((item) => (
                    <Link
                      key={item.path}
                      to={item.path}
                      className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 transition"
                    >
                      {item.icon} {item.name}
                    </Link>
                  ))}
                </motion.div>
              )}
            </div>
          ))}
        </nav>

        {/* Right Side (Login/Logout & Theme Toggle) */}
        <div className="hidden md:flex gap-4 items-center">
          {/* Dark Mode Toggle */}
          <div className="flex items-center gap-2">
            <Sun className="w-5 h-5 text-yellow-500 dark:text-gray-400" />
            <Switch
              checked={isDarkMode}
              onChange={() => setIsDarkMode(!isDarkMode)}
              color="default"
            />
            <Moon className="w-5 h-5 text-gray-900 dark:text-white" />
          </div>

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

        {/* Mobile Menu Button */}
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

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-16 left-0 right-0 bg-white dark:bg-gray-900 border-b p-4 md:hidden shadow-lg"
          >
            <nav className="flex flex-col space-y-4">
              {navLinks.map((link, index) => (
                <div key={index}>
                  {link.dropdown ? (
                    <details className="group">
                      <summary className="flex justify-between items-center cursor-pointer p-2 text-sm font-medium hover:text-blue-600">
                        {link.name}
                        <ChevronDown className="w-4 h-4 group-open:rotate-180 transition-transform" />
                      </summary>
                      <div className="pl-4 mt-1 space-y-2">
                        {link.dropdown.map((item) => (
                          <Link
                            key={item.path}
                            to={item.path}
                            className="block text-sm hover:text-blue-600 transition"
                          >
                            {item.name}
                          </Link>
                        ))}
                      </div>
                    </details>
                  ) : (
                    <Link
                      to={link.path}
                      className="block text-sm hover:text-blue-600 transition"
                    >
                      {link.name}
                    </Link>
                  )}
                </div>
              ))}
            </nav>
          </motion.div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
