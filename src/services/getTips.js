const db = require("../config/firestore")

async function getTips() {
  try {
    const tipsCollection = await db.collection("tips").get();
    let tips;
    tipsCollection.forEach((doc) => {
      tips = doc.data();
    });
    return tips;
  } catch (error) {
    console.error("Error getting documents", error);
  }
}

module.exports = getTips;
