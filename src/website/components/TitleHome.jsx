import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

const TitleHome = ({ title }) => {
  return <h1 className="text-center"> {title} </h1>;
};

export default TitleHome;
