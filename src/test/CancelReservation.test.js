import ReservationsDelete from '../../__mocks__/deleteReservation';

describe('ReservationsDelete', () => {
  it('should delete a reservation', () => {
    const reservations = [{
      id: 1, name: 'house1', location: 'location1', price: 100,
    }];
    const reservationId = 1;
    const result = ReservationsDelete(reservationId, reservations);
    expect(result).toEqual([]);
  });
});
