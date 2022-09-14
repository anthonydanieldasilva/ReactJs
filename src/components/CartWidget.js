import './CartWidget.css'
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Link } from 'react-router-dom'
import { useContext } from 'react';
import { CartContext } from './context/CartContext';



export const CartWidget = () => {

    const {cartQuantity}=useContext(CartContext)




    return (
        <Link to="/cart">
            <div className='carroDeCompras'>

                <AiOutlineShoppingCart size='3rem' />

                <span> {cartQuantity()} </span>
            </div>
        </Link>
    )
}
