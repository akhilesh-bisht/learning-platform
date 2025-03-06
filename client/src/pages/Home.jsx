import React from "react";
// import { Link } from "react-route/r-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Pricing from "../components/Pricing";
import { FeaturesSection } from "../components/Features";
const Home = () => {
  return (
    <>
      <div className="min-h-screen flex flex-col bg-gray-100">
        <Navbar />
        <Hero />
        <FeaturesSection />
        <Pricing />
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
};

export default Home;
