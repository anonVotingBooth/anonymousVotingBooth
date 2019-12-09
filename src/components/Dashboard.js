import React, { Component } from 'react';
import Sidebar from './Sidebar';
import CreateAPoll from './CreateAPoll';
import Polls from './Polls';
import { BrowserRouter as Redirect } from 'react-router-dom';
// import ViewPolls from './ViewPolls';
import '../App.scss';
import firebase from 'firebase';
import 'firebase/auth';

class Dashboard extends Component {
    constructor(){
        super();
        this.state = {
            currentView: null
        }
    }
    // this handle click shows the create a poll section above 'polls' when clicked. 
    handleClick = (e) => {
        this.setState({
            currentView: e.target.id
        })
    }

    render() {
        return (
            this.props.loggedIn === false 
            ? <div className='flexDashboardParent'>
                <Sidebar />
                <div className='dashboard'>
                    <button className='createPollButton' id='createPoll' onClick={this.handleClick}> + </button>
                    {this.state.currentView === 'createPoll' && <CreateAPoll />}
                    <Polls />
                </div>
            </div>
            : <Redirect to='/' />
        );  
    };
};

export default Dashboard