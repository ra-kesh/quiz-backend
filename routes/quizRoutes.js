import express from "express";
import {
  getAllQuizzes,
  getSingleQuizData,
} from "../controllers/quizController.js";

const router = express.Router();

router.get("/", getAllQuizzes);

router.get("/:_id", getSingleQuizData);

export default router;
