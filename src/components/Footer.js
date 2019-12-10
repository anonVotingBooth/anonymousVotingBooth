import React, { Component } from 'react';

class Footer extends Component {
  render() {

    return (
      <footer>
        <div className='footerContent'>
          <p>copyright &copy; 2019 &nbsp;-&nbsp; all rights reserved </p>
          <ul className='footerLinks'>
            <li><a href="/about">sharon yi,</a></li>
            <li><a href="/about">jasmine carbone,</a></li>
            <li><a href="/about">mehdi pilehvarian,</a></li>
            <li><a href="/about">vincent dang</a></li>
          </ul>
        </div>
      </footer>
    );
  };
};

export default Footer;