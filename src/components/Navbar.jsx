import { useState } from "react";
import CartWidget from "./CartWidget";
import { Link } from "react-router-dom";
import categoria from '../utils/categorias.json';

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
                                <ul className="navbarServicios">
                                    {categoria.map((categoria) =>
                                        <li key={categoria.id} className="navbarServicios__opciones">
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
