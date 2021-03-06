export const alphabeticOrder = (data) => data.sort((a,z) => a.name > z.name ? 1 : -1);

export const sortByAZ = (data) => alphabeticOrder(data).slice(0, 494);

export const sortByZA = (data) => sortByAZ(data).reverse();
  
export const filterData = (data,typeData, condition) => data.filter((character) => {
    return (character[typeData] === condition);
})
export const filterName = (data, search) => data.filter(character => {
    return character.name.toLowerCase().includes(search.toLowerCase());
})
export const computeStats = (data,typeData, condition) => data.reduce((initialType, totalType) => {
    return initialType + (totalType[typeData] === condition);
},0)

