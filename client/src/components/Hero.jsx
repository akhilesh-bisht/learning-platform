import React from "react";
import { Link } from "react-router-dom";
import HomePng from "../assets/home1.png";
import img from "../assets/about.png";
import Slider from "./Slider";
const Hero = () => {
  return (
    <section className="relative w-full min-h-screen flex items-center  text-black px-6 lg:px-16">
      <div className="container mx-auto flex flex-col-reverse lg:flex-row items-center justify-between">
        {/* Left Side - Text */}
        <div className="lg:w-1/2 text-center lg:text-left">
          <h1 className="text-4xl lg:text-5xl font-bold leading-tight mb-4">
            Learn, Play, Grow
          </h1>
          <p className="text-lg lg:text-xl mb-6">
            An interactive learning platform designed for students in grades
            1-8, making Math and English fun and engaging.
          </p>
          <div className="flex justify-center lg:justify-start gap-4">
            <Link
              to="/register"
              className="px-6 py-3 bg-white text-indigo-600 rounded-lg font-semibold hover:bg-indigo-100 transition shadow-md"
            >
              Start Learning Now
            </Link>
            <Link
              to="/about"
              className="px-6 py-3 border-2 border-white rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition"
            >
              Learn More
            </Link>
          </div>
        </div>

        {/* Right Side - Image */}
        <div className="lg:w-1/2 flex justify-center">
          <Slider />
        </div>
      </div>
      {/* Scrolling Effect */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
        <span className="block animate-bounce text-3xl">⬇</span>
      </div>
    </section>
  );
};

export default Hero;
