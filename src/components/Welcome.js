import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import GuestLogin from './GuestLogin';
import Dashboard from './Dashboard';
import SignUp from './SignUp';
import SignInPage from './SignInPage';

class Welcome extends Component {
    render() {
        return (
            <Router>
                <div className='welcomeSplash'>
                    <div className='wrapper'>
                        <h1>Voted</h1>
                        <div className='userLoginHome'>
                            <Link to='/guestlogin'>Guest Log In</Link>
                            <Route exact path='/guestlogin' component={GuestLogin} />
                            <Route path='/guestlogin/dashboard' component={Dashboard} />
                            <Link to='/signup'>Sign Up</Link>
                            <Route path='/signup' component={SignUp} />
                            <Link to='/signinpage'>Sign In</Link>
                            <Route path='/signinpage' component={SignInPage}/>
                        </div>
                    </div>
                </div>
            </Router>
        );
    }
}

export default Welcome;