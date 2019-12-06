import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import '../App.scss';

class Sidebar extends Component {
    render() {
        
        return (
            <div className='sideBar'>
                {/* <NavLink className="sideBarLinks" to='/'>profile</NavLink> */}
                <NavLink className="sideBarLinks" to='/dashboard/createapoll'>create a poll</NavLink>
                <NavLink className="sideBarLinks" to='/dashboard/viewpolls'>view your polls</NavLink>
                <NavLink className="sideBarLinks" to='/'>log out</NavLink>
            </div>
        );
    };
};

export default Sidebar