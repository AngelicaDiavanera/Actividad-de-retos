const buttonOne = document.getElementById('button-one');
const buttonTwo = document.getElementById('button-two');
const buttonThree = document.getElementById('button-three');
const buttonFour = document.getElementById('button-four');

const box1 = document.getElementById('box-1');
const box2 = document.getElementById('box-2');
const box3 = document.getElementById('box-3');
const box4 = document.getElementById('box-4');

buttonOne.addEventListener('click', colorBox1);
buttonTwo.addEventListener('click', colorBox2);
buttonThree.addEventListener('click', colorBox3);
buttonFour.addEventListener('click', colorBox4);

function colorBox1(event) {
  box1.style.background = event.target.value;
}
function colorBox2(event) {
  box2.style.background = event.target.value;
}
function colorBox3(event) {
  box3.style.background = event.target.value;
}
function colorBox4(event) {
  box4.style.background = event.target.value;
}
