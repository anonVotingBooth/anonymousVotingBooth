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
            user: null,
            windowLogOut: ''
        }
    }

    login = () => {
        firebase.auth().signIn().then(() => {
            firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL)
                .then(() => {
                    const provider = new firebase.auth.GoogleAuthProvider();
                    return firebase.auth().signInWithRedirect(provider);
                });
        })
    }

    // logout = () => {
    //     auth.signOut()
    //         .then(() => {
    //             this.setState({
    //                 user: null
    //             });
    //         });
    // }


    logout = () => {
        firebase.auth().signOut().then(() => {
            firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL)
                .then(() => {
                    this.setState({
                        user: null,
                        windowLogOut: "https://mail.google.com/mail/u/0/?logout&hl=en"

                    });
                    const provider = new firebase.auth.GoogleAuthProvider();
                    return firebase.auth().signInWithRedirect(provider);
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