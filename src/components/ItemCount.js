import './ItemCounts.css';
import Card from 'react-bootstrap/Card';
import { useState } from "react"

export const ItemCount = ( {stock} ) => {

    const [counter , setCounter ] = useState (0)


    const sumar = () => {
        if(counter < stock )
        setCounter(counter + 1)
    }

    const restar = () => {
        if (counter > 0){
            setCounter(counter - 1)
        }
    }

    const añadirAlCarro =() => {

        console.log("Producto añadido al carro - cantidad :" , counter)

    }


    return (

        <div className='containerContador' >

            <Card>
                <Card.Body>
                <h4>Contador</h4>
                <hr/>
                <button onClick={restar} className="btn btn-primary">-</button>
                    <samp> {counter} </samp>
                <button onClick={sumar} className="btn btn-primary">+</button>
                <hr/>
                <button className="btn btn-success" disabled= {stock <= 0} onClick={añadirAlCarro}>Añadir al Carro</button>
                </Card.Body>
            </Card>

        </div>

    )

}