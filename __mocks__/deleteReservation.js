export default function ReservationsDelete(reservationId, myReservations) {
  const currentReservations = myReservations.filter(
    (reservation) => reservation.id !== reservationId,
  );
  return currentReservations;
}
