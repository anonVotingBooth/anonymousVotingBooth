import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import '../App.scss';

class Sidebar extends Component {
    render() {
        
        return (
            <div className='sideBar'>
                <NavLink to='/dashboard/createapoll'>Create a poll</NavLink>
            </div>
        );
    };
};

export default Sidebar
