const botonActivador = document.getElementById('boton-activador');

const selectBoxColor = document.getElementById('select-box-color');
const box = document.getElementById('box');

selectBoxColor.addEventListener('change', selectColorBox);
botonActivador.addEventListener('click', activadorBoton);

function selectColorBox(event) {
  box.style.background = event.target.value;
}
function activadorBoton() {
  if (selectBoxColor.disabled == true) {
    selectBoxColor.disabled = false;
    botonActivador.innerText = 'Deshabilitar';
  } else if (selectBoxColor.disabled == false) {
    selectBoxColor.disabled = true;
    botonActivador.innerText = 'Habilitar';
  }
}
selectBoxColor.disabled = true;
