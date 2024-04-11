import { useState } from "react";
import CartWidget from "./CartWidget";
import { Link } from "react-router-dom";

const Navbar = () => {
    const [MostrarServicios, SetMostrarServicios] = useState(false);
    return (
        <>
            <nav className="navbar">
                <div className="navbarLogo">
                    <Link to={`/`}>
                        <img src="../src/assets/logo.png" alt="logo" />
                    </Link>
                </div>
                <div>
                    <ul className="navbarListado">
                        <Link to={`/`}>
                            <li>Home</li>
                        </Link>
                        <li><a >Contacto</a></li>
                        <li><a onClick={() => SetMostrarServicios(!MostrarServicios)}>Servicios</a>
                            {MostrarServicios && (
                                <div className="navbarServicios">
                                    <Link to={`/categoria/1`}>Pareja</Link>
                                    <Link to={`/categoria/2`}>General</Link>
                                </div>
                            )}
                        </li>
                    </ul>
                </div>
                <CartWidget />
            </nav>
        </>
    );
}

export default Navbar;
