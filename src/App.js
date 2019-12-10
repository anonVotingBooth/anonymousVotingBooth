import React, { Component } from 'react';
import './App.scss';
import { BrowserRouter as Router, Route, Redirect} from 'react-router-dom';
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
        const {userId} = this.state;
        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                this.setAuthentication(user);
            } 
            else if (userId){
                this.setState({
                    userName: '',
                    userId: ''
                })
            }
        });
    }

    setAuthentication = (userInfo) => {
        if (userInfo.displayName) {
            this.setState({
                userName: userInfo.displayName,
                userId: userInfo.uid,
            });
        }
        else {
            this.setState({
                userId: userInfo.uid
            })
        }
    }

    handleSignOut = () => {
        firebase.auth().signOut();
        this.setState({
            userName: '',
            userId: ''
        });
    }

    render() {
        const {
            setAuthentication,
            handleSignOut,
            state: {
                userName,
                userId
            }
        } = this;
        return (
            <Router>
                <div className='App'>
                    <Route exact path='/' render={() => (<Welcome loggedIn={userId} getAuthentication={setAuthentication}/>)
                    } />
                    <Route path='/signup' component={SignUp} />
                    <Route path='/signinpage' component={SignInPage} />
                    <Route path='/dashboard' render={() => {
                        if (!userId) {
                            return <Redirect to='/' />
                        }
                        return (<Dashboard signOut={handleSignOut} userId={userId}/>)
                        }} />
                    <Route path='/dashboard/create' component={CreateAPoll} />
                </div>
            </Router>
        );
    }
}

export default App;