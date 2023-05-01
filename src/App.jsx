import './App.css';
import NavBar from './components/navBar/navBar'
import { ItemListContainer } from './components/itemListContainer/itemListContainer';
import { Productos } from './components/Productos/Productos';

function App() {
  return (
    <>
      <div className="App">
        <NavBar/>

        {<ItemListContainer saludo={'Bienvenidos a la mejor cocteleria de la zona'}/>}

      </div>
      <header>
        {<Productos/>}
      </header>
    </>

  );
}

export default App;
