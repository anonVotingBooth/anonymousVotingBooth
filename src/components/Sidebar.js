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

    handleSignOut = () => {
        firebase.auth().signOut().then(() => {
        });
    }

    render() {    
        const {handleSignOut} = this;

        return (
            <div className='sideBar'>
                <Header />
                {/* <NavLink className="sideBarLinks" to='/'>profile</NavLink> */}
                <NavLink className='sideBarLinks' to='/dashboard/viewpolls'>view your polls</NavLink>
                <NavLink className='sideBarLinks' onClick={handleSignOut} to='/'>log out</NavLink>
            </div>
        );
    };
};

export default Sidebar