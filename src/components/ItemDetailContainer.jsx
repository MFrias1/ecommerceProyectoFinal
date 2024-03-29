//llamo al servicio 

import { useState,useEffect } from "react";
import "../App.css";
import ItemDetail from "./ItemDetail";
import { AsyncMock } from "../utils/asyncMock";
import servicios from "../utils/productos.json";
import { Link, useParams } from "react-router-dom";

const ItemDetailContainer= ()=>{
    // Obtengo id del item
    const { id } = useParams();

    //estados
    const [cargando,setCargando] = useState(true)
    const [MostrarServicios,SetMostrarProductos] = useState([]);

    //cargo los productos del JSON
    useEffect(()=>{
        setCargando(true);
        AsyncMock(servicios).then(respuesta=> {
            SetMostrarProductos(respuesta);
            setCargando(false);
        });
    }, [])
   
    if (cargando) return (
    <>
        <h1>Cargando...</h1>
    </>
    )

    // Encontrar el servicio con el id correspondiente
    const servicioSeleccionado = MostrarServicios.servicios.find(
        (servicio) => servicio.id === parseInt(id)
    );
    
    
   //mapeo
    return(
        <>        
            <section className ="servicios">
                <div className="tituloServicios">
                    <h2> Nuestros Servicios </h2>
                </div>
                <ul>
                    {
                        servicioSeleccionado && (
                                    <ItemDetail key={servicioSeleccionado.id} item={servicioSeleccionado}></ItemDetail>
                        )
                        
                    }
                </ul>
                
            </section>
        </>

    )
}
export default ItemDetailContainer;