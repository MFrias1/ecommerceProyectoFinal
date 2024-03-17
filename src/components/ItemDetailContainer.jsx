//llamo al servicio 

import { useState,useEffect } from "react"
import "../App.css"
import servicios from "../utils/productos.json"
import ItemDetail from "./ItemDetail";
import { AsyncMock } from "../utils/asyncMock";

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
        <h1>Cargando itemdetail...</h1>
    </>
    )

   //mapeo
    return(
        <>        
            <section className ="servicios">
                <div className="tituloServicios">
                    <h2> Nuestros Servicios </h2>
                    <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis tempore corrupti cumque nihil incidunt illo enim autem labore magni ex.</h3>
                </div>
                <ul>
                    {
                        MostrarServicios.servicios.length>0 && MostrarServicios.servicios.map((item, index) =>{
                            return (
                            <>
                                <ItemDetail item={item} />
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