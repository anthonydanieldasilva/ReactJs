
import { createContext, useState } from "react";
import Swal from 'sweetalert2'


export const CartContext = createContext()

export const CartProvider = ( {children} ) => {

    const [ cart, setCart ] = useState([])

    const agregarAlcarro = (item)=>{
      setCart ([...cart, item])
    }

    const RemoverItem =(id)=>{
        setCart( cart.filter((item)=> item.id !== id ))
    }
  
    const isincart =(id)=>{
      return cart.some((item)=> item.id === id )
    }
  
    const cartQuantity =()=>{
      return cart.reduce((acc, item)=>acc+item.cantidad, 0)
    }

    const cartTotal =()=>{
        return cart.reduce((acc, item)=>acc+item.cantidad * item.precio, 0)
    }

    const vaciarElCarro =()=>{
        Swal.fire({
            title: '¿Estas seguro?',
            text: "!remover item de tu compra!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: '!Si!'
          }).then((result) => {
            if (result.isConfirmed) {
                setCart([])
            }
          })
        
    }

    return(
        <CartContext.Provider value={{
            cart,
            agregarAlcarro,
            isincart,
            cartQuantity,
            cartTotal,
            vaciarElCarro,
            RemoverItem
            }} >
                {children}
        </CartContext.Provider>
    )



}