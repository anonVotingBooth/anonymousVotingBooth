import React, { Component } from 'react';
import firebase from 'firebase';
import '../App.scss';

class Polls extends Component {

  onPollSubmit = (e) => {
    e.preventDefault();
    console.log(e.target.value);
  }

  render() {

    const {
      onPollSubmit
    } = this;

    return (
        <div className="wrapper">
          <ul className='pollsList'>
            <li className='pollItem'>
                <p>gif or jif?</p>
                <button onClick={onPollSubmit} type='button' value='gif'>gif</button>
                <button onClick={onPollSubmit} type='button' value='jif'>jif</button>
            </li>
            <li className='pollItem'>
                <p>pineapple on pizza?</p>
                <button onClick={onPollSubmit} type='button' value='yes'>yes</button>
                <button onClick={onPollSubmit} type='button' value='no'>no</button>
            </li>
            <li className='pollItem'>
                <p>ketchup or mustard?</p>
                <button onClick={onPollSubmit} type='button' value='ketchup'>ketchup</button>
                <button onClick={onPollSubmit} type='button' value='mustard'>mustard</button>
            </li>
            <li className='pollItem'>
                <p>chocolate or vanilla?</p>
                <button onClick={onPollSubmit} type='button' value='chocolate'>chocolate</button>
                <button onClick={onPollSubmit} type='button' value='vanilla'>vanilla</button >
            </li>
            <li className='pollItem'>
                <p>dogs or cats?</p>
                <button onClick={onPollSubmit} type='button' value='dogs'>dogs</button>
                <button onClick={onPollSubmit} type='button' value='cats'>cats</button >
            </li>
          </ul>
        </div>
    );
  };
};

export default Polls;