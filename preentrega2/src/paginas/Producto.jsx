import { Link } from "react-router-dom"
import "../App.css";



function Producto({id,nombre,descripcion,precio,imagen}) {
  return (
    <Link to={`/productos/${id}`} className="card">
        <div>
          <img src="{imagen}" alt="" />
        </div>
        <h2>{nombre}</h2>
        <h3>{precio}</h3>
        <p>{descripcion}</p>
    </Link>
  )
}

export default Producto
