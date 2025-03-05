import React from "react";
import SubscriptionCard from "../components/common/SubscriptionCard";
// import FAQSection from "../components/common/FAQSection";

const SubscriptionPage = () => {
  const subscriptionPlans = [
    {
      type: "free",
      name: "Free Plan",
      price: 0,
      features: [
        "Access to basic Math & English lessons",
        "Limited quizzes and exercises",
        "Progress tracking",
        "Mobile-friendly access",
        "Community support",
      ],
    },
    {
      type: "premium",
      name: "Premium Plan",
      price: 9.99,
      features: [
        "Everything in Free Plan",
        "Full access to all lessons & content",
        "AI-generated practice exercises",
        "Personalized learning recommendations",
        "Advanced progress analytics",
        "Downloadable worksheets",
        "Priority support",
      ],
    },
  ];

  const faqs = [
    {
      question: "How does the 7-day free trial work?",
      answer:
        "You can try all premium features for 7 days without charge. If you decide to cancel before the trial ends, your card won't be charged",
    },
    {
      question: "Can I cancel my subscription anytime?",
      answer:
        "Yes, you can cancel your subscription at any time. Your premium access will continue until the end of your current billing period.",
    },
    {
      question: "Is there a family plan available?",
      answer:
        "Yes! Our family plan supports up to 4 student accounts for $19.99/month. Visit our Family Plan page for more details.",
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards, PayPal, and Apple Pay.",
    },
    {
      question:
        "Will my child still have access to completed lessons if I cancel?",
      answer:
        "Yes, previously completed lessons and quiz results will still be accessible, but new premium content will be restricted.",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-indigo-800 mb-4">
          Choose Your Learning Plan
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Select the plan that works best for your child's learning journey
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16">
        {subscriptionPlans.map((plan) => (
          <SubscriptionCard key={plan.type} plan={plan} />
        ))}
      </div>

      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">
          Frequently Asked Questions
        </h2>
        <FAQSection faqs={faqs} />
      </div>
    </div>
  );
};

export default SubscriptionPage;
