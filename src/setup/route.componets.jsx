import React from 'react'
import { Routes, Route } from "react-router";
import About from "../about";
import ErrorPage from "../error";
import ProductsPage from "../product";
import ContactPage from "../contact";
import Home from '../home';
import SingleProducts from '../singleproducts';


const RouteComponets = () => {
  return (
    <>
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/product" element={<ProductsPage />} />
        <Route path='/singleproduct' element={<SingleProducts />} />
        <Route path="/conatct" element={<ContactPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </>
  )
}

export default RouteComponets