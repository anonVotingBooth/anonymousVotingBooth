import React, { Component } from 'react';
import SubmitButton from './SubmitButton';
import { Link } from 'react-router-dom';

class GuestLogin extends Component {
  render() {

    return (
        <div >
          <Link to='/guestlogin/dashboard' className="guestLogin">dashboard</Link>
        </div>
    );
  };
};

export default GuestLogin