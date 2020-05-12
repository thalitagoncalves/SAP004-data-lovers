import {sortByAZ, sortByZA, filters} from './data.js';
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
  if (selectGender.value === "undefined") {
    return showCards(filters.undefGender());
  } else if (selectGender.value === "male") {
    return showCards(filters.genderMale());
  } else if (selectGender.value === "female") {
    return showCards(filters.genderFemale());
  }
}

function printSpeciesFiltered() {
  if (selectSpecies.value === "human") {
    return showCards(filters.humanSpecie());
  } else if (selectSpecies.value === "humanoide") {
    return showCards(filters.humanoidSpecie());
  } else if (selectSpecies.value === "alien") {
    return showCards(filters.alienSpecie());
  } else if (selectSpecies.value === "animal") {
    return showCards(filters.animalSpecie);
  }
}

function printStatusFiltered() {
  if (selectStatus.value === "undefined") {
    return showCards(filters.statusUnknown());
  } else if (selectStatus.value === "alive") {
    return showCards(filters.statusAlive());
  } else if (selectStatus.value === "dead") {
    return showCards(filters.statusDead());
  }
}

document.getElementById("btn-order-az").addEventListener("click", printCharacterAZ);
document.getElementById("btn-order-za").addEventListener("click", printCharacterZA);
selectGender.addEventListener("change", printGenderFiltered);
selectSpecies.addEventListener("change", printSpeciesFiltered);
selectStatus.addEventListener("change", printStatusFiltered);