import { httpsCallable } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-functions.js";
import { functions } from "./firebase.js";

export async function sendByRole(role, message) {
  const fn = httpsCallable(functions, "sendNotificationByRole");
  return await fn({ role, message });
}