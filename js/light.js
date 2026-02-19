const light = document.createElement('div');
light.style.position = 'fixed';
light.style.width = '600px';
light.style.height = '600px';
light.style.borderRadius = '50%';
light.style.pointerEvents = 'none';
light.style.background = 'radial-gradient(circle, rgba(120,160,255,0.25) 0%, transparent 70%)';
light.style.transform = 'translate(-50%, -50%)';
light.style.zIndex = '0';
light.style.transition = '0.1s';
document.body.appendChild(light);

document.addEventListener('mousemove', e => {
    light.style.left = e.clientX + 'px';
    light.style.top = e.clientY + 'px';
});