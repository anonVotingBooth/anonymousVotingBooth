import React, { Component } from 'react';
import './App.scss';
import firebase from 'firebase';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
// import GuestLogin from './components/GuestLogin';
import Header from './components/Header';
// import Dashboard from './components/Dashboard';
import Footer from './components/Footer';
import Welcome from './components/Welcome';
import GuestLogin from './components/GuestLogin';
import Dashboard from './components/Dashboard';
import SignUp from './components/SignUp';
import SignInPage from './components/SignInPage';
import CreateAPoll from './components/CreateAPoll';

class App extends Component {
    render() {
        return (
            <Router>
                <div className='App'>
                    <Route exact path='/' component={Welcome} />
                    <Route path='/signup' component={SignUp} />
                    <Route path='/signinpage' component={SignInPage}/>
                    <Route path='/guest/dashboard' component={Dashboard} />
                    <Route path='dashboard/create' component={CreateAPoll} />
                    <Footer />
                </div>
            </Router>
        );
    }
}

export default App;