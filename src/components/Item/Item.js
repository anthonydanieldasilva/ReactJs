

import { Link } from 'react-router-dom';
import './item.css';


export const Item = ({ producto }) => {

    return (

        <div className='card'>

        <img  className='imagen' src={producto.img}/>
        
        <h4>{producto.nombre}</h4>
        <p className='estilprecio'>Precio: ${producto.precio}</p>
        <small className='estilostock'>Stock disponible: {producto.stock}</small>
        <hr/>
        <p>{producto.desc}</p>

        {
            producto.stock > 0
                ? <Link to={`/item/${producto.id}`} className="btn btn-secondary btn-lg btn-block">Ver más</Link>
                :   <>
                    <h4>!Sin Stock!</h4>
                    <button className='btn btn-info'>¿Querès recibir un aviso? </button>
                    </> 
        }
        
        </div>
    )
}
