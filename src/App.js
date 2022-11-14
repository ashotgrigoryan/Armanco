import React from "react";
import Home from "./Pages/Home";
import {Routes , Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./Pages/Layouts/Header";
import Footer from "./Pages/Layouts/Footer";
import { Container, Row, Col } from 'react-bootstrap';
import {useEffect, useState} from "react";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Blog from "./Pages/Blog";
import Contact from "./Pages/Contact";
import Shop from "./Pages/Shop";
import Collections from "./Pages/Collections";
import Registration from "./Pages/registration";
import Login from "./Pages/login";
import Furniture from "./Pages/CollectionPages/furniture";
import Decorart from "./Pages/CollectionPages/decor-art";
import Kitchenthings from "./Pages/CollectionPages/kitchen-things";
import Illumination from "./Pages/CollectionPages/illumination";

function App() {
  return (
    <>
      <Header />
        <Routes>
          <Route exact path="/" element={<Home />}>Home</Route>
          <Route exact path="/Shop" element={<Shop />}>Shop</Route>
          <Route exact path="/Collections" element={<Collections />}>Collections</Route>
          <Route exact path="/Collections/decor-art" element={<Decorart />}>Decor Art</Route>
          <Route exact path="/Collections/furniture" element={<Furniture />}>Furniture</Route>
          <Route exact path="/Collections/kitchen-things" element={<Kitchenthings />}>Kitchen Things</Route>
          <Route exact path="/Collections/illumination" element={<Illumination />}>Illumination</Route>
          <Route exact path="/Blog" element={<Blog />}>Blog</Route>
          <Route exact path="/Contact" element={<Contact />}>Contact</Route>
          <Route exact path="/registration" element={<Registration />}/>
          <Route exact path="/login" element={<Login />}/>
        </Routes>
      <Footer />
    </>
  );
}

export default App;
