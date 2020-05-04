import {sortByAZ} from './data.js';
import data from './data/rickandmorty/rickandmorty.js';

function myCards(data) {
  document.getElementById('listening').innerHTML = data.map((item) => `
    <div class="cards">
    <img src="${item.image}">
    <h3>Nome: ${item.name}</h3>
    <h3>Status: ${item.status}</h3>
    <h3>Gênero: ${item.gender}</h3>
  </div>
`)
}
myCards(data.results);

document.getElementById("btn-order-az").addEventListener("click", sortByAZ()); 
