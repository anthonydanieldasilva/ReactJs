
import Card from 'react-bootstrap/Card';



const ItemList = ( {productos} = [] ) => {

    return(
        <div className='containerNovedades' >
            <Card>
                <Card.Body>
                    <h2>Productos</h2>

                    { productos.map ((prod) =>{
                        return <div key={prod.id}>
                            <h4>{ prod.nombre }</h4>
                            <p>Precio:{prod.precio} </p>

                        </div>

                    }  ) }
                </Card.Body>
            </Card>
        </div>
    )

}