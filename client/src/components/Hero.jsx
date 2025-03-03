import { useEffect, useRef } from "react";
import Button from "./Button";

const Hero = () => {
  const titleRef = useRef(null);
  const descRef = useRef(null);
  const ctaRef = useRef(null);

  useEffect(() => {
    // Delayed fade-in animation
    setTimeout(() => {
      titleRef.current.classList.add("fade-in");
    }, 500);

    setTimeout(() => {
      descRef.current.classList.add("fade-in");
    }, 1000);

    setTimeout(() => {
      ctaRef.current.classList.add("fade-in");
    }, 1500);
  }, []);

  return (
    <div className="bg-gradient-to-b from-white to-blue-50 py-24 text-center">
      <div className="container mx-auto px-4">
        <h1
          ref={titleRef}
          className="text-4xl font-extrabold tracking-tight lg:text-5xl opacity-0 text-gray-900"
        >
          Modern Web Application
        </h1>
        <p
          ref={descRef}
          className="mx-auto mt-6 max-w-2xl text-lg text-gray-600 opacity-0"
        >
          A powerful web application built with React, Tailwind CSS, Node.js,
          Express, and MongoDB.
        </p>
        <div ref={ctaRef} className="mt-10 opacity-0">
          <Button size="lg" className="mx-2">
            Get Started
          </Button>
          <Button size="lg" variant="outline" className="mx-2">
            Learn More
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
