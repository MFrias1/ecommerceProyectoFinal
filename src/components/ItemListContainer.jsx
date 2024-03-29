//categorias de los servicios 

import { useState,useEffect } from "react";
import {Link, useParams} from "react-router-dom";
import categorias from "../utils/productos.json";
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
            <ul>
                    {response.categorias.map((categoria)=>{
                        <Link key={categoria.id} to={`/categorias/${categoria.id}`}>
                            <li>{categoria.nombre}</li>
                        </Link>
                    })}
            </ul>
            {ProductosPorCategoria && (
                ProductosPorCategoria.map((servicio)=>{
                    return (
                        //redirige a ItemDetailContainer
                        <Link key={servicio.id} to={`/item/${servicio.id}`}> 
                            <section className ="servicios">
                                <ul>
                                    <li className="listadoDeServicios">
                                        <div>
                                            <img src={servicio.imagen} alt={servicio.nombre}></img>
                                        </div>
                                        <div className="serviciosTitulo">
                                            <p>{servicio.nombre}</p>
                                            <p>{servicio.precio}</p>
                                        </div>
                                        <button> <p>Mas detalles</p></button>
                                    </li>
                                </ul>
                            </section>
                        </Link>
                    )
                    
                })
            )
        }
    </>);
}
export default ItemListContainer;