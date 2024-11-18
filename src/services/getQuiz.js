const { Firestore } = require("@google-cloud/firestore");

async function getQuiz() {
    try {
        const db = new Firestore({ databaseId: "wastesmart-db" });
        const quizCollection = await db.collection('quiz').get();
        const quiz = [];
        quizCollection.forEach(doc => {
            quiz.push(doc.data());
        });
        return quiz;
    } catch (error) {
        console.error('Error getting documents', error);
        throw error;
    }
}

module.exports = getQuiz;