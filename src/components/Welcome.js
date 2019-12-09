import React, { Component } from 'react';
import { BrowserRouter as Link } from 'react-router-dom';

import logo from './../assets/logo.png';
import firebase from 'firebase';
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import * as firebaseui from 'firebaseui';


class Welcome extends Component {
    constructor() {
        super();
        this.state = {
            userId: ''
        };
    }

    handleUserInfo = (user) => {
        this.setState({
            userId: user.uid
        });
    }
    
    render() {
        const {handleUserInfo} = this;

        const uiConfig = {
            signInFlow: "popup",
            signInOptions: [
                {
                    provider: firebase.auth.GoogleAuthProvider.PROVIDER_ID,
                    customParameters: {
                        prompt: 'select_account'
                    },
                },
                firebaseui.auth.AnonymousAuthProvider.PROVIDER_ID,
            ],
            
            signInSuccessUrl: `/${this.state.userInfo}/dashboard`,
            uiShown: function () {
                document.getElementById('loader').style.display = 'none';
            },
            queryParameterForSignInSuccessUrl: 'signInSuccessUrl',
            callbacks: {
                signInSuccessWithAuthResult: function (authResult, redirectUrl) {
                    firebase.auth().onAuthStateChanged(function (user) {
                        if (user) {
                            handleUserInfo(user);
                        }
                    });
                    return true;
                }
            }
        };
        
        return (
            <div>
                <div className='welcomeSplash'>
                    <div className='wrapper'>
                        <img className='logo' src={logo}></img>
                        <div className='userLoginHome'>
                        {/* 
                        Commented this out as we don't need anymore, but left it just in case we change routes later. Delete before submitting project. -Jasmine
                        <Link className='guestLoginButton' to='guest/dashboard'>guest login</Link>
                        <Link to='/signup'>Sign Up</Link>
                    <Link to='/signinpage'>Sign In</Link> */}
                        <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
                        </div>
                    </div>
                </div>
                
            </div>
        );
    }
}

export default Welcome;