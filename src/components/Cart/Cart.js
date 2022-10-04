import { useContext } from "react"
import { CartContext } from "../context/CartContext"
import { HiTrash } from "react-icons/hi";
import { Link , } from "react-router-dom";



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

            <h2>Tus productos seleccionados :</h2>
            <hr/>
            {cart.map((item) => (
                <div key={item.id}>
                    <h3>{item.nombre}</h3>
                    <p>Precio:{item.precio}</p>
                    <p>Cantidad:{item.cantidad}</p>
                    <button onClick={() => RemoverItem(item.id)} className="btn btn-danger btn-sm"> <HiTrash/> Quitar {item.nombre}</button>
                    <hr/>
                </div>
            ))}

            <h2>Total: ${cartTotal()} </h2>
            <hr/>
            <button onClick={vaciarElCarro} className="btn btn-danger btn-lg">Vaciar Carro</button>
            <Link className="btn btn-success btn-lg mx-3" to="/Checkout">Finalizar Compra</Link>
  
        </div>
    )

}