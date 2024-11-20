const express = require("express");
const tips = express.Router();
const getTips = require("../services/getTips");

tips.get("/tips", async (req, res) => {
  try {
    const tips = await getTips();
    const result = {
      success: true,
      tips
    };
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ success: false, message: "Failed to fetch data" });
  }
});

module.exports = tips;
