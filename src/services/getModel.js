const tf = require("@tensorflow/tfjs-node");

async function getModel() {
  try {
    return await tf.loadLayersModel("https://storage.googleapis.com/wastesmart-storage/model/model.json");
  } catch (error) {
    console.error("Error load model", error);
  }
}
module.exports = getModel;
