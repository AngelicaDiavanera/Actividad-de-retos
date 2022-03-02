const itemsColor = document.getElementById('items-color');

function enListarItems() {
  for (let i = 0; i < 100; i++) {
    const li = document.createElement('li'); //<li></li>
    li.innerHTML = `item ${i + 1}`; // <li>item 1</li>
    itemsColor.appendChild(li); // <ul> <li>item 1</li> </ul>
    li.style.background = 'gray';
    itemsColor.addEventListener('click', addColorItems);
  }
}

function addColorItems(event) {
  if (event.target.style.background == 'gray') {
    const random = Math.floor(Math.random() * 3);
    if (random == 0) {
      event.target.style.background = 'blue';
    } else if (random == 1) {
      event.target.style.background = 'red';
    } else if (random == 2) {
      event.target.style.background = 'yellow';
    }
  } else {
    event.target.style.background = 'gray';
  }
}
enListarItems();
