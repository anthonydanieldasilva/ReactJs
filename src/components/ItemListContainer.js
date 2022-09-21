

//import { pedirDatos } from '../helpers/pedirDatos';
import './ItemListContainer.css';
import { useEffect , useState } from 'react';
import { ItemList } from './ItemList/ItemList';
import { useParams } from 'react-router-dom';
import { Loader } from './Loader/Loader';
import { collection , getDocs} from 'firebase/firestore';
import { db } from '../firebase/fireconfig';



export const ItemListContainer = () => {

    
    const [productos, setProductos] = useState ( [] )
    const [loading, setLoading ] = useState (true)

    const { categoriaId } = useParams()

    useEffect(()=>{
        setLoading(true)
        const productosFromFireBase = collection( db, 'productos' )

        getDocs(productosFromFireBase)
            .then((firerespuesta)=>{
                const productosdb = firerespuesta.docs.map( (doc) => ({ id: doc.id, ...doc.data() }) ) 
                setProductos(productosdb)
            })
            .finally(()=>{
                setLoading(false)
            })



        /*pedirDatos ()
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
        })*/

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