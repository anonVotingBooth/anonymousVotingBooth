import React, { Component } from 'react';
import { BrowserRouter as Link, Redirect } from 'react-router-dom';
import logo from './../assets/logo.svg';
import firebase from 'firebase';
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import * as firebaseui from 'firebaseui';
import Dashboard from './Dashboard';
import 'firebase/auth';
import AnimatedBackground from './AnimatedBackground';

const uiConfig = {
    signInFlow: 'popup',
    signInOptions: [
        {
            provider: firebase.auth.GoogleAuthProvider.PROVIDER_ID,
            customParameters: {
                prompt: 'select_account'
            },
        },
        firebaseui.auth.AnonymousAuthProvider.PROVIDER_ID,
    ],
};

class Welcome extends Component {
    componentDidMount() {
        const { getAuthentication } = this.props;
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
        if (this.props.loggedIn) {
            console.log('redirecting into dashboard');
            return <Redirect to='/user/dashboard' />
        }
        return (
            <div>
                <div className='welcomeSplash'>
                    <div className='wrapper'>
                        <img className='logo bounce-in-fwd' src={logo}></img>
                        <div className='userLoginHome'>
                            {/* <Link className='guestLoginButton' to='guest/dashboard'>guest login</Link>
                            <Link to='/signup'>Sign Up</Link>
                            <Link to='/signinpage'>Sign In</Link> */}
                            <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
                        </div>
                    </div>
                </div>
                <AnimatedBackground />
            </div>
        );
    }
}

export default Welcome;