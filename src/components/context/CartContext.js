
import { createContext, useState } from "react";


export const CartContext = createContext()

export const CartProvider = ( {children} ) => {

    const [ cart, setCart ] = useState([])

    const agregarAlcarro = (item)=>{
      setCart ([...cart, item])
    }
  
    const isincart =(id)=>{
      return cart.some((item)=> item.id === id )
    }
  
    const cartQuantity =()=>{
      return cart.reduce((acc, item)=>acc+item.cantidad, 0)
    }
  
     

    return(
        <CartContext.Provider value={{
            cart,
            agregarAlcarro,
            isincart,
            cartQuantity
            }} >
                {children}
        </CartContext.Provider>
    )



}