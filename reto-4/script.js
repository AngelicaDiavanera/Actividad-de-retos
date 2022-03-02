const box = document.getElementById('box');
const mensaje = document.getElementById('text');

box.addEventListener('mouseenter', mostrarMensaje1);
box.addEventListener('mouseleave', mostrarMensaje2);

function mostrarMensaje1() {
  mensaje.innerText = 'Estas dentro de la caja rosa';
}
function mostrarMensaje2() {
  mensaje.innerText = 'Estas fuera de la caja rosa';
}
