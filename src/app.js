require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const encyclopedia = require("./routes/encyclopedia_route");
const quiz = require("./routes/quiz_route");
const funfacts = require("./routes/funfacts_route");
const tips = require("./routes/tips_route");
const predicts = require("./routes/predicts_routes");

app.use(cors());
app.get("/", (req, res) => {
  res.send("API is running");
});
app.use(predicts);
app.use(encyclopedia);
app.use(quiz);
app.use(funfacts);
app.use(tips);

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
