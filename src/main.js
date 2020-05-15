import { sortByAZ, sortByZA, filterData } from './data.js';
import data from './data/rickandmorty/rickandmorty.js';

function showCards(data) {
  document.getElementById('listening').innerHTML = data.map((item) => `
  <div class="card">
    <div class="card-inner">
      <div class="card-front">
      <img src="${item.image}">
       <p><strong> Nome: ${item.name}</strong></p>
    </div> 
    <div class="card-back">
      <ul class="card__list">
        <li>Nome: <strong>${item.name}</strong></li>
        <li>Status: <strong>${item.status}</strong></li>
        <li>Espécie: <strong>${item.species}</strong></li>
        <li>Gênero: <strong>${item.gender}</strong></li>      
        <li>Localização: <strong>${item.location}</strong></li>
      </ul>
    </div>
  </div>
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
