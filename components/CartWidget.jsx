import carrito from '../src/assets/carrito.png'
const CartWidget=()=>{
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