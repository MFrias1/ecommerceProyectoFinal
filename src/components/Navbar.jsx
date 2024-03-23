import { useState } from "react";
import CartWidget from "./CartWidget";
import { Link } from "react-router-dom";
import categoria from '../utils/productos.json';

const Navbar = () => {
    const [MostrarServicios,SetMostrarServicios] = useState(false);
    // Extraigo lista de categorías del JSON
    const categorias = categoria.categorias;
    return (
        <>
            <nav className="navbar">
                <div className="navbarLogo">
                    <Link to="/">
                        <img src="../src/assets/logo.png" alt="logo" />
                    </Link>
                </div>
                <div>
                    <ul className="navbarListado">
                        <li><a >Contacto</a></li>
                        <li><a >Sobre Nosotros</a></li>
                        <li><a onClick={() => SetMostrarServicios(!MostrarServicios)}>Servicios</a>
                                {MostrarServicios && (
                                    <ul>
                                        {categorias.map((categoria) => 
                                        <li key={categoria.id}>
                                            <Link to={`/categorias/${categoria.id}`}>
                                                <p>{categoria.nombre}</p>
                                            </Link>
                                        </li>
                                        )}
                                    </ul>
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
