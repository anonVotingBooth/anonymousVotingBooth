import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import logo from './../assets/logo.png'

class Welcome extends Component {
    render() {
        return (
                <div className='welcomeSplash'>
                    <div className='wrapper'>
                        <div className='logo'>
                            <img className='logo' src={logo}></img>
                        </div>
                        <div className='userLoginHome'>
                            <Link className='guestLoginButton' to='/guestlogin'>guest login</Link>
                            <Link to='/signup'>Sign Up</Link>
                            <Link to='/signinpage'>Sign In</Link>
                        </div>
                            
                    </div>
                </div>
           
        );
    }
}

export default Welcome;