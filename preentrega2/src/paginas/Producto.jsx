import { Link } from "react-router-dom"
import "./styles.css"


function Producto({id,nombre,descripcion,precio,imagen}) {
  return (
    <Link to={`/producto/${id}`} className="card">
        <div>
            {imagen}
        </div>
        <h2>{nombre}</h2>
        <h3>{precio}</h3>
        <p>{descripcion}</p>
    </Link>
  )
}

export default Producto
