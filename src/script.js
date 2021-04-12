const box = document.querySelector('#box');
const circle = document.querySelector('#circle');

circle.style.height = `${window.innerHeight}px`;
circle.style.width = `${window.innerHeight}px`;

let rot = 0;

document.addEventListener('mousemove', event => {
  const change = Math.abs(event.movementX) + Math.abs(event.movementY);
  rot += (change*.1);
  if (rot >= 360) {
    rot = 0;
  }
  box.style.background = `linear-gradient(${rot+180}deg, #f0f, #6fb)`;
  circle.style.background = `linear-gradient(${-rot}deg, #6fb, #f0f)`;
});
