import './NavBar.css'
import { CartWidget } from './CartWidget'
import { Link } from 'react-router-dom'


export const NavBar = () => {
    return (
        <div className="headerContainer">
            <div className="headerLogo" >
                <Link to='/'><h2>LOGO</h2></Link>
            </div>
            <nav className="navLinksContainers" >
                <Link to='/productos/viandas' className='btn btn-dark btn-lg'>Viandas</Link>
                <Link to='/productos/pastas' className='btn btn-dark btn-lg'>Pastas</Link>
                <Link to='/productos/panificados' className='btn btn-dark btn-lg'>Panificados</Link>

                <CartWidget/>  
            </nav>

        </div>
    )
}