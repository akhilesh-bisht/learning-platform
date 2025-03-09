// config/db.js
import mongoose from "mongoose";
import dotenv from "dotenv";
import fs from "fs";
import path from "path";
import Lesson from "../models/Lesson.js"; // Make sure this model exists

dotenv.config();

const lessonData = JSON.parse(
  fs.readFileSync(path.resolve("lessons.json"), "utf-8")
);

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("✅ MongoDB Connected");
  } catch (error) {
    console.error("❌ DB Connection Error:", error);
    process.exit(1);
  }
};

// Function to seed lessons
const seedLessons = async () => {
  try {
    await connectDB();
    await Lesson.deleteMany(); // Clear existing data
    await Lesson.insertMany(lessonData); // Insert new data
    console.log("🎉 Lessons added successfully!");
    process.exit();
  } catch (error) {
    console.error("❌ Error inserting lessons:", error);
    process.exit(1);
  }
};

// Run seeding if file is executed
if (process.argv.includes("--seed")) {
  seedLessons();
}

export default connectDB;
