import './NavBar.css'
import { CartWidget } from './CartWidget'
import { Link } from 'react-router-dom'


export const NavBar = () => {
    return (
        <div className="headerContainer">
            <div className="headerLogo" >
                <Link to='/'><h2>Yerba Mate Oberà</h2></Link>
            </div>
            <nav className="navLinksContainers" >

                <Link to='/productos/canchada' className='btn btn-secondary btn-lg me-md-2'>Cancháda</Link>
                <Link to='/productos/natural' className='btn btn-secondary btn-lg me-md-2'>Natural</Link>
                <Link to='/productos/barbacua' className='btn btn-secondary btn-lg me-md-2'>Barbacuá</Link>

                <CartWidget/>  
            </nav>

        </div>
    )
}