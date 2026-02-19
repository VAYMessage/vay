// Soft mouse light
const light = document.createElement('div');
light.className = 'light';
document.body.appendChild(light);

document.addEventListener('mousemove', e => {
  light.style.left = e.clientX + 'px';
  light.style.top = e.clientY + 'px';
});

// Auto theme switch
let themes = [
  "linear-gradient(135deg,#f0f4ff,#ffffff)",
  "linear-gradient(135deg,#e8f2ff,#fdfdfd)",
  "linear-gradient(135deg,#ffffff,#f3f6ff)"
];

let index = 0;

setInterval(()=>{
  index = (index + 1) % themes.length;
  document.body.style.background = themes[index];
},10000);