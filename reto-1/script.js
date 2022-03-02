const selectBox = document.getElementById('select-one');
const selectColorLetter = document.getElementById('select-two');
const box = document.getElementById('box');

selectBox.addEventListener('change', selectColorBox);
selectColorLetter.addEventListener('change', colorLetter);

function selectColorBox(event) {
  box.style.background = event.target.value;
}
function colorLetter(event) {
  box.style.color = event.target.value;
}
