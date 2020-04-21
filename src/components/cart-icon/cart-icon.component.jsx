import React from 'react';
import {connect} from 'react-redux';

import { toggleCartHidden } from '../../redux/cart/cart-action.js';
import {selectCartItemsCount} from '../../redux/cart/cart-selectors.js';

import { ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg';

import './cart-icon.style.scss';

const CartIcon = ({toggleCartHidden, itemCount}) => (
    <div className='cart_icon' onClick={toggleCartHidden}>
        <ShoppingIcon className='shopping_icon'/>
        <span className='item_count'>{itemCount}</span>
    </div>
);

const mapDispatchToProps = dispatch => ({
   toggleCartHidden: () => dispatch(toggleCartHidden()) 
});

const mapStateToProps = (state) => ({
   itemCount: selectCartItemsCount(state)
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);