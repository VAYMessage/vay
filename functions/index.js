const functions = require("firebase-functions");
const admin = require("firebase-admin");

admin.initializeApp();

exports.sendNotificationByRole = functions.https.onCall(async (data, context) => {

  if (!context.auth) {
    throw new functions.https.HttpsError("unauthenticated");
  }

  if (context.auth.token.role !== "admin") {
    throw new functions.https.HttpsError("permission-denied");
  }

  const role = data.role;
  const message = data.message;

  const snapshot = await admin.firestore()
    .collection("users")
    .where("role", "==", role)
    .get();

  const tokens = snapshot.docs
    .map(doc => doc.data().pushToken)
    .filter(Boolean);

  if (!tokens.length) return { success: false };

  await admin.messaging().sendEachForMulticast({
    tokens,
    notification: {
      title: "VAY ID",
      body: message
    }
  });

  return { success: true };
});