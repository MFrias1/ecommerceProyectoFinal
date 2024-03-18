import { useState } from "react";
import CartWidget from "./CartWidget";
import ItemListContainer from "./ItemListContainer";

const Navbar =()=>{
    const [MostrarServicios,SetMostrarServicios] = useState(false);
 return (
    <>   
        <nav className="navbar">
            <div className="navbarLogo">
                <img src="../src/assets/logo.png" alt="logo" />
            </div>
            <div>
                <ul className="navbarListado"> 
                        <li> <a href="#">Contacto</a></li>
                        <li> <a href="#">Sobre Nosotros</a></li>
                        <li> 
                            <a href="#" onClick={()=>SetMostrarServicios(!MostrarServicios)}>Servicios</a>
                            {MostrarServicios && <ItemListContainer/>}
                        </li>
                </ul>
            </div>
            <CartWidget/> 
        </nav>
    </>);
}
export default Navbar;