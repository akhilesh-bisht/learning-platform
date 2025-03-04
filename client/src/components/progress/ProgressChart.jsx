import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const ProgressChart = ({ progressData }) => {
  const subjects = ["Math", "English"];

  const calculateProgress = (subject) => {
    const lowerSubject = subject.toLowerCase();
    const completedLessons =
      progressData?.lessonsCompleted?.filter(
        (lesson) => lesson.subjectId === lowerSubject
      ).length || 0;

    const totalLessons = progressData?.totalLessons?.[lowerSubject] || 1;
    return (completedLessons / totalLessons) * 100;
  };

  const data = {
    labels: subjects,
    datasets: [
      {
        label: "Progress (%)",
        data: subjects.map((subject) => calculateProgress(subject)),
        backgroundColor: ["rgba(54, 162, 235, 0.6)", "rgba(255, 99, 132, 0.6)"],
        borderColor: ["rgba(54, 162, 235, 1)", "rgba(255, 99, 132, 1)"],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Subject Progress",
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        max: 100,
        ticks: {
          callback: function (value) {
            return value + "%";
          },
        },
      },
    },
  };

  return (
    <div>
      <Bar data={data} options={options} />
    </div>
  );
};

export default ProgressChart;
