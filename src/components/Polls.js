import React, { Component } from 'react';
import firebase from 'firebase';

class Polls extends Component {
  constructor() {
      super();
      this.state = {
        userInput: ''
      };
  }



  render() {
    return (
        <ul className='pollsList'>
          <li className='pollItem'>
            <p>gif or jif?</p>
            <form action="">
              <button>gif</button>
              <button>jif</button>
              <button type=''>Submit</button>
            </form>
          </li>
          <li className='pollItem'>

          </li>
          <li className='pollItem'>

          </li>
          <li className='pollItem'>

          </li>
          <li className='pollItem'>

          </li>
        </ul>
    );
  };
};

export default Polls;