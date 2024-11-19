const { Firestore } = require("@google-cloud/firestore");

async function getQuiz() {
  try {
    const db = new Firestore({
      projectId: process.env.PROJECT_ID,
      keyFilename: process.env.PATH_SERVICE_KEY,
      databaseId: process.env.DATABASE_ID,
    });
    const quizCollection = await db.collection("quiz").get();
    const quiz = [];
    quizCollection.forEach((doc) => {
      quiz.push(doc.data());
    });
    return quiz;
  } catch (error) {
    console.error("Error getting documents", error);
    throw error;
  }
}

module.exports = getQuiz;
