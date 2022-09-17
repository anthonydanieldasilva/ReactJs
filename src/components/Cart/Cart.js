import { useContext } from "react"
import { CartContext } from "../context/CartContext"
import { HiTrash } from "react-icons/hi";
import { Link } from "react-router-dom";



export const Cart =()=>{

    const { cart, cartTotal, vaciarElCarro, RemoverItem} = useContext(CartContext)

    if (cart.length === 0){
        return(
            <div className="container my-4" >
            <h2>Tu carro esta vacio</h2>
            <hr/>
            <Link to='/' className="btn btn-primary">Ir a ver productos</Link>
        </div>
        )
    }

    return(
        <div className="container my-4">

            <h2>Tus productos:</h2>
            <hr/>
            {cart.map((item) => (
                <div key={item.id}>
                    <h3>{item.nombre}</h3>
                    <p>Precio:{item.precio}</p>
                    <p>Cantidad:{item.cantidad}</p>
                    <small>Presentacion: {item.presentacion}</small>
                    <hr />
                    <button onClick={() => RemoverItem(item.id)} className="btn btn-danger mx-2 "> <HiTrash /> </button>
                </div>
            ))}

            <h2>Total: ${cartTotal()} </h2>

            <button onClick={vaciarElCarro} className="btn btn-danger">Vaciar el carro</button>
  
        </div>
    )

}