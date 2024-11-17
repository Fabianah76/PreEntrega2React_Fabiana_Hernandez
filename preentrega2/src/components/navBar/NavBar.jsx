import Logo from './Logo'
import CartWidget from './CartWidget'
import Stack from 'react-bootstrap/Stack';
import Productos from '../../paginas/Productos';
import Tops from '../../paginas/Tops';
import Bottoms from '../../paginas/Bottoms';
import Calzado from '../../paginas/Calzado';
import Accesorios from '../../paginas/Accesorios';
import Home from '../../paginas/Home';
import { Link, Outlet } from 'react-router-dom';


function Navbar() {
  return (
    <Stack direction="horizontal" gap={3}>
    
        <div className='navbar'>
        
            <Logo/>
        
            <ul className='navbar-links'>
                <li className='navbar-item'>
                    <Link to= {"/" } className="button">Home</Link> 
                </li>
                <li className='navbar-item'>
                    <Link to= {"/productos"} className="button">Todos los productos</Link> 
                </li>
                <li className='navbar-item'>
                    <Link to= {"/tops"} className="button">Tops</Link> 
                </li>
                <li className='navbar-item'>
                    <Link to= {"/bottoms"} className="button">Bottoms</Link>  
                </li>
                <li className='navbar-item'>
                    <Link to= {"/calzado"} className="button">Calzado</Link>  
                </li>
                <li className='navbar-item'>
                    <Link to= {"/accesorios"} className="button">Accesorios</Link> 
                </li>
            </ul>

            <CartWidget/>
        </div>
    </Stack>
  );
}

export default Navbar