
import Card from 'react-bootstrap/Card';

export const ItemCount = ( {max, counter, setCounter, handleAgregar} ) => {


    const sumar = () => {
        if (counter < max)
        setCounter(counter + 1)
    }

    const restar = () => {
        if (counter > 0){
            setCounter(counter - 1)
        }
    }

    return (

        <div>

            <Card>
                <Card.Body>
                <button onClick={restar} className="btn btn-primary">-</button>
                    <samp> {counter} </samp>
                <button onClick={sumar} className="btn btn-primary">+</button>

                <hr/>

                <button  onClick={handleAgregar} className="btn btn-success">Añadir al Carro</button>
                </Card.Body>
            </Card>

        </div>

    )

}