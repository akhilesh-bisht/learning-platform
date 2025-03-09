import mongoose from "mongoose";

const QuestionSchema = new mongoose.Schema({
  question: { type: String, required: true },
  options: { type: [String], required: true }, // Array of multiple-choice options
  correctAnswer: { type: String, required: true },
});

const LessonSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String },
    subject: { type: String, enum: ["Math", "English"], required: true },
    grade: { type: Number, required: true },
    videoUrl: { type: String },
    content: { type: String, required: true },
    quiz: [QuestionSchema],
  },
  { timestamps: true }
);

export default mongoose.model("Lesson", LessonSchema);
