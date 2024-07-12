// src/routes.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Formulario from './Formulario';
import Tabela from './Tabela';

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Tabela />} />
        <Route path="/cadastrar-produto" element={<Formulario />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
