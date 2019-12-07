import React, { Component } from 'react';
import './App.scss';
import firebase from 'firebase';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Header from './components/Header';
import Welcome from './components/Welcome';
import GuestLogin from './components/GuestLogin';
import Dashboard from './components/Dashboard';
import SignUp from './components/SignUp';
import SignInPage from './components/SignInPage';
import CreateAPoll from './components/CreateAPoll';
import Footer from './components/Footer';

const provider = new firebase.auth.GoogleAuthProvider();
const auth = firebase.auth();

class App extends Component {
    constructor() {
        super();
        this.state = {
            user: null,
            windowLogOut: ''
        }
    }

    login = () => {
        auth.signInWithPopup(provider).then(function() {
            
        })
    }

    logout = () => {
        firebase.auth().signOut().then(() => {
            firebase.auth().setPersistence(firebase.auth.Auth.Persistence.NONE)
                .then(() => {
                    this.setState({
                        user: null,
                        windowLogOut: "https://mail.google.com/mail/u/0/?logout&hl=en"
                    });
                    return alert('you logged out');
                });
        })}

    
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