import React, { Component } from 'react';
import { BrowserRouter as Route, Link } from 'react-router-dom';

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
    // constructor() {
    //     super();
    //     this.state = {
    //         userId: ''
    //     };
    // }

    // handleUserInfo = (user) => {
    //     this.setState({
    //         userId: user
    //     });
    // }

    componentDidMount() {
        const {getAuthentication} = this.props;
        firebase.auth().onAuthStateChanged(user => {
            firebase.auth().setPersistence(firebase.auth.Auth.Persistence.NONE)
            .then(function () {
                if (user) {
                    const userCredentials = {
                        displayName: user.displayName,
                        userId: user.uid
                    }
                    getAuthentication(userCredentials);
                    window.location.assign('/user/dashboard');
                }
                return true;
            })
        })
    }
    
    render() {
        // const {
        //     handleUserInfo,
        //     state: {
        //         userId
        //     }
        // } = this;

            // signInSuccessUrl: '/user/dashboard',
            // uiShown: function () {
            //     document.getElementById('loader').style.display = 'none';
            // },
            // queryParameterForSignInSuccessUrl: 'signInSuccessUrl',
            // callbacks: {
            //     signInSuccessWithAuthResult: function (authResult, redirectUrl) {
            //         return true;
            //     }
            // }
        // };
        
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