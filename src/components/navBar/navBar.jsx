import "./navBar.css"
import CartWidget from "../cartwidget/cartwidget"
import { NavLink } from "react-router-dom"
import coctel from './198650.png'



const NavBar = () => {


  return (
    <nav className="navBarFlex">
        <NavLink to={'/'}  >
            <img src={coctel} alt="icono" className="icono" />
        </NavLink>
        <div>
          <NavLink  to={'/productos/conalcohol'}className="navlink">Con Alcohol</NavLink>
          
          <NavLink to={'/productos/sinalcohol'} className="navlink">Sin Alcohol</NavLink>
        </div>
        <CartWidget/>
    </nav>
  )
}


 export default NavBar