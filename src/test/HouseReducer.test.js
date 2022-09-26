import houseReducer from '../redux/house/houseReducer';

describe('houseReducer', () => {
  it('should return the initial state', () => {
    expect(houseReducer(undefined, {})).toEqual([]);
  });
  it('should handle GET_ALL_ITEMS', () => {
    expect(
      houseReducer([], {
        type: 'GET_ALL_ITEMS',
        payload: [{ id: 1, name: 'House 1' }],
      }),
    ).toEqual([{ id: 1, name: 'House 1' }]);
  });
  it('should handle DELETE_HOUSE', () => {
    expect(
      houseReducer([{ id: 1, name: 'House 1' }], {
        type: 'DELETE_HOUSE',
        payload: 1,
      }),
    ).toEqual([]);
  });
});
