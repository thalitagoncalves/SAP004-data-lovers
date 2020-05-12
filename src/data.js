import data from './data/rickandmorty/rickandmorty.js';

export const alphabeticOrder = () => data.results.sort((a, z) => {
    if (a.name > z.name) {
        return 1;
    }
    if (a.name < z.name) {
        return -1;
    }
    return 0;
});

export const sortByAZ = () => alphabeticOrder().slice(0, 494);

export const sortByZA = () => sortByAZ().reverse();
  
export const filterData = (typeData, condition) => data.results.filter((character) => {
    return (character[typeData] === condition);
})

