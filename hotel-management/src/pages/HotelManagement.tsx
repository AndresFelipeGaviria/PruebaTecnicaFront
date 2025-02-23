import { useState, useEffect } from 'react';
import useHotelStore from '../store/hotelStore';
import HotelForm from '../components/HotelForm';
import HotelCard from '../components/HotelCard';
import RoomForm from '../components/RoomForm';
import { CreateHotel, HotelResponse } from '../types/Hotel';
import { Hotel, Room, UpdateHotel } from '../types';


const HotelManagement = () => {
  const { hotels, addHotel, updateHotel, toggleHotelStatus, addRoom, updateRoom, toggleRoomStatus, getHotels } =
    useHotelStore();
  const [isHotelModalOpen, setIsHotelModalOpen] = useState(false);
  const [isRoomModalOpen, setIsRoomModalOpen] = useState(false);
  const [selectedHotel, setSelectedHotel] = useState<Hotel | undefined>(undefined);
  const [selectedRoom, setSelectedRoom] = useState<Room | null>(null);

  const handleCreateHotel = (hotel: Omit<Hotel, 'hotelId' | 'rooms'>) => {
    try {
      addHotel(hotel);
      setIsHotelModalOpen(false);
      getHotels();
    }catch(err){
      console.error(err);
    }
  };

  const handleUpdateHotel = (id: string, updatedHotel: UpdateHotel) => {
    try {
      updateHotel(id, updatedHotel);
      setSelectedHotel(undefined);
      setIsHotelModalOpen(false);
      setTimeout(() => {
      getHotels();
      }, 800);
    }catch(err){
      console.error(err);
    }
    
  };

  const handleAddRoom = (hotelId: string, room: Omit<Room,'roomId'>) => {
    addRoom(hotelId, room);
    setIsRoomModalOpen(false);
  };

  const handleUpdateRoom = (roomId: string, updatedRoom: Omit<Room, 'roomId'>) => {
    try {
      console.log(roomId, updatedRoom);
      updateRoom(roomId, updatedRoom);
      setSelectedRoom(null);
      setIsRoomModalOpen(false);
      setTimeout(() => {
        getHotels();
        }, 800);
    }catch(err){
      console.error(err); 
    } 

  };

  useEffect(() => {
    getHotels();
  },[])

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Gestión de Hoteles</h1>

        <button
          onClick={() => {
            setSelectedHotel(undefined);
            setIsHotelModalOpen(true);
          }}
          className="mb-6 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition duration-200"
        >
          Crear Nuevo Hotel
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          { hotels?.length && hotels?.map((hotel) => (
            <HotelCard
              key={hotel.hotelId}
              hotel={hotel}
              onEdit={() => {
                setSelectedHotel(hotel);
                setIsHotelModalOpen(true);
              }}
              onToggleStatus={() => toggleHotelStatus(hotel.hotelId)}
              onAddRoom={() => {
                setSelectedHotel(hotel);
                setIsRoomModalOpen(true);
              }}
              onEditRoom={(room) => {
                setSelectedHotel(hotel);
                setSelectedRoom(room);
                setIsRoomModalOpen(true);
              }}
              onToggleRoomStatus={(roomId) => toggleRoomStatus(hotel.hotelId, roomId)}
            />
          ))}
        </div>

        {isHotelModalOpen && (
          <HotelForm
            initialData={ selectedHotel ?? undefined }
            onSubmit={(hotel) => {
              if (selectedHotel) {
                handleUpdateHotel(selectedHotel.hotelId, hotel);
              } else {
                handleCreateHotel(hotel);
              }
            }}
            onClose={() => setIsHotelModalOpen(false)}
          />
        )}

        {isRoomModalOpen && selectedHotel && (
          <RoomForm
            initialData={selectedRoom ?? undefined}
            onSubmit={(room) => {
              if (selectedRoom) {
                handleUpdateRoom( room.roomId, room);
              } else {
                handleAddRoom(selectedHotel.hotelId, room);
              }
            }}
            onClose={() => setIsRoomModalOpen(false)}
          />
        )}
      </div>
    </div>
  );
};

export default HotelManagement;