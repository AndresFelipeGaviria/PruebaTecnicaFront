import api from "./api";
import { API_SERVICES } from "../utils/constants";
import { Hotel, UpdateHotel } from "../types";


const createHotel = async (hotel: Omit<Hotel, 'hotelId' | 'rooms'>): Promise<any> => {
    try {
      const  data  = await api.post(API_SERVICES.HOTELS.CREATE_HOTEL, hotel );
      return data.data ;
    } catch (error) {
      throw error;
    }
}

const updatedHotelId = async (hotelId: string, hotel: UpdateHotel): Promise<any> => {
    try {
      const  data  = await api.patch(API_SERVICES.HOTELS.UPDATE_HOTEL(hotelId),  hotel );
      return data.data ;
    } catch (error) {
      throw error;
    }
}

const getHotels = async (): Promise<any> => {
      const  data  = await api.get(API_SERVICES.HOTELS.GET_HOTELS);
      return data.data ; 
}

const getHotelById = async (id: string): Promise<any> => {
  const  data  = await api.get(API_SERVICES.HOTELS.GET_HOTEL(id));
  return data.data ; 
}


  export default {
    createHotel,
    updatedHotelId,
    getHotels,
    getHotelById
  }