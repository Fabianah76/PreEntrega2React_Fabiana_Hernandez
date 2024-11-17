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
                    <link to= {"/" } class="button">Home</link>
                </li>
                <li className='navbar-item'>
                    <link to= {"/productos"} class="button">Todos los productos</link>
                </li>
                <li className='navbar-item'>
                    <link to= {"/tops"} class="button">Tops</link>
                </li>
                <li className='navbar-item'>
                    <link to= {"/bottoms"} class="button">Bottoms</link> 
                </li>
                <li className='navbar-item'>
                    <link to= {"/calzado"} class="button">Calzado</link> 
                </li>
                <li className='navbar-item'>
                    <link to= {"/accesorios"} class="button">Accesorios</link>
                </li>
            </ul>

            <CartWidget/>
        </div>
    </Stack>
  );
}

export default Navbar