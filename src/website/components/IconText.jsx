import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import "../styles/styles.css";

const IconText = ({ icon, description }) => {
  return (
    <div className="d-flex mb-2">
      <i className={icon}></i>
      <span className="ms-3">{description}</span>
    </div>
  );
};

export default IconText;
