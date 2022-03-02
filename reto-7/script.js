const rangeButton = document.getElementById('range-button');
const message = document.getElementById('text');

rangeButton.addEventListener('mousemove', rangeButtonTemperature);

function rangeButtonTemperature(event) {
  if (rangeButton.value <= 10) {
    message.innerText = `('${rangeButton.value + '°' + 'Hace mucho frio.'}')`;
  } else if (rangeButton.value <= 26) {
    message.innerText = `('${
      rangeButton.value + '°' + 'La temperatura es normal.'
    }')`;
  } else if (rangeButton.value >= 26) {
    message.innerText = `('${rangeButton.value + '°' + 'Hace mucho calor.'}')`;
  }
}
