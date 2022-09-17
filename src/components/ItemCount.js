
import Card from 'react-bootstrap/Card';

export const ItemCount = ( {max, counter, setCounter, handleAgregar} ) => {

    const restar = () => {
        if (counter > 0){
            setCounter(counter - 1)
        }
    }

    const sumar = () => {
        if (counter < max)
        setCounter(counter + 1)
    }
    

    return (

        <div>

            <Card>
                <Card.Body>

                <button 
                    className={ counter===0 ? "btn btn-outline-danger" : "btn btn-outline-primary"}
                    onClick={restar} 
                    disabled={ counter===0 }>

                    -

                </button>

                <samp> {counter} </samp>

                <button 
                    className={ counter===max ? "btn btn-outline-danger" : "btn btn-outline-primary" }
                    onClick={sumar}
                    disabled={ counter===max }>

                    +

                </button>

                <hr/>

                <button 
                    onClick={handleAgregar}
                    className="btn btn-success"
                    disabled={counter ===0}>

                    Añadir al Carro   

                </button>

                </Card.Body>
            </Card>

        </div>

    )

}