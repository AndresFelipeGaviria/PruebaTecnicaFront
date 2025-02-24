import { useState } from "react";
import useHotelStore from "../store/hotelStore";
import { Link } from "react-router-dom";
import useUserStore from '../store/userStore';


const HotelSearch = () => {
    const {  loading, error, searchHotels, filteredHotels } = useUserStore();

  const { hotels } = useHotelStore();
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guests, setGuests] = useState(1);
  const [city, setCity] = useState("");


  const handleSearch = () => {
    searchHotels({ 
        checkIn: checkIn ?? null, 
        checkOut: checkOut ?? null, 
        guests: guests ?? null,
        city: city ?? null 
    }); 
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Buscar Hoteles</h1>
    <div className="grid grid-cols-1 md:grid-cols-5 gap-2 mb-6">
      <div className="flex flex-col mb-4">
        <label className="block text-sm font-medium text-gray-700">Fecha Entrada</label>
        <input
            type="date"
            value={checkIn}
            onChange={(e) => setCheckIn(e.target.value)}
            className="p-2 border border-gray-300 rounded-lg w-full"
            placeholder="Fecha de entrada"
        />
      </div>  
      <div className="flex flex-col mb-4">
        <label className="block text-sm font-medium text-gray-700">Fecha salida</label>
        <input
            type="date"
            value={checkOut}
            onChange={(e) => setCheckOut(e.target.value)}
            className="p-2 border border-gray-300 rounded-lg w-full"
            placeholder="Fecha de salida"
        />
      </div>  
      <div className="flex flex-col mb-4">
        <label className="block text-sm font-medium text-gray-700">Cantidad personas</label>
        <input
            type="number"
            value={guests}
            onChange={(e) => setGuests(Number(e.target.value))}
            className="p-2 border border-gray-300 rounded-lg w-full"
            placeholder="Cantidad de personas"
            />
      </div>
      <div className="flex flex-col mb-4">
        <label className="block text-sm font-medium text-gray-700">Ciudad</label>
        <input
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            className="p-2 border border-gray-300 rounded-lg w-full"
            placeholder="Ciudad"
        />
      </div>
      <div className="flex flex-col mb-4 justify-end">
        <button
            onClick={handleSearch}
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg"
            >
            Buscar
        </button>
      </div>
    </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {filteredHotels?.map((hotel) => (
          <div key={hotel.hotelId} className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-xl font-semibold text-gray-800">{hotel.name}</h2>
            <p className="text-gray-600 mt-2">{hotel.address}</p>
            <Link
              to={`/hotels/${hotel.hotelId}`}
              className="mt-4 inline-block bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg"
            >
              Ver Habitaciones
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};


export default HotelSearch;