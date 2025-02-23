import { create } from 'zustand';
import { CreateHotel, HotelResponse } from '../types/Hotel';
import { Hotel, Room, UpdateHotel } from '../types';
import HotelServices from '../services/hotelsManagement.service';
import RoomService from '../services/room.service';


type HotelStore = {
  hotels: HotelResponse[] | null;
  loading: boolean;
  error: string | null;
  addHotel: (hotel: Omit<Hotel, 'hotelId' | 'rooms'>) => void;
  getHotels: () => void;
  updateHotel: (id: string, updatedHotel: UpdateHotel) => void;
  toggleHotelStatus: (id: string) => void;
  addRoom: (hotelId: string, room: Omit<Room, 'roomId'>) => void;
  updateRoom: (roomId: string, updatedRoom: Omit<Room, 'roomId'>) => void;
  toggleRoomStatus: (hotelId: string, roomId: string) => void;
};

const useHotelStore = create<HotelStore>((set) => ({
    hotels: [],
    loading: false,
    error: null,

  addHotel: async(hotel) =>{
    try{
        await HotelServices.createHotel(hotel);
        set({ loading: false, error: null });
    }catch(err) {
        console.error(err);
        set({ loading: false, error: "Erro en el servicio" });
    }
  },
   
  getHotels: async() =>{
    set({ hotels: null, loading: false, error: null });
    try{
       const hotels = await HotelServices.getHotels();
        set({ hotels, loading: false, error: null });
    }catch(err) {
        console.error(err);
        set({ loading: false, error: "Erro en el servicio" });
    }
  },

  updateHotel: async(id, updatedHotel) =>{
    console.log(id, updatedHotel);
    try{
         await HotelServices.updatedHotelId(id, updatedHotel);
         set({loading: false, error: null });
     }catch(err) {
         console.error(err);
         set({ loading: false, error: "Erro en el servicio" });
     }
  },
 
  toggleHotelStatus: (id) =>{},
    

  addRoom: async(hotelId, room) =>{
    console.log(hotelId, room);
    try{
         await RoomService.createRoom(hotelId, room);
         set({loading: false, error: null });
     }catch(err) {
         console.error(err);
         set({ loading: false, error: "Erro en el servicio" });
     }
  },
    

  updateRoom: async(roomId, updatedRoom) =>{
    console.log(roomId, updatedRoom);
    try{
         await RoomService.updatedRoomId(roomId, updatedRoom);
         set({loading: false, error: null });
     }catch(err) {
         console.error(err);
         set({ loading: false, error: "Erro en el servicio" });
     }
  },
   
  toggleRoomStatus: (hotelId, roomId) =>{},
   
}));

export default useHotelStore;