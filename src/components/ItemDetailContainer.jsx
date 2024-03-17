import { useState,useEffect } from "react"
import "../App.css"
import productos from "../utils/productos.json"
import ItemDetail from "./ItemDetail";
import { AsyncMock } from "../utils/asyncMock";

const ItemDetailContainer= ()=>{
    
    //estados
    const [servicesCharged,setServicesCharged]= useState({})
    const [cargando,setCargando] = useState(true)
    const [MostrarProductos,SetMostrarProductos] = useState([]);
    //llamado a
    useEffect(()=>{
        SetMostrarProductos(productos);
    },[])

    useEffect(()=>{
        AsyncMock(servicios).then(respuesta=> setServicesCharged(respuesta))
    }, [])
   
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
                        
                        return <ItemDetail item={item} />
                       
                    })}
                </ul>
                
            </section>
        </>

    )
}
export default ItemDetailContainer;