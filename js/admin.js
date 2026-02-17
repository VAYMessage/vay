function changeStatus(service, status) {
    localStorage.setItem("vay_service_" + service, status);
    addLog(service + " → " + status.toUpperCase());
}

function emergencyShutdown() {
    const services = ["cloud", "messenger", "store"];
    services.forEach(service => {
        localStorage.setItem("vay_service_" + service, "offline");
        addLog(service + " → OFFLINE (EMERGENCY)");
    });

    alert("Все сервисы переведены в OFFLINE");
}

function addLog(text) {
    const logList = document.getElementById("log-list");
    const li = document.createElement("li");
    li.innerText = new Date().toLocaleTimeString() + " | " + text;
    logList.prepend(li);
}
