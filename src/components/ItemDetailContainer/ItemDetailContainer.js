import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { pedirDatos } from "../../helpers/pedirDatos"
import { ItemDetail } from "../ItemDetail/ItemDetail"



export const ItemDetailContainer = () =>{

    const [item, setItem] = useState (null)

    const [loading, setLoading] = useState (true)

    const {itemId} = useParams()

    useEffect(()=>{
        setLoading(true)

        pedirDatos()
            .then((resp)=>{
                setItem( resp.find( (productos) => productos.id === Number(itemId) ) )
            })
            .catch( error => console.log(error))
            .finally(()=> {
                setLoading(false)
            })

    }, [] )

    return(
        <div>
            {
                loading
                ? <h2>loading ...</h2>
                : <ItemDetail item={item}/>
            }
        </div>

    )


}