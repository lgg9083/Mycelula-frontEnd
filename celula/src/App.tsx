import {BrowserRouter as Router, Route,Routes } from 'react-router-dom'
import Login from './pages/login/login';
import React from 'react';

function App() {
  return (
   <Router>
    <Routes>
      <Route path="/" element={<Login/>} />
     
    </Routes>
   </Router>
  );
}

export default App;
