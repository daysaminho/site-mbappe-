import React from "react";
import Login from "./components/Login";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Register from "./components/Register";
import Favorites from "./components/Favorites";
import Freekick from "./components/Freekick"; // Import du compteur de freekick
import FailComp from "./components/FailComp"; // Import de la page FailComp
import Profile from "./components/Profile"; // Import de la page Profile
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/Login" element={<Login />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/Favorites" element={<Favorites />} />
        <Route path="/Freekick" element={<Freekick />} /> {/* Route pour Freekick */}
        <Route path="/FailComp" element={<FailComp />} /> {/* Route pour FailComp */}
        <Route path="/Profile" element={<Profile />} /> {/* Route pour Profile */}
      </Routes>
    </Router>
  );
}

export default App;
