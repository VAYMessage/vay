function register() {
  const u = username.value;
  const p = password.value;
  localStorage.setItem("vayUser", JSON.stringify({u, p}));
  alert("Registered");
}

function login() {
  const data = JSON.parse(localStorage.getItem("vayUser"));
  if (!data) return alert("No account");

  if (data.u === username.value && data.p === password.value) {
    location.href = "dashboard.html";
  } else {
    alert("Wrong credentials");
  }
}
