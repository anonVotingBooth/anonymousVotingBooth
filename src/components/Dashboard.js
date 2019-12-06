import React, { Component } from 'react';
import Sidebar from './Sidebar';
import CreateAPoll from './CreateAPoll';
import Polls from './Polls';
import ViewPolls from './ViewPolls';

class Dashboard extends Component {
    render() {
        
        return (
            <div>
            <Sidebar />
            <Polls />
            </div>
        );
    };
};

export default Dashboard