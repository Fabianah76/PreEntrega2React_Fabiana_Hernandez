import { Link, Outlet } from "react-router-dom"
import NavBar from "../components/navBar/NavBar"
import ItemListContainer from "../components/itemListContainer/ItemListContainer"

function Layout() {
  return (
    <>
     <NavBar/>
     <ItemListContainer/>
     <Outlet/>
    </>
  )
}

export default Layout