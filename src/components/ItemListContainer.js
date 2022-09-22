

import './ItemListContainer.css';
import { useEffect , useState } from 'react';
import { ItemList } from './ItemList/ItemList';
import { useParams } from 'react-router-dom';
import { Loader } from './Loader/Loader';
import { collection , getDocs, query, where } from 'firebase/firestore';
import { db } from '../firebase/fireconfig';



export const ItemListContainer = () => {

    
    const [productos, setProductos] = useState ( [] )
    const [loading, setLoading ] = useState (true)

    const { categoriaId } = useParams()

    useEffect(()=>{
        setLoading(true)

        const productosFromFireBase = collection( db, 'productos' )

        const q = categoriaId
                    ? query ( productosFromFireBase, where ('categoria', '==', categoriaId) )
                    : productosFromFireBase

        getDocs(q)
            .then((firerespuesta)=>{
                const productosdb = firerespuesta.docs.map( (doc) => ({ id: doc.id, ...doc.data() }) ) 
                setProductos(productosdb)
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