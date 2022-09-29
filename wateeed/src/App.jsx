// usar LITERA Bootswatch
import {BrowserRouter, Routes, Route} from 'react-router-dom'

import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import Product from './components/Product';
import Footer from './components/Footer';



function App() {
  return (
    <>
      <BrowserRouter/>
        <NavBar/>
        <Routes>
          <Route element={<Product/>} path="/product" />
        </Routes>
        <Footer/>
      <BrowserRouter/>
    </>

  );
}

export default App;
