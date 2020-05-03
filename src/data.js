// import data from './data/rickandmorty/rickandmorty.js';

export const sortByAZ = (data) => {data.sort((a,z) => {
    if (a.name > z.name) {
        return 1;
    }else{
        return -1;
    }
})
}

/* export const sortByZA = () => {data.results.sort((a,z) => {
    if (a.name < z.name) {
        return 1;
    } if (a.name > z.name) {
        return -1;
    }
    return 0
})
} */