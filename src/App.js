import React,{useState} from 'react';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import './App.css';
import {Home} from './Components/Home';
import {Header} from './Components/Header'
import {ProductDetails} from './Components/ProductDetails';
import {Products} from './Components/Products';
import {ProductHome} from './Components/ProductHome';
import {NotFound} from './Components/NotFound';
import cartContext from './Context';
function App() {
  return (
    
    <BrowserRouter>

  <cartContext.Provider value={0}>
    <Header/>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='product' element={<Products/>}>
      <Route path='/' element={<ProductHome/>}></Route>
      <Route path=':shoeid' element={<ProductDetails/>}></Route>
      </Route>
      <Route path="*" element={<NotFound/>}></Route>
    </Routes>
    </cartContext.Provider>
    </BrowserRouter>
    
  );
}


export default App;
