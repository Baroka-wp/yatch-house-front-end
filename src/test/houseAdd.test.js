import addHouse from '../../__mocks__/houseAdd';

describe('addHouse', () => {
  it('should add a house', () => {
    const myhouses = [];
    const houseName = 'house1';
    const location = 'location1';
    const price = 100;
    const result = addHouse(houseName, location, price, myhouses);
    expect(result).toEqual([{ name: houseName, location, price }]);
  });

  it('should add a house to others', () => {
    const myhouses = [];
    const houseName = 'house1';
    const location = 'location1';
    const price = 100;
    const result1 = addHouse(houseName, location, price, myhouses);
    const result2 = addHouse(houseName, location, price, result1);
    expect(result2.length).toEqual(2);
  });
});
