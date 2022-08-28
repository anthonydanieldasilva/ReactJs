import './ItemCounts.css';
import Card from 'react-bootstrap/Card';
import { useState } from "react"

export const ItemCount = ( {stock} ) => {

    const [counter , setCounter ] = useState (0)
    const [agregar , setAgregar ] = useState (true)


    const sumar = () => {
        if(counter < stock )
        setCounter(counter + 1)
    }

    const restar = () => {
        if (counter > 0){
            setCounter(counter - 1)
        }
    }

    const incluiralstock = () => {
        if (agregar){
            setAgregar (true)
        }else {
            setAgregar (false)
        }
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
                <button onClick={incluiralstock} className="btn btn-success"> { agregar ? "Agregar al Carro" : "Sin Stock" } </button>
                </Card.Body>
            </Card>

        </div>

    )

}