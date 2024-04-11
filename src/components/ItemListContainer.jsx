//categorias de los servicios 

import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { AsyncMock } from "../utils/asyncMock";
import { collection, getDocs, getFirestore, query, where } from "firebase/firestore";

const ItemListContainer = (prop) => {
    //obtengo id 
    const { id } = useParams();
    const [response, setResponse] = useState([])
    const [cargando, setCargando] = useState(true)
    const [responseProducto, setResponseProducto] = useState([])
    
    //consulta de colección de categorias en firestore
    useEffect(() => {
        setCargando(false);
        const database = getFirestore();
        const serviciosRef = collection(database, 'categorias')
        getDocs(serviciosRef).then((snapshot) => {
            if (snapshot.size === 0){
                console.log('no result')
            }
            setResponse(snapshot.docs.map((item) => ({ id: item.id, ...item.data() })))
            setCargando(false);
        })
    }, [])

    //consulta de colección los servicios por categorias con filtro por id en firestore
    useEffect(()=>{
        const database = getFirestore();
        if(id){
            const serviceByCat = query(collection(database, 'servicios'), where('categoria', "==", parseInt(id)))
            getDocs(serviceByCat).then((snapshot)=>{
                if (snapshot.size === 0){
                    console.log('no hay categorias')
                }
                setResponseProducto(snapshot.docs.map((doc)=>({id: doc.id, ...doc.data()})))
            });
        }else { // Si no se proporciona un ID, obtener todos los servicios
            const allServices = collection(database, 'servicios');
            getDocs(allServices).then((snapshot) => {
                if (snapshot.size === 0) {
                    console.log('no hay servicios');
                }
                setResponseProducto(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
            });
        }
    }, [id])

    if (cargando) return <h1>Cargando.....</h1>;

    return (
        <>
            <ul>
                {/* link a categorias de servicios en navbar */}
                {response.map((categoria) => (
                    <Link key={categoria.id} to={`/categorias/${categoria.id}`}>
                        <li>{categoria.nombre}</li>
                    </Link>
                ))}
            </ul>
            <div className="tituloBanner">
                    <h2> Nuestros Servicios </h2>
                </div>
            <ul className="servicios">
                {responseProducto && (
                    responseProducto.map((servicio) => {
                        return (
                            //redirige a ItemDetailContainer
                            <li key={servicio.id} className="servicios__elementos">
                                <div className="elementos_img">
                                    <img src={servicio.imagen} alt={servicio.nombre}></img>
                                </div>
                                <div className="elementos_informacion">
                                    <p>{servicio.nombre}</p>
                                    <p>{servicio.precio}</p>
                                </div>
                                <Link to={`/item/${servicio.id}`}>
                                    <button className="elementos_button"> <p>Mas detalles</p></button>
                                </Link>
                            </li>
                        )
                    })
                )}
            </ul>
        </>);
}
export default ItemListContainer;