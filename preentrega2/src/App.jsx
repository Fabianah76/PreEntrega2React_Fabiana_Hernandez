import { useState } from 'react'
import Navbar from './components/navBar/NavBar'
import ItemListContainer from './components/itemListContainer/ItemListContainer'

function App() {
  
  return (
    <>
      <div>
        < Navbar/>
      </div>
      <div>
        <h1>
          < ItemListContainer greeting = "¡Bienvenida a Poch.!" />  
        </h1>
      </div>              
    </>
  )
}

export default App

