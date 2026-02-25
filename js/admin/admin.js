import { db } from "../core/firebase.js";
import {
  collection,
  addDoc,
  getDocs,
  query,
  where,
  serverTimestamp
} from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

export async function sendByRole(role, title, body) {
  try {
    const q = query(collection(db, "users"), where("role", "==", role));
    const snap = await getDocs(q);

    const promises = [];

    snap.forEach(userDoc => {
      promises.push(
        addDoc(collection(db, "notifications"), {
          to: userDoc.id,
          title,
          body,
          read: false,
          createdAt: serverTimestamp()
        })
      );
    });

    await Promise.all(promises);
    return true;
  } catch (e) {
    console.error(e);
    return false;
  }
}