import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Header from './Header';

class Sidebar extends Component {
    constructor() {
        super();
        this.state = {
            logOutRedirect: false
        };
    }

    render() {
        const {
            handleSignOut,
            isSidebarHidden
        } = this.props;

        return (
            <div className={`sideBar${isSidebarHidden ? ' mobileHidden' : ''}`} >
                <Header />
                <NavLink className='sideBarLinks' to='/dashboard/viewpolls'>view your polls</NavLink>
                <NavLink className='sideBarLinks' to='/about'>about us</NavLink>
                <NavLink className='sideBarLinks' onClick={handleSignOut} to='/'>log out</NavLink>
            </div>
        );
    };
};

export default Sidebar