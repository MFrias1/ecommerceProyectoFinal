//categorias de los servicios 

import { useState,useEffect } from "react";
import {Link, useParams} from "react-router-dom";
import categorias from "../utils/productos.json";
import Navbar from "./Navbar";
import { AsyncMock } from "../utils/asyncMock";

const ItemListContainer = ()=>{
    //obtengo id 
    const {id} = useParams();
    const [response, setResponse]=useState([])
    const [cargando,setCargando] = useState(true)
    
    //llamo a fake API
    useEffect(()=>{
        AsyncMock(categorias).then(respuesta=>{setResponse(respuesta); setCargando(false)})
    }, [])

    if (cargando) return <h1>Cargando ItemListContainer...</h1>

    //retorno un filtro de los productos
    const ObtenerServiciosPorCategoria = (catId)=>{
        if (catId){
            return response.servicios.filter((servicio)=> servicio.categoria === parseInt(catId))
        }
    }

    const ProductosPorCategoria= ObtenerServiciosPorCategoria(id)

    return(
        <>
            <div className="categoriasTitulo">
                <h1>Tipos de Servicios</h1>
            </div>
            {response.categorias.map((categoria)=>{
                 return (
                    <Link key={categoria.id} to={`/categorias/${categoria.id}`}>
                            <p>{categoria.nombre}</p>
                    </Link>
                )
            })}
        {  
            ProductosPorCategoria && (
                ProductosPorCategoria.map((servicio)=>{
                    console.log(servicio)
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