import './NavBar.css'
import { CartWidget } from './CartWidget'
import Button from 'react-bootstrap/Button';


export const NavBar = () => {
    return(
        <div className="headerContainer">
            <div className="headerLogo" >
                <h1>LOGO</h1>
            </div>
            <nav className="navLinksContainers" >
                <Button variant="dark m-2">Alineaciòn</Button>
                <Button variant="dark m-2">Balanceo</Button>
                <Button variant="dark m-2">Reparaciones</Button>
                <Button variant="primary m-2">Login</Button>
                <CartWidget />
            </nav>

        </div>
    )
}