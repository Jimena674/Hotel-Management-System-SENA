import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./website/pages/Home";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} /> {/* Home en la ruta principal */}
      </Routes>
    </Router>
  );
};

export default App;
