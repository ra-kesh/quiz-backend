import mongoose from "mongoose";
import { Quizzes } from "../db/quizData.js";

const OptionSchema = mongoose.Schema({
  optionName: {
    type: String,
    trim: true,
    required: [true, "option cannot be empty"],
  },
  isCorrect: {
    type: Boolean,
    required: [true, "isCorrect field cannot be empty"],
  },
});

const QuestionSchema = mongoose.Schema({
  questionName: {
    type: String,
    trim: true,
    required: [true, "Question field cannot be empty"],
  },
  options: [OptionSchema],
  image: {
    type: String,
  },
});

const QuizSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please provide a name for the quiz"],
    },
    questions: [QuestionSchema],
  },
  {
    timeStamps: true,
  }
);

const Quiz = mongoose.model("Quiz", QuizSchema);

function fillQuizCollection() {
  try {
    Quizzes.forEach(async (quiz) => {
      const newQuiz = new Quiz(quiz);
      const savedQuiz = await newQuiz.save();
      console.log(savedQuiz);
    });
  } catch (error) {
    console.log(error);
  }
}

export { Quiz, fillQuizCollection };
