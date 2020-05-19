import {sortByAZ, sortByZA, filterData, filterName} from '../src/data.js';
import {Rick, Morty, Summer, personagens} from '../src/api.js';

describe('Sort objects in alphabetic order', () => {
  it('should be a function', () => {
    expect(typeof sortByAZ).toBe('function');
  });

  it('returns objects in alphabetic order`', () => {
    expect(sortByAZ(personagens)).toEqual([Morty, Rick, Summer]);
  }) 
});

describe('Sort objects in reverse alphabetic order', () => {
  it('should be a function', () => {
    expect(typeof sortByZA).toBe('function');
  });

  it('returns words in reverse alphabetic order', () => {
    expect(sortByZA([Morty, Rick, Summer])).toEqual([Summer, Rick, Morty]);
  })
});

describe('Filter objects as chosen by the conditions of buttons', () => {
  it('should be a function', () => {
    expect(typeof filterData).toBe('function');
  })
});

it('returns objects in type of data that it was chosen', () => {
  expect(filterData(personagens,"gender", "Female")).toEqual([Summer]);
});

describe('Filter characters by name', () => {
  it('should be a function', () => {
    expect(typeof filterName).toBe('function')
  });

  it('returns character by searched name', () => {
    expect(filterName(personagens, "name", "Rick Sanchez")).toEqual([Rick]);
  })
})