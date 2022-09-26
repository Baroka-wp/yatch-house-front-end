import HouseDelete from '../../__mocks__/deleteHouse';

describe('HouseDelete', () => {
    it('should delete a house', () => {
        const myhouses = [{ id: 1, name: 'house1', location: 'location1', price: 100 }];
        const house_id = 1;
        const result = HouseDelete(house_id, myhouses);
        expect(result).toEqual([]);
    }
    );

    it('should delete a specific house', () => {
        let myhouses = [
            { id: 1, name: 'house1', location: 'location1', price: 100 },
            { id: 2, name: 'house2', location: 'location2', price: 200 }];
        const house_id = 1;
        const result = HouseDelete(house_id, myhouses);
        expect(result.length).toEqual(1);
    }
    );
});