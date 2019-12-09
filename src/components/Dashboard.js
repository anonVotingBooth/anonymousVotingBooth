import React, { Component } from 'react';
import Sidebar from './Sidebar';
import CreateAPoll from './CreateAPoll';
import Polls from './Polls';
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
    
    componentDidMount(){
        console.log(this.props.userId);
        console.log(this.props.userName);
    }

    render() {
        return (
            <div className='flexDashboardParent'>
                <Sidebar />
                <div className='dashboard'>
                    <button className='createPollButton' id='createPoll' onClick={this.handleClick}> + </button>
                    {this.state.currentView === 'createPoll' && <CreateAPoll />}
                    <Polls />
                </div>
            </div>
        );
    };
};

export default Dashboard