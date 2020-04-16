import React from 'react';

import CustomButton from '../custom-button/custom-button.component';

import './cart-dropdown.style.scss';

const CartDropdown = () => (
    <div className='cart_dropdown'>
        <div className='cart_items'></div>
        <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
);

export default CartDropdown;