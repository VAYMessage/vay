import { auth, db } from "./firebase.js";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";

import {
  doc,
  setDoc,
  getDoc,
  updateDoc
} from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

export async function register(email, password, name) {
  const cred = await createUserWithEmailAndPassword(auth, email, password);

  await setDoc(doc(db, "users", cred.user.uid), {
    name,
    email,
    role: "user",
    notificationsEnabled: true,
    dnd: false,
    unreadCount: 0,
    createdAt: Date.now()
  });
}

export async function login(email, password) {
  await signInWithEmailAndPassword(auth, email, password);
}

export function logout() {
  return signOut(auth);
}

export function listenAuth(callback) {
  onAuthStateChanged(auth, async (user) => {
    if (!user) return callback(null);
    const snap = await getDoc(doc(db, "users", user.uid));
    callback({ uid: user.uid, ...snap.data() });
  });
}