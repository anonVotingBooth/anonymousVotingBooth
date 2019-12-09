import React, { Component } from 'react';
import firebase from './firebase';
import Thanks from './Thanks';

class CreateAPoll extends Component {
  constructor(){
    super();
    this.state = {
      question: '',
      answer1: '',
      answer2: '',
      thanksPopup: null
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
    const pollToAdd = {
      question: this.state.question,
      answer1: this.state.answer1,
      answer2: this.state.answer2,
      votes1: 0,
      votes2: 0
    };
    const publicPollsRef = firebase.database().ref('/publicPolls');
    if(pollToAdd.question !== '') {
      publicPollsRef.push(pollToAdd);
      this.setState({
        question: '',
        answer1: '',
        answer2: '',
        thanksPopup: 'showThankYou',
      });
    }
  }
  // resets form to add more and sets thanks state to null
  resetForm = (e) => {
    this.setState ({
        thanksPopup: null,
    })
  }
  render() {
    return (
      <div className='wrapper'>
        {this.state.thanksPopup !== 'showThankYou' ? 
        <form className='createPoll' id='createPoll' onSubmit={this.handleSubmit}>
          <h2>Add your poll below</h2>
          <label htmlFor='question'></label>
          <input id='question' placeholder='Add your question' type='text' onChange={this.handleChange} value={this.state.question} autoComplete='off' required></input>
          <label htmlFor='answer1'></label>
          <input id='answer1' placeholder='Answer Option One' type='text' onChange={this.handleChange}value={this.state.answer1} autoComplete='off' required></input>
          <label htmlFor='answer2'></label>
          <input id='answer2' placeholder='Answer Option Two' type='text' onChange={this.handleChange}value={this.state.answer2} autoComplete='off' required></input>
          <button className='addPollButton' type='submit'>Add Poll!</button>
        </form> : <Thanks resetForm={this.resetForm}/>
        }
      </div>
    );
  };
};

export default CreateAPoll;