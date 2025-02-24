import { create } from 'zustand';
import { HotelResponse } from '../types/Hotel';
import Reservations from '../services/reservation.service';
import { ReservationRequest, SearchHotels } from '../types';
import {  ReservationResponse } from '../types/reservation';

type UserStore = {
  reservations: ReservationResponse[] | null;
  loading: boolean;
  error: string | null;
  getReservations: () => Promise<void>; 

};

const useReservationStore = create<UserStore>((set) => ({
  reservations: null,
  filteredHotels: null,
  loading: false,
  error: null,

  getReservations: async () => {
    set({ loading: true, error: null });
    try {
     
      const reservations = await Reservations.getAllReservations();

      set({ reservations, loading: false, error: null });
    } catch (err) {
      console.error(err);
      set({ loading: false, error: "Error al buscar hoteles" });
    }
  },

 
}));

export default useReservationStore;