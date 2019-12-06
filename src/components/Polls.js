import React, { Component } from 'react';
import firebase from './firebase';
import '../App.scss';

class Polls extends Component {
  constructor() {
      super();
      this.state = {
          pollQuestions: [],
          currentPoll: [],
          answer1: 0,
          answer2: 0
      };
  }

  onPollSubmit = (e) => {
    e.preventDefault();
    console.log(e.target.value);
  }

  componentDidMount() {
    const pollQuestionRef = firebase.database().ref('users/guests/polls');

    pollQuestionRef.on('value', fbData => {
      const pollData = fbData.val();
      const pollContent = Object.values(pollData);
      const pollNum = [];
      for (let key in pollData){
        const pollNumbers = {
          pNumber: key,
          pName: pollData[key],
          voted: false
        }
        pollNum.push(pollNumbers);
      }
      this.setState({
        pollQuestions: pollContent,
        currentPoll: pollNum
      });
    });
  }

  render() {
    const {
      onPollSubmit,
      state: {
        currentPoll
      }
    } = this;

    return (
        <div className="wrapper">
          <ul className='pollsList'>
            {
              this.state.pollQuestions.map((value, index) => {
                const optionA = value.answer1;
                const optionB = value.answer2;
                const totalVotesA = value.votes1;
                const totalVotesB = value.votes2;
                const pollQ = value.question;
                const 
                const voted = currentPoll[index].voted;
              })
            }
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