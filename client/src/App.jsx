import React from "react";
import { Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout"; // Import the layout
import Home from "./pages/Home";
import AboutUs from "./pages/About";
import { ThemeProvider } from "./components/ThemeProvider";
import { BackgroundBeams } from "./components/ui/background-beams";

function App() {
  return (
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <BackgroundBeams />
      <Routes>
        {/* Wrap all pages inside MainLayout */}
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<AboutUs />} />
        </Route>
      </Routes>
    </ThemeProvider>
  );
}

export default App;
