import todosProductos from "../productos"
import { useParams } from "react-router-dom"

function DetalleProducto() {
    
    const {id} = useParams();
    console.log(id)
    const  producto=todosProductos.find(prod=>prod.id===parseInt(id))

    if(!producto){
        return <h2>El producto no existe!</h2>
    }
  return (
    <div className="card">
        <div>
          <img src="{imagen}" alt="" />
        </div>
        <h2>{producto.nombre}</h2>
        <h3>{producto.precio}</h3>
        <p>{producto.descripcion}</p>
    </div>
  )
}

export default DetalleProducto

