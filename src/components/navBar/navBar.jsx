import "./navBar.css"
import CartWidget from "../cartwidget/cartwidget"


const NavBar = () => {
  return (
    <nav className="navBarFlex">
        <h1>
            cocteleria
          </h1>
        <div>
          <button>Con Alcohol</button>
          <button>Sin Alcohol</button>
        </div>
        <CartWidget/>
    </nav>
  )
}
 export default NavBar