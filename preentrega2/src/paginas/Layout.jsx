import { Link, Outlet } from "react-router-dom"
import Navbar from "../components/navBar/NavBar"
import ItemListContainer from "../components/itemListContainer/ItemListContainer"

function Layout() {
  return (
    <>
     <Navbar/>
     <ItemListContainer/>
     <Outlet/>
    </>
  )
}

export default Layout