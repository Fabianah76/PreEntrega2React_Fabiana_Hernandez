import Home from './paginas/Home'
import Layout from './paginas/Layout'
import NoPage from './paginas/NoPage'
import Productos from './paginas/Productos'
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Tops from './paginas/Tops'
import Bottoms from './paginas/Bottoms'
import Calzado from './paginas/Calzado'
import Accesorios from './paginas/Accesorios'
import DetalleProducto from './paginas/DetalleProducto';






function App() {
  
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element= {<Layout/>}>
            <Route index element= {<Home/>}/> 
            <Route path='/productos' element= {<Productos/>}/> 
            <Route path='/tops' element= {<Tops/>}/> 
            <Route path='/bottoms' element= {<Bottoms/>}/> 
            <Route path='/calzado' element= {<Calzado/>}/> 
            <Route path='/accesorios' element= {<Accesorios/>}/> 
            <Route path="/productos/:id" element={<DetalleProducto/>}/>
            <Route path='*' element= {<NoPage/>}/>
          </Route>
        </Routes>
      
      </BrowserRouter>
      
    </>
  )
}

export default App

