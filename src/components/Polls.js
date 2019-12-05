import React, { Component } from 'react';
import firebase from 'firebase';

class Polls extends Component {
  constructor() {
      super();
      this.state = {
        userInput: ''
      };
  }

  onPollSubmit = (e) => {
    e.preventDefault();
    console.log(e.target.value)
  }

  render() {

    const {onPollSubmit} = this;

    return (
        <ul className='pollsList'>
          <li className='pollItem'>
            <p>gif or jif?</p>
            <form onSubmit={onPollSubmit}>
              <button value='gif'>gif</button>
              <button value='jif'>jif</button>
              <button type='submit'>Submit</button>
            </form>
          </li>
          <li className='pollItem'>
              <p></p>
              <form onSubmit={onPollSubmit}>
                <button></button>
                <button></button>
                <button type='submit'>Submit</button>
              </form>
          </li>
          <li className='pollItem'>
              <p></p>
              <form onSubmit={onPollSubmit}>
                <button></button>
                <button></button>
                <button type='submit'>Submit</button>
              </form>
          </li>
          <li className='pollItem'>
              <p></p>
              <form onSubmit={onPollSubmit}>
                <button></button>
                <button></button>
                <button type='submit'>Submit</button>
              </form>
          </li>
          <li className='pollItem'>
              <p></p>
              <form onSubmit={onPollSubmit}>
                <button></button>
                <button></button>
                <button type='submit'>Submit</button>
              </form>
          </li>
        </ul>
    );
  };
};

export default Polls;