import React, { Component } from 'react';
import { BrowserRouter as Route, Link } from 'react-router-dom';

import logo from './../assets/logo.png';
import firebase from 'firebase';
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import * as firebaseui from 'firebaseui';
import Dashboard from './Dashboard';

class Welcome extends Component {
    constructor() {
        super();
        this.state = {
            userId: ''
        };
    }

    handleUserInfo = (user) => {
        this.setState({
            userId: user
        });
    }
    
    render() {
        const {
            handleUserInfo,
            state: {
                userId
            }
        } = this;

        const uiConfig = {
            signInFlow: 'popup',
            signInOptions: [{
                provider: firebase.auth.GoogleAuthProvider.PROVIDER_ID,
                customParameters: {
                    prompt: 'select_account'
                }
            }
            ],
            signInSuccessUrl: '/',
            uiShown: function () {
                document.getElementById('loader').style.display = 'none';
            },
            queryParameterForSignInSuccessUrl: 'signInSuccessUrl',
            callbacks: {
                signInSuccessWithAuthResult: function (authResult, redirectUrl) {
                    const userId = authResult.user.uid;
                    handleUserInfo(userId);
                    window.location.assign(`/${userId}/dashboard`);
                    return false;
                }
            }
        };
        
        return (
            <div className='welcomeSplash'>
                <div className='wrapper'>
                    <img className='logo' src={logo}></img>
                    <div className='userLoginHome'>
                    <Link className='guestLoginButton' to='guest/dashboard'>guest login</Link>
                    <Link to='/signup'>Sign Up</Link>
                    <Link to='/signinpage'>Sign In</Link>
                    <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
                    <Route path={`/${userId}/dashboard`} component={Dashboard} />
                    </div>
                </div>
            </div>
        );
    }
}

export default Welcome;