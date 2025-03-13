import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import "../styles/styles.css";

const CardITB = ({ image, title }) => {
  return (
    <div className="card border-0">
      <img
        src={image}
        alt={title}
        className="card-img-top card-img-vertical rounded"
      />
      <div className="card-body px-0">
        <h5 className="card-title">{title}</h5>
        <Link to="" className="btn btn-light">
          Ver más detalles
        </Link>
      </div>
    </div>
  );
};

CardITB.defaultProps = {
  image: "/images/hab-cama-doble-1.jpeg",
  title: "Habitación",
};

export default CardITB;
