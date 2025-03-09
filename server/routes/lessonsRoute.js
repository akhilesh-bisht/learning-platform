import express from "express";
import rateLimit from "express-rate-limit";
import { body } from "express-validator";
import {
  getAllLessons,
  getLessonById,
  createLesson,
  addQuizToLesson,
  updateLesson,
  deleteLesson,
} from "../controllers/lessonController.js";

const router = express.Router();

// Rate limiting middleware
const apiLimiter = rateLimit({ windowMs: 15 * 60 * 1000, max: 100 });
router.use(apiLimiter);

// Validation middleware
const validateLesson = [
  body("title").notEmpty().trim().withMessage("Title is required"),
  body("description").notEmpty().trim().withMessage("Description is required"),
  body("subject").notEmpty().trim().withMessage("Subject is required"),
  body("grade").isNumeric().withMessage("Grade must be a number"),
  body("videoUrl").isURL().withMessage("Valid video URL is required"),
  body("content").notEmpty().withMessage("Content is required"),
];

const validateQuiz = [
  body("question").notEmpty().trim().withMessage("Question is required"),
  body("options")
    .isArray({ min: 2 })
    .withMessage("At least 2 options are required"),
  body("correctAnswer").notEmpty().withMessage("Correct answer is required"),
];

// Define routes
router.get("/", getAllLessons);
router.get("/:id", getLessonById);
router.post("/", validateLesson, createLesson);
router.post("/:id/quiz", validateQuiz, addQuizToLesson);
router.put("/:id", validateLesson, updateLesson);
router.delete("/:id", deleteLesson);

export default router;
