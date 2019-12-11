import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import logo from './../assets/logo.svg';
import firebase from 'firebase';
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import * as firebaseui from 'firebaseui';
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

        const {loggedIn} = this.props;

        if (loggedIn) {
            return <Redirect to='/dashboard' />
        }
        
        return (
            <div>
                <div className='welcomeSplash'>
                    <div className='wrapper'>
                        <img className='logo bounce-in-fwd' src={logo}></img>
                        <p>Hey there! Welcome to blaajsdfo  sadofjosf  sdfjosjdf sodif sodfifo sf osdifo asfd sdkf sjdfih fsofd jofhsdof of sodf osf osf saof eefsof</p>
                        <div className='userLoginHome'>
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