import React, { Component } from 'react';
import firebase from './firebase';

class CreateAPoll extends Component {
  constructor(){
    super();
    this.state = {
      pollQuestion: '',
      pollAnswerOne: '',
      pollAnswerTwo: ''
    }
  }
    componentDidMount() {
      const dbRef = firebase.database().ref();
      dbRef.on('value', (response) => {
        const poll = response.val();
        const newPoll = []
          for ( let key in poll ) {
            const eachPoll = {
              pollID: key,
              pollName: poll[key]
            }
          newPoll.push(eachPoll)
          }
          this.setState({
            pollList: newPoll
          });
      });
    }
    handleChange = (e) => {
      this.setState({
        [e.target.id]: e.target.value,
      })
    }
    handleSubmit = (e) => {
      e.preventDefault();  
        const pollToAdd = {
          pollQuestion: this.state.pollQuestion,
          pollAnswerOne: this.state.pollAnswerOne,
          pollAnswerTwo: this.state.pollAnswerTwo
        };
      const dbRef = firebase.database().ref();
    }
  

  render() {
    return (
      <div className='wrapper'>
        <form id='addPoll' onSubmit={this.handleSubmit}>
          <h2>Add your poll below</h2>
          <label htmlFor="pollQuestion"></label>
          <input id="pollQuestion" placeholder="Add your question" type="text" onChange={this.handleChange} required></input>
          <label htmlFor="pollAnswerOne"></label>
          <input id="pollAnswerOne" placeholder="Answer Option One" type="text" onChange={this.handleChange} required></input>
          <label htmlFor="pollAnswerTwo"></label>
          <input id="pollAnswerTwo" placeholder="Answer Option Two" type="text" onChange={this.handleChange} required></input>
          <button type="submit">Add Poll!</button>
        </form>
      </div>
    );
  };
};

export default CreateAPoll;