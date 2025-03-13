import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link as ScrollLink } from "react-scroll";
import { Link as RouterLink } from "react-router-dom";

const Navbar = () => {
  return (
    <header>
      {/* Primera Franja: Logo + Login/Register */}
      <nav className="container navbar navbar-expand-lg py-2 w-100">
        <div className="container-fluid d-flex justify-content-between align-items-center">
          {/* Logo */}
          <RouterLink className="navbar-brand" to="/">
            <img
              src="/images/logo-h-teshuva.png"
              alt="Logo del hotel Teshuva"
              height={80}
              width={80}
            />
          </RouterLink>
          {/* Enlaces de Iniciar sesión y Registro */}
          <div className="">
            <RouterLink to="/SignUp">
              <span>Registrarse</span>
            </RouterLink>

            <RouterLink className="ms-3" to="/">
              <span>Iniciar Sesión</span>
            </RouterLink>
          </div>
        </div>
      </nav>
      {/* Segunda Franja: Menú de navegación */}
      <nav className="container navbar navbar-expand-lg w-100">
        <div className="container-fluid">
          {/* Botón para móviles */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          {/* Menú de navegación */}
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <ScrollLink
                  to="inicio"
                  className="nav-link"
                  smooth={true}
                  duration={500}
                  style={{ cursor: "pointer" }}
                >
                  <span>Inicio</span>
                </ScrollLink>
              </li>
              <li className="nav-item">
                <ScrollLink
                  to="habitaciones"
                  className="nav-link"
                  smooth={true}
                  duration={500}
                  style={{ cursor: "pointer" }}
                >
                  <span>Habitaciones</span>
                </ScrollLink>
              </li>
              <li className="nav-item">
                <ScrollLink
                  to="ofertas"
                  className="nav-link"
                  smooth={true}
                  duration={500}
                  style={{ cursor: "pointer" }}
                >
                  <span>Ofertas Especiales</span>
                </ScrollLink>
              </li>
              <li className="nav-item">
                <ScrollLink
                  to="ubicacion"
                  className="nav-link"
                  smooth={true}
                  duration={500}
                  style={{ cursor: "pointer" }}
                >
                  <span>Ubicación</span>
                </ScrollLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
