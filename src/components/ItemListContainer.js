

import './ItemListContainer.css';
import { useEffect , useState } from 'react';
import { pedirDatos } from '../helpers/pedirDatos';
import { ItemList } from './ItemList/ItemList';
import { useParams } from 'react-router-dom';
import { Loader } from './Loader/Loader';


export const ItemListContainer = () => {

    
    const [productos, setProductos] = useState ( [] )
    const [loading, setLoading ] = useState (true)

    const { categoriaId } = useParams()

    useEffect(()=>{
        setLoading(true)

        pedirDatos ()
            .then((res) =>{
                if (!categoriaId){
                    setProductos(res)
                } else{
                    setProductos( res.filter ((prod) => prod.categoria === categoriaId))
                }
            })
            .catch((error) =>{
            console.log(error)
            })
            .finally(()=>{
            setLoading(false)
        })

    }, [categoriaId] )

    return (
        <div>
            {
                loading
                ? <Loader/>
                : < ItemList productos={productos} />

            }
        </div>
    )
}