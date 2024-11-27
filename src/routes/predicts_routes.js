const express = require("express");
const predicts = express.Router();
const upload = require("../config/upload");
const getModel = require("../services/getModel");
const processImageToTensor4D = require("../config/processImage");

predicts.post("/predicts", upload.single("image"), async (req, res) => {
  if (!req.file) {
    return res.status(400).send("No file uploaded.");
  }
  try {
    const model = await getModel();
    const tensor4D = await processImageToTensor4D(req.file.buffer);

    const prediction = model.predict(tensor4D);
    const result = prediction.dataSync();
    const classCategory = ["battery", "biological", "cardboard", "clothes", "glass", "metal", "paper", "plastic", "shoes"];

    let indexedArr = Array.from(result, (value, index) => ({ value, index }));
    indexedArr.sort((a, b) => b.value - a.value);
    let top3Predictions = indexedArr.slice(0, 3).map((item) => item.index);

    const data = [];
    for (let i = 0; i < top3Predictions.length; i++) {
      const element = top3Predictions[i];
      data.push({ id: i + 1, name: classCategory[element], percentage: Math.round(result[element] * 100) });
    }
    const finalResult = {
      success: true,
      result: data,
    };
    res.status(200).json(finalResult);
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Failed to predict" });
  }
});
module.exports = predicts;
