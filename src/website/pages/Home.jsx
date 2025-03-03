import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import BookingForm from "../components/BookingForm";
import CardITPB from "../components/CardITPB";
import TitleHome from "../components/TitleHome";
import CardITB from "../components/CardITB";
import CardHor from "../components/CardHor";
import IconText from "../components/IconText";
import { Element } from "react-scroll";

const Home = () => {
  return (
    <>
      <Navbar />
      <hr />
      <BookingForm />
      <main className="container mt-3">
        <img
          src="/images/hotel-standret.jpg"
          className="img-fluid rounded mb-5"
          alt="Foto del hotel Teshuva"
          style={{ height: "600px", width: "100%", objectFit: "cover" }}
        />
        <hr />
        <TitleHome title="Hotel Teshuva" />
        <hr />
        {/*Información general del hotel.*/}
        <section className="container p-0 my-5">
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

        <Element name="habitaciones">
          <hr />
          <TitleHome title="Habitaciones" />
          <hr />
          {/*Información de las habitaciones.*/}
          <section className="container p-0 my-5">
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
        </Element>

        <Element name="ofertas">
          <hr />
          <TitleHome title="Ofertas Especiales" />
          <hr />
          {/*Información de las ofertas existentes.*/}
          <section className="container p-0 my-5">
            <div className="row gx-4">
              <div className="col-6">
                <CardHor
                  image="/public/images/hotel-freepik.jpg"
                  title="Reservar con Anticipación"
                  description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas a volutpat leo, a laoreet eros. Nulla purus est, euismod ornare tempor vel, lacinia quis mauris."
                />
              </div>
              <div className="col-6">
                <CardHor
                  image="/public/images/hotel-freepik.jpg"
                  title="Reservar con Anticipación"
                  description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas a volutpat leo, a laoreet eros. Nulla purus est, euismod ornare tempor vel, lacinia quis mauris."
                />
              </div>
            </div>
            <div className="row gx-4">
              <div className="col-6">
                <CardHor
                  image="/public/images/hotel-freepik.jpg"
                  title="Reservar con Anticipación"
                  description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas a volutpat leo, a laoreet eros. Nulla purus est, euismod ornare tempor vel, lacinia quis mauris."
                />
              </div>
            </div>
          </section>
        </Element>

        <Element name="ubicacion">
          <hr />
          <TitleHome title="Ubicación y Contacto" />
          <hr />
          {/*Información de contacto y ubicación*/}
          <section className="container my-5">
            <div className="row">
              <div className="col-5">
                {/*Adress*/}
                <IconText
                  icon="bi bi-geo-alt-fill"
                  description="El Colegio - Cundinamarca"
                />
                {/*Telephone number*/}
                <IconText
                  icon="bi bi-telephone-fill"
                  description="+57 000 000 0000"
                />
                {/*Whatsapp*/}
                <IconText
                  icon="bi bi-whatsapp"
                  description="+57 000 000 0000"
                />

                {/*website*/}
                <IconText
                  icon="bi bi-globe2"
                  description="www.hotelteshuva.com"
                />
              </div>
              <div className="col-7">
                <img
                  src="/public/images/map.png"
                  alt="Mapa de ubicación geográfica del hotel"
                  className="img-fluid rounded"
                  style={{ height: "400px", width: "100%", objectFit: "cover" }}
                />
              </div>
            </div>
          </section>
        </Element>
      </main>
      <hr />
      <Footer />
    </>
  );
};

export default Home;
