import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../components/pages/home/HomeContainer";
import Cart from "../components/pages/cart/CartContainer";

const Routers = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/cart" element={<Cart />} />
      </Routes>
    </Router>
  );
};

export default Routers;
