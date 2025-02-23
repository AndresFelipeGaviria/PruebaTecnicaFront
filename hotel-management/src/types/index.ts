'typescript'

export interface Hotel {
    hotelId:      string;
    name:         string;
    address:      string;
    isActive:     boolean;
    rooms: Room[];
  }
  

export interface Room {
  roomId:      string;
  roomType:    string; // Ejemplo: "Single", "Double", "Suite"
  baseCost:    number;
  taxes:       number;
  isAvailable: boolean;
  location:    string;
}

export interface Reservation{
  id: string;
  roomId: string;
  guestName: string;
  checkIn: string;
  checkOut: string;
};

export type UpdateHotel = Partial<Omit<Hotel, "hotelId" | "rooms">>;
