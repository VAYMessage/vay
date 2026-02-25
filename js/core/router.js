export function checkAccess(user, roleRequired) {
  if (!user) {
    window.location.href = "/403.html";
  }

  if (roleRequired && user.role !== roleRequired) {
    window.location.href = "/403.html";
  }
}