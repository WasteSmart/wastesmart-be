const { Firestore } = require("@google-cloud/firestore");

async function getTips() {
  try {
    const db = new Firestore({
      projectId: process.env.PROJECT_ID,
      keyFilename: process.env.PATH_SERVICE_KEY,
      databaseId: process.env.DATABASE_ID,
    });
    const tipsCollection = await db.collection("tips").get();
    let tips;
    tipsCollection.forEach((doc) => {
      tips = doc.data();
    });
    return tips;
  } catch (error) {
    console.error("Error getting documents", error);
    throw error;
  }
}

module.exports = getTips;
