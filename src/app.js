require("dotenv").config();
const express = require("express");
const app = express();
const quiz = require("./routes/quiz_route");
const funfacts = require("./routes/funfacts_route");
const tips = require("./routes/tips_route")

app.get("/", (req, res) => {
  res.send("API is running");
});
app.use(quiz);
app.use(funfacts);
app.use(tips)

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
