import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Sidebar extends Component {
    render() {
        
        return (
            <div>
                <NavLink to='/dashboard/createapoll'>Create a poll</NavLink>
            </div>
        );
    };
};

export default Sidebar
