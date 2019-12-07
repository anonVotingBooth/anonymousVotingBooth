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

const provider = new firebase.auth.GoogleAuthProvider();
const auth = firebase.auth();



class App extends Component {
    constructor() {
        super();
        this.state = {
            user: null
        }
    }

    login = () => {
        firebase.auth().setPersistence(firebase.auth.Auth.Persistence.NONE)

        auth.signInWithPopup(provider)
            .then((result) => {
                const user = result.user;
                this.setState({
                    user
                });
            });
    }

    logout = () => {
        firebase.auth().setPersistence(firebase.auth.Auth.Persistence.NONE)
        auth.signOut()
            .then(() => {
                this.setState({
                    user: null
                });
                window.location('https://accounts.google.com/logout')
            });
    }
    
    componentDidMount() {
        
        auth.onAuthStateChanged((user) => {
            if (user) {
                this.setState({ user });
            }
        });
    }
    
    render() {
        return (
            <Router>
                <div className='App'>
                    <Route exact path='/' component={Welcome} />
                    <Route path='/signup' component={SignUp} />
                    <Route path='/signinpage' component={SignInPage}/>
                    <Route path='/guest/dashboard' component={Dashboard} />
                    <Route path='dashboard/create' component={CreateAPoll} />
                    {this.state.user ? <button onClick={this.logout}>Log Out</button> : <button onClick={this.login}>Log In</button>}
                    <Footer />
                </div>
            </Router>
        );
    }
}

export default App;