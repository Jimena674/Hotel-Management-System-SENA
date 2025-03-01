import React from "react";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <>
      <Navbar />
      <main className="container">
        <h1>Página de Inicio</h1>
        <p>
          Bienvenido a nuestro hotel. Explora nuestras habitaciones y servicios.
        </p>
      </main>
    </>
  );
};

export default Home;
