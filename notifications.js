import { messaging, db } from "./firebase.js";
import {
  getToken,
  onMessage
} from "https://www.gstatic.com/firebasejs/10.12.0/firebase-messaging.js";

import {
  doc,
  updateDoc,
  addDoc,
  collection,
  increment
} from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

export async function initPush(user) {
  if (user.dnd) return;

  const permission = await Notification.requestPermission();
  if (permission !== "granted") return;

  const token = await getToken(messaging, {
    vapidKey: "YOUR_VAPID_KEY"
  });

  await updateDoc(doc(db, "users", user.uid), {
    pushToken: token
  });
}

export function listenForegroundNotifications(user, callback) {
  onMessage(messaging, async (payload) => {
    await addDoc(collection(db, "users", user.uid, "notifications"), {
      title: payload.notification.title,
      body: payload.notification.body,
      createdAt: Date.now(),
      read: false
    });

    await updateDoc(doc(db, "users", user.uid), {
      unreadCount: increment(1)
    });

    callback(payload);
  });
}

export async function markAllAsRead(user) {
  await updateDoc(doc(db, "users", user.uid), {
    unreadCount: 0
  });
}