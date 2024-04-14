import { useContext } from 'react';
import { CartContext } from '../context/cartContext'
import Form from './form';
import { addDoc, getFirestore } from 'firebase/firestore';

/*Visualización del carrito de compras*/
const CartPage = () => {
    const { cart } = useContext(CartContext);

    const handleSubmit = (e)=>{
        e.preventDefault(); /*evitar comportamiento por defecto del form */

        const database = getFirestore();

        const addForm= addDoc() /*minuto 52:37 */
    }

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
                    <Form handleSubmit={handleSubmit}/>
                </ul>
            </div>
        </>
    )

}
export default CartPage;