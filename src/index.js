import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import { Productos } from './components/Productos/Productos';
import { ProductoDetalle } from './components/Productos/ProductoDetalle';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />}/>
        <Route path='/*' element={<App />}/>
        <Route path='/producto' element={<Productos/>}/>
        <Route path='/producto/:productoId' element={<ProductoDetalle/> }/>
        <Route path='/productos/conalcohol' element={<App/>}/>
        <Route path='/productos/sinalcohol' element={<App/>}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
