export function requireAuth(user) {
  if (!user) window.location.href = "/";
}

export function requireAdmin(isAdmin) {
  if (!isAdmin) window.location.href = "/403.html";
}