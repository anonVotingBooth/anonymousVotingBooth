import React, { Component } from 'react';
import Sidebar from './Sidebar';
import FooterDashboard from './FooterDashboard'
import firebase from 'firebase';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretDown, faPlus } from '@fortawesome/free-solid-svg-icons'
import '../App.scss';

class ViewPolls extends Component {

  constructor() {
      super();
      this.state = {
          pollQuestions: [],
          currentPoll: [],
          currentView: null,
          hidden: true,
          isSidebarHidden: true,
          pollQuestionRef: firebase.database().ref('/publicPolls')
      }
  }

  componentDidMount() {
    const {pollQuestionRef} = this.state;
    // Going to firebase and check each object (Poll) to see if the first one is checked/voted and storing them into an array
    pollQuestionRef.on('value', fbData => {
      const pollData = fbData.val();
      const pollContent = Object.values(pollData);
      const pollNum = [];

      for (let key in pollData){  
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

  // this handle click shows the create a poll section above 'polls' when clicked. 
  handleClick = (e) => {
      this.setState({
          currentView: e.target.id,
          hidden: false,
      })
  }

  handleSidebarClick = () => {

      const {
          isSidebarHidden
      } = this.state;

      this.setState({
          isSidebarHidden: !isSidebarHidden
      })
  }

  render() {

    const {
        handleClick,
        handleSidebarClick,
        state: {
            hidden,
            isSidebarHidden,
            pollQuestions
        },
        props: {
            signOut,
            userId
        }
    } = this;

    return (
      <div className='flexDashboardParent'>
        <Sidebar handleSignOut={signOut} isSidebarHidden={isSidebarHidden} />
        <FontAwesomeIcon onClick={handleSidebarClick} className="hamburger" icon={faCaretDown} />
        {hidden && <div> <FontAwesomeIcon className="createPollMobile" icon={faPlus} id='createPoll' onClick={handleClick} /> </div>}
        <div className='dashboard'>
            <div className="wrapper">
              <ul className='viewPollsList'>
                {
                  pollQuestions.map((value, index) => {
                    const optionA = value.answer1;
                    const optionB = value.answer2;
                    const totalVotesA = value.votes1;
                    const totalVotesB = value.votes2;
                    const pollQ = value.question;
                    const currentPollQ = index;
                    const pollCreatedBy = value.pollCreatedBy;
                    if (pollCreatedBy === userId) {
                      return (
                        <li key={index} className='pollItem'>
                            <div className="pollQuestion">
                              <p>{pollQ}</p>
                            </div>
                            <div className="voteButtons">
                              <button id={currentPollQ} >
                                {optionA}
                                <p className='showVotes'>
                                  ({totalVotesA})
                                </p>
                              </button>
                              <button id={currentPollQ}>
                                {optionB}
                                <p className='showVotes'>
                                  ({totalVotesB})
                                </p>
                              </button>
                            </div>
                        </li>
                      );
                    }
                  })
                }
              </ul>
            </div>
            <FooterDashboard />
        </div>
      </div>
    );
  };
};

export default ViewPolls;