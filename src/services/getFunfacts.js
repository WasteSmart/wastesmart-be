const db = require("../config/firestore")

async function getFunfacts() {
  try {
    const funfactsCollection = await db.collection("funfact").get();
    let funfacts;
    funfactsCollection.forEach((doc) => {
      funfacts = doc.data();
    });
    return funfacts;
  } catch (error) {
    console.error("Error getting documents", error);
  }
}

module.exports = getFunfacts;
