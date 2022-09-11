import { useState } from "react"
import { ItemCount } from "../ItemCount"
import { Select } from "../Select/Select"


export const ItemDetail = ({item}) => {

    const [ cantidad, setCantidad ] = useState (1)
    const [presentacion, setPresentacion] = useState ( item.presentacion[0].value )

    const handleAgregar = () =>{
        const itemEnviadoAcarro = {
            id: item.id,
            precio: item.precio,
            nombre: item.nombre,
            presentacion,
            cantidad
        }

        console.log(itemEnviadoAcarro)
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

            <ItemCount 
            max={item.stock}
            counter={cantidad}
            setCounter={setCantidad}
            handleAgregar={handleAgregar}
            />

        </div>
    )
}