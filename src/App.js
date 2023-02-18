import './App.css';
import ListaDeTareas from './componentes/ListaDeTareas';
import brainlingualLogo from './imagenes/brainlingualLogo.png';

function App() {
  return (
 <div className="aplicacion-tareas">
    <div className="logo-contenedor">
    <img
    src= {brainlingualLogo}
    className= "brainlingual-logo"
     alt='' /> 
    </div>
    <div className="tareas-lista-principal">
           <h1> Mis Tareas</h1>
    <ListaDeTareas/>
    </div>
 </div>
  );
}

export default App;
 