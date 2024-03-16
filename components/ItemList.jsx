import { useState,useEffect } from "react"
import "../src/App.css"
import Item from "../components/Item"

const itemList= ()=>{
    
    //estados
    const [MostrarProductos,SetMostrarProductos] = useState([]);

   //promesa
   useEffect(()=>{
    const Servicios = async ()=>{
        const respuesta = await fetch ("../src/productos.json")
        const formatoRespuesta = await respuesta.json() //lo transformo en un json y lo guardo en formatoRespuesta
        SetMostrarProductos(formatoRespuesta);
    }
    Servicios(); //llamo a Servicios
   },[]) 
   
   //mapeo
    return(
        <>        
            <section className ="servicios">
                <div className="tituloServicios">
                    <h2> Nuestros Servicios </h2>
                    <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis tempore corrupti cumque nihil incidunt illo enim autem labore magni ex.</h3>
                </div>
                <ul>
                    {MostrarProductos.map((item, index) =>{
                        
                        return <Item key={index} item={item} />
                       
                    })}
                </ul>
                
            </section>
        </>

    )
}
export default itemList;