import React from 'react'

import productoCatalogo from '../catalogo/mock_data.json'
import './Producto.css'
import { Link } from 'react-router-dom'

export const Productos = () => {
  return (
    <>
        <h3>Nuestros Cocteles</h3>

        <div>
            <ul className='productoGrid'>
                {
                    productoCatalogo.map(producto=>(
                        <div key={producto.id}>
                            <div class="card">
                                <img src={producto.imagen} alt='Imagen coctel'/>
                                <div class="info-card">
                                    <h2>{producto.nombre}</h2>
                                    <p class="precio">{`$ ${producto.precio}`}</p>
                                    <Link to={`/producto/${producto.id}`} >Ver mas</Link>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </ul>
        </div>
    </>
  )
}

