import carrito from '../assets/carrito.png'
import "../App.css"
import { useState } from 'react'

const CartWidget=()=>{
    
   /* const [contador, setContador] = useState(0);

    const incrementarContador = () => {
       setContador(contador => contador + 1);
    };*/
        
    return(
        <>
            <div className="carrito">
                <img src={carrito} alt="carrito de compras"className='carrito'/>
                <span>(5)</span>
            </div>
        </>
    );
}
export default CartWidget;