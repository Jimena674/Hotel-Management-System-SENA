import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import "../styles/styles.css";

const CardITPB = ({ image, title, description }) => {
  return (
    <div className="card border-0">
      <img
        src={image}
        alt={title}
        className="card-img-top card-img-vertical rounded"
      />
      <div className="card-body px-0">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
        <Link to="" className="btn btn-light">
          Ver más detalles
        </Link>
      </div>
    </div>
  );
};

export default CardITPB;
