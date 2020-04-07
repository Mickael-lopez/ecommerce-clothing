import React from 'react';
import {Link} from 'react-router-dom';

import { ReactComponent as Logo} from '../../assets/logo.svg';
import './header.style.scss';

const Header = () => (
    <div className='header'>
        <Link className='logo_container' to='/'>
            <div><Logo className='logo'/></div>
        </Link>
        <nav className='options'>
            <Link className='option' to='/shop'>
                SHOP
            </Link>
            <Link className='option' to='/contact'>
                CONTACT
            </Link>
            <Link className='option' to='/signin'>
                SIGNIN
            </Link>
        </nav>
    </div>
);

export default Header;