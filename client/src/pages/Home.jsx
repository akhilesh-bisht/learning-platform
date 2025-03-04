import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-blue-50 to-indigo-100">
      <Navbar />

      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-indigo-700 mb-4">
            Fun Learning for Grades 1-8
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Interactive English and Math lessons with fun videos, voice
            activities, and touch-based learning!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center hover:shadow-lg transition">
            <div className="w-24 h-24 bg-blue-100 rounded-full flex items-center justify-center mb-4">
              <span className="text-3xl text-blue-500">🔤</span>
            </div>
            <h2 className="text-2xl font-semibold text-blue-600 mb-2">
              English
            </h2>
            <p className="text-gray-600 text-center mb-4">
              Fun vocabulary, reading, and grammar lessons for all grades
            </p>
            <Link
              to="/subject/english"
              className="mt-auto inline-block px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
            >
              Start Learning
            </Link>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center hover:shadow-lg transition">
            <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mb-4">
              <span className="text-3xl text-green-500">🔢</span>
            </div>
            <h2 className="text-2xl font-semibold text-green-600 mb-2">Math</h2>
            <p className="text-gray-600 text-center mb-4">
              Interactive math lessons with fun problems and visual learning
            </p>
            <Link
              to="/subject/math"
              className="mt-auto inline-block px-6 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition"
            >
              Start Learning
            </Link>
          </div>
        </div>

        <div className="mt-16 max-w-4xl mx-auto bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold text-indigo-700 mb-4">
            Special Features
          </h2>
          <ul className="grid md:grid-cols-2 gap-4">
            <li className="flex items-start">
              <span className="text-green-500 mr-2">✓</span>
              <span>Video lessons with engaging animations</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-2">✓</span>
              <span>Voice-activated activities for pronunciation</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-2">✓</span>
              <span>Touch-based interactive learning</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-2">✓</span>
              <span>Progress tracking for parents and students</span>
            </li>
          </ul>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Home;
