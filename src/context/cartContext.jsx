import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({children})=>{
    /*seteo mi valor en el carrito */
    const [cart, setCart]=useState([])

    /*agrego al carrito el servicio seleccionado*/
    const addItem =(item, quantity)=>{
        if (cart.lenght>0){
            /*si tiene algo previo a agregar un servicios, guarda todo incluyendo el servicio nuevo */
            setCart([...cart, { item, quantity }])
        }
        else{
            /*si no tiene nada previo a agregar un servicio al carrito, lo guarda solo */
            setCart(item, quantity)
        }
    }
     /*elimino del carrito el servicio seleccionado*/
    const removeItem = (itemId, quantityToRemove) => {
        
    }
    
    /*Elimino todos los servicios del carrito */
    const clear = () => {
        setCart([])
    }
    
    const isInCart = (id) => {
        
    }

    return(
        <CartContext.Provider value={{ cart, addItem, setCart, removeItem }}>
            {children}
        </CartContext.Provider>
    )
}
