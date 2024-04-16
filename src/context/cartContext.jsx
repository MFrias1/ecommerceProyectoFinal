import { update } from "firebase/database";
import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({children})=>{
    /*seteo mi valor inicial en el carrito como un arreglo vacio*/
    const [cart, setCart] =useState([])

    /*agrego al carrito el servicio seleccionado*/
    const addItem =(item, quantity)=>{
        if (isInCart(item.id)){
            const updateCart=cart.map((cartItem)=>{
                if (cartItem.item.id === item.id){
                    return{...cartItem,quantity : cartItem.quantity + quantity}
                }else {
                    return cartItem
                  }
            })
            /*si existe algo previo a agregar un servicio, guarda todo incluyendo el servicio nuevo */
            setCart(updateCart)
        }
        else{
            /*si no tiene nada previo a agregar un servicio al carrito, lo guarda solo */
            setCart([...cart, { item, quantity }])
        }
    }
    
     /*elimino del carrito el servicio seleccionado*/
    const removeItem = (itemId, quantityToRemove) => {
        const UpdateCart= cart.map((cartItem)=>{
            if(cartItem.item.id === itemId){
                const newQuantity = cartItem.quantity - quantityToRemove
                return{
                    ...cartItem, quantity: newQuantity
                }
            }
            return cartItem
        }).filter((cartItem)=> cartItem.quantity > 0)
        setCart(UpdateCart)
    }
    
    /*Elimino todos los servicios del carrito */
    const clear = () => {
        setCart([])
    }
    
    const isInCart = (id) => {
        return cart.some((itemCart)=> itemCart.item.id === id)
    }

    return(
        <CartContext.Provider value={{ cart, addItem, setCart, removeItem , clear}}>
            {children}
        </CartContext.Provider>
    )
}
