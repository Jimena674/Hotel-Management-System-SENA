import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Navbar = () => {
  return (
    <div className="container d-flex flex-column">
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <a href="../pages/index.html" className="navbar-brand">
            <img
              src="../assets/images/logo.jpeg"
              alt="Logo del hotel Teshuva"
              height={70}
              width={70}
            />
          </a>
          <div className="">
            <ul className="d-flex flex-row navbar-nav">
              <li className="nav-item">
                <a href="../pages/signup.html">Registrarse</a>
              </li>
              <li className="nav-item border-start border-secondary ms-3">
                <a href="../pages/login.html" className="ms-3">
                  Iniciar Sesión
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
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
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link" href="../pages/index.html">
                  Inicio
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Habitaciones
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Ofertas Especiales
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Ubicación
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
