import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <Navbar />
      <hr />
      <main className="container">
        <h1>Página de Inicio</h1>
        <p>
          Bienvenido a nuestro hotel. Explora nuestras habitaciones y servicios.
        </p>
      </main>
      <hr />
      <Footer />
    </>
  );
};

export default Home;
