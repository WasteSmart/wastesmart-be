const express = require("express");
const funfacts = express.Router();
const getFunfacts = require("../services/getFunfacts");

funfacts.get("/funfacts", async (req, res) => {
  try {
    const funfacts = await getFunfacts();
    const result = {
      success: true,
      funfacts: funfacts.fun_facts,
    };
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ success: false, message: "Failed to fetch data" });
  }
});

module.exports = funfacts;
