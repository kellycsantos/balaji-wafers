import './navbar.scss'
import logo from '../../assets/balaji-logo.png'


export default function Navbar(){
    return(
        <nav>
            <img src={logo} alt="Balaji Wafers"/>
  

            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Services</a></li>
            </ul>
        </nav>
    )
}