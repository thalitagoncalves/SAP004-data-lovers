import data from './data/rickandmorty/rickandmorty.js';

const alphabeticOrder = () => data.results.sort((a,z) => {
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

export function filterDataBy (typeData, kindFiltred) {
    data.results.filter(() => {
        return typeData === kindFiltred
    })
}

export const filters = {
    undefGender: () => data.results.filter(function(characterGender) {
        return (characterGender.gender === "unknown");
    }),
    genderMale: () => data.results.filter(function(characterGender) {
        return (characterGender.gender === "Male");
    }),
    genderFemale: () => data.results.filter(function(characterGender) {
        return (characterGender.gender === "Female");
    }),

    humanSpecie: () => data.results.filter(function(characterSpecie) {
        return (characterSpecie.species === "Human");
    }),
    humanoidSpecie: () => data.results.filter(function(characterSpecie) {
        return (characterSpecie.species === "Humanoide");
    }),
    alienSpecie: () => data.results.filter(function(characterSpecie) {
        return (characterSpecie.species === "Alien");
    }),
    animalSpecie: () => data.results.filter(function(characterSpecie) {
        return (characterSpecie.species === "Animal");
    }),
    statusUnknown: () => data.results.filter(function(characterStatus) {
        return (characterStatus.status === "unknown");
    }),
    statusAlive: () => data.results.filter(function(characterStatus) {
        return (characterStatus.status === "Alive");
    }),
    statusDead: () => data.results.filter(function(characterStatus) {
        return (characterStatus.status === "Dead");
    })
}
