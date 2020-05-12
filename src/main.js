import {sortByAZ, sortByZA, filterData} from './data.js';
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

let selectGender = document.querySelector(".select-gender");
let selectSpecies = document.querySelector(".select-species");
let selectStatus = document.querySelector(".select-status"); 

function printGenderFiltered() {
  return showCards(filterData("gender", selectGender.value));
}

function printSpeciesFiltered() {
  return showCards(filterData("species", selectSpecies.value));
}

function printStatusFiltered() {
  return showCards(filterData("status", selectStatus.value))
}

document.getElementById("btn-order-az").addEventListener("click", printCharacterAZ);
document.getElementById("btn-order-za").addEventListener("click", printCharacterZA);
selectGender.addEventListener("change", printGenderFiltered);
selectSpecies.addEventListener("change", printSpeciesFiltered);
selectStatus.addEventListener("change", printStatusFiltered);