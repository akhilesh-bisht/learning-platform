import React from "react";

const Features = () => {
  const features = [
    {
      icon: "🎬",
      title: "Interactive Videos",
      description:
        "Engaging educational videos that make learning fun and memorable.",
    },
    {
      icon: "🎤",
      title: "Voice Activities",
      description:
        "Practice speaking and pronunciation with voice recognition technology.",
    },
    {
      icon: "👆",
      title: "Touch Learning",
      description:
        "Interactive touch activities for hands-on learning experiences.",
    },
    {
      icon: "📊",
      title: "Progress Tracking",
      description:
        "Monitor your learning journey with detailed progress reports.",
    },
    {
      icon: "🏆",
      title: "Fun Achievements",
      description:
        "Earn badges and rewards as you complete lessons and quizzes.",
    },
    {
      icon: "🎮",
      title: "Educational Games",
      description:
        "Learn through play with our curriculum-aligned educational games.",
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Special Learning Features
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Our platform is designed to make learning engaging, interactive, and
            effective.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-indigo-700 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
