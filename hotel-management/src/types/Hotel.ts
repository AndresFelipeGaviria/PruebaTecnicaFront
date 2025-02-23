import { Room } from ".";

export interface HotelResponse {
    hotelId:      string;
    name:         string;
    address:      string;
    isActive:     boolean;
    createdAt:    string;
    updatedAt:    null | string;
    rooms:        any[];
    reservations: any[];
}

export interface CreateHotel{
    name:     string;
    address:  string;
    isActive: boolean;
}