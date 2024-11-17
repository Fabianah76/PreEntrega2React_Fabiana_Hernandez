import { useState } from 'react'
import Navbar from './components/navBar/NavBar'
import ItemListContainer from './components/itemListContainer/ItemListContainer'
import Home from './paginas/Home'
import Layout from './paginas/Layout'
import NoPage from './paginas/NoPage'
import Productos from './paginas/Productos'
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Tops from './paginas/Tops'
import Bottoms from './paginas/Bottoms'
import Calzado from './paginas/Calzado'
import Accesorios from './paginas/Accesorios'



function App() {
  
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element= {<Layout/>}>
            <Route path='/productos' element= {<Productos/>}/> 
            <Route path='/tops' element= {<Tops/>}/> 
            <Route path='/bottoms' element= {<Bottoms/>}/> 
            <Route path='/calzado' element= {<Calzado/>}/> 
            <Route path='/accesorios' element= {<Accesorios/>}/> 
            <Route path='*' element= {<NoPage/>}/>
          </Route>
        </Routes>
      
      </BrowserRouter>



      {/* <div>
        < Navbar/>
      </div>
      <div>
        <h1>
          < ItemListContainer greeting = "¡Bienvenida a Poch.!" />  
        </h1>
      </div>               */}
    </>
  )
}

export default App

