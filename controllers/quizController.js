import _ from "lodash";
import asyncHandler from "express-async-handler";
import Quiz from "../models/quizModel";

const getQuizList = asyncHandler(async (req, res) => {
  const quizzes = await Quiz.find(
    {},
    "_id title totalTimeInMinutes totalScore totalQuestions quizImage"
  );

  res.status(200).json({
    success: true,
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
  const { id } = req.params;
  const quiz = await Quiz.findById(
    id,
    "_id title totalTimeInMinutes totalScore totalQuestions quizImage questionList"
  );
  res.status(200).json({
    success: true,
    quiz,
  });
});

export { getQuizList, getSingleQuizData, addNewQuiz };
