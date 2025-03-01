import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header>
      {/* Primera Franja: Logo + Login/Register */}
      <nav className="container navbar navbar-expand-lg fixed-top py-2 w-100">
        <div className="container-fluid d-flex justify-content-between align-items-center">
          {/* Logo */}
          <Link className="navbar-brand" to="/">
            <img src="" alt="Logo del hotel Teshuva" height={70} width={70} />
          </Link>
          {/* Enlaces de Iniciar sesión y Registro */}
          <div className="">
            <Link to="">Registrarse</Link>

            <Link className="ms-3" to="">
              Iniciar Sesión
            </Link>
          </div>
        </div>
      </nav>
      {/* Segunda Franja: Menú de navegación */}
      <nav className="container navbar navbar-expand-lg w-100 mt-5">
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
                <Link to="/" className="nav-link">
                  {" "}
                  Inicio{" "}
                </Link>
              </li>
              <li className="nav-item">
                <Link to="" className="nav-link">
                  {" "}
                  Habitaciones{" "}
                </Link>
              </li>
              <li className="nav-item">
                <Link to="" className="nav-link">
                  {" "}
                  Ofertas Especiales{" "}
                </Link>
              </li>
              <li className="nav-item">
                <Link to="" className="nav-link">
                  {" "}
                  Ubicación{" "}
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
