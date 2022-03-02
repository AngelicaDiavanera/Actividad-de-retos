const menuSelectPokemon = document.getElementById('menu-select-pokemon');
const box = document.getElementById('box');

menuSelectPokemon.addEventListener('change', selectPokemonBox);
function selectPokemonBox(event) {
  box.style.backgroundImage = `url('${event.target.value}')`;
}
