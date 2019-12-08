import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import logo from './../assets/logo.png';
import firebase from 'firebase';
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import * as firebaseui from 'firebaseui';

const uiConfig = {
    signInFlow: "popup",
    signInOptions: [{
        provider: firebase.auth.GoogleAuthProvider.PROVIDER_ID,
        customParameters: {
            prompt: 'select_account'
        }
    }
    ],
    signInSuccessUrl: '/dashboard',
    uiShown: function () {
        document.getElementById('loader').style.display = 'none';
    },
    queryParameterForSignInSuccessUrl: 'signInSuccessUrl',
    callbacks: {
        signInSuccessWithAuthResult: function (authResult, redirectUrl) {
            return true;
        }
    }
};

class Welcome extends Component {
    render() {
        return (
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
        );
    }
}

export default Welcome;