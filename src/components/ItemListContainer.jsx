//categorias de los servicios 

import { useState,useEffect } from "react";
import {Link, useParams} from "react-router-dom";
import categorias from "../utils/productos.json";
import Navbar from "./Navbar";
import { AsyncMock } from "../utils/asyncMock";

const ItemListContainer = (prop)=>{
    //obtengo id 
    const {id} = useParams();
    const [response, setResponse]=useState([])
    const [cargando,setCargando] = useState(true)
    
    //llamo a fake API
    useEffect(()=>{
        AsyncMock(categorias).then(respuesta=>{setResponse(respuesta); setCargando(false)})
    }, [])

    if (cargando) return(console.log("Cargando ItemListContainer..."))

    //retorno un filtro de los productos
    const ObtenerServiciosPorCategoria = (catId)=>{
        if (catId){
            return response.servicios.filter((servicio)=> servicio.categoria === parseInt(catId))
        }
    }

    const ProductosPorCategoria= ObtenerServiciosPorCategoria(id)

    return(
        <>
            <ul className="navbarServicios">
                    {response.categorias.map((categoria)=>{
                        <li key={categoria.id}>
                            <Link to={`/categorias/${categoria.id}`}>
                                {categoria.nombre}
                            </Link>
                        </li>
                    })}
            </ul>
            {ProductosPorCategoria && (
                ProductosPorCategoria.map((servicio)=>{
                    return (
                        <Link key={servicio.id} to={`/item/${servicio.id}`}> 
                            <div className="categoriasDespliegue_Nombre">
                                <h1>{servicio.nombre}</h1>
                            </div>
                        </Link>
                    )
                    
                })
            )
        }
    </>);
}
export default ItemListContainer;