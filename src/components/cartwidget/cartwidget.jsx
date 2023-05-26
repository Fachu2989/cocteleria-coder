import carrito from './assets/carrito.svg'
import './assets/cartwidget.css'

const CartWidget=()=>{
    return(
        <div>
            <img className='carrito' src={carrito} alt="carrito" />
            0
        </div>
    )
}

export default CartWidget