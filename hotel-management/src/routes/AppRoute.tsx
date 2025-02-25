import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import useAuthStore from "../store/authStore";
import ProtectedRoute from "./ProtectedRoute";


const Login = lazy(() => import("../pages/Login"));
const HotelSearch = lazy(() => import("../pages/HotelSearch"));
const HotelManagement = lazy(() => import("../pages/HotelManagement"));
const Reservations = lazy(() => import("../pages/Reservations"));
const HotelDetails = lazy(() => import("../pages/HotelDetails"));
const ReservationForm = lazy(() => import("../pages/ReservationForm"));
const Home = lazy(() => import("../pages/Home"));


const AppRouter = () => {
  const { token } = useAuthStore();
  return (
    <Router>
      <Suspense fallback={<div>Cargando...</div>}>
        <Routes>

          <Route path="/" element={<HotelSearch />} />

          <Route
            path="/home"
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />
           <Route
            path="/hotels"
            element={
              <ProtectedRoute>
                <HotelManagement />
              </ProtectedRoute>
            }
          />
          <Route
            path="/reservations"
            element={
              <ProtectedRoute>
                <Reservations />
              </ProtectedRoute>
            }
          />

          {/* Rutas públicas */}
          <Route path="/login" element={token ? <Navigate to="/hotels" /> : <Login />} />
          <Route path="/hotels/:id" element={<HotelDetails />} />
          <Route path="/reservations/:hotelId/:roomId" element={<ReservationForm />} />

          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Suspense>
    </Router>
  );
};

export default AppRouter;