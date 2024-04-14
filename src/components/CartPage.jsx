import { useContext } from 'react';
import { CartContext } from '../context/cartContext'
/*Visualización del carrito de compras*/
const CartPage = () => {
    const { cart } = useContext(CartContext)

    return (
        <>
            <div>
                {cart.map((servicio, index) => {
                    return (

                        <ul key={index}>
                            <li>
                                <span>
                                    <img src={servicio.imagen} alt={servicio.nombre} /> {servicio.nombre}
                                </span>
                                <span>{servicio.quantity}</span>
                            </li>
                        </ul>
                    )
                })}

            </div>
        </>
    )

}
export default CartPage;