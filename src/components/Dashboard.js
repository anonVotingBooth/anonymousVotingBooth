import React, { Component } from 'react';
import Sidebar from './Sidebar';
import CreateAPoll from './CreateAPoll';
import Polls from './Polls';
import ViewPolls from './ViewPolls';
import '../App.scss';
import firebase from 'firebase';

class Dashboard extends Component {
    render() {
        return (
            <div className='wrapper'>
            <Sidebar />
            <CreateAPoll />
            <Polls />
            </div>
        );
    };
};

export default Dashboard