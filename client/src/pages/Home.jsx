import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Features from "../components/Features";
import Pricing from "../components/Pricing";

const Home = () => {
  return (
    <>
      <div className="min-h-screen flex flex-col bg-gray-100">
        <Navbar />
        <Hero />
        <Features />
        <Pricing />
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
};

export default Home;
