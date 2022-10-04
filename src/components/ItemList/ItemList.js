import { Item } from '../Item/Item';


export const ItemList = ( {productos} = [] ) => {

    return(
        <div className='containerNovedades'>
            { productos.map ((prod) =>{
                return <Item producto={prod} key={prod.id} />

            }  ) }
        </div>
    )

}