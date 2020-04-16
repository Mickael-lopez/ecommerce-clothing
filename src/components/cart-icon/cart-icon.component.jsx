import React from 'react';
import {connect} from 'react-redux';

import { toggleCartHidden } from '../../redux/cart/cart-action.js';

import { ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg';

import './cart-icon.style.scss';

const CartIcon = ({toggleCartHidden}) => (
    <div className='cart_icon' onClick={toggleCartHidden}>
        <ShoppingIcon className='shopping_icon'/>
        <span className='item_count'>0</span>
    </div>
);

const mapDispatchToProps = dispatch => ({
   toggleCartHidden: () => dispatch(toggleCartHidden()) 
});

export default connect(null, mapDispatchToProps)(CartIcon);