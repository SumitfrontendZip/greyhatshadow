import { Link } from "react-router-dom";
import logoIcon from './logo4.jpg';
import './Navbar.css';
import cartIcon from './shopping-cart.png';
import homeImage from './home.jpg';

function Navbar() {

    return (
        <nav>
            <span></span>
            <img src={homeImage} alt="" />
            <Link to='/'><img src={logoIcon} alt="" /></Link>
            <div className="navItems snip1143">
                <Link to='/' >
                    <span data-hover='Home'>HOME</span>
                </Link>
                <Link to='/shop'  >
                    <span data-hover='Shop'>SHOP</span>
                </Link>
                <Link to='/softwares'  >
                    <span data-hover='SOFTWARES'>SOFTWARES</span>
                </Link>
                <Link to='/login'  >
                    <span data-hover='LOGIN'>LOGIN</span>
                </Link>
                <Link to='/register' >
                    <span data-hover='REGISTER'>REGISTER</span>
                </Link>
            </div>
            <Link to='/'>
                <img src={cartIcon} alt="" />
                <span>0</span>
            </Link>
        </nav>
    );
}

export default Navbar;
