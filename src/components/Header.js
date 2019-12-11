import React, { Component } from 'react';
import logo from './../assets/logo.svg'

class Header extends Component {
  render() {

    return (
      <div>
        <a href='/dashboard'><img className='logo' src={logo} alt='logo for voted app'></img></a>
      </div>
    );
  };
};

export default Header;