//llamo al servicio 

import { useState,useEffect } from "react";
import "../App.css";
import ItemDetail from "./ItemDetail";
import { AsyncMock } from "../utils/asyncMock";
import servicios from "../utils/productos.json";
import { Link } from "react-router-dom";

const ItemDetailContainer= ()=>{

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

   //mapeo
    return(
        <>        
            <section className ="servicios">
                <div className="tituloServicios">
                    <h2> Nuestros Servicios </h2>
                </div>
                <ul>
                    {
                        MostrarServicios.servicios.map(item =>{
                            return (
                            <>
                                <Link to={`/item/${item.id}`}>
                                    <ItemDetail key={item.id}  item={item} />
                                </Link>
                            </>
                            )
                        })
                    }
                </ul>
                
            </section>
        </>

    )
}
export default ItemDetailContainer;