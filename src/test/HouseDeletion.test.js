import HouseDelete from '../../__mocks__/deleteHouse';

describe('HouseDelete', () => {
  it('should delete a house', () => {
    const myhouses = [{
      id: 1, name: 'house1', location: 'location1', price: 100,
    }];
    const houseId = 1;
    const reservations = [
      {
        id: 1, houseId: 1, name: 'house1', location: 'location1', price: 100,
      },
      {
        id: 2, houseId: 2, name: 'house2', location: 'location2', price: 200,
      }];
    const result = HouseDelete(houseId, myhouses, reservations);
    expect(result.houses).toEqual([]);
  });

  it('should delete a specific house', () => {
    const myhouses = [
      {
        id: 1, name: 'house1', location: 'location1', price: 100,
      },
      {
        id: 2, name: 'house2', location: 'location2', price: 200,
      }];
    const houseId = 1;
    const reservations = [
      {
        id: 1, houseId: 1, name: 'house1', location: 'location1', price: 100,
      },
      {
        id: 2, houseId: 2, name: 'house2', location: 'location2', price: 200,
      }];
    const result = HouseDelete(houseId, myhouses, reservations);
    expect(result.houses.length).toEqual(1);
  });

  it('should delete a all related reservations ', () => {
    const myhouses = [
      {
        id: 1, name: 'house1', location: 'location1', price: 100,
      },
      {
        id: 2, name: 'house2', location: 'location2', price: 200,
      }];
    const houseId = 1;

    const reservations = [
      {
        id: 1, houseId: 1, name: 'house1', location: 'location1', price: 100,
      },
      {
        id: 2, houseId: 2, name: 'house2', location: 'location2', price: 200,
      }];
    const result = HouseDelete(houseId, myhouses, reservations);
    expect(result.reservations.length).toEqual(1);
  });
});
