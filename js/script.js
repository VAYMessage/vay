/* ========= LIGHT FOLLOW ========= */

const light = document.getElementById("light");

document.addEventListener("mousemove", e => {
  light.style.transform = `translate(${e.clientX - 250}px, ${e.clientY - 250}px)`;
});

/* ========= AUTO THEME SWITCH ========= */

const themes = ["", "dark", "ultraclean"];
let current = 0;

function switchTheme(){
  current = (current + 1) % themes.length;
  document.body.className = "page " + themes[current];
}

/* ========= AUTO SYSTEM THEME ========= */

if(window.matchMedia("(prefers-color-scheme: dark)").matches){
  document.body.classList.add("dark");
}