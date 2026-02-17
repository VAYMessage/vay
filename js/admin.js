const ADMIN_LOGIN = "ADMIN";
const ADMIN_PASSWORD = "123zxc567vbn";

function loginAdmin() {
    const login = document.getElementById("adminLogin").value;
    const password = document.getElementById("adminPassword").value;
    const error = document.getElementById("loginError");

    if (login === ADMIN_LOGIN && password === ADMIN_PASSWORD) {
        localStorage.setItem("vay_admin", "true");
        document.getElementById("loginBox").classList.add("hidden");
        document.getElementById("adminPanel").classList.remove("hidden");
    } else {
        error.innerText = "Неверный логин или пароль";
    }
}

function logoutAdmin() {
    localStorage.removeItem("vay_admin");
    location.reload();
}

function updateService(service, status) {
    localStorage.setItem("vay_service_" + service, status);
    alert("Статус обновлен: " + service + " → " + status);
}

window.onload = function() {
    if (localStorage.getItem("vay_admin") === "true") {
        document.getElementById("loginBox").classList.add("hidden");
        document.getElementById("adminPanel").classList.remove("hidden");
    }
}
