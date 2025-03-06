import React from "react";
import FAQ from "../components/Faq";
import img from "../assets/home1.png";

const About = () => {
  return (
    <div className="bg-gradient-to-r from-blue-600 to-purple-600 min-h-screen text-white">
      {/* Hero Section */}
      <section className="text-center py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-extrabold tracking-tight">
            Transforming Learning for Kids 🚀
          </h1>
          <p className="mt-4 text-lg opacity-90">
            Engaging, interactive, and fun-filled education for Grades 1-8,
            powered by AI and gamification!
          </p>
        </div>
      </section>

      {/* About Content */}
      <section className="max-w-6xl mx-auto py-16 px-6 flex flex-col md:flex-row items-center gap-12">
        {/* Left Content */}
        <div className="md:w-1/2 bg-white/20 backdrop-blur-lg p-8 rounded-2xl shadow-lg">
          <h2 className="text-3xl font-bold text-white">Why Choose Us?</h2>
          <p className="text-lg mt-4 opacity-90">
            We make learning **engaging and effective** with:
          </p>
          <ul className="mt-4 space-y-3">
            <li className="flex items-center gap-3">
              ✅ <span>Interactive & AI-powered lessons</span>
            </li>
            <li className="flex items-center gap-3">
              🎭 <span>Comedy-based storytelling for fun learning</span>
            </li>
            <li className="flex items-center gap-3">
              🏆 <span>Gamified quizzes & challenges</span>
            </li>
            <li className="flex items-center gap-3">
              📊 <span>Progress tracking for students & parents</span>
            </li>
          </ul>
        </div>

        {/* Right Image */}
        <div className="md:w-1/2">
          <img
            src={img}
            alt="Kids Learning"
            className="w-full rounded-2xl shadow-xl"
          />
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white rounded-t-3xl text-gray-900">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-8">FAQs</h2>
          <FAQ />
        </div>
      </section>
    </div>
  );
};

export default About;
