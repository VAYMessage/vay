import { auth } from "./firebase.js";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut
} from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";

export async function login() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (e) {
    document.getElementById("error").innerText = e.message;
  }
}

export async function register() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  try {
    await createUserWithEmailAndPassword(auth, email, password);
  } catch (e) {
    document.getElementById("error").innerText = e.message;
  }
}

export function listenAuth(callback) {
  onAuthStateChanged(auth, user => callback(user));
}

export function logout() {
  signOut(auth);
}