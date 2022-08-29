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
                <Button variant="dark m-2">LINK1</Button>
                <Button variant="dark m-2">LINK2</Button>
                <Button variant="dark m-2">LINK3</Button>
                <Button variant="primary m-2">Login</Button>
                <CartWidget />
            </nav>

        </div>
    )
}