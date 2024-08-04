import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./pages/login/login";
import React from "react";
import Cadastrar from "./pages/cadastrar/cadastrar";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/cadastrar" element={<Cadastrar />} />
      </Routes>
    </Router>
  );
}

export default App;
