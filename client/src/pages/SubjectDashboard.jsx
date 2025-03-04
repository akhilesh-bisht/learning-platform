import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import LessonCard from "../components/lessons/LessonContent";

const SubjectDashboard = () => {
  const { subjectName } = useParams();
  const [lessons, setLessons] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedGrade, setSelectedGrade] = useState(1);

  // Subject color configurations
  const subjectColors = {
    english: {
      light: "bg-blue-100",
      main: "bg-blue-500",
      text: "text-blue-700",
    },
    math: {
      light: "bg-green-100",
      main: "bg-green-500",
      text: "text-green-700",
    },
  };

  // Mock data moved outside useEffect for better organization
  const mockLessons = [
    // ... (your existing mock lessons data)
  ];

  useEffect(() => {
    const fetchLessons = () => {
      const filtered = mockLessons.filter(
        (lesson) =>
          lesson.subject.toLowerCase() === subjectName.toLowerCase() &&
          lesson.grade === selectedGrade
      );
      setLessons(filtered);
      setLoading(false);
    };

    setLoading(true);
    const timer = setTimeout(fetchLessons, 1000);
    return () => clearTimeout(timer);
  }, [subjectName, selectedGrade]);

  const colorSet =
    subjectColors[subjectName.toLowerCase()] || subjectColors.english;

  const handleGradeChange = (e) => {
    setSelectedGrade(Number(e.target.value));
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className={`${colorSet.light} rounded-lg p-6 mb-8 shadow-md`}>
        <div className="max-w-4xl mx-auto">
          <h1 className={`text-3xl font-bold ${colorSet.text} mb-2`}>
            {subjectName.charAt(0).toUpperCase() + subjectName.slice(1)} Lessons
          </h1>
          <p className="text-gray-700 mb-4">
            {subjectName === "english"
              ? "Develop essential language skills through interactive lessons and activities."
              : "Build critical math skills with fun, engaging lessons and practice exercises."}
          </p>

          <div className="flex items-center">
            <label htmlFor="grade-select" className="mr-3 font-medium">
              Grade:
            </label>
            <select
              id="grade-select"
              value={selectedGrade}
              onChange={handleGradeChange}
              className="border rounded-md px-3 py-1.5 bg-white"
            >
              {[1, 2, 3, 4, 5, 6, 7, 8].map((grade) => (
                <option key={grade} value={grade}>
                  Grade {grade}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {loading ? (
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-4 border-solid border-gray-200 border-t-transparent"></div>
        </div>
      ) : lessons.length === 0 ? (
        <p className="text-center text-gray-500">
          No lessons found for Grade {selectedGrade}.
        </p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {lessons.map((lesson) => (
            <Link
              key={lesson.id}
              to={`/lesson/${lesson.id}`}
              className="hover:transform hover:scale-105 transition-all"
            >
              <LessonCard lesson={lesson} />
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default SubjectDashboard;
