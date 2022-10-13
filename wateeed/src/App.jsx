// usar LITERA Bootswatch
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import React from 'react';
import 'bootswatch/dist/litera/bootstrap.min.css'
import './App.css';

import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import Product from './components/Product';
import Footer from './components/Footer';
import Contact from './components/Contact';
import About from './components/About';
import CartWidget from './components/CartWidget';
import Home from './components/Home';
import Cart from './components/Cart';
import Category from './components/Category';



const App = () => {


  return (
    <>
      
        <BrowserRouter>
          <NavBar/>
            <Routes>
              <Route element={<Home/>} path="/" />
              <Route element={<Product/>} path="/product/:id" />
              <Route element={<Category/>} path="/category/:id" />
              <Route element={<About/>} path="/about" />
              <Route element={<Contact/>} path="/contact" />
              <Route element={<Cart/>} path="/cart" />
              {/* <Route element={<ItemListContainer/>} path="/category" /> */}
              <Route element={<h1>Error 404</h1>} path='*' />

            </Routes>
          <Footer/>
        </BrowserRouter>
      
      
    </>

  );
}

export default App;
