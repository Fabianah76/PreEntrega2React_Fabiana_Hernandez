import React from 'react'
import "./ItemListContainer.css"


function ItemListContainer({greeting}) {
  return (
    <div className='bienvenida'>
        {greeting} 
    </div>
    )
}

export default ItemListContainer