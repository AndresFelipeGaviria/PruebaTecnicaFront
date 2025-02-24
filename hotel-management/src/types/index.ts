'typescript'

export interface Hotel {
    hotelId:      string;
    name:         string;
    address:      string;
    isActive:     boolean;
    city:         string;
    rooms: Room[];
  }
  

export interface Room {
  roomId:      string;
  roomType:    string; // Ejemplo: "Single", "Double", "Suite"
  baseCost:    number;
  taxes:       number;
  isAvailable: boolean;
  location:    string;
  capacity:    number;
}


export interface Reservation {
  id: string;
  hotelId: string;
  roomId: string;
  guests: Guest[];
  emergencyContact: EmergencyContact;
  checkIn: string;
  checkOut: string;
}

export interface Guest {
  firstName: string;
  lastName: string;
  birthDate: string; // Formato ISO
  gender: string;
  documentType: string;
  documentNumber: string;
}

export interface EmergencyContact {
  name: string;
  phone: string;
}

export interface SearchHotels {
  checkIn?: string;
  checkOut?: string;
  guests?: number;
  city?: string;
}

export interface ReservationRequest {
  hotelId: string;
  roomId: string;
  checkInDate: string; 
  checkOutDate: string;
  totalGuests: number;
  traveler: {
    fullName: string;
    email: string; 
    documentType: string; 
    documentNumber: string; 
    phoneNumber: string; 
  };
  emergencyContact: {
    fullName: string;
    phone: string;
  };
  guests: Guest[];
}

export type UpdateHotel = Partial<Omit<Hotel, "hotelId" | "rooms">>;
