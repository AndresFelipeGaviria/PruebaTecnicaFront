import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

// Cargar los componentes de manera perezosa (lazy loading)
const Login = lazy(() => import("../pages/Login"));
const Home = lazy(() => import("../pages/Home"));
const HotelManagement = lazy(() => import("../pages/HotelManagement"));
const Reservations = lazy(() => import("../pages/Reservations"));

const AppRouter = () => {
  return (
    <Router>
      {/* Suspense para manejar la carga de los componentes lazy */}
      <Suspense fallback={<div>Cargando...</div>}>
        <Routes>
          {/* Ruta por defecto: Si no está autenticado, va al login */}
          <Route path="/" element={<Navigate to="/login" />} />

          {/* Página de Login */}
          <Route path="/login" element={<Login />} />

          {/* Rutas protegidas (solo accesibles después de iniciar sesión) */}
          <Route path="/home" element={<Home />} />
          <Route path="/hotels" element={<HotelManagement />} />
          <Route path="/reservations" element={<Reservations />} />

          {/* Ruta 404: Redirigir a Home si la URL es incorrecta */}
          <Route path="*" element={<Navigate to="/home" />} />
        </Routes>
      </Suspense>
    </Router>
  );
};

export default AppRouter;