import React, { useState } from "react";
// import MultipleChoiceQuestion from "./question-types/MultipleChoiceQuestion";
// import TrueFalseQuestion from "./question-types/TrueFalseQuestion";
// import FillInBlankQuestion from "./question-types/FillInBlankQuestion";
// import MatchingQuestion from "./question-types/MatchingQuestion";
import Button from "../Button";

const QuizQuestion = ({
  question,
  onAnswer,
  showFeedback = false,
  userAnswer = null,
}) => {
  const [selectedAnswer, setSelectedAnswer] = useState(userAnswer);
  const [submitted, setSubmitted] = useState(!!userAnswer);

  const handleAnswerChange = (answer) => {
    if (!submitted) {
      setSelectedAnswer(answer);
    }
  };

  const handleSubmit = () => {
    if (selectedAnswer !== null) {
      setSubmitted(true);
      onAnswer(question._id, selectedAnswer);
    }
  };

  const isCorrect =
    submitted &&
    (question.questionType === "matching"
      ? JSON.stringify(selectedAnswer) ===
        JSON.stringify(question.correctAnswer)
      : selectedAnswer === question.correctAnswer);

  const renderQuestion = () => {
    switch (question.questionType) {
      case "multipleChoice":
        return (
          <MultipleChoiceQuestion
            question={question}
            selectedAnswer={selectedAnswer}
            onAnswerChange={handleAnswerChange}
            disabled={submitted}
          />
        );
      case "trueFalse":
        return (
          <TrueFalseQuestion
            question={question}
            selectedAnswer={selectedAnswer}
            onAnswerChange={handleAnswerChange}
            disabled={submitted}
          />
        );
      case "fillInBlank":
        return (
          <FillInBlankQuestion
            question={question}
            userAnswer={selectedAnswer}
            onAnswerChange={handleAnswerChange}
            disabled={submitted}
          />
        );
      case "matching":
        return (
          <MatchingQuestion
            question={question}
            matches={selectedAnswer || {}}
            onMatchChange={handleAnswerChange}
            disabled={submitted}
          />
        );
      default:
        return <p>Unsupported question type</p>;
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-4">
      <h3 className="text-xl font-semibold mb-4">{question.questionText}</h3>

      {renderQuestion()}

      {showFeedback && submitted && (
        <div
          className={`mt-4 p-3 rounded-md ${
            isCorrect ? "bg-green-100" : "bg-red-100"
          }`}
        >
          <p
            className={`font-medium ${
              isCorrect ? "text-green-700" : "text-red-700"
            }`}
          >
            {isCorrect ? "✓ Correct!" : "✗ Incorrect"}
          </p>
          {!isCorrect && (
            <div className="mt-2">
              <p className="font-medium">Correct answer:</p>
              <p>
                {question.explanation || JSON.stringify(question.correctAnswer)}
              </p>
            </div>
          )}
        </div>
      )}

      {!submitted && (
        <div className="mt-6">
          <Button
            onClick={handleSubmit}
            disabled={selectedAnswer === null}
            className={`py-2 px-6 rounded-md font-medium ${
              selectedAnswer === null
                ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                : "bg-indigo-600 hover:bg-indigo-700 text-white"
            }`}
          >
            Submit Answer
          </Button>
        </div>
      )}
    </div>
  );
};

export default QuizQuestion;
