const { Firestore } = require("@google-cloud/firestore");

async function getFunfacts() {
  try {
    const db = new Firestore({
      projectId: process.env.PROJECT_ID,
      keyFilename: process.env.SERVICE_KEY,
      databaseId: process.env.DATABASE_ID,
    });
    const funfactsCollection = await db.collection("funfact").get();
    let funfacts;
    funfactsCollection.forEach((doc) => {
      funfacts = doc.data();
    });
    return funfacts;
  } catch (error) {
    console.error("Error getting documents", error);
    throw error;
  }
}

module.exports = getFunfacts;
