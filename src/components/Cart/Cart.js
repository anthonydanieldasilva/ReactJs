import { useContext } from "react"
import { CartContext } from "../context/CartContext"
import { HiTrash } from "react-icons/hi";



export const Cart =()=>{

    const { cart, cartTotal, vaciarElCarro, RemoverItem} = useContext(CartContext)

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
                    <button onClick={()=>RemoverItem (item.id) } className="btn btn-danger mx-2 "> <HiTrash/> </button>

                </div>
            ))}

            <h2>Total: ${cartTotal()} </h2>

            <button onClick={vaciarElCarro} className="btn btn-danger">Vaciar el carro</button>

        </div>
    )

}