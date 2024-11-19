const express = require("express");
const quiz = express.Router();
const getQuiz = require("../services/getQuiz");

quiz.get("/quiz", async (req, res) => {
  try {
    const quiz = await getQuiz();
    const result = {
      success: true,
      quiz: quiz,
    };
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ success: false, message: "Failed to fetch data" });
  }
});
module.exports = quiz;
