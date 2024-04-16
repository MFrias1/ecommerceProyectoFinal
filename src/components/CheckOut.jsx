import { useContext } from "react";
import { CartContext } from "../context/cartContext";

const CheckOut = () => {
    const { cart } = useContext(CartContext);

    return (
        <>  
            <section className="CheckOut">
                <div className="datosServicosCheckOut_form">
                    <form className="formCheckOut">
                        <p>Llena el siguiente formulario y te contactaremos</p>
                        <div>
                            <div>
                                <label><b>Nombre Completo</b></label>
                            </div>
                            <input className="inputForm" type="text" name="name" required />
                        </div>
                        <div>
                            <div>
                                <label><b>Correo Electrónico</b></label>
                            </div>
                            <input className="inputForm" type="email" name="email" required />
                        </div>
                        <div>
                            <div>
                                <label><b>Número de Teléfono</b></label>
                            </div>
                            <input className="inputForm" type="text" name="telefono" required />
                        </div>
                        <div>
                            <button type="submit">Enviar</button>
                        </div>
                    </form>
                </div>
                <div className="datosServicosCheckOut">
                    <p>Información de los servicios <br/>que vas a adquirir</p>
                    {cart.map((servicio) => {
                        // Convertir precio a número
                        const precioString = servicio.item.precio.replace(/\D/g, ''); // Elimino todos los caracteres que no son dígitos
                        const precio = parseInt(precioString);
                        const TotalCartPrice = parseInt(precio * servicio.quantity);
                        return (
                            <div className="serviciosCheckOut_item">
                                <p>Precio total por servicio: ${TotalCartPrice.toFixed(2)}</p>
                                <p>{servicio.item.nombre}</p>
                            </div>
                        )
                    })}
                </div>
            </section>
        </>
    );
}
export default CheckOut;