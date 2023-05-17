import React from "react";
import { Route, Routes } from "react-router-dom";

import Footer from "./component/Footer/Footer";
import Header from "./component/Header/Header";
import Home from "./component/Home/Home";
import Products from "./component/Products/Products";
import Signin from "./component/SignIn/SignIn";
import Register from "./component/Register/Register";

export default function App() {
  return (
    <>
      <Header />
      <Routes>
      <Route exact path="/" element={<Home />}></Route>
      <Route path="/products" element={<Products />}></Route>
      <Route path="/products/:id" element={<Products />}></Route>

        <Route exact path="/signin" element={<Signin />}></Route>
        <Route exact path="/register" element={<Register />}></Route>
      </Routes>
      <Footer />
    </>
  );
}