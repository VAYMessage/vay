// Мягкий свет без лишней драмы
const light = document.createElement("div");
light.style.position = "fixed";
light.style.width = "400px";
light.style.height = "400px";
light.style.borderRadius = "50%";
light.style.pointerEvents = "none";
light.style.background = "radial-gradient(circle, rgba(0,0,0,0.04), transparent 70%)";
light.style.mixBlendMode = "multiply";
document.body.appendChild(light);

document.addEventListener("mousemove", e => {
  light.style.left = e.clientX - 200 + "px";
  light.style.top = e.clientY - 200 + "px";
});