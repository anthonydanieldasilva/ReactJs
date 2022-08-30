
import Card from 'react-bootstrap/Card';
import { Item } from '../Item/Item';


export const ItemList = ( {productos} = [] ) => {

    return(
        <div className='containerNovedades' >
            <Card>
                <Card.Body>
                    <h2>Productos</h2>

                    { productos.map ((prod) =>{
                        return <Item producto={prod} key={prod.id} />

                    }  ) }
                </Card.Body>
            </Card>
        </div> 
    )

}