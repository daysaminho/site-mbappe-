import React from "react";
import Login from "./components/Login";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Register from "./components/Register"
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
function App(params) {

return(
  <Router>
    <NavBar/>
    <Routes>
      <Route path="/Login" element={<Login />} />
      <Route path="/Home" element={<Home />} />
      <Route path="/Register" element={<Register />} />
    </Routes>
  </Router>
)

}

export default App;
