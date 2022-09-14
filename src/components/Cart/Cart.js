import { useContext } from "react"
import { CartContext } from "../context/CartContext"



export const Cart =()=>{

    const { cart } = useContext(CartContext)

    return(
        <div>
            <h2>Tus productos:</h2>
            <hr/>
            { cart.map((item) => (
                <div key={item.id}>
                    <h3>{item.nombre}</h3>
                    <p>Precio: {item.precio}</p>
                    <p>Cantidad: {item.stock}</p>
                    <small>Presentacion: {item.presentacion}</small>
                    <hr/>
                </div>
            ))}

        </div>
    )

}