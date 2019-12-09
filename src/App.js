import React, { Component } from 'react';
import './App.scss';
import { BrowserRouter as Router, Route} from 'react-router-dom';
// import Header from './components/Header';
import Footer from './components/Footer';
import Welcome from './components/Welcome';
// import GuestLogin from './components/GuestLogin';
import Dashboard from './components/Dashboard';
import SignUp from './components/SignUp';
import SignInPage from './components/SignInPage';
import CreateAPoll from './components/CreateAPoll';
import AnimatedBackground from './components/AnimatedBackground';

class App extends Component {
    render() {
        return (
            <Router>
                <div className='App'>
                    <Route exact path='/' component={Welcome} />
                    <Route path='/signup' component={SignUp} />
                    <Route path='/signinpage' component={SignInPage} />
                    <Route path="/user/dashboard" component={Dashboard} />
                    <Route path='/guest/dashboard' component={Dashboard} />
                    <Route path='dashboard/create' component={CreateAPoll} /> 
                    <Footer />
                    <AnimatedBackground />
                </div>
            </Router>
        );
    }
}

export default App;