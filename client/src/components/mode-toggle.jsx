import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react"; // Ensure you have Lucide React installed

export function ModeToggle() {
  const [theme, setTheme] = useState("system");

  // Load saved theme from localStorage on mount
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "system";
    applyTheme(savedTheme, false);
  }, []);

  // Function to apply theme and save it
  const applyTheme = (newTheme, save = true) => {
    setTheme(newTheme);
    document.documentElement.classList.remove("light", "dark");

    if (newTheme !== "system") {
      document.documentElement.classList.add(newTheme);
    }

    if (save) {
      localStorage.setItem("theme", newTheme);
    }
  };

  // Toggle between light and dark themes
  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    applyTheme(newTheme);
  };

  return (
    <button
      onClick={toggleTheme}
      className="p-2 border rounded-md bg-white dark:bg-gray-800 dark:text-white transition-all"
    >
      {theme === "dark" ? (
        <Moon className="h-5 w-5" />
      ) : (
        <Sun className="h-5 w-5" />
      )}
    </button>
  );
}
