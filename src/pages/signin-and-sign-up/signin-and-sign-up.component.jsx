import React from 'react';

import SignIn from '../../components/sign-in/sign-in.component';
import SignUp from '../../components/sign-up/sign-up.component';
import './signin-and-sign-up.style.scss';

const SignInAndSignUpPage = () => (
    <div className="sign_in_and_sign_up">
        <SignIn />
        <SignUp />
    </div>
    
);

export default SignInAndSignUpPage;