
import React from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardTitle} from 'reactstrap';
import { Link } from 'react-router-dom'


export const Item = ({ producto }) => {

    return (
        <div>
            <Card inverse>
                <CardImg
                    src="https://picsum.photos/900/270?grayscale" style={{ height: "15rem", objectFit: "cover", }}
                />
                <CardImgOverlay>
                    <CardTitle>
                        <h1>{producto.nombre}</h1>
                        <h4>Stock Disponible :{producto.stock}</h4>
                    </CardTitle>
                    <CardText>
                        <p>Precio:{producto.precio} </p>
                    </CardText>
                    <CardText>
                        <small className="text-muted">
                            <p>{producto.desc}</p>
                        </small>
                    </CardText>

                    <Link to={`/item/${producto.id}`} className="btn btn-secondary btn-lg btn-block">Ver más</Link>

                </CardImgOverlay>
            </Card>
        </div>
    )
}
