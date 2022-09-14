import { useContext, useState } from "react"
import { Link } from "react-router-dom"
import { CartContext } from "../context/CartContext"
import { ItemCount } from "../ItemCount"
import { Select } from "../Select/Select"


export const ItemDetail = ({item}) => {
    
    const {cart, agregarAlcarro, isincart} = useContext(CartContext)

    console.log(cart)

    const [cantidad, setCantidad] = useState (1)
    const [presentacion, setPresentacion] = useState ( item.presentacion[0].value )

    const handleAgregar = () =>{
        const itemEnviadoAlcarro = {
            id: item.id,
            precio: item.precio,
            nombre: item.nombre,
            presentacion,
            cantidad
        }

        agregarAlcarro(itemEnviadoAlcarro)
    }

    return (
        <div className="container my-5">
            <img src={item.img}/>
            <h3>{item.nombre}</h3>
            <p>{item.desc}</p>
            <p>{item.category}</p>
            <h4>Precio:${item.precio}</h4>
            <hr/>

            <Select
            options={item.presentacion} 
            onSelect={setPresentacion}
            />

            <hr/>

            {
                isincart(item.id)
                
                    ? <Link to='/Cart' className="btn btn-success my-2"> Terminar mi compra </Link>
                    : <ItemCount
                        max={item.stock}
                        counter={cantidad}
                        setCounter={setCantidad}
                        handleAgregar={handleAgregar}
                    />
            }


        </div>
    )
}