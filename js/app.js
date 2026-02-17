function getStatus(service) {
    return localStorage.getItem("vay_service_" + service) || "online";
}

function setStatusUI(service) {
    const status = getStatus(service);
    const el = document.getElementById("status-" + service);

    if (status === "online") {
        el.innerText = "● Online";
        el.style.color = "#4cff4c";
    }
    else if (status === "maintenance") {
        el.innerText = "● Maintenance";
        el.style.color = "#ffaa00";
    }
    else if (status === "ddos") {
        el.innerText = "● DDoS Scan";
        el.style.color = "#00cfff";
    }
    else {
        el.innerText = "● Offline";
        el.style.color = "#ff4c4c";
    }
}

function openService(service) {
    const status = getStatus(service);

    if (status === "online") {
        alert("Сервис запущен: " + service);
    } else {
        window.location.href = "service-offline.html?type=" + status;
    }
}

window.onload = function() {
    setStatusUI("cloud");
    setStatusUI("messenger");
    setStatusUI("store");
}
