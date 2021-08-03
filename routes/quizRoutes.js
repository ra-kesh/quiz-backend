import express from "express";
import {
  getQuizList,
  getSingleQuizData,
  addNewQuiz,
} from "../controllers/quizController";

const router = express.Router;

router.route("/").get(getQuizList).post(addNewQuiz);

router.route("/:id").get(getSingleQuizData);

export default router;
