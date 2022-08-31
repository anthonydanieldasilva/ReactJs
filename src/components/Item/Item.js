
import React from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardTitle, Button  } from 'reactstrap';


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
                    <Button color="success" >
                        Ver Detalle
                    </Button>
                </CardImgOverlay>
            </Card>
        </div>
    )
}
