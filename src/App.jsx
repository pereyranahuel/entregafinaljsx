import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Navbar from './components/navbar/Navbar';
import ItemListContainer from './components/itemListContainer/ItemListContainer';
//import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer"
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
       
        <Route path="/" element={ <ItemListContainer /> } />
        <Route path="/productos/:categoryId" element={ <ItemListContainer /> } />
       
        
       
      </Routes>
    </BrowserRouter>
  );
}

export default App;
