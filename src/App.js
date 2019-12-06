import React, { Component } from 'react';
import './App.scss';
import firebase from 'firebase';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import GuestLogin from './components/GuestLogin';
import SignUp from './components/SignUp';
import Header from './components/Header';
// import Dashboard from './components/Dashboard';
import Footer from './components/Footer';
import Welcome from './components/Welcome';
import GuestLogin from './components/GuestLogin';
import Dashboard from './components/Dashboard';
import SignUp from './components/SignUp';
import SignInPage from './components/SignInPage';

class App extends Component {
    // constructor() {
    //     super();
    //     this.state = {
    //         signedIn: false,
    //         userId: null,
    //         userEmail: null,
    //         name: null,
    //         verified: null,
    //         userIsNew: false,
    //         isLoading: true            
    //     }
    // }

    // componentDidMount() {
    //     firebase.auth().onAuthStateChanged( (user) => {

    //         if (user &&  this.state.userIsNew) {

    //             user.updateProfile({
    //                 displayName: ''
    //             });

    //             this.setState({
    //                 name: null,
    //                 signedIn: true,
    //                 email: user.email,
    //                 userId: user.uid,
    //                 isLoading: false
    //             })
    //         } else if (user && user.isAnonymous) {
    //             const guestNumberData = firebase.database().ref('/generalConfig');

    //             guestNumberData.once('value').then( (snapshot) => {
    //                 this.setState({
    //                     signedIn: true,
    //                     userId: user.uid,
    //                     email: null,
    //                     isLoading: false,
    //                     name: `guest${snapshot.val().guestNumber}`
    //                 })

    //                 guestNumberData.update({
    //                     guestNumber: snapshot.val().guestNumber + 1
    //                 });
    //             });
    //         } else {
    //             this.setState({
    //                 signedIN: false,
    //                 userId: null,
    //                 introduction: true,
    //                 isLoading: false
    //             })
    //         }
    //     })
    // }



    render() {
        return (
            <Router>
                <div className='App'>
                    <Header />
                    <Route exact path='/' component={Welcome} />
                    <Route path='/signup' component={SignUp} />
                    <Route path='/signinpage' component={SignInPage}/>
                    <Route path='/guest/dashboard' component={Dashboard} />
                    <Footer />
                </div>
            </Router>
        );
    }
}

export default App;