import { useState } from "react";
import CartWidget from "./CartWidget";
const Navbar =()=>{
    const [MostrarServicios,SetMostrarServicios] = useState(false);
 return (
    //esctructura html
    <nav className="navbar">
        <div className="navbarLogo">
            <img src="../src/assets/logo.png" alt="logo" />
        </div>
        <div>
            <ul className="navbarListado"> 
                    <li> <a href="#">Contacto</a></li>
                    <li> <a href="#" onClick={()=>SetMostrarServicios(!MostrarServicios)}>Servicios</a>
                        {MostrarServicios && (
                            <ul className="navbarServicios">
                                <li>Tarot</li>
                                <li>Lenormand</li>
                            </ul>
                        )}
                    </li>
                    <li> <a href="#">Sobre Nosotros</a></li>
            </ul>
        </div>
        <CartWidget/>
    </nav>
 );
}
export default Navbar;