import React from 'react';
import {Link} from 'react-router-dom';

import {auth} from '../../firebase/firebase.utils';

import { ReactComponent as Logo} from '../../assets/logo.svg';
import './header.style.scss';

const Header = ({currentUser}) => (
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
            {
            currentUser ?
            <div className='option' onClick={()=> auth.signOut()}>SIGN OUT</div>
            :
            <Link className='option' to='/signin'>
                SIGN IN
            </Link>
            }
        </nav>
    </div>
);

export default Header;