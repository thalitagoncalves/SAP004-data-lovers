import {sortByAZ, sortByZA, filterGender} from './data.js';
import data from './data/rickandmorty/rickandmorty.js';

function showCards(data) {
  document.getElementById('listening').innerHTML = data.map((item) => `
    <div class="card-container">
    <img src="${item.image}" class="card-image">
    <h3>Nome: ${item.name}</h3>
    <h3>Status: ${item.status}</h3>
    <h3>Gênero: ${item.gender}</h3>
  </div>
`)
}
showCards(data.results);

function printCharacterAZ() {
  return showCards(sortByAZ());
}

function printCharacterZA() {
  return showCards(sortByZA());
}

function printCharacterFiltered() {
  return showCards(filterGender())
}


document.getElementById("btn-order-az").addEventListener("click", printCharacterAZ);
document.getElementById("btn-order-za").addEventListener("click", printCharacterZA);
document.getElementById("select-gender").addEventListener("change", printCharacterFiltered)