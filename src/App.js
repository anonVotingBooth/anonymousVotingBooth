import React, { Component } from 'react';
import './App.scss';
import { BrowserRouter as Router, Route, Redirect} from 'react-router-dom';
import Welcome from './components/Welcome';
import Dashboard from './components/Dashboard';
import ViewPolls from './components/ViewPolls';
import firebase from 'firebase';
import 'firebase/auth';
import About from './components/About';

class App extends Component {
    constructor() {
        super();
        this.state = {
            userId: ''
        };
    }

    componentDidMount() {
        const {setAuthentication} = this;
        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                setAuthentication(user);
            } 
        });
    }

    setAuthentication = (userInfo) => {
        this.setState({
            userId: userInfo.uid,
        });
    }

    handleSignOut = () => {
        firebase.auth().signOut();
        this.setState({
            userId: ''
        });
    }

    render() {

        const {
            setAuthentication,
            handleSignOut,
            state: {
                userId
            }
        } = this;
        return (
            <Router basename='/anonymousVotingBooth'>
                <div className='App'>
                    <Route exact path='/' render={() => (<Welcome loggedIn={userId} getAuthentication={setAuthentication}/>)
                    } />
                    <Route exact path='/dashboard' render={() => {
                        if (!userId) {
                            return <Redirect to='/' />
                        }
                        
                        return (<Dashboard signOut={handleSignOut} userId={userId}/>)
                    }} />
                    <Route path='/dashboard/viewpolls' render={() => (<ViewPolls userId={userId}/>)} />
                    <Route path='/about' component={About} />

                </div>
            </Router>
        );
    }
}

export default App;