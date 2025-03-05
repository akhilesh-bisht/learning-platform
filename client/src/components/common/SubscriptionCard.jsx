import React from "react";
import { useNavigate } from "react-router-dom";
import { FaCheck } from "react-icons/fa";
import Button from "./Button";

const SubscriptionCard = ({ plan }) => {
  const navigate = useNavigate();

  const handleSubscribe = () => {
    if (plan.type === "premium") {
      navigate("/subscription/checkout");
    } else {
      navigate("/dashboard");
    }
  };

  return (
    <div
      className={`rounded-xl shadow-lg p-6 transition-all hover:shadow-xl ${
        plan.type === "premium" ? "border-2 border-indigo-500" : ""
      }`}
    >
      <div className="text-center mb-6">
        <h3 className="text-2xl font-bold">{plan.name}</h3>
        <div className="mt-3">
          <span className="text-3xl font-bold">${plan.price}</span>
          {plan.price > 0 && <span className="text-gray-500">/month</span>}
        </div>
      </div>

      <ul className="space-y-3 mb-6">
        {plan.features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <span className="mr-2 mt-1 text-green-500">
              <FaCheck />
            </span>
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      <Button
        onClick={handleSubscribe}
        className={`w-full py-3 rounded-lg font-semibold ${
          plan.type === "premium"
            ? "bg-indigo-600 hover:bg-indigo-700 text-white"
            : "bg-gray-200 hover:bg-gray-300 text-gray-800"
        }`}
      >
        {plan.type === "free" ? "Get Started" : "Subscribe Now"}
      </Button>

      {plan.type === "premium" && (
        <p className="text-center mt-3 text-sm text-gray-500">
          7-day free trial, cancel anytime
        </p>
      )}
    </div>
  );
};

export default SubscriptionCard;
