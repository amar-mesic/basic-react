import logo from '../logo.svg'
import '../style/nav-style.css'

function NavBar() {
    return(
        <nav id="nav-bar">
            <img src={logo} className='logo-img'></img>
            <h1>My React Page</h1>
            <ul className='nav-items'>
                <li>Pricing</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </nav>
    )
}

export default NavBar;