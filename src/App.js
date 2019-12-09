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
import firebase from 'firebase';
import 'firebase/auth';

class App extends Component {
    constructor() {
        super();
        this.state = {
            userName: '',
            userId: ''
        };
    }

    componentDidMount() {
        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                console.log('auth state changed user');
                this.setAuthentication(user);
            } 
        });
    }

    setAuthentication = (userInfo) => {
        this.setState({
            userName: userInfo.displayName,
            userId: userInfo.uid,
        });
        console.log(userInfo.displayName, userInfo.uid);
    }

    render() {
        const {
            setAuthentication,
            state: {
                userName,
                userId
            }
        } = this;

        return (
            <Router>
                <div className='App'>
                    <Route exact path='/' render={() => (<Welcome loggedIn={!userName} getAuthentication={setAuthentication}/>)} />
                    <Route path='/signup' component={SignUp} />
                    <Route path='/signinpage' component={SignInPage} />
                    <Route path='/user/dashboard' render={() => (<Dashboard loggedIn={!userName} userName={userName} userId={userId}/>)} />
                    <Route path='/guest/dashboard' component={Dashboard} />
                    <Route path='/dashboard/create' component={CreateAPoll} />
                    <Footer />
                </div>
            </Router>
        );
    }
}

export default App;