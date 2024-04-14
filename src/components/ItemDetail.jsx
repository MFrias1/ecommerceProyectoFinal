import { CartContext } from "../context/cartContext.jsx";
import ItemCount from "./ItemCount.jsx";
import { useContext } from "react";
/*Mas detalles del servicio seleccionado*/

const ItemDetail = ({ item }) => {
    const { addItem,cart, removeItem } = useContext(CartContext)

    const onAdd = (quantity) => {
        addItem(item, quantity)
        console.log('agregado al carrito')
    }
    const onRemove = (quantity) => {
        removeItem(item.id, quantity)
        console.log('eliminado del carrito')
    }
    console.log(cart)

    return (
        <>
            <li className="servicio__elemento">
                <div className="elementos_img">
                    <img src={item.imagen} alt={item.nombre}></img>
                </div>
                <div className="elementos_informacion">
                    <p>{item.nombre}</p>
                    <p>{item.precio}</p>
                </div>
                <ItemCount stock={item.stock} initial={0} onAdd={onAdd} onRemove={onRemove}/>
            </li>
        </>

    )
}
export default ItemDetail;