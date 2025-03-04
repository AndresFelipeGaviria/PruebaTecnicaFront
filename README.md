                                                  Plataforma de Gestión de Hoteles y Reservas

Este proyecto es una plataforma para la gestión de hoteles y reservas, diseñada para que los administradores gestionen hoteles y habitaciones, y los usuarios realicen reservas. Está construida con React, TypeScript, Zustand para la gestión del estado, y Tailwind CSS para el diseño.

Características Principales
Para Administradores
Gestión de Hoteles:

Crear, editar.

Habilitar o deshabilitar hoteles.

Gestión de Habitaciones:

Agregar, editar.

Habilitar o deshabilitar habitaciones.

Visualización de Reservas:

Ver todas las reservas realizadas en los hoteles.

Para Usuarios
Búsqueda de Hoteles:

Filtrar hoteles por ciudad, fechas y número de huéspedes.

Reserva de Habitaciones:

Seleccionar una habitación y realizar una reserva.

Ingresar información del viajero y contacto de emergencia.

Visualización de Reservas:

Ver las reservas realizadas.

Tecnologías Utilizadas
Frontend:

React

TypeScript

Zustand (gestión del estado)

Tailwind CSS (diseño)

React Router (enrutamiento)

Backend:

(Creado en .Net C#, base de Datos: MySql)

Instalación y Configuración
Sigue estos pasos para configurar el proyecto en tu entorno local.

Requisitos Previos
Node.js (v16 o superior)

npm o yarn

Pasos
Clonar el Repositorio:

bash
Copy
git clone https://github.com/AndresFelipeGaviria/PruebaTecnicaFront.git
cd tu-repositorio
Instalar Dependencias:

bash
Copy
npm install
# o
yarn install
Configurar Variables de Entorno:

Crea un archivo .env en la raíz del proyecto.

La variable de entorno es local por ahora:
en el archivo .env

Iniciar la Aplicación:

bash
Copy
npm start
# o
yarn start
Abrir en el Navegador:

La aplicación estará disponible en http://localhost:3000.

Estructura del Proyecto
Copy
src/
├── components/       # Componentes reutilizables
├── pages/            # Páginas de la aplicación
├── store/            # Zustand stores para la gestión del estado
├── services/         # Servicios para llamadas a la API
├── types/            # Interfaces y tipos TypeScript
├── App.tsx           # Componente principal de la aplicación
├── index.tsx         # Punto de entrada de la aplicación
└── ...
Ejemplos de Uso
Búsqueda de Hoteles
Ingresa a la página de búsqueda.

Filtra hoteles por ciudad, fechas y número de huéspedes.

Selecciona un hotel y una habitación disponible.

Realizar una Reserva
Completa el formulario de reserva con la información del viajero y el contacto de emergencia.

Confirma la reserva.

Ver Reservas
Accede a la sección de reservas.

Visualiza todas las reservas realizadas.
