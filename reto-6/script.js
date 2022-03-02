const fullNameInput = document.getElementById('full-name-input');
const emailInput = document.getElementById('email-input');
const fullName = document.getElementById('full-name');
const email = document.getElementById('email');
const selectAvatar = document.getElementById('select-avatar');
const box = document.getElementById('box');

selectAvatar.addEventListener('change', selectAvatarImgen);

function selectAvatarImgen(event) {
  box.style.backgroundImage = `url('${event.target.value}')`;
}

fullNameInput.addEventListener('input', mostrarNombre);

function mostrarNombre() {
  fullName.innerText = fullNameInput.value;
}

emailInput.addEventListener('input', mostrarEmail);

function mostrarEmail() {
  email.innerText = emailInput.value;
}
