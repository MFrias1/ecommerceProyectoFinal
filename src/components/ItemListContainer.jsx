//categorias de los servicios 

import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import categorias from "../utils/productos.json";
import { AsyncMock } from "../utils/asyncMock";
import { collection, getDocs, getFirestore } from "firebase/firestore";

const ItemListContainer = (prop) => {
    //obtengo id 
    const { id } = useParams();
    const [response, setResponse] = useState([])
    const [cargando, setCargando] = useState(true)

    //llamo a fake API
    useEffect(() => {
        AsyncMock(categorias).then(respuesta => { setResponse(respuesta); setCargando(false) })
    }, [])


    //consulta de colección sin filtros
    useEffect(() => {
        const database = getFirestore();

        const serviciosRef = collection(database, 'servicios')
        getDocs(serviciosRef).then((snapshot) => {
            snapshot.docs.map((item) => console.log({ ...item.data() }))
        })
    }, [])

    //retorno un filtro de los productos
    const ObtenerServiciosPorCategoria = (catId) => {
        if (catId) {
            return response.filter((servicio) => servicio.categoria === parseInt(catId))
        }
    }

    const ProductosPorCategoria = ObtenerServiciosPorCategoria(id)

    return (
        <>
            <ul>
                {/* link a categorias de servicios en navbar */}
                {categorias.map((categoria) => {
                    <Link key={categoria.id} to={`/categorias/${categoria.id}`}>
                        <li>{categoria.nombre}</li>
                    </Link>
                })}
            </ul>
            <ul className="servicios">
                {ProductosPorCategoria && (
                    ProductosPorCategoria.map((servicio) => {
                        return (
                            //redirige a ItemDetailContainer
                            <li className="servicios__elementos">
                                <div className="elementos_img">
                                    <img src={servicio.imagen} alt={servicio.nombre}></img>
                                </div>
                                <div className="elementos_informacion">
                                    <p>{servicio.nombre}</p>
                                    <p>{servicio.precio}</p>
                                </div>
                                <Link key={servicio.id} to={`/item/${servicio.id}`}>
                                    <button className="elementos_button"> <p>Mas detalles</p></button>
                                </Link>
                            </li>
                        )
                    })
                )}
            </ul>
        </>);
}
export default ItemListContainer;