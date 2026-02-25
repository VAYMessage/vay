import { messaging, db } from "../core/firebase.js";
import { getToken, onMessage } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-messaging.js";
import { doc, setDoc } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

export async function initPush(user) {
  try {
    const token = await getToken(messaging, {
      vapidKey: "YOUR_PUBLIC_VAPID_KEY"
    });

    await setDoc(doc(db, "users", user.uid), {
      fcmToken: token
    }, { merge: true });

  } catch (e) {
    console.log("Push error:", e);
  }

  onMessage(messaging, payload => {
    console.log("Foreground push:", payload);
  });
}