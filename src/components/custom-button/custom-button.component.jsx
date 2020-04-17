import React from 'react';

import './custom-button.style.scss';

const CustomButton = ({
    children, 
    inverted, 
    isGoogleSignIn, 
    ...otherProps
}) => (
    <button className={`${inverted ? 'inverted' : ''} ${isGoogleSignIn ? 'google_sign_in' : ''} custom_button`} {...otherProps} >
        {children}
    </button>
);

export default CustomButton;