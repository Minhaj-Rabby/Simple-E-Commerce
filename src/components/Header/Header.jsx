import React from 'react';
import './Header.css';
import logo from '../../images/logo.svg';
import { Link } from 'react-router-dom';
const Header = () => {
    return (
        <nav className='header'>
            <img src={logo} alt="logo" />
            <div>
                <Link to="/">Shop</Link>
                <Link to="/orders">Order</Link>
                <Link to="/inventory">Inventory</Link>
                <Link to="login">LogIn</Link>

            </div>

        </nav>
    )
}

export default Header