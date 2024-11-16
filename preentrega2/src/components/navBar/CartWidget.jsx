import React from 'react'
import { FiShoppingCart } from "react-icons/fi";
import "./navbar.css";


function CartWidget() {
  return (
    <div className='carrito'> 
      <FiShoppingCart />
      <span className='badge'>5</span>
    </div>)
    
}
 

export default CartWidget