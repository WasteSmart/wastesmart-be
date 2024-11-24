const { Firestore } = require("@google-cloud/firestore");

async function getEncyclopedia() {
  try {
    const db = new Firestore({
      projectId: process.env.PROJECT_ID,
      keyFilename: process.env.PATH_SERVICE_KEY,
      databaseId: process.env.DATABASE_ID,
    });
    const encyclopediaCollection = await db.collection("encyclopedia").get();
    let encyclopedia;
    encyclopediaCollection.forEach((doc) => {
      encyclopedia = doc.data();
    });
    return encyclopedia;
  } catch (error) {
    console.error("Error getting documents", error);
  }
}

module.exports = getEncyclopedia;
