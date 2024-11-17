import {Link, Outlet } from "react-router-dom"
import { FiShoppingCart } from "react-icons/fi";
import Stack from 'react-bootstrap/Stack';
import Home from "./Home";
import Productos from "./Productos";
import Tops from "./Tops";
import Bottoms from "./Bottoms";
import Calzado from "./Calzado";
import Accesorios from "./Accesorios";



function Layout() {
  return (
    <>
    <Stack direction="horizontal" gap={3}>
    
        <div className='navbar'>
    
            <div>
                <img src="/Poch..png" alt="logoPoch." />
            </div>
    
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
            <div className='carrito'> 
                <FiShoppingCart />
                <span className='badge'>5</span>
            </div>)
        
        </div>
    </Stack>
    <Outlet/>
    </>
  )
}

export default Layout