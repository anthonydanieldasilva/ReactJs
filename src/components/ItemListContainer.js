

import './ItemListContainer.css';
import Card from 'react-bootstrap/Card';




export const ItemListContainer = ({greeting}) => {

    return(
        <div className='containerNovedades' >
            <Card>
                <Card.Body>
                    <p> {greeting} </p>
                    <p>Tenemos Stock renovado</p>
                </Card.Body>
            </Card>
        </div>
    )
}