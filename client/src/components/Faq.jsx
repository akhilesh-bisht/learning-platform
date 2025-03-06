import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "./ui/accordion";

const FAQ = () => {
  return (
    <section className="max-w-4xl mx-auto py-12 px-4">
      <h2 className="text-3xl font-bold text-center mb-6">
        Frequently Asked Questions
      </h2>
      <Accordion type="single" collapsible className="w-full">
        {/* Question 1 */}
        <AccordionItem value="q1">
          <AccordionTrigger>What is this platform about?</AccordionTrigger>
          <AccordionContent>
            Our platform helps students in **Grades 1-8** learn **Math and
            English** in a fun and interactive way. We use **comedy-based
            teaching, quizzes, and AI-powered tutoring** to make learning
            engaging.
          </AccordionContent>
        </AccordionItem>

        {/* Question 2 */}
        <AccordionItem value="q2">
          <AccordionTrigger>Is the platform free to use?</AccordionTrigger>
          <AccordionContent>
            We offer a **free plan** with basic lessons and quizzes. To access
            **premium content, AI tutoring, and progress tracking**, you can
            subscribe to our **affordable premium plan**.
          </AccordionContent>
        </AccordionItem>

        {/* Question 3 */}
        <AccordionItem value="q3">
          <AccordionTrigger>How do the quizzes work?</AccordionTrigger>
          <AccordionContent>
            Each lesson comes with **interactive quizzes** to test knowledge.
            Students receive **instant feedback, explanations, and hints** to
            help them understand mistakes.
          </AccordionContent>
        </AccordionItem>

        {/* Question 4 */}
        <AccordionItem value="q4">
          <AccordionTrigger>
            Can parents track their child's progress?
          </AccordionTrigger>
          <AccordionContent>
            Yes! We provide a **progress dashboard** where parents can see their
            child’s learning journey, quiz scores, and improvement areas.
          </AccordionContent>
        </AccordionItem>

        {/* Question 5 */}
        <AccordionItem value="q5">
          <AccordionTrigger>
            What makes this platform different from others?
          </AccordionTrigger>
          <AccordionContent>
            Unlike traditional learning apps, we use **comedy-based lessons,
            interactive storytelling, gamification, and AI-driven tutoring** to
            make learning fun and engaging for kids.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </section>
  );
};

export default FAQ;
