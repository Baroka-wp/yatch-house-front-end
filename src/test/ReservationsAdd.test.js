import newReservation from '../../__mocks__/addReservation';

describe('addHouse', () => {
    it('should add a new reservation', () => {
        const houses = [
            {
                name: 'house1',
                location: 'location1',
                price: 100,
            },
            {
                name: 'house2',
                location: 'location2',
                price: 200,
            },
        ];

        const reservations = [];

        const newReservations = newReservation(0, 1, 2, reservations, houses);

        expect(newReservations).toEqual([
            {
                houseName: 'house1',
                location: 'location1',
                price: 100,
                
            },
        ]);
    });
});