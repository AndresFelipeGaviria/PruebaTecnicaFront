import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import useAuthStore from "../store/authStore";
import ProtectedRoute from "./ProtectedRoute";

// Cargar los componentes de manera perezosa (lazy loading)
const Login = lazy(() => import("../pages/Login"));
const Home = lazy(() => import("../pages/Home"));
const HotelManagement = lazy(() => import("../pages/HotelManagement"));
const Reservations = lazy(() => import("../pages/Reservations"));

const AppRouter = () => {
  const { token } = useAuthStore();
  return (
    <Router>
      <Suspense fallback={<div>Cargando...</div>}>
        <Routes>
          <Route path="/" element={<Navigate to="/hotels" />} />
          <Route path="/hotels" element={<HotelManagement />} />
          <Route
            path="/login"
            element={token ? <Navigate to="/hotels" /> : <Login />}
          />

          {/* Rutas protegidas */}
          <Route
            path="/home"
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />
          {/* <Route
            path="/reservations"
            element={
              <ProtectedRoute>
                <Reservations />
              </ProtectedRoute>
            }
          /> */}

          {/* Ruta 404: Redirigir a /hotels */}
          <Route path="*" element={<Navigate to="/hotels" />} />
        </Routes>
      </Suspense>
    </Router>
  );
};

export default AppRouter;