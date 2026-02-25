import { db } from "../core/firebase.js";
import { collection, query, where, onSnapshot } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

export function updateBadge(uid) {
  const badge = document.getElementById("badge");

  const q = query(
    collection(db, "notifications"),
    where("to", "==", uid),
    where("read", "==", false)
  );

  onSnapshot(q, snap => {
    const count = snap.size;

    if (count > 0) {
      badge.innerText = count;
      badge.classList.remove("hidden");
    } else {
      badge.classList.add("hidden");
    }
  });
}