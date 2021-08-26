import _ from "lodash";
import asyncHandler from "express-async-handler";
import { Quiz } from "../models/quizModel.js";

const getAllQuizzes = asyncHandler(async (req, res) => {
  const quizzes = await Quiz.find({}).select("-__v -createdAt -updatedAt");

  res.status(200).json({
    success: true,
    message: "Quizzes retrieved successfully",
    quizzes,
  });
});

const addNewQuiz = asyncHandler(async (req, res) => {
  let { quiz } = req.body;
  let newQuiz = new Quiz(quiz);
  newQuiz = await newQuiz.save();
  res.status(200).json({
    success: true,
    quiz: newQuiz,
  });
});

const getSingleQuizData = asyncHandler(async (req, res) => {
  const { _id } = req.params;
  const quiz = await Quiz.findById(_id).select("-__v -createdAt -updatedAt");
  res.status(200).json({
    success: true,
    message: "Quiz retrieved successfully",
    quiz,
  });
});

export { getAllQuizzes, getSingleQuizData, addNewQuiz };
