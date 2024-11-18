const express = require("express");
const app = express();
const port = 8080;
const getQuiz = require("./services/getQuiz");

// Quiz
app.get('/quiz', async (req, res) => {
    try {
        const quiz = await getQuiz();
        const result = {
            message: "success",
            quiz: quiz
        } 
        res.status(200).json(result);       
    } catch (error) {
        res.status(error.code).statusMessage(error.message);
    }
});

// Fun Fact
app.get('/funfact', (req, res) => {
    res.send('Fun Fact');
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});