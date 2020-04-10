import React from 'react';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component.jsx';

import {auth, createUserProfileDocument} from '../../firebase/firebase.utils.js';

import './sign-up.style.scss';

class SignUp extends React.Component {
    constructor() {
        super();
        
        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        }
    }
    
    handleSubmit = async event => {
        event.preventDefault();
        
        const {displayName,email,password,confirmPassword} = this.state;
        
        if(password !== confirmPassword) {
            alert("passwords don't match");
            return;
        }
        if(password.length < 6) {
            alert("Your password need a least 6 characters");
            return;
        }
        
        try {
            const {user} = await auth.createUserWithEmailAndPassword(email, password);
            
            await createUserProfileDocument(user, {displayName});
            
                this.setState({
                displayName: '',
                email: '',
                password: '',
                confirmPassword: '' 
            });
        } catch (error) {
            console.error(error);
        }
    }
    
    handleChange = event => {
        const {name, value} = event.target;
        
        this.setState({[name]: value});
    }
    
    render() {
        const {displayName,email,password,confirmPassword} = this.state;
        return(
            <div className='sign_up'>
                <h2 className='title'>I do not have a account</h2>
                <span>Sign up with your email and password</span>
                <form className='sign_up_form' onSubmit={this.handleSubmit}>
                    <FormInput
                        type='text'
                        name='displayName'
                        value={displayName}
                        onChange={this.handleChange}
                        label= 'Name'
                        required
                    />
                    <FormInput
                        type='email'
                        name='email'
                        value={email}
                        onChange={this.handleChange}
                        label= 'Email'
                        required
                    />
                    <FormInput
                        type='password'
                        name='password'
                        value={password}
                        onChange={this.handleChange}
                        label= 'Password'
                        required
                    />
                    <FormInput
                        type='password'
                        name='confirmPassword'
                        value={confirmPassword}
                        onChange={this.handleChange}
                        label= 'Confirm Password'
                        required
                    />
                    <CustomButton type='submit'>SIGN UP</CustomButton>
                </form>
            </div>
        )
    }
}

export default SignUp;