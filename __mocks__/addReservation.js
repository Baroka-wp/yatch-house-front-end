export default function newReservation(houseId, startDate, endDate, myReservations, myhouses) {
  myReservations.push({
    house_id: houseId,
    houseName: myhouses[houseId].name,
    location: myhouses[houseId].location,
    price: myhouses[houseId].price * (endDate - startDate),
  });

  return myReservations;
}
