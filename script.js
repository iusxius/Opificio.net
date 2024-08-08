// script.js
const backgroundLayers = document.querySelectorAll('.background-layer');

backgroundLayers.forEach(layer => {
    layer.addEventListener('animationiteration', () => {
        const clone = layer.cloneNode(true);
        layer.parentNode.appendChild(clone);
        setTimeout(() => {
            layer.remove();
        }, 1000);  // adjust timing based on the animation duration
    });
});
