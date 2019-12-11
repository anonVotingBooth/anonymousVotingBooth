import React, { Component } from 'react';
import firebase from './firebase';
import 'firebase/auth';

class Polls extends Component {
  constructor() {
    super();
    this.state = {
      pollQuestions: [],
      currentPoll: [],
      answer1TotalVotes: 0,
      answer2TotalVotes: 0,
      pollQuestionRef: firebase.database().ref('/publicPolls')
    };
  }

  componentDidMount() {
    const { pollQuestionRef } = this.state;
    // Going to firebase and check each object (Poll) to see if the first one is checked/voted and storing them into an array
    pollQuestionRef.on('value', fbData => {
      const pollData = fbData.val();
      const pollContent = Object.values(pollData);
      const pollNum = [];

      for (let key in pollData) {
        const pollNumbers = {
          pNumber: key,
          pName: pollData[key],
        }
        pollNum.push(pollNumbers);
      }
      this.setState({
        pollQuestions: pollContent,
        currentPoll: pollNum,
      });
    });
  }

  // Incrementing the option one every time a user votes for option one in any vote poll
  incrementAnswer1Count = (e) => {
    e.preventDefault();
    const { id } = e.currentTarget;
    const {
      state: {
        currentPoll,
        pollQuestionRef,
      },
      props: {
        userId
      }
    } = this;

    const usersVotedList = currentPoll[id].pName.usersVotedList;
    const userList = [];

    for (let user in usersVotedList) {
      userList.push(usersVotedList[user])
    }
    if (!userList.includes(userId)) {
      const vote = currentPoll[id].pName.votes1 + 1;
      pollQuestionRef.child(`${currentPoll[id].pNumber}`).child('usersVotedList').push(userId);
      pollQuestionRef.child(`${currentPoll[id].pNumber}`).update({
        votes1: vote,
      });
      this.setState({
        answer1TotalVotes: vote,
      });
    }
  }

  // Incrementing the option two every time a user votes for option two in any vote poll
  incrementAnswer2Count = (e) => {
    e.preventDefault();
    const { id } = e.currentTarget;
    const { currentPoll, pollQuestionRef } = this.state;
    const { userId } = this.props;
    const usersVotedList = currentPoll[id].pName.usersVotedList;
    const userList = [];
    for (let user in usersVotedList) {
      userList.push(usersVotedList[user])
    }
    if (!userList.includes(userId)) {
      currentPoll[id].voted = true;
      const vote = currentPoll[id].pName.votes2 + 1;
      pollQuestionRef.child(`${currentPoll[id].pNumber}`).child('usersVotedList').push(userId);
      pollQuestionRef.child(`${currentPoll[id].pNumber}`).update({
        votes2: vote,
      });
      this.setState({
        answer2TotalVotes: vote,
      });
    }
  }

  render() {
    const {
      incrementAnswer1Count,
      incrementAnswer2Count,
      state: {
        pollQuestions,
        currentPoll
      },
      props: {
        userId
      }
    } = this;

    return (
      <div className="wrapper">
        <ul className='pollsList'>
          {
            pollQuestions.map((value, index) => {
              const optionA = value.answer1;
              const optionB = value.answer2;
              const totalVotesA = value.votes1;
              const totalVotesB = value.votes2;
              const pollQ = value.question;
              const currentPollQ = index;
              let voted = currentPoll[index].voted;
              const usersVotedList = currentPoll[index].pName.usersVotedList;
              const userList = [];
              for (let user in usersVotedList) {
                userList.push(usersVotedList[user])
              }
              if (userList.includes(userId)) {
                voted = true;
              }
              return (
                <li key={index} className='pollItem'>
                  <div className="pollQuestion">
                    <p>{pollQ}</p>
                  </div>
                  <div className="voteButtons">
                    <button
                      id={currentPollQ}
                      onClick={incrementAnswer1Count}
                      value='votes1'
                      disabled={voted ? true : false}
                    >
                      <p className="options">{optionA}</p>

                      <p className={voted ? 'showVotes' : null}>
                        {totalVotesA} votes
                          </p>
                    </button>
                    <button
                      id={currentPollQ}
                      onClick={incrementAnswer2Count}
                      value='votes2'
                      disabled={voted ? true : false}
                    >
                      <p className="options">{optionB}</p>
                      <p className={voted ? 'showVotes' : null}>
                        {totalVotesB} votes
                          </p>
                    </button>
                  </div>
                </li>
              );
            })
          }
        </ul>
      </div>
    );
  };
};

export default Polls;