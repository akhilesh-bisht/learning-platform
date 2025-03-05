import React from "react";
import { motion } from "framer-motion";

const Features = () => {
  const features = [
    {
      icon: "📚",
      title: "Structured Lessons",
      description:
        "Carefully designed lessons covering foundational concepts in Math and English for grades 1-8.",
    },
    {
      icon: "📝",
      title: "Interactive Quizzes",
      description:
        "Fun and engaging quizzes to reinforce learning and test understanding.",
    },
    {
      icon: "📊",
      title: "Progress Tracking",
      description:
        "Visual indicators like progress bars and charts to monitor learning journey.",
    },
    {
      icon: "🏆",
      title: "Rewards System",
      description:
        "Earn badges and rewards for completing lessons and achieving milestones.",
    },
    {
      icon: "🤖",
      title: "Personalized Learning",
      description:
        "Premium features include AI-generated practice exercises tailored to individual needs.",
    },
    {
      icon: "📱",
      title: "Accessible Design",
      description:
        "Mobile-friendly interface optimized for accessibility and performance.",
    },
  ];

  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">
            Learning Made Easy & Fun 🎓
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Our platform is designed to make learning engaging, interactive, and
            effective.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 hover:shadow-lg transition transform hover:scale-105"
            >
              <div className="text-5xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-indigo-700 dark:text-indigo-400 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
