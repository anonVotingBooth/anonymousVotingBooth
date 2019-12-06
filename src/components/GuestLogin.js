import React, { Component } from 'react';
import SubmitButton from './SubmitButton';
import { Link } from 'react-router-dom';

class GuestLogin extends Component {
  render() {

    return (
        <div>
          <Link className='guestLoginButton' to='/guestlogin/dashboard'>dashboard</Link>
        </div>
    );
  };
};

export default GuestLogin