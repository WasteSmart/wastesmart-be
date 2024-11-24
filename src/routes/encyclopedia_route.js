const express = require("express");
const encyclopedia = express.Router();
const getEncyclopedia = require("../services/getEncyclopedia");

encyclopedia.get("/encyclopedia", async (req, res) => {
  try {
    const encyclopedia = await getEncyclopedia();
    const result = {
      success: true,
      waste: { general_description: encyclopedia.general_description, image_url: encyclopedia.image_url },
    };
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ success: false, message: "Failed to fetch data" });
  }
});

encyclopedia.get("/encyclopedia/organik", async (req, res) => {
  try {
    const encyclopedia = await getEncyclopedia();
    const result = {
      success: true,
      type_of_waste: encyclopedia.type_of_waste[0],
    };
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ success: false, message: "Failed to fetch data" });
  }
});

encyclopedia.get("/encyclopedia/anorganik", async (req, res) => {
  try {
    const encyclopedia = await getEncyclopedia();
    const result = {
      success: true,
      type_of_waste: encyclopedia.type_of_waste[1],
    };
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ success: false, message: "Failed to fetch data" });
  }
});

encyclopedia.get("/encyclopedia/b3", async (req, res) => {
  try {
    const encyclopedia = await getEncyclopedia();
    const result = {
      success: true,
      type_of_waste: encyclopedia.type_of_waste[2],
    };
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ success: false, message: "Failed to fetch data" });
  }
});

module.exports = encyclopedia;
