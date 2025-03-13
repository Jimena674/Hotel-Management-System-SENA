import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import "../styles/styles.css";

const CardHor = ({ image, title, description }) => {
  return (
    <div className="card border-0">
      <div className="row g-0">
        <div className="col-md-4">
          <img
            src={image}
            alt={title}
            className="img-fluid rounded-start card-img-horizontal rounded"
          />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <Link to="" className="btn btn-light">
              Ver más detalles
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

CardHor.defaultProps = {
  image: "/images/hotel-freepik.jpg",
  title: "Título no disponible",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas a volutpat leo, a laoreet eros. Nulla purus est, euismod ornare tempor vel, lacinia quis mauris.",
};

export default CardHor;
