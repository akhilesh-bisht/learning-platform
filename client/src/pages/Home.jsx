import React from "react";
import Hero from "../components/Hero";
import Pricing from "../components/Pricing";
import { FeaturesSection } from "../components/Features";
const Home = () => {
  return (
    <>
      <div className="min-h-screen flex flex-col bg-gray-100">
        <Hero />
        <FeaturesSection />
        <Pricing />
      </div>
    </>
  );
};

export default Home;
