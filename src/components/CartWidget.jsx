import carrito from '../assets/carrito.png';
import { Link } from "react-router-dom";
import { useContext } from 'react';
import {CartContext} from '../context/cartContext';
import { useState } from 'react'

const CartWidget=()=>{
    
   /* const [contador, setContador] = useState(0);

    const incrementarContador = () => {
       setContador(contador => contador + 1);
    };*/
        
    return(
        <>
            <div className="carrito">
                <Link to={`/cart`} className="navbarLink">
                    <img src={carrito} alt="carrito de compras" />
                    <span>(5)</span>
                </Link>
            </div>
        </>
    );
}
export default CartWidget;