import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./website/pages/Home";
import SignUp from "./website/pages/SignUp";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} /> {/* Home en la ruta principal */}
        <Route path="/SignUp" element={<SignUp />} />
      </Routes>
    </Router>
  );
};

export default App;
