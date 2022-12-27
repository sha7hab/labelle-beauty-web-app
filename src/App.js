import React from 'react';
import { Routes, Route } from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import Home from "./components/Home";
import Onboarding from "./components/Onboarding";
import Product from "./components/Product";
import MyCart from "./components/MyCart";


function App() {
  return (
    <div className="App">
      <Routes>
        
        <Route path="/" element={ <Onboarding/> } />
        <Route path="Home" element={ <Home/> } />
        <Route path="Product" element={ <Product/> } />
        <Route path="MyCart" element={ <MyCart/> } />

      </Routes>
    </div>
  );
}

export default App;
