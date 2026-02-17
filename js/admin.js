// === AUTH LOGOUT ===
function logout() {
    sessionStorage.removeItem("vay_admin_auth");
    window.location.href = "login.html";
}

// === LOG SYSTEM ===
function addLog(text) {
    const container = document.getElementById("logContainer");
    const entry = document.createElement("div");
    entry.className = "log-entry";
    entry.innerText = new Date().toLocaleTimeString() + " — " + text;
    container.prepend(entry);
}

// === GLOBAL STATUS ===
function setGlobalStatus(status) {
    localStorage.setItem("vay_global_status", status);
    addLog("Global status → " + status.toUpperCase());
}

// === SERVICE STATUS ===
function updateService(service, status) {
    localStorage.setItem("vay_service_" + service, status);
    addLog(service.toUpperCase() + " → " + status.toUpperCase());
}

// === EMERGENCY ===
function emergencyShutdown() {
    localStorage.setItem("vay_service_cloud", "offline");
    localStorage.setItem("vay_service_id", "offline");
    localStorage.setItem("vay_global_status", "critical");
    addLog("!!! EMERGENCY SHUTDOWN ACTIVATED !!!");
    alert("All systems set to OFFLINE");
}

// === LOAD CHART ===
const ctx = document.getElementById("loadChart").getContext("2d");

let loadData = [30, 40, 35, 50, 45, 55, 60];

const chart = new Chart(ctx, {
    type: "line",
    data: {
        labels: ["1m","2m","3m","4m","5m","6m","7m"],
        datasets: [{
            label: "Load %",
            data: loadData,
            tension: 0.4,
            fill: true
        }]
    },
    options: {
        responsive: true,
        plugins: { legend: { display: false } },
        scales: { y: { min: 0, max: 100 } }
    }
});

setInterval(() => {
    loadData.shift();
    loadData.push(Math.floor(Math.random() * 60) + 20);
    chart.update();
}, 3000);
