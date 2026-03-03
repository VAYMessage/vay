function toggleNotifications() {
  const panel = document.getElementById("notifications");
  panel.classList.toggle("hidden");

  panel.innerHTML = 
    <div>🚀 Добро пожаловать в VAY</div>
    <div>🎵 Радио активно</div>
  ;
}
