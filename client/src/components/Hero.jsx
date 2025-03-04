import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white py-16 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Learn English & Math Through Play!
            </h1>
            <p className="text-xl mb-6">
              Interactive lessons with videos, voice activities, and touch games
              designed for grades 1-8.
            </p>
            <div className="space-x-4">
              <Link
                to="/register"
                className="inline-block px-6 py-3 bg-white text-indigo-600 rounded-lg font-semibold hover:bg-indigo-100 transition shadow-md"
              >
                Start Learning Now
              </Link>
              <Link
                to="/about"
                className="inline-block px-6 py-3 bg-transparent border-2 border-white rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition"
              >
                Learn More
              </Link>
            </div>
          </div>
          <div className="md:w-1/2">
            <img
              src="/api/placeholder/600/400"
              alt="Children learning"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
