import todosProductos from "../productos"
import Producto from "./Producto"
import "../App.css"

function Productos() {
  return (
<div id="container">
      {todosProductos.map(prod=>(
        <Producto key={prod.id} {...prod} />
      ))}
    </div>

    
  )
}

export default Productos