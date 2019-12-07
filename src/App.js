import React, { Component } from 'react';
import './App.scss';
<<<<<<< HEAD
import firebase from 'firebase';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Header from './components/Header';
=======
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
// import Header from './components/Header';
import Footer from './components/Footer';
>>>>>>> master
import Welcome from './components/Welcome';
// import GuestLogin from './components/GuestLogin';
import Dashboard from './components/Dashboard';
import SignUp from './components/SignUp';
import SignInPage from './components/SignInPage';
import CreateAPoll from './components/CreateAPoll';
import Footer from './components/Footer';

<<<<<<< HEAD
const provider = new firebase.auth.GoogleAuthProvider();
const auth = firebase.auth();



=======
>>>>>>> master
class App extends Component {

<<<<<<< HEAD
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
    
=======
>>>>>>> master
    render() {
        return (
            <Router>
                <div className='App'>
                    <Route exact path='/' component={Welcome} />
                    <Route path='/signup' component={SignUp} />
                    <Route path='/signinpage' component={SignInPage} />
                    <Route path='/guest/dashboard' component={Dashboard} />
                    <Route path='dashboard/create' component={CreateAPoll} />
                    <Footer />
                </div>
            </Router>
        );
    }
}

export default App;