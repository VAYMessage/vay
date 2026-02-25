import { db } from "../core/firebase.js";
import {
  collection,
  query,
  where,
  orderBy,
  onSnapshot,
  updateDoc,
  doc
} from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

let opened = false;

export function toggleNotificationCenter() {
  const center = document.getElementById("notificationCenter");
  opened = !opened;
  center.style.display = opened ? "flex" : "none";
}

export function initNotificationCenter(user) {
  const center = document.getElementById("notificationCenter");

  const q = query(
    collection(db, "notifications"),
    where("to", "==", user.uid),
    orderBy("createdAt", "desc")
  );

  onSnapshot(q, snap => {
    center.innerHTML = "";

    snap.forEach(docSnap => {
      const data = docSnap.data();

      const div = document.createElement("div");
      div.className = "notification";
      div.innerHTML = `<strong>${data.title}</strong><br>${data.body}`;

      div.onclick = async () => {
        await updateDoc(doc(db, "notifications", docSnap.id), {
          read: true
        });
      };

      center.appendChild(div);
    });
  });
}