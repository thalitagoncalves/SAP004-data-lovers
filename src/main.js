import {sortByAZ, sortByZA, filterData, filterName, computeStats} from './data.js';
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
        <li>Localização: <strong>${item.location.name}</strong></li>
      </ul>
    </div>
  </div>
</div>  
`)
}
showCards(data.results);

const selectGender = document.querySelector(".select-gender");
const selectSpecies = document.querySelector(".select-species");
const selectStatus = document.querySelector(".select-status"); 
const searchName = document.getElementById("typed-text");


function printCharacterAZ() {
  return showCards(sortByAZ(data.results));
}
function printCharacterZA() {
  return showCards(sortByZA(data.results));
}

function printGenderFiltered() {
  document.getElementById("show-calculation").innerHTML = `O número de personagens dessa categoria é ${computeStats(data.results, "gender", selectGender.value)}`
  return showCards(filterData(data.results, "gender", selectGender.value));
}

function printSpeciesFiltered() {
  document.getElementById("show-calculation").innerHTML = `O número de personagens dessa categoria é ${computeStats(data.results, "species", selectSpecies.value)}`
  return showCards(filterData(data.results, "species", selectSpecies.value));
}

function printStatusFiltered() {
  document.getElementById("show-calculation").innerHTML = `O número de personagens dessa categoria é ${computeStats(data.results, "status", selectStatus.value)}`
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