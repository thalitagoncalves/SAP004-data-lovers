//import functions from './data.js';
import data from './data/rickandmorty/rickandmorty.js';

document.getElementById('listening').innerHTML = data.results.map((item) => `
  <div class="cards">
    <img src="${item.image}">
    <h3>Nome: ${item.name}</h3>
    <h3>Status: ${item.status}</h3>
    <h3>Gênero: ${item.gender}</h3>
  </div>
`)