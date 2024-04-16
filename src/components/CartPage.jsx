import { useContext } from 'react';
import { CartContext } from '../context/cartContext'
import Form from './form';
import { addDoc, getFirestore } from 'firebase/firestore';

/*Visualización la página de carrito de compras con los servicios a comprar*/
const CartPage = () => {
    const { cart } = useContext(CartContext); //obtengo el estado del carrito

    //se activa handleSubmit cuando se envía el formulario
    const handleSubmit = (e) => {
        e.preventDefault(); /*evito comportamiento por defecto del form */

        const database = getFirestore();
        const cartCollection = collection(database, 'cart');

        cart.forEach(async (servicio) => {
            await addDoc(cartCollection, servicio.item); // servicio.item contiene los datos que voy a utilizar
        });
    }

    // Calculo el precio total del carrito, sumando los precios de cada servicio multiplicados por su cantidad.
    const TotalCartPrice = cart.reduce((total, servicio) => {
        const precioString = servicio.item.precio.replace(/\D/g, '');// Elimino todos los caracteres que no son dígitos en firestore, ya que el tipo de dato en Firestore es un string con $
        const precio = parseInt(precioString);
        return total + (precio * servicio.quantity); //calculo en total con los datos ya convertidos al tipo número
    }, 0);

    //Muestro una lista de los servicios en el carrito, junto con su imagen, nombre, precio y cantidad de cada uno.
    return (
        <>
            <div>
                <ul className='cartPage'>
                    {/*función con parámetro 'servicio' */}
                    {cart.map((servicio) => {
                        {/*renderizo la información de cada servicio en una lista */}
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
                <div>
                    <h4>Total a Pagar: ${TotalCartPrice.toFixed(2)}</h4> {/*toFixed(2) es un método que se aplica a la contante TotalCartPrice para especificar cuántos dígitos decimales se deben mostrar */}
                    <Form handleSubmit={handleSubmit} />
                </div>
            </div>
        </>
    )

}
export default CartPage;