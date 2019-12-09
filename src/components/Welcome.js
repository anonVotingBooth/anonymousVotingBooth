import React, { Component } from 'react';
import { BrowserRouter as Route, Link, Redirect } from 'react-router-dom';

import logo from './../assets/logo.png';
import firebase from 'firebase';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import * as firebaseui from 'firebaseui';
import Dashboard from './Dashboard';
import 'firebase/auth';

const uiConfig = {
    signInFlow: 'popup',
    signInOptions: [
        firebase.auth.GoogleAuthProvider.PROVIDER_ID
    ]
};

class Welcome extends Component {

    componentDidMount() {

        const {getAuthentication} = this.props;

        firebase.auth().onAuthStateChanged(user => {
            firebase.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION)
            .then(function () {
                if (user) {
                    getAuthentication(user);
                }
                return true;
            })
        })
    }
    
    render() {
        return (
            this.props.loggedIn === false ? (
                <div className='welcomeSplash'>
                    <div className='wrapper'>
                        <img className='logo' src={logo}></img>
                        <div className='userLoginHome'>
                        <Link className='guestLoginButton' to='guest/dashboard'>guest login</Link>
                        <Link to='/signup'>Sign Up</Link>
                        <Link to='/signinpage'>Sign In</Link>
                        <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
                        </div>
                    </div>
                </div>
            ) : <Redirect to='/user/dashboard' /> );
    }
}

export default Welcome;