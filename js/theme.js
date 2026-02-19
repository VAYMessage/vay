const themes = ['#ffffff', '#eef3ff', '#f8f9fb'];
let index = 0;

setInterval(()=>{
    document.body.style.background = themes[index];
    index = (index + 1) % themes.length;
}, 15000);