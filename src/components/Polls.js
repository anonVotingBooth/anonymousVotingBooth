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
                <div className="pollQuestion">
                  <p>gif or jif?</p>
                </div>
                <div className="voteButtons">
                  <button onClick={onPollSubmit} type='button' value='gif'>gif</button>
                  <button onClick={onPollSubmit} type='button' value='jif'>jif</button>
                </div>
            </li>
            <li className='pollItem'>
                <div className="pollQuestion">
                  <p>pineapple on pizza?</p>
                </div>
                <div className="voteButtons">
                  <button onClick={onPollSubmit} type='button' value='yes'>yes</button>
                  <button onClick={onPollSubmit} type='button' value='no'>no</button>
                </div>
            </li>
            <li className='pollItem'>
                <div className="pollQuestion">
                  <p>ketchup or mustard?</p>
                </div>
                <div className="voteButtons">
                  <button onClick={onPollSubmit} type='button' value='ketchup'>ketchup</button>
                  <button onClick={onPollSubmit} type='button' value='mustard'>mustard</button>
                </div>
            </li>
            <li className='pollItem'>
                <div className="pollQuestion">
                	<p>chocolate or vanilla?</p>
                </div>
                <div className="voteButtons">
                  <button onClick={onPollSubmit} type='button' value='chocolate'>chocolate</button>
                  <button onClick={onPollSubmit} type='button' value='vanilla'>vanilla</button>
                </div>
            </li>
            <li className='pollItem'>
                <div className="pollQuestion">
                  <p>dogs or cats?</p>
                </div>
                <div className="voteButtons">
                  <button onClick={onPollSubmit} type='button' value='dogs'>dogs</button>
                  <button onClick={onPollSubmit} type='button' value='cats'>cats</button>
                </div>
            </li>
          </ul>
        </div>
    );
  };
};

export default Polls;