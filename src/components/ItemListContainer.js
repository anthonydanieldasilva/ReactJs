

import './ItemListContainer.css';
import { useEffect , useState } from 'react';
import { pedirDatos } from '../helpers/pedirDatos';
import { ItemList } from '../ItemList/ItemList';



export const ItemListContainer = () => {

    const [productos, setProductos] = useState ( [] )

    useEffect(()=>{

        pedirDatos ()
            .then((res) =>{
            setProductos(res)
        })
        .catch((error) =>{
            console.log(error)
        })
        .finally(()=>{
            console.log("fin del proceso")
        })

    }, [] )

    return (
        <div>
            < ItemList productos={productos} /> 
        </div>
    )
}
