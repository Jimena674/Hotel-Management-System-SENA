import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="container d-flex flex-column">
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <img src="" alt="Logo del hotel Teshuva" height={70} width={70} />
          </Link>
          <div className="">
            <ul className="d-flex flex-row navbar-nav">
              <li className="nav-item">
                <Link to="">Registrarse</Link>
              </li>
              <li className="nav-item border-start border-secondary ms-3">
                <Link className="ms-3" to="">
                  Iniciar Sesión
                </Link>
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
    </div>
  );
};

export default Navbar;
