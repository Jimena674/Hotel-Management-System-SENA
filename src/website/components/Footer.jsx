import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link as ScrollLink } from "react-scroll";
import { Link as RouterLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="mb-4">
      <div className="container w-100">
        <div className="container-fluid d-flex justify-content-between align-items-center">
          <div
            className="d-flex flex-column justify-content-between"
            style={{ height: "200px" }}
          >
            <div className="row">
              <h5>¿Cómo podemos ayudarte?</h5>
              <h6>(+57) 000 000 0000</h6>
            </div>
            <div className="d-flex row justify-content-start">
              <div className="col-1">
                <RouterLink to="/" className="text-decoration-none text-dark">
                  <i className="bi bi-facebook" />
                </RouterLink>
              </div>
              <div className="col-1">
                <RouterLink to="/" className="text-decoration-none text-dark">
                  <i className="bi bi-instagram" />
                </RouterLink>
              </div>
              <div className="col-1">
                <RouterLink to="/" className="text-decoration-none text-dark">
                  <i className="bi bi-twitter" />
                </RouterLink>
              </div>
            </div>
            <div className="row">
              <span>© 2024 Techuvá</span>
            </div>
          </div>
          {/* Enlaces del sitio web */}
          <div
            className="d-flex flex-column justify-content-start text-end"
            style={{ height: "200px" }}
          >
            <ScrollLink
              to="inicio"
              smooth={true}
              duration={500}
              style={{ cursor: "pointer" }}
            >
              Inicio
            </ScrollLink>
            <ScrollLink
              to="habitaciones"
              smooth={true}
              duration={500}
              style={{ cursor: "pointer" }}
            >
              Habitaciones
            </ScrollLink>
            <ScrollLink
              to="ofertas"
              smooth={true}
              duration={500}
              style={{ cursor: "pointer" }}
            >
              Ofertas Especiales
            </ScrollLink>
            <ScrollLink
              to="ubicacion"
              smooth={true}
              duration={500}
              style={{ cursor: "pointer" }}
            >
              Ubicación
            </ScrollLink>
            <RouterLink
              to="/"
              smooth={true}
              duration={500}
              style={{ cursor: "pointer" }}
            >
              Consultar Reserva
            </RouterLink>
            <RouterLink
              to="/SignUp"
              smooth={true}
              duration={500}
              style={{ cursor: "pointer" }}
            >
              Registrarse
            </RouterLink>
            <RouterLink
              to="/"
              smooth={true}
              duration={500}
              style={{ cursor: "pointer" }}
            >
              Iniciar Sesión
            </RouterLink>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
