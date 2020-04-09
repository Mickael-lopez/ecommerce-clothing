import React from 'react';
import {Switch, Route} from 'react-router-dom';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInAndSignUpPage from './pages/signin-and-sign-up/signin-and-sign-up.component';
import {auth} from'./firebase/firebase.utils';

import Header from './components/header/header.component';


import './App.css';

class App extends React.Component{
    constructor() {
        super();
        
        this.state = {
            currentUser: null
        }
    }
    
    unsubscribeFromAuth = null
    
    componentDidMount() {
        this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
            this.setState({currentUser: user});
        })
    }

    componentWillUnmount() {
        this.unsubscribeFromAuth();
    }
    
    render() {
        return (
            <div className="container">
                <Header currentUser= {this.state.currentUser}/>
                <Switch>
                    <Route exact path='/' component={HomePage} />
                    <Route path='/shop' component={ShopPage} />
                    <Route path='/signin' component={SignInAndSignUpPage} />
                </Switch>
            </div>
        )
      };
}

export default App;
