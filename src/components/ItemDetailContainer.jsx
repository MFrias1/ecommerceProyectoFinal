//llamo al servicio 
import { useState, useEffect} from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import { getFirestore , query, collection, getDocs, where} from "firebase/firestore";

const ItemDetailContainer = () => {
    // Obtengo id del item
    const { id } = useParams();

    //estados
    const [cargando, setCargando] = useState(true)
    const [MostrarServicios, SetMostrarProductos] = useState([]);

    /*cargo los productos del JSON,consulto JSON
    useEffect(() => {
        setCargando(true);
        AsyncMock(servicios).then(respuesta => {
            if (id) {
                const item = respuesta.find(item => item.id === parseInt(id));
                SetMostrarProductos(item)
            } else {
                SetMostrarProductos(respuesta.servicios);
            }
            setCargando(false);
        });
    }, [])*/

    //consulta de colección los servicios por categorias con filtro por id en firestore
    useEffect(() => {
        const database = getFirestore();
        if (id) {
            const getServiceByCat = query(collection(database, 'servicios'), where('id', "==", parseInt(id)))
            getDocs(getServiceByCat).then((snapshot) => {
                if (snapshot.size === 0) {
                    console.log('no hay categorias')
                }
                SetMostrarProductos(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
                setCargando(false);
            });
        } else { // Si no se proporciona un ID, obtener todos los servicios
            const allServices = collection(database, 'servicios');
            getDocs(allServices).then((snapshot) => {
                if (snapshot.size === 0) {
                    console.log('no hay servicios');
                }
                SetMostrarProductos(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
                setCargando(false);
            });
        }
    }, [id])

    if (cargando) return (
        <>
            <h1>Cargando...</h1>
        </>
    )

    // Encontrar el servicio con el id correspondiente
    const servicioSeleccionado = MostrarServicios.find(
        (servicio) => servicio.id === parseInt(id)
    );

    //mapeo
    return (
        <>
            <ul className="servicioDetalles">
                {
                    servicioSeleccionado && <ItemDetail key={servicioSeleccionado.id} item={servicioSeleccionado}></ItemDetail>
                }
            </ul>
        </>
    )
}
export default ItemDetailContainer;