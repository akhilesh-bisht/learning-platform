import React from "react";
import { Link } from "react-router-dom";

const Pricing = () => {
  const plans = [
    {
      name: "Basic",
      price: "Free",
      description: "Perfect for trying out our platform",
      features: [
        "Access to 10 free lessons",
        "Basic English & Math content",
        "Limited progress tracking",
        "Standard video lessons",
      ],
      buttonText: "Get Started",
      buttonLink: "/register",
      highlighted: false,
    },
    {
      name: "Premium",
      price: "$9.99/month",
      description: "Full access to all learning content",
      features: [
        "Unlimited lessons & quizzes",
        "Complete English & Math curriculum",
        "Advanced progress tracking",
        "Voice & touch activities",
        "Offline download for videos",
        "Personalized learning path",
      ],
      buttonText: "Start Free Trial",
      buttonLink: "/register?plan=premium",
      highlighted: true,
    },
    {
      name: "Family",
      price: "$19.99/month",
      description: "Perfect for households with multiple children",
      features: [
        "Everything in Premium",
        "Up to 4 child profiles",
        "Family progress dashboard",
        "Priority support",
        "Monthly learning reports",
        "Parent guidance materials",
      ],
      buttonText: "Start Free Trial",
      buttonLink: "/register?plan=family",
      highlighted: false,
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Choose the plan that works best for your child's learning journey
          </p>
        </div>

        <div className="flex flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`flex-1 rounded-lg overflow-hidden ${
                plan.highlighted
                  ? "shadow-xl border-2 border-indigo-500 transform md:-translate-y-4"
                  : "shadow-md border border-gray-200"
              }`}
            >
              <div
                className={`p-6 ${
                  plan.highlighted
                    ? "bg-indigo-500 text-white"
                    : "bg-gray-50 text-gray-800"
                }`}
              >
                <h3 className="text-2xl font-bold mb-1">{plan.name}</h3>
                <div className="text-3xl font-bold mb-2">{plan.price}</div>
                <p
                  className={`${
                    plan.highlighted ? "text-indigo-100" : "text-gray-600"
                  }`}
                >
                  {plan.description}
                </p>
              </div>

              <div className="p-6 bg-white">
                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature, featureIdx) => (
                    <li key={featureIdx} className="flex items-start">
                      <svg
                        className="h-5 w-5 text-green-500 mr-2 mt-1 flex-shrink-0"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  to={plan.buttonLink}
                  className={`block w-full py-3 px-4 text-center rounded-md font-semibold transition ${
                    plan.highlighted
                      ? "bg-indigo-500 text-white hover:bg-indigo-600"
                      : "bg-indigo-100 text-indigo-700 hover:bg-indigo-200"
                  }`}
                >
                  {plan.buttonText}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
