//categorias de los servicios 

import { useState,useEffect } from "react";
import {Link, useParams} from "react-router-dom";
import categorias from "../utils/productos.json";
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
        <div>
            <h1>Categorias</h1>
        </div>
        <div>
            {response.categorias.map((categoria)=>{
                return (
                    <Link key={categoria.id} to={`/categorias/${categoria.id}`}>
                        <h2>{categoria.nombre}</h2>
                    </Link>
                )
            })}
        </div>
        {  
            ProductosPorCategoria && (
                ProductosPorCategoria.map((servicio)=>{
                    console.log(servicio)
                    return (
                        <Link key={servicio.id} to={`/item/${servicio.id}`}> 
                            <h1>{servicio.nombre}</h1>
                        </Link>
                    )
                    
                })
            )
        }
    </>);
}
export default ItemListContainer;