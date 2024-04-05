import { CartContext } from "../context/cartContext.jsx";
import ItemCount from "./ItemCount.jsx";
import { useContext } from "react";
/*Mas detalles del servicio seleccionado*/

const ItemDetail = ({ item }) => {
    const { addItem } = useContext(CartContext)

    const onAdd = (quantity) => {
        addItem(item, quantity)
        console.log('agregado al carrito')
    }

    return (
        <>
            <li className="listadoDeServicios">
                <div>
                    <img src={item.imagen} alt={item.nombre}></img>
                </div>
                <div className="servicios_informacion">
                    <p>{item.nombre}</p>
                    <p>{item.precio}</p>
                </div>
                <ItemCount stock={item.stock} initial={0} onAdd={onAdd} />
            </li>
        </>

    )
}
export default ItemDetail;