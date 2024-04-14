import { useContext } from 'react';
import { CartContext } from '../context/cartContext'
/*Visualización del carrito de compras*/
const CartPage = () => {
    const { cart } = useContext(CartContext)

    return (
        <>
            <div>
                <ul className='cartPage'>
                    {cart.map((servicio) => {
                        return (
                                <li className='cart_Service'>
                                    <div className='service_img'>
                                        <img src={servicio.item.imagen} alt={servicio.nombre} /> {servicio.item.nombre}
                                    </div >
                                    <p> {servicio.item.precio} </p>
                                    <div className='service_cantidad'>
                                        {servicio.quantity}
                                    </div>
                                </li>
                        )
                    })}
                </ul>
            </div>
        </>
    )

}
export default CartPage;