import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
// import { markLessonComplete } from "../../redux/actions/progressActions";
// import { useAuth } from "../../contexts/AuthContext";
// import InteractiveElement from "./InteractiveElement";
// import LessonNavigation from "./LessonNavigation";
// import ConfettiEffect from "../common/ConfettiEffect";
// import Button from "../common/Button";

const LessonContent = ({ lesson, nextLessonId, nextQuizId }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showCompletionMessage, setShowCompletionMessage] = useState(false);
  const [isInteractiveComplete, setIsInteractiveComplete] = useState({});
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { userProfile } = useAuth();

  const slides = lesson?.content?.split("---") || [];

  const handleNext = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide((prev) => prev + 1);
    } else {
      completeLesson();
    }
  };

  const handlePrevious = () => {
    if (currentSlide > 0) {
      setCurrentSlide((prev) => prev - 1);
    }
  };

  const completeLesson = () => {
    if (userProfile?._id && lesson?._id) {
      dispatch(markLessonComplete(userProfile._id, lesson._id));
      setShowCompletionMessage(true);
    }
  };

  const handleInteractiveComplete = (id, isComplete) => {
    setIsInteractiveComplete((prev) => ({
      ...prev,
      [id]: isComplete,
    }));
  };

  const navigateToQuiz = () => {
    if (nextQuizId) {
      navigate(`/quizzes/${nextQuizId}`);
    } else if (nextLessonId) {
      navigate(`/lessons/${nextLessonId}`);
    } else {
      navigate("/dashboard");
    }
  };

  const isSlideComplete = () => {
    const slideInteractives =
      lesson?.interactiveElements?.filter(
        (el) => el.slideIndex === currentSlide
      ) || [];

    return (
      slideInteractives.length === 0 ||
      slideInteractives.every((el) => isInteractiveComplete[el._id])
    );
  };

  return (
    <div className="max-w-4xl mx-auto p-4">
      {showCompletionMessage ? (
        <div className="bg-green-100 border border-green-400 rounded-lg p-8 text-center">
          <ConfettiEffect />
          <h2 className="text-3xl font-bold text-green-700 mb-4">
            Lesson Complete!
          </h2>
          <p className="text-lg mb-6">
            Great job! You've completed this lesson.
          </p>
          <Button
            onClick={navigateToQuiz}
            className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-6 rounded-lg text-lg"
          >
            {nextQuizId ? "Take the Quiz" : "Continue Learning"}
          </Button>
        </div>
      ) : (
        <>
          <div className="mb-6">
            <h1 className="text-3xl font-bold text-indigo-800 mb-2">
              {lesson?.title}
            </h1>
            <div className="w-full bg-gray-200 rounded-full h-2.5">
              <div
                className="bg-indigo-600 h-2.5 rounded-full"
                style={{
                  width: `${((currentSlide + 1) / slides.length) * 100}%`,
                }}
              ></div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 mb-6">
            <div
              className="prose max-w-none"
              dangerouslySetInnerHTML={{ __html: slides[currentSlide] }}
            />

            {lesson?.interactiveElements
              ?.filter((el) => el.slideIndex === currentSlide)
              .map((element) => (
                <InteractiveElement
                  key={element._id}
                  element={element}
                  onComplete={(isComplete) =>
                    handleInteractiveComplete(element._id, isComplete)
                  }
                />
              ))}
          </div>

          <LessonNavigation
            currentSlide={currentSlide}
            totalSlides={slides.length}
            onNext={handleNext}
            onPrevious={handlePrevious}
            disableNext={!isSlideComplete()}
          />
        </>
      )}
    </div>
  );
};

export default LessonContent;
