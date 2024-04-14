
import { useState, useEffect } from "react";
import CartWidget from "./CartWidget";
import logo from '../assets/logo.png'; 
import { Link } from "react-router-dom";
import { collection, getDocs, getFirestore } from "firebase/firestore";

const Navbar = () => {
    const [MostrarServicios, SetMostrarServicios] = useState(false);
    const [Categorias, SetCategorias] = useState([])

    //consulta de colección de categorias en firestore
    useEffect(() => {
        const database = getFirestore();
        const serviciosRef = collection(database, 'categorias')
        getDocs(serviciosRef).then((snapshot) => {
            if (snapshot.size === 0) {
                console.log('no result')
            }
            SetCategorias(snapshot.docs.map((item) => ({ id: item.id, ...item.data() })))
        })
    }, [])


    return (
        <>
            <nav className="navbar">
                <div className="navbarLogo">
                    <Link to={`/`}>
                        <img src={logo} alt="logo" />
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
                                    <ul>
                                        {Categorias.length > 0 && Categorias.map((Categorias) => (
                                            <li key={Categorias.id}>
                                                <Link to={`/categorias/${Categorias.id}`}>{Categorias.nombre}</Link>
                                            </li>
                                        ))}
                                    </ul>
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
