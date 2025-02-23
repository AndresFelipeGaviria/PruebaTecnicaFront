export const API_SERVICES = {
    AUTH: {
        LOGIN: '/auth/login',
        REGISTER: '/auth/register',
    },
    HOTELS: {
        GET_HOTELS: '/hotel/all',
        GET_HOTEL: '/hotel/:id',
        CREATE_HOTEL: '/hotel',
        UPDATE_HOTEL: (id: string) =>  `/hotel/${id}`,
        DELETE_HOTEL: '/hotel/:id',
    },
    ROOMS: {
        GET_HOTELS: '/hotel/all',
        GET_HOTEL: '/hotel/:id',
        CREATE_ROOM: (idHotel: string) => `/room/${idHotel}`,
        UPDATE_ROOM: (idRoom: string) =>  `/room/${idRoom}`,
        DELETE_HOTEL: '/hotel/:id',
    }
}