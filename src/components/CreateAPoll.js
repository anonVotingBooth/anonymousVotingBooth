import React, { Component } from 'react';
import firebase from './firebase';

class CreateAPoll extends Component {
  constructor(){
    super();
    this.state = {
      question: '',
      answer1: '',
      answer2: ''
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
      console.log(e.target.value)
      this.setState({
        [e.target.id]: e.target.value,
      })
    }
    handleSubmit = (e) => {
      e.preventDefault();  
      console.log('clicked')
        const pollToAdd = {
          question: this.state.question,
          answer1: this.state.answer1,
          answer2: this.state.answer2,
          votes1: 0,
          votes2: 0
        };
      const dbRef = firebase.database().ref('/users/guests/polls');
        if(pollToAdd.question !== '') {
          dbRef.push(pollToAdd)
    }
    }
  render() {
    return (
      <div className='createPoll'>
        <form id='addPoll' onSubmit={this.handleSubmit}>
          <h2>Add your poll below</h2>
          <label htmlFor="question"></label>
          <input id="question" placeholder="Add your question" type="text" onChange={this.handleChange} required></input>
          <label htmlFor="answer1"></label>
          <input id="answer1" placeholder="Answer Option One" type="text" onChange={this.handleChange} required></input>
          <label htmlFor="answer2"></label>
          <input id="answer2" placeholder="Answer Option Two" type="text" onChange={this.handleChange} required></input>
          <button type="submit">Add Poll!</button>
        </form>
      </div>
    );
  };
};

export default CreateAPoll;