import React from 'react';

import './custom-button.style.scss';

const CustomButton = ({children, isGoogleSignIn, ...otherProps}) => (
    <button className={`${isGoogleSignIn ? 'google_sign_in' : ''} custom_button`} {...otherProps} >
        {children}
    </button>
);

export default CustomButton;