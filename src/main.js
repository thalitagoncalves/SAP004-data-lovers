import {sortByAZ, sortByZA, filterData, filterName} from './data.js';
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

let selectGender = document.querySelector(".select-gender");
let selectSpecies = document.querySelector(".select-species");
let selectStatus = document.querySelector(".select-status"); 
let searchName = document.getElementById("typed-text");

function printCharacterAZ() {
  return showCards(sortByAZ(data.results));
}
function printCharacterZA() {
  return showCards(sortByZA(data.results));
}

function printGenderFiltered() {
  return showCards(filterData(data.results, "gender", selectGender.value));
}

function printSpeciesFiltered() {
  return showCards(filterData(data.results, "species", selectSpecies.value));
}

function printStatusFiltered() {
  return showCards(filterData(data.results, "status", selectStatus.value))
}

function filterByName() {
  return showCards(filterName(data.results, searchName.value));
}

document.getElementById("btn-order-az").addEventListener("click", printCharacterAZ);
document.getElementById("btn-order-za").addEventListener("click", printCharacterZA);
selectGender.addEventListener("change", printGenderFiltered);
selectSpecies.addEventListener("change", printSpeciesFiltered);
selectStatus.addEventListener("change", printStatusFiltered);
searchName.addEventListener("keypress", filterByName);
searchName.addEventListener("keydown", event => {
  if (event.keyCode === 8) {
    return showCards(data.results);
  }
})