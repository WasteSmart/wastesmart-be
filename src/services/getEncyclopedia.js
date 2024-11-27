const db = require("../config/firestore")

async function getEncyclopedia() {
  try {
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
