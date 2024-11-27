const db = require("../config/firestore")

async function getQuiz() {
  try {
    const quizCollection = await db.collection("quiz").get();
    const quiz = [];
    quizCollection.forEach((doc) => {
      quiz.push(doc.data());
    });
    return quiz;
  } catch (error) {
    console.error("Error getting documents", error);
  }
}

module.exports = getQuiz;
