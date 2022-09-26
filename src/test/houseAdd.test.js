import addHouse from '../../__mocks__/houseAdd';

describe('addHouse', () => {
    it('should add a house', () => {
        const myhouses = [];
        const houseName = 'house1';
        const location = 'location1';
        const price = 100;
        const result = addHouse(houseName, location, price, myhouses);
        expect(result).toEqual([{name:houseName, location:location, price:price}]);
    });



    
    });