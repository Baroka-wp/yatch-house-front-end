export default function ReservationsDelete(reservation_id,myReservations) {
    currentReservations= myReservations.filter((reservation) => {
         reservation.id !== reservation_id;
    })

    return currentReservations;
} 