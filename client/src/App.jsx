import React from "react";
import Home from "./pages/Home";
import { ThemeProvider } from "./components/ThemeProvider";
import { BackgroundBeams } from "./components/ui/background-beams";
function App() {
  return (
    <>
      <ThemeProvider defaultTheme="light " storageKey="vite-ui-theme">
        <Home />
        <BackgroundBeams />
      </ThemeProvider>
    </>
  );
}

export default App;
