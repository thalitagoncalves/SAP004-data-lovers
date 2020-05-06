import {sortByAZ, sortByZA} from './data.js';
import data from './data/rickandmorty/rickandmorty.js';

function myCards(data) {
  document.getElementById('listening').innerHTML = data.map((item) => `
    <div class="card-container">
    <img src="${item.image}" class="card-image">
    <h3>Nome: ${item.name}</h3>
    <h3>Status: ${item.status}</h3>
    <h3>Gênero: ${item.gender}</h3>
  </div>
`)
}
myCards(data.results);

function printCharacterAZ() {
  const orderAZ = sortByAZ()
  return myCards(orderAZ);
}

function printCharacterZA() {
  const orderZA = sortByZA()
  return myCards(orderZA)
}

document.getElementById("btn-order-az").addEventListener("click", printCharacterAZ);
document.getElementById("btn-order-za").addEventListener("click", printCharacterZA);

