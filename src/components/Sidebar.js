import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import '../App.scss';
import Header from './Header';
import firebase from 'firebase';
import 'firebase/auth';

class Sidebar extends Component {
    constructor() {
        super();
        this.state = {
            logOutRedirect: false
        };
    }

    render() {    
        const {handleSignOut} = this.props;

        return (
            <div className={`sideBar${this.props.isSidebarHidden ? ' mobileHidden' : ''}`} >
                <Header />
                <NavLink className='sideBarLinks' to='/dashboard/viewpolls'>view your polls</NavLink>
                <NavLink className='sideBarLinks' to='/dashboard/'>about us</NavLink>
                <NavLink className='sideBarLinks' onClick={handleSignOut} to='/'>log out</NavLink>
            </div>
        );
    };
};

export default Sidebar