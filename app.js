import { listenAuth } from "./auth.js";
import { initPush, listenForegroundNotifications } from "./notifications.js";

listenAuth((user) => {
  if (!user) return;

  initPush(user);

  listenForegroundNotifications(user, (payload) => {
    showNotificationUI(payload.notification.title, payload.notification.body);
  });

  updateBadge(user.unreadCount);
});

function updateBadge(count) {
  const badge = document.getElementById("liveBadge");
  if (!badge) return;
  badge.innerText = count || "";
}

function showNotificationUI(title, body) {
  const container = document.getElementById("notificationStack");

  const el = document.createElement("div");
  el.className = "notification";
  el.innerHTML = `
    <div class="title">${title}</div>
    <div class="body">${body}</div>
  `;

  el.addEventListener("click", () => el.remove());

  container.prepend(el);
}