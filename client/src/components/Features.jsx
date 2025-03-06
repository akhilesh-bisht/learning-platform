import { cn } from "../components/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router-dom";

export const Features = [
  {
    icon: "📚",
    title: "Structured Lessons",
    description:
      "Carefully designed lessons covering foundational concepts in Math and English for grades 1-8.",
    link: "#",
  },
  {
    icon: "📝",
    title: "Interactive Quizzes",
    description:
      "Fun and engaging quizzes to reinforce learning and test understanding.",
    link: "#",
  },
  {
    icon: "📊",
    title: "Progress Tracking",
    description:
      "Visual indicators like progress bars and charts to monitor learning journey.",
    link: "#",
  },
  {
    icon: "🏆",
    title: "Rewards System",
    description:
      "Earn badges and rewards for completing lessons and achieving milestones.",
    link: "#",
  },
  {
    icon: "🤖",
    title: "Personalized Learning",
    description:
      "Premium features include AI-generated practice exercises tailored to individual needs.",
    link: "#",
  },
  {
    icon: "📱",
    title: "Accessible Design",
    description:
      "Mobile-friendly interface optimized for accessibility and performance.",
    link: "#",
  },
];

export const HoverEffect = ({ items, className }) => {
  let [hoveredIndex, setHoveredIndex] = useState(null);

  if (!items || !Array.isArray(items)) {
    return null;
  }

  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-10",
        className
      )}
    >
      {items.map((item, idx) => (
        <Link
          to={item?.link}
          key={idx}
          className="relative group block p-2 h-full w-full"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 h-full w-full bg-neutral-200 dark:bg-slate-800/[0.8] block rounded-3xl"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.15 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0.2 },
                }}
              />
            )}
          </AnimatePresence>
          <Card>
            <div className="text-2xl">{item.icon}</div>
            <CardTitle>{item.title}</CardTitle>
            <CardDescription>{item.description}</CardDescription>
          </Card>
        </Link>
      ))}
    </div>
  );
};

export const Card = ({ className, children }) => {
  return (
    <div
      className={cn(
        "rounded-2xl h-full w-full p-4 overflow-hidden bg-black border border-transparent dark:border-white/[0.2] group-hover:border-slate-700 relative z-20",
        className
      )}
    >
      <div className="relative z-50">
        <div className="p-4">{children}</div>
      </div>
    </div>
  );
};

export const CardTitle = ({ className, children }) => {
  return (
    <h4 className={cn("text-zinc-100 font-bold tracking-wide mt-4", className)}>
      {children}
    </h4>
  );
};

export const CardDescription = ({ className, children }) => {
  return (
    <p
      className={cn(
        "mt-8 text-zinc-400 tracking-wide leading-relaxed text-sm",
        className
      )}
    >
      {children}
    </p>
  );
};

// Main component to use
export const FeaturesSection = () => {
  return (
    <div className="max-w-5xl bg-black mx-auto px-8">
      <HoverEffect items={Features} />
    </div>
  );
};
