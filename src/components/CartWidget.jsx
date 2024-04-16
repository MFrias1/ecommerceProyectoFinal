import { useContext} from 'react';
import carrito from '../assets/carrito.png';
import { Link } from "react-router-dom";
import { CartContext } from '../context/cartContext';

/* Carrito de Compras en Navbar */
const CartWidget=()=>{
    const{cart}=useContext(CartContext); //Accedo al contexto del carrito
    const TotalServicios= cart.reduce((acumulador, item)=> //Calculo el total de los servicios en el carrito
       acumulador + item.quantity, 0
    )
     
    return(
        <>
            <div className="carrito">
                <Link to={`/cart`} className="navbarLink"> {/*Link redirige a la página a CartPage cuando se hace clic en la img del carrito.*/}
                    <img src={carrito} alt="carrito de compras" />
                    <span>{TotalServicios}</span> {/* coloco en la img del carrito (en el navbar) solo el total de la cantidad de servicios a comprar */}
                </Link>
            </div>
        </>
    );
}
export default CartWidget;