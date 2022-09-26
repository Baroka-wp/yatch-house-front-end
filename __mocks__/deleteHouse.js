export default function HouseDelete(houseId, myhouses, reservations) {
  const result = myhouses.filter((house) => house.id !== houseId);
  const result2 = reservations.filter((reservation) => reservation.houseId !== houseId);

  return { houses: result, reservations: result2 };
}
