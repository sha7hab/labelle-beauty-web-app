import React from 'react';
import { Routes, Route } from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import Home from "./components/Home";
import Onboarding from "./components/Onboarding";



function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="Home" element={ <Home/> } />
        <Route path="/" element={ <Onboarding/> } />
      </Routes>
    </div>
  );
}

export default App;
