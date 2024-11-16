import React from 'react'
import Logo from './Logo'
import CartWidget from './CartWidget'


function Navbar() {
  return (
    
    <div className='navbar'>
        
        <Logo/>
        
        <ul className='navbar-links'>
            <li className='navbar-item'>
                <button class="button">Home</button>
            </li>
            <li className='navbar-item'>
                <button class="button">Tops</button>
            </li>
            <li className='navbar-item'>
                <button class="button">Bottoms</button> 
            </li>
            <li className='navbar-item'>
            <button class="button">Calzado</button> 
            </li>
            <li className='navbar-item'>
                <button class="button">Accesorios</button>
            </li>
            </ul>

            <CartWidget/>
    
       
    </div>
  )
}

export default Navbar