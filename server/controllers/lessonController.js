import { validationResult } from "express-validator";
import Lesson from "../models/Lesson.js";

// Get all lessons
export const getAllLessons = async (req, res) => {
  try {
    const lessons = await Lesson.find();
    res.json(lessons);
  } catch (error) {
    res
      .status(500)
      .json({ error: "Failed to fetch lessons", details: error.message });
  }
};

// Get a single lesson by ID
export const getLessonById = async (req, res) => {
  try {
    const lesson = await Lesson.findById(req.params.id);
    if (!lesson) return res.status(404).json({ error: "Lesson not found" });
    res.json(lesson);
  } catch (error) {
    res
      .status(500)
      .json({ error: "Failed to fetch lesson", details: error.message });
  }
};

// Create a new lesson
export const createLesson = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty())
      return res.status(400).json({ errors: errors.array() });

    const { title, description, subject, grade, videoUrl, content, quiz } =
      req.body;
    const newLesson = new Lesson({
      title,
      description,
      subject,
      grade,
      videoUrl,
      content,
      quiz: quiz || [],
    });

    await newLesson.save();
    res.status(201).json(newLesson);
  } catch (error) {
    res
      .status(500)
      .json({ error: "Failed to create lesson", details: error.message });
  }
};

// Add a quiz to an existing lesson
export const addQuizToLesson = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty())
      return res.status(400).json({ errors: errors.array() });

    const { question, options, correctAnswer } = req.body;
    const lesson = await Lesson.findById(req.params.id);

    if (!lesson) return res.status(404).json({ error: "Lesson not found" });

    lesson.quiz.push({ question, options, correctAnswer });
    await lesson.save();
    res.json(lesson);
  } catch (error) {
    res
      .status(500)
      .json({ error: "Failed to add quiz", details: error.message });
  }
};

// Update a lesson
export const updateLesson = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty())
      return res.status(400).json({ errors: errors.array() });

    const updatedLesson = await Lesson.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );

    if (!updatedLesson)
      return res.status(404).json({ error: "Lesson not found" });

    res.json(updatedLesson);
  } catch (error) {
    res
      .status(500)
      .json({ error: "Failed to update lesson", details: error.message });
  }
};

// Delete a lesson
export const deleteLesson = async (req, res) => {
  try {
    const deletedLesson = await Lesson.findByIdAndDelete(req.params.id);
    if (!deletedLesson)
      return res.status(404).json({ error: "Lesson not found" });

    res.json({ message: "Lesson deleted successfully" });
  } catch (error) {
    res
      .status(500)
      .json({ error: "Failed to delete lesson", details: error.message });
  }
};
