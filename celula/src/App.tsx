import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./pages/login/login";
import React from "react";
import Cadastrar from "./pages/cadastrar/cadastrar";
import Dashboard from "./pages/dashboard/dashboard";
import Reuniao from "./pages/reuniao/reuniao";
import Celula from "./pages/celula/celula";
import EditCelula from "./utils/editCelula";
import Profile from "./pages/profile/profile";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/cadastrar" element={<Cadastrar />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/reuniao" element={<Reuniao />} />
        <Route path="/celula" element={<Celula />} />
        <Route path="/celulas/:id" element={<EditCelula />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </Router>
  );
}

export default App;
