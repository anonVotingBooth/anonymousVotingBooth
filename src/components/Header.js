import React, { Component } from 'react';
import logo from './../assets/logo.png'

class Header extends Component {
  render() {

    return (
      <div>
        <img className='logo' src={logo}></img>
      </div>
    );
  };
};

export default Header;