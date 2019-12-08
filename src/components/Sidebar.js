import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import '../App.scss';
import Header from './Header';

class Sidebar extends Component {
    render() {
        
        return (
            <div className='sideBar'>
                <Header />
                {/* <NavLink className="sideBarLinks" to='/'>profile</NavLink> */}
                <NavLink className='sideBarLinks' to='/dashboard/viewpolls'>view your polls</NavLink>
                <NavLink className='sideBarLinks' to='/'>log out</NavLink>
            </div>
        );
    };
};

export default Sidebar