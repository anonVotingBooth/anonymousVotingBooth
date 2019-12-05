import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import GuestLogin from './GuestLogin';
import Dashboard from './Dashboard';

class Welcome extends Component {
    render() {
        return (
            <Router>
                <div className="welcomeSplash">
                    <div className="wrapper">
                        <h1>Voted</h1>
                        <div className='userLoginHome'>
                            <Route exact path='/guestlogin' component={GuestLogin} />
                            <Route path="/guestlogin/dashboard" component={Dashboard} />
                        </div>
                    </div>
                </div>
            </Router>
        );
    }
}

export default Welcome;