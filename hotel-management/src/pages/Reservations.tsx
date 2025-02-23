import { Reservation } from '../types';

type ReservationListProps = {
  reservations: Reservation[];
};

const ReservationList = ({ reservations }: ReservationListProps) => {
  return (
    <div className="mt-4">
      <h3 className="text-lg font-semibold text-gray-800 mb-2">Reservas</h3>
      {reservations?.length === 0 ? (
        <p className="text-gray-600">No hay reservas registradas.</p>
      ) : (
        <div className="space-y-2">
          {reservations?.map((reservation) => (
            <div key={reservation.id} className="p-2 border border-gray-200 rounded-lg">
              <p className="text-gray-700">
                <strong>Habitación:</strong> {reservation.roomId}
              </p>
              <p className="text-gray-700">
                <strong>Huésped:</strong> {reservation.guestName}
              </p>
              <p className="text-gray-700">
                <strong>Check-In:</strong> {reservation.checkIn}
              </p>
              <p className="text-gray-700">
                <strong>Check-Out:</strong> {reservation.checkOut}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ReservationList;