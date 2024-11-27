const tf = require("@tensorflow/tfjs-node");
const sharp = require("sharp");

function processImageToTensor4D(imageBuffer) {
  return sharp(imageBuffer)
    .resize(224, 224)
    .toFormat("jpg")
    .toBuffer()
    .then((buffer) => {
      const tensor = tf.node.decodeImage(buffer, 3);
      const tensor4D = tf.expandDims(tensor, 0);
      return tensor4D;
    });
}

module.exports = processImageToTensor4D;
