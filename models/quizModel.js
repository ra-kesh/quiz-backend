import mongoose from "mongoose";

const optionSchema = mongoose.Schema({
  text: {
    type: String,
    trim: true,
    required: "option text is required",
  },
  isRight: {
    type: Boolean,
    required: "Right or not need to declared",
  },
});

const questionSchema = mongoose.Schema({
  text: {
    type: String,
    trim: true,
    required: "Question text is needed",
  },
  positiveMarks: {
    type: Number,
    required: "Positive mark is needed",
  },
  negativeMarks: {
    type: Number,
    required: "Negative mark is needed",
  },
  timeInSeconds: {
    type: Number,
    required: "Time required in Seconds",
  },
  questionImage: {
    type: String,
    required: "question Image required",
  },
  optionList: [optionSchema],
});

const QuizSchema = mongoose.Schema(
  {
    title: {
      type: String,
      trim: true,
      required: "Title is required",
    },
    totalTimeInMinutes: {
      type: String,
      trim: true,
      required: "Total time is required",
    },
    totalScore: {
      type: Number,
      required: "Total time is required",
    },
    totalQuestions: {
      type: Number,
      required: "Total no. of Questions is required",
    },
    quizImage: {
      type: String,
      trim: true,
      required: "Image is required",
    },
    questionList: [questionSchema],
  },
  {
    timeStamps: true,
  }
);

const Quiz = mongoose.model("Quiz", QuizSchema);

export default Quiz;
