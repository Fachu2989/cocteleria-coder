import { useParams, useNavigate,} from 'react-router-dom'
import catalogo from '../catalogo/mock_data.json'
import './Producto.css'

export const ProductoDetalle = () => {

    const params=useParams()

    const volver=useNavigate()

    const onBack=()=>{
        volver(-1)
    }

    const {productoId}=params
    
    const prod=catalogo.find(prod=>prod.id===Number(productoId) )
    return (
        <>  
            <h1 className='detalleProducto'>Detalle Del producto:</h1>
            <div className='detalleGrid'>
                <div>
                    <img src={prod.imagen} alt="Imagen detallada" />
                </div>
                <div>
                    <div>
                        <h2>{prod.nombre}</h2>
                        <p>{prod.descripcion}</p>
                        <p>Precio: <strong>${prod.precio}</strong></p>
                    </div>
                    <button onClick={onBack}>Volver</button>

                </div>
            </div>
           
        </>
        
    
  )
}
