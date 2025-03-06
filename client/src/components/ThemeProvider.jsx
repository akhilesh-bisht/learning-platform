import { createContext, useContext, useEffect, useState, useMemo } from "react";

const ThemeProviderContext = createContext({
  theme: "system",
  setTheme: () => {},
});

export function ThemeProvider({
  children,
  defaultTheme = "system",
  storageKey = "vite-ui-theme",
}) {
  const [theme, setThemeState] = useState(() => {
    if (typeof window === "undefined") return defaultTheme;
    return localStorage.getItem(storageKey) || defaultTheme;
  });

  // Function to apply the theme
  const applyTheme = (theme) => {
    const root = document.documentElement;
    root.classList.remove("light", "dark");

    let resolvedTheme =
      theme === "system"
        ? window.matchMedia("(prefers-color-scheme: dark)").matches
          ? "dark"
          : "light"
        : theme;

    // Trim any accidental spaces in the class name
    resolvedTheme = resolvedTheme.trim();

    root.classList.add(resolvedTheme);
  };

  // Effect to update the theme on mount & when theme changes
  useEffect(() => {
    if (typeof window === "undefined") return;
    applyTheme(theme);
  }, [theme]);

  // Handle system theme change dynamically
  useEffect(() => {
    if (theme !== "system") return;

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleChange = () => applyTheme("system"); // Reapply theme on change

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, [theme]);

  // Function to set theme and update localStorage
  const setTheme = (newTheme) => {
    setThemeState(newTheme);
    localStorage.setItem(storageKey, newTheme);
    applyTheme(newTheme);
  };

  const value = useMemo(() => ({ theme, setTheme }), [theme]);

  return (
    <ThemeProviderContext.Provider value={value}>
      {children}
    </ThemeProviderContext.Provider>
  );
}

export const useTheme = () => useContext(ThemeProviderContext);
