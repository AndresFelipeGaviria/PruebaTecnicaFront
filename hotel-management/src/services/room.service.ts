import api from "./api";
import { API_SERVICES } from "../utils/constants";
import { Hotel, UpdateHotel } from "../types";
import { CreateHotel } from '../types/Hotel';
import { Room } from '../types/index';


const createRoom = async (hotelId: string, room: Omit<Room, 'roomId'>): Promise<any> => {
    try {
      const  data  = await api.post(API_SERVICES.ROOMS.CREATE_ROOM(hotelId), room );
      return data.data ;
    } catch (error) {
      throw error;
    }
}

const updatedRoomId = async (roomId: string, room: Omit<Room, 'roomId'>): Promise<any> => {
    try {
      const  data  = await api.put(API_SERVICES.ROOMS.UPDATE_ROOM(roomId), room );
      return data.data ;
    } catch (error) {
      throw error;
    }
}

const getHotels = async (): Promise<any> => {
      const  data  = await api.get(API_SERVICES.HOTELS.GET_HOTELS);
      return data.data ; 
}


  export default {
    createRoom,
    updatedRoomId,
    getHotels
  }