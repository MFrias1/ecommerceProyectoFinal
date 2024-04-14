import { useContext} from 'react';
import carrito from '../assets/carrito.png';
import { Link } from "react-router-dom";
import { CartContext } from '../context/cartContext';

const CartWidget=()=>{
    const{cart}=useContext(CartContext);
    const TotalServicios= cart.reduce((acumulador, item)=>
       acumulador + item.quantity, 0
    )
    
   /* const [contador, setContador] = useState(0);

    const incrementarContador = () => {
       setContador(contador => contador + 1);
    };*/
        
    return(
        <>
            <div className="carrito">
                <Link to={`/cart`} className="navbarLink">
                    <img src={carrito} alt="carrito de compras" />
                    <span>{TotalServicios}</span>
                </Link>
            </div>
        </>
    );
}
export default CartWidget;