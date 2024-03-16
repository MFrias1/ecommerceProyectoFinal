import { useState,useEffect } from "react"
import "../App.css"
import productos from "../utils/productos.json"

const itemList= ()=>{
    
    //estados
    const [MostrarProductos,SetMostrarProductos] = useState([]);

    useEffect(()=>{
        SetMostrarProductos(productos);
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
                    {MostrarProductos.length>0 && MostrarProductos.map((item, index) =>{
                        
                        /*return <Item key={index} item={item.nombre} />*/
                        return( 
                            <>
                                <li key={index} className="listadoDeServicios"> <img src={item.imagen}></img> {item.nombre}</li>
                            </>
                        )
                       
                    })}
                </ul>
                
            </section>
        </>

    )
}
export default itemList;