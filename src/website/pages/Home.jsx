import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import BookingForm from "../components/BookingForm";
import CardITPB from "../components/CardITPB";
import TitleHome from "../components/TitleHome";
import CardITB from "../components/CardITB";

const Home = () => {
  return (
    <>
      <Navbar />
      <hr />
      <BookingForm />
      <main className="container mt-3">
        <img
          src="/images/hotel-standret.jpg"
          className="img-fluid"
          alt="Foto del hotel Teshuva"
          style={{ height: "600px", width: "100%", objectFit: "cover" }}
        />
        <hr />
        <TitleHome title="Hotel Teshuva" />
        <hr />
        <section className="container p-0">
          <div className="row gx-4">
            <div className="col">
              <CardITPB
                image="/images/foto-pasillos.jpeg"
                title="Hotel Teshuvá"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas a volutpat leo, a laoreet eros. Nulla purus est, euismod ornare tempor vel, lacinia quis mauris."
              />
            </div>
            <div className="col">
              <CardITPB
                image="/images/foto-patio.jpeg"
                title="Hotel Teshuvá"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas a volutpat leo, a laoreet eros. Nulla purus est, euismod ornare tempor vel, lacinia quis mauris."
              />
            </div>
            <div className="col">
              <CardITPB
                image="/images/ingreso-hab-1.jpeg"
                title="Hotel Teshuvá"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas a volutpat leo, a laoreet eros. Nulla purus est, euismod ornare tempor vel, lacinia quis mauris."
              />
            </div>
            <div className="col">
              <CardITPB
                image="/images/ingreso-hab-2.jpeg"
                title="Hotel Teshuvá"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas a volutpat leo, a laoreet eros. Nulla purus est, euismod ornare tempor vel, lacinia quis mauris."
              />
            </div>
          </div>
        </section>
        <hr />
        <TitleHome title="Habitaciones" />
        <hr />
        <section className="container p-0">
          <div className="row gx-4">
            <div className="col">
              <CardITB
                image="/public/images/hab-cama-doble-1.jpeg"
                title="Habitación Doble Estándar"
              />
            </div>
            <div className="col">
              <CardITB
                image="/public/images/hab-cama-doble-2.jpeg"
                title="Habitación Familiar Estándar"
              />
            </div>
            <div className="col">
              <CardITB
                image="/public/images/hab-cama-doble-3.jpeg"
                title="Habitación Doble de Lujo"
              />
            </div>
            <div className="col">
              <CardITB
                image="/public/images/hab-dos-camas-sencillas.jpeg"
                title="Habitación Familiar de Lujo"
              />
            </div>
          </div>
        </section>
        <hr />
        <TitleHome title="Ofertas Especiales" />
        <hr />
      </main>
      <hr />
      <Footer />
    </>
  );
};

export default Home;
