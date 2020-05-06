import data from './data/rickandmorty/rickandmorty.js';

 export const alphabeticOrder = () => data.results.sort((a,z) => {
     if (a.name > z.name) {
         return 1;
     }
     if (a.name < z.name) {
         return -1;
     }
     return 0;
 } );

 export function sortByAZ() {
     return alphabeticOrder().slice(0, 494);
 }

export function sortByZA() {
    return sortByAZ().reverse();
}