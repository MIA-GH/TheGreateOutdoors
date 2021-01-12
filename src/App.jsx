import React from 'react';
import "./App.css";
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from "./components/pages/Home";
import Destination from "./components/pages/Destination";
import Pricing from "./components/pages/Pricing";
import Booking from "./components/pages/Booking";
import About from "./components/pages/About";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/destination" element={<Destination />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
}

export default App;
