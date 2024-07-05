import React, { useState } from 'react';
import { Link } from "react-router-dom";
import logoIcon from './logo4.jpg';
import './Navbar.css';
import cartIcon from './shopping-cart.png';
import homeImage from './home.jpg';
import hamburgerIcon from './hamburger.png';

function Navbar({ addToCartItem }) {
    const [menuVisible, setMenuVisible] = useState(false);

    const toggleMenu = () => {
        setMenuVisible(!menuVisible);
    };

    return (
        <nav>
            <span></span>
            <img src={homeImage} alt="" />
            <Link to='/'><img src={logoIcon} alt="" /></Link>
            <div className={`navItems snip1143 ${menuVisible ? 'visible' : ''}`}>
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
            <Link to='/add-to-cart' className='cartLink'>
                <img src={cartIcon} alt="" />
                <span>{addToCartItem}</span>
            </Link>
            <button className="hamburger" onClick={toggleMenu}>
                <img src={hamburgerIcon} alt="Menu" />
            </button>
        </nav >
    );
}

export default Navbar;
